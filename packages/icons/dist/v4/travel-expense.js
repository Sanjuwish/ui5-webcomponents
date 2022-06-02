import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "travel-expense";
const pathData = "M0 236l26-26h75l54-72L6 64 62 9l167 55 37-37q11-11 30-19t37-8q17 0 26 9 7 8 7.5 15.5T367 35q0 10-3 22t-9.5 24-14.5 20l-37 37 56 167-56 56-74-148-71 53v75l-27 26-51-80zm99 32l32 50v-65l11-7 96-73 72 144 19-19-56-167 49-48q6-6 10-14t6.5-16.5 3-12.5.5-6q0-5-2-7h-2q-15 0-29 4t-25 15l-48 48L69 39 50 57l145 72-81 107H49zm302 153q2 14 8 20 4 7 17 12v-60q-34-9-44-25-13-16-13-39 0-26 16-41t41-18l1-30h22l-1 30q26 5 40 16 14 14 18 35l-37 4q-3-16-21-23v57q41 10 51 24 13 13 13 38 0 30-17.5 46T448 487v25h-22v-24q-28-4-43-19-15-14-20-44zm8-80l8 6 9 5v-50q-12 4-16 10-5 7-5 15t4 14zm39 114q14-2 21-8.5t7-20.5q0-8-5-16-5-6-23-11v56z";
const ltr = true;
const accData = null;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "travel-expense";
export { pathData, ltr, accData };