commit a0ad904ea21578ada97dc0c990ec04dbb5072990
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Sat May 20 07:35:51 2023 +0300

    feat(framework): add `setThemeRoot` public API (#6970)
    
    ### Change
     Adds new `getThemeRoot/setThemeRoot` public API.
     **Note:** script configuration `themeRoot` setting and standalone `themeRoot` URL param **are not public**.
     The feature is relatively specific, thus providing the minimum full-filling the request.
    ### Background
    The `themeRoot` setting is specific to custom themes, created with [UI Theme Designer](https://sap.github.io/ui5-webcomponents/playground/customizing/theme/) and allows fetching a theme from external location, e.g theme root.
    When `themeRoot` is set, the framework will use it as a base URL and fetch the theme CSS variables from the following constructed URL: `${themeRoot}Base/baseLib/${theme}/css_variables.css` (a specific path [UI Theme Designer](https://sap.github.io/ui5-webcomponents/playground/customizing/theme/) themes).
    ### Usage
    It's possible to configure the theme root either
    - [new] with JS API:
    ```js
    import { setThemeRoot } from "@ui5/webcomponents-base/dist/config/ThemeRoot.js";
    setThemeRoot("https://my-example-host.com/");
    ```
    - [as before] as part for the `theme` URL parameter:
    ```sh
    index.html?sap-ui-theme=mytheme@https://my-example-host.com/
    ```
    
    Fixes: https://github.com/SAP/ui5-webcomponents/issues/6758
