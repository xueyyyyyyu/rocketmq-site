"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9304],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(r),m=o,g=h["".concat(c,".").concat(m)]||h[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},39733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Release Notes - Apache RocketMQ Spring - Version 2.2.2",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},i=void 0,s={permalink:"/en/third-blog/2022/04/05/release-notes-rocketmq-spring-2.2.2",source:"@site/third-blog/2022-04-05-release-notes-rocketmq-spring-2.2.2.md",title:"Release Notes - Apache RocketMQ Spring - Version 2.2.2",description:"* Source: rocketmq-spring-all-2.2.2-source-release.zip [PGP] [SHA512]",date:"2022-04-05T00:00:00.000Z",formattedDate:"April 5, 2022",tags:[{label:"RocketMQ_Spring",permalink:"/en/third-blog/tags/rocket-mq-spring"}],readingTime:1.285,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Spring - Version 2.2.2",categories:["Release_Notes"],tags:["RocketMQ_Spring"]},prevItem:{title:"Release Notes - Apache RocketMQ Streams - Version 1.0.1-preview",permalink:"/en/third-blog/2022/04/18/release-notes-rocketmq-streams-1.0.1-preview"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 5.0.0-ALPHA",permalink:"/en/third-blog/2022/03/15/5.0.0-ALPHA"}},c={authorsImageUrls:[]},p=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Download",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-spring/2.2.2/rocketmq-spring-rocketmq-spring-all-2.2.2.zip"},"rocketmq-spring-all-2.2.2-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.2.1/rocketmq-spring-all-2.2.1-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-spring/2.2.2/rocketmq-spring-rocketmq-spring-all-2.2.2.zip.sha512"},"SHA512"),"]"))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the version 2.2.2 release of RocketMQ Spring. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-spring"},"Quick Start"),"."),(0,o.kt)("h2",{id:"improvement"},"Improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/219"},"ISSUE #219"),"] -  Support to enable tls through configuration file."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/389"},"ISSUE #389"),"] -  Upgrade rocketmq-samples version to 2.2.2-SNAPSHOT."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/396"},"ISSUE #396"),"] -  Support namespace in configuration file and annotation."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/402"},"ISSUE #402"),"] -  Supplement rocketmq sync send message failed log out."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/404"},"ISSUE #404"),"] -  Upgrade RocketMQ version to 4.9.2."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/417"},"ISSUE #417"),"] -  Fix the instance name is too long."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/410"},"ISSUE #410"),"] -  Chore: sample-version-sync."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/428"},"ISSUE #428"),"] -  Upgrade spring-core and spring-boot due to cve."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/411"},"ISSUE #411"),"] -  Support DELAY and WAIT properties in RocketMQHeaders.java, which can convert Spring-Message to Rocket-Message conveniently."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/419"},"ISSUE #419"),"] -  Support consumption retry strategy configuration."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/429"},"ISSUE #429"),"] -  The 'consumeThreadMax' in annotation @RocketMQMessageListener is not works well."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/436"},"ISSUE #436"),"] -  Upgrade RocketMQ version to 4.9.3."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/435"},"ISSUE #435"),'] -  Support Consumer Shutdown "awaitTerminationMillisWhenShutdown".'),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/439"},"ISSUE #439"),"] -  Fix the wrong comment description of the default value in the keepalivetime field of the RocketMQTransactionListener annotation."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/443"},"ISSUE #443"),"] -  Update Spring to 5.3.18 to fix CVE cve-2022-22965 aka Spring4shell.")),(0,o.kt)("h2",{id:"bug"},"Bug"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/365"},"ISSUE #365"),"] -  WAIT_STORE_MSG_OK property parsing error."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq-spring/issues/426"},"ISSUE #426"),"] -  Fix deserialize LocalDateTime failed when using jdk8.")))}u.isMDXComponent=!0}}]);