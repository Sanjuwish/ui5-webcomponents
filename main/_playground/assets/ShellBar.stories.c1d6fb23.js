import{y as A}from"./lit-html.9e2e9691.js";import{l as t}from"./if-defined.fd0de8da.js";import{o as e}from"./unsafe-html.9d6beac9.js";import{D as x}from"./docs.f02d6258.js";import"./index.bc3033bf.js";import"./iframe.6272a547.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.b8add541.js";import"./index.5ca63ce8.js";import"./_getTag.ec397a63.js";import"./index.bc622db0.js";import"./index.b38f6aa4.js";import"./chunk-MA2MUXQN.9055790f.js";import"./chunk-R4NKYYJA.15989c7a.js";const H={default:{control:{type:"text"}},logo:{control:{type:"text"}},menuItems:{control:{type:"text"}},profile:{control:{type:"text"}},searchField:{control:{type:"text"}},startButton:{control:{type:"text"}}},I={package:"@ui5/webcomponents-fiori",since:"0.8.0"};var c=Object.freeze,S=Object.defineProperty,B=(i,P)=>c(S(i,"raw",{value:c(P||i.slice())})),u;const p="ui5-shellbar",q={title:"Fiori/ShellBar",component:p,subcomponents:{ShellBarItem:"ui5-shellbar-item"},parameters:{docs:{page:x({...I,component:p})}},argTypes:H},l=i=>A`<ui5-shellbar
    primary-title="${t(i.primaryTitle)}"
    secondary-title="${t(i.secondaryTitle)}"
    notifications-count="${t(i.notificationsCount)}"
    ?show-notifications="${t(i.showNotifications)}"
    ?show-product-switch="${t(i.showProductSwitch)}"
    ?show-co-pilot="${t(i.showCoPilot)}"
    ?show-search-field="${t(i.showSearchField)}"
    .accessibilityRoles="${t(i.accessibilityRoles)}"
    .accessibilityTexts="${t(i.accessibilityTexts)}"
    .accessibilityAttributes="${t(i.accessibilityAttributes)}"
>
    ${e(i.default)} 
    ${e(i.profile)}
    ${e(i.logo)} 
    ${e(i.menuItems)}
    ${e(i.searchField)} 
    ${e(i.startButton)}
</ui5-shellbar>`,n=l.bind({});n.args={primaryTitle:"Corporate Portal",secondaryTitle:"secondary title",profile:'<ui5-avatar slot="profile" icon="customer"></ui5-avatar>',logo:'<img slot="logo" src="../assets/images/sap-logo-svg.svg" />',startButton:'<ui5-button icon="nav-back" slot="startButton"></ui5-button>'};const o=l.bind({});o.args={primaryTitle:"Corporate Portal",secondaryTitle:"secondary title",showNotifications:!0,notificationsCount:"99+",profile:`
    <ui5-avatar slot="profile">
        <img src="../assets/images/avatars/woman_avatar_5.png" />
    </ui5-avatar>`,logo:'<img slot="logo" src="../assets/images/sap-logo-svg.svg" />',searchField:'<ui5-input slot="searchField" placeholder="Enter service..."></ui5-input>'};const a=l.bind({});a.args={primaryTitle:"Corporate Portal",secondaryTitle:"secondary title",showCoPilot:!0,profile:`
    <ui5-avatar slot="profile">
        <img src="../assets/images/avatars/woman_avatar_5.png" />
    </ui5-avatar>`,logo:'<img slot="logo" src="../assets/images/sap-logo-svg.svg" />'};let s=0;const r=()=>(s++,A(u||(u=B([`
        <ui5-shellbar
            id="shellbar-`,`"
            primary-title="Corporate Portal"
            secondary-title="secondary title"
            notifications-count="99+"
            show-notifications=""
            show-product-switch=""
            show-co-pilot=""
        >
            <ui5-avatar slot="profile">
                <img src="../assets/images/avatars/woman_avatar_5.png" />
            </ui5-avatar>
            <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
            <ui5-button icon="nav-back" slot="startButton"></ui5-button>

            <ui5-input slot="searchField"></ui5-input>
            <ui5-li slot="menuItems">Application 1</ui5-li>
            <ui5-li slot="menuItems">Application 2</ui5-li>
            <ui5-li slot="menuItems">Application 3</ui5-li>
            <ui5-li slot="menuItems">Application 4</ui5-li>
            <ui5-li slot="menuItems">Application 5</ui5-li>
        </ui5-shellbar>
        <ui5-popover id="action-popover-`,`" placement-type="Bottom">
            <div class="action-popover-header">
                <ui5-title style="padding: 0.25rem 1rem 0rem 1rem"
                    >An Kimura</ui5-title
                >
            </div>
            <div class="action-popover-content" style="margin-top: 1rem;">
                <ui5-list separators="None">
                    <ui5-li icon="sys-find">App Finder</ui5-li>
                    <ui5-li icon="settings">Settings</ui5-li>
                    <ui5-li icon="edit">Edit Home Page</ui5-li>
                    <ui5-li icon="sys-help">Help</ui5-li>
                    <ui5-li icon="log">Sign out</ui5-li>
                </ui5-list>
            </div>
        </ui5-popover>
        <script>
            (function () {
                const shellbar = document.getElementById("shellbar-`,`");
                const actionPopover = document.getElementById(
                    "action-popover-`,`"
                );
                shellbar.addEventListener(
                    "ui5-profile-click",
                    function (event) {
                        actionPopover.showAt(event.detail.targetRef);
                    }
                );
            })();
        <\/script>
    `])),s,s,s,s));var d,f,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`<ui5-shellbar\n    primary-title="${ifDefined(args.primaryTitle)}"\n    secondary-title="${ifDefined(args.secondaryTitle)}"\n    notifications-count="${ifDefined(args.notificationsCount)}"\n    ?show-notifications="${ifDefined(args.showNotifications)}"\n    ?show-product-switch="${ifDefined(args.showProductSwitch)}"\n    ?show-co-pilot="${ifDefined(args.showCoPilot)}"\n    ?show-search-field="${ifDefined(args.showSearchField)}"\n    .accessibilityRoles="${ifDefined(args.accessibilityRoles)}"\n    .accessibilityTexts="${ifDefined(args.accessibilityTexts)}"\n    .accessibilityAttributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)} \n    ${unsafeHTML(args.profile)}\n    ${unsafeHTML(args.logo)} \n    ${unsafeHTML(args.menuItems)}\n    ${unsafeHTML(args.searchField)} \n    ${unsafeHTML(args.startButton)}\n</ui5-shellbar>`',...(m=(f=n.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-shellbar\n    primary-title="${ifDefined(args.primaryTitle)}"\n    secondary-title="${ifDefined(args.secondaryTitle)}"\n    notifications-count="${ifDefined(args.notificationsCount)}"\n    ?show-notifications="${ifDefined(args.showNotifications)}"\n    ?show-product-switch="${ifDefined(args.showProductSwitch)}"\n    ?show-co-pilot="${ifDefined(args.showCoPilot)}"\n    ?show-search-field="${ifDefined(args.showSearchField)}"\n    .accessibilityRoles="${ifDefined(args.accessibilityRoles)}"\n    .accessibilityTexts="${ifDefined(args.accessibilityTexts)}"\n    .accessibilityAttributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)} \n    ${unsafeHTML(args.profile)}\n    ${unsafeHTML(args.logo)} \n    ${unsafeHTML(args.menuItems)}\n    ${unsafeHTML(args.searchField)} \n    ${unsafeHTML(args.startButton)}\n</ui5-shellbar>`',...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,v,$;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:'args => html`<ui5-shellbar\n    primary-title="${ifDefined(args.primaryTitle)}"\n    secondary-title="${ifDefined(args.secondaryTitle)}"\n    notifications-count="${ifDefined(args.notificationsCount)}"\n    ?show-notifications="${ifDefined(args.showNotifications)}"\n    ?show-product-switch="${ifDefined(args.showProductSwitch)}"\n    ?show-co-pilot="${ifDefined(args.showCoPilot)}"\n    ?show-search-field="${ifDefined(args.showSearchField)}"\n    .accessibilityRoles="${ifDefined(args.accessibilityRoles)}"\n    .accessibilityTexts="${ifDefined(args.accessibilityTexts)}"\n    .accessibilityAttributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)} \n    ${unsafeHTML(args.profile)}\n    ${unsafeHTML(args.logo)} \n    ${unsafeHTML(args.menuItems)}\n    ${unsafeHTML(args.searchField)} \n    ${unsafeHTML(args.startButton)}\n</ui5-shellbar>`',...($=(v=a.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var w,T,D;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  index++;
  return html\`
        <ui5-shellbar
            id="shellbar-\${index}"
            primary-title="Corporate Portal"
            secondary-title="secondary title"
            notifications-count="99+"
            show-notifications=""
            show-product-switch=""
            show-co-pilot=""
        >
            <ui5-avatar slot="profile">
                <img src="../assets/images/avatars/woman_avatar_5.png" />
            </ui5-avatar>
            <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
            <ui5-button icon="nav-back" slot="startButton"></ui5-button>

            <ui5-input slot="searchField"></ui5-input>
            <ui5-li slot="menuItems">Application 1</ui5-li>
            <ui5-li slot="menuItems">Application 2</ui5-li>
            <ui5-li slot="menuItems">Application 3</ui5-li>
            <ui5-li slot="menuItems">Application 4</ui5-li>
            <ui5-li slot="menuItems">Application 5</ui5-li>
        </ui5-shellbar>
        <ui5-popover id="action-popover-\${index}" placement-type="Bottom">
            <div class="action-popover-header">
                <ui5-title style="padding: 0.25rem 1rem 0rem 1rem"
                    >An Kimura</ui5-title
                >
            </div>
            <div class="action-popover-content" style="margin-top: 1rem;">
                <ui5-list separators="None">
                    <ui5-li icon="sys-find">App Finder</ui5-li>
                    <ui5-li icon="settings">Settings</ui5-li>
                    <ui5-li icon="edit">Edit Home Page</ui5-li>
                    <ui5-li icon="sys-help">Help</ui5-li>
                    <ui5-li icon="log">Sign out</ui5-li>
                </ui5-list>
            </div>
        </ui5-popover>
        <script>
            (function () {
                const shellbar = document.getElementById("shellbar-\${index}");
                const actionPopover = document.getElementById(
                    "action-popover-\${index}"
                );
                shellbar.addEventListener(
                    "ui5-profile-click",
                    function (event) {
                        actionPopover.showAt(event.detail.targetRef);
                    }
                );
            })();
        <\/script>
    \`;
}`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const G=["Basic","SearchAndNotifications","WithCoPilot","Advanced"];export{r as Advanced,n as Basic,o as SearchAndNotifications,a as WithCoPilot,G as __namedExportsOrder,q as default};
//# sourceMappingURL=ShellBar.stories.c1d6fb23.js.map
