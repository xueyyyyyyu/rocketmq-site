"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={},i="\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001",o={unversionedId:"\u751f\u4ea7\u8005/07message3",id:"\u751f\u4ea7\u8005/07message3",title:"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001",description:"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001\u662f\u6307\u6d88\u606f\u53d1\u9001\u5230Apache RocketMQ\u540e\uff0c\u5e76\u4e0d\u671f\u671b\u7acb\u9a6c\u6295\u9012\u8fd9\u6761\u6d88\u606f\uff0c\u800c\u662f\u5ef6\u8fdf\u4e00\u5b9a\u65f6\u95f4\u540e\u624d\u6295\u9012\u5230Consumer\u8fdb\u884c\u6d88\u8d39\u3002",source:"@site/docs/02-\u751f\u4ea7\u8005/07message3.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/07message3",permalink:"/docs/\u751f\u4ea7\u8005/07message3",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/02-\u751f\u4ea7\u8005/07message3.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u987a\u5e8f\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/06message2"},next:{title:"\u6279\u91cf\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/08message4"}},p={},m=[],s={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001"},"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001"),(0,a.kt)("p",null,"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001\u662f\u6307\u6d88\u606f\u53d1\u9001\u5230Apache RocketMQ\u540e\uff0c\u5e76\u4e0d\u671f\u671b\u7acb\u9a6c\u6295\u9012\u8fd9\u6761\u6d88\u606f\uff0c\u800c\u662f\u5ef6\u8fdf\u4e00\u5b9a\u65f6\u95f4\u540e\u624d\u6295\u9012\u5230Consumer\u8fdb\u884c\u6d88\u8d39\u3002"),(0,a.kt)("p",null,"Apache RocketMQ \u4e00\u5171\u652f\u630118\u4e2a\u7b49\u7ea7\u7684\u5ef6\u8fdf\u6295\u9012\uff0c\u5177\u4f53\u65f6\u95f4\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6295\u9012\u7b49\u7ea7\uff08delay level\uff09"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5ef6\u8fdf\u65f6\u95f4"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6295\u9012\u7b49\u7ea7\uff08delay level\uff09"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5ef6\u8fdf\u65f6\u95f4"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1s"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"6min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"5s"),(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"7min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"10s"),(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"8min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"30s"),(0,a.kt)("td",{parentName:"tr",align:null},"13"),(0,a.kt)("td",{parentName:"tr",align:null},"9min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"1min"),(0,a.kt)("td",{parentName:"tr",align:null},"14"),(0,a.kt)("td",{parentName:"tr",align:null},"10min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"2min"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"20min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"3min"),(0,a.kt)("td",{parentName:"tr",align:null},"16"),(0,a.kt)("td",{parentName:"tr",align:null},"30min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"4min"),(0,a.kt)("td",{parentName:"tr",align:null},"17"),(0,a.kt)("td",{parentName:"tr",align:null},"1h")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"5min"),(0,a.kt)("td",{parentName:"tr",align:null},"18"),(0,a.kt)("td",{parentName:"tr",align:null},"2h")))),(0,a.kt)("p",null,"\u5ef6\u8fdf\u6d88\u606f\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{10,11}","{10,11}":!0},'public class ScheduledMessageProducer {\n    public static void main(String[] args) throws Exception {\n        // Instantiate a producer to send scheduled messages\n        DefaultMQProducer producer = new DefaultMQProducer("ExampleProducerGroup");\n        // Launch producer\n        producer.start();\n        int totalMessagesToSend = 100;\n        for (int i = 0; i < totalMessagesToSend; i++) {\n            Message message = new Message("TestTopic", ("Hello scheduled message " + i).getBytes());\n            // This message will be delivered to consumer 10 seconds later.\n            message.setDelayTimeLevel(3);\n            // Send the message\n            producer.send(message);\n        }\n        \n        // Shutdown producer after use.\n        producer.shutdown();\n    }\n    \n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u6700\u91cd\u8981\u7684\u662fmessage\u4e2d\u8bbe\u7f6e\u5ef6\u8fdf\u7b49\u7ea7\uff0c\u4f8b\u5b50\u4e2d\u8bbe\u7f6e\u7684\u7b49\u7ea7\u662f3\uff0c\u4e5f\u5c31\u662f\u53d1\u9001\u8005\u53d1\u9001\u540e\uff0c10s\u540e\u6d88\u8d39\u8005\u624d\u80fd\u6536\u5230\u6d88\u606f\u3002")))}u.isMDXComponent=!0}}]);