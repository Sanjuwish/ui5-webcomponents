/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => html`${ context.options ? block1(context, tags, suffix) : undefined }${ context.shouldOpenValueStateMessagePopover ? block13(context, tags, suffix) : undefined }`;
const block1 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-responsive-popover", tags, suffix)} hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${classMap(context.classes.popover)}" horizontal-align="Left" @ui5-after-open="${ifDefined(context._afterOpen)}" @ui5-before-open="${ifDefined(context._beforeOpen)}" @ui5-after-close="${ifDefined(context._afterClose)}" @keydown="${context._onkeydown}" style=${styleMap(context.styles.responsivePopover)}>${ context._isPhone ? block2(context, tags, suffix) : undefined }${ !context._isPhone ? block7(context, tags, suffix) : undefined }<${scopeTag("ui5-list", tags, suffix)} mode="SingleSelectAuto" separators="None" @mousedown="${context._itemMousedown}" @ui5-selection-change="${ifDefined(context._handleItemPress)}">${ repeat(context._syncedOptions, (item, index) => item._id || index, (item, index) => block12(item, index, context, tags, suffix)) }</${scopeTag("ui5-list", tags, suffix)}></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html`<ui5-responsive-popover hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${classMap(context.classes.popover)}" horizontal-align="Left" @ui5-after-open="${ifDefined(context._afterOpen)}" @ui5-before-open="${ifDefined(context._beforeOpen)}" @ui5-after-close="${ifDefined(context._afterClose)}" @keydown="${context._onkeydown}" style=${styleMap(context.styles.responsivePopover)}>${ context._isPhone ? block2(context, tags, suffix) : undefined }${ !context._isPhone ? block7(context, tags, suffix) : undefined }<ui5-list mode="SingleSelectAuto" separators="None" @mousedown="${context._itemMousedown}" @ui5-selection-change="${ifDefined(context._handleItemPress)}">${ repeat(context._syncedOptions, (item, index) => item._id || index, (item, index) => block12(item, index, context, tags, suffix)) }</ui5-list></ui5-responsive-popover>`;
const block2 = (context, tags, suffix) => suffix ? html`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(context._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context._toggleRespPopover}"></${scopeTag("ui5-button", tags, suffix)}></div>${ context.hasValueStateText ? block3(context, tags, suffix) : undefined }</div>` : html`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(context._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context._toggleRespPopover}"></ui5-button></div>${ context.hasValueStateText ? block3(context, tags, suffix) : undefined }</div>`;
const block3 = (context, tags, suffix) => html`<div class="${classMap(context.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${ context.shouldDisplayDefaultValueStateMessage ? block4(context, tags, suffix) : block5(context, tags, suffix) }</div>`;
const block4 = (context, tags, suffix) => html`${ifDefined(context.valueStateText)}`;
const block5 = (context, tags, suffix) => html`${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block6(item, index, context, tags, suffix)) }`;
const block6 = (item, index, context, tags, suffix) => html`${ifDefined(item)}`;
const block7 = (context, tags, suffix) => html`${ context.hasValueStateText ? block8(context, tags, suffix) : undefined }`;
const block8 = (context, tags, suffix) => suffix ? html`<div slot="header" class="${classMap(context.classes.popoverValueState)}" style=${styleMap(context.styles.responsivePopoverHeader)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(context._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${ context.shouldDisplayDefaultValueStateMessage ? block9(context, tags, suffix) : block10(context, tags, suffix) }</div>` : html`<div slot="header" class="${classMap(context.classes.popoverValueState)}" style=${styleMap(context.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(context._valueStateMessageInputIcon)}"></ui5-icon>${ context.shouldDisplayDefaultValueStateMessage ? block9(context, tags, suffix) : block10(context, tags, suffix) }</div>`;
const block9 = (context, tags, suffix) => html`${ifDefined(context.valueStateText)}`;
const block10 = (context, tags, suffix) => html`${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block11(item, index, context, tags, suffix)) }`;
const block11 = (item, index, context, tags, suffix) => html`${ifDefined(item)}`;
const block12 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-li", tags, suffix)} id="${ifDefined(item.id)}-li" icon="${ifDefined(item.icon)}" ?selected="${item.selected}" ?focused="${item._focused}" title="${ifDefined(item.title)}" additional-text="${ifDefined(item.additionalText)}" ?aria-selected="${item.selected}" data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.textContent)}</${scopeTag("ui5-li", tags, suffix)}>` : html`<ui5-li id="${ifDefined(item.id)}-li" icon="${ifDefined(item.icon)}" ?selected="${item.selected}" ?focused="${item._focused}" title="${ifDefined(item.title)}" additional-text="${ifDefined(item.additionalText)}" ?aria-selected="${item.selected}" data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.textContent)}</ui5-li>`;
const block13 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${classMap(context.classes.popoverValueState)}" style="${styleMap(context.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(context._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${ context.shouldDisplayDefaultValueStateMessage ? block14(context, tags, suffix) : block15(context, tags, suffix) }</div></${scopeTag("ui5-popover", tags, suffix)}>` : html`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${classMap(context.classes.popoverValueState)}" style="${styleMap(context.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(context._valueStateMessageInputIcon)}"></ui5-icon>${ context.shouldDisplayDefaultValueStateMessage ? block14(context, tags, suffix) : block15(context, tags, suffix) }</div></ui5-popover>`;
const block14 = (context, tags, suffix) => html`${ifDefined(context.valueStateText)}`;
const block15 = (context, tags, suffix) => html`${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block16(item, index, context, tags, suffix)) }`;
const block16 = (item, index, context, tags, suffix) => html`${ifDefined(item)}`;


export default block0;