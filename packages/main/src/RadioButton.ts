import { isDesktop } from "@ui5/webcomponents-base/dist/Device.js";
import { getFeature } from "@ui5/webcomponents-base/dist/FeaturesRegistry.js";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import { getEffectiveAriaLabelText } from "@ui5/webcomponents-base/dist/util/AriaLabelHelper.js";
import {
	isSpace,
	isEnter,
	isDown,
	isLeft,
	isUp,
	isRight,
} from "@ui5/webcomponents-base/dist/Keys.js";
import Label from "./Label.js";
import RadioButtonGroup from "./RadioButtonGroup.js";
import WrappingType from "./types/WrappingType.js";
import type { IFormElement } from "./features/InputElementsFormSupport.js";
import type FormSupport from "./features/InputElementsFormSupport.js";

// Template
import RadioButtonTemplate from "./generated/templates/RadioButtonTemplate.lit.js";

// i18n
import {
	VALUE_STATE_ERROR,
	VALUE_STATE_WARNING,
	VALUE_STATE_SUCCESS,
	VALUE_STATE_INFORMATION,
} from "./generated/i18n/i18n-defaults.js";

// Styles
import radioButtonCss from "./generated/themes/RadioButton.css.js";

let isGlobalHandlerAttached = false;
let activeRadio: RadioButton;

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-radio-button</code> component enables users to select a single option from a set of options.
 * When a <code>ui5-radio-button</code> is selected by the user, the
 * <code>change</code> event is fired.
 * When a <code>ui5-radio-button</code> that is within a group is selected, the one
 * that was previously selected gets automatically deselected. You can group radio buttons by using the <code>name</code> property.
 * <br>
 * <b>Note:</b> If <code>ui5-radio-button</code> is not part of a group, it can be selected once, but can not be deselected back.
 *
 * <h3>Keyboard Handling</h3>
 *
 * Once the <code>ui5-radio-button</code> is on focus, it might be selected by pressing the Space and Enter keys.
 * <br>
 * The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group,
 * while TAB and SHIFT + TAB can be used to enter or leave the radio button group.
 * <br>
 * <b>Note:</b> On entering radio button group, the focus goes to the currently selected radio button.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/RadioButton";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webc.main.RadioButton
 * @extends sap.ui.webc.base.UI5Element
 * @tagname ui5-radio-button
 * @public
 */
@customElement({
	tag: "ui5-radio-button",
	languageAware: true,
	renderer: litRender,
	template: RadioButtonTemplate,
	styles: radioButtonCss,
	dependencies: [Label],
})
/**
 * Fired when the component checked state changes.
 *
 * @event sap.ui.webc.main.RadioButton#change
 * @public
 * @since 1.0.0-rc.15
 */
@event("change")

class RadioButton extends UI5Element implements IFormElement {
	/**
	 * Defines whether the component is disabled.
	 * <br><br>
	 * <b>Note:</b> A disabled component is completely noninteractive.
	 *
	 * @type {boolean}
	 * @defaultvalue false
	 * @name sap.ui.webc.main.RadioButton.prototype.disabled
	 * @public
	 */
	@property({ type: Boolean })
	disabled!: boolean;

	/**
	 * Defines whether the component is read-only.
	 * <br><br>
	 * <b>Note:</b> A read-only component is not editable,
	 * but still provides visual feedback upon user interaction.
	 *
	 * @type {boolean}
	 * @defaultvalue false
	 * @name sap.ui.webc.main.RadioButton.prototype.readonly
	 * @public
	 */
	@property({ type: Boolean })
	readonly!: boolean;

	/**
	 * Defines whether the component is required.
	 *
	 * @type {boolean}
	 * @defaultvalue false
	 * @name sap.ui.webc.main.RadioButton.prototype.required
	 * @public
	 * @since 1.9.0
	 */
	@property({ type: Boolean })
	required!: boolean;

	/**
	 * Defines whether the component is checked or not.
	 * <br><br>
	 * <b>Note:</b> The property value can be changed with user interaction,
	 * either by clicking/tapping on the component,
	 * or by using the Space or Enter key.
	 *
	 * @type {boolean}
	 * @defaultvalue false
	 * @formEvents change
	 * @formProperty
	 * @name sap.ui.webc.main.RadioButton.prototype.checked
	 * @public
	 * @since 1.0.0-rc.15
	 */
	@property({ type: Boolean })
	checked!: boolean;

