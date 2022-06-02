import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "area-chart";
const pathData = "M91 269l146-129 110 19L496 0v110L347 252l-110-37-146 65v-11zM50 31v416h446v33H17V31h33zm41 286v-11l146-64 110 37 149-139v122l-149 64-110-37zm146-2l110 37 149-65v128H91v-72z";
const ltr = false;
const accData = null;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "area-chart";
export { pathData, ltr, accData };