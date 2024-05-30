"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7687],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(58168),a=r(96540),o=r(20053),s=r(23104),c=r(56347),i=r(57485),l=r(31682),u=r(89466);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,c.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,l]=g({queryString:r,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),y=(()=>{const e=i??m;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&c(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),l(e),h(e)}),[l,h,o]),tabValues:o}}var y=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:c,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.a_)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=l[r].value;n!==c&&(m(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},s,{className:(0,o.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":c===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return a.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},a.createElement(k,(0,n.A)({},e,t)),a.createElement(b,(0,n.A)({},e,t)))}function w(e){const t=(0,y.A)();return a.createElement(v,(0,n.A)({key:String(t)},e))}},98088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(58168),a=(r(96540),r(15680)),o=r(11470),s=r(19365);const c={},i="Docker Deployment of RocketMQ 4.X",l={unversionedId:"introduction/02quickstartWithDocker4.x",id:"introduction/02quickstartWithDocker4.x",title:"Docker Deployment of RocketMQ 4.X",description:"This section introduces how to quickly deploy a single-node, single-replica RocketMQ service using Docker and complete simple message sending and receiving.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-introduction/02quickstartWithDocker4.x.md",sourceDirName:"01-introduction",slug:"/introduction/02quickstartWithDocker4.x",permalink:"/docs/4.x/introduction/02quickstartWithDocker4.x",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/01-introduction/02quickstartWithDocker4.x.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Quickstart",permalink:"/docs/4.x/introduction/02quickstart"},next:{title:"What is RocketMQ",permalink:"/docs/4.x/introduction/03whatis"}},u={},m=[{value:"1. Pull RocketMQ Image",id:"1-pull-rocketmq-image",level:2},{value:"2. Create a Shared Network for Containers",id:"2-create-a-shared-network-for-containers",level:2},{value:"3. Start NameServer",id:"3-start-nameserver",level:2},{value:"4. Start Broker",id:"4-start-broker",level:2},{value:"5. Test Message Sending and Receiving with Tools",id:"5-test-message-sending-and-receiving-with-tools",level:2},{value:"6. Test Message Sending and Receiving with SDK",id:"6-test-message-sending-and-receiving-with-sdk",level:2},{value:"7. Stop the Containers",id:"7-stop-the-containers",level:2}],p={toc:m},d="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"docker-deployment-of-rocketmq-4x"},"Docker Deployment of RocketMQ 4.X"),(0,a.yg)("p",null,"This section introduces how to quickly deploy a single-node, single-replica RocketMQ service using Docker and complete simple message sending and receiving."),(0,a.yg)("admonition",{title:"System Requirements",type:"tip"},(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},"64-bit operating system"),(0,a.yg)("li",{parentName:"ol"},"64-bit JDK 1.8+"))),(0,a.yg)("h2",{id:"1-pull-rocketmq-image"},"1. Pull RocketMQ Image"),(0,a.yg)("p",null,"Here, we take the RocketMQ 4.9.6 version image from ",(0,a.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/rocketmq/tags"},"dockerhub")," as an example to introduce the deployment process."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"docker pull apache/rocketmq:4.9.6\n")),(0,a.yg)("h2",{id:"2-create-a-shared-network-for-containers"},"2. Create a Shared Network for Containers"),(0,a.yg)("p",null,"RocketMQ involves multiple services and requires multiple containers. Creating a Docker network facilitates communication between containers."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"docker network create rocketmq\n")),(0,a.yg)("h2",{id:"3-start-nameserver"},"3. Start NameServer"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# Start NameServer\ndocker run -d --name rmqnamesrv -p 9876:9876 --net rocketmq apache/rocketmq:4.9.6 sh mqnamesrv\n\n# Verify if NameServer started successfully\ndocker logs -f rmqnamesrv\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"We can see ",(0,a.yg)("strong",{parentName:"p"},"'The Name Server boot success..'\uff0c")," indicating that the NameServer has started successfully.")),(0,a.yg)("h2",{id:"4-start-broker"},"4. Start Broker"),(0,a.yg)("p",null,"After the NameServer starts successfully, we start the Broker."),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(s.A,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-code"},'# Configure the broker\'s IP address\necho "brokerIP1=127.0.0.1" >broker.conf\n\n# Start Broker\ndocker run -d \\\n--name rmqbroker \\\n--net rocketmq \\\n-p 10912:10912 -p 10911:10911 -p 10909:10909 \\\n-e "NAMESRV_ADDR=rmqnamesrv:9876" \\\n-v ./broker.conf:/home/rocketmq/rocketmq-4.9.6/conf/broker.conf \\\napache/rocketmq:4.9.6 sh mqbroker \\\n-c /home/rocketmq/rocketmq-4.9.6/conf/broker.conf\n\n# Verify if Broker started successfully\ndocker logs rmqbroker\n'))),(0,a.yg)(s.A,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-code"},'# Configure the broker\'s IP address\necho "brokerIP1=127.0.0.1" >broker.conf\n\n# Start Broker\ndocker run -d ^\n--name rmqbroker ^\n--net rocketmq ^\n-p 10912:10912 -p 10911:10911 -p 10909:10909 ^\n-e "NAMESRV_ADDR=rmqnamesrv:9876" ^\n-v %cd%\\broker.conf:/home/rocketmq/rocketmq-4.9.6/conf/broker.conf ^\napache/rocketmq:4.9.6 sh mqbroker ^\n-c /home/rocketmq/rocketmq-4.9.6/conf/broker.conf\n\n# Verify if Broker started successfully\ndocker logs rmqbroker\n')))),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"We can see ",(0,a.yg)("strong",{parentName:"p"},"'The broker boot success..'\uff0c")," indicating that the Broker has started successfully.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"At this point, a single-node replica RocketMQ cluster has been deployed. We can use scripts for simple message sending and receiving.")),(0,a.yg)("h2",{id:"5-test-message-sending-and-receiving-with-tools"},"5. Test Message Sending and Receiving with Tools"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# Enter the broker container\n$ docker exec -it rmqbroker bash\n\n$ sh tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n$ sh tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,a.yg)("h2",{id:"6-test-message-sending-and-receiving-with-sdk"},"6. Test Message Sending and Receiving with SDK"),(0,a.yg)("p",null,"After testing with tools, we can try sending and receiving messages using the SDK. Here, we use the Java SDK as an example to introduce the process."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Create a Java project in IDEA.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add the following dependencies to the ",(0,a.yg)("em",{parentName:"p"},"pom.xml")," file to introduce the Java library."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.rocketmq</groupId>\n    <artifactId>rocketmq-client</artifactId>\n    <version>4.9.6</version>\n</dependency>\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the created Java project, create and run a program to send a simple message. Apache RocketMQ can send messages in three ways: ",(0,a.yg)("strong",{parentName:"p"},"synchronous, asynchronous, and one-way transmission"),". Here we use the synchronous mode as an example:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.rocketmq.client.producer.DefaultMQProducer;\nimport org.apache.rocketmq.client.producer.SendResult;\nimport org.apache.rocketmq.common.message.Message;\n\npublic class ProducerExample {\n    public static void main(String[] args) throws Exception {\n        // Create producer instance and set the producer group name\n        DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n        // Set the Name Server address (replace with actual Name Server address)\n        producer.setNamesrvAddr("localhost:9876");\n        producer.start();\n\n        try {\n            // Create a message instance, specifying the topic, tag, and message body\n            Message msg = new Message("TestTopic", "TagA", ("Hello RocketMQ").getBytes());\n            // Send the message and get the send result\n            SendResult sendResult = producer.send(msg);\n            System.out.println("Message sent: " + new String(msg.getBody()));\n            System.out.println("Send result: " + sendResult);\n        } catch (Exception e) {\n            e.printStackTrace();\n            System.out.println("Message sending failed.");\n        } finally {\n            // Shutdown the producer\n            producer.shutdown();\n        }\n    }\n}\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the created Java project, create and run a program to subscribe to simple messages. Apache RocketMQ has two consumption modes: ",(0,a.yg)("strong",{parentName:"p"},"Push and Pull"),". Here we use the Push mode as an example."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;\nimport org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyContext;\nimport org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;\nimport org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;\nimport org.apache.rocketmq.common.message.MessageExt;\n\nimport java.util.List;\n\npublic class ConsumerExample {\n    public static void main(String[] args) throws Exception {\n        // Create consumer instance and set the consumer group name\n        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("please_rename_unique_group_name");\n        // Set the Name Server address (replace with actual Name Server address)\n        consumer.setNamesrvAddr("localhost:9876");\n        // Subscribe to the specified topic and tag (* means all tags)\n        consumer.subscribe("TestTopic", "*");\n\n        // Register message listener\n        consumer.registerMessageListener(new MessageListenerConcurrently() {\n            @Override\n            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {\n                for (MessageExt msg : msgs) {\n                    System.out.println("Received message: " + new String(msg.getBody()));\n                }\n                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n            }\n        });\n\n        // Start the consumer\n        consumer.start();\n        System.out.println("Consumer started.");\n    }\n}\n')))),(0,a.yg)("h2",{id:"7-stop-the-containers"},"7. Stop the Containers"),(0,a.yg)("p",null,"After completing the experiment, we can stop the containers as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# Stop the NameServer container\ndocker stop rmqnamesrv\n\n# Stop the Broker container\ndocker stop rmqbroker\n")))}g.isMDXComponent=!0}}]);