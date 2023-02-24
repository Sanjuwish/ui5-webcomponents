commit ec995f1cee7b621c93b0016785d28c9d6413d634
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Fri Feb 24 15:19:37 2023 +0200

    fix(ui5-select): fixed valuestate message scroll prevention (#6548)
    
    If the valuestate message text is too long, sometimes it all the
    space of the selec't popover. This way the select items are not visible
    and can't be accessed by scrolling.
    This is why valuestate is no longer in the header slot of the
    select's popover but in the content slot. This way a scrollbar appears
    when the valuestate text is too long and the select's items are not
    visible/accessible.
    
    Fixes #5970
