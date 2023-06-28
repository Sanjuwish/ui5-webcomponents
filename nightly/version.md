commit 109b6eecb3b56f07c085ed59442c2a73f31644a8
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Wed Jun 28 15:37:29 2023 +0300

    fix(framework): fix OpenUI5Support feature usage (#7265)
    
    Background
    There are use-cases with multiple versions of the framework with some of them with OpenUI5Support enabled and others not. One of the consequences is that the z-indexes of popovers/dialogs on the page are not synchronised as the next z-index is calculated differently when OpenUI5Support is enabled and when isn't.
    Solution
    To always enable the OpenUI5Support feature.
    However, we had to ensure it's completely safe and won't have a side effect when the feature is imported, but OpenUI5 is not loaded on the page. And, this is what the PR addresses by refactoring a single usage in applyTheme and using OpenUI5Support.isOpenUI5Detected to check if OpenUI5 is available in the runtime.
    
    Fixes: #7175
