import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "male";
const pathData = "M476 78v148h-49v-59l-95 95q27 39 27 89 0 33-13 62.5T311 465t-51.5 34.5T197 512t-62.5-12.5T83 465t-34.5-51.5T36 351t12.5-62.5T83 237t51.5-35 62.5-13q58 0 101 34l93-94h-61V78h146zM197 465q23 0 44-8t36.5-23 24.5-36 9-46q0-24-9-44.5T277.5 271t-36-25-44.5-9-45 9-36 25-24 36.5-9 44.5q0 23 9 43.5t24 36 36 24.5 45 9z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "male";
export { pathData, ltr, accData };