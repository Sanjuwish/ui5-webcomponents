import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "arrow";
const pathData = "M447 289q1 14-8 23t-23 8q-14 1-23-8.5t-9-23.5l1-147-263 263q-9 9-22 9-14 0-23-9-10-10-9.5-23t9.5-22L340 96l-148 1q-13 0-22.5-9.5T160 65q0-14 9.5-23.5T193 32h223q13 0 22.5 9.5T448 64z";
const ltr = false;
const accData = null;
const collection = "tnt";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "arrow";
export { pathData, ltr, accData };