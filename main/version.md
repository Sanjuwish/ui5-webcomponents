commit ae11e1d7389711e78808819057bf9fa741e5b8af
Author: Nikolay Deshev <nikolay.deshev@sap.com>
Date:   Mon Apr 10 19:22:29 2023 +0300

    fix(ui5-table): prevent Safari from crashing (#6888)
    
    * fix(ui5-table): prevent Safari from crashing
    
    The combination of display: table-cell and overflow: hidden styles
     was causing the browser to crash upon component re-rendering
    
    Fixes: #6570
    
    * fix(ui5-table): prevent Safari from crashing
    
    * fix(ui5-table): prevent Safari from crashing
    
    Remove overflow: hidden style from the ui5-table-cell for all browsers
    
    ---------
    
    Co-authored-by: Deshev <I521896@Deshevs-MacBook-Pro.local>
