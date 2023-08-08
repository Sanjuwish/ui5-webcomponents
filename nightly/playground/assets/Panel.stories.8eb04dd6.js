import{x as u}from"./lit-element.3a4d34a1.js";import{l as i}from"./if-defined.d89d00ab.js";import{o as l}from"./unsafe-html.3b27b0e6.js";import{D as P}from"./docs.8d83b927.js";import{P as d}from"./PanelAccessibleRole.57662edc.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.1e993557.js";import"./iframe.e563b506.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.feb40bb8.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const N={accessibleRole:{control:"select",options:["Complementary","Form","Region"]},headerLevel:{control:"select",options:["H1","H2","H3","H4","H5","H6"]},default:{control:{type:"text"}},header:{control:{type:"text"}}},T={package:"@ui5/webcomponents"},c="ui5-panel";let M=0;const j={title:"Main/Panel",component:c,parameters:{docs:{page:P({...T,component:c})}},argTypes:N},o=e=>u`
<ui5-panel
    id="panel-${++M}"
    accessible-role="${i(e.accessibleRole)}"
    header-text="${i(e.headerText)}"
    ?fixed="${i(e.fixed)}"
    ?collapsed="${i(e.collapsed)}"
    ?no-animation="${i(e.noAnimation)}"
    header-level="${i(e.headerLevel)}"
    accessible-name="${i(e.accessibleName)}"
    ?sticky-header="${i(e.stickyHeader)}"
>
    ${l(e.header)}
    ${l(e.default)}
</ui5-panel>`,n=o.bind({});n.args={default:`
    <h1 class="content-color">I am a native heading!</h1>
    <ui5-label wrapping-type="Normal">Short text.</ui5-label>
    <br/>
    <ui5-label wrapping-type="Normal">Another text.</ui5-label>
    <p class="content-color">Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna.
        Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore
        commodo Lorem laboris nisi Lorem.
    </p>`,headerText:"Both expandable and expanded"};const s=o.bind({});s.args={default:`
    <ui5-list mode="MultiSelect">
        <ui5-li key="country1">Argentina</ui5-li>
        <ui5-li key="country2">Bulgaria</ui5-li>
        <ui5-li key="country3">China</ui5-li>
        <ui5-li key="country4">Germany</ui5-li>
        <ui5-li key="country5">Hungary</ui5-li>
        <ui5-li key="country6">England</ui5-li>
        <ui5-li key="country7">USA</ui5-li>
        <ui5-li key="country8">Canada</ui5-li>
    </ui5-list>`,headerText:"Select your country",accessibleRole:d.Complementary};const r=o.bind({});r.args={default:`
    <ui5-list mode="SingleSelectBegin">
        <ui5-li key="country1">Argentina</ui5-li>
        <ui5-li key="country2">Bulgaria</ui5-li>
        <ui5-li key="country3">China</ui5-li>
        <ui5-li key="country4">Germany</ui5-li>
    </ui5-list>`,headerText:"Country Of Birth",accessibleRole:d.Complementary,fixed:!0};r.storyName="Fixed Panel (Can't be Collapsed/Expanded)";const t=o.bind({});t.decorators=[e=>u`
<style>
    #panel-${M+1}::part(content) {
        max-height: 50px;
    }
    #second-panel-stickyHeader::part(content) {
        max-height: 100px;
    }
</style>
<div style="height: 250px; overflow: scroll;">
    ${e()}
