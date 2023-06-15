import{x as u}from"./lit-element.57026f9a.js";import{l as i}from"./if-defined.08fba587.js";import{o as h}from"./unsafe-html.5df53a7b.js";import{D as y}from"./docs.4ebb527d.js";import{W as $}from"./WrappingType.16fc58a8.js";import{L as w}from"./LinkDesign.238de7f4.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.614a7582.js";import"./iframe.ed7a43bc.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.1875fcbd.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const D={design:{control:"select",options:["Default","Emphasized","Subtle"]},wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"}},click:{description:"Fired when the component is triggered either with a mouse/tap or by using the Enter key.",table:{category:"events"},UI5CustomData:{parameters:[{name:"altKey",type:"Boolean",description:'Returns whether the "ALT" key was pressed when the event was triggered.'},{name:"ctrlKey",type:"Boolean",description:'Returns whether the "CTRL" key was pressed when the event was triggered.'},{name:"metaKey",type:"Boolean",description:'Returns whether the "META" key was pressed when the event was triggered.'},{name:"shiftKey",type:"Boolean",description:'Returns whether the "SHIFT" key was pressed when the event was triggered.'}]}}},k={package:"@ui5/webcomponents"},n="ui5-link",z={title:"Main/Link",component:n,parameters:{docs:{page:y({...k,component:n})}},argTypes:D},r=e=>u`<ui5-link
    design="${i(e.design)}"
    ?disabled="${i(e.disabled)}"
    href="${i(e.href)}"
    target="${i(e.target)}"
    wrappingType="${i(e.wrappingType)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
    accessible-role="${i(e.accessibleRole)}"
    accessibility-attributes="${i(e.accessibilityAttributes)}"
    style="${i(e.style)}"
>
    ${h(e.default)}
</ui5-link>`,s=r.bind({});s.args={default:"Standard Link",href:"https://www.sap.com",target:"_blank"};const a=r.bind({});a.args={default:"Link with Design",href:"https://www.sap.com",target:"_blank",design:w.Subtle};const t=r.bind({});t.args={default:"This is a really long link. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",href:"https://www.sap.com",target:"_blank",wrappingType:$.Normal,style:"width: 8rem"};var c,o,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-link\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    href="${ifDefined(args.href)}"\n    target="${ifDefined(args.target)}"\n    wrappingType="${ifDefined(args.wrappingType)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-link>`',...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,d,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`<ui5-link\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    href="${ifDefined(args.href)}"\n    target="${ifDefined(args.target)}"\n    wrappingType="${ifDefined(args.wrappingType)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-link>`',...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var g,m,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-link\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    href="${ifDefined(args.href)}"\n    target="${ifDefined(args.target)}"\n    wrappingType="${ifDefined(args.wrappingType)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessible-role="${ifDefined(args.accessibleRole)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-link>`',...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const O=["Basic","Design","TextWrapping"];export{s as Basic,a as Design,t as TextWrapping,O as __namedExportsOrder,z as default};
//# sourceMappingURL=Link.stories.70641dc7.js.map
