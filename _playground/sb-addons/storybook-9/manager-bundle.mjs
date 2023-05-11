try{
var k=__STORYBOOKAPI__,{ActiveTabs:v,Consumer:x,ManagerContext:T,Provider:O,addons:o,combineParameters:w,controlOrMetaKey:A,controlOrMetaSymbol:C,eventMatchesShortcut:E,eventToShortcut:P,isMacLike:j,isShortcutTaken:R,keyToSymbol:I,merge:G,mockChannel:B,optionOrAltSymbol:M,shortcutMatchesShortcut:D,shortcutToHumanString:N,types:l,useAddonState:K,useArgTypes:L,useArgs:Y,useChannel:H,useGlobalTypes:U,useGlobals:W,useParameter:F,useSharedState:V,useStoryPrepared:$,useStorybookApi:z,useStorybookState:J}=__STORYBOOKAPI__;var ee=__STORYBOOKTHEMING__,{CacheProvider:se,ClassNames:te,Global:re,ThemeProvider:oe,background:ne,color:ae,convert:le,create:i,createCache:ie,createGlobal:pe,createReset:ce,css:de,darken:ue,ensure:me,ignoreSsrWarning:be,isPropValid:ye,jsx:he,keyframes:ge,lighten:_e,styled:fe,themes:Se,typography:ke,useTheme:ve,withTheme:xe}=__STORYBOOKTHEMING__;var p=i({base:"light",brandTitle:"UI5 Web Components",brandImage:"..//assets/images/sb-logo.png",brandUrl:"../",brandTarget:"_self"});var e=__REACT__,{Children:Ie,Component:Ge,Fragment:Be,Profiler:Me,PureComponent:De,StrictMode:Ne,Suspense:Ke,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Le,cloneElement:Ye,createContext:He,createElement:Ue,createFactory:We,createRef:Fe,forwardRef:Ve,isValidElement:$e,lazy:ze,memo:Je,useCallback:Xe,useContext:qe,useDebugValue:Qe,useEffect:Ze,useImperativeHandle:es,useLayoutEffect:ss,useMemo:ts,useReducer:rs,useRef:os,useState:ns,version:as}=__REACT__;var c=()=>e.createElement("svg",{className:"sb-ui5-github-svg",viewBox:"0 0 512 499.36",xmlns:"http://www.w3.org/2000/svg"},e.createElement("title",null,"GitHub"),e.createElement("path",{d:"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z",fill:"#404040",fillRule:"evenodd"}));var n={name:"@ui5/webcomponents-playground",private:!0,version:"1.13.0-rc.5",description:"UI5\xA0Web\xA0Components\xA0Playground",author:"SAP\xA0SE\xA0(https://www.sap.com)",license:"Apache-2.0",keywords:["ui5-web-components","openui5","sapui5"],repository:{type:"git",url:"https://github.com/SAP/ui5-webcomponents.git"},devDependencies:{"@storybook/addon-actions":"^7.0.2","@storybook/addon-essentials":"^7.0.2","@storybook/addon-links":"^7.0.2","@storybook/web-components":"^7.0.2","@storybook/web-components-vite":"^7.0.2","@types/react":"^18.0.27","@types/react-dom":"^18.0.11","@whitespace/storybook-addon-html":"^5.1.0","copy-and-watch":"^0.1.5",lit:"^2.7.1","npm-run-all":"^4.1.5",prettier:"^2.8.1",react:"^18.2.0","react-dom":"^18.2.0","react-syntax-highlighter":"^15.5.0","remark-gfm":"^3.0.1",rimraf:"^3.0.2",storybook:"^7.0.2",typescript:"^4.9.4","vite-node":"^0.29.8"},scripts:{build:"yarn install:dependencies && npm-run-all --parallel prepare:* && tsc && bundle exec jekyll build --source ./ --destination ./dist","build:next":"npm run build-storybook",build_as_admin:"yarn install:dependencies_as_admin && npm-run-all --parallel prepare:* && bundle exec jekyll build --source ./ --destination ./dist && npm run build:next","build:main":"yarn install:dependencies && npm-run-all --parallel prepare:* && bundle exec jekyll build --source ./ --destination ./dist --config _config.yml,_config_main.yml","build:main_as_admin":"yarn install:dependencies_as_admin && npm-run-all --parallel prepare:* && bundle exec jekyll build --source ./ --destination ./dist --config _config.yml,_config_main.yml && npm run build:next","build:bundle":"vite build",clean:"npm-run-all --parallel clean:*","clean:samples":"rimraf ./docs/components/*sample.html","clean:assets":"rimraf ./assets/js/ui5-webcomponents/*","clean:pages":"rimraf ./docs/pages/content/main && rimraf ./docs/pages/content/fiori",start:"npm-run-all --parallel prepare:* && bundle exec jekyll serve","install:dependencies":"gem install bundler -v 2.3.5 && bundle install","install:dependencies_as_admin":"sudo gem install bundler -v 2.3.5 && bundle install","copy:assets":"npm-run-all copy:assets:resources copy:assets:main copy:assets:fiori","copy:assets:resources":'copy-and-watch "../fiori/dist/resources/*" "./assets/js/ui5-webcomponents"',"copy:assets:main":'copy-and-watch "../main/dist/assets/**/*" "./assets/"',"copy:assets:fiori":'copy-and-watch "../fiori/dist/assets/**/*" "./assets/"',"copy:samples":"node ./build-scripts/samples-prepare.js","prepare:bundle":"npm run build:bundle","prepare:assets":"npm run clean:assets && npm run copy:assets","prepare:samples":"npm run clean:samples && npm run copy:samples","prepare:pages":"npm run clean:pages && node ./build-scripts/pages-prepare.js","prepare:documentation":'node ./build-scripts/documentation-prepare.js "../../docs/" "./docs/"',"prepare:next:nojekyll":'copy-and-watch "./.nojekyll" "./dist"',"prepare:next:samples":"node ./build-scripts-storybook/samples-prepare.js","prepare:next:manifest":"node ./build-scripts-storybook/parse-manifest.js","prepare:next:documentation":"vite-node ./build-scripts-storybook/documentation-prepare.ts",storybook:"npm-run-all --parallel prepare:next:* && storybook dev -p 6006","build-storybook":"npm-run-all --parallel prepare:next:* && tsc && storybook build -o ./dist/_playground"}};var d="github-button",m=()=>e.createElement("div",{style:{display:"flex",height:"100%",alignItems:"center",gap:"5px"}},e.createElement("a",{style:{width:"20px",height:"20px"},href:"https://github.com/SAP/ui5-webcomponents",target:"_blank",rel:"noreferrer"},e.createElement(c,null)),e.createElement("a",{style:{textDecoration:"none",color:"inherit"},href:`https://github.com/SAP/ui5-webcomponents/tree/v${n.version}`,target:"_blank",rel:"noreferrer"},"v",n.version));o.register(d,b=>{o.add(d,{title:"Github",type:l.TOOLEXTRA,match:({viewMode:a})=>!!(a&&a.match(/^(story|docs)$/)),render:m})});o.setConfig({theme:p});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
