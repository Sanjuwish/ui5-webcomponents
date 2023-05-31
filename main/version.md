commit 8085abb8db586554eef93e2e7b277a2d6df47095
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Wed May 31 19:19:24 2023 +0300

    chore: fix import to "Tent" illustration (#7132)
    
    The import to the Tent illustration was wrong. Previously the import used to include the "sapIllus-Scene-Tent.js" which is the illustration just for one of the sizes (the illustration changes on resize). However, we need to import the top-level module "Tent.js" as it's the one to register the illustration "Tent" in the illustration registry.
    And to force the "Scene" size, we can set it directly in the template as the IllustratedMessage provides a property for it - "size".
    
    In the test pages and the playground sample we have all illustrations as part of the bundle, so the problem can't be seen - it does not matter if it's written as before or even if we don't add the import at all, the illustration will be displayed.
    However, in real-case apps where the app imports only the things that are used, the illustration won't be imported properly and error will be thrown:
