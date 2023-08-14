commit 18b21bfdb90ba2672aeb055d9443f1875cf381c7
Author: Boyan Rakilovski <boyan.rakilovski@sap.com>
Date:   Mon Aug 14 11:37:28 2023 +0300

    feat(ui5-menu): make the item click event cancellable (#7360)
    
    feat(ui5-menu): make the item click event cancellable
    
    Requirement:
    - Currently the menu closes when a menu item gets selected.
    - Enable users to press multiple menu items.
    
    Fixes: #5600
