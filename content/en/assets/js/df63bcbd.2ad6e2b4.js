"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[15],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,m=n(e,["components","mdxType","originalType","parentName"]),u=p(a),s=l,k=u["".concat(c,".").concat(s)]||u[s]||h[s]||i;return a?r.createElement(k,o(o({ref:t},m),{},{components:a})):r.createElement(k,o({ref:t},m))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=u;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:l,o[1]=n;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const i={title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.1",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},o=void 0,n={permalink:"/en/third-blog/2022/07/25/release-notes-rocketmq-client-go-2.1.1",source:"@site/third-blog/2022-07-25-release-notes-rocketmq-client-go-2.1.1.md",title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.1",description:"* Source: rocketmq-client-go-2.1.1-source-release.tar.gz [PGP] [SHA512]",date:"2022-07-25T00:00:00.000Z",formattedDate:"July 25, 2022",tags:[{label:"RocketMQ_Client_Go",permalink:"/en/third-blog/tags/rocket-mq-client-go"}],readingTime:3.8,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client Go- Version 2.1.1",categories:["Release_Notes"],tags:["RocketMQ_Client_Go"]},nextItem:{title:"Release Notes - Apache RocketMQ Streams - Version 1.0.1-preview",permalink:"/en/third-blog/2022/04/18/release-notes-rocketmq-streams-1.0.1-preview"}},c={authorsImageUrls:[]},p=[{value:"What&#39;s Changed",id:"whats-changed",level:2}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Download",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Source: ",(0,l.kt)("a",{parentName:"li",href:"https://www.apache.org/dyn/closer.cgi?path=rocketmq/rocketmq-client-go/2.1.1/rocketmq-client-go-2.1.1-source-release.tar.gz"},"rocketmq-client-go-2.1.1-source-release.tar.gz")," [",(0,l.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.1.1/rocketmq-client-go-2.1.1-source-release.tar.gz.asc"},"PGP"),"] [",(0,l.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/rocketmq-client-go/2.1.1/rocketmq-client-go-2.1.1-source-release.tar.gz.sha512"},"SHA512"),"]"))),(0,l.kt)("p",null,"Below is a summary of the issues addressed in the version 2.1.1 release of RocketMQ Client Go. For full documentation of the release, a guide to get started, please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-go"},"Quick Start"),"."),(0,l.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/645"},"[ISSUE #644]")," Fix the zlibWriterPools doesn't work leads to high memory usage."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/639"},"[ISSUE #640]")," fix PullInterval unit. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/643"},"[ISSUE #643]")," fix crash on selecting queue. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/636"},"[ISSUE #635]")," Improving decoding performance for remoting commands. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/665"},"[ISSUE #662]")," Fix the usage bug of namespace. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/652"},"[ISSUE #651]")," fix an issue where a map read operation was not protected by the lock."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/677"},"[ISSUE #678]")," optimizing goroutine of Stat creation. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/680"},"[ISSUE #680]")," wrap topic with namespace when unsubscribe. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/586"},"[ISSUE #585]")," Fix the wrong StoreHost and GroupName with consume trace message. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/642"},"[ISSUE #614]")," Fix go routine leaks when consumer close with msg channel blocked."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/689"},"[ISSUE #694]")," Fix typos."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/684"},"[ISSUE #683]")," request parameter type error fix. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/641"},"[ISSUE #695]")," Feat: support IPV6. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/632"},"[ISSUE #631]")," Support Consuming from Slave. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/697"},"[ISSUE #688]")," fix: type assert panic. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/691"},"[ISSUE #698]")," fix: call cancel() as soon as possible to release the resources associatd with context."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/700"},"[ISSUE #637]")," Fix filter lookback interface for utils.ClientIP. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/660"},"[ISSUE #659]")," make consumeMessageBatchMaxSize default value consistent with java client. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/702"},"[ISSUE #701]")," Fix  timeout of SendAsync. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/704"},"[ISSUE #704]")," add missing log level fatal. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/682"},"[ISSUE #681]")," feat(internal): support reset consumer offset. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/709"},"[ISSUE #710]")," Fix send duplicate message in trace interceptor. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/706"},"[ISSUE #595]")," Update go.mod. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/714"},"[ISSUE #699]")," Fix the bug caused by master broker node is down. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/712"},"[ISSUE #712]")," fix push_consumer#unsubscribe unsubscribe retry. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/717"},"[ISSUE #716]")," Fix the bug caused in HA cluster in pull_consumer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/720"},"[ISSUE #720]")," set subversion when buildSubscriptionData. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/723"},"[ISSUE #722]")," fix the bug caused by failover in consumer. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/708"},"[ISSUE #735]")," centralized management errors. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/732"},"[ISSUE #731]")," Optimize the update offset logic.                                           "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/693"},"[ISSUE #650]")," fix: correctly mark messages to be reconsumed.                                 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/743"},"[ISSUE #744]")," check multiple topics in one batch.                                     "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/753"},"[ISSUE #752]")," change argument to pointer-like to avoid allocations.                     "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/758"},"[ISSUE #757]")," Fix GetHeader type conflict.                                                "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/756"},"[ISSUE #726]")," feat: replace fmt to rlog.                                                  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/765"},"[ISSUE #759]")," Change ResetOffsetBody response parse method to support fastjson schema.    "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/775"},"[ISSUE #775]")," update gjson for security problem.                                           "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/779"},"[ISSUE #778]")," Build instance name with nanosecond.                                          "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/788"},"[ISSUE #788]")," Refactor the client instance struct\uff0cconverge the namesrv module.          "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/805"},"[ISSUE #806]")," Fix the feature that GetNamesrv.                              "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/808"},"[ISSUE #807]")," fix code style.                                              "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/816"},"[ISSUE #816]")," fix long time block when remote endpoint crash.                "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/679"},"[ISSUE #818]")," fix msg.Body compressed cause error in transaction message processing. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/824"},"[ISSUE #824]")," fix queueMaxSpanFlowControlTimes not change.             "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/829"},"[ISSUE #828]")," Support rlog rotate.                                     "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/826"},"[ISSUE #827]")," Support get consumerRunningInfo return goroutine stack. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/825"},"[ISSUE #825]")," fix some params for consumer can not be changed.         "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/809"},"[ISSUE #810]")," fix async producer example."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/803"},"[ISSUE #803]")," Feat/rpc request.                                      "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/833"},"[ISSUE #832]")," Client may submit wrong offset when network instability.          "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/841"},"[ISSUE #823]")," fix: panic problem caused by json-iterator in go1.18.                   "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/773"},"[ISSUE #773]")," fix(sendOneWay): fix stack overflow caused by recursive calls.         "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/852"},"[ISSUE #852]")," bugfix rebalance is not paused after suspend and rebalance not trigge. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/858"},"[ISSUE #858]")," feat: exchange messages_utils dir.                                    "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/857"},"[ISSUE #857]")," selectMessageQueue nil *internal.TopicPublishInfo.                      "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/856"},"[ISSUE #774]")," Avoid cancel context too early cause trace data fail.                 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/629"},"[ISSUE #628]")," takeMessages sleep max 5s.                                             "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/820"},"[ISSUE #819]")," Fix sis.samplingInSeconds and sis.printAtMinutes() running in different goroutines cause DATA RACE. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/783"},"[ISSUE #783]")," Maybe can remove some useless code in encodeBatch(). "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/837"},"[ISSUE #847]")," fix primitive.WithMethod ctx transfer. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/834"},"[ISSUE #840]")," consumer consume include tag according to accumulation. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/812"},"[ISSUE #813]")," Fix bug when get ",(0,l.kt)("inlineCode",{parentName:"li"},"mqadmin consumerStatus")," can't get consume status. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/851"},"[ISSUE #851]")," compare slice length directly.                        "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/814"},"[ISSUE #814]")," fix pullThresholdSizeForTopic invalid.                  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/849"},"[ISSUE #849]")," add some methods for pushConsumer.               "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/844"},"[ISSUE #843]")," fix request offset will not be changed in some case. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/854"},"[ISSUE #854]")," a little improvement use chan instead.                "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/860"},"[ISSUE #797]")," Fix msg lost if consumer crash when send msg back failed. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/859"},"[ISSUE #754]")," close msgCh when pq dropped."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/865"},"[ISSUE #780]")," avoid sendmessage back with origin message body in request.              "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/729"},"[ISSUE #728]")," client shutdown abnormally.                                             "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/868"},"[ISSUE #864]")," update rlog to 1.9.0 to fix CVE-2022-29526 in golang.org/x/sys.      "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/867"},"[ISSUE #869]")," Fix: Consumer api comments.                                     "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/866"},"[ISSUE #790]")," use uber atomic lib to avoid atomic value data race. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/871"},"[ISSUE #870]")," add license header for some new files. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-client-go/pull/873"},"[ISSUE #872]")," fix code coverage shell error in travis ci yml.")))}h.isMDXComponent=!0}}]);