<br />
<ui5-panel id="second-panel-stickyHeader" sticky-header header-text="Second Panel with sticky header">
    <ui5-title>Another Lorem ipsum!</ui5-title>

    <ui5-label wrapping-type="Normal">
        <span>
            Lorem ipsum dolor sit amet, tamquam invidunt cu sed, unum regione mel ea, quo ea alia novum. Ne qui illud zril
            nostrum, vel ea sint dicant postea. Vel ne facete tritani, neglegentur concludaturque sed te. His animal dolorum ut.
            Aeterno appareat ei mei, cu sed elit scripserit, an quodsi oportere accusamus quo. Pri ea probo corpora rationibus,
            soluta incorrupte ex his.
            Mei ei brute cetero, id duo magna aeque torquatos. Quodsi erroribus mediocritatem his ut, ad pri legere iracundia
            democritum. Menandri intellegam in mea, ex vero movet qualisque sed. Maiorum verterem perfecto nec ea, est velit
            elaboraret consequuntur eu, eam ad reque postea admodum. Ne inimicus convenire pri, doctus vidisse te ius.
            Percipitur contentiones in vis, cu vim propriae phaedrum. Has ad magna errem honestatis, duo vero graeco epicurei
            no, populo semper sit ne. Vulputate dissentiunt interpretaris ea vis, nec civibus moderatius at. Cu vim stet
            dissentias, no vidit saperet indoctum nec, et pro magna prima nobis. Vis consul feugiat qualisque in, regione
            persecuti cotidieque id eos, id ius omnesque vituperata.
            Lorem ipsum dolor sit amet, tamquam invidunt cu sed, unum regione mel ea, quo ea alia novum. Ne qui illud zril
            nostrum, vel ea sint dicant postea. Vel ne facete tritani, neglegentur concludaturque sed te. His animal dolorum ut.
            Aeterno appareat ei mei, cu sed elit scripserit, an quodsi oportere accusamus quo. Pri ea probo corpora rationibus,
            soluta incorrupte ex his.
            Mei ei brute cetero, id duo magna aeque torquatos. Quodsi erroribus mediocritatem his ut, ad pri legere iracundia
            democritum. Menandri intellegam in mea, ex vero movet qualisque sed. Maiorum verterem perfecto nec ea, est velit
            elaboraret consequuntur eu, eam ad reque postea admodum. Ne inimicus convenire pri, doctus vidisse te ius.
            Percipitur contentiones in vis, cu vim propriae phaedrum. Has ad magna errem honestatis, duo vero graeco epicurei
            no, populo semper sit ne. Vulputate dissentiunt interpretaris ea vis, nec civibus moderatius at. Cu vim stet
            dissentias, no vidit saperet indoctum nec, et pro magna prima nobis. Vis consul feugiat qualisque in, regione
            persecuti cotidieque id eos, id ius omnesque vituperata.
            Lorem ipsum dolor sit amet, tamquam invidunt cu sed, unum regione mel ea, quo ea alia novum. Ne qui illud zril
            nostrum, vel ea sint dicant postea. Vel ne facete tritani, neglegentur concludaturque sed te. His animal dolorum ut.
            Aeterno appareat ei mei, cu sed elit scripserit, an quodsi oportere accusamus quo. Pri ea probo corpora rationibus,
            soluta incorrupte ex his.
            Mei ei brute cetero, id duo magna aeque torquatos. Quodsi erroribus mediocritatem his ut, ad pri legere iracundia
            democritum. Menandri intellegam in mea, ex vero movet qualisque sed. Maiorum verterem perfecto nec ea, est velit
            elaboraret consequuntur eu, eam ad reque postea admodum. Ne inimicus convenire pri, doctus vidisse te ius.
            Percipitur contentiones in vis, cu vim propriae phaedrum. Has ad magna errem honestatis, duo vero graeco epicurei
            no, populo semper sit ne. Vulputate dissentiunt interpretaris ea vis, nec civibus moderatius at. Cu vim stet
            dissentias, no vidit saperet indoctum nec, et pro magna prima nobis. Vis consul feugiat qualisque in, regione
            persecuti cotidieque id eos, id ius omnesque vituperata.
        </span>
    </ui5-label>
