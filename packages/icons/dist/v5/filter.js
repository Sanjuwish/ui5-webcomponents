import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_FILTER } from "../generated/i18n/i18n-defaults.js";

const name = "filter";
const pathData = "M507.417 50q5 9 4 17.5t-4 13.5l-153 214v118q0 10-5.5 17t-13.5 12l-127 64q-17 10-32 0-16-11-16-29V295l-153-214q-5-7-6.5-15.5t3.5-15.5q10-16 28-16h447q18 0 28 16zm-92 47h-322l124 173q2 5 4.5 9.5t2.5 9.5v140l63-32V289q0-5 2.5-9.5t4.5-9.5z";
const ltr = false;
const accData = ICON_FILTER;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "filter";
export { pathData, ltr, accData };