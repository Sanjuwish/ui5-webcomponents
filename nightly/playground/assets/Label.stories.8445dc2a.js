import{x as n}from"./lit-element.3a4d34a1.js";import{o as b}from"./unsafe-html.3b27b0e6.js";import{l as t}from"./if-defined.d89d00ab.js";import{D}from"./docs.26753e5c.js";import{W as x}from"./WrappingType.16fc58a8.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.d147f4f9.js";import"./iframe.89a17b9a.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.fea12773.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const T={wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"}}},q={package:"@ui5/webcomponents"},p="ui5-label",J={title:"Main/Label",component:p,parameters:{docs:{page:D({...q,component:p})}},argTypes:T},s=e=>n`
<ui5-label
    for="${t(e.for)}"
    ?required="${t(e.required)}"
    ?show-colon="${t(e.showColon)}"
    wrapping-type="${t(e.wrappingType)}"
    class="${t(e.className)}"
>${b(e.default)}</ui5-label>`,$=e=>(r,{args:w})=>n`
${r({args:{...w,for:e}})}
<ui5-input id="${e}"></ui5-input>`,i=s.bind({});i.args={showColon:!0,default:"Simple Label"};i.decorators=[$("myInputSimple")];const N=(e,{args:r})=>n`
<style>
    .w200 {
        width: 200px;
    }
</style>
${e({args:{...r,className:"w200"}})}`,a=s.bind({});a.args={wrappingType:x.Normal,showColon:!0,default:`Label that demonstrates how, if set to wrapping-type="Normal", the long labels could be wrapped. To test the truncation, use 'wrapping-type="None"`};a.decorators=[N,$("myInputWrapping")];const o=s.bind({});o.args={required:!0,showColon:!0};o.decorators=[(e,{args:r})=>n`
    ${e({args:{...r,for:"myInput",default:"First name"}})}
    <ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>

    ${e({args:{...r,for:"myDatePicker",default:"Date of birth"}})}
    <ui5-date-picker id="myDatePicker" required></ui5-date-picker>

    ${e({args:{...r,for:"mySelect",default:"Job"}})}
    <ui5-select id="mySelect" required>
        <ui5-option>Manager</ui5-option>
        <ui5-option>Sales</ui5-option>
        <ui5-option selected>Developer</ui5-option>
    </ui5-select>

    ${e({args:{...r,for:"myTextArea",default:"Description"}})}
    <ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish"></ui5-textarea>

    <div style="display: flex; align-items: center;">
        ${e({args:{...r,for:"myCheckBox",default:"Accept terms of use"}})}
        <ui5-checkbox id="myCheckBox" required></ui5-checkbox>
    </div>
`,e=>n`
<style>
    .f {
        display: flex;
        flex-direction: column;
    }
    .f > :nth-child(2n) {
        margin-bottom: 1.5rem;
    }
</style>

<div class="f">
    ${e()}
</div>`];var l,u,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,f,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const O=["Basic","WrappingText","UsageWithInputs"];export{i as Basic,o as UsageWithInputs,a as WrappingText,O as __namedExportsOrder,J as default};
//# sourceMappingURL=Label.stories.8445dc2a.js.map
