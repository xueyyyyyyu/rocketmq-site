"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1201:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},s="\u6279\u91cf\u6d88\u606f\u53d1\u9001",c={unversionedId:"\u751f\u4ea7\u8005/08message4",id:"\u751f\u4ea7\u8005/08message4",isDocsHomePage:!1,title:"\u6279\u91cf\u6d88\u606f\u53d1\u9001",description:"\u5728\u5bf9\u541e\u5410\u7387\u6709\u4e00\u5b9a\u8981\u6c42\u7684\u60c5\u51b5\u4e0b\uff0cApache RocketMQ\u53ef\u4ee5\u5c06\u4e00\u4e9b\u6d88\u606f\u805a\u6210\u4e00\u6279\u4ee5\u540e\u8fdb\u884c\u53d1\u9001\uff0c\u53ef\u4ee5\u589e\u52a0\u541e\u5410\u7387\uff0c\u5e76\u51cf\u5c11API\u548c\u7f51\u7edc\u8c03\u7528\u6b21\u6570\u3002",source:"@site/docs/02-\u751f\u4ea7\u8005/08message4.md",sourceDirName:"02-\u751f\u4ea7\u8005",slug:"/\u751f\u4ea7\u8005/08message4",permalink:"/docs/\u751f\u4ea7\u8005/08message4",editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/02-\u751f\u4ea7\u8005/08message4.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/07message3"},next:{title:"\u4e8b\u52a1\u6d88\u606f\u53d1\u9001",permalink:"/docs/\u751f\u4ea7\u8005/09message5"}},i=[],p={toc:i};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6279\u91cf\u6d88\u606f\u53d1\u9001"},"\u6279\u91cf\u6d88\u606f\u53d1\u9001"),(0,a.kt)("p",null,"\u5728\u5bf9\u541e\u5410\u7387\u6709\u4e00\u5b9a\u8981\u6c42\u7684\u60c5\u51b5\u4e0b\uff0cApache RocketMQ\u53ef\u4ee5\u5c06\u4e00\u4e9b\u6d88\u606f\u805a\u6210\u4e00\u6279\u4ee5\u540e\u8fdb\u884c\u53d1\u9001\uff0c\u53ef\u4ee5\u589e\u52a0\u541e\u5410\u7387\uff0c\u5e76\u51cf\u5c11API\u548c\u7f51\u7edc\u8c03\u7528\u6b21\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"batch",src:r(985).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{10,11,12,13}","{10,11,12,13}":!0},'public class SimpleBatchProducer {\n\n    public static void main(String[] args) throws Exception {\n        DefaultMQProducer producer = new DefaultMQProducer("BatchProducerGroupName");\n        producer.start();\n\n        //If you just send messages of no more than 1MiB at a time, it is easy to use batch\n        //Messages of the same batch should have: same topic, same waitStoreMsgOK and no schedule support\n        String topic = "BatchTest";\n        List<Message> messages = new ArrayList<>();\n        messages.add(new Message(topic, "Tag", "OrderID001", "Hello world 0".getBytes()));\n        messages.add(new Message(topic, "Tag", "OrderID002", "Hello world 1".getBytes()));\n        messages.add(new Message(topic, "Tag", "OrderID003", "Hello world 2".getBytes()));\n\n        producer.send(messages);\n    }\n}\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u8c03\u7528\u975e\u5e38\u7b80\u5355\uff0c\u5c06\u6d88\u606f\u6253\u5305\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection<Message> msgs")," \u4f20\u5165\u65b9\u6cd5\u4e2d\u5373\u53ef\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u6279\u91cf\u6d88\u606f\u7684\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 1MiB\uff08\u5426\u5219\u9700\u8981\u81ea\u884c\u5206\u5272\uff09\uff0c\u5176\u6b21\u540c\u4e00\u6279 batch \u4e2d topic \u5fc5\u987b\u76f8\u540c\u3002 "))))}l.isMDXComponent=!0},985:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/batch-241308ac9ed97b3a1fbf0e5e6417f74d.png"}}]);