commit c90cf0c2521cdbf063ba55706c25006a9f13e68a
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Tue Feb 28 14:00:40 2023 +0200

    feat(framework): use decorators for all static getters to define a custom element (#6538)
    
    This PR adds possibility to replace all static getters, such as `static get dependencies`, `static get render`, `static get template`,`static get styles`, etc. with TS decorators to make component development even more declarative.
    - **super** can't be  called in decorators -  expressions like `...super.styles` and `...super.dependencies` can't be used with decorators and we need to refer the base class explicitly (see TreeItemBase)
    - `static get render` is deprecated in favour of `renderer`, which is more appropriate name. For compatibility, we internally still support the `static get render` as before.
    - all "main" components already refactored
    
    Closes: https://github.com/SAP/ui5-webcomponents/issues/6528
    Closes: https://github.com/SAP/ui5-webcomponents/issues/6529
