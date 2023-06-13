commit c527c70e47be84b663b6c40107737c25f91c9034
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Tue Jun 13 10:57:47 2023 +0300

    fix(framework): prioritize external fonts over locally installed (#7184)
    
    - Fetch the latest font file and then fallback to locally installed.
    - reorder font source origin url() and local() and make url first (previously local() used to be first and then followed by url()), so the latest version of the woff2 file will be fetched, and if this fails it will fallback to locally installed font with the same name.
    This is also the order in OpenUI5: https://github.com/SAP/openui5/blob/master/src/themelib_sap_horizon/src/sap/ui/core/themes/sap_horizon/shared.less#L259
    - the path to the external source is slightly changed: sap/ui/core/themes/sap_fiori_3 changed to sap/ui/core/themes/sap_horizon, although it should be the same
    - added test pages
    
    Fixes: #7177
