commit d37b319eb6f9b6ca27bd08a8a389595424f69f6e
Author: Marcus Notheis <marcus.notheis@sap.com>
Date:   Mon Mar 13 18:47:25 2023 +0100

    chore(InputsElementFormSupport): add file extension to import (#6690)
    
    Without the .js file extension, projects building in ESM mode will fail due do an import error:
    `node_modules/@ui5/webcomponents/dist/features/InputElementsFormSupport.d.ts:1:29 - error TS2307: Cannot find module '@ui5/webcomponents-base/dist/UI5Element' or its corresponding type declarations.`
