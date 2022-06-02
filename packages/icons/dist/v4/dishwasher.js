import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "dishwasher";
const pathData = "M64 33h384q13 0 22.5 9t9.5 23v384q0 13-9.5 22.5T448 481H64q-14 0-23-9.5T32 449V65q0-14 9-23t23-9zm-1 128h384V64H63v97zm337-65q16 0 16 16t-16 16-16-16 16-16zm-80 16q0-16 16-16t16 16-16 16-16-16zM63 448h384V192H63v256zm241-187l34-34q2-2 5-2 4 0 6 2 3 3 3 6 0 2-3 5l-34 34q-3 3-6 3-2 0-5-3t-3-5q0-3 3-6zm-64 0l34-34q2-2 5-2 4 0 6 2 3 3 3 6 0 2-3 5l-34 34q-3 3-6 3-2 0-5-3t-3-5q0-3 3-6zm116 14l46-46q2-2 5-2 4 0 6 2 3 2 3 5t-3 7l-45 45q-2 2-4 2l-1-1q-2 0-7-1-3-3-3-5 0-3 3-6zM96 385q0-20 7.5-37.5t20.5-31 30.5-21T192 288t37.5 7.5 30.5 21 20.5 31T288 385q0 8-2 16l-4 16h-35q4-8 6.5-16t2.5-16q0-27-19-46t-45-19q-27 0-45.5 19T128 385l8 32h-35q-2-11-3.5-19T96 385zm209-58q13-7 31-7 33 0 56.5 23.5T416 401q0 4-.5 7.5T414 417h-33l2-8 1-8q0-20-14-34.5T336 352q-1 1-5 1-2 1-6 1.5t-9 2.5q-2-5-4.5-12.5T305 327z";
const ltr = false;
const accData = null;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "dishwasher";
export { pathData, ltr, accData };