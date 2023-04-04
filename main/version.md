commit 0089891fae58f1271873f1fff0109bbc9b908b19
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Tue Apr 4 18:35:23 2023 +0300

    fix: fix components metadata calculation (#6865)
    
    The customElement decorator used to set default values for languageAware = false, themeAware = false, fastNavigation = false when the fields are not provided. However, this leads to a wrong metadata in case the field is set by a parent class. Then, the value set by the parent class won't be considered as the child class already set it to "false" and as expected the values set by the child class are taken with precedence.
    For Example:
    - Calendar component does not set languageAware at all (but gets languageAware: false by default)
    - Calendar's parent class DateComponentsBase has languageAware: true
    - When merging the metadata of the inheritance chain to get the resulting metadata, the Calendar's metadata is taken with precedence and languageAware is false at the end, but should be true.
    - As a consequence, when we call setLanguage, the Calendar won't be re-rendered, but should.
