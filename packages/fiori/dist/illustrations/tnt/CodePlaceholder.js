import { registerIllustration } from "@ui5/webcomponents-base/dist/asset-registries/Illustrations.js";
import dialogSvg from "./tnt-Dialog-CodePlaceholder.js";
import sceneSvg from "./tnt-Scene-CodePlaceholder.js";
import spotSvg from "./tnt-Spot-CodePlaceholder.js";

const name = "CodePlaceholder";
const set = "tnt";

registerIllustration(name, {
	dialogSvg,
	sceneSvg,
	spotSvg,
	set,
});

export {
	dialogSvg,
	sceneSvg,
	spotSvg,
};