"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,k=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Release Notes - Apache RocketMQ - Version 4.7.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},i=void 0,l={permalink:"/en/third-blog/2020/03/16/4.7.0",source:"@site/third-blog/2020-03-16-4.7.0.md",title:"Release Notes - Apache RocketMQ - Version 4.7.0",description:"* Source: rocketmq-all-4.7.0-source-release.zip [PGP] [SHA512]",date:"2020-03-16T00:00:00.000Z",formattedDate:"March 16, 2020",tags:[{label:"Release_Notes",permalink:"/en/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/en/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/en/third-blog/tags/version"}],readingTime:.895,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.7.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.1.0",permalink:"/en/third-blog/2020/03/23/release-notes-rocketmq-client-cpp-2.1.0"},nextItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.0.0",permalink:"/en/third-blog/2020/02/14/release-notes-rocketmq-client-cpp-2.0.0"}},s={authorsImageUrls:[]},c=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Download the 4.7.0 release",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Source: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.7.0/rocketmq-all-4.7.0-source-release.zip"},"rocketmq-all-4.7.0-source-release.zip")," [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.0/rocketmq-all-4.7.0-source-release.zip.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.0/rocketmq-all-4.7.0-source-release.zip.sha512"},"SHA512"),"]"),(0,n.kt)("li",{parentName:"ul"},"Binary: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.7.0/rocketmq-all-4.7.0-bin-release.zip"},"rocketmq-all-4.7.0-bin-release.zip")," [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.0/rocketmq-all-4.7.0-bin-release.zip.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.0/rocketmq-all-4.7.0-bin-release.zip.sha512"},"SHA512"),"]"))),(0,n.kt)("p",null,"Below is a summary of the issues addressed in the 4.7.0 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,n.kt)("a",{href:"/docs/\u4ecb\u7ecd/02quickstart/"},"Quick Start"),"."),(0,n.kt)("h2",{id:"new-feature"},"New Feature"),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1515"},"ISSUE-1515"),"] -  Synchronous replication change to pipeline manner."),(0,n.kt)("h2",{id:"improvement"},"Improvement"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1809"},"ISSUE-1809"),"] -  Improve exception handle of transaction check service."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1794"},"ISSUE-1794"),"] -  Upgrade fastjson version."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1774"},"ISSUE-1774"),"] -  Prevent the client from committing too frequently."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1771"},"ISSUE-1771"),"] -  Enable MessageExt to get brokername information.")),(0,n.kt)("h2",{id:"bug"},"Bug"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1805"},"ISSUE-1805"),"] -  Cannot find callback in MQPullConsumerScheduleService."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1787"},"ISSUE-1787"),"] -  The queryCq command of mqadmin returned incorrect data."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1751"},"ISSUE-1751"),"] -  Fix bug that MessageClientIDSetter inject wrong pid."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1409"},"ISSUE-1409"),"] -  Fix bug using queryMsgByKey or queryMsgByUniqueKey command when acl is turned on."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1781"},"ISSUE-1781"),"] -  Fix bug with asynchronous retry."),(0,n.kt)("li",null,"[",(0,n.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1821"},"ISSUE-1821"),"] -  Fix bug that MessageClientIDSetter#getIPFromID return wrong pid.")))}u.isMDXComponent=!0}}]);