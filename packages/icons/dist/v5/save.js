import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_SAVE } from "../generated/i18n/i18n-defaults.js";

const name = "save";
const pathData = "M503.5 150q8 10 8 20v256q0 36-24.5 60.5T426.5 511h-341q-36 0-60.5-24.5T.5 426V85Q.5 49 25 24.5T85.5 0h256q11 0 20 9zm-162 191h-170v113h170V341zm113-159l-124-125h-159v85h142q28 0 28 28 0 13-7.5 21t-20.5 8h-171q-13 0-20.5-8t-7.5-21V57h-29q-28 0-28 28v341q0 28 28 28h29V312q0-28 28-28h227q13 0 21 7.5t8 20.5v142h28q28 0 28-28V182z";
const ltr = false;
const accData = ICON_SAVE;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "save";
export { pathData, ltr, accData };