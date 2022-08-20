"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,f=u["".concat(i,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Release Notes - Apache RocketMQ - Version 4.5.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},l=void 0,c={permalink:"/en/third-blog/2019/03/29/4.5.0",source:"@site/third-blog/2019-03-29-4.5.0.md",title:"Release Notes - Apache RocketMQ - Version 4.5.0",description:"* Source: rocketmq-all-4.5.0-source-release.zip [PGP] [SHA512]",date:"2019-03-29T00:00:00.000Z",formattedDate:"March 29, 2019",tags:[{label:"Release_Notes",permalink:"/en/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/en/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/en/third-blog/tags/version"}],readingTime:.72,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.5.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.5.1",permalink:"/en/third-blog/2019/05/13/4.5.1"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.4.0",permalink:"/en/third-blog/2019/01/17/4.4.0"}},i={authorsImageUrls:[]},s=[],p={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Download the 4.5.0 release",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Source: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.0/rocketmq-all-4.5.0-source-release.zip"},"rocketmq-all-4.5.0-source-release.zip")," [",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.0/rocketmq-all-4.5.0-source-release.zip.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.0/rocketmq-all-4.5.0-source-release.zip.sha512"},"SHA512"),"]"),(0,n.kt)("li",{parentName:"ul"},"Binary: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.0/rocketmq-all-4.5.0-bin-release.zip"},"rocketmq-all-4.5.0-bin-release.zip")," [",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.0/rocketmq-all-4.5.0-bin-release.zip.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.5.0/rocketmq-all-4.5.0-bin-release.zip.sha512"},"SHA512"),"]"))))}m.isMDXComponent=!0}}]);