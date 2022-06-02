import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "document";
const pathData = "M453 8q8 8 8 17v460q0 10-7.5 18t-18.5 8H77q-11 0-18-8t-7-18V179q0-11 8-18L213 8q7-8 18-8h204q11 0 18 8zm-43 43H241l-10 10v67q0 21-15 36t-36 15h-67l-10 10v271h307V51z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "document";
export { pathData, ltr, accData };