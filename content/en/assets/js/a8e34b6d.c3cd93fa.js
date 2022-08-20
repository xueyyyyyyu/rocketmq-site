"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>n,kt:()=>p});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=s.createContext({}),h=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},n=function(e){var t=h(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,n=l(e,["components","mdxType","originalType","parentName"]),m=h(a),p=r,k=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return a?s.createElement(k,i(i({ref:t},n),{},{components:a})):s.createElement(k,i({ref:t},n))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var h=2;h<o;h++)i[h]=a[h];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=a(87462),r=(a(67294),a(3905));const o={title:"Release Notes - Apache RocketMQ - Version 4.9.4",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},i=void 0,l={permalink:"/en/third-blog/2022/03/04/4.9.4",source:"@site/third-blog/2022-03-04-4.9.4.md",title:"Release Notes - Apache RocketMQ - Version 4.9.4",description:"- Source: rocketmq-all-4.9.4-source-release.zip [PGP] [SHA512]",date:"2022-03-04T00:00:00.000Z",formattedDate:"March 4, 2022",tags:[{label:"Release_Notes",permalink:"/en/third-blog/tags/release-notes"},{label:"RocketMQ",permalink:"/en/third-blog/tags/rocket-mq"},{label:"Version",permalink:"/en/third-blog/tags/version"}],readingTime:4.46,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.9.4",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.3",permalink:"/en/third-blog/2022/03/04/4.9.3"},nextItem:{title:"Release Notes - Apache RocketMQ Streams - Version 1.0.0-preview",permalink:"/en/third-blog/2022/01/18/release-notes-rocketmq-streams-1.0.0-preview"}},c={authorsImageUrls:[]},h=[{value:"Improvement",id:"improvement",level:2}],n={toc:h};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Download the 4.9.4 release",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Source: ",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/4.9.4/rocketmq-all-4.9.4-source-release.zip"},"rocketmq-all-4.9.4-source-release.zip")," [",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.4/rocketmq-all-4.9.4-source-release.zip.asc"},"PGP"),"] [",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.4/rocketmq-all-4.9.4-source-release.zip.sha512"},"SHA512"),"]"),(0,r.kt)("li",{parentName:"ul"},"Binary: ",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/4.9.4/rocketmq-all-4.9.4-bin-release.zip"},"rocketmq-all-4.9.4-bin-release.zip")," [",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.4/rocketmq-all-4.9.4-bin-release.zip.asc"},"PGP"),"] [",(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.4/rocketmq-all-4.9.4-bin-release.zip.sha512"},"SHA512"),"]"))),(0,r.kt)("p",null,"Below is a summary of the issues addressed in the 4.9.4 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,r.kt)("a",{href:"/docs/\u4ecb\u7ecd/02quickstart/"},"Quick Start"),"."),(0,r.kt)("h2",{id:"improvement"},"Improvement"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4426"},"ISSUE-4426"),"]  - fix ACL issue when sending messages back"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4455"},"ISSUE-4455"),"]  - add a schedule task to update namesrv address"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4349"},"ISSUE-4349"),"]  - fix negative index when index reach Integer.MAX_VALUE"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3906"},"ISSUE-3906"),"]  - Mark stream-related request by RequestType"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4419"},"ISSUE-4419"),"]  - Upgrade maven-checkstyle-plugin to 3.1.2"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4416"},"ISSUE-4416"),"]  - Update dledger version to 0.2.6"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4410"},"ISSUE-4410"),"]  - Optimize method org.apache.rocketmq.common.message.MessageDecoder#messageProperties2String, remove useless check"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4391"},"ISSUE-4391"),"]  - optimize for printObjectProperties"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4067"},"ISSUE-4067"),"]  - fix: Add TLS configuration documents."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4377"},"ISSUE-4377"),"]  - Unnecessary null check before method call"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4372"},"ISSUE-4372"),"]  - Make it compile with Java9+"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4365"},"ISSUE-4365"),"]  - acl PlainPermissionManager key file paths set to same"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4362"},"ISSUE-4362"),"]  - remove redundancy group name check of null in method org.apache.rocketmq.client.impl.producer.DefaultMQProducerImpl#checkConfig"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4323"},"ISSUE-4323"),"]  - Transaction example add the default NamesrvAddr"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4323"},"ISSUE-4323"),"]  - tracemessage example add the default NamesrvAddr"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4323"},"ISSUE-4323"),"]  - Schedule example add the default NamesrvAddr"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4323"},"ISSUE-4323"),"]  - Optimized namespace example code"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4226"},"ISSUE-4226"),"]  - Message length exceeds the maximum length when sendback"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4332"},"ISSUE-4332"),"]  - Remove duplicate code"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4323"},"ISSUE-4323"),"]  - Quickstart adds the default NamesrvAddr"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4320"},"ISSUE-4320"),"]  - Anonymous new PrivilegedAction can be replaced with lambda"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4320"},"ISSUE-4396"),"]  - Support get all producer on one broker"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4318"},"ISSUE-4318"),"]  - make some variables to be final in IndexHeader"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4317"},"ISSUE-4317"),"]  - Fix for statement does not loop"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2435"},"ISSUE-2435"),"]  - Solve the problem that DefaultMQProducer#request() sends messages and waits for timeout synchronously"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3962"},"ISSUE-3962"),"]  - Fix variable name in MappedFile#isAbleToCommit()"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4310"},"ISSUE-4310"),"]  - Optimize serviceProvider's code"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4304"},"ISSUE-4304"),"]  - Fix license check failures"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4286"},"ISSUE-4286"),"]  - add link of rocketmq-site to readme"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4284"},"ISSUE-4284"),"]  - Add protocols to readme and delete the description of language clients"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4270"},"ISSUE-4270"),"]  - Log parameter error and optimize code"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4263"},"ISSUE-4263"),"]  - Delete topic route info based on cluster when delete topic."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4254"},"ISSUE-4254"),"]  - use function computeIfAbsent replace if"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4237"},"ISSUE-4237"),"]  - REMOVE unnecessary final modifier"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4239"},"ISSUE-4239"),"]  - Use function computeIfAbsent replace if"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4216"},"ISSUE-4216"),"]  - fix HmacSHA1 not available when use benchmark"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4203"},"ISSUE-4203"),"]  - Support zstd/lz4 compression to improve send/receive performance"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4211"},"ISSUE-4211"),"]  - Fix diskMaxUsedSpaceRatio does not take effect in dLedger"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4187"},"ISSUE-4187"),"]  - Support async publish in producer benchmark"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4308"},"ISSUE-4308"),"]  - Make some variables to be final in brokerController"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4251"},"ISSUE-4251"),"]  - Add batch flag"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4185"},"ISSUE-4185"),"]  - Explicit type argument can be replaced with "),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4183"},"ISSUE-4183"),"]  - When the reportSlaveMaxOffset method fails, end the current loop early"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4181"},"ISSUE-4181"),"]  - Prevent int overflow in TraceContext"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4099"},"ISSUE-4099"),"]  - Optimized the performance of sending traceMessage in AsyncTraceDispatcher"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4175"},"ISSUE-4175"),"]  - Prevent update topic on slave"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4165"},"ISSUE-4165"),"]  - add new line in sendMsgStatus"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4147"},"ISSUE-4147"),"]  - javadoc: Fix the problem described in the warning message prompted by the IDE."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4145"},"ISSUE-4145"),"]  - docs: Add 'at most once' feature in the feature documents."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4130"},"ISSUE-4130"),"]  - Remove the exception which will never be thrown by method from method signature"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3914"},"ISSUE-3914"),"]  - Support multi dirs storage in DLedger"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4110"},"ISSUE-4110"),"]  - Update dledger version to 0.2.4"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4107"},"ISSUE-4107"),"]  - rocketmq-tools should not depend on rocketmq-store"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4098"},"ISSUE-4098"),"]  - Optimized the algorithm of trace message send."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4058"},"ISSUE-4058"),"]  - DLedgerCommitLog support LMQ"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4048"},"ISSUE-4048"),"]  - Make storePathCommitLog base on storePathRootDir"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4033"},"ISSUE-4033"),"]  - fix async deliver msg will resend forever when serivce not avliable"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4040"},"ISSUE-4040"),"]  - Unnecessary  toString methods deleted"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4037"},"ISSUE-4037"),"]  - Add DeleteExpiredCommitLogSubCommand"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4035"},"ISSUE-4035"),"]  - rename some commands"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4125"},"ISSUE-4125"),"]  - Anonymous new Runnable() can be replaced with lambda"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4028"},"ISSUE-4028"),"]  - wrong log output"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4025"},"ISSUE-4025"),"]  - acl not work after changed"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4151"},"ISSUE-4151"),"]  - Add option p to the updateGlobalWhiteAddr command"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/4000"},"ISSUE-4000"),"]  - Fix the warn log input in command tools"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3985"},"ISSUE-3985"),"]  - Remove shuffle operation before sorting the list of 'FaultItem'."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3964"},"ISSUE-3964"),"]  - Introduce jmh test for RemotingCommand"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3950"},"ISSUE-3950"),"]  - Anonymous new Callable()  replaced with lambda"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3922"},"ISSUE-3922"),"]  - Fix bugs in ACL modification"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3911"},"ISSUE-3911"),"]  - Fix ThreadLocalIndexTest does not actually assert the value"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3900"},"ISSUE-3900"),"]] - Fix that wrong dir is created when using mult-dirs storage"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3898"},"ISSUE-3898"),"]  - fix the spell in MQClientAPIImpl"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3896"},"ISSUE-3896"),"]  - fix log format error"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3890"},"ISSUE-3890"),"]  - add 'brokerAddress' param for ConsumerConnectionSubCommand"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3882"},"ISSUE-3882"),"]  - Nameserver change modify topicQueueTable in RouteInfoManager"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3877"},"ISSUE-3877"),"]  - Remove unnecessary Exception thrown by MQClientAPIImpl#createSubscriptionGroup"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3875"},"ISSUE-3875"),"]  - fix unable to delete last acl account."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/23"},"ISSUE-23")," - solve error Algorithm HmacSHA1 not available when your java_home is not found"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/2993"},"ISSUE-2993"),"]  - fix testTruncateCQ on Windows by releasing mapped files."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3859"},"ISSUE-3859"),"]  - enhance the cal of latency for putting message"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3804"},"ISSUE-3804"),"]  - Commit consumption offset with specific MessageQueue."),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3699"},"ISSUE-3699"),"]  - fix unit test"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3966"},"ISSUE-3966"),"]  - Fix using wrong offset when deliver in ScheduleService"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3942"},"ISSUE-3942"),"]  - If both acl and message trace are enabled and the default topic RMQ_SYS_TRACE_TOPIC is used for message trace, you don't need to add the PUB permission of RMQ_SYS_TRACE_TOPIC topic to the acl config"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3894"},"ISSUE-3894"),"]  - Refactor RouteInfoManager unit test"),(0,r.kt)("li",null,"[",(0,r.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3585"},"ISSUE-3585"),"]  - [Part B] Improve encode/decode performance")))}u.isMDXComponent=!0}}]);