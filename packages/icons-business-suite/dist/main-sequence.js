import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "main-sequence";
const pathData = "M41 186h64q13 0 22.5 9t9.5 23v12h238v-12q0-14 9-23t23-9h64q13 0 22.5 9t9.5 23v64q0 14-9.5 23t-22.5 9h-64q-14 0-23-9t-9-23v-16H137v16q0 14-9.5 23t-22.5 9H41q-14 0-23-9t-9-23v-64q0-14 9-23t23-9z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "main-sequence";
export { pathData, ltr, accData };