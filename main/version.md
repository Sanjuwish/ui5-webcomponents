commit bb52a7bcfcb2b48f2cc7efe810ca119d09456245
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Wed Apr 5 14:26:34 2023 +0300

    fix(framework): remove invalid element from head (#6848)
    
    The "ui5-shared-resources" elements used to be created in the "head". However, this turns out to be invalid markup as per the HTML standard: title, meta, link, script, style, base, noscript and template tags are allowed only. With this change, it becomes part of the body.
    Note: document.querySelector("ui5-shared-resources") continues working, however accessing via the head, f.e document.querySelector("head>ui5-shared-resources"), won't work anymore.
    
    Fixes: #6748
