try{
var S=__STORYBOOKAPI__,{ActiveTabs:v,Consumer:w,ManagerContext:T,Provider:O,addons:r,combineParameters:C,controlOrMetaKey:x,controlOrMetaSymbol:A,eventMatchesShortcut:E,eventToShortcut:P,isMacLike:I,isShortcutTaken:R,keyToSymbol:G,merge:M,mockChannel:D,optionOrAltSymbol:N,shortcutMatchesShortcut:j,shortcutToHumanString:L,types:i,useAddonState:B,useArgTypes:H,useArgs:K,useChannel:U,useGlobalTypes:Y,useGlobals:W,useParameter:F,useSharedState:V,useStoryPrepared:z,useStorybookApi:$,useStorybookState:J}=__STORYBOOKAPI__;var ee=__STORYBOOKTHEMING__,{CacheProvider:te,ClassNames:oe,Global:se,ThemeProvider:re,background:ae,color:ne,convert:ie,create:p,createCache:pe,createGlobal:le,createReset:ce,css:ue,darken:me,ensure:de,ignoreSsrWarning:be,isPropValid:ye,jsx:he,keyframes:ge,lighten:fe,styled:_e,themes:ke,typography:Se,useTheme:ve,withTheme:we}=__STORYBOOKTHEMING__;var l=p({base:"light",brandTitle:"UI5 Web Components",brandImage:"../assets/images/sb-logo.png",brandUrl:"./",brandTarget:"_self"});var e=__REACT__,{Children:Ge,Component:Me,Fragment:De,Profiler:Ne,PureComponent:je,StrictMode:Le,Suspense:Be,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:He,cloneElement:Ke,createContext:Ue,createElement:Ye,createFactory:We,createRef:Fe,forwardRef:Ve,isValidElement:ze,lazy:$e,memo:Je,useCallback:Xe,useContext:qe,useDebugValue:Qe,useEffect:Ze,useImperativeHandle:et,useLayoutEffect:tt,useMemo:ot,useReducer:st,useRef:rt,useState:at,version:nt}=__REACT__;var c=()=>e.createElement("svg",{className:"sb-ui5-github-svg",viewBox:"0 0 512 499.36",xmlns:"http://www.w3.org/2000/svg"},e.createElement("title",null,"GitHub"),e.createElement("path",{d:"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z",fill:"#404040",fillRule:"evenodd"}));var a={name:"@ui5/webcomponents-playground",private:!0,version:"1.15.0-rc.2",description:"UI5\xA0Web\xA0Components\xA0Playground",author:"SAP\xA0SE\xA0(https://www.sap.com)",license:"Apache-2.0",keywords:["ui5-web-components","openui5","sapui5"],repository:{type:"git",url:"https://github.com/SAP/ui5-webcomponents.git"},devDependencies:{"@storybook/addon-actions":"^7.0.2","@storybook/addon-essentials":"^7.0.2","@storybook/addon-links":"^7.0.2","@storybook/web-components":"^7.0.2","@storybook/web-components-vite":"^7.0.2","@types/react":"^18.0.27","@types/react-dom":"^18.0.11","@whitespace/storybook-addon-html":"^5.1.0","copy-and-watch":"^0.1.5",lit:"^2.7.1","npm-run-all":"^4.1.5",prettier:"^2.8.1",react:"^18.2.0","react-dom":"^18.2.0","react-syntax-highlighter":"^15.5.0","remark-gfm":"^3.0.1",rimraf:"^3.0.2",storybook:"^7.0.2",typescript:"^4.9.4","vite-node":"^0.29.8"},scripts:{build:"npm run build-storybook","build:bundle":"vite build",clean:"npm-run-all --parallel clean:*","clean:assets":"rimraf ./assets/js/ui5-webcomponents/*","clean:pages":"rimraf ./docs/storybook-pages/main && rimraf ./docs/storybook-pages/fiori",start:"npm run storybook","copy:assets":"npm-run-all copy:assets:resources copy:assets:main copy:assets:fiori","copy:assets:resources":'copy-and-watch "../fiori/dist/resources/*" "./assets/js/ui5-webcomponents"',"copy:assets:main":'copy-and-watch "../main/dist/assets/**/*" "./assets/"',"copy:assets:fiori":'copy-and-watch "../fiori/dist/assets/**/*" "./assets/"',"prepare:bundle":"npm run build:bundle","prepare:assets":"npm run clean:assets && npm run copy:assets","prepare:nojekyll":'copy-and-watch "./.nojekyll" "./dist"',"prepare:samples":"node ./build-scripts-storybook/samples-prepare.js","prepare:manifest":"node ./build-scripts-storybook/parse-manifest.js","prepare:pages":"npm run clean:pages && vite-node ./build-scripts-storybook/pages-prepare.ts","prepare:documentation":"vite-node ./build-scripts-storybook/documentation-prepare.ts",storybook:"npm-run-all --parallel prepare:* && storybook dev -p 6006","build-storybook":"npm-run-all --parallel prepare:* && tsc && storybook build -o ./dist/playground"}};var u="github-button",d=()=>e.createElement("div",{style:{display:"flex",height:"100%",alignItems:"center",gap:"5px"}},e.createElement("a",{style:{width:"20px",height:"20px"},href:"https://github.com/SAP/ui5-webcomponents",target:"_blank",rel:"noreferrer"},e.createElement(c,null)),e.createElement("a",{style:{textDecoration:"none",color:"inherit"},href:`https://github.com/SAP/ui5-webcomponents/tree/v${a.version}`,target:"_blank",rel:"noreferrer"},"v",a.version));r.register(u,b=>{r.add(u,{title:"Github",type:i.TOOLEXTRA,match:({viewMode:n})=>!!(n&&n.match(/^(story|docs)$/)),render:d})});r.setConfig({theme:l});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
