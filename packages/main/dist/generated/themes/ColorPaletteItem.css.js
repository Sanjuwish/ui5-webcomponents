import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js";
import defaultTheme from "./sap_fiori_3/parameters-bundle.css.js";

registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
export default {packageName:"@ui5/webcomponents",fileName:"themes/ColorPaletteItem.css",content:":host(:not([hidden])){height:var(--_ui5_color-palette-item-height);width:var(--_ui5_color-palette-item-height);border:1px solid var(--sapContent_ForegroundBorderColor);border-radius:var(--_ui5_color-palette-item-outer-border-radius);display:inline-block;margin:var(--_ui5_color-palette-item-margin);box-sizing:border-box}:host(:not([_disabled]):hover){height:var(--_ui5_color-palette-item-hover-height);width:var(--_ui5_color-palette-item-hover-height);margin:var(--_ui5_color-palette-item-hover-margin);border-radius:var(--_ui5_color-palette-item-hover-outer-border-radius)}:host(:not([hidden])[phone]){height:2.75rem;width:2.75rem;border:1px solid var(--sapContent_ForegroundBorderColor);border-radius:.25rem;display:inline-block;margin:.375rem}.ui5-cp-item{position:relative;box-sizing:border-box;border-radius:var(--_ui5_color-palette-item-inner-border-radius);width:100%;height:100%}:host(:not([_disabled]):not([phone]):hover) .ui5-cp-item{border-radius:var(--_ui5_color-palette-item-hover-inner-border-radius)}:host(:not([_disabled])[phone]) .ui5-cp-item{border-radius:.1875rem}.ui5-cp-item:hover:not(:focus){border:1px solid var(--sapGroup_ContentBackground);border-radius:var(--_ui5_color-palette-item-hover-inner-border-radius);box-sizing:border-box}:host(:not([_disabled]):not([phone])) .ui5-cp-item:focus{outline:none}:host(:not([_disabled]):not([phone]):focus) .ui5-cp-item{pointer-events:none}:host(:not([_disabled]):not([phone])) .ui5-cp-item:focus:not(:hover):before{content:\"\";box-sizing:border-box;position:absolute;left:var(--_ui5_color-palette-item-before-focus-offset);top:var(--_ui5_color-palette-item-before-focus-offset);right:var(--_ui5_color-palette-item-before-focus-offset);bottom:var(--_ui5_color-palette-item-before-focus-offset);border:var(--_ui5_color-palette-item-before-focus-color);border-radius:var(--_ui5_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled])) .ui5-cp-item:focus:not(:hover):after{content:\"\";box-sizing:border-box;position:absolute;left:var(--_ui5_color-palette-item-after-focus-offset);top:var(--_ui5_color-palette-item-after-focus-offset);right:var(--_ui5_color-palette-item-after-focus-offset);bottom:var(--_ui5_color-palette-item-after-focus-offset);border:var(--_ui5_color-palette-item-after-focus-color);border-radius:var(--_ui5_color-palette-item-after-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([phone]):hover:focus) .ui5-cp-item:focus:not(:hover):before{content:\"\";box-sizing:border-box;position:absolute;left:var(--_ui5_color-palette-item-before-focus-hover-offset);top:var(--_ui5_color-palette-item-before-focus-hover-offset);right:var(--_ui5_color-palette-item-before-focus-hover-offset);bottom:var(--_ui5_color-palette-item-before-focus-hover-offset);border:var(--_ui5_color-palette-item-before-focus-color);border-radius:var(--_ui5_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([phone]):hover:focus) .ui5-cp-item:focus:not(:hover):after{content:\"\";box-sizing:border-box;position:absolute;left:var(--_ui5_color-palette-item-after-focus-hover-offset);top:var(--_ui5_color-palette-item-after-focus-hover-offset);right:var(--_ui5_color-palette-item-after-focus-hover-offset);bottom:var(--_ui5_color-palette-item-after-focus-hover-offset);border:var(--_ui5_color-palette-item-after-focus-color);border-radius:var(--_ui5_color-palette-item-after-focus-border-radius);pointer-events:none}"}