commit 3c4a8067e7763e282edfc5ea5179122b683aed21
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Fri Jun 30 16:08:14 2023 +0300

    fix(ui5-tabcontainer): fix height in compact (#7280)
    
    Issue: The CSS variable --_ui5_tc_header_height_compact is missing and TC's hight in compact is wrong. The selection line is not visible at all.
    Solution: Use --_ui5_tc_item_height instead.
