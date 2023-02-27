commit c4c3de64ff862681b7491220a1be8f374c5f5000
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Mon Feb 27 16:19:13 2023 +0200

    chore(ui5-notification-action): return result from `fireEvent` call (#6598)
    
    In previous change, part of the TS migration, fireClickEvent has been introduced, to wrap a call to fireEvent.
    Since fireEvent returns boolean (event has been prevented or not), we need to also return that result from fireClickEvent, so that consumers of fireClickEvent can use it (if needed). The result of the call was not used, so there is no bug introduced, but it's good to return it for robustness and completeness.
