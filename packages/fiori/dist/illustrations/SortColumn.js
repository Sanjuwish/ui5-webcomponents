import { registerIllustration } from "@ui5/webcomponents-base/dist/asset-registries/Illustrations.js";
import dialogSvg from "./sapIllus-Dialog-SortColumn.js";
import sceneSvg from "./sapIllus-Scene-SortColumn.js";
import spotSvg from "./sapIllus-Spot-SortColumn.js";
import {
	IM_TITLE_SORTCOLUMN,
	IM_SUBTITLE_SORTCOLUMN,
} from "../generated/i18n/i18n-defaults.js";

const name = "SortColumn";
const set = "fiori";
const title = IM_TITLE_SORTCOLUMN;
const subtitle = IM_SUBTITLE_SORTCOLUMN;

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