import{y as c}from"./lit-html.9e2e9691.js";import{l as o}from"./if-defined.fd0de8da.js";import{o as n}from"./unsafe-html.9d6beac9.js";import{D as f}from"./docs.1497b5b0.js";import"./index.13ed06ac.js";import"./iframe.eafa45a4.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.b8add541.js";import"./index.5ca63ce8.js";import"./_getTag.ec397a63.js";import"./index.bc622db0.js";import"./index.b38f6aa4.js";import"./chunk-MA2MUXQN.32c6e4fb.js";import"./chunk-R4NKYYJA.15989c7a.js";const m={horizontalAlign:{control:"select",options:["Center","Left","Right","Stretch"]},placementType:{control:"select",options:["Bottom","Left","Right","Top"]},verticalAlign:{control:"select",options:["Bottom","Center","Stretch","Top"]},footer:{control:{type:"text"}},header:{control:{type:"text"}},showAt:{table:{category:"Methods"}},accessibleRole:{control:"select",options:["AlertDialog","Dialog","None"]},default:{control:{type:"text"}},applyFocus:{table:{category:"Methods"}},close:{table:{category:"Methods"}},isOpen:{table:{category:"Methods"}}},u={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var r=Object.freeze,v=Object.defineProperty,g=(e,d)=>r(v(e,"raw",{value:r(d||e.slice())})),i;const a="ui5-popover",R={title:"Main/Popover",component:a,parameters:{docs:{page:f({...u,component:a}),story:{inline:!1,iframeHeight:"700px"}}},argTypes:m},h=e=>c`<ui5-popover
    initial-focus="${o(e.initialFocus)}"
    ?prevent-focus-restore="${o(e.preventFocusRestore)}"
    ?open="${o(e.open)}"
    accessible-name="${o(e.accessibleName)}"
    accessible-name-ref="${o(e.accessibleNameRef)}"
    accessible-role="${o(e.accessibleRole)}"
    header-text="${o(e.headerText)}"
    placement-type="${o(e.placementType)}"
    horizontal-align="${o(e.horizontalAlign)}"
    vertical-align="${o(e.verticalAlign)}"
    ?modal="${o(e.modal)}"
    ?hide-backdrop="${o(e.hideBackdrop)}"
    ?hire-arrow="${o(e.hideArrow)}"
    ?allow-target-overlap="${o(e.allowTargetOverlap)}"
    opener="${o(e.opener)}"
    >
    ${n(e.header)}
    ${n(e.default)}
    ${n(e.footer)}
</ui5-popover>`,t=h.bind({});t.args={headerText:"Newsletter subscription",default:`<div class="popover-content">
    <div class="flex-column">
        <ui5-label for="emailInput" required show-colon>Email</ui5-label>
        <ui5-input id="emailInput" style="min-width: 150px; margin-top: 1rem;" placeholder="Enter Email"></ui5-input>
    </div>
</div>`,footer:`<div slot="footer" class="popover-footer">
    <div style="flex: 1;"></div>
    <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
</div>`};t.decorators=[e=>c(i||(i=g([`<style>
    .popover-content {
        margin: 0.5rem;
        height: 100px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
    }

    .popover-footer {
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
    }
</style>

<ui5-button id="openPopoverButton" design="Emphasized">Open Popover</ui5-button>
`,`

<script>
    var popoverOpener = document.getElementById("openPopoverButton");
    var popover = document.querySelector("ui5-popover");
    var popoverCloser = document.getElementById("closePopoverButton");
    popoverOpener.addEventListener("click", () => {
        popover.showAt(popoverOpener);
    });
    popoverCloser.addEventListener("click", () => {
        popover.close();
    });
<\/script>`])),e())];var l,p,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return html\`<ui5-popover
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    placement-type="\${ifDefined(args.placementType)}"
    horizontal-align="\${ifDefined(args.horizontalAlign)}"
    vertical-align="\${ifDefined(args.verticalAlign)}"
    ?modal="\${ifDefined(args.modal)}"
    ?hide-backdrop="\${ifDefined(args.hideBackdrop)}"
    ?hire-arrow="\${ifDefined(args.hideArrow)}"
    ?allow-target-overlap="\${ifDefined(args.allowTargetOverlap)}"
    opener="\${ifDefined(args.opener)}"
    >
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-popover>\`;
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const M=["Basic"];export{t as Basic,M as __namedExportsOrder,R as default};
//# sourceMappingURL=Popover.stories.8231e969.js.map
