commit b20c946a00a91cc25eb709f839ccaa12998bf58e
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Wed Jun 7 16:23:03 2023 +0300

    fix(ui5-bar): correct padding values in dialog (#7046)
    
    Based on the design specifications, the intended padding for both the left and right sides of the ui5-bar should be 16px. However, upon observation, it is evident that the actual padding measures only 12px ( 0.5rem padding of the endcontent container + 0.25rem margin of the slotted element ).
    With this changes, the paddings are now correct.
