"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4076],{6742:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7294),a=r(3727),o=r(2263),i=r(3919),s=r(412);const l=(0,n.createContext)({collectLink:()=>{}});var c=r(4996),u=r(8780);const d=function(e){let{isNavLink:t,to:r,href:d,activeClassName:f,isActive:h,"data-noBrokenLinkCheck":v,autoAddBaseUrl:m=!0,...p}=e;var g;const{siteConfig:{trailingSlash:b,baseUrl:w}}=(0,o.Z)(),{withBaseUrl:y}=(0,c.C)(),k=(0,n.useContext)(l),E=r||d,_=(0,i.Z)(E),Z=null==E?void 0:E.replace("pathname://","");let C=void 0!==Z?(N=Z,m&&(e=>e.startsWith("/"))(N)?y(N):N):void 0;var N;C&&_&&(C=(0,u.applyTrailingSlash)(C,{trailingSlash:b,baseUrl:w}));const U=(0,n.useRef)(!1),M=t?a.OL:a.rU,B=s.Z.canUseIntersectionObserver;let I;(0,n.useEffect)((()=>(!B&&_&&null!=C&&window.docusaurus.prefetch(C),()=>{B&&I&&I.disconnect()})),[C,B,_]);const O=null!==(g=null==C?void 0:C.startsWith("#"))&&void 0!==g&&g,S=!C||!_||O;return C&&_&&!O&&!v&&k.collectLink(C),S?n.createElement("a",{href:C,...E&&!_&&{target:"_blank",rel:"noopener noreferrer"},...p}):n.createElement(M,{...p,onMouseEnter:()=>{U.current||null==C||(window.docusaurus.preload(C),U.current=!0)},innerRef:e=>{var t,r;B&&e&&_&&(t=e,r=()=>{null!=C&&window.docusaurus.prefetch(C)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),r())}))})),I.observe(t))},to:C||"",...t&&{isActive:h,activeClassName:f}})}},4973:(e,t,r)=>{r.d(t,{Z:()=>d,I:()=>u});var n=r(7294);const a=/{\w+}/g,o="{}";function i(e,t){const r=[],i=e.replace(a,(e=>{const a=e.substr(1,e.length-2),i=null==t?void 0:t[a];if(void 0!==i){const e=n.isValidElement(i)?i:String(i);return r.push(e),o}return e}));return 0===r.length?e:r.every((e=>"string"==typeof e))?i.split(o).reduce(((e,t,n)=>{var a;return e.concat(t).concat(null!==(a=r[n])&&void 0!==a?a:"")}),""):i.split(o).reduce(((e,t,a)=>[...e,n.createElement(n.Fragment,{key:a},t,r[a])]),[])}function s(e){let{children:t,values:r}=e;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,r)}var l=r(7529);function c(e){let{id:t,message:r}=e;var n;return null!==(n=l[null!=t?t:r])&&void 0!==n?n:r}function u(e,t){let{message:r,id:n}=e;var a;return i(null!==(a=c({message:r,id:n}))&&void 0!==a?a:r,t)}function d(e){let{children:t,id:r,values:a}=e;var o;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");const i=null!==(o=c({message:t,id:r}))&&void 0!==o?o:t;return n.createElement(s,{values:a},i)}},3919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{Z:()=>a,b:()=>n})},4996:(e,t,r)=>{r.d(t,{C:()=>o,Z:()=>i});var n=r(2263),a=r(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,n){let{forcePrependBaseUrl:o=!1,absolute:i=!1}=void 0===n?{}:n;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return t+r;const s=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+s:s}(t,e,r,n)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:r}=o();return r(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:r,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===r)return e;const[a]=e.split(/[#?]/),o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(a,o)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var o=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(o).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},4980:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(7294),a=r(6742),o=r(6010);const i="heroBanner_anIQ",s="buttons_TpFM",l="herosubtitle_Pe7D",c="button_xWpL",u="button2_V2Jb",d="herotitle_wGCM",f="github_8KD-";var h=r(4973);function v(){return n.createElement("header",{className:(0,o.Z)("hero hero--primary",i)},n.createElement("div",{className:"container"},n.createElement("h1",{className:(0,o.Z)("gradient-text",d)},"RocketMQ"),n.createElement("p",{className:(0,o.Z)("hero__subtitle",l)},"A cloud native messaging and streaming platform, making it simple to build event-driven applications"),n.createElement("div",{className:(0,o.Z)("container",f)},n.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=apache&repo=rocketmq&type=star&count=true&size=large",width:"170",height:"30",frameBorder:"0",scrolling:"0"}),n.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=apache&repo=rocketmq&type=fork&count=true&size=large",frameBorder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"})),n.createElement("div",{className:s},n.createElement(a.Z,{className:(0,o.Z)("button button--outline button--secondary button--lg",c),to:"/docs/\u4ecb\u7ecd/02quickstart"},n.createElement(h.Z,{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb")),n.createElement(a.Z,{to:"/version",className:(0,o.Z)("button button--outline button--secondary button--lg",u)},n.createElement(h.Z,{id:"RocketMQ 5.0 \u901f\u89c8"}," RocketMQ 5.0 \u901f\u89c8")))))}},6010:(e,t,r)=>{function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:()=>a});const a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}}}]);