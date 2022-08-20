"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,k=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return r?o.createElement(k,s(s({ref:t},u),{},{components:r})):o.createElement(k,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:a,s[1]=n;for(var c=2;c<i;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},67548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const i={title:"Release Notes - Apache RocketMQ - Version 4.6.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},s=void 0,n={permalink:"/en/third-blog/2019/11/25/4.6.0",source:"@site/third-blog/2019-11-25-4.6.0.md",title:"Release Notes - Apache RocketMQ - Version 4.6.0",description:"* Source: rocketmq-all-4.6.0-source-release.zip [PGP] [SHA512]",date:"2019-11-25T00:00:00.000Z",formattedDate:"November 25, 2019",tags:[{label:"Release_Notes",permalink:"/en/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/en/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/en/third-blog/tags/version"}],readingTime:1.735,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.6.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.1.0",permalink:"/en/third-blog/2020/02/10/release-notes-rocketmq-spring-2.1.0"},nextItem:{title:"Release Notes - Apache RocketMQ Client Go- Version 1.2.4",permalink:"/en/third-blog/2019/11/20/release-notes-rocketmq-client-go-1.2.4"}},l={authorsImageUrls:[]},c=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2},{value:"Document  and code style improvement",id:"document--and-code-style-improvement",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Download the 4.6.0 release",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Source: ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-source-release.zip"},"rocketmq-all-4.6.0-source-release.zip")," [",(0,a.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-source-release.zip.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-source-release.zip.sha512"},"SHA512"),"]"),(0,a.kt)("li",{parentName:"ul"},"Binary: ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-bin-release.zip"},"rocketmq-all-4.6.0-bin-release.zip")," [",(0,a.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-bin-release.zip.asc"},"PGP"),"] [",(0,a.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-bin-release.zip.sha512"},"SHA512"),"]"))),(0,a.kt)("p",null,"Below is a summary of the issues addressed in the 4.6.0 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,a.kt)("a",{href:"/docs/\u4ecb\u7ecd/02quickstart/"},"Quick Start"),"."),(0,a.kt)("h2",{id:"new-feature"},"New Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1388"},"ISSUE-1388"),"] -  Add lite pull consumer support for RocketMQ."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1413"},"RIP-15"),"] -  Add IPv6 support for RocketMQ."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/pull/1422"},"RIP-16"),"] -  Add Request-Reply support for RocketMQ.")),(0,a.kt)("h2",{id:"improvement"},"Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/504"},"ISSUE-504"),"] -  Polish 'No route info of this topic' exception."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1483"},"ISSUE-1483"),"] -  Make QueryMsgByIdSubCommand print offsetID only once."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1435"},"ISSUE-1435"),"] -  Fix discarded mqadmin subcommand document description."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1528"},"ISSUE-1528"),"] -  Mocking related functions to make producer get right topicrouteinfo and invoke callback functions."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1519"},"ISSUE-1519"),"] -  Optimise performance/stability of transaction message."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1531"},"ISSUE-1531"),"] -  Upgrade fastjson version."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+RIP-10"},"RIP-10"),"] -  Add test cases for ConsumeMessageOrderlyService#consumeMessageDirectly.")),(0,a.kt)("h2",{id:"bug"},"Bug"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1082"},"ISSUE-1082"),"] -  Fix disconnection of HA."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1456"},"ISSUE-1456"),"] -  Fix replica abnormal recover slow issue."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1108"},"ISSUE-1108"),"] -  Fix concurrent problems with client-side connection creation."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1464"},"ISSUE-1464"),"] -  Fix the issue that master node route info was lost when the node joined the group in dledger mode."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1470"},"ISSUE-1470"),"] -  Fix the issue that lite pull consumer lost messages."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1491"},"ISSUE-1491"),"] -  Ignore IllegalStateException when remove shutdown hook."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1535"},"ISSUE-1535"),"] -  Fix ha sync transfer timeout."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1528"},"ISSUE-1528"),"] -  Fix the unit tests of DefaultMQProducer."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1568"},"ISSUE-1568"),"] -  Resolve repeat compress issue of transaction message."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1564"},"ISSUE-1564"),"] -  Fix the IP filter logic in ipv6/ipv4 coexist environment .")),(0,a.kt)("h2",{id:"document--and-code-style-improvement"},"Document  and code style improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1420"},"ISSUE-1420"),"] -  Polish code style."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1556"},"ISSUE-1556"),"] -  Fix cacography in guide doc."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1438"},"ISSUE-1438"),"] -  Polish definite article and indefinite article usage."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1439"},"ISSUE-1439"),"] -  Fix transaction typo in doc."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1526"},"ISSUE-1526"),"] -  Modify docs-cn description error."),(0,a.kt)("li",null,"[",(0,a.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1503"},"ISSUE-1503"),"] -  Fix some typo in docs/cn/design.md.")))}p.isMDXComponent=!0}}]);