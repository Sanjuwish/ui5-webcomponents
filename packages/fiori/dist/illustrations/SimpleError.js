import { registerIllustration } from "@ui5/webcomponents-base/dist/asset-registries/Illustrations.js";
import dialogSvg from "./sapIllus-Dialog-SimpleError.js";
import sceneSvg from "./sapIllus-Scene-SimpleError.js";
import spotSvg from "./sapIllus-Spot-SimpleError.js";
import {
	IM_TITLE_UNABLETOUPLOAD,
	IM_SUBTITLE_UNABLETOUPLOAD,
} from "../generated/i18n/i18n-defaults.js";

const name = "SimpleError";
const set = "fiori";
const title = IM_TITLE_UNABLETOUPLOAD;
const subtitle = IM_SUBTITLE_UNABLETOUPLOAD;

registerIllustration(name, {
	dialogSvg,
	sceneSvg,
	spotSvg,
	title,
	subtitle,
	set,
});

export {
	dialogSvg,
	sceneSvg,
	spotSvg,
};