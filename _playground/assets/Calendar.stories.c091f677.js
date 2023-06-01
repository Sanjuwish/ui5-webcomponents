import{x as g}from"./lit-element.57026f9a.js";import{l as a}from"./if-defined.08fba587.js";import{o as $}from"./unsafe-html.5df53a7b.js";import{D as h}from"./docs.5436ffae.js";import{C as i}from"./CalendarType.28d79a42.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.17cabe89.js";import"./iframe.bfaaaede.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.6f2559d2.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const T={selectionMode:{control:"select",options:["Multiple","Range","Single"]},default:{control:{type:"text"}},"selected-dates-change":{description:"Fired when the selected dates change. <b>Note:</b> If you call <code>preventDefault()</code> for this event, the component will not create instances of <code>ui5-date</code> for the newly selected dates. In that case you should do this manually.",table:{category:"events"},UI5CustomData:{parameters:[{name:"values",type:"Array",description:"The selected dates"},{name:"dates",type:"Array",description:"The selected dates as UTC timestamps"}]}},primaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]},secondaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]}},C={package:"@ui5/webcomponents",since:"1.0.0-rc.11"},d="ui5-calendar",F={title:"Main/Calendar",component:d,subcomponents:{CalendarDate:"ui5-date"},parameters:{docs:{page:h({...C,component:d})}},argTypes:T},s=e=>g`<ui5-calendar
    selection-mode="${a(e.selectionMode)}"
    ?hide-week-numbers="${a(e.hideWeekNumbers)}"
    primary-calendar-type="${a(e.primaryCalendarType)}"
    secondary-calendar-type="${a(e.secondaryCalendarType)}"
    format-pattern="${a(e.formatPattern)}"
    min-date="${a(e.minDate)}"
    max-date="${a(e.maxDate)}"
>
    ${$(e.default)}
</ui5-calendar>`,t=s.bind({}),r=s.bind({});r.storyName="Min/Max Dates and Format Pattern";r.args={minDate:"7/10/2020",maxDate:"20/10/2020",formatPattern:"dd/MM/yyyy"};const n=s.bind({});n.storyName="Primary and Secondary Calendar Types";n.args={primaryCalendarType:i.Japanese,secondaryCalendarType:i.Islamic};var o,m,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-calendar\n    selection-mode="${ifDefined(args.selectionMode)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-calendar>`',...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`<ui5-calendar\n    selection-mode="${ifDefined(args.selectionMode)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-calendar>`',...(f=(l=r.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var y,u,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:'args => html`<ui5-calendar\n    selection-mode="${ifDefined(args.selectionMode)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-calendar>`',...(D=(u=n.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};const G=["Basic","Bounds","CalendarTypes"];export{t as Basic,r as Bounds,n as CalendarTypes,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Calendar.stories.c091f677.js.map
