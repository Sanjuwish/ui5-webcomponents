import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "media-play";
const pathData = "M433.5 246q8 5 8 13.5t-8 13.5l-314 203q-8 4-17 4-13 0-22.5-9t-9.5-23V64q0-14 9.5-23t22.5-9q7 0 17 5zm-96 13l-203-135v266z";
const ltr = true;
const accData = null;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "media-play";
export { pathData, ltr, accData };