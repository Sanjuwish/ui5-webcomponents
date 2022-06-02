import { isThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import {pathData as pathDataV5, ltr, accData} from "./v5/sys-enter-2.js";
import {pathData as pathDataV4} from "./v4/sys-enter-2.js";

const pathData = isThemeFamily("sap_horizon") ? pathDataV5 : pathDataV4;

export default "sys-enter-2";
export { pathData, ltr, accData };