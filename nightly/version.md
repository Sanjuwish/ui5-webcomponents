commit b46eda5a6dccc9b783d40fc33353c6e08b4652e7
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Fri Aug 4 12:37:34 2023 +0300

    feat(ui5-menu): add delay between opening and closing submenu and sub menu items (#7246)
    
    Previously, the sub-menus would open and close in an instant when hovering over or hovering out of a menu item. This sometimes caused unintentional closing of sub-menus, resulting in a poor user experience.
    To address this, we made the following changes:
    - We added a 300ms delay when opening a sub-menu upon hovering over it.
    - Added 400ms delay when closing a sub-menu upon hovering out.
