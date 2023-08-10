import{x as S}from"./lit-element.3a4d34a1.js";import{D as T}from"./docs.c8828fcb.js";import{o as r}from"./unsafe-html.3b27b0e6.js";import{l as i}from"./if-defined.d89d00ab.js";import{V as B}from"./ValueState.7d8e1d89.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.18022aae.js";import"./iframe.5bc3872c.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.55a9cb40.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const w={filter:{control:"select",options:["Contains","None","StartsWith","StartsWithPerTerm"]},open:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"items",type:"Array",description:"an array of the selected items."}]}}},N={package:"@ui5/webcomponents",since:"0.11.0"},u="ui5-multi-combobox",j={title:"Main/MultiComboBox",component:u,subcomponents:{MultiComboBoxItem:"ui5-mcb-item",MultiComboBoxGroupItem:"ui5-mcb-group-item"},parameters:{docs:{page:T({...N,component:u})}},argTypes:w},m=e=>S`
<ui5-multi-combobox
    value="${i(e.value)}"
    ?no-typeahead="${i(e.noTypeahead)}"
    placeholder="${i(e.placeholder)}"
    ?allow-custom-values="${i(e.allowCustomValues)}"
    ?disabled="${i(e.disabled)}"
    value-state="${i(e.valueState)}"
    ?readonly="${i(e.readonly)}"
    ?required="${i(e.required)}"
    filter="${i(e.filter)}"
    ?open="${i(e.open)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
>
    ${r(e.default)}
    ${r(e.icon)}
    ${r(e.valueStateMessage)}
</ui5-multi-combobox>`,s=m.bind({});s.args={placeholder:"Type your value",default:'<ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>'};const t=m.bind({});t.args={placeholder:"Choose your countries",default:`
    <ui5-mcb-item selected="" text="Argentina"></ui5-mcb-item>
    <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
    <ui5-mcb-item text="Denmark"></ui5-mcb-item>
    <ui5-mcb-item text="England"></ui5-mcb-item>
    <ui5-mcb-item text="Albania"></ui5-mcb-item>
    <ui5-mcb-item text="Morocco"></ui5-mcb-item>
    <ui5-mcb-item text="Portugal"></ui5-mcb-item>
    <ui5-mcb-item text="Germany"></ui5-mcb-item>
    <ui5-mcb-item text="Philippines"></ui5-mcb-item>
    <ui5-mcb-item text="Paraguay"></ui5-mcb-item>`};t.storyName="Multi Combo Box with items";const a=m.bind({});a.args={placeholder:"Choose your state",valueState:B.Success,allowCustomValues:!0,default:`
    <ui5-mcb-item text="Fortune"></ui5-mcb-item>
    <ui5-mcb-item text="Luck"></ui5-mcb-item>
    <ui5-mcb-item selected="" text="Success"></ui5-mcb-item>
    <ui5-mcb-item text="Attention"></ui5-mcb-item>
    <ui5-mcb-item text="Caution"></ui5-mcb-item>
    <ui5-mcb-item text="Warning"></ui5-mcb-item>
    <ui5-mcb-item text="Fault"></ui5-mcb-item>
    <ui5-mcb-item text="Error"></ui5-mcb-item>
    <ui5-mcb-item text="Mistake"></ui5-mcb-item>`};a.storyName="Multi Combo Box with free text input";const o=m.bind({});o.args={placeholder:"Select a country",default:`
    <ui5-mcb-group-item text="Asia"></ui5-mcb-group-item>
    <ui5-mcb-item text="Afghanistan"></ui5-mcb-item>
    <ui5-mcb-item text="China"></ui5-mcb-item>
    <ui5-mcb-item text="India"></ui5-mcb-item>
    <ui5-mcb-item text="Indonesia"></ui5-mcb-item>
    <ui5-mcb-group-item text="Europe"></ui5-mcb-group-item>
    <ui5-mcb-item text="Austria"></ui5-mcb-item>
    <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
    <ui5-mcb-item text="Germany"></ui5-mcb-item>
    <ui5-mcb-item text="Italy"></ui5-mcb-item>
    <ui5-mcb-group-item text="North America"></ui5-mcb-group-item>
    <ui5-mcb-item text="Canada"></ui5-mcb-item>
    <ui5-mcb-item text="Granada"></ui5-mcb-item>
    <ui5-mcb-item text="Haiti"></ui5-mcb-item>
    <ui5-mcb-item text="United States"></ui5-mcb-item>`};o.storyName="Multi Combo Box with Grouping of Items";const n=m.bind({});n.args={placeholder:"MultiComboBox with single long token",default:'<ui5-mcb-item selected="" text="Very long long long long long long long text"></ui5-mcb-item>'};n.storyName="Multi Combo Box with single long token";var l,c,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var f,b,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var p,$,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(x=($=a.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var D,h,y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var M,v,C;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const z=["BasicMultiComboBox","MultiComboBoxItems","MultiComboBoxFreeTextInput","MultiComboBoxGroupingItems","MultiComboBoxLongText"];export{s as BasicMultiComboBox,a as MultiComboBoxFreeTextInput,o as MultiComboBoxGroupingItems,t as MultiComboBoxItems,n as MultiComboBoxLongText,z as __namedExportsOrder,j as default};
//# sourceMappingURL=MultiComboBox.stories.7b753ba7.js.map