</ui5-panel>
</div>`];t.args={default:`
    <ui5-title>Lorem ipsum!</ui5-title>
    <ui5-label id="contentSticky" wrapping-type="Normal">
        <span>
            Lorem ipsum dolor sit amet, tamquam invidunt cu sed, unum regione mel ea, quo ea alia novum. Ne qui illud zril
            nostrum, vel ea sint dicant postea. Vel ne facete tritani, neglegentur concludaturque sed te. His animal dolorum ut.
            Aeterno appareat ei mei, cu sed elit scripserit, an quodsi oportere accusamus quo. Pri ea probo corpora rationibus,
            soluta incorrupte ex his.
            Mei ei brute cetero, id duo magna aeque torquatos. Quodsi erroribus mediocritatem his ut, ad pri legere iracundia
            democritum. Menandri intellegam in mea, ex vero movet qualisque sed. Maiorum verterem perfecto nec ea, est velit
            elaboraret consequuntur eu, eam ad reque postea admodum. Ne inimicus convenire pri, doctus vidisse te ius.
            Percipitur contentiones in vis, cu vim propriae phaedrum. Has ad magna errem honestatis, duo vero graeco epicurei
            no, populo semper sit ne. Vulputate dissentiunt interpretaris ea vis, nec civibus moderatius at. Cu vim stet
            dissentias, no vidit saperet indoctum nec, et pro magna prima nobis. Vis consul feugiat qualisque in, regione
            persecuti cotidieque id eos, id ius omnesque vituperata.
            Lorem ipsum dolor sit amet, tamquam invidunt cu sed, unum regione mel ea, quo ea alia novum. Ne qui illud zril
            nostrum, vel ea sint dicant postea. Vel ne facete tritani, neglegentur concludaturque sed te. His animal dolorum ut.
            Aeterno appareat ei mei, cu sed elit scripserit, an quodsi oportere accusamus quo. Pri ea probo corpora rationibus,
            soluta incorrupte ex his.
            Mei ei brute cetero, id duo magna aeque torquatos. Quodsi erroribus mediocritatem his ut, ad pri legere iracundia
            democritum. Menandri intellegam in mea, ex vero movet qualisque sed. Maiorum verterem perfecto nec ea, est velit
            elaboraret consequuntur eu, eam ad reque postea admodum. Ne inimicus convenire pri, doctus vidisse te ius.
            Percipitur contentiones in vis, cu vim propriae phaedrum. Has ad magna errem honestatis, duo vero graeco epicurei
            no, populo semper sit ne. Vulputate dissentiunt interpretaris ea vis, nec civibus moderatius at. Cu vim stet
            dissentias, no vidit saperet indoctum nec, et pro magna prima nobis. Vis consul feugiat qualisque in, regione
            persecuti cotidieque id eos, id ius omnesque vituperata.
        </span>
    </ui5-label>`,headerText:"Sticky header",stickyHeader:!0};const a=o.bind({});a.decorators=[e=>u`
<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
</style>
    ${e()}`];a.args={header:`
    <div slot="header" class="header">
        <ui5-title>Countries</ui5-title>
        <div>
            <ui5-button>Edit</ui5-button>
            <ui5-button design="Emphasized">Add</ui5-button>
            <ui5-button design="Negative">Remove</ui5-button>
        </div>
    </div>`,default:`
    <ui5-list mode="MultiSelect">
        <ui5-li key="country1">Argentina</ui5-li>
        <ui5-li key="country2">Bulgaria</ui5-li>
        <ui5-li key="country3">China</ui5-li>
    </ui5-list>`,accessibleRole:d.Complementary};a.storyName="Panel with Custom Header";var m,p,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => html\`
<ui5-panel
    id="panel-\${++index}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?sticky-header="\${ifDefined(args.stickyHeader)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,v,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => html\`
<ui5-panel
    id="panel-\${++index}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?sticky-header="\${ifDefined(args.stickyHeader)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,q,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => html\`
<ui5-panel
    id="panel-\${++index}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?sticky-header="\${ifDefined(args.stickyHeader)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(y=(q=r.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var $,x,D;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`args => html\`
<ui5-panel
    id="panel-\${++index}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?sticky-header="\${ifDefined(args.stickyHeader)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var H,k,L;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`args => html\`
<ui5-panel
    id="panel-\${++index}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?sticky-header="\${ifDefined(args.stickyHeader)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(L=(k=a.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const U=["BasicPanel","PanelWithList","FixedPanel","StickyHeader","PanelCustomHeader"];export{n as BasicPanel,r as FixedPanel,a as PanelCustomHeader,s as PanelWithList,t as StickyHeader,U as __namedExportsOrder,j as default};
//# sourceMappingURL=Panel.stories.8eb04dd6.js.map
