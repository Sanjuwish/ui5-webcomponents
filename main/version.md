commit 5c995bf378e305296917b2636abdfcf4ddf81958
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Mon May 29 16:41:45 2023 +0300

    fix(ui5-datetime-picker/ui5-time-picker): fix top and bottom overflows of input (#6886)
    
    There was a little overflowing on the top and bottom part of the input fields of the ui5-datetime-picker and the ui5-time-picker caused by margins not set to the host of the elements.
    With this change the margins are now set correctly.
