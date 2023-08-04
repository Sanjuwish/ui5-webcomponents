commit 3b7c711875303be0bb995c80545a9786b2ec511c
Author: Konstantin Gogov <68374332+kgogov@users.noreply.github.com>
Date:   Fri Aug 4 16:22:41 2023 +0300

    fix(ui5-shellbar): button focus outline adjustment (#7389)
    
    * fix(ui5-shellbar): button focus outline adjustment
    
    This commit addresses an issue identified after the recent update
    related to runtime-based CSS variables for components.
    
    It adjusts the focus outline of the ShellBar buttons across all themes.
    
    Fixes #7220
    
    * fix(ui5-shellbar): simplified the outline style
