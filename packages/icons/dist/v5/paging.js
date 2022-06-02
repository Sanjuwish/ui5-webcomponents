import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "paging";
const pathData = "M46 88q-28 0-28-28t28-28h421q28 0 28 28t-28 28H46zm421 140q28 0 28 28t-28 28H46q-28 0-28-28t28-28h421zm0 196q28 0 28 28t-28 28H46q-28 0-28-28t28-28h421z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "paging";
export { pathData, ltr, accData };