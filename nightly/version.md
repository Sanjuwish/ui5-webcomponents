commit 3317e64b911f992abf34b88a48e6003a723f7b9e
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Mon Jun 26 12:59:45 2023 +0300

    fix: fix image in `create-webcomponent-package` (#7253)
    
    Image has been displayed via png, causing issues when copying files and initialising repositories via the create-webcomponent-package. That's why we opted for inlining the image with base64 provided as data.
