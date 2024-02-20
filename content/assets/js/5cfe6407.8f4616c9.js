"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[641],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,g=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return t?a.createElement(g,c(c({ref:n},u),{},{components:t})):a.createElement(g,c({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<r;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},65912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(58168),o=(t(96540),t(15680));const r={},c="RocketMQ Connect in Action 5",s={unversionedId:"connect/08RocketMQ  Connect In Action5-ES",id:"connect/08RocketMQ  Connect In Action5-ES",title:"RocketMQ Connect in Action 5",description:"Elasticsearch Source -> RocketMQ Connect ->  Elasticsearch Sink",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/10-connect/08RocketMQ  Connect In Action5-ES.md",sourceDirName:"10-connect",slug:"/connect/08RocketMQ  Connect In Action5-ES",permalink:"/docs/4.x/connect/08RocketMQ  Connect In Action5-ES",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/10-connect/08RocketMQ  Connect In Action5-ES.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect in Action 4",permalink:"/docs/4.x/connect/07RocketMQ Connect In Action4"},next:{title:"How to Contribute",permalink:"/docs/4.x/contributionGuide/01how-to-contribute"}},i={},l=[{value:"preparatory work",id:"preparatory-work",level:2},{value:"Start RocketMQ",id:"start-rocketmq",level:3},{value:"Building the Connector Runtime",id:"building-the-connector-runtime",level:3},{value:"Build Elasticsearch Connector Plugin",id:"build-elasticsearch-connector-plugin",level:3},{value:"Run Connector Worker in Standalone Mode",id:"run-connector-worker-in-standalone-mode",level:3},{value:"Set Up Elasticsearch Services",id:"set-up-elasticsearch-services",level:3},{value:"Set Up Kibana Services",id:"set-up-kibana-services",level:3},{value:"Write Test Data to the Source Elasticsearch",id:"write-test-data-to-the-source-elasticsearch",level:3},{value:"Bulk Write Test Data",id:"bulk-write-test-data",level:4},{value:"Query Data",id:"query-data",level:4},{value:"Delete Data",id:"delete-data",level:4},{value:"Start Connector",id:"start-connector",level:2},{value:"Start Elasticsearch Source Connector",id:"start-elasticsearch-source-connector",level:3},{value:"Start Elasticsearch Sink Connector",id:"start-elasticsearch-sink-connector",level:3}],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"rocketmq-connect-in-action-5"},"RocketMQ Connect in Action 5"),(0,o.yg)("p",null,"Elasticsearch Source -> RocketMQ Connect ->  Elasticsearch Sink"),(0,o.yg)("h2",{id:"preparatory-work"},"preparatory work"),(0,o.yg)("h3",{id:"start-rocketmq"},"Start RocketMQ"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,o.yg)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,o.yg)("li",{parentName:"ol"},"Maven 3.2.x+;"),(0,o.yg)("li",{parentName:"ol"},"Start RocketMQ. Either ",(0,o.yg)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/4.x/"},"RocketMQ 4.x")," or\n",(0,o.yg)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quickStart/01quickstart/"},"RocketMQ 5.x")," 5.x version can be used;"),(0,o.yg)("li",{parentName:"ol"},"Test RocketMQ message sending and receiving using the tool.")),(0,o.yg)("p",null,"Here, use the environment variable NAMESRV_ADDR to inform the tool client of the NameServer address of RocketMQ as localhost:9876."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"#$ cd distribution/target/rocketmq-4.9.7/rocketmq-4.9.7\n$ cd distribution/target/rocketmq-5.1.4/rocketmq-5.1.4\n\n$ export NAMESRV_ADDR=localhost:9876\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),": RocketMQ has the feature of automatically creating Topic and Group. When sending or subscribing to messages,\nif the corresponding Topic or Group does not exist, RocketMQ will automatically create them. Therefore,\nthere is no need to create Topic and Group in advance."),(0,o.yg)("p",null,"Here's the English translation of the content:"),(0,o.yg)("h3",{id:"building-the-connector-runtime"},"Building the Connector Runtime"),(0,o.yg)("p",null,"Clone the repository and build the RocketMQ Connect project:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/rocketmq-connect.git\n\ncd rocketmq-connect\n\nexport RMQ_CONNECT_HOME=`pwd`\n\nmvn -Prelease-connect -Dmaven.test.skip=true clean install -U\n")),(0,o.yg)("h3",{id:"build-elasticsearch-connector-plugin"},"Build Elasticsearch Connector Plugin"),(0,o.yg)("p",null,"Build the Elasticsearch RocketMQ Connector plugin:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cd $RMQ_CONNECT_HOME/connectors/rocketmq-connect-elasticsearch/\n\nmvn clean package -Dmaven.test.skip=true\n")),(0,o.yg)("p",null,"Copy the compiled Elasticsearch RocketMQ Connector plugin JAR file into the plugin directory used by the runtime:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /Users/YourUsername/rocketmqconnect/connector-plugins\n\ncp target/rocketmq-connect-elasticsearch-1.0.0-jar-with-dependencies.jar /Users/YourUsername/rocketmqconnect/connector-plugins\n")),(0,o.yg)("h3",{id:"run-connector-worker-in-standalone-mode"},"Run Connector Worker in Standalone Mode"),(0,o.yg)("p",null,"Modify the ",(0,o.yg)("inlineCode",{parentName:"p"},"connect-standalone.conf")," file to configure the RocketMQ connection\naddress and other information."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cd $RMQ_CONNECT_HOME/distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nvim conf/connect-standalone.conf\n")),(0,o.yg)("p",null,"Example configuration information is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'workerId=standalone-worker\nstorePathRootDir=/Users/YourUsername/rocketmqconnect/storeRoot\n\n## Http port for user to access REST API\nhttpPort=8082\n\n# Rocketmq namesrvAddr\nnamesrvAddr=localhost:9876\n\n# RocketMQ acl\naclEnable=false\n#accessKey=rocketmq\n#secretKey=12345678\n\nclusterName="DefaultCluster"\n\n# Plugin path for loading Source/Sink Connectors\npluginPaths=/Users/YourUsername/rocketmqconnect/connector-plugins\n')),(0,o.yg)("p",null,"In standalone mode, RocketMQ Connect persistently stores the synchronization checkpoint information\nin the local file directory specified by storePathRootDir."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"storePathRootDir=/Users/YourUsername/rocketmqconnect/storeRoot")),(0,o.yg)("p",null,"If you want to reset the synchronization checkpoint, delete the persistence files:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"rm -rf /Users/YourUsername/rocketmqconnect/storeRoot/*\n")),(0,o.yg)("p",null,"To start Connector Worker in standalone mode:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"sh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n")),(0,o.yg)("h3",{id:"set-up-elasticsearch-services"},"Set Up Elasticsearch Services"),(0,o.yg)("p",null,"Elasticsearch is an open-source search and analytics engine."),(0,o.yg)("p",null,"We'll use two separate Docker instances of Elasticsearch to serve as our source and destination databases:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'docker pull docker.elastic.co/elasticsearch/elasticsearch:7.15.1\n\ndocker run --name es1 -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e "ES_JAVA_OPTS=-Xms1g -Xmx1g" \\  \n-v /Users/YourUsername/rocketmqconnect/es/es1_data:/usr/share/elasticsearch/data \\  \n-d docker.elastic.co/elasticsearch/elasticsearch:7.15.1 \n\ndocker run --name es2 -p 9201:9200 -p 9301:9300 -e "discovery.type=single-node" -e "ES_JAVA_OPTS=-Xms1g -Xmx1g" \\ \n-v /Users/YourUsername/rocketmqconnect/es/es2_data:/usr/share/elasticsearch/data \\ \n-d docker.elastic.co/elasticsearch/elasticsearch:7.15.1\n')),(0,o.yg)("p",null,"Explanation of Docker commands:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--name es2"),": Specifies a name for the container, e.g., ",(0,o.yg)("inlineCode",{parentName:"li"},"es2"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-p 9201:9200 -p 9301:9300"),": Maps ports 9200 and 9300 on the Elasticsearch container to host ports 9201 and 9301 so that the Elasticsearch service can be accessed via the host."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-e discovery.type=single-node"),": configures Elasticsearch to work on a single node without discovering other nodes in a cluster, suitable for single-server deployment."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-v /Users/YourUsername/rocketmqconnect/es/es2_data:/usr/share/elasticsearch/data"),": Mounts a directory on the host to ",(0,o.yg)("inlineCode",{parentName:"li"},"/usr/share/elasticsearch/data")," within the container for persistent storage of Elasticsearch data.")),(0,o.yg)("p",null,"This runs a custom-configured instance of Elasticsearch with persistent data storage on a container accessible through port 9200 on the host machine, making it useful for development or testing environments on a local machine."),(0,o.yg)("p",null,"View the Elasticsearch logs:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker logs -f es1\n\ndocker logs -f es2\n")),(0,o.yg)("p",null,"Verify that Elasticsearch has started successfully:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"# Check Elasticsearch instance 1\ncurl -XGET http://localhost:9200\n\n# Check Elasticsearch instance 2\ncurl -XGET http://localhost:9201\n")),(0,o.yg)("p",null,"A successful connection and correct operation will result in JSON responses containing information\nabout Elasticsearch and its version number."),(0,o.yg)("h3",{id:"set-up-kibana-services"},"Set Up Kibana Services"),(0,o.yg)("p",null,"Kibana is an open-source data visualization tool that allows users to interactively explore\nand understand data stored within Elasticsearch clusters. It offers rich features such as charts, graphs, and dashboards."),(0,o.yg)("p",null,"For convenience, we'll set up two separate instances of Kibana in Docker and link them to\nour previously established Elasticsearch containers using the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker pull docker.elastic.co/kibana/kibana:7.15.1\n\ndocker run --name kibana1 --link es1:elasticsearch -p 5601:5601 -d docker.elastic.co/kibana/kibana:7.15.1\n\ndocker run --name kibana2 --link es2:elasticsearch -p 5602:5601 -d docker.elastic.co/kibana/kibana:7.15.1\n")),(0,o.yg)("p",null,"Explanation of Docker Commands:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--name kibana2"),": Assigns a name to the new container, e.g., kibana2"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--link es2:elasticsearch"),": Links the container to another named Elasticsearch instance (in this case, 'es2'). This enables communication between Kibana and Elasticsearch."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-p 5602:5601"),": Maps Kibana's default port (5601) to the same port on the host machine to make it accessible through the browser."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-d"),": runs the Docker container in detached mode.")),(0,o.yg)("p",null,"Once the container has launched, you can monitor its log output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker logs -f kibana1\n\ndocker logs -f kibana2\n")),(0,o.yg)("p",null,"To access Kibana console pages, simply visit following addresses in your browser"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"kibana1: http://localhost:5601"),(0,o.yg)("li",{parentName:"ul"},"kibana2\uff1ahttp://localhost:5602")),(0,o.yg)("p",null,"If they load correctly, it indicates successful startup of the respective Kibana instances."),(0,o.yg)("h3",{id:"write-test-data-to-the-source-elasticsearch"},"Write Test Data to the Source Elasticsearch"),(0,o.yg)("p",null,"Kibana's Dev Tools can help you interact and operate directly with Elasticsearch in Kibana.\nYou can execute various queries and operations, analyze and understand the returned data.\nRefer to the documentation  ",(0,o.yg)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/kibana/8.9/console-kibana.html"},"console-kibana"),"."),(0,o.yg)("h4",{id:"bulk-write-test-data"},"Bulk Write Test Data"),(0,o.yg)("p",null,"Access the Kibana1 console through the browser, find Dev Tools from the left menu,\nand enter the following commands on the page to write test data:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'POST /_bulk\n{ "index" : { "_index" : "connect_es" } }\n{ "id": "1", "field1": "value1", "field2": "value2" }\n{ "index" : { "_index" : "connect_es" } }\n{ "id": "2", "field1": "value3", "field2": "value4" }\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),":"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"connect_es: The index name for the data."),(0,o.yg)("li",{parentName:"ul"},"id/field1/field2: These are field names, and 1, value1, value2 represent the values for the fields.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),": There is a limitation in ",(0,o.yg)("inlineCode",{parentName:"p"},"rocketmq-connect-elasticsearch"),", which requires a field in the data that\ncan be used for >= comparison operations (string or number). This field will be used to record the\nsynchronization checkpoint. In the above example, the ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," field is a globally unique, incrementing numerical field."),(0,o.yg)("h4",{id:"query-data"},"Query Data"),(0,o.yg)("p",null,"To query data within an index, use the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'GET /connect_es/_search\n{\n  "size": 100\n}\n')),(0,o.yg)("p",null,"If there is no data available, the response will be:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n  "error" : {\n    ... \n    "type" : "index_not_found_exception",\n    "reason" : "no such index [connect_es]",\n    "resource.type" : "index_or_alias",\n    "resource.id" : "connect_es",\n    "index_uuid" : "_na_",\n    "index" : "connect_es"\n  },\n  "status" : 404\n}\n')),(0,o.yg)("p",null,"If there is data available, the response will be:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n  ...\n  "hits" : {\n    "total" : {\n      "value" : 2,\n      "relation" : "eq"\n    },\n    "max_score" : 1.0,\n    "hits" : [\n      {\n        "_index" : "connect_es",\n        "_type" : "_doc",\n        "_id" : "_dx49osBb46Z9cN4hYCg",\n        "_score" : 1.0,\n        "_source" : {\n          "id" : "1",\n          "field1" : "value1",\n          "field2" : "value2"\n        }\n      },\n      {\n        "_index" : "connect_es",\n        "_type" : "_doc",\n        "_id" : "_tx49osBb46Z9cN4hYCg",\n        "_score" : 1.0,\n        "_source" : {\n          "id" : "2",\n          "field1" : "value3",\n          "field2" : "value4"\n        }\n      }\n    ]\n  }\n}\n\n')),(0,o.yg)("h4",{id:"delete-data"},"Delete Data"),(0,o.yg)("p",null,"If you need to delete data within an index due to repeated testing or other reasons, you can use the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"DELETE /connect_es\n")),(0,o.yg)("h2",{id:"start-connector"},"Start Connector"),(0,o.yg)("h3",{id:"start-elasticsearch-source-connector"},"Start Elasticsearch Source Connector"),(0,o.yg)("p",null,"Run the following command to start the ES source connector. The connector will connect to Elasticsearch\nand read document data from the connect_es index. It will parse the Elasticsearch document data and\npackage it into a generic ConnectRecord object, which will be sent to a RocketMQ topic for consumption by the Sink Connector."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/elasticsearchSourceConnector -d  \'{\n  "connector.class":"org.apache.rocketmq.connect.elasticsearch.connector.ElasticsearchSourceConnector",\n    "elasticsearchHost":"localhost",\n    "elasticsearchPort":9200,\n    "index":{\n        "connect_es": {\n            "primaryShards":1,\n            "id":1\n        }\n    },\n    "max.tasks":2,\n    "connect.topicname":"ConnectEsTopic",\n    "value.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n    "key.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),": The startup command specifies that the source ES should synchronize the connect_es index,\nand the incrementing field in the index is id. Data will be fetched starting from id=1."),(0,o.yg)("p",null,"If the curl request returns status:200, it indicates a successful creation, and the sample response will be:"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'{"status":200,"body":{"connector.class":"...')),(0,o.yg)("p",null,"If you see the following logs, it indicates that the file source connector has started successfully."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Start connector elasticsearchSourceConnector and set target state STARTED successed!!")),(0,o.yg)("h3",{id:"start-elasticsearch-sink-connector"},"Start Elasticsearch Sink Connector"),(0,o.yg)("p",null,"Run the following command to start the ES sink connector. The connector will subscribe to data from\nthe RocketMQ topic and consume it. It will convert each message into document data and write it to the destination ES."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/elasticsearchSinkConnector -d \'{\n  "connector.class":"org.apache.rocketmq.connect.elasticsearch.connector.ElasticsearchSinkConnector",\n    "elasticsearchHost":"localhost",\n    "elasticsearchPort":9201,\n    "max.tasks":2,\n    "connect.topicnames":"ConnectEsTopic",\n    "value.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n    "key.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),": The startup command specifies the address and port of the destination ES, which corresponds to\nthe previously started ES2 in Docker."),(0,o.yg)("p",null,"If the curl request returns status:200, it indicates a successful creation, and the sample response will be:"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'{"status":200,"body":{"connector.class":"...')),(0,o.yg)("p",null,"If you see the following logs, it indicates that the file source connector has started successfully:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"tail -100f ~/logs/rocketmqconnect/connect_runtime.log\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Start connector elasticsearchSinkConnector and set target state STARTED successed!!")),(0,o.yg)("p",null,"To check if the sink connector has written data to the destination ES index:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Access the Kibana2 console address in the browser: http://localhost:5602"),(0,o.yg)("li",{parentName:"ol"},"In the Kibana2 Dev Tools page, query the data within the index. If it matches the data in the source ES1, it means the connector is running properly.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'GET /connect_es/_search\n{\n  "size": 100\n}\n')))}p.isMDXComponent=!0}}]);