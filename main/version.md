commit 9373abfd0114650069855419f1caeb2fc5462114
Author: Konstantin Gogov <68374332+kgogov@users.noreply.github.com>
Date:   Fri Jun 2 17:28:41 2023 +0300

    fix(ui5-shellbar): improve RTL styling of searchField (#7089)
    
    fix(ui5-shellbar): improve RTL styling
    
    By removing the `float` property, the searchField slot can now expand
    to its parent full width container in RTL mode.
    
    Fixes: #7065
