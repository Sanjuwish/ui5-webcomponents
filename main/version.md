commit 90722da24600e28f31864e9f2006d18e97c1e596
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Thu May 18 12:17:49 2023 +0300

    fix(framework): store shared resources as `meta` tag within the `head` (#7051)
    
    **Background**
    Previously we used to create `ui5-shared-resources` semantic HTML element to store shared resources (as registered runtimes, tags and SVGs) that can be reused between multiple UI5 Web Components runtimes.
    The element used to be appended to the `head` in the past, but this produced invalid markup when tested with HTML validators as there is specific list of allowed tags that can be inserted in the `head`. To address this, we moved the `ui5-shared-resources` to the `body`.
    However, currently we got another issue with `the body not being ready` at the point we access it and try to append the `ui5-shared-resources`. And, this issues is subject of the current PR.
    **Solution**
    Use `meta` tag with the minimum required attributes and append it to head (the `meta` tag is allowed in `head`).
    
    FIXES: https://github.com/SAP/ui5-webcomponents/issues/7025
