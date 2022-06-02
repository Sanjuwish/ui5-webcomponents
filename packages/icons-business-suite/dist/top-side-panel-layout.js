import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "top-side-panel-layout";
const pathData = "M0 512V0h512v512H0zm32-384h448V32H32v96zm128 32v320h320V160H160zM32 480h96V160H32v320z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "top-side-panel-layout";
export { pathData, ltr, accData };