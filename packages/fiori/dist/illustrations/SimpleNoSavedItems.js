import { registerIllustration } from "@ui5/webcomponents-base/dist/asset-registries/Illustrations.js";
import dialogSvg from "./sapIllus-Dialog-SimpleNoSavedItems.js";
import sceneSvg from "./sapIllus-Scene-SimpleNoSavedItems.js";
import spotSvg from "./sapIllus-Spot-SimpleNoSavedItems.js";
import {
	IM_TITLE_NOSAVEDITEMS,
	IM_SUBTITLE_NOSAVEDITEMS,
} from "../generated/i18n/i18n-defaults.js";

const name = "SimpleNoSavedItems";
const set = "fiori";
const title = IM_TITLE_NOSAVEDITEMS;
const subtitle = IM_SUBTITLE_NOSAVEDITEMS;

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