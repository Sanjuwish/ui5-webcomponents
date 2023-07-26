commit 5a7f41f3593563ca3ecef5b8006a7a5cef9b63de
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Wed Jul 26 11:43:57 2023 +0300

    fix(ui5-switch): align text/icon properly in switch handle (#7350)
    
    Currently there was a case where we apply left, right CSS properties, which were intended for ui5-switch instances, which are using icons in their handles ( f.e basic switch with no text set, switch with design="Graphical", and so on). However these styles were applying even for switches, which had text-on and text-off properties, which caused a slight misalignment.
    Now the content in the ui5-switch handles, are properly aligned.
