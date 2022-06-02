import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js";
import defaultTheme from "./sap_fiori_3/parameters-bundle.css.js";

registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
export default {packageName:"@ui5/webcomponents",fileName:"themes/Panel.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block}:host{font-family:\"72override\",var(--sapFontFamily);background-color:var(--sapGroup_TitleBackground);border-radius:var(--_ui5_panel_border_radius)}:host(:not([collapsed])){border-bottom:var(--_ui5_panel_border_bottom)}:host([fixed]) .ui5-panel-header{padding-left:1rem}.ui5-panel-header{min-height:var(--_ui5_panel_header_height);width:100%;display:flex;justify-content:flex-start;align-items:center;outline:none;box-sizing:border-box;padding-right:var(--_ui5_panel_header_padding_right)}.ui5-panel-header-icon{color:var(--_ui5_panel_icon_color)}.ui5-panel-header-button-animated{transition:transform .4s ease-out}:host(:not([_has-header])) .ui5-panel-header-button{pointer-events:none}:host(:not([_has-header]):not([fixed])) .ui5-panel-header{cursor:pointer}:host(:not([_has-header]):not([fixed])) .ui5-panel-header:focus{outline:var(--_ui5_panel_focus_border);outline-offset:var(--_ui5_panel_outline_offset);border-radius:var(--_ui5_panel_border_radius)}:host(:not([collapsed]):not([_has-header]):not([fixed])) .ui5-panel-header:focus{border-radius:var(--_ui5_panel_border_radius_expanded)}:host(:not([collapsed])) .ui5-panel-header-button:not(.ui5-panel-header-button-with-icon),:host(:not([collapsed])) .ui5-panel-header-icon-wrapper [ui5-icon]{transform:var(--_ui5_panel_toggle_btn_rotation)}:host([fixed]) .ui5-panel-header-title{width:100%}.ui5-panel-header-title{width:calc(100% - var(--_ui5_panel_button_root_width));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:\"72override\",var(--sapFontHeaderFamily);font-size:var(--sapGroup_Title_FontSize);color:var(--sapGroup_TitleTextColor);font-weight:400}.ui5-panel-content{padding:.625rem 1rem 1.375rem 1rem;background-color:var(--sapGroup_ContentBackground);outline:none;border-bottom-left-radius:var(--_ui5_panel_border_radius);border-bottom-right-radius:var(--_ui5_panel_border_radius)}.ui5-panel-header-button-root{display:flex;justify-content:center;align-items:center;flex-shrink:0;width:var(--_ui5_panel_button_root_width);height:var(--_ui5_panel_button_root_width);padding:var(--_ui5_panel_header_button_wrapper_padding);box-sizing:border-box}:host([collapsed]) .ui5-panel-header,:host([fixed]:not([collapsed]):not([_has-header])) .ui5-panel-header{border-bottom:.0625rem solid var(--sapGroup_TitleBorderColor)}:host([collapsed]) .ui5-panel-header{border-bottom-left-radius:var(--_ui5_panel_border_radius);border-bottom-right-radius:var(--_ui5_panel_border_radius)}:host(:not([fixed]):not([collapsed])) .ui5-panel-header{border-bottom:var(--_ui5_panel_default_header_border)}[ui5-button].ui5-panel-header-button{display:flex;justify-content:center;align-items:center;min-width:0;height:100%;width:100%}.ui5-panel-header-icon-wrapper{display:flex;justify-content:center;align-items:center}.ui5-panel-header-icon-wrapper,.ui5-panel-header-icon-wrapper .ui5-panel-header-icon{color:inherit}.ui5-panel-header-icon-wrapper,[ui5-button].ui5-panel-header-button-with-icon [ui5-icon]{pointer-events:none}"}