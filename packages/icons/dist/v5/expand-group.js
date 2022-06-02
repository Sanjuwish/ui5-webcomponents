import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_EXPAND_GROUP } from "../generated/i18n/i18n-defaults.js";

const name = "expand-group";
const pathData = "M359.5 300q9-9 22-9 12 0 22 9 9 10 9 22 0 13-9 22l-124 124q-10 9-22 9-13 0-22-9l-124-124q-9-9-9-22 0-12 9-22 9-9 22-9 12 0 22 9l102 103zm2-225q9-9 22-9 12 0 21 9 10 9 10 22 0 12-10 22l-124 124q-9 9-21 9-13 0-22-9l-124-124q-9-11-9-22 0-13 9-22t22-9q12 0 22 9l102 103z";
const ltr = false;
const accData = ICON_EXPAND_GROUP;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "expand-group";
export { pathData, ltr, accData };