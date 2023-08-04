import{x as n}from"./lit-element.3a4d34a1.js";import{l as i}from"./if-defined.d89d00ab.js";import{o as a}from"./unsafe-html.3b27b0e6.js";import{D as b}from"./docs.7d580f4b.js";import{P as h}from"./Priority.1b56a19e.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.e02e2903.js";import"./iframe.dd9b6435.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.be728db2.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const D={default:{control:{type:"text"}},actions:{control:{type:"text"}},close:{description:"Fired when the <code>Close</code> button is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the closed item."}]}}},L={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var s=Object.freeze,A=Object.defineProperty,v=(t,x)=>s(A(t,"raw",{value:s(x||t.slice())})),r,c;const l="ui5-li-notification-group",B={title:"Fiori/Notification List Group Item",component:l,subcomponents:{NotificationAction:"ui5-notification-action"},parameters:{docs:{page:b({...L,component:l}),story:{inline:!1}}},argTypes:D},y=t=>n`<ui5-li-notification-group
    ?collapsed="${i(t.collapsed)}"
    ?show-counter="${i(t.showCounter)}"
    title-text="${i(t.titleText)}"
    priority="${i(t.priority)}"
    ?show-close="${i(t.showClose)}"
    ?read="${i(t.read)}"
    ?busy="${i(t.busy)}"
    busy-delay="${i(t.busyDelay)}"
>
    ${a(t.default)}
    ${a(t.actions)}
</ui5-li-notification-group>`,o=y.bind({});o.args={showClose:!0,showCounter:!0,titleText:"Orders",priority:h.High,default:`<ui5-li-notification show-close title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>
<ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,actions:`<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>`};const w=t=>n(r||(r=v([`<ui5-list header-text="Notifications Grouped">
    `,`
</ui5-list>

<script>
    var notificationList = document.querySelector("ui5-list");
    notificationList.addEventListener("item-close", e => {
        e.detail.item.hidden = true;
    });
<\/script>`])),t());o.decorators=[t=>n`${t()}
<ui5-li-notification-group
    show-close
    show-counter
    title-text="Deliveries"
    priority="Medium"
    collapsed
>
    <ui5-li-notification show-close title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
</ui5-li-notification-group>

<ui5-li-notification-group
    show-close
    show-counter
    priority="Low"
    collapsed
    title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
>
    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="Low" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="Low" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>
</ui5-li-notification-group>`,w];const e=y.bind({});e.args={showClose:!0,showCounter:!0,titleText:"Orders",priority:h.High,default:`<ui5-li-notification show-close title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>

<ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,actions:`<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>`};e.decorators=[t=>n`${t()}
<ui5-li-notification-group show-close show-counter title-text="Deliveries" priority="Medium" collapsed>
    <ui5-li-notification show-close title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
</ui5-li-notification-group>

<ui5-li-notification-group show-close show-counter priority="High" collapsed title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="High" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="High" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>
</ui5-li-notification-group>`,t=>n(c||(c=v([`<ui5-shellbar
    primary-title="Corporate Portal"
    logo="../assets/images/sap-logo-svg.svg"
    show-notifications
    notifications-count="6"
></ui5-shellbar>
<ui5-popover
    placement-type="Bottom"
    horizontal-align="Right"
    style="max-width: 400px"
>
    `,`
</ui5-popover>

<script>
    var shellbar = document.querySelector("ui5-shellbar");
    var notificationsPopover = document.querySelector("ui5-popover");

    shellbar.addEventListener("notifications-click", e => {
        event.preventDefault();
        notificationsPopover.showAt(e.detail.targetRef);
    });
<\/script>`])),w(t))];e.parameters={docs:{story:{iframeHeight:"700px"}}};var u,p,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification-group
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?show-counter="\${ifDefined(args.showCounter)}"
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.actions)}
</ui5-li-notification-group>\`;
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var d,m,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification-group
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?show-counter="\${ifDefined(args.showCounter)}"
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.actions)}
</ui5-li-notification-group>\`;
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const I=["Basic","InShellBar"];export{o as Basic,e as InShellBar,I as __namedExportsOrder,B as default};
//# sourceMappingURL=NotificationListGroupItem.stories.48057a0b.js.map
