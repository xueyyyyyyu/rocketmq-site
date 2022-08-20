"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>k});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var n=a.createContext({}),c=function(e){var t=a.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return a.createElement(n.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,n=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(r),k=s,f=u["".concat(n,".").concat(k)]||u[k]||p[k]||o;return r?a.createElement(f,i(i({ref:t},h),{},{components:r})):a.createElement(f,i({ref:t},h))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var n in t)hasOwnProperty.call(t,n)&&(l[n]=t[n]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),s=(r(67294),r(3905));const o={title:"Release Notes - Apache RocketMQ - Version 4.2.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},i=void 0,l={permalink:"/third-blog/2017/12/13/4.2.0",source:"@site/third-blog/2017-12-13-4.2.0.md",title:"Release Notes - Apache RocketMQ - Version 4.2.0",description:"* Source: rocketmq-all-4.2.0-source-release.zip [PGP] [MD5] [SHA1]",date:"2017-12-13T00:00:00.000Z",formattedDate:"2017\u5e7412\u670813\u65e5",tags:[{label:"Release_Notes",permalink:"/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/third-blog/tags/version"}],readingTime:2.57,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.2.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.3.0",permalink:"/third-blog/2018/07/24/4.3.0"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.1.0-incubating",permalink:"/third-blog/2017/06/02/4.1.0"}},n={authorsImageUrls:[]},c=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],h={toc:c};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Download the 4.2.0 release",type:"tip"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Source: ",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.2.0/rocketmq-all-4.2.0-source-release.zip"},"rocketmq-all-4.2.0-source-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.2.0/rocketmq-all-4.2.0-source-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.2.0/rocketmq-all-4.2.0-source-release.zip.md5"},"MD5"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.2.0/rocketmq-all-4.2.0-source-release.zip.sha1"},"SHA1"),"]"),(0,s.kt)("li",{parentName:"ul"},"Binary: ",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.2.0/rocketmq-all-4.2.0-bin-release.zip"},"rocketmq-all-4.2.0-bin-release.zip")," [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.2.0/rocketmq-all-4.2.0-bin-release.zip.asc"},"PGP"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.2.0/rocketmq-all-4.2.0-bin-release.zip.md5"},"MD5"),"] [",(0,s.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.2.0/rocketmq-all-4.2.0-bin-release.zip.sha1"},"SHA1"),"]"))),(0,s.kt)("p",null,"Below is a summary of the JIRA issues addressed in the 4.2.0 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,s.kt)("a",{href:"/docs/\u4ecb\u7ecd/02quickstart/"},"Quick Start"),"."),(0,s.kt)("h2",{id:"new-feature"},"New Feature"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-28"},"ROCKETMQ-28"),"] -         Support transportation layer security"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-224"},"ROCKETMQ-224"),"] -       Suppport log4j2 in Client"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-294"},"ROCKETMQ-294"),"] -       Support flow control by number and size dimensions for PushConsumer")),(0,s.kt)("h2",{id:"improvement"},"Improvement"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-6"},"ROCKETMQ-6"),"] -         Use logger for exceptions instead of e.printStackTrace()"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-23"},"ROCKETMQ-23"),"] -     Better to return true when MappedFileQueue#flush is successful"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-96"},"ROCKETMQ-96"),"] -     Rename tmp variable"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-258"},"ROCKETMQ-258"),"] -   Move benchmark scripts to distribution module"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-259"},"ROCKETMQ-259"),"] -   Reduce reflection calls when decode remoting command header"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-263"},"ROCKETMQ-263"),"] -   Reduce the cost of the unit test in OpenMessaging modules"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-266"},"ROCKETMQ-266"),"] -   Polish the exception message when  consumerThreadMax is smaller than consumerThreadMin"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-273"},"ROCKETMQ-273"),"] -   Simplify the code when the method has no write operation"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-279"},"ROCKETMQ-279"),"] -   Add consistent check for commit log data and consume queue data when start the broker"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-281"},"ROCKETMQ-281"),"] -       Add check to prevent repeating starting broker"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-307"},"ROCKETMQ-307"),"] -   Change JVM arguments for java 8 and direct memory GC"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-308"},"ROCKETMQ-308"),"] -   Improve broker register speed by increasing socket buffer size of name server"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-311"},"ROCKETMQ-311"),"] -   Add fast failure mechanism for pull-request queue of broker"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-312"},"ROCKETMQ-312"),"] -   Use independent thread pool for QueryMessageProcessor"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-315"},"ROCKETMQ-315"),"] -   Enhance default settings of TLS"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-323"},"ROCKETMQ-323"),"] -   Release semaphore after callback is finished in async process"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-324"},"ROCKETMQ-324"),"] -   Expose an interface for client to specify the async call back executor"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-327"},"ROCKETMQ-327"),"] -   Add an interface to support decrypt a encrypted private key file")),(0,s.kt)("h2",{id:"bug"},"Bug"),(0,s.kt)("ul",null,(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-231"},"ROCKETMQ-231"),"] -   Fix the pull result size"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-234"},"ROCKETMQ-234"),"] -   Fix double-return bug in batch scenario"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-238"},"ROCKETMQ-238"),"] -    Make sure catch the exception in a periodic task of ScheduledExecutorService"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-242"},"ROCKETMQ-242"),"] -   Make sure the client could fetch nameSrvAddr periodly"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-254"},"ROCKETMQ-254"),"] -   Fix the random test failure of LoggerAppender and reduce the cost time"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-260"},"ROCKETMQ-260"),"] -   Fix the wrong lock when destroy IndexService"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-270"},"ROCKETMQ-270"),"] -   Make sure the slave broker could start normally if master broker has cleaned commit log"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-277"},"ROCKETMQ-277"),"] -   Fix the exception in getLocalHost when server hostname not in hosts"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-284"},"ROCKETMQ-284"),"] -   Make sure the sql filter is not conflict with old tag filter"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-285"},"ROCKETMQ-285"),"] -   Fix the file test error when make link"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-291"},"ROCKETMQ-291"),"] -   Fix the UnknownFormatConversionException of System.out.printf"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-292"},"ROCKETMQ-292"),"] -   Fix exit problem in main thread when args parsing problem occurs"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-320"},"ROCKETMQ-320"),"] -   Make sure no message loss when shutdown with dispatch behind"),(0,s.kt)("li",null,"[",(0,s.kt)("a",{href:"https://issues.apache.org/jira/browse/ROCKETMQ-321"},"ROCKETMQ-321"),"] -   Make sure do not delete mapped files in the middle")))}p.isMDXComponent=!0}}]);