commit d80dbac326af54e9f70635c35a1593bc1d3b55c7
Author: Plamen Ivanov <plamen.ivanov01@sap.com>
Date:   Thu Jul 6 12:42:27 2023 +0300

    fix(ui5-li): remove additional text width restriction (#7274)
    
    Additional text was width restricted and couldn't display its whole
    data, even if there was enough space for it.
    
    After its removal the additional text is still Fiori compatible when
    it collides with the default text (it hyphens).
    
    Fixes: #6937
