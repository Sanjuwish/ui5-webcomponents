import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "journey-depart";
const pathData = "M192 416q53 0 95-31h47q-26 29-63 46t-79 17q-40 0-75-15t-61-41-41-61-15-75 15-75 41-61 61-41 75-15q42 0 79 17.5t63 46.5h-48q-20-14-44-23t-50-9q-33 0-62.5 12.5t-51 34.5-34 51T32 256t12.5 62 34 51 51 34.5T192 416zm311-184q9 10 9 23t-9 23l-92 86q-5 5-11 5t-11-5-5-11.5 5-11.5l75-69H208q-16 0-16-16t16-16h256l-75-68q-5-5-5-11.5t5-11.5 11-5 11 5z";
const ltr = false;
const accData = null;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "journey-depart";
export { pathData, ltr, accData };