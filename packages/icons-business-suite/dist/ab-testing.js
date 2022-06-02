import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "ab-testing";
const pathData = "M73 164l-20-17h346l-20 17H73zm369-9v261H10V155l217 183zm38 295V208h31v272H59v-30h421zm-69-228L227 376 41 222v164h370V222z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "ab-testing";
export { pathData, ltr, accData };