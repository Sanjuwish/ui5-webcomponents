import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "scatter-chart";
const pathData = "M17 480V32h31v416h448v32H17zm94-416h33V32h32v32h32v32h-32v32h-32V96h-33V64zM80 224h190V33h36v191h126v-32h-32v-32h32v-32h32v32h32v32h-32v32h32v31H306v162h-36V255h-62v33h32v32h-32v32h-32v-32h-32v-32h32v-33H80v-31zM368 65V33h32v32h32v32h-32v32h-32V97h-32V65h32zm0 255h32v-32h32v32h32v32h-32v32h-32v-32h-32v-32z";
const ltr = false;
const accData = null;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "scatter-chart";
export { pathData, ltr, accData };