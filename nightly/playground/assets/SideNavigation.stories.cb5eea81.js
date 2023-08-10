import{x as a}from"./lit-element.3a4d34a1.js";import{o as n}from"./unsafe-html.3b27b0e6.js";import{l as x}from"./if-defined.d89d00ab.js";import{D as f}from"./docs.f5216e5b.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.c5f42248.js";import"./iframe.da9d84bf.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.72cf86bb.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const h={default:{control:{type:"text"}},fixedItems:{control:{type:"text"}},header:{control:{type:"text"}},"selection-change":{description:"Fired when the selection has changed via user interaction",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"sap.ui.webc.fiori.ISideNavigationItem|sap.ui.webc.fiori.ISideNavigationSubItem",description:"the clicked item."}]}}},y={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var o=Object.freeze,S=Object.defineProperty,I=(i,b)=>o(S(i,"raw",{value:o(b||i.slice())})),s;const r="ui5-side-navigation",E={title:"Fiori/Side Navigation",component:r,subcomponents:{SideNavigationItem:"ui5-side-navigation-item",SideNavigationSubItem:"ui5-side-navigation-sub-item"},parameters:{docs:{page:f({...y,component:r})}},argTypes:h},p=i=>a`
<ui5-side-navigation ?collapsed="${x(i.collapsed)}">
    ${i.header?n(i.header):null}
    ${n(i.default)}
    ${n(i.fixedItems)}
</ui5-side-navigation>`,v=i=>a`<style>
    ui5-side-navigation {
        height: 600px;
    }
</style>

${i()}`,e=p.bind({});e.args={default:`<ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="People" expanded icon="group">
        <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
    <ui5-side-navigation-item text="Locations" icon="locate-me" selected></ui5-side-navigation-item>
    <ui5-side-navigation-item text="Events" icon="calendar">
        <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>`,fixedItems:`<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
    <ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>`};e.decorators=[v];e.parameters={docs:{story:{iframeHeight:"700px",inline:!1}}};const t=p.bind({});t.args={default:`<ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="People" expanded icon="group">
        <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="From Other Team"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
    <ui5-side-navigation-item text="Locations" icon="locate-me" selected></ui5-side-navigation-item>
    <ui5-side-navigation-item text="Events" icon="calendar">
        <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>`,fixedItems:`<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
    <ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>`};t.decorators=[v,i=>a(s||(s=I([`<style>
    ui5-shellbar::part(root) {
        padding-inline-start: 0.75rem;
        padding-inline-end: 1.25rem;
        border-radius: 0.5rem;
        box-shadow:
            0 0 0.125rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent),
            0 0.5rem 1rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent);
    }

    .tool-layout {
        padding: 0.5rem 0.5rem 0 0.5rem;
        background: color-mix(in srgb, black 4%, var(--sapBackgroundColor));
        display: grid;
        gap: 0.5rem;
        grid-template-rows: auto 1fr;
        grid-template-columns: auto 1fr;
    }

    .tool-layout > * {
        z-index: 1;
    }

    ui5-shellbar {
        grid-column: 1 / span 2;
        grid-row: 1 / 2;
    }

    ui5-side-navigation {
        border-radius: 0.5rem 0.5rem 0 0.5rem;
    }

    .content {
        background: var(--sapBackgroundColor);
        border-radius: 0.5rem 0.5rem 0 0;
        box-shadow:
            0 0 0.125rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent),
            0 0.5rem 1rem 0 color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent);
    }
</style>

<div class="tool-layout">
    <ui5-shellbar
        primary-title="Product Name"
        secondary-title="Second Title"
        notifications-count="1"
        show-notifications>
        <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
        <ui5-input slot="searchField"></ui5-input>
        <ui5-button icon="menu" slot="startButton" id="toggle"></ui5-button>
        <ui5-avatar slot="profile">
            <img src="../assets/images/avatars/woman_avatar_5.png" />
        </ui5-avatar>
        <ui5-shellbar-item icon="source-code" text="Settings" title="Settings"></ui5-shellbar-item>
        <ui5-shellbar-item icon="background" text="Settings" title="Settings"></ui5-shellbar-item>
        <ui5-shellbar-item icon="activity-assigned-to-goal" text="Settings" title="Settings"></ui5-shellbar-item>
        <ui5-shellbar-item icon="action-settings" text="Settings" title="Settings"></ui5-shellbar-item>
    </ui5-shellbar>

    `,`

    <div class="content"></div>
</div>

<script>
    const sidenav = document.querySelector("ui5-side-navigation");
    document.getElementById("toggle").addEventListener("click", () => {
        sidenav.toggleAttribute("collapsed");
    });
<\/script>`])),i())];t.parameters={layout:"fullscreen",docs:{story:{iframeHeight:"700px",inline:!1}}};var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`
<ui5-side-navigation ?collapsed="\${ifDefined(args.collapsed)}">
    \${args.header ? unsafeHTML(args.header) : null}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.fixedItems)}
</ui5-side-navigation>\`;
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,g,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return html\`
<ui5-side-navigation ?collapsed="\${ifDefined(args.collapsed)}">
    \${args.header ? unsafeHTML(args.header) : null}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.fixedItems)}
</ui5-side-navigation>\`;
}`,...(c=(g=t.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const z=["Basic","ToolLayout"];export{e as Basic,t as ToolLayout,z as __namedExportsOrder,E as default};
//# sourceMappingURL=SideNavigation.stories.cb5eea81.js.map
