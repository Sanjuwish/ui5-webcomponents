import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sys-cancel";
const pathData = "M256.5 0q53 0 99 20t81 55 55 81.5 20 99.5q0 52-20 98.5t-55 81.5-81 55-99 20-99.5-20-81.5-55-55-81.5T.5 256q0-53 20-99.5t55-81.5T157 20t99.5-20zm0 460q42 0 79-16t65-44 44-65 16-79-16-79.5-44-65.5-65-44-79-16T177 67t-65.5 44-44 65.5-16 79.5 16 79 44 65 65.5 44 79.5 16zm94-146q8 8 8 18t-8 18-18 8-18-8l-58-59-59 59q-8 8-18 8t-18-8-8-18 8-18l59-58-59-59q-8-8-8-18t8-18 18-8 18 8l59 59 58-59q8-8 18-8t18 8 8 18-8 18l-59 59z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "sys-cancel";
export { pathData, ltr, accData };