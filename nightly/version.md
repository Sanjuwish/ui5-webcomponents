commit 22c84c66a1809fe622333f2eaaa9af1239a577ac
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Thu Jul 27 13:39:38 2023 +0300

    refactor(ui5-table-row): remove unused attr (#7376)
    
    The attribute data-ui5-dir is not used by the Table row (used to be part of the styles selectors, but the code changed and this hasn't been removed). Moreover, the UI5Element's effectiveDir call leads to getComputedStyle call that could have performance impact in case of a Table with many rows.
    
    Related to: #7303
