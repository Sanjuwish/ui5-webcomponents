import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_DELETE } from "../generated/i18n/i18n-defaults.js";

const name = "delete";
const pathData = "M32 64V32h145l1-5 6-11 14.5-11L224 0h65q15 0 29.5 7.5T336 32h144v32H32zm448 32v33h-32l-32 351q0 32-32 32H128q-32 0-32-32L64 129H32V96h448zM128 480h256l32-351H96zm181-66l20-224 33 3-20 224zM150 193l31-3 20 224-31 3zm88 223V191h34v225h-34z";
const ltr = false;
const accData = ICON_DELETE;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "delete";
export { pathData, ltr, accData };