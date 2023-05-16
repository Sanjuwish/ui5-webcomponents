commit 776f9058de5b4e37489dd3ef388863edc2627eb3
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Tue May 16 11:55:45 2023 +0300

    feat(framework): add `ignoreCustomElements` public API (#7027)
    
    The framework always waits for the definition of slotted children inside UI5 Web Components' if they have hyphen ("-") in their name (e.g another custom element), which is required in many cases, but unnecessary when the slotted custom HTML element has no JavaScript attached and has pure semantic purpose.
    Provide new API to allow users define such tags that later the framework can ignore, improving the time to render factor for our components.
    The feature is useful, when UI5 Web Components and used together with custom HTML elements with custom tags to make application's markup more semantic.
    
    Fixes: https://github.com/SAP/ui5-webcomponents/issues/6909
