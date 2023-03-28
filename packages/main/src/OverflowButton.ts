import ButtonDesign from "./types/ButtonDesign.js";

import OverflowItem from "./OverflowItem.js";

import OverflowButtonTemplate from "./generated/templates/OverflowButtonTemplate.lit.js";
import OverflowPopoverButtonTemplate from "./generated/templates/OverflowPopoverButtonTemplate.lit.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-overflow-button",
	properties: {
		/**
		 * Defines if the action is disabled.
		 * <br><br>
		 * <b>Note:</b> a disabled action can't be pressed or focused, and it is not in the tab chain.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Defines the action design.
		 * <br><br>
		 * <b>Note:</b> Available options are "Default", "Emphasized", "Positive",
		 * "Negative", and "Transparent".
		 *
		 * @type {ButtonDesign}
		 * @defaultvalue "Transparent"
		 * @public
		 */
		design: {
			type: ButtonDesign,
			defaultValue: ButtonDesign.Transparent,
		},

		/**
		 * Defines the <code>icon</code> source URI.
		 * <br><br>
		 * <b>Note:</b>
		 * SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
		 * <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		icon: {
			type: String,
		},

		/**
		 * Button text
		 * @public
		 */
		text: {
			type: String,
		},

		/**
		 * Button width
		 * @public
		 */
		width: {
			type: String,
		},

		/**
		 * Button image source
		 * @public
		 */
		imageSrc: {
			type: String,
		},

		/**
		 * Button image alt
		 * @public
		 */
		imageAlt: {
			type: String,
		},

		/**
		 * Button image width
		 * @public
		 */
		imageWidth: {
			type: Number,
		},

		/**
		 * Button image height
		 * @public
		 */
		imageHeight: {
			type: Number,
		},

		/**
		 * When set, moves the image after, rather than before, the text
		 * @public
		 */
		imageLast: {
			type: Boolean,
		},

		/**
		 * When set, the button will be always part of the overflow.
		 * @public
		 */
	},
	slots: {
	},
	events: {
		click: {},
	},
};

/**
 * @class
 * The <code>ui5-overflow-button</code> represents an abstract action,
 * used in the <code>ui5-overflow-toolbar</code>.
 *
 * @constructor
 * @author SAP SE
 * @alias OverflowButton
 * @extends UI5Element
 * @public
 */
class OverflowButton extends OverflowItem {
	static get metadata() {
		return metadata;
	}

	/**
	 * Returns Promise to the DOM ref of the overflow button.
	 *
	 * @public
	 * @async
	 * @returns {Promise}
	 */
	// @ts-ignore
	async getDomRef(): Promise<HTMLElement | undefined> {
		const parentElement: any = this.parentElement!;
		return (await parentElement.getActionDOMRefByID(this.id)); // eslint-disable-line
	}

	get overflowToolbarTemplate() {
		return OverflowButtonTemplate;
	}

	get overflowPopoverTemplate() {
		return OverflowPopoverButtonTemplate;
	}
}

OverflowButton.define();

export default OverflowButton;
