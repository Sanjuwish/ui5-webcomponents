commit d4d43327a1a88bfa62ed717120e396913d29e026
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Mon Mar 6 13:55:58 2023 +0200

    fix(framework): fix boot, interfering theme load (#6616)
    
    Previously calling `attachBoot` used to trigger `boot`, which was causing unexpected issues.
    One effect of this was that theme properties were not loading properly. This happens when the theme registration (triggered by component define call) comes after someone calls `attachBoot`. In this case, our logic looks for a registered theme properties, can't find any and continues without loading.
    Later when the registration happens and boot is called again, we reuse the created promise and just return,
    and we no longer reach to the point to check and continue with the theme properties loading:
    The PR fixes exactly the described problem:
    - `attachBoot` does not trigger `boot` anymore - only registers listeners, called after boot finishes.
    - adds a test to cover the use-case
    
    Closes: https://github.com/SAP/ui5-webcomponents/issues/6607
