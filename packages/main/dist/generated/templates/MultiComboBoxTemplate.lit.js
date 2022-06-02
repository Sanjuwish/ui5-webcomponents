/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<div class="ui5-multi-combobox-root ui5-input-focusable-element"><span id="${ifDefined(context._id)}-hiddenText-nMore" class="ui5-hidden-text">${ifDefined(context._tokensCountText)}</span>${ context.hasValueState ? block1(context, tags, suffix) : undefined }<${scopeTag("ui5-tokenizer", tags, suffix)} slot="_beginContent" show-more class="ui5-multi-combobox-tokenizer" ?disabled="${context.disabled}" @ui5-show-more-items-press="${ifDefined(context._showFilteredItems)}" @ui5-token-delete="${ifDefined(context._tokenDelete)}" @focusout="${context._tokenizerFocusOut}" @focusin="${context._tokenizerFocusIn}" @click=${context._click} @keydown="${context._onTokenizerKeydown}" ?expanded="${context._tokenizerExpanded}">${ repeat(context.items, (item, index) => item._id || index, (item, index) => block2(item, index, context, tags, suffix)) }</${scopeTag("ui5-tokenizer", tags, suffix)}><input id="ui5-multi-combobox-input" .value="${ifDefined(context.value)}" inner-input placeholder=${ifDefined(context._getPlaceholder)} ?disabled=${context.disabled} ?readonly=${context.readonly} value-state="${ifDefined(context.valueState)}" @input="${context._inputLiveChange}" @change=${context._inputChange} @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click=${context._click} @focusin=${context.inputFocusIn} @focusout=${context.inputFocusOut} role="combobox" aria-haspopup="listbox" aria-expanded="${ifDefined(context.open)}" aria-autocomplete="both" aria-describedby="${ifDefined(context.ariaDescribedByText)}" aria-required="${ifDefined(context.required)}" aria-label="${ifDefined(context.ariaLabelText)}" />${ context.icon ? block4(context, tags, suffix) : undefined }${ !context.readonly ? block5(context, tags, suffix) : undefined }</div>` : html`<div class="ui5-multi-combobox-root ui5-input-focusable-element"><span id="${ifDefined(context._id)}-hiddenText-nMore" class="ui5-hidden-text">${ifDefined(context._tokensCountText)}</span>${ context.hasValueState ? block1(context, tags, suffix) : undefined }<ui5-tokenizer slot="_beginContent" show-more class="ui5-multi-combobox-tokenizer" ?disabled="${context.disabled}" @ui5-show-more-items-press="${ifDefined(context._showFilteredItems)}" @ui5-token-delete="${ifDefined(context._tokenDelete)}" @focusout="${context._tokenizerFocusOut}" @focusin="${context._tokenizerFocusIn}" @click=${context._click} @keydown="${context._onTokenizerKeydown}" ?expanded="${context._tokenizerExpanded}">${ repeat(context.items, (item, index) => item._id || index, (item, index) => block2(item, index, context, tags, suffix)) }</ui5-tokenizer><input id="ui5-multi-combobox-input" .value="${ifDefined(context.value)}" inner-input placeholder=${ifDefined(context._getPlaceholder)} ?disabled=${context.disabled} ?readonly=${context.readonly} value-state="${ifDefined(context.valueState)}" @input="${context._inputLiveChange}" @change=${context._inputChange} @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click=${context._click} @focusin=${context.inputFocusIn} @focusout=${context.inputFocusOut} role="combobox" aria-haspopup="listbox" aria-expanded="${ifDefined(context.open)}" aria-autocomplete="both" aria-describedby="${ifDefined(context.ariaDescribedByText)}" aria-required="${ifDefined(context.required)}" aria-label="${ifDefined(context.ariaLabelText)}" />${ context.icon ? block4(context, tags, suffix) : undefined }${ !context.readonly ? block5(context, tags, suffix) : undefined }</div>`;
const block1 = (context, tags, suffix) => html`<span id="${ifDefined(context._id)}-valueStateDesc" class="ui5-hidden-text">${ifDefined(context.valueStateText)}</span>`;
const block2 = (item, index, context, tags, suffix) => html`${ item.selected ? block3(item, index, context, tags, suffix) : undefined }`;
const block3 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-token", tags, suffix)} ?readonly="${context.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${ifDefined(item._id)}" part="token-${index}" text="${ifDefined(item.text)}"></${scopeTag("ui5-token", tags, suffix)}>` : html`<ui5-token ?readonly="${context.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${ifDefined(item._id)}" part="token-${index}" text="${ifDefined(item.text)}"></ui5-token>`;
const block4 = (context, tags, suffix) => html`<slot name="icon"></slot>`;
const block5 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-icon", tags, suffix)} name="slim-arrow-down" input-icon slot="icon" tabindex="-1" @click="${context.togglePopoverByDropdownIcon}" @mousedown="${context._onIconMousedown}" @focusin="${context._forwardFocusToInner}" ?pressed="${context.open}" accessible-name="${ifDefined(context._iconAccessibleNameText)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html`<ui5-icon name="slim-arrow-down" input-icon slot="icon" tabindex="-1" @click="${context.togglePopoverByDropdownIcon}" @mousedown="${context._onIconMousedown}" @focusin="${context._forwardFocusToInner}" ?pressed="${context.open}" accessible-name="${ifDefined(context._iconAccessibleNameText)}"></ui5-icon>`;


export default block0;