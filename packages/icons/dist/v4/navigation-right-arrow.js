import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "navigation-right-arrow";
const pathData = "M296 268q6-6 6-12t-6-11L139 86q-10-10-10-23t10-22q9-10 22-10t23 10l191 193q9 9 9 22.5t-9 22.5L183 471q-10 10-23 10t-23-10q-9-9-9-22.5t9-22.5z";
const ltr = false;
const accData = null;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "navigation-right-arrow";
export { pathData, ltr, accData };