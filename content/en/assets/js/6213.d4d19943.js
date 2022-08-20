(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6213],{6213:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var o=n(7462),s=n(7294),r=n(6010);const l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a={Prism:n(7410).default,theme:l};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),s=e.styles.reduce((function(e,n){var o=n.languages,s=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=i({},e[t],s);e[t]=n})),e}),o);return s.root=n,s.plain=i({},n,{backgroundColor:null}),s};function g(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,s=e.style,r=i({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==s&&(r.style=void 0!==r.style?i({},r.style,s):s),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,s=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===s&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===s&&!o)return r[n[0]];var l=o?{display:"inline-block"}:{},a=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(a))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,s=e.style,r=e.token,l=i({},g(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==s&&(l.style=void 0!==l.style?i({},l.style,s):s),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),c(this,"tokenize",(function(e,t,n,o){var s={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",s);var r=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,s=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],o=[0],s=[e.length],r=0,l=0,a=[],c=[a];l>-1;){for(;(r=o[l]++)<s[l];){var i=void 0,d=t[l],g=n[l][r];if("string"==typeof g?(d=l>0?d:["plain"],i=g):(d=y(d,g.type),g.alias&&(d=y(d,g.alias)),i=g.content),"string"==typeof i){var h=i.split(p),m=h.length;a.push({types:d,content:h[0]});for(var f=1;f<m;f++)u(a),c.push(a=[]),a.push({types:d,content:h[f]})}else l++,t.push(d),n.push(i),o.push(0),s.push(i.length)}l--,t.pop(),n.pop(),o.pop(),s.pop()}return u(a),c}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(s.Component);var m=n(7594),f=n.n(m);const k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var b=n(5350),v=n(941);const j=()=>{const{prism:e}=(0,v.LU)(),{isDarkTheme:t}=(0,b.Z)(),n=e.theme||k,o=e.darkTheme||n;return t?o:n};var x=n(4973);const E="codeBlockContainer_J+bg",T="codeBlockContent_csEI",N="codeBlockTitle_oQzk",C="codeBlock_rtdJ",B="copyButton_M3SB",L="codeBlockLines_1zSZ",S=/{([\d,-]+)}/,P=["js","jsBlock","jsx","python","html"],_={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},O=["highlight-next-line","highlight-start","highlight-end"],Z=function(e){void 0===e&&(e=P);const t=e.map((e=>{const{start:t,end:n}=_[e];return"(?:"+t+"\\s*("+O.join("|")+")\\s*"+n+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function w(e){let{children:t,className:n,metastring:l,title:c}=e;const{prism:i}=(0,v.LU)(),[p,u]=(0,s.useState)(!1),[y,d]=(0,s.useState)(!1);(0,s.useEffect)((()=>{d(!0)}),[]);const g=(0,v.bc)(l)||c,m=(0,s.useRef)(null);let k=[];const b=j(),P=Array.isArray(t)?t.join(""):t;if(l&&S.test(l)){const e=l.match(S)[1];k=f()(e).filter((e=>e>0))}let _=null==n?void 0:n.replace(/language-/,"");!_&&i.defaultLanguage&&(_=i.defaultLanguage);let O=P.replace(/\n$/,"");if(0===k.length&&void 0!==_){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return Z(["js","jsBlock"]);case"jsx":case"tsx":return Z(["js","jsBlock","jsx"]);case"html":return Z(["js","jsBlock","html"]);case"python":case"py":return Z(["python"]);default:return Z()}})(_),n=P.replace(/\n$/,"").split("\n");let o;for(let s=0;s<n.length;){const r=s+1,l=n[s].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=r+",";break;case"highlight-start":o=r;break;case"highlight-end":e+=o+"-"+(r-1)+","}n.splice(s,1)}else s+=1}k=f()(e),O=n.join("\n")}const w=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),l&&(r.removeAllRanges(),r.addRange(l)),s&&s.focus()}(O),u(!0),setTimeout((()=>u(!1)),2e3)};return s.createElement(h,(0,o.Z)({},a,{key:String(y),theme:b,code:O,language:_}),(e=>{let{className:t,style:n,tokens:l,getLineProps:a,getTokenProps:c}=e;return s.createElement("div",{className:E},g&&s.createElement("div",{style:n,className:N},g),s.createElement("div",{className:(0,r.Z)(T,_)},s.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,C,"thin-scrollbar"),style:n},s.createElement("code",{className:L},l.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return k.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),s.createElement("span",(0,o.Z)({key:t},n),e.map(((e,t)=>s.createElement("span",(0,o.Z)({key:t},c({token:e,key:t}))))))})))),s.createElement("button",{ref:m,type:"button","aria-label":(0,x.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,r.Z)(B,"clean-btn"),onClick:w},p?s.createElement(x.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):s.createElement(x.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);