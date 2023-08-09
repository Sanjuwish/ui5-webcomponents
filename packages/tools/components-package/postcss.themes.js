const postcssImport = require('postcss-import');
const combineSelectors = require('../lib/postcss-combine-duplicated-selectors/index.js');
const postcssCSStoJSON = require('../lib/postcss-css-to-json/index.js');
const postcssCSStoESM = require('../lib/postcss-css-to-esm/index.js');
const cssnano = require('cssnano');
const modifySelectors = require("modify-selectors");
const fs = require("fs");

const packageName = JSON.parse(fs.readFileSync("./package.json")).name;
const selectors = [".sapUiSizeCompact", ".ui5-content-density-compact", "[data-ui5-compact-size]", "[dir=\"rtl\"]", "[dir=\"ltr\"]"];

module.exports = {
		plugins: [
			postcssImport(),
			combineSelectors({
				removeDuplicatedProperties: true
			}),
			cssnano({
				preset: [
					'default', {
						mergeLonghand: false, // https://github.com/cssnano/cssnano/issues/675
					},
				]
			},),
			postcssCSStoJSON({ toReplace: 'src', packageName }),
			postcssCSStoESM({ toReplace: 'src', packageName }),
		]
};
