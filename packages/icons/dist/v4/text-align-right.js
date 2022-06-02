import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "text-align-right";
const pathData = "M80 64h368v32H80q-16 0-16-16t16-16zm192 96h176v32H272q-16 0-16-16t16-16zM80 256h368v32H80q-16 0-16-16t16-16zm176 112q0-16 16-16h176v32H272q-16 0-16-16zM64 464q0-16 16-16h368v32H80q-16 0-16-16z";
const ltr = true;
const accData = null;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "text-align-right";
export { pathData, ltr, accData };