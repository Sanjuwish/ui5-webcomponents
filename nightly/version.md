commit 71f96cdfd18ae24bbf4186073d42f892e7bd6d92
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Wed Jul 19 15:03:00 2023 +0300

    fix(ui5-time-picker): add explicit dep to SegmentedBtnItem (#7347)
    
    The internal TimeSelectionClocks.ts class has the following dependencies: TimePickerClock, ToggleSpinButton and SegmentedButton, and all these tags are properly scoped.
    Although the SegmentedButton has dependency to SegmentedButtonItem, the ui5-segmented-button-item tag is used inside the TimeSelectionClocks's ShadowDom (not in the SegmentedButton's ShadowDom), and has to be explicitly added to the TimeSelectionClocks dependencies to be scoped as well.
    
    Fixes: https://github.com/SAP/ui5-webcomponents/issues/7343
