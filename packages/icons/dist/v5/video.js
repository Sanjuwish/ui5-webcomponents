import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "video";
const pathData = "M450 65q26 0 44 18.5t18 45.5v190q0 27-18 46t-44 19q-11 0-22-4t-19-9l-53-41q-8 23-28.5 38.5T281 384H76q-32 0-54-22.5T0 307V142q0-33 22-55t54-22h205q27 0 47 15.5t28 38.5l53-41q18-13 41-13zm-143 77q0-11-7-18.5t-19-7.5H76q-11 0-18 7.5T51 142v165q0 25 25 25h205q26 0 26-25V142zm154-13q0-13-16-13h-1q-1 1-1.5 1t-2.5 2l-72 54q-4 4-7 9t-3 11v62q0 6 3 11.5t7 9.5l72 54q3 2 8 2 13 0 13-13V129z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "video";
export { pathData, ltr, accData };