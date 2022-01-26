(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{Jn06:function(M,A,l){"use strict";l.r(A);var s=l("q1tI"),e=l.n(s),r=l("dEAq"),B=l.n(r),E=l("Zxc8"),L=l("H1Ra"),v=l("dMo/"),P=e.a.memo(C=>{var i=C.demos,b=i["generator-demo"].component,F=i["generator-modal"].component,y=i["generator-settings"].component,u=i["generator-layout"].component,d=i["generator-transformer"].component;return e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},e.a.createElement(r.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),e.a.createElement("h3",{id:"\u5B89\u88C5"},e.a.createElement(r.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),e.a.createElement(L.a,{code:"npm i fr-generator",lang:"bash"}),e.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},e.a.createElement(r.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),e.a.createElement(E.default,i["generator-demo"].previewerProps,e.a.createElement(b,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"api"},e.a.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API"),e.a.createElement("h3",{id:"props"},e.a.createElement(r.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Props"),e.a.createElement("p",null,"| \u53C2\u6570               | \u8BF4\u660E                            | \u7C7B\u578B       | \u9ED8\u8BA4\u503C                                                                                                                     | | ------------------ | ------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- | | getId              | \u8BBE\u7F6E\u5982\u4F55\u751F\u6210\u65B0\u7684 id             | ",e.a.createElement("code",null,"Function")," | name => ",e.a.createElement("code",null,"$","{","name","}","_$","{","nanoid(6)","}"),"                                                                                             | | hideId             | \u9690\u85CF\u7EC4\u4EF6 ID                     | ",e.a.createElement("code",null,"boolean"),"  | ",e.a.createElement("code",null,"false"),"                                                                                                                    | | fixedName          | \u56FA\u5B9A settings \u7684 name \u4E3A\u7EC4\u4EF6 ID | ",e.a.createElement("code",null,"boolean"),"  | ",e.a.createElement("code",null,"false"),"                                                                                                                    | | canDelete          | \u7EC4\u4EF6\u5220\u9664\u63A7\u5236                    | ",e.a.createElement("code",null,"boolean"),"  | ",e.a.createElement("code",null,"Function"),"                                                                                                                 | ",e.a.createElement("code",null,"false")," | | defaultValue       | \u9ED8\u8BA4\u8868\u5355 schema                 | ",e.a.createElement("code",null,"object"),"   | ",e.a.createElement("code",null,"DEFAULT_SCHEMA"),"                                                                                                           | | transformer        | schema \u53CC\u5411\u8F6C\u6362                 | ",e.a.createElement("code",null,"object"),"   | ",e.a.createElement("code",null,"{"," from, to, fromSetting, toSetting ","}"),"                                                                                     | | extraButtons       | \u64CD\u4F5C\u680F\u6309\u94AE                      | ",e.a.createElement("code",null,"array"),"    | ",e.a.createElement("code",null,"extraButton[]"),"                                                                                                            | | controlButtons     | \u9009\u4E2D\u9879\u64CD\u4F5C\u6309\u94AE                  | ",e.a.createElement("code",null,"array"),"    | ",e.a.createElement("code",null,"controlButton[]"),"                                                                                                          | | settings           | \u5DE6\u53F3\u4FA7\u680F\u914D\u7F6E                    | ",e.a.createElement("code",null,"array"),"    | ",e.a.createElement(r.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js"},e.a.createElement("code",null,"defaultSettings")),"       | | commonSettings     | \u901A\u7528\u914D\u7F6E                        | ",e.a.createElement("code",null,"object"),"   | ",e.a.createElement(r.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js"},e.a.createElement("code",null,"defaultCommonSettings"))," | | globalSettings     | \u5168\u5C40\u914D\u7F6E                        | ",e.a.createElement("code",null,"object"),"   | ",e.a.createElement(r.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js"},e.a.createElement("code",null,"defaultGlobalSettings"))," | | widgets            | \u81EA\u5B9A\u4E49\u7EC4\u4EF6                      | ",e.a.createElement("code",null,"object"),"   | ",e.a.createElement("code",null,"{","}"),"                                                                                                                       | | mapping            | \u7EC4\u4EF6\u548C schema \u7684\u6620\u5C04\u89C4\u5219        | ",e.a.createElement("code",null,"object"),"   | ",e.a.createElement("code",null,"{","}"),"                                                                                                                       | | fieldRender        | \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3\u51FD\u6570              | ",e.a.createElement("code",null,"Function")," | ",e.a.createElement("code",null,"(schema, widgetProps, children, originNode) => originNode"),"                                                                | | fieldWrapperRender | \u81EA\u5B9A\u4E49\u5BB9\u5668\u7EC4\u4EF6\u6E32\u67D3\u51FD\u6570          | ",e.a.createElement("code",null,"Function")," | ",e.a.createElement("code",null,"(schema, isSelected, children, originNode) => originNode"),"                                                                 |"),e.a.createElement("h4",{id:"extrabutton"},e.a.createElement(r.AnchorLink,{to:"#extrabutton","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"extraButton"),e.a.createElement(v.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027"),e.a.createElement("th",null,"\u8BF4\u660E"),e.a.createElement("th",null,"\u7C7B\u578B"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"text"),e.a.createElement("td",null,"\u6309\u94AE\u6587\u6848"),e.a.createElement("td",null,e.a.createElement("code",null,"string"))),e.a.createElement("tr",null,e.a.createElement("td",null,"onClick"),e.a.createElement("td",null,"\u6309\u94AE\u70B9\u51FB\u56DE\u8C03\u51FD\u6570"),e.a.createElement("td",null,e.a.createElement("code",null,"(event) => void"))))),e.a.createElement("p",null,"\u6570\u7EC4\u524D\u56DB\u9879\u4E3A\u5E03\u5C14\u503C\uFF0C\u51B3\u5B9A\u9ED8\u8BA4\u6309\u94AE\u662F\u5426\u5C55\u793A\u3002 \u652F\u6301 antd \u6309\u94AE\u7EC4\u4EF6\u7684\u6240\u6709\u5176\u4ED6\u5C5E\u6027 ",e.a.createElement(r.Link,{to:"https://ant.design/components/button-cn/#API"},"https://ant.design/components/button-cn/#API")),e.a.createElement("h4",{id:"controlbutton"},e.a.createElement(r.AnchorLink,{to:"#controlbutton","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"controlButton"),e.a.createElement(v.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027"),e.a.createElement("th",null,"\u8BF4\u660E"),e.a.createElement("th",null,"\u7C7B\u578B"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"text"),e.a.createElement("td",null,"\u6309\u94AE\u6587\u6848"),e.a.createElement("td",null,e.a.createElement("code",null,"string"))),e.a.createElement("tr",null,e.a.createElement("td",null,"onClick"),e.a.createElement("td",null,"\u6309\u94AE\u70B9\u51FB\u56DE\u8C03\u51FD\u6570"),e.a.createElement("td",null,e.a.createElement("code",null,"(event, schema) => void"))))),e.a.createElement("p",null,"\u6570\u7EC4\u524D\u4E24\u9879\u4E3A\u5E03\u5C14\u503C\u6216\u51FD\u6570\uFF0C\u51B3\u5B9A\u9ED8\u8BA4\u6309\u94AE\u662F\u5426\u5C55\u793A\uFF0C\u51FD\u6570\u5165\u53C2\u4E3A\u9009\u4E2D\u9879 schema\u3002"),e.a.createElement("h3",{id:"events"},e.a.createElement(r.AnchorLink,{to:"#events","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Events"),e.a.createElement(v.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),e.a.createElement("th",null,"\u8BF4\u660E"),e.a.createElement("th",null,"\u56DE\u8C03\u53C2\u6570"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"onChange"),e.a.createElement("td",null,"\u8868\u5355 data \u53D8\u5316\u56DE\u8C03"),e.a.createElement("td",null,"\u8868\u5355\u7684 data")),e.a.createElement("tr",null,e.a.createElement("td",null,"onSchemaChange"),e.a.createElement("td",null,"\u8868\u5355 schema \u53D8\u5316\u56DE\u8C03"),e.a.createElement("td",null,"\u5BFC\u51FA\u7684 schema")),e.a.createElement("tr",null,e.a.createElement("td",null,"onCanvasSelect"),e.a.createElement("td",null,"\u753B\u5E03\u7EC4\u4EF6\u9009\u62E9\u56DE\u8C03"),e.a.createElement("td",null,"\u9009\u4E2D\u9879\u7684 schema")))),e.a.createElement("h3",{id:"methods"},e.a.createElement(r.AnchorLink,{to:"#methods","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Methods"),e.a.createElement(v.a,null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),e.a.createElement("th",null,"\u8BF4\u660E"),e.a.createElement("th",null,"\u5165\u53C2"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"getValue"),e.a.createElement("td",null,"\u83B7\u53D6\u5BFC\u51FA\u7684 schema \u503C"),e.a.createElement("td",null,"-")),e.a.createElement("tr",null,e.a.createElement("td",null,"setValue"),e.a.createElement("td",null,"\u4ECE\u5916\u90E8\u5F3A\u5236\u4FEE\u6539 schema"),e.a.createElement("td",null,e.a.createElement("code",null,"schema"))),e.a.createElement("tr",null,e.a.createElement("td",null,"copyValue"),e.a.createElement("td",null,"\u5C06\u73B0\u6709 schema \u62F7\u8D1D\u5230\u526A\u8D34\u677F"),e.a.createElement("td",null,"-")),e.a.createElement("tr",null,e.a.createElement("td",null,"getErrorFields"),e.a.createElement("td",null,"\u83B7\u53D6\u914D\u7F6E\u9879\u6821\u9A8C\u9519\u8BEF"),e.a.createElement("td",null,"-")))),e.a.createElement("h2",{id:"\u6848\u4F8B\u6F14\u793A"},e.a.createElement(r.AnchorLink,{to:"#\u6848\u4F8B\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6848\u4F8B\u6F14\u793A"),e.a.createElement("h3",{id:"\u6D6E\u7A97\u63A5\u5165"},e.a.createElement(r.AnchorLink,{to:"#\u6D6E\u7A97\u63A5\u5165","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6D6E\u7A97\u63A5\u5165"),e.a.createElement("p",null,"\u7528\u4E8E schema \u7684\u53EF\u89C6\u5316\u4FEE\u6539")),e.a.createElement(E.default,i["generator-modal"].previewerProps,e.a.createElement(F,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"\u4FA7\u680F\u914D\u7F6E"},e.a.createElement(r.AnchorLink,{to:"#\u4FA7\u680F\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4FA7\u680F\u914D\u7F6E"),e.a.createElement("p",null,"\u4F7F\u7528 settings/commonSettings \u81EA\u7531\u914D\u7F6E\u5DE6\u53F3\u4FA7\u680F\u5185\u5BB9\uFF0C\u5E76\u4F7F\u7528 widgets \u6CE8\u5165\u548C\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),e.a.createElement("p",null,"\u201C\u8BA1\u6570\u5668\u201D\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002")),e.a.createElement(E.default,i["generator-settings"].previewerProps,e.a.createElement(y,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"\u81EA\u5B9A\u4E49\u5E03\u5C40"},e.a.createElement(r.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u5E03\u5C40","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u5E03\u5C40")),e.a.createElement(E.default,i["generator-layout"].previewerProps,e.a.createElement(u,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"schema-\u4E92\u8F6C"},e.a.createElement(r.AnchorLink,{to:"#schema-\u4E92\u8F6C","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Schema \u4E92\u8F6C"),e.a.createElement("p",null,"\u4F7F\u7528 ",e.a.createElement("code",null,"transformer")," \u8FD9\u4E2A props\uFF0C\u8FDB\u884C schema \u7684\u4E92\u8F6C")),e.a.createElement(E.default,i["generator-transformer"].previewerProps,e.a.createElement(d,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u5E38\u89C1\u95EE\u9898"},e.a.createElement(r.AnchorLink,{to:"#\u5E38\u89C1\u95EE\u9898","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5E38\u89C1\u95EE\u9898"),e.a.createElement("p",null,e.a.createElement("strong",null,"1\u3001\u5982\u4F55\u63A7\u5236\u7F16\u8F91\u5668\u9AD8\u5EA6")),e.a.createElement("p",null,"\u7ED9\u7EC4\u4EF6\u5916\u5C42\u8981\u5305\u88F9\u7684 div \u8BBE\u7F6E\u9AD8\u5EA6\u5373\u53EF\uFF0C\u5426\u5219\u4E3A\u9ED8\u8BA4\u503C min-height: 30vh"))))});A.default=C=>{var i=e.a.useContext(r.context),b=i.demos;return e.a.useEffect(()=>{var F;C!=null&&(F=C.location)!==null&&F!==void 0&&F.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(C.location.hash.slice(1)))},[]),e.a.createElement(P,{demos:b})}},RZMt:function(M,A,l){},WpQk:function(M,A,l){},Zxc8:function(M,A,l){"use strict";l.r(A);var s=l("q1tI"),e=l.n(s),r=l("k3GJ"),B=l("MZF8"),E=l("dEAq"),L=l.n(E),v=l("H1Ra"),P=l("RZMt"),C=l.n(P);function i(a,o){return d(a)||u(a,o)||F(a,o)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(a,o){if(!!a){if(typeof a=="string")return y(a,o);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(a,o)}}function y(a,o){(o==null||o>a.length)&&(o=a.length);for(var n=0,m=new Array(o);n<o;n++)m[n]=a[n];return m}function u(a,o){var n=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var m=[],h=!0,p=!1,O,D;try{for(n=n.call(a);!(h=(O=n.next()).done)&&(m.push(O.value),!(o&&m.length===o));h=!0);}catch(t){p=!0,D=t}finally{try{!h&&n.return!=null&&n.return()}finally{if(p)throw D}}return m}}function d(a){if(Array.isArray(a))return a}function c(a,o){var n,m=(n=a.match(/\.(\w+)$/))===null||n===void 0?void 0:n[1];return m||(m=o.tsx?"tsx":"jsx"),m}var f=function(o){var n,m,h,p=Object(s.useRef)(),O=Object(s.useContext)(E.context),D=O.locale,t=Object(E.useLocaleProps)(D,o),g=Object(E.useDemoUrl)(t.identifier),T=t.demoUrl||g,J=(B.a===null||B.a===void 0?void 0:B.a.location.hash)==="#".concat(t.identifier),Z=Object.keys(t.sources).length===1,N=Object(E.useCodeSandbox)(((n=t.hideActions)===null||n===void 0?void 0:n.includes("CSB"))?null:t),R=Object(E.useRiddle)(((m=t.hideActions)===null||m===void 0?void 0:m.includes("RIDDLE"))?null:t),V=Object(E.useMotions)(t.motions||[],p.current),j=i(V,2),G=j[0],z=j[1],Q=Object(E.useCopy)(),w=i(Q,2),X=w[0],Y=w[1],q=Object(s.useState)(function(){return t.sources._?"_":Object.keys(t.sources)[0]}),U=i(q,2),I=U[0],ee=U[1],te=Object(s.useState)(c(I,t.sources[I])),W=i(te,2),k=W[0],ae=W[1],ne=Object(s.useState)(Boolean(t.defaultShowCode)),K=i(ne,2),S=K[0],ue=K[1],le=Object(s.useState)(Math.random()),$=i(le,2),re=$[0],H=$[1],x=t.sources[I][k]||t.sources[I].content,ce=Object(E.useTSPlaygroundUrl)(D,x),oe=Object(s.useRef)(),ie=Object(E.usePrefersColor)(),Ee=i(ie,1),de=Ee[0];Object(s.useEffect)(function(){H(Math.random())},[de]);function me(_){ee(_),ae(c(_,t.sources[_]))}return e.a.createElement("div",{style:t.style,className:[t.className,"__dumi-default-previewer",J?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:t.identifier,"data-debug":t.debug||void 0,"data-iframe":t.iframe||void 0},t.iframe&&e.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),e.a.createElement("div",{ref:p,className:"__dumi-default-previewer-demo",style:{transform:t.transform?"translate(0, 0)":void 0,padding:t.compact||t.iframe&&t.compact!==!1?"0":void 0,background:t.background}},t.iframe?e.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(t.iframe).replace(/(\d)$/,"$1px")},key:re,src:T,ref:oe}):t.children),e.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":t.title},t.title&&e.a.createElement(E.AnchorLink,{to:"#".concat(t.identifier)},t.title),t.description&&e.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description}})),e.a.createElement("div",{className:"__dumi-default-previewer-actions"},N&&e.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:N}),R&&e.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:R}),t.motions&&e.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:function(){return G()}}),t.iframe&&e.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return H(Math.random())}}),!((h=t.hideActions)===null||h===void 0?void 0:h.includes("EXTERNAL"))&&e.a.createElement(E.Link,{target:"_blank",to:T},e.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),e.a.createElement("span",null),e.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":Y,onClick:function(){return X(x)}}),k==="tsx"&&S&&e.a.createElement(E.Link,{target:"_blank",to:ce},e.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),e.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(S?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return ue(!S)}})),S&&e.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Z&&e.a.createElement(r.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:I,onChange:me},Object.keys(t.sources).map(function(_){return e.a.createElement(r.TabPane,{tab:_==="_"?"index.".concat(c(_,t.sources[_])):_,key:_})})),e.a.createElement("div",{className:"__dumi-default-previewer-source"},e.a.createElement(v.a,{code:x,lang:k,showCopy:!1}))))};A.default=f},"dMo/":function(M,A,l){"use strict";var s=l("q1tI"),e=l.n(s),r=l("hKI/"),B=l.n(r),E=l("WpQk"),L=l.n(E);function v(u,d){return F(u)||b(u,d)||C(u,d)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(u,d){if(!!u){if(typeof u=="string")return i(u,d);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return i(u,d)}}function i(u,d){(d==null||d>u.length)&&(d=u.length);for(var c=0,f=new Array(d);c<d;c++)f[c]=u[c];return f}function b(u,d){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var f=[],a=!0,o=!1,n,m;try{for(c=c.call(u);!(a=(n=c.next()).done)&&(f.push(n.value),!(d&&f.length===d));a=!0);}catch(h){o=!0,m=h}finally{try{!a&&c.return!=null&&c.return()}finally{if(o)throw m}}return f}}function F(u){if(Array.isArray(u))return u}var y=function(d){var c=d.children,f=Object(s.useRef)(),a=Object(s.useState)(!1),o=v(a,2),n=o[0],m=o[1],h=Object(s.useState)(!1),p=v(h,2),O=p[0],D=p[1];return Object(s.useEffect)(function(){var t=f.current,g=B()(function(){m(t.scrollLeft>0),D(t.scrollLeft<t.scrollWidth-t.offsetWidth)},100);return g(),t.addEventListener("scroll",g),window.addEventListener("resize",g),function(){t.removeEventListener("scroll",g),window.removeEventListener("resize",g)}},[]),e.a.createElement("div",{className:"__dumi-default-table"},e.a.createElement("div",{className:"__dumi-default-table-content",ref:f,"data-left-folded":n||void 0,"data-right-folded":O||void 0},e.a.createElement("table",null,c)))};A.a=y}}]);
