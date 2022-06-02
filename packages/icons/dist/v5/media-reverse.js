import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "media-reverse";
const pathData = "M438 42q7 5 8.5 11.5T448 71v370q0 20-17 32-9 6-20 6-10 0-18-5L98 289q-19-11-19-29 0-8 5.5-16.5T98 230L393 46q14-9 27-9 5 0 9.5 1t8.5 4zm-64 96L186 256l188 118V138z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "media-reverse";
export { pathData, ltr, accData };