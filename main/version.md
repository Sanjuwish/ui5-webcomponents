commit c33cc3098d7c8c53f55b1760e2510c5399c3114d
Author: Kieran Sukachevin <54186484+kieransukachevin@users.noreply.github.com>
Date:   Tue Feb 21 06:42:23 2023 -0800

    fix(ui5-checkbox, ui5-radiobutton, ui5-link): fix "Normal" text wrapping (#6539)
    
    The UI5 Web Components documentation specifies that the CheckBox, RadioButton, and Link components have a
    `wrappingType` property with possible values of `"None"` and `"Normal"`. For each component,
    if `wrappingType` is set to `"Normal"`, the documentation specifies that: "The text will wrap. The words will not be broken based on hyphenation". For the UI5 "Classic" Framework's controls, they also support `"Normal"` for `wrappingType`, where the documentations specifies: "Normal text wrapping will be used. Words won't break based on hyphenation."
    We assume that the wrapping implementation of `"Normal"` for the UI5 Web Components should be the same
    as the implementation of `"Normal"` for the UI5 "Classic" Framework's controls.
    
    Fixes #6278
