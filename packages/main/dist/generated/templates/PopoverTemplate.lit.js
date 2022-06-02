/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => html`<section style="${styleMap(context.styles.root)}" class="${classMap(context.classes.root)}" role="dialog" aria-modal="${ifDefined(context._ariaModal)}" aria-label="${ifDefined(context._ariaLabel)}" aria-labelledby="${ifDefined(context._ariaLabelledBy)}" @keydown=${context._onkeydown} @focusout=${context._onfocusout} @mouseup=${context._onmouseup} @mousedown=${context._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(context.styles.arrow)}"></span>${ context._displayHeader ? block1(context, tags, suffix) : undefined }<div style="${styleMap(context.styles.content)}" class="${classMap(context.classes.content)}"  @scroll="${context._scroll}" part="content"><slot></slot></div>${ context._displayFooter ? block4(context, tags, suffix) : undefined }<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToFirst}></span></section> `;
const block1 = (context, tags, suffix) => html`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${ context.header.length ? block2(context, tags, suffix) : block3(context, tags, suffix) }</header>`;
const block2 = (context, tags, suffix) => html`<slot name="header"></slot>`;
const block3 = (context, tags, suffix) => html`<h2 class="ui5-popup-header-text">${ifDefined(context.headerText)}</h2>`;
const block4 = (context, tags, suffix) => html`${ context.footer.length ? block5(context, tags, suffix) : undefined }`;
const block5 = (context, tags, suffix) => html`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;


export default block0;