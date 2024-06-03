"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1638],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(i,".").concat(m)]||u[m]||g[m]||a;return r?o.createElement(h,l(l({ref:t},p),{},{components:r})):o.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(58168),n=(r(96540),r(15680));const a={title:"Release Notes - Apache RocketMQ Client Go- Version 2.0.0",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},l=void 0,c={permalink:"/release-notes/2020/03/31/release-notes-rocketmq-client-go-2.0.0",source:"@site/release-notes/2020-03-31-release-notes-rocketmq-client-go-2.0.0.md",title:"Release Notes - Apache RocketMQ Client Go- Version 2.0.0",description:"* Source: rocketmq-client-go-2.0.0-source-release.tar.gz [PGP] [SHA512]",date:"2020-03-31T00:00:00.000Z",formattedDate:"March 31, 2020",tags:[{label:"RocketMQ_Client_Go",permalink:"/release-notes/tags/rocket-mq-client-go"}],readingTime:.795,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.0.0",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},prevItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",permalink:"/release-notes/2020/04/02/release-notes-rocketmq-client-cpp-2.2.0"},nextItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.1.0",permalink:"/release-notes/2020/03/23/release-notes-rocketmq-client-cpp-2.1.0"}},i={authorsImageUrls:[]},s=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{title:"Download",type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Source: ",(0,n.yg)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-go/2.0.0/rocketmq-client-go-2.0.0-source-release.tar.gz"},"rocketmq-client-go-2.0.0-source-release.tar.gz")," [",(0,n.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.0.0/rocketmq-client-go-2.0.0-source-release.tar.gz.asc"},"PGP"),"] [",(0,n.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.0.0/rocketmq-client-go-2.0.0-source-release.tar.gz.sha512"},"SHA512"),"]"))),(0,n.yg)("p",null,"Below is a summary of the issues addressed in the version 2.0.0 release of RocketMQ Client Go. For full documentation of the release, a guide to get started, please refer to ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-go"},"Quick Start"),"."),(0,n.yg)("h2",{id:"improvement"},"Improvement"),(0,n.yg)("ul",null,(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pulls?q=is%3Apr+is%3Aclosed+milestone%3ANative-0.9.0"},"FEATURE-1"),"] -  Features in 2.0.0-alpha1."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pulls?q=is%3Apr+is%3Aclosed+milestone%3ANative-2.0.0-alpha2"},"FEATURE-2"),"] -  Features in 2.0.0-alpha2."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pulls?q=is%3Apr+is%3Aclosed+milestone%3ANative-2.0.0-alpha3"},"FEATURE-3"),"] -  Features in 2.0.0-alpha3."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pulls?q=is%3Apr+is%3Aclosed+milestone%3A2.0.0-RC1"},"FEATURE-4"),"] -  Features in 2.0.0-rc1."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pulls?q=is%3Apr+is%3Aclosed+milestone%3A2.0.0-RC2"},"FEATURE-5"),"] -  Features in 2.0.0-rc2.")),(0,n.yg)("h2",{id:"bug"},"Bug"),(0,n.yg)("ul",null,(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/438"},"ISSUE-438"),"] -  Add WithNameServerDomain for producer opt."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/437"},"ISSUE-437"),"] -  Fix the issue that can not consume the messages in the retry topic."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/445"},"ISSUE-445"),"] -  UpdateNameServerAddress shoule be called before producer start to avoid to lead to a panic."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/449"},"ISSUE-449"),"] -  Correct msgid using unique id."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/450"},"ISSUE-450"),"] -  Ignore eof error when conn closed."),(0,n.yg)("li",null,"[",(0,n.yg)("a",{href:"https://github.com/apache/rocketmq-client-go/pull/462"},"ISSUE-462"),"] -  Fix the trace message was send failed.")))}g.isMDXComponent=!0}}]);