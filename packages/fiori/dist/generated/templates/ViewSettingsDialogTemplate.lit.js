/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-dialog", tags, suffix)} aria-label="${ifDefined(context._dialogTitle)}" @ui5-after-open=${ifDefined(context._focusRecentlyUsedControl)} @ui5-before-close=${ifDefined(context._restoreConfirmedOnEscape)} ?stretch=${context._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${ context.showBackButton ? block1(context, tags, suffix) : undefined }<${scopeTag("ui5-title", tags, suffix)} class="ui5-vsd-title" id="${ifDefined(context._id)}-label">${ifDefined(context._title)}</${scopeTag("ui5-title", tags, suffix)}></div><div class="ui5-vsd-header-end"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${context._resetSettings}" ?disabled=${context._disableResetButton}>${ifDefined(context._resetButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}></div></div>${ !context.showBackButton ? block2(context, tags, suffix) : undefined }</div><div class="ui5-vsd-content" ?expand-content="${context.expandContent}">${ context.shouldBuildSort ? block4(context, tags, suffix) : undefined }${ context.shouldBuildFilter ? block8(context, tags, suffix) : undefined }</div><div slot="footer" class="ui5-vsd-footer"><${scopeTag("ui5-button", tags, suffix)} design="Emphasized" @click="${context._confirmSettings}">${ifDefined(context._okButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${context._cancelSettings}">${ifDefined(context._cancelButtonLabel)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-dialog", tags, suffix)}>` : html`<ui5-dialog aria-label="${ifDefined(context._dialogTitle)}" @ui5-after-open=${ifDefined(context._focusRecentlyUsedControl)} @ui5-before-close=${ifDefined(context._restoreConfirmedOnEscape)} ?stretch=${context._isPhone}><div slot="header" class="ui5-vsd-header"><div class="ui5-vsd-header-container"><div class="ui5-vsd-header-start">${ context.showBackButton ? block1(context, tags, suffix) : undefined }<ui5-title class="ui5-vsd-title" id="${ifDefined(context._id)}-label">${ifDefined(context._title)}</ui5-title></div><div class="ui5-vsd-header-end"><ui5-button design="Transparent" @click="${context._resetSettings}" ?disabled=${context._disableResetButton}>${ifDefined(context._resetButtonLabel)}</ui5-button></div></div>${ !context.showBackButton ? block2(context, tags, suffix) : undefined }</div><div class="ui5-vsd-content" ?expand-content="${context.expandContent}">${ context.shouldBuildSort ? block4(context, tags, suffix) : undefined }${ context.shouldBuildFilter ? block8(context, tags, suffix) : undefined }</div><div slot="footer" class="ui5-vsd-footer"><ui5-button design="Emphasized" @click="${context._confirmSettings}">${ifDefined(context._okButtonLabel)}</ui5-button><ui5-button design="Transparent" @click="${context._cancelSettings}">${ifDefined(context._cancelButtonLabel)}</ui5-button></div></ui5-dialog>`;
const block1 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-button", tags, suffix)} design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${context._navigateToFilters}"></${scopeTag("ui5-button", tags, suffix)}>` : html`<ui5-button design="Transparent" icon="nav-back" class="ui5-vsd-back-button" @click="${context._navigateToFilters}"></ui5-button>`;
const block2 = (context, tags, suffix) => html`${ context.hasPagination ? block3(context, tags, suffix) : undefined }`;
const block3 = (context, tags, suffix) => suffix ? html`<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><${scopeTag("ui5-segmented-button", tags, suffix)} @ui5-selection-change="${ifDefined(context._handleModeChange)}"><${scopeTag("ui5-segmented-button-item", tags, suffix)} ?pressed="${context.isModeSort}" icon="sort" mode="Sort"></${scopeTag("ui5-segmented-button-item", tags, suffix)}><${scopeTag("ui5-segmented-button-item", tags, suffix)} ?pressed="${context.isModeFilter}" icon="filter" mode="Filter"></${scopeTag("ui5-segmented-button-item", tags, suffix)}></${scopeTag("ui5-segmented-button", tags, suffix)}></div></div>` : html`<div class="ui5-vsd-sub-header-container"><div class="ui5-vsd-sub-header"><ui5-segmented-button @ui5-selection-change="${ifDefined(context._handleModeChange)}"><ui5-segmented-button-item ?pressed="${context.isModeSort}" icon="sort" mode="Sort"></ui5-segmented-button-item><ui5-segmented-button-item ?pressed="${context.isModeFilter}" icon="filter" mode="Filter"></ui5-segmented-button-item></ui5-segmented-button></div></div>`;
const block4 = (context, tags, suffix) => html`${ context.isModeSort ? block5(context, tags, suffix) : undefined }`;
const block5 = (context, tags, suffix) => suffix ? html`<div class="ui5-vsd-sort"><${scopeTag("ui5-list", tags, suffix)} mode="SingleSelectBegin" @ui5-item-click="${ifDefined(context._onSortOrderChange)}" sort-order accessible-name-ref="${ifDefined(context._id)}-label"><${scopeTag("ui5-li-groupheader", tags, suffix)}>${ifDefined(context._sortOrderLabel)}</${scopeTag("ui5-li-groupheader", tags, suffix)}>${ repeat(context._currentSettings.sortOrder, (item, index) => item._id || index, (item, index) => block6(item, index, context, tags, suffix)) }</${scopeTag("ui5-list", tags, suffix)}><${scopeTag("ui5-list", tags, suffix)} mode="SingleSelectBegin" @ui5-item-click=${ifDefined(context._onSortByChange)} sort-by><${scopeTag("ui5-li-groupheader", tags, suffix)}>${ifDefined(context._sortByLabel)}</${scopeTag("ui5-li-groupheader", tags, suffix)}>${ repeat(context._currentSettings.sortBy, (item, index) => item._id || index, (item, index) => block7(item, index, context, tags, suffix)) }</${scopeTag("ui5-list", tags, suffix)}></div>` : html`<div class="ui5-vsd-sort"><ui5-list mode="SingleSelectBegin" @ui5-item-click="${ifDefined(context._onSortOrderChange)}" sort-order accessible-name-ref="${ifDefined(context._id)}-label"><ui5-li-groupheader>${ifDefined(context._sortOrderLabel)}</ui5-li-groupheader>${ repeat(context._currentSettings.sortOrder, (item, index) => item._id || index, (item, index) => block6(item, index, context, tags, suffix)) }</ui5-list><ui5-list mode="SingleSelectBegin" @ui5-item-click=${ifDefined(context._onSortByChange)} sort-by><ui5-li-groupheader>${ifDefined(context._sortByLabel)}</ui5-li-groupheader>${ repeat(context._currentSettings.sortBy, (item, index) => item._id || index, (item, index) => block7(item, index, context, tags, suffix)) }</ui5-list></div>`;
const block6 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-li", tags, suffix)} ?selected="${item.selected}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html`<ui5-li ?selected="${item.selected}">${ifDefined(item.text)}</ui5-li>`;
const block7 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-li", tags, suffix)} data-ui5-external-action-item-index="${index}" ?selected="${item.selected}">${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html`<ui5-li data-ui5-external-action-item-index="${index}" ?selected="${item.selected}">${ifDefined(item.text)}</ui5-li>`;
const block8 = (context, tags, suffix) => html`${ context.isModeFilter ? block9(context, tags, suffix) : undefined }`;
const block9 = (context, tags, suffix) => html`${ context._filterStepTwo ? block10(context, tags, suffix) : block14(context, tags, suffix) }`;
const block10 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-list", tags, suffix)} accessible-name-ref="${ifDefined(context._id)}-label" mode="MultiSelect" @ui5-item-click="${ifDefined(context._handleFilterValueItemClick)}">${ repeat(context._currentSettings.filters, (item, index) => item._id || index, (item, index) => block11(item, index, context, tags, suffix)) }</${scopeTag("ui5-list", tags, suffix)}>` : html`<ui5-list accessible-name-ref="${ifDefined(context._id)}-label" mode="MultiSelect" @ui5-item-click="${ifDefined(context._handleFilterValueItemClick)}">${ repeat(context._currentSettings.filters, (item, index) => item._id || index, (item, index) => block11(item, index, context, tags, suffix)) }</ui5-list>`;
const block11 = (item, index, context, tags, suffix) => html`${ item.selected ? block12(item, index, context, tags, suffix) : undefined }`;
const block12 = (item, index, context, tags, suffix) => html`${ repeat(item.filterOptions, (item, index) => item._id || index, (item, index) => block13(item, index, context, tags, suffix)) }`;
const block13 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-li", tags, suffix)} ?selected=${item.selected}>${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html`<ui5-li ?selected=${item.selected}>${ifDefined(item.text)}</ui5-li>`;
const block14 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-list", tags, suffix)} @ui5-item-click="${ifDefined(context._changeCurrentFilter)}" accessible-name-ref="${ifDefined(context._id)}-label"><${scopeTag("ui5-li-groupheader", tags, suffix)}>${ifDefined(context._filterByLabel)}</${scopeTag("ui5-li-groupheader", tags, suffix)}>${ repeat(context.filterItems, (item, index) => item._id || index, (item, index) => block15(item, index, context, tags, suffix)) }</${scopeTag("ui5-list", tags, suffix)}>` : html`<ui5-list @ui5-item-click="${ifDefined(context._changeCurrentFilter)}" accessible-name-ref="${ifDefined(context._id)}-label"><ui5-li-groupheader>${ifDefined(context._filterByLabel)}</ui5-li-groupheader>${ repeat(context.filterItems, (item, index) => item._id || index, (item, index) => block15(item, index, context, tags, suffix)) }</ui5-list>`;
const block15 = (item, index, context, tags, suffix) => suffix ? html`<${scopeTag("ui5-li", tags, suffix)} class="ui5-vsd-filterItemList" ?selected=${item.selected} additional-text=${ifDefined(item.additionalText)}>${ifDefined(item.text)}</${scopeTag("ui5-li", tags, suffix)}>` : html`<ui5-li class="ui5-vsd-filterItemList" ?selected=${item.selected} additional-text=${ifDefined(item.additionalText)}>${ifDefined(item.text)}</ui5-li>`;


export default block0;