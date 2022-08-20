"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>p});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var n=a.createContext({}),c=function(e){var t=a.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return a.createElement(n.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,n=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=s,k=m["".concat(n,".").concat(p)]||m[p]||u[p]||o;return r?a.createElement(k,i(i({ref:t},h),{},{components:r})):a.createElement(k,i({ref:t},h))}));function p(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var n in t)hasOwnProperty.call(t,n)&&(l[n]=t[n]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),s=(r(7294),r(3905));const o={title:"Release Notes - Apache RocketMQ - Version 4.7.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},i=void 0,l={permalink:"/third-blog/2020/06/29/4.7.1",source:"@site/third-blog/2020-06-29-4.7.1.md",title:"Release Notes - Apache RocketMQ - Version 4.7.1",description:"* Source: rocketmq-all-4.7.1-source-release.zip [PGP] [SHA512]",date:"2020-06-29T00:00:00.000Z",formattedDate:"2020\u5e746\u670829\u65e5",tags:[{label:"Release_Notes",permalink:"/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/third-blog/tags/version"}],readingTime:2.865,truncated:!0,authors:[],prevItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.1.1",permalink:"/third-blog/2020/07/20/release-notes-rocketmq-spring-2.1.1"},nextItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",permalink:"/third-blog/2020/04/02/release-notes-rocketmq-client-cpp-2.2.0"}},n={authorsImageUrls:[]},c=[{value:"Improvement",id:"improvement",children:[]},{value:"Bug",id:"bug",children:[]},{value:"Test",id:"test",children:[]},{value:"Document and code style improvement",id:"document-and-code-style-improvement",children:[]}],h={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Download the 4.7.1 release")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"Source: ",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-source-release.zip"},"rocketmq-all-4.7.1-source-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-source-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-source-release.zip.sha512"},"SHA512"),"]"),(0,s.kt)("li",{parentName:"ul"},"Binary: ",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip"},"rocketmq-all-4.7.1-bin-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip.sha512"},"SHA512"),"]")))),(0,s.kt)("p",null,"Below is a summary of the issues addressed in the 4.7.1 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,s.kt)("a",{href:"/docs/\u4ecb\u7ecd/02quickstart/"},"Quick Start"),"."),(0,s.kt)("h2",{id:"improvement"},"Improvement"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2088"},"ISSUE-2088"),"] -  Optimize RocketMQ client's stats of RT to make sense."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2085"},"ISSUE-2085"),"] -  Support graceful shutdown for push consumer."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2082"},"ISSUE-2082"),"] -  Use StringBuilder instead of StringBuffer."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2065"},"ISSUE-2065"),"] -  Upgrade fastjson version to prevent RCE problem."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2007"},"ISSUE-2007"),"] -  Upgrade fastjson version to prevent serious security problem."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1992"},"ISSUE-1992"),"] -  Optimize the log output in Broker2Client class."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1988"},"ISSUE-1988"),"] -  Update messageDelay property incorrectly with updateBrokerConfig command."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1976"},"ISSUE-1976"),"] -  Improve the security of the system topic operation."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1912"},"ISSUE-1912"),"] -  Polish the consumer offset commit logic for lite pull consumer."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1895"},"ISSUE-1895"),"] -  Expose the flush disk timeout error to user when sending messages."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1689"},"ISSUE-1689"),"] -  Add interfaces to remove unused statsItem in BrokerStatsManager class.")),(0,s.kt)("h2",{id:"bug"},"Bug"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2118"},"ISSUE-2118"),"] -  Fix AdminBrokerProcessorTest can not pass when machine's hostname contains illegal characters."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2078"},"ISSUE-2078"),"] -  HmacSHA1 not available when use openjdk."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1901"},"ISSUE-1901"),"] -  Create reply message fail when using request/reply mode."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1906"},"ISSUE-1906"),"] -  BooleanConstantExpression might lead to class loading deadlock."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2044"},"ISSUE-2044"),"] -  DefaultLitePullConsumerImpl may throw null pointer exception."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2042"},"ISSUE-2042"),"] -  Client still connect to the old name server even it is removed from namesrvAddr list."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2036"},"ISSUE-2036"),"] -  Encode null value caused incorrect encoding result."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1978"},"ISSUE-1978"),"] -  The getBornHostString method may throw null pointer exception."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1950"},"ISSUE-1950"),"] -  Residual threads still exist after producer calls shutdown."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1931"},"ISSUE-1931"),"] -  The doAfterRpcHooks method is called twice in processRequestCommand method."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1879"},"ISSUE-1879"),"] -  GroupTransferService may be blocked by ResponseCallback in SYNC_MASTER mode."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1400"},"ISSUE-1400"),"] -  Disk space detection may be blocked when deleting a lot of files."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/729"},"ISSUE-729"),"] -  The wipeWritePermOfBroker method may throw null pointer exception."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/705"},"ISSUE-705"),"] -  The content of waitingThreadTable is not updated in time."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1807"},"ISSUE-1807"),"] -  Fix statistical error about hashSlotCount in index file.")),(0,s.kt)("h2",{id:"test"},"Test"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1878"},"ISSUE-1878"),"] -  Add unit test about cleaning index file."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1859"},"ISSUE-1859"),"] -  Add codecov report for CI.")),(0,s.kt)("h2",{id:"document-and-code-style-improvement"},"Document and code style improvement"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2054"},"ISSUE-2054"),"] -  Typo fix in RocketMQ_Example.md."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2053"},"ISSUE-2053"),"] -  Add @Override annotation for RMQOrderListener."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2035"},"ISSUE-2035"),"] -  Typo fix in DefaultMQProducerImpl class."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2034"},"ISSUE-2034"),"] -  Polish the java doc for MessageListenerOrderly class."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2020"},"ISSUE-2020"),"] -  Replace notify code blocks with existing method wakeup in ServiceThread."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2025"},"ISSUE-2025"),"] -  Refactor the code in processSendResponse method."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2011"},"ISSUE-2011"),"] -  Add english README.md document."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2006"},"ISSUE-2006"),"] -  Add request-reply document."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2003"},"ISSUE-2003"),"] -  Remove useless code in MQClientInstance."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1971"},"ISSUE-1971"),"] -  Polish the comment in ConsumerFilterManager."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1964"},"ISSUE-1964"),"] -  Fix document error about admin tool."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1883"},"ISSUE-1883"),"] -  Fix document error about wipeWritePermSubCommand."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1866"},"ISSUE-1866"),"] -  Fix document error about transaction message."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1857"},"ISSUE-1857"),"] -  Refactor the code in DefaultMQProducerImpl class."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1741"},"ISSUE-1741"),"] -  Typo fix in ConsumeMessageOrderlyService."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1574"},"ISSUE-1574"),"] -  Typo fix in request code."),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://github.com/apache/rocketmq/issues/1505"},"ISSUE-1505"),"] -  Fix document error about batch sample.")))}u.isMDXComponent=!0}}]);