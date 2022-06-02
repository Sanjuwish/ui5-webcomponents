import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "attachment-html";
const pathData = "M435 1q12 0 19 7.5t7 18.5v153q0 11-7 18.5t-19 7.5q-11 0-18-7.5t-7-18.5V52H241l-10 11v66q0 21-15 36t-36 15h-67l-10 10v271h77q25 0 25 26 0 25-25 25H78q-26 0-26-25V180q0-10 8-18L213 9q8-8 18-8h204zM297 316q8 8 8 17.5t-8 17.5l-33 34 33 33q8 8 8 17.5t-8 17.5-17.5 8-17.5-8l-52-51q-8-8-8-17.5t8-17.5l52-51q8-8 17.5-8t17.5 8zm154 51q8 8 8 17.5t-8 17.5l-52 51q-8 8-17.5 8t-17.5-8-8-17.5 8-17.5l33-33-33-34q-8-8-8-17.5t8-17.5 17.5-8 17.5 8z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "attachment-html";
export { pathData, ltr, accData };