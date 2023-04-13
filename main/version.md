commit e1e8cf5e283903a3a10fc9711b3e96e6e465aa7e
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Thu Apr 13 09:00:21 2023 +0300

    fix(ui5-menu): fix children closing unexpectedly when opener is right aligned (#6894)
    
    We have an issue which occurs when using the ui5-menu component, where the opener of the menu is aligned to the right side of the screen. When attempting to hover over the sub-menu items, they unexpectedly close or disappear. This problem occurs more frequently when the cursor is moved slowly.
    The cause of this issue seems to be a small gap between the menu and the sub-menu items, which is only noticeable when the opener is aligned to the right side of the screen. This issue can be frustrating for users who are trying to navigate the menu and its sub-menus.
    - With this change, the sub-menus are aligned properly ( including in RTL, LTR mode ).
    
    Fixes: #5802
