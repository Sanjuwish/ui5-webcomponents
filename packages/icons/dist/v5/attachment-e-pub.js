import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "attachment-e-pub";
const pathData = "M435.5 0q11 0 18 7.5t7 18.5v153q0 26-25 26-26 0-26-26V51h-169l-10 11v66q0 21-15 36t-36 15h-66l-11 10v271h77q11 0 18.5 7t7.5 19q0 11-7.5 18t-18.5 7h-102q-11 0-18.5-7t-7.5-18V179q0-10 8-18l153-153q8-8 18-8h205zm-21 365q8-8 17.5-8t17.5 8 8 18-8 18l-102 102q-8 8-18 8t-18-8l-102-102q-8-8-8-18t8-18l102-102q8-8 18-8t18 8l51 51q8 8 8 18t-8 18l-51 51q-8 8-18 8t-18-8-8-18 8-18l34-33-16-15-66 66 66 66z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "attachment-e-pub";
export { pathData, ltr, accData };