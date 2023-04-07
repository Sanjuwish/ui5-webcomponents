commit 98c554f94e5d1ccd5987d9b799e7ead3f6a1745b
Author: gmkv <georgi.minkov@sap.com>
Date:   Fri Apr 7 10:38:16 2023 +0300

    fix(ui5-side-navigation): avoid firing selection-change when the selected item is clicked (#6842)
    
    When clicking the already selected item, the actual selection isn't changed,
    but the event `selection-change` is still being fired.
    This commit avoids firing the event unnecessarily.
    
    Fixes #6825
