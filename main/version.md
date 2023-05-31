commit 9c851c5a65094926360530eb3e6cc6050e1f8ce6
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Wed May 31 11:01:59 2023 +0300

    feat(ui5-select): change event is now preventable (#7113)
    
    * feat(ui5-select): change event is now preventable
    
    When the event is fired we still get the original event detail, but if
    we decided to prevent it, the selection is reverted to the previously
    selected item.
    
    Implements #6648
