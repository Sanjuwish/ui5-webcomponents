/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keydown="${context._onkeydown}" role="listitem" tabindex="${ifDefined(context._tabIndex)}" aria-expanded="${ifDefined(context.ariaExpanded)}" aria-labelledby="${ifDefined(context.ariaLabelledBy)}"><div class="ui5-nli-group-header"><${scopeTag("ui5-button", tags, suffix)} icon="navigation-right-arrow" design="Transparent" @click="${context._onBtnToggleClick}" class="ui5-nli-group-toggle-btn" tooltip="${ifDefined(context.toggleBtnAccessibleName)}" aria-label="${ifDefined(context.toggleBtnAccessibleName)}"></${scopeTag("ui5-button", tags, suffix)}>${ context.hasPriority ? block1(context, tags, suffix) : undefined }<div id="${ifDefined(context._id)}-title-text" class="ui5-nli-group-title-text" part="title-text">${ifDefined(context.titleText)}</div>${ context.showCounter ? block2(context, tags, suffix) : undefined }<div class="ui5-nli-group-divider"></div>${ !context.collapsed ? block3(context, tags, suffix) : undefined }${ context.showClose ? block7(context, tags, suffix) : undefined }<span id="${ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(context.accInvisibleText)}</span></div><${scopeTag("ui5-list", tags, suffix)} class="ui5-nli-group-items"><slot></slot></${scopeTag("ui5-list", tags, suffix)}>${ context.busy ? block8(context, tags, suffix) : undefined }</li>` : html`<li class="ui5-nli-group-root ui5-nli-focusable" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keydown="${context._onkeydown}" role="listitem" tabindex="${ifDefined(context._tabIndex)}" aria-expanded="${ifDefined(context.ariaExpanded)}" aria-labelledby="${ifDefined(context.ariaLabelledBy)}"><div class="ui5-nli-group-header"><ui5-button icon="navigation-right-arrow" design="Transparent" @click="${context._onBtnToggleClick}" class="ui5-nli-group-toggle-btn" tooltip="${ifDefined(context.toggleBtnAccessibleName)}" aria-label="${ifDefined(context.toggleBtnAccessibleName)}"></ui5-button>${ context.hasPriority ? block1(context, tags, suffix) : undefined }<div id="${ifDefined(context._id)}-title-text" class="ui5-nli-group-title-text" part="title-text">${ifDefined(context.titleText)}</div>${ context.showCounter ? block2(context, tags, suffix) : undefined }<div class="ui5-nli-group-divider"></div>${ !context.collapsed ? block3(context, tags, suffix) : undefined }${ context.showClose ? block7(context, tags, suffix) : undefined }<span id="${ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(context.accInvisibleText)}</span></div><ui5-list class="ui5-nli-group-items"><slot></slot></ui5-list>${ context.busy ? block8(context, tags, suffix) : undefined }</li>`;
const block1 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-prio-icon ui5-prio-icon--${ifDefined(context.priorityIcon)}" name="${ifDefined(context.priorityIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html`<ui5-icon class="ui5-prio-icon ui5-prio-icon--${ifDefined(context.priorityIcon)}" name="${ifDefined(context.priorityIcon)}"></ui5-icon>`;
const block2 = (context, tags, suffix) => html`<span class="ui5-nli-group-counter">(${ifDefined(context.itemsCount)})</span>`;
const block3 = (context, tags, suffix) => html`${ context.showOverflow ? block4(context, tags, suffix) : block5(context, tags, suffix) }`;
const block4 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-button", tags, suffix)} icon="overflow" design="Transparent" @click="${context._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${ifDefined(context.overflowBtnAccessibleName)}" aria-label="${ifDefined(context.overflowBtnAccessibleName)}"></${scopeTag("ui5-button", tags, suffix)}>` : html`<ui5-button icon="overflow" design="Transparent" @click="${context._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${ifDefined(context.overflowBtnAccessibleName)}" aria-label="${ifDefined(context.overflowBtnAccessibleName)}"></ui5-button>`;
const block5 = (context, tags, suffix) => html`${ repeat(context.standardActions, (item, index) => item._id || index, (item, index) => block6(item, index, context, tags, suffix)) }`;
const block6 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-button", tags, suffix)} icon="${ifDefined(item.icon)}" class="ui5-nli-action" ?disabled="${item.disabled}" design="${ifDefined(item.design)}" @click="${item.press}" data-ui5-external-action-item-id="${ifDefined(item.refItemid)}">${ifDefined(item.text)}</${scopeTag("ui5-button", tags, suffix)}>` : html`<ui5-button icon="${ifDefined(item.icon)}" class="ui5-nli-action" ?disabled="${item.disabled}" design="${ifDefined(item.design)}" @click="${item.press}" data-ui5-external-action-item-id="${ifDefined(item.refItemid)}">${ifDefined(item.text)}</ui5-button>`;
const block7 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" @click="${context._onBtnCloseClick}" tooltip="${ifDefined(context.closeBtnAccessibleName)}" aria-label="${ifDefined(context.closeBtnAccessibleName)}" close-btn></${scopeTag("ui5-button", tags, suffix)}>` : html`<ui5-button icon="decline" design="Transparent" @click="${context._onBtnCloseClick}" tooltip="${ifDefined(context.closeBtnAccessibleName)}" aria-label="${ifDefined(context.closeBtnAccessibleName)}" close-btn></ui5-button>`;
const block8 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-busy-indicator", tags, suffix)} delay="${ifDefined(context.busyDelay)}" active size="Medium" class="ui5-nli-busy"></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : html`<ui5-busy-indicator delay="${ifDefined(context.busyDelay)}" active size="Medium" class="ui5-nli-busy"></ui5-busy-indicator>`;


export default block0;