import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import ToolbarSeparatorTemplate from "./generated/templates/ToolbarSeparatorTemplate.lit.js";

import { registerToolbarItem } from "./features/ToolbarRegistry.js";

import ToolbarItem from "./ToolbarItem.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 * The <code>ui5-toolbar-separator</code> is an element, used for visual separation between two elements.
 * It takes no space in calculating toolbar items width.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webc.main.ToolbarSeparator
 * @extends sap.ui.webc.base.UI5Element
 * @tagname ui5-toolbar-separator
 * @since 1.17.0
 * @abstract
 * @public
 */
@customElement({
	tag: "ui5-toolbar-separator",
})

class ToolbarSeparator extends ToolbarItem {
	static get toolbarTemplate() {
		return ToolbarSeparatorTemplate;
	}

	static get toolbarPopoverTemplate() {
		return ToolbarSeparatorTemplate;
	}

	get ignoreSpace() {
		return true;
	}

	get isInteractive() {
		return false;
	}
}

registerToolbarItem(ToolbarSeparator);

ToolbarSeparator.define();

export default ToolbarSeparator;
