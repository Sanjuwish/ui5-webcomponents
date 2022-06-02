import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_BACK_TO_TOP } from "../generated/i18n/i18n-defaults.js";

const name = "back-to-top";
const pathData = "M389.5 236q9 8 9 19.5t-9 20.5q-8 8-19.5 8t-20.5-8l-65-66v273q0 28-28 28-13 0-21-7.5t-8-20.5V210l-65 66q-8 8-19.5 8t-20.5-8q-8-9-8-20.5t8-19.5l111-111q5-5 9.5-8t13.5-3q8 0 13 3t10 8zm94-236q13 0 20.5 8t7.5 21q0 28-28 28h-454q-13 0-21-7.5T.5 29t8-21 21-8h454z";
const ltr = false;
const accData = ICON_BACK_TO_TOP;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "back-to-top";
export { pathData, ltr, accData };