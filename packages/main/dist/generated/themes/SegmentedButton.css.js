import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js";
import defaultTheme from "./sap_fiori_3/parameters-bundle.css.js";

registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
export default {packageName:"@ui5/webcomponents",fileName:"themes/SegmentedButton.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}.ui5-segmented-button-root{display:flex;margin:0;padding:0;background-color:var(--sapButton_Background);border-radius:var(--_ui5_segmented_btn_outer_border_radius)}::slotted([ui5-segmented-button-item]){border-radius:var(--_ui5_segmented_btn_inner_border_radius);height:var(--_ui5_button_base_height);min-width:2.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:auto}::slotted([ui5-segmented-button-item]:hover){z-index:2}::slotted([ui5-segmented-button-item][active]),::slotted([ui5-segmented-button-item][pressed]){border:.0625rem solid var(--sapButton_Selected_BorderColor);background-color:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item][pressed]:hover){border:.0625rem solid var(--sapButton_Selected_Hover_BorderColor);background-color:var(--sapButton_Selected_Hover_Background);color:var(--sapButton_Selected_TextColor)}::slotted([ui5-segmented-button-item]:nth-child(odd)){border-inline-end:var(--_ui5_segmented_btn_inner_border_odd_child);border-inline-start:var(--_ui5_segmented_btn_inner_border_odd_child)}::slotted([ui5-segmented-button-item][active]:nth-child(odd)),::slotted([ui5-segmented-button-item][pressed]:nth-child(odd)){border-inline-end:var(--_ui5_segmented_btn_inner_pressed_border_odd_child);border-inline-start:var(--_ui5_segmented_btn_inner_pressed_border_odd_child)}::slotted([ui5-segmented-button-item]:last-child){border-start-end-radius:var(--_ui5_segmented_btn_border_radius);border-end-end-radius:var(--_ui5_segmented_btn_border_radius);border-inline-end:var(--_ui5_segmented_btn_inner_border)}::slotted([ui5-segmented-button-item][active]:last-child),::slotted([ui5-segmented-button-item][pressed]:last-child){border-inline-end:.0625rem solid var(--sapButton_Selected_BorderColor)}::slotted([ui5-segmented-button-item]:first-child){border-start-start-radius:var(--_ui5_segmented_btn_border_radius);border-end-start-radius:var(--_ui5_segmented_btn_border_radius);border-inline-start:var(--_ui5_segmented_btn_inner_border)}::slotted([ui5-segmented-button-item][active]:first-child),::slotted([ui5-segmented-button-item][pressed]:first-child){border-inline-start:.0625rem solid var(--sapButton_Selected_BorderColor)}::slotted([ui5-segmented-button-item][active]:not([active]):hover){border-color:var(--sapButton_BorderColor)}::slotted([ui5-segmented-button-item][active]:hover){border-color:var(--sapButton_Selected_BorderColor)}"}