/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => html`<div class="ui5-mp-root" role="grid" aria-readonly="false" aria-multiselectable="false" @keydown=${context._onkeydown} @keyup=${context._onkeyup} @click=${context._selectMonth} @focusin=${context._onfocusin}>${ repeat(context._months, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }</div>`;
const block1 = (item, index, context, tags, suffix) => html`<div class="ui5-mp-quarter">${ repeat(item, (item, index) => item._id || index, (item, index) => block2(item, index, context, tags, suffix)) }</div>`;
const block2 = (item, index, context, tags, suffix) => html`<div data-sap-timestamp=${ifDefined(item.timestamp)} tabindex=${ifDefined(item._tabIndex)} ?data-sap-focus-ref="${item.focusRef}" class="${ifDefined(item.classes)}" role="gridcell" aria-selected="${ifDefined(item.ariaSelected)}">${ifDefined(item.name)}</div>`;


export default block0;