commit e1b65efe05f8621afaa9b9890ec4d8490114a855
Author: gmkv <georgi.minkov@sap.com>
Date:   Wed Apr 26 16:59:54 2023 +0300

    feat(ui5-title): add custom overstyles when used with Link (#6932)
    
    There are cases when a Link will be used inside a Title.
    Elements nested inside, mainly the Link, will inherit the Title's font styles.
    
    Refactored Link to allow for overstyling. Updated text-underline when hovering a Subtle link to match the latest VD spec.
    
    Fixes #6785
