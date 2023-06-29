commit 4185943e9e712a6545e9edb2ae0d11ce7e04e18c
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Thu Jun 29 10:07:14 2023 +0300

    docs(framework): improve OpenUI5Support feature usage documentation (#7200)
    
    In some cases the OpenUI5Support feature is enabled but sap.ui.require("sap/ui/core/Popup") returns undefined leading to exceptions when trying to read Popup.getNextZIndex().
    The root cause was the import order of the modules. The OpenUI5Support feature module was included after the component's import and the features was not enabled on framework boot and not initialised properly. As a result the Popup hasn't been loaded and later when getNextZIndex is called, requiring the Popup from OpenUI5 fails and returns undefined.
    Although we can add a check and prevent the exception, actually it's better to leave it failing, but add a message why the exception is thrown and how to correctly one should use the OpenUI5Support feature.
    In addition, the documentation has been improved to explain this part.
    For framework features is important to be enabled on boot, e.g to be imported after the components (the components definition triggers boot) so that they serve their purpose.
    For example, when OpenUI5Support feature is enabled the framework reuses fonts, configuration and other assets from OpenUI5, otherwise we use ours and it does not makes sense to enable the feature later when the framework already initialized/booted and we already used or config or loaded our assets.
    
    Fixes: #7128
