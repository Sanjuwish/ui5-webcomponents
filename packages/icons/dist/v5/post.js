import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "post";
const pathData = "M435 1q33 0 55 22t22 54v409q0 8-3.5 14.5T497 509q-15 7-29-5l-94-95H78q-33 0-55-22T1 333V77q0-32 22-54T78 1h357zm26 76q0-25-26-25H78q-26 0-26 25v256q0 25 26 25h306q10 0 18 8l59 59V77z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "post";
export { pathData, ltr, accData };