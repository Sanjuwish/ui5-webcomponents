commit 33967dd12e31e17828986c7b40a5471c2936f0b7
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Tue Aug 1 13:18:42 2023 +0300

    feat(framework): support theme dependent custom icon collections (#7341)
    
    The PR aims to add support for registering versioned/theme dependent custom icon collections.
    Previously, one could register an icon collection (f.e. "my-icons") with the use of `registerIconLoader` and use it with the Icon web component.
    However, there is no API to register theme dependant version of the same icon, so that whenever the theme is changed the used SVGs are auto-switched behind the scenes.
    Now. `registerIconLoader` can be used to register additional second version (won't fail in case of multiple versions, but at the end the separation is "legacy" vs "sap_horizon" theme families) and use the newly supported field "themeFamily" to define in which themeFamily the icon collection should be used. If "themeFamily" is not present, by default it means in all themes (sap_belize_*, sap_fiori_3_*) other than "sap_horizon" theme families.
    
    Fixes: https://github.com/SAP/ui5-webcomponents/issues/7312
