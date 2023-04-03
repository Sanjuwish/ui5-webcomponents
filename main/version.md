commit fc993d8cd6716a8b81f389e5f988b6ec2bae0ee5
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Mon Apr 3 17:38:57 2023 +0300

    refactor(ui5-icon): fire 'click' for non-interactive icons (#6713)
    
    Recently, we have changed the behaviour of the Icon to fire "click" event only when "interactive" attribute is set.
    However, there are valid use-cases when an icon should be clickable and to fire "click" without having a focus outline, tab stop. Such use-case is the Input with a slotted icon to implement a SearchField type of functionality. In this case setting "interactive" would lead to double focus (one on the input and one on the icon) when the user clicks on the icon, and additional tab stop.
    With this PR:
    - We changed the configuration to always have "click", even in no conflict mode (previously only ui5-click used to be fired)
    - We now fire "click" for both interactive and non-interactive icons, in detail:
    on mouse-up
    - noConflict true: native "click" event
    - noConflict false: native "click" event
    on SPACE and ENTER (relevant only for interactive icons)
    - noConflict true: custom "click" and "ui5-click" events
    - noConflict false: custom "click" event
