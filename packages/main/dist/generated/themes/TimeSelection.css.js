import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js";
import defaultTheme from "./sap_fiori_3/parameters-bundle.css.js";

registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
export default {packageName:"@ui5/webcomponents",fileName:"themes/TimeSelection.css",content:":host(:not([hidden])){display:inline-block;min-width:18rem}.ui5-time-selection-root{width:100%;height:100%;display:flex;justify-content:center;align-items:stretch;direction:ltr;box-sizing:border-box}.ui5-time-selection-root.ui5-phone{height:90vh}:host(.ui5-dt-time.ui5-dt-cal--hidden) .ui5-time-selection-root.ui5-phone{height:80vh}[ui5-wheelslider]{padding-left:.25rem;padding-right:.25rem}"}