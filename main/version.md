commit e338882f19d17c95898e07aaa0afacfc2ec0ae4a
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Wed Mar 22 10:57:43 2023 +0200

    docs: fix NotificationListItemBase's jsdoc (#6751)
    
    NotificationListItemBase's appears to be `ui5-li-notification-group` but should not:
    ```json
    {
    "kind": "class",
    "name": "sap.ui.webc.fiori.NotificationListItemBase",
    "basename": "NotificationListItemBase",
    "tagname": "ui5-li-notification-group",
    }
    ```
     Also, no need to append docs, as this is done by the NotificationListItem and NotificationListGroupItem.
