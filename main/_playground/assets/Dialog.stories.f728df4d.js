import{y as x}from"./lit-html.9e2e9691.js";import{l as n}from"./if-defined.fd0de8da.js";import{o as r}from"./unsafe-html.9d6beac9.js";import{D as C}from"./docs.9e689dbe.js";import"./index.67f4ecac.js";import"./iframe.54596f17.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.b8add541.js";import"./index.5ca63ce8.js";import"./_getTag.ec397a63.js";import"./index.bc622db0.js";import"./index.b38f6aa4.js";import"./chunk-MA2MUXQN.a2fdd164.js";import"./chunk-R4NKYYJA.15989c7a.js";const S={state:{control:"select",options:["Error","Information","None","Success","Warning"]},footer:{control:{type:"text"}},header:{control:{type:"text"}},show:{table:{category:"Methods"}},accessibleRole:{control:"select",options:["AlertDialog","Dialog","None"]},default:{control:{type:"text"}},applyFocus:{table:{category:"Methods"}},close:{table:{category:"Methods"}},isOpen:{table:{category:"Methods"}}},k={package:"@ui5/webcomponents"};var l=Object.freeze,B=Object.defineProperty,w=(e,i)=>l(B(e,"raw",{value:l(i||e.slice())})),c,g;const u="ui5-list",U={title:"Main/Dialog",component:u,argTypes:S,parameters:{docs:{page:C({...k,component:u})}}};let L=0;const d=e=>{const i=L++;return x(c||(c=w([`
<ui5-button id="dialogOpener-`,`">Open Dialog</ui5-button>
<ui5-dialog
  id="dialog-`,`"
  header-text="`,`"
  ?stretch="`,`"
  ?draggable="`,`"
  ?resizable="`,`"
  ?on-phone="`,`"
  ?on-desktop="`,`"
  state="`,`"
  initial-focus="`,`"
  ?prevent-focus-restore="`,`"
  ?open-by="`,`"
  accessible-name="`,`"
  accessible-name-ref="`,`"
>
  `,`
  `,`
  `,`
</ui5-dialog>

<script>
  const dialogOpener = document.getElementById("dialogOpener-`,`");
  const dialog = document.getElementById("dialog-`,`"); 
  const dialogCloser = document.querySelector("#dialog-`,` .dialogCloser");
  dialogOpener.accessibilityAttributes = {
    hasPopup: "dialog",
    controls: dialog.id,
  };
  dialogOpener.addEventListener("click", function () {
    dialog.show();
  });
  dialogCloser.addEventListener("click", function () {
    dialog.close();
  });
<\/script>`])),i,i,n(e.headerText),n(e.stretch),n(e.draggable),n(e.resizable),n(e.onPhone),n(e.onDesktop),n(e.state),n(e.initialFocus),n(e.preventFocusRestore),n(e.open),n(e.accessibleName),n(e.accessibleNameRef),r(e.header),r(e.default),r(e.footer),i,i,i)},o=d.bind({});o.args={headerText:"Register Form",default:`
    <section class="login-form">
      <div>
        <ui5-label for="username" required="">Username: </ui5-label>
        <ui5-input id="username"></ui5-input>
      </div>
      <div>
        <ui5-label for="password" required="">Password: </ui5-label>
        <ui5-input id="password" type="Password" value-state="Error"></ui5-input>
      </div>
      <div>
        <ui5-label for="email" type="Email" required="">Email: </ui5-label>
        <ui5-input id="email"></ui5-input>
      </div>
      <div>
        <ui5-label for="address">Address: </ui5-label>
        <ui5-input id="address"></ui5-input>
      </div>
    </section>`,footer:`
    <div slot="footer" style="display: flex; align-items: center;padding: .5rem">
      <div style="flex: 1;"></div>
      <ui5-button id="dialogCloser" design="Emphasized">Register</ui5-button>
    </div>`};const a=d.bind({});a.args={resizable:!0,draggable:!0,headerText:"Draggable/Resizable dialog",default:`
    <p>Resize this dialog by dragging it by its resize handle.</p>
    <p>This feature available only on Desktop.</p>
    <p>Move this dialog around the screen by dragging it by its header.</p>
    <p>This feature available only on Desktop.</p>`,footer:`
    <div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
      <ui5-button class="dialogCloser" design="Emphasized">OK</ui5-button>
    </div>`};const t=d.bind({});t.storyName="SAP Fiori Styled Footer";t.args={headerText:"SAP Fiori Styled Footer",default:"<p>Adding custom styles to achieve the look and feel of a SAP Fiori footer</p>",footer:`
    <div slot="footer" style="display: flex; align-items: center; justify-content: end; width: 100%; box-sizing: border-box;">
      <ui5-button design="Emphasized" style="min-width: 4rem;">OK</ui5-button>
      <ui5-button class="dialogCloser" style="margin: 0 0 0 0.5rem; min-width: 4rem;">Cancel</ui5-button>
    </div>`};const s=()=>x(g||(g=w([`
  <h3>Dialogs with various state properties</h3>
  <ui5-button id="error-state">Open error state dialog</ui5-button>
  <ui5-button id="information-state">Open information state dialog</ui5-button>
  <ui5-button id="success-state">Open success state dialog</ui5-button>
  <ui5-button id="warning-state">Open warning state dialog</ui5-button>
  <ui5-dialog id="error-state-dialog" header-text="Error" state="Error">
    <p>Error state dialog</p>
    <div
      slot="footer"
      style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;"
    >
      <ui5-button id="error-close">Close</ui5-button>
    </div>
  </ui5-dialog>
  <ui5-dialog
    id="information-state-dialog"
    header-text="Information"
    state="Information"
  >
    <p>Information state dialog</p>
    <div
      slot="footer"
      style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;"
    >
      <ui5-button id="information-close">Close</ui5-button>
    </div>
  </ui5-dialog>
  <ui5-dialog id="success-state-dialog" header-text="Success" state="Success">
    <p>Success state dialog</p>
    <div
      slot="footer"
      style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;"
    >
      <ui5-button id="success-close">Close</ui5-button>
    </div>
  </ui5-dialog>
  <ui5-dialog id="warning-state-dialog" header-text="Warning" state="Warning">
    <p>Warning state dialog</p>
    <div
      slot="footer"
      style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;"
    >
      <ui5-button id="warning-close">Close</ui5-button>
    </div>
  </ui5-dialog>
  <script>
    const dialogOpenerError = document.getElementById("error-state");
    const dialogError = document.getElementById("error-state-dialog");
    const dialogCloserError = document.getElementById("error-close");
    dialogOpenerError.addEventListener("click", function () {
      dialogError.show();
    });
    dialogCloserError.addEventListener("click", function () {
      dialogError.close();
    });
    const dialogOpenerInfo = document.getElementById("information-state");
    const dialogInfo = document.getElementById("information-state-dialog");
    const dialogCloserInfo = document.getElementById("information-close");
    dialogOpenerInfo.addEventListener("click", function () {
      dialogInfo.show();
    });
    dialogCloserInfo.addEventListener("click", function () {
      dialogInfo.close();
    });
    const dialogOpenerSuccess = document.getElementById("success-state");
    const dialogSuccess = document.getElementById("success-state-dialog");
    const dialogCloserSuccess = document.getElementById("success-close");
    dialogOpenerSuccess.addEventListener("click", function () {
      dialogSuccess.show();
    });
    dialogCloserSuccess.addEventListener("click", function () {
      dialogSuccess.close();
    });
    const dialogOpenerWarning = document.getElementById("warning-state");
    const dialogWarning = document.getElementById("warning-state-dialog");
    const dialogCloserWarning = document.getElementById("warning-close");
    dialogOpenerWarning.addEventListener("click", function () {
      dialogWarning.show();
    });
    dialogCloserWarning.addEventListener("click", function () {
      dialogWarning.close();
    });
  <\/script>
`])));var f,p,m;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const id = index++;
  return html\`
<ui5-button id="dialogOpener-\${id}">Open Dialog</ui5-button>
<ui5-dialog
  id="dialog-\${id}"
  header-text="\${ifDefined(args.headerText)}"
  ?stretch="\${ifDefined(args.stretch)}"
  ?draggable="\${ifDefined(args.draggable)}"
  ?resizable="\${ifDefined(args.resizable)}"
  ?on-phone="\${ifDefined(args.onPhone)}"
  ?on-desktop="\${ifDefined(args.onDesktop)}"
  state="\${ifDefined(args.state)}"
  initial-focus="\${ifDefined(args.initialFocus)}"
  ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
  ?open-by="\${ifDefined(args.open)}"
  accessible-name="\${ifDefined(args.accessibleName)}"
  accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
  \${unsafeHTML(args.header)}
  \${unsafeHTML(args.default)}
  \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
  const dialogOpener = document.getElementById("dialogOpener-\${id}");
  const dialog = document.getElementById("dialog-\${id}"); 
  const dialogCloser = document.querySelector("#dialog-\${id} .dialogCloser");
  dialogOpener.accessibilityAttributes = {
    hasPopup: "dialog",
    controls: dialog.id,
  };
  dialogOpener.addEventListener("click", function () {
    dialog.show();
  });
  dialogCloser.addEventListener("click", function () {
    dialog.close();
  });
<\/script>\`;
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,y,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const id = index++;
  return html\`
<ui5-button id="dialogOpener-\${id}">Open Dialog</ui5-button>
<ui5-dialog
  id="dialog-\${id}"
  header-text="\${ifDefined(args.headerText)}"
  ?stretch="\${ifDefined(args.stretch)}"
  ?draggable="\${ifDefined(args.draggable)}"
  ?resizable="\${ifDefined(args.resizable)}"
  ?on-phone="\${ifDefined(args.onPhone)}"
  ?on-desktop="\${ifDefined(args.onDesktop)}"
  state="\${ifDefined(args.state)}"
  initial-focus="\${ifDefined(args.initialFocus)}"
  ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
  ?open-by="\${ifDefined(args.open)}"
  accessible-name="\${ifDefined(args.accessibleName)}"
  accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
  \${unsafeHTML(args.header)}
  \${unsafeHTML(args.default)}
  \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
  const dialogOpener = document.getElementById("dialogOpener-\${id}");
  const dialog = document.getElementById("dialog-\${id}"); 
  const dialogCloser = document.querySelector("#dialog-\${id} .dialogCloser");
  dialogOpener.accessibilityAttributes = {
    hasPopup: "dialog",
    controls: dialog.id,
  };
  dialogOpener.addEventListener("click", function () {
    dialog.show();
  });
  dialogCloser.addEventListener("click", function () {
    dialog.close();
  });
<\/script>\`;
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var E,v,$;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const id = index++;
  return html\`
<ui5-button id="dialogOpener-\${id}">Open Dialog</ui5-button>
<ui5-dialog
  id="dialog-\${id}"
  header-text="\${ifDefined(args.headerText)}"
  ?stretch="\${ifDefined(args.stretch)}"
  ?draggable="\${ifDefined(args.draggable)}"
  ?resizable="\${ifDefined(args.resizable)}"
  ?on-phone="\${ifDefined(args.onPhone)}"
  ?on-desktop="\${ifDefined(args.onDesktop)}"
  state="\${ifDefined(args.state)}"
  initial-focus="\${ifDefined(args.initialFocus)}"
  ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
  ?open-by="\${ifDefined(args.open)}"
  accessible-name="\${ifDefined(args.accessibleName)}"
  accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
  \${unsafeHTML(args.header)}
  \${unsafeHTML(args.default)}
  \${unsafeHTML(args.footer)}
</ui5-dialog>

<script>
  const dialogOpener = document.getElementById("dialogOpener-\${id}");
  const dialog = document.getElementById("dialog-\${id}"); 
  const dialogCloser = document.querySelector("#dialog-\${id} .dialogCloser");
  dialogOpener.accessibilityAttributes = {
    hasPopup: "dialog",
    controls: dialog.id,
  };
  dialogOpener.addEventListener("click", function () {
    dialog.show();
  });
  dialogCloser.addEventListener("click", function () {
    dialog.close();
  });
<\/script>\`;
}`,...($=(v=t.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var D,I,O;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`() => html\`
  <h3>Dialogs with various state properties</h3>
  <ui5-button id="error-state">Open error state dialog</ui5-button>
  <ui5-button id="information-state">Open information state dialog</ui5-button>
  <ui5-button id="success-state">Open success state dialog</ui5-button>
  <ui5-button id="warning-state">Open warning state dialog</ui5-button>
  <ui5-dialog id="error-state-dialog" header-text="Error" state="Error">
    <p>Error state dialog</p>
    <div
      slot="footer"
      style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;"
    >
      <ui5-button id="error-close">Close</ui5-button>
    </div>
  </ui5-dialog>
  <ui5-dialog
    id="information-state-dialog"
    header-text="Information"
    state="Information"
  >
    <p>Information state dialog</p>
    <div
      slot="footer"
      style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;"
    >
      <ui5-button id="information-close">Close</ui5-button>
    </div>
  </ui5-dialog>
  <ui5-dialog id="success-state-dialog" header-text="Success" state="Success">
    <p>Success state dialog</p>
    <div
      slot="footer"
      style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;"
    >
      <ui5-button id="success-close">Close</ui5-button>
    </div>
  </ui5-dialog>
  <ui5-dialog id="warning-state-dialog" header-text="Warning" state="Warning">
    <p>Warning state dialog</p>
    <div
      slot="footer"
      style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;"
    >
      <ui5-button id="warning-close">Close</ui5-button>
    </div>
  </ui5-dialog>
  <script>
    const dialogOpenerError = document.getElementById("error-state");
    const dialogError = document.getElementById("error-state-dialog");
    const dialogCloserError = document.getElementById("error-close");
    dialogOpenerError.addEventListener("click", function () {
      dialogError.show();
    });
    dialogCloserError.addEventListener("click", function () {
      dialogError.close();
    });
    const dialogOpenerInfo = document.getElementById("information-state");
    const dialogInfo = document.getElementById("information-state-dialog");
    const dialogCloserInfo = document.getElementById("information-close");
    dialogOpenerInfo.addEventListener("click", function () {
      dialogInfo.show();
    });
    dialogCloserInfo.addEventListener("click", function () {
      dialogInfo.close();
    });
    const dialogOpenerSuccess = document.getElementById("success-state");
    const dialogSuccess = document.getElementById("success-state-dialog");
    const dialogCloserSuccess = document.getElementById("success-close");
    dialogOpenerSuccess.addEventListener("click", function () {
      dialogSuccess.show();
    });
    dialogCloserSuccess.addEventListener("click", function () {
      dialogSuccess.close();
    });
    const dialogOpenerWarning = document.getElementById("warning-state");
    const dialogWarning = document.getElementById("warning-state-dialog");
    const dialogCloserWarning = document.getElementById("warning-close");
    dialogOpenerWarning.addEventListener("click", function () {
      dialogWarning.show();
    });
    dialogCloserWarning.addEventListener("click", function () {
      dialogWarning.close();
    });
  <\/script>
\``,...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const G=["Basic","DraggableAndResizable","FioriDialog","StateProperties"];export{o as Basic,a as DraggableAndResizable,t as FioriDialog,s as StateProperties,G as __namedExportsOrder,U as default};
//# sourceMappingURL=Dialog.stories.f728df4d.js.map