	/**
	 * Defines the text of the component.
	 *
	 * @type  {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.main.RadioButton.prototype.text
	 * @public
	 */
	@property()
	text!: string;

	/**
	 * Defines the value state of the component.
	 *
	 * @type {sap.ui.webc.base.types.ValueState}
	 * @defaultvalue "None"
	 * @name sap.ui.webc.main.RadioButton.prototype.valueState
	 * @public
	 */
	@property({ type: ValueState, defaultValue: ValueState.None })
	valueState!: `${ValueState}`;

	/**
	 * Defines the name of the component.
	 * Radio buttons with the same <code>name</code> will form a radio button group.
	 *
	 * <br><br>
	 * <b>Note:</b>
	 * The selection can be changed with <code>ARROW_UP/DOWN</code> and <code>ARROW_LEFT/RIGHT</code> keys between radio buttons in same group.
	 *
	 * <br><br>
	 * <b>Note:</b>
	 * Only one radio button can be selected per group.
	 *
	 * <br><br>
	 * <b>Important:</b> For the <code>name</code> property to have effect when submitting forms, you must add the following import to your project:
	 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
	 *
	 * <br><br>
	 * <b>Note:</b> When set, a native <code>input</code> HTML element
	 * will be created inside the component so that it can be submitted as
	 * part of an HTML form.
	 *
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.main.RadioButton.prototype.name
	 * @public
	 */
	@property()
	name!: string;

	/**
	 * Defines the form value of the component.
	 * When a form with a radio button group is submitted, the group's value
	 * will be the value of the currently selected radio button.
	 * <br>
	 * <b>Important:</b> For the <code>value</code> property to have effect, you must add the following import to your project:
	 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
	 *
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.main.RadioButton.prototype.value
	 * @public
	 */
	@property()
	value!: string;

	/**
	 * Defines whether the component text wraps when there is not enough space.
	 * <br><b>Note:</b> for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
	 *
	 * @type {sap.ui.webc.main.types.WrappingType}
	 * @defaultvalue "None"
	 * @name sap.ui.webc.main.RadioButton.prototype.wrappingType
	 * @public
	 */
	@property({ type: WrappingType, defaultValue: WrappingType.None })
	wrappingType!: `${WrappingType}`;

	/**
	 * Defines the accessible ARIA name of the component.
	 *
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.main.RadioButton.prototype.accessibleName
	 * @public
	 * @since 1.6.0
	 */
	@property()
	accessibleName!: string;

	/**
	 * Defines the IDs of the elements that label the component.
	 *
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.main.RadioButton.prototype.accessibleNameRef
	 * @public
	 * @since 1.1.0
	 */
	@property()
	accessibleNameRef!: string;

	@property({ defaultValue: "-1", noAttribute: true })
	_tabIndex!: string;

	/**
	 * Defines the active state (pressed or not) of the component.
	 * @defaultvalue false
	 * @private
	 */
	@property({ type: Boolean })
	active!: boolean;

	/**
	 * The slot is used to render native <code>input</code> HTML element within Light DOM to enable form submit,
	 * when <code>name</code> property is set.
	 * @type {HTMLElement[]}
	 * @slot
	 * @private
	 */
	@slot()
	formSupport!: Array<HTMLElement>;

	_deactivate: () => void;
	_name!: string;
	_checked!: boolean;

	static i18nBundle: I18nBundle;

	constructor() {
		super();

		this._deactivate = () => {
			if (activeRadio) {
				activeRadio.active = false;
			}
		};

		if (!isGlobalHandlerAttached) {
			document.addEventListener("mouseup", this._deactivate);
			isGlobalHandlerAttached = true;
		}
	}

	static async onDefine() {
		RadioButton.i18nBundle = await getI18nBundle("@ui5/webcomponents");
	}

	onBeforeRendering() {
		this.syncGroup();

		this._enableFormSupport();
	}

	onExitDOM() {
		this.syncGroup(true);
	}

