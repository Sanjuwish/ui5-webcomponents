commit deb66857c47f469cd055dd26c3f63521005f34c9
Author: Boyan Rakilovski <boyan.rakilovski@sap.com>
Date:   Thu Apr 20 15:05:29 2023 +0300

    feat(ui5-menu): provide busy indicator display (#6866)
    
    * feat(ui5-menu): provide busy indicator display
    
    New property "busyIndicator" has been introduced.
    Through this property the application developers
    will be able to configure a busy indicator display
    for a particular ui5-menu DOM representation.
    That way there will be a busy indicator while
    the corresponding menu item texts are getting fetched
    from a database.
    
    Fixes: #6131
