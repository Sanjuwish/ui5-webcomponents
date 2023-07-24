commit 0f90a53e2d1e353dc0a6cc66f4bc6afb3e4b86b5
Author: Konstantin Gogov <68374332+kgogov@users.noreply.github.com>
Date:   Mon Jul 24 09:25:10 2023 +0300

    fix(ui5-checkbox): trigger form validation when required (#7363)
    
    The issue seems to happen because the internal formSupport slot has
    disabled attribute. When inputs are disabled, the client does not send
    their values, resulting in the browser skipping validation.
    
    Fixes: #7319
