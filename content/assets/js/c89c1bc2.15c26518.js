"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9460],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92310:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const i={},a="RocketMQ MQTT QuickStart",c={unversionedId:"mqtt/02RocketMQMQTTQuickStart",id:"version-5.0/mqtt/02RocketMQMQTTQuickStart",title:"RocketMQ MQTT QuickStart",description:"System Requirements",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/08-mqtt/02RocketMQMQTTQuickStart.md",sourceDirName:"08-mqtt",slug:"/mqtt/02RocketMQMQTTQuickStart",permalink:"/docs/mqtt/02RocketMQMQTTQuickStart",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/08-mqtt/02RocketMQMQTTQuickStart.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ MQTT Overview",permalink:"/docs/mqtt/01RocketMQMQTTOverview"},next:{title:"RocketMQ Connect Overview",permalink:"/docs/connect/01RocketMQ Connect Overview"}},s={},l=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Deployment Instructions",id:"deployment-instructions",level:2},{value:"Example Description",id:"example-description",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"rocketmq-mqtt-quickstart"},"RocketMQ MQTT QuickStart"),(0,o.yg)("h2",{id:"system-requirements"},"System Requirements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"64-bit operating system, Linux/Unix/macOS recommended"),(0,o.yg)("li",{parentName:"ul"},"64-bit JDK 1.8+")),(0,o.yg)("h2",{id:"deployment-instructions"},"Deployment Instructions"),(0,o.yg)("p",null,"Since the RocketMQ-MQTT project relies on the underlying multi-queue distribution of RocketMQ, RocketMQ supports this feature from version 4.9.3, so you need to confirm that the version of RocketMQ is upgraded to 4.9.3 or later, and ensure that the following configuration items are enabled:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"enableLmq = true \nenableMultiDispatch = true\n")),(0,o.yg)("p",null,"For the deployment of RocketMQ-MQTT, refer to the project description, download the project release version or build it directly from the source code."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/apache/rocketmq-mqtt\ncd rocketmq-mqtt \nmvn -Prelease-all -DskipTests clean install -U \ncd distribution/target/ \n")),(0,o.yg)("p",null,"After the source code is built, edit conf/service.conf to complete the MQTT related configuration, as follows"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"username=xxx    // Authorization verification account configuration\nsecretKey=xxx    // Authorization verification account configuration\nNAMESRV_ADDR=xxx  //namesrv access point\neventNotifyRetryTopic=xx   //notify retry topic, created in advance\nclientRetryTopic=xx  //Client message retry topic, created in advance\n")),(0,o.yg)("p",null,"Other launch configuration and pre-step reference projects ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-mqtt/blob/main/README.md"},"README.md")),(0,o.yg)("p",null,"Finally start the meta service and then the mqtt broker. Go to the distribution/target/bin directory and start the process."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"sh meta.sh start\nsh mqtt.sh start\n")),(0,o.yg)("h2",{id:"example-description"},"Example Description"),(0,o.yg)("p",null,"The basic code is provided in the project engineering code, see the code ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-mqtt/tree/main/mqtt-example"},"example")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"MqttConsumer.java  // MQTT client initiates subscription message\nMqttProducer.java   // MQTT client starts publishing messages\nRocketMQConsumer.java // RocketMQ client starts subscription message\nRocketMQProducer.java  // RocketMQ client starts publishing messages\n")))}m.isMDXComponent=!0}}]);