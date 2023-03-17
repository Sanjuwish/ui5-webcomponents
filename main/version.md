commit 215a888b006e46d431edd6324812b9d39249aef4
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Fri Mar 17 15:23:50 2023 +0200

    fix: fix eslint for JS 3rd party projects (#6725)
    
    When creating a JS type of components package via the yarn create @ui5/webcomponents-package command, the @typescript-eslint package that is used by the eslint config requires typescript and the lint command fails. Now the TS overrides are added only for TS projects and JS Projects lint works properly.
