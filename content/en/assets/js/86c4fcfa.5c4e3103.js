"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),c=n(67392),s=n(7094),i=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:g,groupId:v,className:k}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,c.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,s.U)(),[w,S]=(0,a.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=v){const e=T[v];null!=e&&e!==w&&f.some((t=>t.value===e))&&S(e)}const M=e=>{const t=e.currentTarget,n=E.indexOf(t),r=f[n].value;r!==w&&(O(t),S(r),null!=v&&N(v,String(r)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=E.indexOf(e.currentTarget)+1;n=null!=(r=E[t])?r:E[0];break}case"ArrowLeft":{var a;const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:_,onFocus:M,onClick:M},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},96551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),l=n(85162);const c={},s="\u666e\u901a\u6d88\u606f\u53d1\u9001",i={unversionedId:"\u751f\u4ea7\u8005/05message1",id:"version-5.0/\u751f\u4ea7\u8005/05message1",title:"\u666e\u901a\u6d88\u606f\u53d1\u9001",description:"1.\u5411\u96c6\u7fa4\u4e2d\u521b\u5efa Topic",source:"@site/versioned_docs/version-5.0/02-\u751f\u4ea7\u8005/05message1.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/05message1",permalink:"/en/docs/5.0/\u751f\u4ea7\u8005/05message1",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/02-\u751f\u4ea7\u8005/05message1.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/en/docs/5.0/\u751f\u4ea7\u8005/04concept1"},next:{title:"\u987a\u5e8f\u6d88\u606f\u53d1\u9001",permalink:"/en/docs/5.0/\u751f\u4ea7\u8005/06message2"}},u={},p=[{value:"1.\u5411\u96c6\u7fa4\u4e2d\u521b\u5efa Topic",id:"1\u5411\u96c6\u7fa4\u4e2d\u521b\u5efa-topic",level:2},{value:"2.\u6dfb\u52a0\u5ba2\u6237\u7aef\u4f9d\u8d56",id:"2\u6dfb\u52a0\u5ba2\u6237\u7aef\u4f9d\u8d56",level:2},{value:"3.\u6d88\u606f\u53d1\u9001",id:"3\u6d88\u606f\u53d1\u9001",level:2},{value:"3.1 \u540c\u6b65\u53d1\u9001",id:"31-\u540c\u6b65\u53d1\u9001",level:3},{value:"3.2 \u5f02\u6b65\u53d1\u9001",id:"32-\u5f02\u6b65\u53d1\u9001",level:3},{value:"3.3 \u5355\u5411\u6a21\u5f0f\u53d1\u9001",id:"33-\u5355\u5411\u6a21\u5f0f\u53d1\u9001",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u666e\u901a\u6d88\u606f\u53d1\u9001"},"\u666e\u901a\u6d88\u606f\u53d1\u9001"),(0,a.kt)("h2",{id:"1\u5411\u96c6\u7fa4\u4e2d\u521b\u5efa-topic"},"1.\u5411\u96c6\u7fa4\u4e2d\u521b\u5efa Topic"),(0,a.kt)("p",null,"RocketMQ\u96c6\u7fa4\u662f\u9ed8\u8ba4\u5f00\u542f\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"autoCreateTopicEnable")," \u914d\u7f6e\uff0c\u4f1a\u81ea\u52a8\u4e3a\u53d1\u9001\u7684\u6d88\u606f\u521b\u5efa Topic\uff0c\u5982\u679c autoCreateTopicEnable \u6ca1\u6709\u5f00\u542f\uff0c\u4e5f\u53ef\u4ee5\u5229\u7528 RocketMQ Admin \u5de5\u5177\u521b\u5efa\u76ee\u6807 Topic \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> sh bin/mqadmin updateTopic -c DefaultCluster -t TopicTest -n 127.0.0.1:9876\ncreate topic to 127.0.0.1:10911 success.\nTopicConfig [topicName=TopicTest, readQueueNums=8, writeQueueNums=8, perm=RW-, topicFilterType=SINGLE_TAG, topicSysFlag=0, order=false, attributes=null]\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5728\u6267\u884c\u5b8c\u547d\u4ee4\u540e\uff0c\u5728\u8be5\u53f0Broker\u673a\u5668\u4e0a\u521b\u5efa\u4e868\u4e2a\u961f\u5217\uff0c\u540d\u4e3aTopicTest\u7684Topic\u3002"),(0,a.kt)("h2",{id:"2\u6dfb\u52a0\u5ba2\u6237\u7aef\u4f9d\u8d56"},"2.\u6dfb\u52a0\u5ba2\u6237\u7aef\u4f9d\u8d56"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u5728 JAVA \u7a0b\u5e8f\u4e2d\u6dfb\u52a0 RocketMQ \u7684\u5ba2\u6237\u7aef\u4f9d\u8d56\u3002"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Maven",label:"Maven",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"<dependency>\n  <groupId>org.apache.rocketmq</groupId>\n  <artifactId>rocketmq-client</artifactId>\n  <version>4.9.4</version>\n</dependency>\n"))),(0,a.kt)(l.Z,{value:"Gradle",label:"Gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"compile 'org.apache.rocketmq:rocketmq-client:4.9.4'\n")))),(0,a.kt)("h2",{id:"3\u6d88\u606f\u53d1\u9001"},"3.\u6d88\u606f\u53d1\u9001"),(0,a.kt)("p",null,"Apache RocketMQ\u53ef\u7528\u4e8e\u4ee5\u4e09\u79cd\u65b9\u5f0f\u53d1\u9001\u6d88\u606f\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u540c\u6b65\u3001\u5f02\u6b65\u548c\u5355\u5411\u4f20\u8f93"),"\u3002\u524d\u4e24\u79cd\u6d88\u606f\u7c7b\u578b\u662f\u53ef\u9760\u7684\uff0c\u56e0\u4e3a\u65e0\u8bba\u5b83\u4eec\u662f\u5426\u6210\u529f\u53d1\u9001\u90fd\u6709\u54cd\u5e94\u3002"),(0,a.kt)("h3",{id:"31-\u540c\u6b65\u53d1\u9001"},"3.1 \u540c\u6b65\u53d1\u9001"),(0,a.kt)("p",null,"\u540c\u6b65\u53d1\u9001\u662f\u6307\u6d88\u606f\u53d1\u9001\u65b9\u53d1\u51fa\u4e00\u6761\u6d88\u606f\u540e\uff0c\u4f1a\u5728\u6536\u5230\u670d\u52a1\u7aef\u540c\u6b65\u54cd\u5e94\u4e4b\u540e\u624d\u53d1\u4e0b\u4e00\u6761\u6d88\u606f\u7684\u901a\u8baf\u65b9\u5f0f\uff0c\u53ef\u9760\u7684\u540c\u6b65\u4f20\u8f93\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5404\u79cd\u573a\u666f\uff0c\u5982\u91cd\u8981\u7684\u901a\u77e5\u6d88\u606f\u3001\u77ed\u6d88\u606f\u901a\u77e5\u7b49\u3002"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"../picture/\u540c\u6b65\u53d1\u9001.png",width:"500"})),(0,a.kt)("p",null,"\u540c\u6b65\u53d1\u9001\u7684\u6574\u4e2a\u4ee3\u7801\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u9996\u5148\u4f1a\u521b\u5efa\u4e00\u4e2aproducer"),"\u3002\u666e\u901a\u6d88\u606f\u53ef\u4ee5\u521b\u5efa DefaultMQProducer\uff0c\u521b\u5efa\u65f6\u9700\u8981\u586b\u5199\u751f\u4ea7\u7ec4\u7684\u540d\u79f0\uff0c\u751f\u4ea7\u8005\u7ec4\u662f\u6307\u540c\u4e00\u7c7bProducer\u7684\u96c6\u5408\uff0c\u8fd9\u7c7bProducer\u53d1\u9001\u540c\u4e00\u7c7b\u6d88\u606f\u4e14\u53d1\u9001\u903b\u8f91\u4e00\u81f4\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u8bbe\u7f6e NameServer \u7684\u5730\u5740"),'\u3002Apache RocketMQ\u5f88\u591a\u65b9\u5f0f\u8bbe\u7f6eNameServer\u5730\u5740(\u5ba2\u6237\u7aef\u914d\u7f6e\u4e2d\u6709\u4ecb\u7ecd)\uff0c\u8fd9\u91cc\u662f\u5728\u4ee3\u7801\u4e2d\u8c03\u7528producer\u7684API setNamesrvAddr\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5982\u679c\u6709\u591a\u4e2aNameServer\uff0c\u4e2d\u95f4\u4ee5\u5206\u53f7\u9694\u5f00\uff0c\u6bd4\u5982"127.0.0.2:9876;127.0.0.3:9876"\u3002 '),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u7b2c\u4e09\u6b65\u662f\u6784\u5efa\u6d88\u606f"),"\u3002\u6307\u5b9atopic\u3001tag\u3001body\u7b49\u4fe1\u606f\uff0ctag\u53ef\u4ee5\u7406\u89e3\u6210\u6807\u7b7e\uff0c\u5bf9\u6d88\u606f\u8fdb\u884c\u518d\u5f52\u7c7b\uff0cRocketMQ\u53ef\u4ee5\u5728\u6d88\u8d39\u7aef\u5bf9tag\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u6700\u540e\u8c03\u7528send\u63a5\u53e3\u5c06\u6d88\u606f\u53d1\u9001\u51fa\u53bb"),"\u3002\u540c\u6b65\u53d1\u9001\u7b49\u5f85\u7ed3\u679c\u6700\u540e\u8fd4\u56deSendResult\uff0cSendResut\u5305\u542b\u5b9e\u9645\u53d1\u9001\u72b6\u6001\u8fd8\u5305\u62ecSEND_OK\uff08\u53d1\u9001\u6210\u529f\uff09, FLUSH_DISK_TIMEOUT\uff08\u5237\u76d8\u8d85\u65f6\uff09, FLUSH_SLAVE_TIMEOUT\uff08\u540c\u6b65\u5230\u5907\u8d85\u65f6\uff09, SLAVE_NOT_AVAILABLE\uff08\u5907\u4e0d\u53ef\u7528\uff09\uff0c\u5982\u679c\u53d1\u9001\u5931\u8d25\u4f1a\u629b\u51fa\u5f02\u5e38\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{16,15}","{16,15}":!0},'public class SyncProducer {\n  public static void main(String[] args) throws Exception {\n    // \u521d\u59cb\u5316\u4e00\u4e2aproducer\u5e76\u8bbe\u7f6eProducer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name"); //\uff081\uff09\n    // \u8bbe\u7f6eNameServer\u5730\u5740\n    producer.setNamesrvAddr("localhost:9876");  //\uff082\uff09\n    // \u542f\u52a8producer\n    producer.start();\n    for (int i = 0; i < 100; i++) {\n      // \u521b\u5efa\u4e00\u6761\u6d88\u606f\uff0c\u5e76\u6307\u5b9atopic\u3001tag\u3001body\u7b49\u4fe1\u606f\uff0ctag\u53ef\u4ee5\u7406\u89e3\u6210\u6807\u7b7e\uff0c\u5bf9\u6d88\u606f\u8fdb\u884c\u518d\u5f52\u7c7b\uff0cRocketMQ\u53ef\u4ee5\u5728\u6d88\u8d39\u7aef\u5bf9tag\u8fdb\u884c\u8fc7\u6ee4\n      Message msg = new Message("TopicTest" /* Topic */,\n        "TagA" /* Tag */,\n        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n        );   //\uff083\uff09\n      // \u5229\u7528producer\u8fdb\u884c\u53d1\u9001\uff0c\u5e76\u540c\u6b65\u7b49\u5f85\u53d1\u9001\u7ed3\u679c\n      SendResult sendResult = producer.send(msg);   //\uff084\uff09\n      System.out.printf("%s%n", sendResult);\n    }\n    // \u4e00\u65e6producer\u4e0d\u518d\u4f7f\u7528\uff0c\u5173\u95edproducer\n    producer.shutdown();\n  }\n}\n')),(0,a.kt)("h3",{id:"32-\u5f02\u6b65\u53d1\u9001"},"3.2 \u5f02\u6b65\u53d1\u9001"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"../picture/\u5f02\u6b65\u53d1\u9001.png",width:"500"})),(0,a.kt)("p",null,"\u5f02\u6b65\u53d1\u9001\u662f\u6307\u53d1\u9001\u65b9\u53d1\u51fa\u4e00\u6761\u6d88\u606f\u540e\uff0c\u4e0d\u7b49\u670d\u52a1\u7aef\u8fd4\u56de\u54cd\u5e94\uff0c\u63a5\u7740\u53d1\u9001\u4e0b\u4e00\u6761\u6d88\u606f\u7684\u901a\u8baf\u65b9\u5f0f\u3002\u5f02\u6b65\u53d1\u9001\u9700\u8981\u5b9e\u73b0",(0,a.kt)("strong",{parentName:"p"},"\u5f02\u6b65\u53d1\u9001\u56de\u8c03\u63a5\u53e3"),"\uff08SendCallback\uff09\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5f02\u6b65\u53d1\u9001\u9700\u8981\u5b9e\u73b0",(0,a.kt)("strong",{parentName:"p"},"\u5f02\u6b65\u53d1\u9001\u56de\u8c03\u63a5\u53e3"),"\uff08SendCallback\uff09\u3002")),(0,a.kt)("p",null,"\u6d88\u606f\u53d1\u9001\u65b9\u5728\u53d1\u9001\u4e86\u4e00\u6761\u6d88\u606f\u540e\uff0c\u4e0d\u9700\u8981\u7b49\u5f85\u670d\u52a1\u7aef\u54cd\u5e94\u5373\u53ef\u53d1\u9001\u7b2c\u4e8c\u6761\u6d88\u606f\uff0c\u53d1\u9001\u65b9\u901a\u8fc7\u56de\u8c03\u63a5\u53e3\u63a5\u6536\u670d\u52a1\u7aef\u54cd\u5e94\uff0c\u5e76\u5904\u7406\u54cd\u5e94\u7ed3\u679c\u3002\u5f02\u6b65\u53d1\u9001\u4e00\u822c\u7528\u4e8e\u94fe\u8def\u8017\u65f6\u8f83\u957f\uff0c\u5bf9\u54cd\u5e94\u65f6\u95f4\u8f83\u4e3a\u654f\u611f\u7684\u4e1a\u52a1\u573a\u666f\u3002\u4f8b\u5982\uff0c\u89c6\u9891\u4e0a\u4f20\u540e\u901a\u77e5\u542f\u52a8\u8f6c\u7801\u670d\u52a1\uff0c\u8f6c\u7801\u5b8c\u6210\u540e\u901a\u77e5\u63a8\u9001\u8f6c\u7801\u7ed3\u679c\u7b49\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u662f\u793a\u4f8b\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{16,17}","{16,17}":!0},'public class AsyncProducer {\n  public static void main(String[] args) throws Exception {\n    // \u521d\u59cb\u5316\u4e00\u4e2aproducer\u5e76\u8bbe\u7f6eProducer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    // \u8bbe\u7f6eNameServer\u5730\u5740\n    producer.setNamesrvAddr("localhost:9876");\n    // \u542f\u52a8producer\n    producer.start();\n    producer.setRetryTimesWhenSendAsyncFailed(0);\n    for (int i = 0; i < 100; i++) {\n      final int index = i;\n      // \u521b\u5efa\u4e00\u6761\u6d88\u606f\uff0c\u5e76\u6307\u5b9atopic\u3001tag\u3001body\u7b49\u4fe1\u606f\uff0ctag\u53ef\u4ee5\u7406\u89e3\u6210\u6807\u7b7e\uff0c\u5bf9\u6d88\u606f\u8fdb\u884c\u518d\u5f52\u7c7b\uff0cRocketMQ\u53ef\u4ee5\u5728\u6d88\u8d39\u7aef\u5bf9tag\u8fdb\u884c\u8fc7\u6ee4\n      Message msg = new Message("TopicTest",\n        "TagA",\n        "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));\n      // \u5f02\u6b65\u53d1\u9001\u6d88\u606f, \u53d1\u9001\u7ed3\u679c\u901a\u8fc7callback\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\n      producer.send(msg, new SendCallback() {\n        @Override\n        public void onSuccess(SendResult sendResult) {\n          System.out.printf("%-10d OK %s %n", index,\n            sendResult.getMsgId());\n        }\n        @Override\n        public void onException(Throwable e) {\n          System.out.printf("%-10d Exception %s %n", index, e);\n          e.printStackTrace();\n        }\n      });\n    }\n    // \u4e00\u65e6producer\u4e0d\u518d\u4f7f\u7528\uff0c\u5173\u95edproducer\n    producer.shutdown();\n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5f02\u6b65\u53d1\u9001\u4e0e\u540c\u6b65\u53d1\u9001\u4ee3\u7801\u552f\u4e00\u533a\u522b\u5728\u4e8e\u8c03\u7528send\u63a5\u53e3\u7684\u53c2\u6570\u4e0d\u540c\uff0c\u5f02\u6b65\u53d1\u9001\u4e0d\u4f1a\u7b49\u5f85\u53d1\u9001\u8fd4\u56de\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662fsend\u65b9\u6cd5\u9700\u8981\u4f20\u5165 SendCallback \u7684\u5b9e\u73b0\uff0cSendCallback \u63a5\u53e3\u4e3b\u8981\u6709onSuccess \u548c onException \u4e24\u4e2a\u65b9\u6cd5\uff0c\u8868\u793a\u6d88\u606f\u53d1\u9001\u6210\u529f\u548c\u6d88\u606f\u53d1\u9001\u5931\u8d25\u3002")),(0,a.kt)("h3",{id:"33-\u5355\u5411\u6a21\u5f0f\u53d1\u9001"},"3.3 \u5355\u5411\u6a21\u5f0f\u53d1\u9001"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"../picture/Oneway\u53d1\u9001.png",width:"500"})),(0,a.kt)("p",null,"\u53d1\u9001\u65b9\u53ea\u8d1f\u8d23\u53d1\u9001\u6d88\u606f\uff0c\u4e0d\u7b49\u5f85\u670d\u52a1\u7aef\u8fd4\u56de\u54cd\u5e94\u4e14\u6ca1\u6709\u56de\u8c03\u51fd\u6570\u89e6\u53d1\uff0c\u5373\u53ea\u53d1\u9001\u8bf7\u6c42\u4e0d\u7b49\u5f85\u5e94\u7b54\u3002\u6b64\u65b9\u5f0f\u53d1\u9001\u6d88\u606f\u7684\u8fc7\u7a0b\u8017\u65f6\u975e\u5e38\u77ed\uff0c\u4e00\u822c\u5728\u5fae\u79d2\u7ea7\u522b\u3002\u9002\u7528\u4e8e\u67d0\u4e9b\u8017\u65f6\u975e\u5e38\u77ed\uff0c\u4f46\u5bf9\u53ef\u9760\u6027\u8981\u6c42\u5e76\u4e0d\u9ad8\u7684\u573a\u666f\uff0c\u4f8b\u5982\u65e5\u5fd7\u6536\u96c6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{16}","{16}":!0},'public class OnewayProducer {\n  public static void main(String[] args) throws Exception{\n    // \u521d\u59cb\u5316\u4e00\u4e2aproducer\u5e76\u8bbe\u7f6eProducer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    // \u8bbe\u7f6eNameServer\u5730\u5740\n    producer.setNamesrvAddr("localhost:9876");\n    // \u542f\u52a8producer\n    producer.start();\n    for (int i = 0; i < 100; i++) {\n      // \u521b\u5efa\u4e00\u6761\u6d88\u606f\uff0c\u5e76\u6307\u5b9atopic\u3001tag\u3001body\u7b49\u4fe1\u606f\uff0ctag\u53ef\u4ee5\u7406\u89e3\u6210\u6807\u7b7e\uff0c\u5bf9\u6d88\u606f\u8fdb\u884c\u518d\u5f52\u7c7b\uff0cRocketMQ\u53ef\u4ee5\u5728\u6d88\u8d39\u7aef\u5bf9tag\u8fdb\u884c\u8fc7\u6ee4\n      Message msg = new Message("TopicTest" /* Topic */,\n        "TagA" /* Tag */,\n        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n      );\n      // \u7531\u4e8e\u5728oneway\u65b9\u5f0f\u53d1\u9001\u6d88\u606f\u65f6\u6ca1\u6709\u8bf7\u6c42\u5e94\u7b54\u5904\u7406\uff0c\u5982\u679c\u51fa\u73b0\u6d88\u606f\u53d1\u9001\u5931\u8d25\uff0c\u5219\u4f1a\u56e0\u4e3a\u6ca1\u6709\u91cd\u8bd5\u800c\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u3002\u82e5\u6570\u636e\u4e0d\u53ef\u4e22\uff0c\u5efa\u8bae\u9009\u7528\u53ef\u9760\u540c\u6b65\u6216\u53ef\u9760\u5f02\u6b65\u53d1\u9001\u65b9\u5f0f\u3002\n      producer.sendOneway(msg);\n    }\n     // \u4e00\u65e6producer\u4e0d\u518d\u4f7f\u7528\uff0c\u5173\u95edproducer\n     producer.shutdown();\n  }\n}\n')),(0,a.kt)("p",null,"\u5355\u5411\u6a21\u5f0f\u8c03\u7528sendOneway\uff0c\u4e0d\u4f1a\u5bf9\u8fd4\u56de\u7ed3\u679c\u6709\u4efb\u4f55\u7b49\u5f85\u548c\u5904\u7406\u3002"))}m.isMDXComponent=!0}}]);