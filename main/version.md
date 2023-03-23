commit b36cf6868b3ac637d0a9098cd8b73720bd488de9
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Thu Mar 23 17:07:18 2023 +0200

    chore: refactor `create-package` project template (#6775)
    
    - add more chromeOptions to our wdio config to address some issues when running wdio in Linux dockers
    - generate .gitignore and .npmrc files
    - add detect_chromedriver_version=true flag as part of the .npmrc to install the matching chromedriver of the installed chrome (useful for CI executions)
    - remove the generation of Assets.js in a TS project.