	syncGroup(forceRemove?: boolean) {
		const oldGroup = this._name;
		const currentGroup = this.name;
		const oldChecked = this._checked;
		const currentChecked = this.checked;

		if (forceRemove) {
			RadioButtonGroup.removeFromGroup(this, oldGroup);
		}

		if (currentGroup !== oldGroup) {
			if (oldGroup) {
				// remove the control from the previous group
				RadioButtonGroup.removeFromGroup(this, oldGroup);
			}

			if (currentGroup) {
				// add the control to the existing group
				RadioButtonGroup.addToGroup(this, currentGroup);
			}
		} else if (currentGroup) {
			RadioButtonGroup.enforceSingleSelection(this, currentGroup);
		}

		if (this.name && currentChecked !== oldChecked) {
			RadioButtonGroup.updateTabOrder(this.name);
		}

		this._name = this.name;
		this._checked = this.checked;
	}

	_enableFormSupport() {
		const formSupport = getFeature<typeof FormSupport>("FormSupport");
		if (formSupport) {
			formSupport.syncNativeHiddenInput(this, (element: IFormElement, nativeInput: HTMLInputElement) => {
				nativeInput.value = element.value as string;
				nativeInput.type = "radio";
				nativeInput.checked = element.checked!;
			});
		} else if (this.value) {
			console.warn(`In order for the "value" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`); // eslint-disable-line
		}
	}

	_onclick() {
		return this.toggle();
	}

	_handleDown(e: KeyboardEvent) {
		const currentGroup = this.name;

		if (!currentGroup) {
			return;
		}

		e.preventDefault();
		RadioButtonGroup.selectNextItem(this, currentGroup);
	}

	_handleUp(e: KeyboardEvent) {
		const currentGroup = this.name;

		if (!currentGroup) {
			return;
		}

		e.preventDefault();
		RadioButtonGroup.selectPreviousItem(this, currentGroup);
	}

	_onkeydown(e: KeyboardEvent) {
		if (isSpace(e)) {
			this.active = true;
			return e.preventDefault();
		}

		if (isEnter(e)) {
			this.active = true;
			return this.toggle();
		}

		const isRTL = this.effectiveDir === "rtl";

		if (isDown(e) || (!isRTL && isRight(e)) || (isRTL && isLeft(e))) {
			this._handleDown(e);
		}

		if (isUp(e) || (!isRTL && isLeft(e)) || (isRTL && isRight(e))) {
			this._handleUp(e);
		}
	}

	_onkeyup(e: KeyboardEvent) {
		if (isSpace(e)) {
			this.toggle();
		}

		this.active = false;
	}

	_onmousedown() {
		this.active = true;
		activeRadio = this; // eslint-disable-line
	}

	_onmouseup() {
		this.active = false;
	}

	_onfocusout() {
		this.active = false;
	}

	toggle() {
		if (!this.canToggle()) {
			return this;
		}

		if (!this.name) {
			this.checked = !this.checked;
			this.fireEvent("change");
			return this;
		}

		RadioButtonGroup.selectItem(this, this.name);
		return this;
	}

	canToggle() {
		return !(this.disabled || this.readonly || this.checked);
	}

	get classes() {
		return {
			inner: {
				"ui5-radio-inner--hoverable": !this.disabled && !this.readonly && isDesktop(),
			},
		};
	}

	get effectiveAriaDisabled() {
		return this.disabled ? "true" : null;
	}

	get ariaLabelText() {
		return [getEffectiveAriaLabelText(this), this.text].filter(Boolean).join(" ");
	}

	get effectiveAriaDescribedBy() {
		return this.hasValueState ? `${this._id}-descr` : undefined;
	}

	get hasValueState() {
		return this.valueState !== ValueState.None;
	}

	get valueStateText() {
		switch (this.valueState) {
		case ValueState.Error:
			return RadioButton.i18nBundle.getText(VALUE_STATE_ERROR);
		case ValueState.Warning:
			return RadioButton.i18nBundle.getText(VALUE_STATE_WARNING);
		case ValueState.Success:
			return RadioButton.i18nBundle.getText(VALUE_STATE_SUCCESS);
		case ValueState.Information:
			return RadioButton.i18nBundle.getText(VALUE_STATE_INFORMATION);
		default:
			return "";
		}
	}

	get effectiveTabIndex() {
		const tabindex = this.getAttribute("tabindex");

		if (this.disabled) {
			return "-1";
		}

		if (this.name) {
			return this._tabIndex;
		}

		return tabindex || "0";
	}

	get strokeWidth() {
		return this.valueState === "None" ? "1" : "2";
	}
}

RadioButton.define();

export default RadioButton;
