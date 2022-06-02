import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "aggregated-view";
const pathData = "M40 32h336q8 0 8 8v112q0 8-8 8H40q-8 0-8-8V40q0-8 8-8zm120 168q0-8 8-8h304q8 0 8 8v112q0 8-8 8H168q-8 0-8-8V200zm-48 160q0-8 8-8h256q8 0 8 8v112q0 8-8 8H120q-8 0-8-8V360z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "aggregated-view";
export { pathData, ltr, accData };