import{y}from"./lit-html.9e2e9691.js";import{l as i}from"./if-defined.fd0de8da.js";import{o as l}from"./unsafe-html.9d6beac9.js";import{D}from"./docs.996d0151.js";import"./index.3ebfce37.js";import"./iframe.bf83fde7.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.b8add541.js";import"./index.5ca63ce8.js";import"./_getTag.ec397a63.js";import"./index.bc622db0.js";import"./index.b38f6aa4.js";import"./chunk-MA2MUXQN.6b3a6d27.js";import"./chunk-R4NKYYJA.15989c7a.js";const L={default:{control:{type:"text"}},icon:{control:{type:"text"}}},M={package:"@ui5/webcomponents",since:"0.12.0"},d="ui5-badge",j={title:"Main/Badge",component:d,parameters:{docs:{page:D({...M,component:d})}},argTypes:L},s=e=>y`
<ui5-badge
    color-scheme="${i(e.colorScheme)}"
    style="${i(e.style)}"
>
    ${l(e.icon)}
    ${l(e.default)}
</ui5-badge>`,r=s.bind({});r.args={colorScheme:"6",icon:'<ui5-icon name="pending" slot="icon"></ui5-icon>',default:"Pending"};const n=s.bind({});n.args={default:"This would truncate as it is too long",style:"width: 200px"};const o=e=>`<ui5-icon name="${e}" slot="icon"></ui5-icon>`,H=[{icon:o("accept"),default:""},{icon:o("sap-ui5"),default:""},{icon:o("add-equipment"),default:"In progress"},{icon:o("lab"),default:""},{icon:o("email-read"),default:""},{icon:"",default:"Pending"},{icon:o("lightbulb"),default:"New idea"},{icon:o("locked"),default:"Locked"},{icon:o("flight"),default:"En route"},{icon:"",default:"Archived"}],a=s.bind({});a.decorators=[(e,t)=>y`
            ${H.map((c,T)=>e({args:{colorScheme:t.args.colorScheme||(T+1).toString(),icon:t.args.icon||c.icon,default:t.args.default||c.default}}))}`];var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,p,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var $,b,S;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const z=["Basic","Truncating","AllColorSchemes"];export{a as AllColorSchemes,r as Basic,n as Truncating,z as __namedExportsOrder,j as default};
//# sourceMappingURL=Badge.stories.b2e3bd59.js.map
