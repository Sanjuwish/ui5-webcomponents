commit 647f88c94c6b101579778359bbad525adf8d3029
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Wed May 31 10:40:44 2023 +0300

    chore: add event detail types (#7119)
    
    The PR addresses inconsistencies with event detail types: missing types, wrong naming or missing exports of types:
    add missing event detail types
    rename existing types to follow the convention: type {ComponentName}{EventName}EventDetail = {}
    export all event detail types
    re-export event detail types of base classes from child classes (see DateTimePicker, DateRangePicker)
    
    Fixes: #7118
