"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,k=u["".concat(c,".").concat(f)]||u[f]||m[f]||n;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={title:"Release Notes - Apache RocketMQ - Version 4.7.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},l=void 0,i={permalink:"/third-blog/2020/06/29/4.7.1",source:"@site/third-blog/2020-06-29-4.7.1.md",title:"Release Notes - Apache RocketMQ - Version 4.7.1",description:"* Source: rocketmq-all-4.7.1-source-release.zip [PGP] [SHA512]",date:"2020-06-29T00:00:00.000Z",formattedDate:"2020\u5e746\u670829\u65e5",tags:[{label:"Release_Notes",permalink:"/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/third-blog/tags/version"}],readingTime:2.865,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.7.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.1.1",permalink:"/third-blog/2020/07/20/release-notes-rocketmq-spring-2.1.1"},nextItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",permalink:"/third-blog/2020/04/02/release-notes-rocketmq-client-cpp-2.2.0"}},c={authorsImageUrls:[]},s=[],p={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Download the 4.7.1 release",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-source-release.zip"},"rocketmq-all-4.7.1-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-source-release.zip.sha512"},"SHA512"),"]"),(0,o.kt)("li",{parentName:"ul"},"Binary: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip"},"rocketmq-all-4.7.1-bin-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip.sha512"},"SHA512"),"]"))))}m.isMDXComponent=!0}}]);