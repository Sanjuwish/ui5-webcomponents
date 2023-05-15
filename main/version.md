commit 5eb5c3d91bb6746226b4aa24b868f31fa0ad13ea
Author: ilhan orhan <ilhan.myumyun@sap.com>
Date:   Mon May 15 12:45:07 2023 +0300

    chore: revert ts moduleResoluition `node16`  to `node` (#7030)
    
    Recently we [changed](https://github.com/SAP/ui5-webcomponents/pull/6981) our tsconfig to use Module Resolution ["node 16",](https://www.typescriptlang.org/tsconfig#moduleResolution) instead of "node" to get better ECMAScript Module Support:
    - 'node' for Node.js’ CommonJS implementation
    - 'node16' or 'nodenext' for Node.js’ ECMAScript Module Support [from TypeScript 4.7](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs)
    
    However, we faced issues on the application side. The TS compiler throws errors in Typescript applications that uses UI5 Web Components for files in applications' node_modules. More specifically, the problem was caused by new attribute  "'resolution-mode'" added to the auto-generated .d.ts files that requires also tsconfig change by the project installed our code.
    
    ```sh
    Error: node_modules/@ui5/webcomponents/dist/DateComponentBase.d.ts:1:23 - error TS1452:
    'resolution-mode' assertions are only supported when `moduleResolution` is `node16` or `nodenext`.
    /// <reference types="openui5" resolution-mode="require"/>
    ```
    Although these errors can be handled with `skipLibCheck` flag set to "true", it's a bad experience to require a particular flag to just make an app working and we decided to revert this as it's seems the setting is not stable enough and can cause unexpected problems for consumers.
    
    Related to: https://github.com/SAP/ui5-webcomponents/pull/7020#issuecomment-1546152836
    Reverts: https://github.com/SAP/ui5-webcomponents/pull/6981
