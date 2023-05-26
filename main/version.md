commit f8f44e41ac55c0d3c4b1a72648043a1cc9652437
Author: Boyan Rakilovski <boyan.rakilovski@sap.com>
Date:   Fri May 26 18:46:36 2023 +0300

    feat(ui5-segmented-button): enable multiple selection (#6959)
    
    New enumeration "SegmentedButtonMode" and a new property
    "mode" are introduced with allowed values:
    
    - SegmentedButtonMode.SingleSelect
    - SegmentedButtonMode.MultiSelect
    
    Multiple ui5-segmented-button-items could be selected/deselected
    when the "mode" property is to "SegmentedButtonMode.MultiSelect".
    The default value for the "mode" is "SegmentedButtonMode.SingleSelect".
    
    The "ZeroOrSingle" selection could be added in the future if a valid use case is indicated.
