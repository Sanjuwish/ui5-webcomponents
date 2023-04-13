commit f4fb81530b4c1a271cca52cd393b824dccb891cd
Author: Vladislav Tasev <vladitasev@users.noreply.github.com>
Date:   Thu Apr 13 14:26:38 2023 +0300

    fix(framework): export StaticArea class (#6917)
    
    Since this modules has no import, nor export statements, some build tools may get confused about its module type. To avoid this, the otherwise anonymous class is now named, and exported. This will not change existing functionality.
    
    closes: #6916
