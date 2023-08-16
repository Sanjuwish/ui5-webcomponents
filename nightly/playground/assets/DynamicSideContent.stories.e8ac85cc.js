import{x as m}from"./lit-element.3a4d34a1.js";import{l as t}from"./if-defined.d89d00ab.js";import{o}from"./unsafe-html.3b27b0e6.js";import{D as p}from"./docs.d3e03872.js";import{S as f}from"./SideContentPosition.92317666.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.66355eee.js";import"./iframe.16cfdac1.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.8c9d50ca.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const g={sideContentFallDown:{control:"select",options:["BelowL","BelowM","BelowXL","OnMinimumWidth"]},sideContentPosition:{control:"select",options:["End","Start"]},sideContentVisibility:{control:"select",options:["AlwaysShow","NeverShow","ShowAboveL","ShowAboveM","ShowAboveS"]},default:{control:{type:"text"}},sideContent:{control:{type:"text"}},toggleContents:{description:"Toggles visibility of main and side contents on S screen size (mobile device).",table:{category:"methods"}},"layout-change":{description:"Fires when the current breakpoint has been changed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"currentBreakpoint",type:"string",description:"the current breakpoint."},{name:"previousBreakpoint",type:"string",description:"the breakpoint that was active before change to current breakpoint."},{name:"mainContentVisible",type:"boolean",description:"visibility of the main content."},{name:"sideContentVisible",type:"boolean",description:"visibility of the side content."}]}}},b={package:"@ui5/webcomponents-fiori",since:"1.1.0"},h="ui5-dynamic-side-content",T={title:"Fiori/DynamicSideContent",component:"DynamicSideContent",parameters:{docs:{page:p({...b,component:h})}},argTypes:g},c=e=>m`<ui5-dynamic-side-content
    ?equal-split="${t(e.equalSplit)}"
    ?hide-main-content="${t(e.hideMainContent)}"
    ?hide-side-content="${t(e.hideSideContent)}"
    side-content-position="${t(e.sideContentPosition)}"
    side-content-visibility="${t(e.sideContentVisibility)}"
    side-content-fall-down="${t(e.sideContentFallDown)}"
>
    ${o(e.default)}
    ${o(e.sideContent)}
</ui5-dynamic-side-content>`,n=c.bind({});n.args={default:`<div>
    <h1>Main Content</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
</div>`,sideContent:`<div slot="sideContent">
    <h1>Side Content</h1>
    <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
</div>`};const i=c.bind({});i.storyName="Side Content Position";i.args={sideContentPosition:f.Start,default:`<div>
    <h1>Main Content</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
</div>`,sideContent:`<div slot="sideContent">
    <h1>Side Content</h1>
    <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
</div>`};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-dynamic-side-content\n    ?equal-split="${ifDefined(args.equalSplit)}"\n    ?hide-main-content="${ifDefined(args.hideMainContent)}"\n    ?hide-side-content="${ifDefined(args.hideSideContent)}"\n    side-content-position="${ifDefined(args.sideContentPosition)}"\n    side-content-visibility="${ifDefined(args.sideContentVisibility)}"\n    side-content-fall-down="${ifDefined(args.sideContentFallDown)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.sideContent)}\n</ui5-dynamic-side-content>`',...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var u,d,l;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-dynamic-side-content\n    ?equal-split="${ifDefined(args.equalSplit)}"\n    ?hide-main-content="${ifDefined(args.hideMainContent)}"\n    ?hide-side-content="${ifDefined(args.hideSideContent)}"\n    side-content-position="${ifDefined(args.sideContentPosition)}"\n    side-content-visibility="${ifDefined(args.sideContentVisibility)}"\n    side-content-fall-down="${ifDefined(args.sideContentFallDown)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.sideContent)}\n</ui5-dynamic-side-content>`',...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const A=["Basic","Position"];export{n as Basic,i as Position,A as __namedExportsOrder,T as default};
//# sourceMappingURL=DynamicSideContent.stories.e8ac85cc.js.map
