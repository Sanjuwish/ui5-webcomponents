import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "shelf";
const pathData = "M467 0q14 0 22 8t8 22v451q0 14-8 22t-22 8-22-8-8-22v-60H76v60q0 14-8 22t-22 8-22-8-8-22V30q0-12 9-21t21-9h421zM76 60v120h361V60H76zm361 300V240H76v120h361zM196 150q-14 0-22-8t-8-22 8-22 22-8h120q14 0 22 8t8 22-8 22-22 8H196zm120 120q14 0 22 8t8 22-8 22-22 8H196q-14 0-22-8t-8-22 8-22 22-8h120z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "shelf";
export { pathData, ltr, accData };