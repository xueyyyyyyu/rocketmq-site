"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[761],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},i="JVM/OS Configuration",s={unversionedId:"bestPractice/04JVMOS",id:"version-5.0/bestPractice/04JVMOS",title:"JVM/OS Configuration",description:"This section focuses on system (JVM/OS) related configuration.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/06-bestPractice/04JVMOS.md",sourceDirName:"06-bestPractice",slug:"/bestPractice/04JVMOS",permalink:"/docs/bestPractice/04JVMOS",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/06-bestPractice/04JVMOS.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Access Control",permalink:"/docs/bestPractice/03access"},next:{title:"Consistent Subscription Relationship",permalink:"/docs/bestPractice/05subscribe"}},l={},c=[{value:"1.JVM Options",id:"1jvm-options",level:2},{value:"2.Linux Kernel Parameters",id:"2linux-kernel-parameters",level:2}],m={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"jvmos-configuration"},"JVM/OS Configuration"),(0,a.yg)("p",null,"This section focuses on system (JVM/OS) related configuration."),(0,a.yg)("h2",{id:"1jvm-options"},"1.JVM Options"),(0,a.yg)("p",null,"The latest release of JDK 1.8 is recommended. Prevent the JVM from adjusting the heap size for better performance by setting the same Xms and Xmx values. The production JVM configuration is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"-server -Xms8g -Xmx8g -Xmn4g \n")),(0,a.yg)("p",null,"When the JVM is 8-byte aligned by default, it is recommended that the maximum heap memory not exceed 32 G. Otherwise, the pointer compression technology of the JVM will be affected and memory will be wasted."),(0,a.yg)("p",null,"If you don't care about the startup time of the RocketMQ Broker, a better option is to \"pre-touch\" the Java heap to ensure that every page will be allocated during JVM initialization. Those who don't care about startup time can enable it:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"-XX:+AlwaysPreTouch  \n")),(0,a.yg)("p",null,"Disabling bias locking may reduce JVM pauses:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"-XX:-UseBiasedLocking   \n")),(0,a.yg)("p",null,"Garbage collection, we recommend using the G1 collector that came with JDK 1.8:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"-XX:+UseG1GC \n-XX:G1HeapRegionSize=16m   \n-XX:G1ReservePercent=25 \n-XX:InitiatingHeapOccupancyPercent=30\n")),(0,a.yg)("p",null,"These GC options may seem aggressive, but they proved to perform well in our production environment."),(0,a.yg)("p",null,"Also, don't set the value of -XX:MaxGCPauseMillis too small, or the JVM will use a small young generation to achieve this goal, which will result in very frequent minor GCS, so rolling GC log files are recommended:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"-XX:+UseGCLogFileRotation   \n-XX:NumberOfGCLogFiles=5 \n-XX:GCLogFileSize=30m\n")),(0,a.yg)("p",null,"If writing to GC files increases the agent's latency, consider redirecting GC log files to the in-memory file system:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"-Xloggc:/dev/shm/mq_gc_%p.log123   \n")),(0,a.yg)("h2",{id:"2linux-kernel-parameters"},"2.Linux Kernel Parameters"),(0,a.yg)("p",null,"The os.sh script lists many kernel parameters in the bin folder, which can be changed slightly and then used for production purposes. Note the following parameters, for more details, see ",(0,a.yg)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/sysctl/vm.txt"},"Documentation")," in /proc/sys/vm/*"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"vm.extra_free_kbytes"),"  The VM is told to keep extra available memory between the threshold at which background reclamation (kswapd) starts and the threshold at which it is directly reclaimed (by allocating processes). RocketMQ uses this parameter to avoid long delays in memory allocation. (depending on the kernel version)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"vm.min_free_kbytes"),"  If it is set below 1024 KB, it will subtly break the system, and the system is prone to deadlock under high load."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"vm.max_map_count"),"  Limits the maximum number of memory mapped regions that a process can have. RocketMQ will load CommitLog and ConsumeQueue using MMAP, so it is recommended to set this parameter to a large value."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"vm.swappiness"),"  Defines how aggressively the kernel swaps memory pages. Higher values increase aggression, lower values decrease exchange volume. A value of 10 is recommended to avoid exchange delays."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"File descriptor limits"),"  RocketMQ needs to open file descriptors for files (CommitLog and ConsumeQueue) and network connections. We recommend setting the file descriptor value to 655350."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Performance_Tuning_Guide/ch06s04s02.html"},"Disk scheduler"),"  RocketMQ recommends the use of an I/O deadline scheduler, which attempts to provide a guaranteed delay for requests.")))}p.isMDXComponent=!0}}]);