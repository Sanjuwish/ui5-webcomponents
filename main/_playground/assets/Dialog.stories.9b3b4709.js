import{y as x}from"./lit-html.9e2e9691.js";import{l as i}from"./if-defined.fd0de8da.js";import{o as l}from"./unsafe-html.9d6beac9.js";import{D as T}from"./docs.996d0151.js";import{V as z}from"./ValueState.7d8e1d89.js";import"./index.3ebfce37.js";import"./iframe.bf83fde7.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.b8add541.js";import"./index.5ca63ce8.js";import"./_getTag.ec397a63.js";import"./index.bc622db0.js";import"./index.b38f6aa4.js";import"./chunk-MA2MUXQN.6b3a6d27.js";import"./chunk-R4NKYYJA.15989c7a.js";const C={state:{control:"select",options:["Error","Information","None","Success","Warning"]},footer:{control:{type:"text"}},header:{control:{type:"text"}},show:{table:{category:"Methods"}},accessibleRole:{control:"select",options:["AlertDialog","Dialog","None"]},default:{control:{type:"text"}},applyFocus:{table:{category:"Methods"}},close:{table:{category:"Methods"}},isOpen:{table:{category:"Methods"}}},L={package:"@ui5/webcomponents"};var d=Object.freeze,R=Object.defineProperty,F=(e,o)=>d(R(e,"raw",{value:d(o||e.slice())})),c;const g="ui5-dialog",V={title:"Main/Dialog",component:g,argTypes:C,parameters:{docs:{story:{iframeHeight:"800px",inline:!1},page:T({...L,component:g})}}},s=e=>x(c||(c=F([`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="`,`"
    ?stretch="`,`"
    ?draggable="`,`"
    ?resizable="`,`"
    state="`,`"
    initial-focus="`,`"
    ?prevent-focus-restore="`,`"
    ?open="`,`"
    accessible-name="`,`"
    accessible-name-ref="`,`"
    accessible-role="`,`"
>
    `,`
    `,`
    `,`
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>`])),i(e.headerText),i(e.stretch),i(e.draggable),i(e.resizable),i(e.state),i(e.initialFocus),i(e.preventFocusRestore),i(e.open),i(e.accessibleName),i(e.accessibleNameRef),i(e.accessibleRole),l(e.header),l(e.default),l(e.footer)),t=s.bind({});t.args={headerText:"Register Form",default:`<section class="login-form">
    <div>
        <ui5-label for="username" required show-colon>Username</ui5-label>
        <ui5-input id="username"></ui5-input>
    </div>
    <div>
        <ui5-label for="password" required show-colon>Password</ui5-label>
        <ui5-input id="password" type="Password" value-state="Error"></ui5-input>
    </div>
    <div>
        <ui5-label for="email" type="Email" required show-colon>Email</ui5-label>
        <ui5-input id="email"></ui5-input>
    </div>
    <div>
        <ui5-label for="address" show-colon>Address</ui5-label>
        <ui5-input id="address"></ui5-input>
    </div>
</section>`,footer:`<div slot="footer" style="display: flex; align-items: center; padding: 0.5rem">
    <div style="flex: 1;"></div>
    <ui5-button class="dialogCloser" design="Emphasized">Register</ui5-button>
</div>`};const r=s.bind({});r.args={resizable:!0,draggable:!0,headerText:"Draggable/Resizable dialog",default:`<p>Move this dialog around the screen by dragging it by its header.</p>
<p>Resize this dialog by dragging it by its resize handle.</p>
<p>These features are available only on Desktop.</p>`,footer:`<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
    <ui5-button class="dialogCloser" design="Emphasized">OK</ui5-button>
</div>`};const n=s.bind({});n.storyName="SAP Fiori Styled Footer";n.args={headerText:"SAP Fiori Styled Footer",default:"<p>Adding custom styles to achieve the look and feel of a SAP Fiori footer</p>",footer:`<div slot="footer" style="display: flex; align-items: center; justify-content: end; width: 100%; box-sizing: border-box;">
    <ui5-button class="dialogCloser" design="Emphasized" style="min-width: 4rem;">OK</ui5-button>
    <ui5-button class="dialogCloser" style="margin: 0 0 0 0.5rem; min-width: 4rem;">Cancel</ui5-button>
</div>`};const a=s.bind({});a.args={state:z.Error,default:"<p>Dialog with state</p>",footer:`<div slot="footer" style="display: flex; justify-content: flex-end; align-items: center;">
    <ui5-button class="dialogCloser">Close</ui5-button>
</div>`};a.decorators=[(e,{args:o})=>e({args:{...o,headerText:o.state}})];var f,u,p;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,m,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var v,D,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(y=(D=n.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var $,O,E;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="dialogOpener">Open Dialog</ui5-button>

<ui5-dialog
    id="dialog"
    header-text="\${ifDefined(args.headerText)}"
    ?stretch="\${ifDefined(args.stretch)}"
    ?draggable="\${ifDefined(args.draggable)}"
    ?resizable="\${ifDefined(args.resizable)}"
    state="\${ifDefined(args.state)}"
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
    var dialogOpener = document.getElementById("dialogOpener");
    var dialog = document.getElementById("dialog"); 
    var dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];

    dialogOpener.accessibilityAttributes = {
        hasPopup: "dialog",
        controls: dialog.id,
    };
    dialogOpener.addEventListener("click", () => {
        dialog.open = true;
    });
    dialogClosers.forEach(btn => {
        btn.addEventListener("click", () => {
            dialog.open = false;
        });
    })
<\/script>\`;
}`,...(E=(O=a.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const U=["Basic","DraggableAndResizable","FioriDialog","WithState"];export{t as Basic,r as DraggableAndResizable,n as FioriDialog,a as WithState,U as __namedExportsOrder,V as default};
//# sourceMappingURL=Dialog.stories.9b3b4709.js.map
