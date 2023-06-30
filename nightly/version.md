commit f656747cd810864d7f21f46494275f10ada37078
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Fri Jun 30 07:59:35 2023 +0300

    docs(ui5-view-settings-dialog): fix docs page horizontally overflowing in storybook (#7230)
    
    The previous JSDoc description for the setConfirmedSettings method lacked proper line breaks, leading to a text overflow on the 'Docs' page of Storybook. This resulted in an unintended horizontal overflow throughout the page.
    
    With this update, we've reformatted the JSDoc to prevent such issues, ensuring a better reading experience on the Storybook 'Docs' page.
