/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => html`<div class="ui5-radio-root ${classMap(context.classes.main)}" role="radio" aria-checked="${ifDefined(context.checked)}" aria-readonly="${ifDefined(context.ariaReadonly)}" aria-disabled="${ifDefined(context.ariaDisabled)}" aria-label="${ifDefined(context.ariaLabelText)}" aria-describedby="${ifDefined(context.ariaDescribedBy)}" tabindex="${ifDefined(context.tabIndex)}" @click="${context._onclick}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @mousedown="${context._onmousedown}" @mouseup="${context._onmouseup}" @focusout="${context._onfocusout}"><div class='ui5-radio-inner ${classMap(context.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${blockSVG1(context, tags, suffix)}</svg><input type='radio' ?checked="${context.checked}" ?readonly="${context.readonly}" ?disabled="${context.disabled}" name="${ifDefined(context.name)}" data-sap-no-tab-ref/></div>${ context.text ? block1(context, tags, suffix) : undefined }${ context.hasValueState ? block2(context, tags, suffix) : undefined }</div>`;
const block1 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-label", tags, suffix)} id="${ifDefined(context._id)}-label" class="ui5-radio-label" for="${ifDefined(context._id)}" wrapping-type="${ifDefined(context.wrappingType)}">${ifDefined(context.text)}</${scopeTag("ui5-label", tags, suffix)}>` : html`<ui5-label id="${ifDefined(context._id)}-label" class="ui5-radio-label" for="${ifDefined(context._id)}" wrapping-type="${ifDefined(context.wrappingType)}">${ifDefined(context.text)}</ui5-label>`;
const block2 = (context, tags, suffix) => html`<span id="${ifDefined(context._id)}-descr" class="ui5-hidden-text">${ifDefined(context.valueStateText)}</span>`;

const blockSVG1 = (context, tags, suffix) => svg`<circle class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle class="ui5-radio-svg-inner" cx="50%" cy="50%" />`;

export default block0;