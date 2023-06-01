import{x as I}from"./lit-element.57026f9a.js";import{l as a}from"./if-defined.08fba587.js";import{o as V}from"./unsafe-html.5df53a7b.js";import{D as E}from"./docs.5436ffae.js";import{V as _}from"./ValueState.7d8e1d89.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.17cabe89.js";import"./iframe.bfaaaede.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.6f2559d2.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const B={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},valueStateMessage:{control:{type:"text"}}},W={package:"@ui5/webcomponents",since:"1.0.0-rc.13"},c="ui5-step-input",ae={title:"Main/StepInput",component:c,parameters:{docs:{page:E({...W,component:c})}},argTypes:B},s=e=>I`<ui5-step-input
    value="${a(e.value)}"
    value-state="${a(e.valueState)}"
    value-precision="${a(e.valuePrecision)}"
    min="${a(e.min)}"
    max="${a(e.max)}"
    step="${a(e.step)}"
    ?required="${a(e.required)}"
    ?readonly="${a(e.readonly)}"
    ?disabled="${a(e.disabled)}"
    placeholder="${a(e.placeholder)}"
    name="${a(e.name)}"
    accessible-name="${a(e.accessibleName)}"
    accessible-name-ref="${a(e.accessibleNameRef)}"
    id="${a(e.id)}"
    style="${a(e.style)}"
>
    ${V(e.valueStateMessage)}
</ui5-step-input>`,d=s.bind({});d.args={value:5};const f=s.bind({});f.args={value:5,readonly:!0};const t=s.bind({});t.args={value:5,disabled:!0};const n=s.bind({});n.storyName="Value State";n.args={value:5,valueState:_.Success};const r=s.bind({});r.storyName="Min/Max and Step Values";r.args={value:0,min:-100,max:100,step:10};const l=s.bind({});l.args={value:5,min:0,max:10,step:.5,valuePrecision:1};const i=s.bind({});i.storyName="With Label and Alignment";i.args={id:"myStepInput",style:"text-align: left",placeholder:"Enter your Number",required:!0};i.decorators=[e=>I`<ui5-label class="samples-big-margin-right" for="myStepInput">Number</ui5-label>
    ${e()}`];var o,u,m;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-step-input\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    value-precision="${ifDefined(args.valuePrecision)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?required="${ifDefined(args.required)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    id="${ifDefined(args.id)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-step-input>`',...(m=(u=d.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,$;f.parameters={...f.parameters,docs:{...(p=f.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`<ui5-step-input\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    value-precision="${ifDefined(args.valuePrecision)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?required="${ifDefined(args.required)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    id="${ifDefined(args.id)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-step-input>`',...($=(g=f.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var D,b,v;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:'args => html`<ui5-step-input\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    value-precision="${ifDefined(args.valuePrecision)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?required="${ifDefined(args.required)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    id="${ifDefined(args.id)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-step-input>`',...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,S,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:'args => html`<ui5-step-input\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    value-precision="${ifDefined(args.valuePrecision)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?required="${ifDefined(args.required)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    id="${ifDefined(args.id)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-step-input>`',...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,M,N;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:'args => html`<ui5-step-input\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    value-precision="${ifDefined(args.valuePrecision)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?required="${ifDefined(args.required)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    id="${ifDefined(args.id)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-step-input>`',...(N=(M=r.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var q,P,L;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:'args => html`<ui5-step-input\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    value-precision="${ifDefined(args.valuePrecision)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?required="${ifDefined(args.required)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    id="${ifDefined(args.id)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-step-input>`',...(L=(P=l.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var R,T,H;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:'args => html`<ui5-step-input\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    value-precision="${ifDefined(args.valuePrecision)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?required="${ifDefined(args.required)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    name="${ifDefined(args.name)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    id="${ifDefined(args.id)}"\n    style="${ifDefined(args.style)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-step-input>`',...(H=(T=i.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ie=["Basic","Readonly","Disabled","Design","MinMax","ValuePrecision","Label"];export{d as Basic,n as Design,t as Disabled,i as Label,r as MinMax,f as Readonly,l as ValuePrecision,ie as __namedExportsOrder,ae as default};
//# sourceMappingURL=StepInput.stories.57b88909.js.map
