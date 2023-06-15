import{j as e}from"./jsx-runtime.796aa4d8.js";import{M as i}from"./index.5d72f150.js";import{u as n}from"./index.04e75108.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.e0a35d3f.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function u(t={}){const{wrapper:r}=Object.assign({},n(),t.components);return r?e.exports.jsx(r,Object.assign({},t,{children:e.exports.jsx(o,{})})):o();function o(){const s=Object.assign({h1:"h1",p:"p",em:"em",strong:"strong",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre"},n(),t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(i,{title:"Docs/Getting started/Using assets"}),`
`,e.exports.jsx(s.h1,{id:"using-additional-assets",children:"Using Additional Assets"}),`
`,e.exports.jsx(s.p,{children:e.exports.jsxs(s.em,{children:["Most UI5 Web Components packages offer ",e.exports.jsx(s.strong,{children:"additional assets"}),". This section explains what these are and how to use them."]})}),`
`,e.exports.jsx(s.h2,{id:"what-are-additional-assets",children:"What Are Additional Assets"}),`
`,e.exports.jsxs(s.p,{children:["These are ",e.exports.jsx(s.strong,{children:"themes"}),", ",e.exports.jsx(s.strong,{children:"text translations"}),", ",e.exports.jsx(s.strong,{children:"locale data"})," etc. that are not shipped as part of the components/icons themselves, but can be loaded separately, if needed."]}),`
`,e.exports.jsxs(s.p,{children:["These assets are important for ",e.exports.jsx(s.strong,{children:"accessibility"})," and ",e.exports.jsx(s.strong,{children:"globalization"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"importing-additional-assets",children:"Importing Additional Assets"}),`
`,e.exports.jsxs(s.p,{children:["Import the ",e.exports.jsx(s.code,{children:"dist/Assets.js"})," file of the respective NPM package:"]}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:'import "@ui5/<PACKAGE-NAME>/dist/Assets.js'})}),`
`,e.exports.jsxs(s.table,{children:[e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{children:"Project"}),e.exports.jsx(s.th,{children:"NPM Package"}),e.exports.jsx(s.th,{children:"Assets"}),e.exports.jsx(s.th,{children:"Module"}),e.exports.jsx(s.th,{children:"Notes"})]})}),e.exports.jsxs(s.tbody,{children:[e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"main"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents"})}),e.exports.jsxs(s.td,{children:[e.exports.jsx(s.code,{children:"i18n"}),", ",e.exports.jsx(s.code,{children:"themes"})]}),e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"@ui5/webcomponents/dist/Assets.js"})}),e.exports.jsxs(s.td,{children:["Theming parameters and translations for the components  ",e.exports.jsx("br",{}),e.exports.jsx("br",{})," ",e.exports.jsxs(s.em,{children:["Automatically imports also:",e.exports.jsx("br",{})," ",e.exports.jsx(s.code,{children:"@ui5/webcomponents-localization/dist/Assets.js"})," ",e.exports.jsx("br",{})," and ",e.exports.jsx("br",{})," ",e.exports.jsx(s.code,{children:"@ui5/webcomponents-theming/dist/Assets.js"})]})]})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"fiori"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-fiori",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-fiori"})}),e.exports.jsxs(s.td,{children:[e.exports.jsx(s.code,{children:"i18n"}),", ",e.exports.jsx(s.code,{children:"themes"})]}),e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"@ui5/webcomponents-fiori/dist/Assets.js"})}),e.exports.jsxs(s.td,{children:["Theming parameters and translations for the components  ",e.exports.jsx("br",{}),e.exports.jsx("br",{})," ",e.exports.jsxs(s.em,{children:["Automatically imports also:",e.exports.jsx("br",{})," ",e.exports.jsx(s.code,{children:"@ui5/webcomponents/dist/Assets.js"})]})]})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"icons"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-icons",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-icons"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"i18n"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"@ui5/webcomponents-icons/dist/Assets.js"})}),e.exports.jsx(s.td,{children:'Translations for the tooltips / "aria labels" of several icons'})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"icons-tnt"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-icons-tnt"})}),e.exports.jsx(s.td,{children:"N/A"}),e.exports.jsx(s.td,{children:"N/A"}),e.exports.jsx(s.td,{})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"icons-business-suite"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-icons-business-suite"})}),e.exports.jsx(s.td,{children:"N/A"}),e.exports.jsx(s.td,{children:"N/A"}),e.exports.jsx(s.td,{})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsxs(s.td,{children:[e.exports.jsx(s.code,{children:"localization"})," *"]}),e.exports.jsx(s.td,{children:e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-localization",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-localization"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"CLDR"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"@ui5/webcomponents-localization/dist/Assets.js"})}),e.exports.jsxs(s.td,{children:["Locale data, needed for date/time/currency-related components ",e.exports.jsx("br",{}),e.exports.jsx("br",{})," ",e.exports.jsx(s.em,{children:"You don't need to import the assets of this package directly."})]})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsxs(s.td,{children:[e.exports.jsx(s.code,{children:"theming"})," *"]}),e.exports.jsx(s.td,{children:e.exports.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-theming",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-theming"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"themes"})}),e.exports.jsx(s.td,{children:e.exports.jsx(s.code,{children:"@ui5/webcomponents-theming/dist/Assets.js"})}),e.exports.jsxs(s.td,{children:["Additional themes' base parameters ",e.exports.jsx("br",{}),e.exports.jsx("br",{})," ",e.exports.jsx(s.em,{children:"You don't need to import the assets of this package directly."})]})]})]})]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"*"})," Only listed for completeness, included automatically by other packages."]}),`
`,e.exports.jsx(s.p,{children:"For example:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`import "@ui5/webcomponents/dist/Assets.js";
`})}),`
`,e.exports.jsx(s.p,{children:"and use:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-html",children:`<ui5-date-picker></ui5-date-picker>
`})}),`
`,e.exports.jsx(s.p,{children:"with another language and another theme:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

setLanguage("es");
setTheme("sap_fiori_3_hcb");
`})}),`
`,e.exports.jsxs(s.p,{children:["The ",e.exports.jsx(s.code,{children:"ui5-date-picker"})," component will have all translatable texts in Spanish, and the Spanish format settings (e.g. date format) will be used, and will be rendered with the ",e.exports.jsx(s.code,{children:"sap_fiori_3_hcb"})," accessibility theme instead of the default theme."]}),`
`,e.exports.jsx(s.h2,{id:"technical-aspects",children:"Technical Aspects"}),`
`,e.exports.jsxs(s.p,{children:["Additional assets are ",e.exports.jsx(s.code,{children:".json"})," files with the respective data. When you import the ",e.exports.jsx(s.code,{children:"dist/Assets.js"})," file of a given package, assets are only ",e.exports.jsx(s.strong,{children:"registered"}),`, but not yet fetched.
When they are needed, they are loaded on the fly with `,e.exports.jsx(s.strong,{children:"dymamic imports"}),", and then used."]}),`
`,e.exports.jsxs(s.p,{children:["Next: ",e.exports.jsx(s.a,{href:"./?path=/docs/docs-getting-started-using-features--docs",children:"Using Additional Features"})]})]})}}export{u as default};
//# sourceMappingURL=05-using-assets.36231161.js.map
