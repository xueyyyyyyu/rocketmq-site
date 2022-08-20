"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(r),m=o,k=h["".concat(l,".").concat(m)]||h[m]||u[m]||s;return r?a.createElement(k,n(n({ref:t},p),{},{components:r})):a.createElement(k,n({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var c=2;c<s;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},55575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const s={title:"Release Notes - Apache RocketMQ - Version 4.4.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},n=void 0,i={permalink:"/en/third-blog/2019/01/17/4.4.0",source:"@site/third-blog/2019-01-17-4.4.0.md",title:"Release Notes - Apache RocketMQ - Version 4.4.0",description:"* Source: rocketmq-all-4.4.0-source-release.zip [PGP] [MD5] [SHA1]",date:"2019-01-17T00:00:00.000Z",formattedDate:"January 17, 2019",tags:[{label:"Release_Notes",permalink:"/en/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/en/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/en/third-blog/tags/version"}],readingTime:1.21,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.4.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.5.0",permalink:"/en/third-blog/2019/03/29/4.5.0"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.3.2",permalink:"/en/third-blog/2018/11/02/4.3.2"}},l={authorsImageUrls:[]},c=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Download the 4.4.0 release",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.4.0/rocketmq-all-4.4.0-source-release.zip"},"rocketmq-all-4.4.0-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.4.0/rocketmq-all-4.4.0-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.4.0/rocketmq-all-4.4.0-source-release.zip.md5"},"MD5"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.4.0/rocketmq-all-4.4.0-source-release.zip.sha1"},"SHA1"),"]"),(0,o.kt)("li",{parentName:"ul"},"Binary: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.4.0/rocketmq-all-4.4.0-bin-release.zip"},"rocketmq-all-4.4.0-bin-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.4.0/rocketmq-all-4.4.0-bin-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.4.0/rocketmq-all-4.4.0-bin-release.zip.md5"},"MD5"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.4.0/rocketmq-all-4.4.0-bin-release.zip.sha1"},"SHA1"),"]"))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the 4.4.0 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{href:"/docs/\u4ecb\u7ecd/02quickstart/"},"Quick Start"),"."),(0,o.kt)("h2",{id:"new-feature"},"New Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/403"},"ISSUE-403"),"] -  Support the ACL standard for RocketMQ."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/502"},"ISSUE-502"),"] -  Support SQL92 filter in pull consumer."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/525"},"ISSUE-525"),"] -  Support message trace.")),(0,o.kt)("h2",{id:"improvement"},"Improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/511"},"ISSUE-511"),"] -  Polish comment for CountDownLatch."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/536"},"ISSUE-536"),"] -  Update fastjson version to 1.2.51."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/571"},"ISSUE-571"),"] -  Polish a default value for DB message."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/581"},"ISSUE-581"),"] -  Polish Copyright in NOTICE file."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/582"},"ISSUE-582"),"] -  Update asynchronous send thread pool from callback executor to an exclusive one."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/586"},"ISSUE-586"),"] -  Format output number in admin tools."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/640"},"ISSUE-640"),"] -  Polish config file for travis-ci."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/693"},"ISSUE-693"),"] -  Add instance name to enable to send trace message to different clusters.")),(0,o.kt)("h2",{id:"bug"},"Bug"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/512"},"ISSUE-512"),"] -  Fixed the issue that RocketMQ can not print config items with -p option."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/544"},"ISSUE-544"),"] -  Fixed transactional message will be lost under extreme condition."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/556"},"ISSUE-556"),"] -  Fixed the issue that epoll native selector start error in broker."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/604"},"ISSUE-604"),"] -  Fixed the issue that semaphore was not released when asyn invoke timeout.")))}u.isMDXComponent=!0}}]);