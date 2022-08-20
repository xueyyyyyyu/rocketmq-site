"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,C=m["".concat(i,".").concat(g)]||m[g]||l[g]||s;return n?r.createElement(C,a(a({ref:t},u),{},{components:n})):r.createElement(C,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8636:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const s={},a="\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4",p={unversionedId:"\u6700\u4f73\u5b9e\u8df5/21subscribe",id:"version-5.0/\u6700\u4f73\u5b9e\u8df5/21subscribe",isDocsHomePage:!1,title:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4",description:"\u524d\u8a00",source:"@site/versioned_docs/version-5.0/05-\u6700\u4f73\u5b9e\u8df5/21subscribe.md",sourceDirName:"05-\u6700\u4f73\u5b9e\u8df5",slug:"/\u6700\u4f73\u5b9e\u8df5/21subscribe",permalink:"/docs/5.0/\u6700\u4f73\u5b9e\u8df5/21subscribe",editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/05-\u6700\u4f73\u5b9e\u8df5/21subscribe.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u65e5\u5fd7\u914d\u7f6e",permalink:"/docs/5.0/\u6700\u4f73\u5b9e\u8df5/20log"},next:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/docs/5.0/\u6700\u4f73\u5b9e\u8df5/22FAQ"}},i=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"1  \u6b63\u786e\u8ba2\u9605\u5173\u7cfb\u793a\u4f8b",id:"1--\u6b63\u786e\u8ba2\u9605\u5173\u7cfb\u793a\u4f8b",children:[{value:"1.1 \u8ba2\u9605\u4e00\u4e2aTopic\u4e14\u8ba2\u9605\u4e00\u4e2aTag",id:"11-\u8ba2\u9605\u4e00\u4e2atopic\u4e14\u8ba2\u9605\u4e00\u4e2atag",children:[]},{value:"1.2 \u8ba2\u9605\u4e00\u4e2aTopic\u4e14\u8ba2\u9605\u591a\u4e2aTag",id:"12-\u8ba2\u9605\u4e00\u4e2atopic\u4e14\u8ba2\u9605\u591a\u4e2atag",children:[]},{value:"1.3 \u8ba2\u9605\u591a\u4e2aTopic\u4e14\u8ba2\u9605\u591a\u4e2aTag",id:"13-\u8ba2\u9605\u591a\u4e2atopic\u4e14\u8ba2\u9605\u591a\u4e2atag",children:[]}]},{value:"2 \u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u6392\u67e5",id:"2-\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u6392\u67e5",children:[]},{value:"3 \u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898",id:"3-\u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898",children:[{value:"3.1 \u540c\u4e00Group ID\u4e0b\u7684Consumer\u5b9e\u4f8b\u8ba2\u9605\u7684Topic\u4e0d\u540c",id:"31-\u540c\u4e00group-id\u4e0b\u7684consumer\u5b9e\u4f8b\u8ba2\u9605\u7684topic\u4e0d\u540c",children:[]},{value:"3.2 \u540c\u4e00Group ID\u4e0b\u7684Consumer\u5b9e\u4f8b\u8ba2\u9605\u7684Topic\u76f8\u540c\uff0c\u4f46\u8ba2\u9605\u7684Tag\u4e0d\u4e00\u81f4",id:"32-\u540c\u4e00group-id\u4e0b\u7684consumer\u5b9e\u4f8b\u8ba2\u9605\u7684topic\u76f8\u540c\u4f46\u8ba2\u9605\u7684tag\u4e0d\u4e00\u81f4",children:[]}]}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4"},"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4"),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u8ba2\u9605\u5173\u7cfb\uff1a\u4e00\u4e2a\u6d88\u8d39\u8005\u7ec4\u8ba2\u9605\u4e00\u4e2a Topic \u7684\u67d0\u4e00\u4e2a Tag\uff0c\u8fd9\u79cd\u8bb0\u5f55\u88ab\u79f0\u4e3a\u8ba2\u9605\u5173\u7cfb\u3002"),(0,o.kt)("p",null,"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\uff1a\u540c\u4e00\u4e2a\u6d88\u8d39\u8005\u7ec4\u4e0b\u6240\u6709\u6d88\u8d39\u8005\u5b9e\u4f8b\u6240\u8ba2\u9605\u7684Topic\u3001Tag\u5fc5\u987b\u5b8c\u5168\u4e00\u81f4\u3002\u5982\u679c\u8ba2\u9605\u5173\u7cfb\uff08\u6d88\u8d39\u8005\u7ec4\u540d-Topic-Tag\uff09\u4e0d\u4e00\u81f4\uff0c\u4f1a\u5bfc\u81f4\u6d88\u8d39\u6d88\u606f\u7d0a\u4e71\uff0c\u751a\u81f3\u6d88\u606f\u4e22\u5931\u3002"),(0,o.kt)("h2",{id:"1--\u6b63\u786e\u8ba2\u9605\u5173\u7cfb\u793a\u4f8b"},"1  \u6b63\u786e\u8ba2\u9605\u5173\u7cfb\u793a\u4f8b"),(0,o.kt)("h3",{id:"11-\u8ba2\u9605\u4e00\u4e2atopic\u4e14\u8ba2\u9605\u4e00\u4e2atag"},"1.1 \u8ba2\u9605\u4e00\u4e2aTopic\u4e14\u8ba2\u9605\u4e00\u4e2aTag"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u540c\u4e00Group ID\u4e0b\u7684\u4e09\u4e2aConsumer\u5b9e\u4f8bC1\u3001C2\u548cC3\u5206\u522b\u90fd\u8ba2\u9605\u4e86TopicA\uff0c\u4e14\u8ba2\u9605TopicA\u7684Tag\u4e5f\u90fd\u662fTag1\uff0c\u7b26\u5408\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u539f\u5219\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4lfsw9aaaj20ie0deq3i.jpg",alt:"1658453577894-0e64b114-cb4a-4220-a09a-62bc1f2943c6"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6b63\u786e\u793a\u4f8b\u4ee3\u7801\u4e00")),(0,o.kt)("p",null,"C1\u3001C2\u3001C3\u7684\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\uff0c\u5373C1\u3001C2\u3001C3\u8ba2\u9605\u6d88\u606f\u7684\u4ee3\u7801\u5fc5\u987b\u5b8c\u5168\u4e00\u81f4\uff0c\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_1");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "Tag1", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    }); \n')),(0,o.kt)("h3",{id:"12-\u8ba2\u9605\u4e00\u4e2atopic\u4e14\u8ba2\u9605\u591a\u4e2atag"},"1.2 \u8ba2\u9605\u4e00\u4e2aTopic\u4e14\u8ba2\u9605\u591a\u4e2aTag"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u540c\u4e00Group ID\u4e0b\u7684\u4e09\u4e2aConsumer\u5b9e\u4f8bC1\u3001C2\u548cC3\u5206\u522b\u90fd\u8ba2\u9605\u4e86TopicB\uff0c\u8ba2\u9605TopicB\u7684Tag\u4e5f\u90fd\u662fTag2\u548cTag3\uff0c\u8868\u793a\u8ba2\u9605TopicB\u4e2d\u6240\u6709Tag\u4e3aTag2\u6216Tag3\u7684\u6d88\u606f\uff0c\u4e14\u987a\u5e8f\u4e00\u81f4\u90fd\u662fTag2||Tag3\uff0c\u7b26\u5408\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u6027\u539f\u5219\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4lfudl3awj20nt0gywfj.jpg",alt:"1658453865541-118b0cd0-d597-4a76-9561-ae765540567c"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6b63\u786e\u793a\u4f8b\u4ee3\u7801\u4e8c")),(0,o.kt)("p",null,"C1\u3001C2\u3001C3\u7684\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\uff0c\u5373C1\u3001C2\u3001C3\u8ba2\u9605\u6d88\u606f\u7684\u4ee3\u7801\u5fc5\u987b\u5b8c\u5168\u4e00\u81f4\uff0c\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_2");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicB", "Tag2||Tag3", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });   \n')),(0,o.kt)("h3",{id:"13-\u8ba2\u9605\u591a\u4e2atopic\u4e14\u8ba2\u9605\u591a\u4e2atag"},"1.3 \u8ba2\u9605\u591a\u4e2aTopic\u4e14\u8ba2\u9605\u591a\u4e2aTag"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u540c\u4e00Group ID\u4e0b\u7684\u4e09\u4e2aConsumer\u5b9e\u4f8bC1\u3001C2\u548cC3\u5206\u522b\u90fd\u8ba2\u9605\u4e86TopicA\u548cTopicB\uff0c\u4e14\u8ba2\u9605\u7684TopicA\u90fd\u672a\u6307\u5b9aTag\uff0c\u5373\u8ba2\u9605TopicA\u4e2d\u7684\u6240\u6709\u6d88\u606f\uff0c\u8ba2\u9605\u7684TopicB\u7684Tag\u90fd\u662fTag1\u548cTag2\uff0c\u8868\u793a\u8ba2\u9605TopicB\u4e2d\u6240\u6709Tag\u4e3aTag1\u6216Tag2\u7684\u6d88\u606f\uff0c\u4e14\u987a\u5e8f\u4e00\u81f4\u90fd\u662fTag1||Tag2\uff0c\u7b26\u5408\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u539f\u5219\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4lfutzsnbj20o40h4t9s.jpg",alt:"1658454292557-c07fa0ac-81be-4aac-9c5b-342821c554a6"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6b63\u786e\u793a\u4f8b\u4ee3\u7801\u4e09")),(0,o.kt)("p",null,"C1\u3001C2\u3001C3\u7684\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\uff0c\u5373C1\u3001C2\u3001C3\u8ba2\u9605\u6d88\u606f\u7684\u4ee3\u7801\u5fc5\u987b\u5b8c\u5168\u4e00\u81f4\uff0c\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_3");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "*", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });     \n    consumer.subscribe("TopicB", "Tag2||Tag3", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });   \n')),(0,o.kt)("h2",{id:"2-\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u6392\u67e5"},"2 \u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u6392\u67e5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0")),(0,o.kt)("p",null,"\u5728\u4f7f\u7528\u6d88\u606f\u961f\u5217RocketMQ\u7248\u5b9e\u4f8b\u65f6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5\uff0c\u5177\u4f53\u7684\u95ee\u9898\u73b0\u8c61\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6d88\u606f\u961f\u5217RocketMQ\u7248\u63a7\u5236\u53f0\u4e2d\u8ba2\u9605\u5173\u7cfb\u662f\u5426\u4e00\u81f4\u663e\u793a\u4e3a\u5426\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\uff08Consumer\uff09\u5b9e\u4f8b\u672a\u6536\u5230\u8ba2\u9605\u7684\u6d88\u606f\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u68c0\u67e5")),(0,o.kt)("p",null,"\u60a8\u53ef\u5728\u6d88\u606f\u6d88\u606f\u961f\u5217RocketMQ\u7248\u63a7\u5236\u53f0Group \u8be6\u60c5\u9875\u9762\u67e5\u770b\u6307\u5b9aGroup\u7684\u8ba2\u9605\u5173\u7cfb\u662f\u5426\u4e00\u81f4\u3002\u82e5\u67e5\u8be2\u7ed3\u679c\u4e0d\u4e00\u81f4\uff0c\u8bf7\u53c2\u89c1\u672c\u6587(3 \u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898)\u6392\u67e5Consumer\u5b9e\u4f8b\u7684\u6d88\u8d39\u4ee3\u7801\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u60a8Consumer\u5b9e\u4f8b\u4e2d\u4e0e\u8ba2\u9605\u76f8\u5173\u7684\u914d\u7f6e\u4ee3\u7801\uff0c\u786e\u4fdd\u914d\u7f6e\u540c\u4e00\u4e2aGroup ID\u7684\u6240\u6709Consumer\u5b9e\u4f8b\u5747\u8ba2\u9605\u76f8\u540c\u7684Topic\u53caTag\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u91cd\u542f\u5ba2\u6237\u7aef\u5e94\u7528\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u767b\u5f55",(0,o.kt)("a",{parentName:"li",href:"https://ons.console.aliyun.com/"},"\u6d88\u606f\u961f\u5217RocketMQ\u7248\u63a7\u5236\u53f0"),"\uff0c\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u5355\u51fb\u5b9e\u4f8b\u5217\u8868\uff0c\u9009\u62e9\u60a8\u7684\u76ee\u6807\u5b9e\u4f8b\uff0c\u8fdb\u5165\u5b9e\u4f8b\u8be6\u60c5\u9875\u9762\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u5355\u51fbGroup\u7ba1\u7406\uff0c\u9009\u62e9\u5bf9\u5e94\u7684\u534f\u8bae\u540e\uff0c\u5355\u51fb\u6d88\u8d39\u8005\u72b6\u6001\uff0c\u786e\u8ba4\u8ba2\u9605\u5173\u7cfb\u662f\u5426\u4e00\u81f4\u663e\u793a\u4e3a\u662f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u5e76\u786e\u8ba4\u6d88\u606f\u80fd\u591f\u88ab\u9884\u671f\u7684Consumer\u5b9e\u4f8b\u6240\u6d88\u8d39\u3002")),(0,o.kt)("h2",{id:"3-\u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898"},"3 \u5e38\u89c1\u8ba2\u9605\u5173\u7cfb\u4e0d\u4e00\u81f4\u95ee\u9898"),(0,o.kt)("h3",{id:"31-\u540c\u4e00group-id\u4e0b\u7684consumer\u5b9e\u4f8b\u8ba2\u9605\u7684topic\u4e0d\u540c"},"3.1 \u540c\u4e00Group ID\u4e0b\u7684Consumer\u5b9e\u4f8b\u8ba2\u9605\u7684Topic\u4e0d\u540c"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u540c\u4e00Group ID\u4e0b\u7684\u4e09\u4e2aConsumer\u5b9e\u4f8bC1\u3001C2\u548cC3\u5206\u522b\u8ba2\u9605\u4e86TopicA\u3001TopicB\u548cTopicC\uff0c\u8ba2\u9605\u7684Topic\u4e0d\u4e00\u81f4\uff0c\u4e0d\u7b26\u5408\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u6027\u539f\u5219\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4lfvy56ufj20oh0h9wfg.jpg",alt:"image-20220722102131073"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9519\u8bef\u793a\u4f8b\u4ee3\u7801\u4e00")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer\u5b9e\u4f8b1-1\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_1");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "*", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer\u5b9e\u4f8b1-2\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_1");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicB", "*", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consumer\u5b9e\u4f8b1-3\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_1");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicC", "*", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });\n')),(0,o.kt)("h3",{id:"32-\u540c\u4e00group-id\u4e0b\u7684consumer\u5b9e\u4f8b\u8ba2\u9605\u7684topic\u76f8\u540c\u4f46\u8ba2\u9605\u7684tag\u4e0d\u4e00\u81f4"},"3.2 \u540c\u4e00Group ID\u4e0b\u7684Consumer\u5b9e\u4f8b\u8ba2\u9605\u7684Topic\u76f8\u540c\uff0c\u4f46\u8ba2\u9605\u7684Tag\u4e0d\u4e00\u81f4"),(0,o.kt)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u540c\u4e00Group ID\u4e0b\u7684\u4e09\u4e2aConsumer\u5b9e\u4f8bC1\u3001C2\u548cC3\u5206\u522b\u90fd\u8ba2\u9605\u4e86TopicA\uff0c\u4f46\u662fC1\u8ba2\u9605TopicA\u7684Tag\u4e3a",(0,o.kt)("strong",{parentName:"p"},"Tag1"),"\uff0cC2\u548cC3\u8ba2\u9605\u7684TopicA\u7684Tag\u4e3a",(0,o.kt)("strong",{parentName:"p"},"Tag2"),"\uff0c\u8ba2\u9605\u540c\u4e00Topic\u7684Tag\u4e0d\u4e00\u81f4\uff0c\u4e0d\u7b26\u5408\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u6027\u539f\u5219\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h4lfw59vm9j20o30gwwfh.jpg",alt:"image-20220722102926055"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9519\u8bef\u793a\u4f8b\u4ee3\u7801\u4e8c")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer\u5b9e\u4f8b2-1\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_2");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "Tag1", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });  \n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer\u5b9e\u4f8b2-2\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_2");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "Tag2", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });  \n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumer\u5b9e\u4f8b2-3\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    Properties properties = new Properties();\n    properties.put(PropertyKeyConst.GROUP_ID, "GID_test_2");\n    Consumer consumer = ONSFactory.createConsumer(properties);\n    consumer.subscribe("TopicA", "Tag2", new MessageListener() {\n        public Action consume(Message message, ConsumeContext context) {\n            System.out.println(message.getMsgID());\n            return Action.CommitMessage;\n        }\n    });  \n')))))}u.isMDXComponent=!0}}]);