import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "add-point";
const pathData = "M204 17q36 0 68 14t55.5 38 37.5 56 14 68-14 68-37.5 55.5T272 354t-68 14-68-14-56-37.5T42.5 261 29 193t13.5-68T80 69t56-38 68-14zm125 420v-36h73v-73h36v73h74v36h-74v73h-36v-73h-73z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "add-point";
export { pathData, ltr, accData };