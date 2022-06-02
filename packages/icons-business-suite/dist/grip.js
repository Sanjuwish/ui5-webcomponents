import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "grip";
const pathData = "M301 60V-4h64v64h-64zM173-4h64v64h-64V-4zm0 113h64v64h-64v-64zm128 64v-64h64v64h-64zm64 48v64h-64v-64h64zm-192 64v-64h64v64h-64zm192 47v64h-64v-64h64zm-128 0v64h-64v-64h64zm64 176v-64h64v64h-64zm-128 0v-64h64v64h-64z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "grip";
export { pathData, ltr, accData };