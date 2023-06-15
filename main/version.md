commit 54e615cffc047b8e1e72861a5be7d50bfcc2d6bf
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Thu Jun 15 16:17:01 2023 +0300

    fix(framework): support older OpenUI5 getThemeRoot API (#7202)
    
    Theming.getThemeRoot is recently added OpenUI5 API, but not released yet (available on nightly snapshot). To support currently released OpenUI5 versions we need to use the older API "Configuration#getThemeRoot".
    - Fetch Theming only for OpenUi5 versions since 1.116.0 and onward
    - For OpenUi5 versions prior to 1.116.0
    use Configuration#getThemeRoot API
    - For the version processing, use the global util "sap/base/util/Version"
    
    Fixes: #7199
