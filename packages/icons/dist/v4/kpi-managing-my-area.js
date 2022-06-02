import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "kpi-managing-my-area";
const pathData = "M316.5 85l56 55 110-111 29 35-139 131-83-83zm4 395H.5v-32q0-27 10-50T38 357.5 79 330t49.5-10h32q-40 0-68-28t-28-68 28-68 68-28 68 28 28 68-28 68-68 28h32q27 0 50 10t40.5 27.5 27.5 40.5 10 50v32zm-224-256q0 26 19 45t45 19q27 0 45.5-19t18.5-45q0-27-18.5-45.5T160.5 160q-26 0-45 18.5t-19 45.5zm192 224q0-40-28-68t-68-28h-64q-19 0-36.5 7.5T61 380t-21 30.5-7.5 37.5h256zm80-64h95q16 0 16 16 0 6-4.5 11t-11.5 5h-95q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm0 64h95q16 0 16 16 0 6-4.5 11t-11.5 5h-95q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5z";
const ltr = true;
const accData = null;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "kpi-managing-my-area";
export { pathData, ltr, accData };