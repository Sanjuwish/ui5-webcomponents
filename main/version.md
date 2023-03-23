commit d2b45620cd50fd217e8015ca702552ce59b241ca
Author: Andreas Kunz <andreas.kunz@sap.com>
Date:   Thu Mar 23 11:41:49 2023 +0100

    chore: improve DatePicker/TimePickerBase types (brought over from OpenUI5) (#6753)
    
    Тhose types were in the meantime improved in the copy in the OpenUI5 repo, but reverted by the latest copy.
    I redid the improvements in I9663c71d80280bb0841fb8a2e36c44a174378955, but they would be overridden again. Am I right assuming that the DateTimePicker etc. get the types from these two base classes?
    The commit message mimics the one of e50e00c
