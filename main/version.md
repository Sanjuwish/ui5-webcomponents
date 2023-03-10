commit 3a000ce0c4d1e15537209068226bced3381b0bba
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Fri Mar 10 10:14:39 2023 +0200

    fix(ui5-breadcrumbs): import used arrow-down icon (#6685)
    
    The icon is used in the template but not imported - this means that won't be displayed in productive app, when not all the icons are available (as in the playground or our test pages).
