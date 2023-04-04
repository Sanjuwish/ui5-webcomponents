commit d16cf33ef9418d7ae8857845709dd618593a3d96
Author: Kieran Sukachevin <54186484+kieransukachevin@users.noreply.github.com>
Date:   Tue Apr 4 00:58:06 2023 -0700

    fix(ui5-daypicker): date selection range light blue indication (#6836)
    
    When selecting a date range in the Calendar with selection mode Range, if you select a new start date (and thus have only one date selected), a range of dates have their background color set to light blue indicating they are in the selected date range. This is incorrect since there is only one date selected and therefore no date range yet.
    
    Fixes #6781
