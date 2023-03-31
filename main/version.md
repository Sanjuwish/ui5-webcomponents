commit 63ff8007889a66efae074fc6b4dbcb1b7ea36713
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Fri Mar 31 10:05:12 2023 +0300

    fix(theming): fix icons version display for custom themes (built via the ThemeDesigner) (#6815)
    
    Currently, for older themes (sap_belize, sap_fiori_3) we display old icon fonts, while for sap_horizon - the latest icon fonts. This applies for all icon collections. And, to do that we check if the current theme is part of the sap_horizon theme family or not. However, once an app is using custom theme, the current theme has a custom theme and by default we will enforce the old icon fonts, because the custom theme name won't match "sap_horizon".
    With this change, when the current theme name is not part of the built-in theme families, we now look for an custom theme and check the base theme that the custom theme is built upon:
    rename isThemeFamily to isLegacyThemeFamily and adopt it in the code (all isThemeFamily("sap_horizon") calls are replaced with !isLegacyThemeFamily)
    isLegacyThemeFamily now checks the baseTheme of the custom theme if present
    add test (one when built-in theme is set and when theme designer custom theme is used)
    
    Related to: #6758
