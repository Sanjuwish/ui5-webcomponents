import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "compressor";
const pathData = "M50 485q-7 0-12-3-4-2-10.5-9T21 450V43q0-16 6.5-22.5T38 11q4-2 9.5-3L53 7q10 0 21 11l195 164q3 2 6.5 3t4.5 1q5 0 8-3l153-89q11-5 20-5 8 0 16 4 17 8 17 32v244q0 23-17 32-8 4-16 4-9 0-20-5l-153-89q-3-3-8-3-1 0-4.5.5T269 312L74 476q-13 9-24 9zM62 62v370l181-151q13-10 24.5-11.5T281 268q15 0 27 7l145 85V134l-145 85q-12 7-27 7-2 0-13.5-1.5T243 212z";
const ltr = false;
const accData = null;
const collection = "business-suite";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "compressor";
export { pathData, ltr, accData };