commit f08638a427a13b91ed0100d985ddd801e2e02eed
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Tue May 23 13:32:27 2023 +0300

    feat(ui5-list): selection-change event is now preventable (#7007)
    
    * feat(ui5-list): selection-change event is now preventable
    
    When the event is fired we still get the original event detail, but if
    we decided to prevent it, the selection is reverted to the previously
    selected items.
    
    Implements #6589
