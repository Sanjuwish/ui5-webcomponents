import { DecoratorFunction } from '@storybook/types';
import { useEffect, useGlobals } from "@storybook/preview-api";

type Themes = {
  [name: string]: string;
};

export const themes: Themes = {
  "Morning Horizon": "sap_horizon",
  "Evening Horizon": "sap_horizon_dark",
  "Horizon High Contrast Black": "sap_horizon_hcb",
  "Horizon High Contrast White": "sap_horizon_hcw",
  "Morning Horizon Preview": "sap_horizon_exp",
  "Evening Horizon Preview": "sap_horizon_dark_exp",
  "Horizon High Contrast Black Preview": "sap_horizon_hcb_exp",
  "Horizon High Contrast White Preview": "sap_horizon_hcw_exp",
  "Quartz Light": "sap_fiori_3",
  "Quartz Dark": "sap_fiori_3_dark",
  "Quartz High Contrast Black": "sap_fiori_3_hcb",
  "Quartz High Contrast White": "sap_fiori_3_hcw",
};

export const useOptions: DecoratorFunction = (StoryFn) => {
  const [{ theme, rtl, density }] = useGlobals();

  useEffect(() => {
    const Conf = window["sap-ui-webcomponents-bundle"].configuration;
    const currentTheme = themes[theme];

    Conf.setTheme(currentTheme);

    document.body.setAttribute("dir", rtl === "RTL" ? "rtl" : "ltr");
    document.body.setAttribute("data-ui5-theme", currentTheme);

    document.body.classList.remove("sapUiSizeCozy");
    document.body.classList.remove("sapUiSizeCompact");
    document.body.classList.add("sapUiSize" + density);
  }, [theme, rtl, density]);

  return StoryFn();
};
