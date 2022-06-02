/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<li class="ui5-nli-root ui5-nli-focusable" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click="${context._onclick}" role="listitem" tabindex="${ifDefined(context._tabIndex)}" aria-labelledby="${ifDefined(context.ariaLabelledBy)}"><div class="ui5-nli-actions">${ context.showOverflow ? block1(context, tags, suffix) : block2(context, tags, suffix) }${ context.showClose ? block4(context, tags, suffix) : undefined }</div><div class="ui5-nli-content ${classMap(context.classes.content)}"><div class="ui5-nli-title-text-wrapper">${ context.hasPriority ? block5(context, tags, suffix) : undefined }<div id="${ifDefined(context._id)}-title-text" class="ui5-nli-title-text" part="title-text">${ifDefined(context.titleText)}</div></div>${ context.hasDesc ? block6(context, tags, suffix) : undefined }<div id="${ifDefined(context._id)}-footer" class="ui5-nli-footer">${ repeat(context.footerItems, (item, index) => item._id || index, (item, index) => block7(item, index, context, tags, suffix)) }<${scopeTag("ui5-link", tags, suffix)} class="ui5-nli-footer-showMore" ?hidden="${context.hideShowMore}" @click="${context._onShowMoreClick}" aria-hidden="true" href="#"  showMore-btn>${ifDefined(context.showMoreText)}</${scopeTag("ui5-link", tags, suffix)}></div><span id="${ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(context.accInvisibleText)}</span></div><div class="ui5-nli-avatar"><slot name="avatar"></slot></div>${ context.busy ? block9(context, tags, suffix) : undefined }</li>` : html`<li class="ui5-nli-root ui5-nli-focusable" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click="${context._onclick}" role="listitem" tabindex="${ifDefined(context._tabIndex)}" aria-labelledby="${ifDefined(context.ariaLabelledBy)}"><div class="ui5-nli-actions">${ context.showOverflow ? block1(context, tags, suffix) : block2(context, tags, suffix) }${ context.showClose ? block4(context, tags, suffix) : undefined }</div><div class="ui5-nli-content ${classMap(context.classes.content)}"><div class="ui5-nli-title-text-wrapper">${ context.hasPriority ? block5(context, tags, suffix) : undefined }<div id="${ifDefined(context._id)}-title-text" class="ui5-nli-title-text" part="title-text">${ifDefined(context.titleText)}</div></div>${ context.hasDesc ? block6(context, tags, suffix) : undefined }<div id="${ifDefined(context._id)}-footer" class="ui5-nli-footer">${ repeat(context.footerItems, (item, index) => item._id || index, (item, index) => block7(item, index, context, tags, suffix)) }<ui5-link class="ui5-nli-footer-showMore" ?hidden="${context.hideShowMore}" @click="${context._onShowMoreClick}" aria-hidden="true" href="#"  showMore-btn>${ifDefined(context.showMoreText)}</ui5-link></div><span id="${ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(context.accInvisibleText)}</span></div><div class="ui5-nli-avatar"><slot name="avatar"></slot></div>${ context.busy ? block9(context, tags, suffix) : undefined }</li>`;
const block1 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-button", tags, suffix)} icon="overflow" design="Transparent" @click="${context._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${ifDefined(context.overflowBtnAccessibleName)}" aria-label="${ifDefined(context.overflowBtnAccessibleName)}"></${scopeTag("ui5-button", tags, suffix)}>` : html`<ui5-button icon="overflow" design="Transparent" @click="${context._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${ifDefined(context.overflowBtnAccessibleName)}" aria-label="${ifDefined(context.overflowBtnAccessibleName)}"></ui5-button>`;
const block2 = (context, tags, suffix) => html`${ repeat(context.standardActions, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix)) }`;
const block3 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-button", tags, suffix)} icon="${ifDefined(item.icon)}" class="ui5-nli-action" @click="${item.press}" ?disabled="${item.disabled}" design="${ifDefined(item.design)}" data-ui5-external-action-item-id="${ifDefined(item.refItemid)}">${ifDefined(item.text)}</${scopeTag("ui5-button", tags, suffix)}>` : html`<ui5-button icon="${ifDefined(item.icon)}" class="ui5-nli-action" @click="${item.press}" ?disabled="${item.disabled}" design="${ifDefined(item.design)}" data-ui5-external-action-item-id="${ifDefined(item.refItemid)}">${ifDefined(item.text)}</ui5-button>`;
const block4 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" @click="${context._onBtnCloseClick}" tooltip="${ifDefined(context.closeBtnAccessibleName)}" aria-label="${ifDefined(context.closeBtnAccessibleName)}" close-btn></${scopeTag("ui5-button", tags, suffix)}>` : html`<ui5-button icon="decline" design="Transparent" @click="${context._onBtnCloseClick}" tooltip="${ifDefined(context.closeBtnAccessibleName)}" aria-label="${ifDefined(context.closeBtnAccessibleName)}" close-btn></ui5-button>`;
const block5 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-prio-icon ui5-prio-icon--${ifDefined(context.priorityIcon)}" name="${ifDefined(context.priorityIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html`<ui5-icon class="ui5-prio-icon ui5-prio-icon--${ifDefined(context.priorityIcon)}" name="${ifDefined(context.priorityIcon)}"></ui5-icon>`;
const block6 = (context, tags, suffix) => html`<div id="${ifDefined(context._id)}-description" class="ui5-nli-description"><slot></slot></div>`;
const block7 = (item, index, context, tags, suffix) => html`<slot name="${ifDefined(item.slotName)}"></slot>${ item.showDivider ? block8(item, index, context, tags, suffix) : undefined }`;
const block8 = (item, index, context, tags, suffix) => html`<div class="ui5-nli-footer-divider" aria-hidden="true">·</div>`;
const block9 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-busy-indicator", tags, suffix)} delay="${ifDefined(context.busyDelay)}" active size="Medium" class="ui5-nli-busy" data-sap-focus-ref></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : html`<ui5-busy-indicator delay="${ifDefined(context.busyDelay)}" active size="Medium" class="ui5-nli-busy" data-sap-focus-ref></ui5-busy-indicator>`;


export default block0;