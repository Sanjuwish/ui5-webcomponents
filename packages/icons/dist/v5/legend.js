import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "legend";
const pathData = "M398 1q36 0 60.5 24.5T483 86v341q0 36-24.5 60.5T398 512H114q-36 0-60.5-24.5T29 427V86q0-36 24.5-60.5T114 1h284zm29 85q0-13-8-20.5T398 58H114q-28 0-28 28v341q0 28 28 28h284q13 0 21-7.5t8-20.5V86zm-86 29q13 0 21 7.5t8 20.5-8 20.5-21 7.5h-56q-13 0-21-7.5t-8-20.5 8-20.5 21-7.5h56zm0 113q13 0 21 7.5t8 20.5q0 14-8 21.5t-21 7.5h-56q-13 0-21-7.5t-8-21.5q0-13 8-20.5t21-7.5h56zm0 114q13 0 21 7.5t8 20.5-8 20.5-21 7.5h-56q-13 0-21-7.5t-8-20.5 8-20.5 21-7.5h56zM171 100q18 0 30.5 12.5T214 143q0 17-12.5 30T171 186q-17 0-30-13t-13-30q0-18 13-30.5t30-12.5zm0 114q18 0 30.5 12.5T214 256q0 18-12.5 30.5T171 299q-17 0-30-12.5T128 256q0-17 13-29.5t30-12.5zm0 113q18 0 30.5 13t12.5 30q0 18-12.5 30.5T171 413q-17 0-30-12.5T128 370q0-17 13-30t30-13z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "legend";
export { pathData, ltr, accData };