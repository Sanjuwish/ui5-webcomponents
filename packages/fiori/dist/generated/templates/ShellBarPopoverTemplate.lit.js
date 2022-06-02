/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-popover", tags, suffix)} class="ui5-shellbar-menu-popover" hide-arrow placement-type="Bottom" @ui5-before-open=${ifDefined(context._menuPopoverBeforeOpen)} @ui5-after-close=${ifDefined(context._menuPopoverAfterClose)}><${scopeTag("ui5-list", tags, suffix)} separators="None" mode="SingleSelect" @ui5-selection-change=${ifDefined(context._menuItemPress)}>${ repeat(context._menuPopoverItems, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }</${scopeTag("ui5-list", tags, suffix)}></${scopeTag("ui5-popover", tags, suffix)}><${scopeTag("ui5-popover", tags, suffix)} class="ui5-shellbar-overflow-popover" placement-type="Bottom" horizontal-align="${ifDefined(context.popoverHorizontalAlign)}" hide-arrow @ui5-before-open=${ifDefined(context._overflowPopoverBeforeOpen)} @ui5-after-close=${ifDefined(context._overflowPopoverAfterClose)}><${scopeTag("ui5-list", tags, suffix)} separators="None" @ui5-item-click="${ifDefined(context._handleActionListClick)}">${ repeat(context._hiddenIcons, (item, index) => item._id || index, (item, index) => block2(item, index, context, tags, suffix)) }</${scopeTag("ui5-list", tags, suffix)}></${scopeTag("ui5-popover", tags, suffix)}>` : html`<ui5-popover class="ui5-shellbar-menu-popover" hide-arrow placement-type="Bottom" @ui5-before-open=${ifDefined(context._menuPopoverBeforeOpen)} @ui5-after-close=${ifDefined(context._menuPopoverAfterClose)}><ui5-list separators="None" mode="SingleSelect" @ui5-selection-change=${ifDefined(context._menuItemPress)}>${ repeat(context._menuPopoverItems, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }</ui5-list></ui5-popover><ui5-popover class="ui5-shellbar-overflow-popover" placement-type="Bottom" horizontal-align="${ifDefined(context.popoverHorizontalAlign)}" hide-arrow @ui5-before-open=${ifDefined(context._overflowPopoverBeforeOpen)} @ui5-after-close=${ifDefined(context._overflowPopoverAfterClose)}><ui5-list separators="None" @ui5-item-click="${ifDefined(context._handleActionListClick)}">${ repeat(context._hiddenIcons, (item, index) => item._id || index, (item, index) => block2(item, index, context, tags, suffix)) }</ui5-list></ui5-popover>`;
const block1 = (item, index, context, tags, suffix) => html`${ifDefined(item)}`;
const block2 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-li", tags, suffix)} data-ui5-external-action-item-id="${ifDefined(item.refItemid)}" icon="${ifDefined(item.icon)}" type="Active" @ui5-_press="${ifDefined(item.press)}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html`<ui5-li data-ui5-external-action-item-id="${ifDefined(item.refItemid)}" icon="${ifDefined(item.icon)}" type="Active" @ui5-_press="${ifDefined(item.press)}">${ifDefined(item.text)}</ui5-li>`;


export default block0;