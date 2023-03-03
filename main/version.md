commit 2fa84a451bdfbed97203e18d76c8cb3648ddb899
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Fri Mar 3 16:02:23 2023 +0200

    ci: deploy "latest" playground on release
    
    Currently, someone needs to manually merge commit into the "latest-release-website" branch to trigger update of the  Documentation/Playground.
    With this change, we add a new workflow that automatically will run when creating a "latest" release and update the Documentation/Playground.
