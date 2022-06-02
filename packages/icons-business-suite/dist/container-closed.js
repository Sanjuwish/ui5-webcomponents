import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "container-closed";
const pathData = "M64 32h384q13 0 22.5 9.5T480 64v384q0 14-9.5 23t-22.5 9H64q-14 0-23-9t-9-23V64q0-13 9-22.5T64 32zm0 416h176V64H64v384zm208-224h96v80h-32v-48h-64v192h176V64H272v160z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "container-closed";
export { pathData, ltr, accData };