"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5598],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return n?t.createElement(d,i(i({ref:r},u),{},{components:n})):t.createElement(d,i({ref:r},u))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,r,n)=>{n.d(r,{A:()=>i});var t=n(96540),o=n(20053);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:r,hidden:n,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,i),hidden:n},r)}},11470:(e,r,n)=>{n.d(r,{A:()=>q});var t=n(58168),o=n(96540),a=n(20053),i=n(23104),c=n(56347),l=n(57485),s=n(31682),u=n(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}}))}function m(e){const{values:r,children:n}=e;return(0,o.useMemo)((()=>{const e=r??p(n);return function(e){const r=(0,s.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function g(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function d(e){let{queryString:r=!1,groupId:n}=e;const t=(0,c.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(t.location.search);r.set(a,e),t.replace({...t.location,search:r.toString()})}),[a,t])]}function y(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,a=m(e),[i,c]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!g({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[l,s]=d({queryString:n,groupId:t}),[p,y]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,a]=(0,u.Dv)(n);return[t,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:t}),k=(()=>{const e=l??p;return g({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{k&&c(k)}),[k]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),y(e)}),[s,y,a]),tabValues:a}}var k=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:r,block:n,selectedValue:c,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const r=e.currentTarget,n=u.indexOf(r),t=s[n].value;t!==c&&(p(r),l(t))},g=e=>{let r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;r=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;r=u[n]??u[u.length-1];break}}r?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r)},s.map((e=>{let{value:r,label:n,attributes:i}=e;return o.createElement("li",(0,t.A)({role:"tab",tabIndex:c===r?0:-1,"aria-selected":c===r,key:r,ref:e=>u.push(e),onKeyDown:g,onClick:m},i,{className:(0,a.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":c===r})}),n??r)})))}function v(e){let{lazy:r,children:n,selectedValue:t}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==t}))))}function b(e){const r=y(e);return o.createElement("div",{className:(0,a.A)("tabs-container",f.tabList)},o.createElement(h,(0,t.A)({},e,r)),o.createElement(v,(0,t.A)({},e,r)))}function q(e){const r=(0,k.A)();return o.createElement(b,(0,t.A)({key:String(r)},e))}},84517:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var t=n(58168),o=(n(96540),n(15680)),a=n(11470),i=n(19365);const c={},l="Docker \u90e8\u7f72 RocketMQ",s={unversionedId:"quickStart/02quickstartWithDocker",id:"version-5.0/quickStart/02quickstartWithDocker",title:"Docker \u90e8\u7f72 RocketMQ",description:"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Docker\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355\u8282\u70b9\u5355\u526f\u672c RocketMQ \u670d\u52a1\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002",source:"@site/versioned_docs/version-5.0/02-quickStart/02quickstartWithDocker.md",sourceDirName:"02-quickStart",slug:"/quickStart/02quickstartWithDocker",permalink:"/zh/docs/quickStart/02quickstartWithDocker",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/02-quickStart/02quickstartWithDocker.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/quickStart/01quickstart"},next:{title:"Docker-compose \u90e8\u7f72 RocketMQ",permalink:"/zh/docs/quickStart/03quickstartWithDockercompose"}},u={},p=[{value:"1.\u62c9\u53d6RocketMQ\u955c\u50cf",id:"1\u62c9\u53d6rocketmq\u955c\u50cf",level:2},{value:"2.\u521b\u5efa\u5bb9\u5668\u5171\u4eab\u7f51\u7edc",id:"2\u521b\u5efa\u5bb9\u5668\u5171\u4eab\u7f51\u7edc",level:2},{value:"3.\u542f\u52a8NameServer",id:"3\u542f\u52a8nameserver",level:2},{value:"4.\u542f\u52a8 Broker+Proxy",id:"4\u542f\u52a8-brokerproxy",level:2},{value:"5.SDK\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1",id:"5sdk\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1",level:2},{value:"6. \u505c\u6b62\u5bb9\u5668",id:"6-\u505c\u6b62\u5bb9\u5668",level:2}],m={toc:p},g="wrapper";function d(e){let{components:r,...n}=e;return(0,o.yg)(g,(0,t.A)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"docker-\u90e8\u7f72-rocketmq"},"Docker \u90e8\u7f72 RocketMQ"),(0,o.yg)("p",null,"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528Docker\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355\u8282\u70b9\u5355\u526f\u672c RocketMQ \u670d\u52a1\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002"),(0,o.yg)("admonition",{title:"\u7cfb\u7edf\u8981\u6c42",type:"tip"},(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},"64\u4f4d\u64cd\u4f5c\u7cfb\u7edf"),(0,o.yg)("li",{parentName:"ol"},"64\u4f4d JDK 1.8+"))),(0,o.yg)("h2",{id:"1\u62c9\u53d6rocketmq\u955c\u50cf"},"1.\u62c9\u53d6RocketMQ\u955c\u50cf"),(0,o.yg)("p",null,"\u8fd9\u91cc\u4ee5",(0,o.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/rocketmq/tags"},"dockerhub"),"\u4e0a RocketMQ 5.2.0 \u7248\u672c\u7684\u955c\u50cf\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u90e8\u7f72\u8fc7\u7a0b\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker pull apache/rocketmq:5.2.0\n")),(0,o.yg)("h2",{id:"2\u521b\u5efa\u5bb9\u5668\u5171\u4eab\u7f51\u7edc"},"2.\u521b\u5efa\u5bb9\u5668\u5171\u4eab\u7f51\u7edc"),(0,o.yg)("p",null,"RocketMQ \u4e2d\u6709\u591a\u4e2a\u670d\u52a1\uff0c\u9700\u8981\u521b\u5efa\u591a\u4e2a\u5bb9\u5668\uff0c\u521b\u5efa docker \u7f51\u7edc\u4fbf\u4e8e\u5bb9\u5668\u95f4\u76f8\u4e92\u901a\u4fe1\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker network create rocketmq\n")),(0,o.yg)("h2",{id:"3\u542f\u52a8nameserver"},"3.\u542f\u52a8NameServer"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# \u542f\u52a8 NameServer\ndocker run -d --name rmqnamesrv -p 9876:9876 --network rocketmq apache/rocketmq:5.2.0 sh mqnamesrv\n\n# \u9a8c\u8bc1 NameServer \u662f\u5426\u542f\u52a8\u6210\u529f\ndocker logs -f rmqnamesrv\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u6211\u4eec\u53ef\u4ee5\u770b\u5230 ",(0,o.yg)("strong",{parentName:"p"},"'The Name Server boot success..'\uff0c")," \u8868\u793aNameServer \u5df2\u6210\u529f\u542f\u52a8\u3002")),(0,o.yg)("h2",{id:"4\u542f\u52a8-brokerproxy"},"4.\u542f\u52a8 Broker+Proxy"),(0,o.yg)("p",null,"NameServer \u6210\u529f\u542f\u52a8\u540e\uff0c\u6211\u4eec\u542f\u52a8 Broker \u548c Proxy\u3002"),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-code"},'# \u914d\u7f6e Broker \u7684IP\u5730\u5740\necho "brokerIP1=127.0.0.1" > broker.conf\n\n# \u542f\u52a8 Broker \u548c Proxy\ndocker run -d \\\n--name rmqbroker \\\n--network rocketmq \\\n-p 10912:10912 -p 10911:10911 -p 10909:10909 \\\n-p 8080:8080 -p 8081:8081 \\\n-e "NAMESRV_ADDR=rmqnamesrv:9876" \\\n-v ./broker.conf:/home/rocketmq/rocketmq-5.2.0/conf/broker.conf \\\napache/rocketmq:5.2.0 sh mqbroker --enable-proxy \\\n-c /home/rocketmq/rocketmq-5.2.0/conf/broker.conf\n\n# \u9a8c\u8bc1 Broker \u662f\u5426\u542f\u52a8\u6210\u529f\ndocker exec -it rmqbroker bash -c "tail -n 10 /home/rocketmq/logs/rocketmqlogs/proxy.log"\n'))),(0,o.yg)(i.A,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-code"},'# \u914d\u7f6e Broker \u7684 IP \u5730\u5740\necho "brokerIP1=127.0.0.1" > broker.conf\n\n# \u542f\u52a8 Broker \u548c Proxy\ndocker run -d ^\n--name rmqbroker ^\n--net rocketmq ^\n-p 10912:10912 -p 10911:10911 -p 10909:10909 ^\n-p 8080:8080 -p 8081:8081 \\\n-e "NAMESRV_ADDR=rmqnamesrv:9876" ^\n-v %cd%\\broker.conf:/home/rocketmq/rocketmq-5.2.0/conf/broker.conf ^\napache/rocketmq:5.2.0 sh mqbroker --enable-proxy \\\n-c /home/rocketmq/rocketmq-5.2.0/conf/broker.conf\n\n# \u9a8c\u8bc1 Broker \u662f\u5426\u542f\u52a8\u6210\u529f\ndocker exec -it rmqbroker bash -c "tail -n 10 /home/rocketmq/logs/rocketmqlogs/proxy.log"\n')))),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u6211\u4eec\u53ef\u4ee5\u770b\u5230 ",(0,o.yg)("strong",{parentName:"p"},"'The broker boot success..'\uff0c")," \u8868\u793a Broker \u5df2\u6210\u529f\u542f\u52a8\u3002")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"\u81f3\u6b64\uff0c\u4e00\u4e2a\u5355\u8282\u70b9\u526f\u672c\u7684 RocketMQ \u96c6\u7fa4\u5df2\u7ecf\u90e8\u7f72\u8d77\u6765\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u811a\u672c\u8fdb\u884c\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002")),(0,o.yg)("h2",{id:"5sdk\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1"},"5.SDK\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1"),(0,o.yg)("p",null,"\u5de5\u5177\u6d4b\u8bd5\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 SDK \u6536\u53d1\u6d88\u606f\u3002\u8fd9\u91cc\u4ee5 Java SDK \u4e3a\u4f8b\u4ecb\u7ecd\u4e00\u4e0b\u6d88\u606f\u6536\u53d1\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u4ece ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-clients"},"rocketmq-clients")," \u4e2d\u53c2\u9605\u66f4\u591a\u7ec6\u8282\u3002"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u5728IDEA\u4e2d\u521b\u5efa\u4e00\u4e2aJava\u5de5\u7a0b\u3002")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u5728 ",(0,o.yg)("em",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\u5f15\u5165Java\u4f9d\u8d56\u5e93\uff0c\u5c06 ",(0,o.yg)("inlineCode",{parentName:"p"},"rocketmq-client-java-version")," \u66ff\u6362\u6210 ",(0,o.yg)("a",{href:"https://search.maven.org/search?q=g:org.apache.rocketmq%20AND%20a:rocketmq-client-java"},"\u6700\u65b0\u7684\u7248\u672c"),"."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.rocketmq</groupId>\n    <artifactId>rocketmq-client-java</artifactId>\n    <version>${rocketmq-client-java-version}</version>\n</dependency> \n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u8fdb\u5165broker\u5bb9\u5668\uff0c\u901a\u8fc7mqadmin\u521b\u5efa Topic\u3002"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker exec -it rmqbroker bash\n$ sh mqadmin updatetopic -t TestTopic -c DefaultCluster\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u5728\u5df2\u521b\u5efa\u7684Java\u5de5\u7a0b\u4e2d\uff0c\u521b\u5efa\u53d1\u9001\u666e\u901a\u6d88\u606f\u7a0b\u5e8f\u5e76\u8fd0\u884c\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.rocketmq.client.apis.ClientConfiguration;\nimport org.apache.rocketmq.client.apis.ClientConfigurationBuilder;\nimport org.apache.rocketmq.client.apis.ClientException;\nimport org.apache.rocketmq.client.apis.ClientServiceProvider;\nimport org.apache.rocketmq.client.apis.message.Message;\nimport org.apache.rocketmq.client.apis.producer.Producer;\nimport org.apache.rocketmq.client.apis.producer.SendReceipt;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class ProducerExample {\n    private static final Logger logger = LoggerFactory.getLogger(ProducerExample.class);\n\n    public static void main(String[] args) throws ClientException {\n        // \u63a5\u5165\u70b9\u5730\u5740\uff0c\u9700\u8981\u8bbe\u7f6e\u6210Proxy\u7684\u5730\u5740\u548c\u7aef\u53e3\u5217\u8868\uff0c\u4e00\u822c\u662fxxx:8080;xxx:8081\n        // \u6b64\u5904\u4e3a\u793a\u4f8b\uff0c\u5b9e\u9645\u4f7f\u7528\u65f6\u8bf7\u66ff\u6362\u4e3a\u771f\u5b9e\u7684 Proxy \u5730\u5740\u548c\u7aef\u53e3\n        String endpoint = "localhost:8081";\n        // \u6d88\u606f\u53d1\u9001\u7684\u76ee\u6807Topic\u540d\u79f0\uff0c\u9700\u8981\u63d0\u524d\u521b\u5efa\u3002\n        String topic = "TestTopic";\n        ClientServiceProvider provider = ClientServiceProvider.loadService();\n        ClientConfigurationBuilder builder = ClientConfiguration.newBuilder().setEndpoints(endpoint);\n        ClientConfiguration configuration = builder.build();\n        // \u521d\u59cb\u5316Producer\u65f6\u9700\u8981\u8bbe\u7f6e\u901a\u4fe1\u914d\u7f6e\u4ee5\u53ca\u9884\u7ed1\u5b9a\u7684Topic\u3002\n        Producer producer = provider.newProducerBuilder()\n            .setTopics(topic)\n            .setClientConfiguration(configuration)\n            .build();\n        // \u666e\u901a\u6d88\u606f\u53d1\u9001\u3002\n        Message message = provider.newMessageBuilder()\n            .setTopic(topic)\n            // \u8bbe\u7f6e\u6d88\u606f\u7d22\u5f15\u952e\uff0c\u53ef\u6839\u636e\u5173\u952e\u5b57\u7cbe\u786e\u67e5\u627e\u67d0\u6761\u6d88\u606f\u3002\n            .setKeys("messageKey")\n            // \u8bbe\u7f6e\u6d88\u606fTag\uff0c\u7528\u4e8e\u6d88\u8d39\u7aef\u6839\u636e\u6307\u5b9aTag\u8fc7\u6ee4\u6d88\u606f\u3002\n            .setTag("messageTag")\n            // \u6d88\u606f\u4f53\u3002\n            .setBody("messageBody".getBytes())\n            .build();\n        try {\n            // \u53d1\u9001\u6d88\u606f\uff0c\u9700\u8981\u5173\u6ce8\u53d1\u9001\u7ed3\u679c\uff0c\u5e76\u6355\u83b7\u5931\u8d25\u7b49\u5f02\u5e38\u3002\n            SendReceipt sendReceipt = producer.send(message);\n            logger.info("Send message successfully, messageId={}", sendReceipt.getMessageId());\n        } catch (ClientException e) {\n            logger.error("Failed to send message", e);\n        }\n        // producer.close();\n    }\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u5728\u5df2\u521b\u5efa\u7684Java\u5de5\u7a0b\u4e2d\uff0c\u521b\u5efa\u8ba2\u9605\u666e\u901a\u6d88\u606f\u7a0b\u5e8f\u5e76\u8fd0\u884c\u3002Apache RocketMQ \u652f\u6301",(0,o.yg)("a",{parentName:"p",href:"https://rocketmq.apache.org/zh/docs/featureBehavior/06consumertype"},"SimpleConsumer"),"\u548c",(0,o.yg)("a",{parentName:"p",href:"https://rocketmq.apache.org/zh/docs/featureBehavior/06consumertype"},"PushConsumer"),"\u4e24\u79cd\u6d88\u8d39\u8005\u7c7b\u578b\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u4efb\u610f\u4e00\u79cd\u65b9\u5f0f\u8ba2\u9605\u6d88\u606f\u3002"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'import java.io.IOException;\nimport java.util.Collections;\nimport org.apache.rocketmq.client.apis.ClientConfiguration;\nimport org.apache.rocketmq.client.apis.ClientException;\nimport org.apache.rocketmq.client.apis.ClientServiceProvider;\nimport org.apache.rocketmq.client.apis.consumer.ConsumeResult;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpression;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpressionType;\nimport org.apache.rocketmq.client.apis.consumer.PushConsumer;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class PushConsumerExample {\n    private static final Logger logger = LoggerFactory.getLogger(PushConsumerExample.class);\n\n    private PushConsumerExample() {\n    }\n\n    public static void main(String[] args) throws ClientException, IOException, InterruptedException {\n        final ClientServiceProvider provider = ClientServiceProvider.loadService();\n        // \u63a5\u5165\u70b9\u5730\u5740\uff0c\u9700\u8981\u8bbe\u7f6e\u6210Proxy\u7684\u5730\u5740\u548c\u7aef\u53e3\u5217\u8868\uff0c\u4e00\u822c\u662fxxx:8080;xxx:8081\n        // \u6b64\u5904\u4e3a\u793a\u4f8b\uff0c\u5b9e\u9645\u4f7f\u7528\u65f6\u8bf7\u66ff\u6362\u4e3a\u771f\u5b9e\u7684 Proxy \u5730\u5740\u548c\u7aef\u53e3\n        String endpoints = "localhost:8081";\n        ClientConfiguration clientConfiguration = ClientConfiguration.newBuilder()\n            .setEndpoints(endpoints)\n            .build();\n        // \u8ba2\u9605\u6d88\u606f\u7684\u8fc7\u6ee4\u89c4\u5219\uff0c\u8868\u793a\u8ba2\u9605\u6240\u6709Tag\u7684\u6d88\u606f\u3002\n        String tag = "*";\n        FilterExpression filterExpression = new FilterExpression(tag, FilterExpressionType.TAG);\n        // \u4e3a\u6d88\u8d39\u8005\u6307\u5b9a\u6240\u5c5e\u7684\u6d88\u8d39\u8005\u5206\u7ec4\uff0cGroup\u9700\u8981\u63d0\u524d\u521b\u5efa\u3002\n        String consumerGroup = "YourConsumerGroup";\n        // \u6307\u5b9a\u9700\u8981\u8ba2\u9605\u54ea\u4e2a\u76ee\u6807Topic\uff0cTopic\u9700\u8981\u63d0\u524d\u521b\u5efa\u3002\n        String topic = "TestTopic";\n        // \u521d\u59cb\u5316PushConsumer\uff0c\u9700\u8981\u7ed1\u5b9a\u6d88\u8d39\u8005\u5206\u7ec4ConsumerGroup\u3001\u901a\u4fe1\u53c2\u6570\u4ee5\u53ca\u8ba2\u9605\u5173\u7cfb\u3002\n        PushConsumer pushConsumer = provider.newPushConsumerBuilder()\n            .setClientConfiguration(clientConfiguration)\n            // \u8bbe\u7f6e\u6d88\u8d39\u8005\u5206\u7ec4\u3002\n            .setConsumerGroup(consumerGroup)\n            // \u8bbe\u7f6e\u9884\u7ed1\u5b9a\u7684\u8ba2\u9605\u5173\u7cfb\u3002\n            .setSubscriptionExpressions(Collections.singletonMap(topic, filterExpression))\n            // \u8bbe\u7f6e\u6d88\u8d39\u76d1\u542c\u5668\u3002\n            .setMessageListener(messageView -> {\n                // \u5904\u7406\u6d88\u606f\u5e76\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u3002\n                logger.info("Consume message successfully, messageId={}", messageView.getMessageId());\n                return ConsumeResult.SUCCESS;\n            })\n            .build();\n        Thread.sleep(Long.MAX_VALUE);\n        // \u5982\u679c\u4e0d\u9700\u8981\u518d\u4f7f\u7528 PushConsumer\uff0c\u53ef\u5173\u95ed\u8be5\u5b9e\u4f8b\u3002\n        // pushConsumer.close();\n    }\n}\n')),(0,o.yg)("h2",{id:"6-\u505c\u6b62\u5bb9\u5668"},"6. \u505c\u6b62\u5bb9\u5668"),(0,o.yg)("p",null,"\u5b8c\u6210\u5b9e\u9a8c\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u505c\u6b62\u5bb9\u5668\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# \u505c\u6b62 NameServer \u5bb9\u5668\ndocker stop rmqnamesrv\n\n# \u505c\u6b62 Broker \u5bb9\u5668\ndocker stop rmqbroker\n")))}d.isMDXComponent=!0}}]);