commit 216f6a7a476d18a0f6fdf7ff189f953085e30b47
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Wed Jun 7 15:16:06 2023 +0300

    fix(ui5-calendar): prevent focus loss during arrow navigation with mouse/touch (#6957)
    
    Currently when clicking/tapping the arrows that navigate to the next/previous month, the focus is lost. It should be on the first day of the newly displayed month if the "Next" button is clicked, and on the last day of the displayed month if the "Prev" button is clicked.
    With this change we apply the focus correctly, when navigating through the Calendar's header using mouse or touch through the arrow buttons (incl. DatePicker, DateRangePicker, DateTimePicker controls that utilize it).
