import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "add-polyline";
const pathData = "M0 144V98l179 117L292 64l109 145 79-113 32 19-110 156-110-147-105 141-111-74zm402 257v-73h36v73h74v36h-74v73h-36v-73h-73v-36h73z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "add-polyline";
export { pathData, ltr, accData };