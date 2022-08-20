"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3240],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?s.createElement(h,o(o({ref:n},d),{},{components:t})):s.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var s=t(67294),a=t(86010);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var s=t(87462),a=t(67294),r=t(86010),o=t(72389),i=t(67392),l=t(7094),c=t(12466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var n,t;const{lazy:o,block:p,defaultValue:m,values:h,groupId:g,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:y.map((e=>{let{props:{value:n,label:t,attributes:s}}=e;return{value:n,label:t,attributes:s}})),v=(0,i.l)(b,((e,n)=>e.value===n.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(n=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,l.U)(),[S,N]=(0,a.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=g){const e=w[g];null!=e&&e!==S&&b.some((n=>n.value===e))&&N(e)}const O=e=>{const n=e.currentTarget,t=C.indexOf(n),s=b[t].value;s!==S&&(E(n),N(s),null!=g&&T(g,String(s)))},A=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var s;const n=C.indexOf(e.currentTarget)+1;t=null!=(s=C[n])?s:C[0];break}case"ArrowLeft":{var a;const n=C.indexOf(e.currentTarget)-1;t=null!=(a=C[n])?a:C[C.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},f)},b.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:e=>C.push(e),onKeyDown:A,onFocus:O,onClick:O},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(y.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==S})))))}function m(e){const n=(0,o.Z)();return a.createElement(p,(0,s.Z)({key:String(n)},e))}},40355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=t(87462),a=(t(67294),t(3905)),r=t(65488),o=t(85162);const i={},l="Simple Message Sending",c={unversionedId:"\u751f\u4ea7\u8005/05message1",id:"\u751f\u4ea7\u8005/05message1",title:"Simple Message Sending",description:"1.Creating Topic in Cluster",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-\u751f\u4ea7\u8005/05message1.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/05message1",permalink:"/en/docs/\u751f\u4ea7\u8005/05message1",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/02-\u751f\u4ea7\u8005/05message1.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Core Concept",permalink:"/en/docs/\u751f\u4ea7\u8005/04concept1"},next:{title:"Ordered Message Sending",permalink:"/en/docs/\u751f\u4ea7\u8005/06message2"}},d={},u=[{value:"1.Creating Topic in Cluster",id:"1creating-topic-in-cluster",level:2},{value:"2.Adding Client-Side Dependency",id:"2adding-client-side-dependency",level:2},{value:"3.Message Sending",id:"3message-sending",level:2},{value:"3.1 Synchronous Sending",id:"31-synchronous-sending",level:3},{value:"3.2 Asynchronous Sending",id:"32-asynchronous-sending",level:3},{value:"3.3 One-Way Sending",id:"33-one-way-sending",level:3}],p={toc:u};function m(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-message-sending"},"Simple Message Sending"),(0,a.kt)("h2",{id:"1creating-topic-in-cluster"},"1.Creating Topic in Cluster"),(0,a.kt)("p",null,"RocketMQ cluster is enabled by default with ",(0,a.kt)("strong",{parentName:"p"},"autoCreateTopicEnable")," configuration, which will automatically create Topics for the sent messages. If autoCreateTopicEnable is not enabled, you can also use the RocketMQ Admin tool to create the target Topic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> sh bin/mqadmin updateTopic -c DefaultCluster -t TopicTest -n 127.0.0.1:9876\ncreate topic to 127.0.0.1:10911 success.\nTopicConfig [topicName=TopicTest, readQueueNums=8, writeQueueNums=8, perm=RW-, topicFilterType=SINGLE_TAG, topicSysFlag=0, order=false, attributes=null]\n")),(0,a.kt)("p",null,"After executing the command above, 8 queues are created on the Broker machine with the Topic named TopicTest."),(0,a.kt)("h2",{id:"2adding-client-side-dependency"},"2.Adding Client-Side Dependency"),(0,a.kt)("p",null,"Firstly, add RocketMQ client-side dependency to JAVA application."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Maven",label:"Maven",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"<dependency>\n  <groupId>org.apache.rocketmq</groupId>\n  <artifactId>rocketmq-client</artifactId>\n  <version>4.9.4</version>\n</dependency>\n"))),(0,a.kt)(o.Z,{value:"Gradle",label:"Gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"compile 'org.apache.rocketmq:rocketmq-client:4.9.4'\n")))),(0,a.kt)("h2",{id:"3message-sending"},"3.Message Sending"),(0,a.kt)("p",null,"Apache RocketMQ sends messages in three ways: ",(0,a.kt)("strong",{parentName:"p"},"synchronous, asynchronous, and one-way"),". The first two message types are reliable since the response will be returned from the server regardless of whether their messages are successfully sent or not."),(0,a.kt)("h3",{id:"31-synchronous-sending"},"3.1 Synchronous Sending"),(0,a.kt)("p",null,"Synchronous Sending is a communication method in which the message sender sends a message and will send the next message only after receiving a synchronous response from the server. Reliable synchronous transmission is widely used in various scenarios, such as important notification messages, short message notifications, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u540c\u6b65\u53d1\u9001",src:t(45659).Z,width:"900",height:"939"})),(0,a.kt)("p",null,"The entire code for synchronous sending is as follows: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create a Producer"),". Create a DefaultMQProducer in advance. The Producer should contain the name of the Producer group, which is a collection of Producer, they would send the same type of messages with identical logic."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Set the address of NameServer"),'. Apache RocketMQ is able to set the address of the NameServer (described in the client configuration) in many ways. The following example is set by calling the producer\'s setNamesrvAddr() method in the code, separated by a semicolon if there is more than one NameServer, such as "127.0.0.2:9876;127.0.0.3:9876".'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Build the message"),". Set the topic, tag, body, and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the Consumer side."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Call the send() method to send the message"),". Ultimately, the send() method will return a SendResult. The SendResut contains the actual send status including SEND_OK (send success), FLUSH_DISK_TIMEOUT (disk flush timeout), FLUSH_SLAVE_TIMEOUT (sync to slave timeout), SLAVE_NOT_AVAILABLE (slave can not be used), and an exception is thrown if it fails.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{16,15}","{16,15}":!0},'public class SyncProducer {\n  public static void main(String[] args) throws Exception {\n    // Initialize a producer and set the Producer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name"); //\uff081\uff09\n    // Set the address of NameServer\n    producer.setNamesrvAddr("localhost:9876");  //\uff082\uff09\n    // Start Producer\n    producer.start();\n    for (int i = 0; i < 100; i++) {\n      // Create a message and set the topic, tag, body and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the consumer side.\n      Message msg = new Message("TopicTest" /* Topic */,\n        "TagA" /* Tag */,\n        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n        );   //\uff083\uff09\n      // Use the producer to send and wait for the result of sending synchronously\n      SendResult sendResult = producer.send(msg);   //\uff084\uff09\n      System.out.printf("%s%n", sendResult);\n    }\n    // Close the producer once it is no longer in use\n    producer.shutdown();\n  }\n}\n')),(0,a.kt)("h3",{id:"32-asynchronous-sending"},"3.2 Asynchronous Sending"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5f02\u6b65\u53d1\u9001",src:t(93143).Z,width:"900",height:"939"})),(0,a.kt)("p",null,"Asynchronous sending is a sending method in which the sender sends messages continuously without waiting for the server to return a response.\nAsynchronous sending requires the implementation of the ",(0,a.kt)("strong",{parentName:"p"},"Asynchronous Send Callback Interface")," (SendCallback)."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Asynchronous sending requires the implementation of the ",(0,a.kt)("strong",{parentName:"p"},"Asynchronous SendCallback Interface"),".")),(0,a.kt)("p",null,"After sending a message, the sender does not need to wait for a response from the server to send the next message. The sender receives the response from the server through the callback interface and handles the result. Asynchronous sending is generally used in time-consuming and response time sensitive business scenarios. For example, the video upload notifies the start of transcoding service, and notifies the push of transcoding result after transcoding is completed."),(0,a.kt)("p",null,"The following is the sample code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{16,17}","{16,17}":!0},'public class AsyncProducer {\n  public static void main(String[] args) throws Exception {\n    // Initialize a producer and set the Producer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    // Set the address of NameServer\n    producer.setNamesrvAddr("localhost:9876");\n    // Start Producer\n    producer.start();\n    producer.setRetryTimesWhenSendAsyncFailed(0);\n    for (int i = 0; i < 100; i++) {\n      final int index = i;\n      // Create a message and set the topic, tag, body and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the consumer side.\n      Message msg = new Message("TopicTest",\n        "TagA",\n        "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));\n      // Send a message asynchronously, the result is returned to the client by callback\n      producer.send(msg, new SendCallback() {\n        @Override\n        public void onSuccess(SendResult sendResult) {\n          System.out.printf("%-10d OK %s %n", index,\n            sendResult.getMsgId());\n        }\n        @Override\n        public void onException(Throwable e) {\n          System.out.printf("%-10d Exception %s %n", index, e);\n          e.printStackTrace();\n        }\n      });\n    }\n    // Close the producer once it is no longer in use\n    producer.shutdown();\n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The only difference between asynchronous and synchronous sending methods is the parameters for calling the sending interface. Asynchronous sending does not wait for the return of send() method, instead, it will carry the SendCallback implementation. The SendCallback interface has two methods (onSuccess and onException), indicating that the message is sent successfully or failed.")),(0,a.kt)("h3",{id:"33-one-way-sending"},"3.3 One-Way Sending"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5355\u9879\u6a21\u5f0f\u53d1\u9001",src:t(99734).Z,width:"900",height:"641"})),(0,a.kt)("p",null,"The sender is only responsible for sending the message and does not wait for the server to return a response and no callback function is triggered, in other words, it only sends the request and does not wait for the answer. The process of sending messages in this way is very short, usually in the microsecond level. It is suitable for some scenarios where the time consumption is very short, but the reliability requirement is not high, such as log collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{16}","{16}":!0},'public class OnewayProducer {\n  public static void main(String[] args) throws Exception{\n    // Initialize a producer and set the Producer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    // Set the address of NameServer\n    producer.setNamesrvAddr("localhost:9876");\n    // Start Producer\n    producer.start();\n    for (int i = 0; i < 100; i++) {\n      // Create a message and set the topic, tag, body and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the consumer side.\n      Message msg = new Message("TopicTest" /* Topic */,\n        "TagA" /* Tag */,\n        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n      );\n      // Since there is no request-answer processing when sending messages in the oneway method, if there is a message sending failure, data will be lost because there is no retry. If data cannot be lost, it is recommended to use the reliable synchronous or reliable asynchronous sending method.\n      producer.sendOneway(msg);\n    }\n     // Close the producer once it is no longer in use\n     producer.shutdown();\n  }\n}\n')),(0,a.kt)("p",null,"One-way mode will call the sendOneway() method, which does not wait or process the returned result."))}m.isMDXComponent=!0},99734:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/Oneway\u53d1\u9001-bc1379bd3b8f382c23ff7abac1e0ed95.png"},45659:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/\u540c\u6b65\u53d1\u9001-6a8c78dae434afe4fbd970a2836f740c.png"},93143:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/\u5f02\u6b65\u53d1\u9001-c05e8e1111d99d8b8b4626e419e9f8e5.png"}}]);