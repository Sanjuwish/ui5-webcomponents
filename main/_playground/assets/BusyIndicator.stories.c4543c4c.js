import{y as p}from"./lit-html.9e2e9691.js";import{o as b}from"./unsafe-html.9d6beac9.js";import{l as n}from"./if-defined.fd0de8da.js";import{D as g}from"./docs.17292db0.js";import{B as f}from"./BusyIndicatorSize.0b7bdd59.js";import"./index.b3a4ebc7.js";import"./iframe.bf630258.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.b8add541.js";import"./index.5ca63ce8.js";import"./_getTag.ec397a63.js";import"./index.bc622db0.js";import"./index.b38f6aa4.js";import"./chunk-MA2MUXQN.c8c47063.js";import"./chunk-R4NKYYJA.15989c7a.js";const x={size:{control:"select",options:["Large","Medium","Small"]},default:{control:{type:"text"}}},$={package:"@ui5/webcomponents",since:"0.12.0"};var r=Object.freeze,z=Object.defineProperty,D=(e,v)=>r(z(e,"raw",{value:r(v||e.slice())})),a;const s="ui5-busy-indicator",W={title:"Main/BusyIndicator",component:s,parameters:{docs:{page:g({...$,component:s})}},argTypes:x},y=e=>p`<ui5-busy-indicator
    text="${n(e.text)}"
    size="${n(e.size)}"
    ?active="${n(e.active)}"
    delay="${n(e.delay)}"
>
    ${b(e.default)}
</ui5-busy-indicator>`,i=y.bind({});i.args={active:!0,size:f.Medium};const t=y.bind({});t.args={size:f.Medium,default:`<ui5-list
    no-data-text="No Data"
    header-text="Available Items"
    >
</ui5-list>`};t.decorators=[e=>p(a||(a=D([`<style>
    .sample {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>

<div class="sample">
    <ui5-button>Fetch List Data</ui5-button>
    `,`
</div>

<script>
    var busyIndicator = document.querySelector("ui5-busy-indicator");
    var list = document.querySelector("ui5-list");
    var fetchBtn = document.querySelector("ui5-button");

    fetchBtn.addEventListener("click", event => {
        busyIndicator.active = true;

        setTimeout(() => {
            ["UI5", "Web", "Components"].forEach(title => {
                const el = document.createElement("ui5-li");
                el.textContent = title;
                list.appendChild(el);
            });

            busyIndicator.active = false;
        }, 3000);
    });
<\/script>`])),e())];t.parameters={docs:{story:{iframeHeight:"500px",inline:!1}}};var o,c,u;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return html\`<ui5-busy-indicator
    text="\${ifDefined(args.text)}"
    size="\${ifDefined(args.size)}"
    ?active="\${ifDefined(args.active)}"
    delay="\${ifDefined(args.delay)}"
>
    \${unsafeHTML(args.default)}
</ui5-busy-indicator>\`;
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`<ui5-busy-indicator
    text="\${ifDefined(args.text)}"
    size="\${ifDefined(args.size)}"
    ?active="\${ifDefined(args.active)}"
    delay="\${ifDefined(args.delay)}"
>
    \${unsafeHTML(args.default)}
</ui5-busy-indicator>\`;
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const j=["Basic","UsageWithComponents"];export{i as Basic,t as UsageWithComponents,j as __namedExportsOrder,W as default};
//# sourceMappingURL=BusyIndicator.stories.c4543c4c.js.map
