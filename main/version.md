commit 9b6c414e7ae625d835a7d14c3761d2c235b750ff
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Fri Mar 17 15:38:15 2023 +0200

    fix(framework): apply theme after every theme props registration (#6718)
    
    There are use-cases when the framework boots, but the theme has not been registered and applied.
    And, currently the framework won't apply a theme after boot finishes.
    With this PR the framework will apply theme properties always when theme registration occurs.
    when the theme properties are registered before boot, an event will be fired, notifying for the theme registration, but as the boot did not finish, the event will be disregarded and the theme will be applied as usual.
    when the theme properties are being registered after boot, an event will be fired, notifying for the theme registration and the registered styles will be applied.
    
    Fixes: #6666
