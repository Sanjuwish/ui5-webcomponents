commit d6aeb0fd6871555a1737b02fa18d996b7148751a
Author: Konstantin Gogov <68374332+kgogov@users.noreply.github.com>
Date:   Tue Jul 25 14:08:50 2023 +0300

    fix(ui5-checkbox): prevent text selection on checkbox (#7364)
    
    The fix ensures that the checkbox works as expected without causing
    unintended text selection in other elements during user interactions.
    
    Fixes: #7236
