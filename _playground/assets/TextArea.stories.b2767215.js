import{x as u}from"./lit-element.57026f9a.js";import{l as a}from"./if-defined.08fba587.js";import{D}from"./docs.5436ffae.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.17cabe89.js";import"./iframe.bfaaaede.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.6f2559d2.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const h={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},valueStateMessage:{control:{type:"text"}}},w={package:"@ui5/webcomponents"},t="ui5-textarea";let p=0;const k={title:"Main/TextArea",component:t,parameters:{docs:{page:D({...w,component:t})}},argTypes:h},s=e=>u`
<ui5-textarea
    id="textArea-${p++}"
    value="${a(e.value)}"
    ?disabled="${a(e.disabled)}"
    ?readonly="${a(e.readonly)}"
    ?required="${a(e.required)}"
    placeholder="${a(e.placeholder)}"
    value-state="${a(e.valueState)}"
    rows="${a(e.rows)}"
    maxlength="${a(e.maxlength)}"
    ?show-exceeded-text="${a(e.showExceededText)}"
    ?growing="${a(e.growing)}"
    growing-max-lines="${a(e.growingMaxLines)}"
    name="${a(e.name)}"
    accessible-name="${a(e.accessibleName)}"
    accessible-name-ref="${a(e.accessibleNameRef)}"
></ui5-textarea>`,n=s.bind({});n.args={placeholder:"Type as much text as you wish"};const r=s.bind({});r.args={placeholder:"Type no more than 10 symbols",maxlength:10,showExceededText:!0};r.storyName="Text Area with Maximum Length";const i=s.bind({});i.decorators=[e=>u`
        <ui5-label for="textArea-${p}">Description</ui5-label>
        ${e()}
        `];i.args={placeholder:"Enter description",required:!0};var o,d,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`\n<ui5-textarea\n    id="textArea-${index++}"\n    value="${ifDefined(args.value)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?required="${ifDefined(args.required)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value-state="${ifDefined(args.valueState)}"\n    rows="${ifDefined(args.rows)}"\n    maxlength="${ifDefined(args.maxlength)}"\n    ?show-exceeded-text="${ifDefined(args.showExceededText)}"\n    ?growing="${ifDefined(args.growing)}"\n    growing-max-lines="${ifDefined(args.growingMaxLines)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n></ui5-textarea>`',...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var f,c,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`\n<ui5-textarea\n    id="textArea-${index++}"\n    value="${ifDefined(args.value)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?required="${ifDefined(args.required)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value-state="${ifDefined(args.valueState)}"\n    rows="${ifDefined(args.rows)}"\n    maxlength="${ifDefined(args.maxlength)}"\n    ?show-exceeded-text="${ifDefined(args.showExceededText)}"\n    ?growing="${ifDefined(args.growing)}"\n    growing-max-lines="${ifDefined(args.growingMaxLines)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n></ui5-textarea>`',...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,x,$;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`\n<ui5-textarea\n    id="textArea-${index++}"\n    value="${ifDefined(args.value)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?required="${ifDefined(args.required)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value-state="${ifDefined(args.valueState)}"\n    rows="${ifDefined(args.rows)}"\n    maxlength="${ifDefined(args.maxlength)}"\n    ?show-exceeded-text="${ifDefined(args.showExceededText)}"\n    ?growing="${ifDefined(args.growing)}"\n    growing-max-lines="${ifDefined(args.growingMaxLines)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n></ui5-textarea>`',...($=(x=i.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const O=["BasicTextArea","TextAreaMaxLength","TextAreaLabel"];export{n as BasicTextArea,i as TextAreaLabel,r as TextAreaMaxLength,O as __namedExportsOrder,k as default};
//# sourceMappingURL=TextArea.stories.b2767215.js.map
