/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

const block0 = (context, tags, suffix) => suffix ? html`<${scopeTag("ui5-dialog", tags, suffix)} stretch class="ui5-barcode-scanner-dialog-root" @ui5-before-open=${ifDefined(context._startReader)} @ui5-after-close=${ifDefined(context._resetReader)}><div class="ui5-barcode-scanner-dialog-video-wrapper"><video class="ui5-barcode-scanner-dialog-video"></video></div><div slot="footer" class="ui5-barcode-scanner-dialog-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click=${context._closeDialog}>${ifDefined(context._cancelButtonText)}</${scopeTag("ui5-button", tags, suffix)}></div><${scopeTag("ui5-busy-indicator", tags, suffix)} ?active=${context.loading} size="Large" text="${ifDefined(context._busyIndicatorText)}" class="ui5-barcode-scanner-dialog-busy"></${scopeTag("ui5-busy-indicator", tags, suffix)}></${scopeTag("ui5-dialog", tags, suffix)}>` : html`<ui5-dialog stretch class="ui5-barcode-scanner-dialog-root" @ui5-before-open=${ifDefined(context._startReader)} @ui5-after-close=${ifDefined(context._resetReader)}><div class="ui5-barcode-scanner-dialog-video-wrapper"><video class="ui5-barcode-scanner-dialog-video"></video></div><div slot="footer" class="ui5-barcode-scanner-dialog-footer"><ui5-button design="Transparent" @click=${context._closeDialog}>${ifDefined(context._cancelButtonText)}</ui5-button></div><ui5-busy-indicator ?active=${context.loading} size="Large" text="${ifDefined(context._busyIndicatorText)}" class="ui5-barcode-scanner-dialog-busy"></ui5-busy-indicator></ui5-dialog>`;


export default block0;