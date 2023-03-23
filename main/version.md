commit cb2f77c86bda9cb4351b8d955d47d12acb8149a6
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Thu Mar 23 10:54:22 2023 +0200

    chore: add `getIconAccessibleName` base method (#6769)
    
    The Button component needs to set the icon's accessible name as its "tooltip". And for that we introduce the `getIconAccessibleName` method to return the accessible name for the given icon name.
    
    Related to: https://github.com/SAP/ui5-webcomponents/pull/6719
