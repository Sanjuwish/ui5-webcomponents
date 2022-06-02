import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "message-popup";
const pathData = "M435.5 0q32 0 54 22.5t22 54.5v409q0 8-3.5 14.5t-11.5 8.5q-14 7-28-5l-95-95h-296q-32 0-54.5-22T.5 332V77Q.5 45 23 22.5T77.5 0h358zm25 77q0-11-7-18.5t-18-7.5h-358q-11 0-18 7.5t-7 18.5v255q0 26 25 26h307q8 0 18 8l58 58V77zm-204 128q-11 0-18.5-7.5t-7.5-18.5v-51q0-11 7.5-18t18.5-7q25 0 25 25v51q0 11-7 18.5t-18 7.5zm0 38q16 0 27 11t11 27q0 17-11 28t-27 11-27-11-11-28q0-16 11-27t27-11z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "message-popup";
export { pathData, ltr, accData };