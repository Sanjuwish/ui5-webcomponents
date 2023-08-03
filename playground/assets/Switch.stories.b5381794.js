import{x as R}from"./lit-element.3a4d34a1.js";import{l as i}from"./if-defined.d89d00ab.js";import{D as T}from"./docs.2b87c99b.js";import{S as v}from"./SwitchDesign.303e3a18.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.433f1208.js";import"./iframe.5e43c4d2.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.e7b2f520.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const C={design:{control:"select",options:["Graphical","Textual"]}},F={package:"@ui5/webcomponents",since:"0.8.0"},f="ui5-switch",K={title:"Main/Switch",component:f,parameters:{docs:{page:T({...F,component:f})}},argTypes:C},n=e=>R`<ui5-switch
    design="${i(e.design)}"
    ?checked="${i(e.checked)}"
    ?disabled="${i(e.disabled)}"
    ?required="${i(e.required)}"
    ?name="${i(e.name)}"
    text-on="${i(e.textOn)}"
    text-off="${i(e.textOff)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
    tooltip="${i(e.tooltip)}"
></ui5-switch>`,c=n.bind({}),a=n.bind({});a.args={textOn:"On",textOff:"Off"};const r=n.bind({});r.args={textOn:"Yes",textOff:"No",checked:!0};const t=n.bind({});t.args={disabled:!0,checked:!0};const d=n.bind({});d.args={design:v.Graphical,accessibleName:"graphical"};const s=n.bind({});s.args={required:!0,name:"termsAndConditions",disabled:!1,design:v.Textual,textOn:"Yes",textOff:"No"};s.decorators=[e=>R`
        <style>
            .switch-form {
                max-width: fit-content;
                border: 1px solid var(--sapList_BorderColor);
                border-radius: 0.5rem;
                padding: 1rem;
            }
        </style>
        <form id="myForm" class="switch-form">
            <h3 style="margin: 0 0 1rem 0">Switch in Registration form sample</h3>
            <div style="display: flex; flex-direction: column;">
                <ui5-input required type="Email" placeholder="Email" value="your@email.com"></ui5-input>
                <ui5-input required type="Password" placeholder="Password" value="your@email.com"></ui5-input>
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center;">
                <ui5-label for="mySwitch" style="margin: 1rem 0 0 0">Please accept the terms and conditions, in order to proceed</ui5-label>
                <div style="width: fit-content">
                    ${e()}
                </div>
            </div>
            <br>
            <ui5-button type="Submit">Submit Form</ui5-button>
        </form>`];var o,m,l;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(l=(m=c.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,u,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var $,D,b;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(b=(D=r.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var h,x,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(w=(x=t.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var O,k,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(q=(k=d.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var y,N,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(S=(N=s.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const Q=["Basic","WithText","Checked","Disabled","Design","RequiredInForm"];export{c as Basic,r as Checked,d as Design,t as Disabled,s as RequiredInForm,a as WithText,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Switch.stories.b5381794.js.map
