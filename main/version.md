commit f10c25147bf919c5c732640e36971c6b027a7fc1
Author: gmkv <georgi.minkov@sap.com>
Date:   Wed Apr 26 10:30:01 2023 +0300

    fix(ui5-dialog): always wait for applying of initial focus to complete (#6912)
    
    Sometimes on Safari, after the dialog is opened, a focusin event will be fired on the root. This event will race with the applyInitialFocus call which results in the wrong element being focused.
    
    This PR attempts to solve the issue.
    
    Part of #6768
