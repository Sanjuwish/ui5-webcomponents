commit 116594c40fd9ba2800b325f15ab2de9fe10222c8
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Wed Aug 16 13:07:54 2023 +0300

    fix(ui5-select): fix header on phone & update items on options change (#7455)
    
    The PR addresses two issues found accidentally when playing around with the component:
    ### 1. Header on phone
    **before** - two headers are rendered
    **now** - only one header is displayed, the slot attributes was missing from the div, that meant to be a header
    ### 2. Update of the Select's dropdown upon Option web component change:
    **before**: The dropdown used to not reflect changes of the Option's text content. For example, if the content of Option is "Hello" and we change it dynamically to "World" - the change is not reflected in the dropdown immediately, but only after some interaction (that triggers re-rendering)
    **now**: It does, because the Option invalidates itself upon text content changes, and this triggers Select's invalidation and the change is immediately reflected in the UI.
