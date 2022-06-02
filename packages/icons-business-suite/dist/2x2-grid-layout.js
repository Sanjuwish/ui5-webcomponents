import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "2x2-grid-layout";
const pathData = "M0 512V0h512v512H0zM272 32v208h208V32H272zM32 240h208V32H32v208zm448 240V272H272v208h208zm-448 0h208V272H32v208z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "2x2-grid-layout";
export { pathData, ltr, accData };