commit a6716382841e828348fb7e3b5c263a029cf143d3
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Tue May 30 09:42:57 2023 +0300

    docs(ui5-menu): improve jsdoc (#7116)
    
    It's followup PR on recently merged change that introduced "before-open" event for opening of sub-menus and new event parameter "item".
    The PR is meant to:
    -correct the event.detail.item "type" in the event docs from "Object" to "HTMLElement" as it's the ui5-menu-item element that is passed as event detail, not some kind of Object.
    - [in addition as I have noticed the events are not described with TS types]
    add new TS types for several events ("item-click", "before-open" and "before-close" as all have event details) and describe their details, and use them in the fireEvent generic syntax to enable static code checks.
