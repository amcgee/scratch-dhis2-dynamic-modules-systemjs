System.register(["react"],(function(e,t){var r={};return{setters:[function(e){r.default=e.default,r.useCallback=e.useCallback,r.useContext=e.useContext,r.useEffect=e.useEffect,r.useRef=e.useRef,r.useState=e.useState}],execute:function(){e((()=>{"use strict";var e={117:(e,t,r)=>{r.r(t),r.d(t,{CustomDataProvider:()=>D,DataMutation:()=>_,DataProvider:()=>q,DataQuery:()=>Q,Provider:()=>ee,useAlert:()=>Y,useAlerts:()=>K,useConfig:()=>o,useDataEngine:()=>T,useDataMutation:()=>Z,useDataQuery:()=>F});var a=r(297);const n=a.default.createContext({baseUrl:"..",apiVersion:32}),o=()=>(0,a.useContext)(n),s=({config:e,children:t})=>a.default.createElement(n.Provider,{value:e},t);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const l=({resource:e,id:t,data:r,params:a},n)=>({resource:e,id:"function"==typeof t?t(n):t,data:"function"==typeof r?r(n):r,params:"function"==typeof a?a(n):a});class p extends Error{constructor(e){super("Invalid query\n".concat(e.map((e=>" - "+e)).join("\n"))),i(this,"type","invalid-query"),i(this,"details",void 0),this.details=e}}const d=["resource","id","params","data"],f=["read","create","update","replace","delete"],m=(e,t)=>{if(!f.includes(e))return["Unknown query or mutation type ".concat(e)];if("object"!=typeof t)return["A query or mutation must be a javascript object"];const r=[];return t.resource&&"string"==typeof t.resource||r.push("Property resource must be a string"),"create"===e&&t.id&&r.push("Mutation type 'create' does not support property 'id'"),t.id&&"string"!=typeof t.id&&r.push("Property id must be a string"),t.params&&"object"!=typeof t.params&&r.push("Property params must be an object"),"delete"===e&&t.data&&r.push("Mutation type 'delete' does not support property 'data'"),Object.keys(t).filter((e=>!d.includes(e))).forEach((e=>{r.push("Property ".concat(e," is not supported"))})),r};class h{constructor(e){i(this,"link",void 0),this.link=e}query(e,{variables:t={},signal:r,onComplete:a,onError:n}={}){const o=Object.keys(e),s=o.map((t=>e[t])).map((e=>l(e,t)));return((e,t=[])=>{if(t.length!==e.length)for(let r=t.length;r<e.length;++r)t.push("query#"+r);const r=e.reduce(((e,r,a)=>e.concat(m("read",r).map((e=>"[".concat(t[a],"] ").concat(e))))),[]);if(r.length)throw new p(r)})(s,o),Promise.all(s.map((e=>this.link.executeResourceQuery("read",e,{signal:r})))).then((e=>{const t=((e,t)=>e.reduce(((e,r,a)=>(e[t[a]]=r,e)),{}))(e,o);return a&&a(t),t})).catch((e=>{throw n&&n(e),e}))}mutate(e,{variables:t={},signal:r,onComplete:a,onError:n}={}){const o=l(e,t),s=(e=>"update"===e.type?e.partial?"update":"replace":e.type)(e);return((e,t)=>{const r=m(e,t);if(r.length)throw new p(r)})(s,o),this.link.executeResourceQuery(s,o,{signal:r}).then((e=>(a&&a(e),e))).catch((e=>{throw n&&n(e),e}))}}class y extends Error{constructor({message:e,type:t,details:r={}}){super(e),i(this,"type",void 0),i(this,"details",void 0),this.type=t,this.details=r}}class b{constructor(e,{failOnMiss:t=!0,loadForever:r=!1}={}){i(this,"failOnMiss",void 0),i(this,"loadForever",void 0),i(this,"data",void 0),this.data=e,this.failOnMiss=t,this.loadForever=r}async executeResourceQuery(e,t,r){if(this.loadForever)return new Promise((()=>{}));const a=this.data[t.resource];if(!a){if(this.failOnMiss)throw new Error("No data provided for resource type ".concat(t.resource,"!"));return Promise.resolve(null)}switch(typeof a){case"string":case"number":case"boolean":case"object":return a;case"function":{const n=await a(e,t,r);if(void 0===n&&this.failOnMiss)throw new Error("The custom function for resource ".concat(t.resource," must always return a value but returned ").concat(n));return n||null}}}}const g=async e=>{if(401===e.status||403===e.status||409===e.status){let t,r={};try{r=await e.json(),t=r.message}catch(e){}throw t||(t=401===e.status?"Unauthorized":"Forbidden"),new y({type:"access",message:t,details:r})}if(e.status<200||e.status>=400){const t="An unknown error occurred - ".concat(e.statusText," (").concat(e.status,")");let r={};try{r=await e.json()}catch(e){}throw new y({type:"unknown",message:t,details:r})}return e},v=(...e)=>e.filter((e=>!!e)).map((e=>e.replace(/^\/+|\/+$/g,""))).join("/");var w=Object.freeze({__proto__:null,isReplyToMessageConversation:(e,{resource:t})=>"create"===e&&/^messageConversations\/[a-zA-Z0-9]{11}$/.test(t),isCreateFeedbackMessage:(e,{resource:t})=>"create"===e&&"messageConversations/feedback"===t,isCreateOrUpdateInterpretation:(e,{resource:t,id:r})=>{if("create"!==e&&"replace"!==e)return!1;let a;if("replace"===e&&r){a=/^interpretations\/(?:reportTable|chart|visualization|map|eventReport|eventChart|dataSetReport)$/;const e=/^[a-zA-Z0-9]{11}$/;return a.test(t)&&e.test(r)}return a=/^interpretations\/(?:reportTable|chart|visualization|map|eventReport|eventChart|dataSetReport)\/[a-zA-Z0-9]{11}$/,a.test(t)},isCommentOnInterpretation:(e,{resource:t})=>"create"===e&&/^interpretations\/[a-zA-Z0-9]{11}\/comments$/.test(t),isInterpretationCommentUpdate:(e,{resource:t,id:r})=>{if("replace"!==e)return!1;if(r){const e=/^[a-zA-Z0-9]{11}\/comments\/[a-zA-Z0-9]{11}$/,a=/^[a-zA-Z0-9]{11}$/,n=/^interpretations\/[a-zA-Z0-9]{11}\/comments$/;return"interpretations"===t&&e.test(r)||n.test(t)&&a.test(r)}return/^interpretations\/[a-zA-Z0-9]{11}\/comments\/[a-zA-Z0-9]{11}$/.test(t)},isAddOrUpdateSystemOrUserSetting:(e,{resource:t})=>"create"===e&&/^(?:systemSettings|userSettings)\/[a-zA-Z]{4,}$/.test(t),addOrUpdateConfigurationProperty:(e,{resource:t})=>{const r=t.match(/^(configuration)\/([a-zA-Z]{1,50})$/);return"create"===e&&!!r&&"corsWhitelist"!==r[2]},isMetadataPackageInstallation:(e,{resource:t})=>"create"===e&&"synchronization/metadataPull"===t}),O=Object.freeze({__proto__:null,isFileResourceUpload:(e,{resource:t})=>"create"===e&&"fileResources"===t,isMessageConversationAttachment:(e,{resource:t})=>"create"===e&&"messageConversations/attachments"===t,isStaticContentUpload:(e,{resource:t})=>"create"===e&&/^staticContent\/(?:logo_banner|logo_front)$/.test(t),isAppInstall:(e,{resource:t})=>"create"===e&&"apps"===t,isSvgConversion:(e,{resource:t})=>"create"===e&&("svg.png"===t||"svg.pdf"===t)});const j=e=>{if(e&&"multipart/form-data"!==e)return{"Content-Type":e}},C=(e,{data:t})=>{if(void 0!==t)return"application/json"===e?JSON.stringify(t):"multipart/form-data"===e?(e=>{const t=Object.entries(e);if(0===t.length)throw new Error("Could not convert data to FormData: object does not have own enumerable string-keyed properties");return t.reduce(((e,[t,r])=>(e.append(t,r),e)),new FormData)})(t):t},P=e=>{switch(e){case"create":return"POST";case"read":return"GET";case"update":return"PATCH";case"replace":return"PUT";case"delete":return"DELETE"}},E=e=>{if(Array.isArray(e))return e.map(E).join(",");if("string"==typeof e)return encodeURIComponent(e);if("number"==typeof e||"boolean"==typeof e)return String(e);if("object"==typeof e)throw new Error("Object parameter mappings not yet implemented");throw new Error("Unknown parameter type")},k="action::",x=(e,{resource:t,id:r,params:a={}})=>{const n=(e=>e.startsWith(k))(t)?(e=>v("dhis-web-commons","".concat(e.substr(k.length),".action")))(t):v(e,t,r);return Object.keys(a).length?"".concat(n,"?").concat((e=>(e=>Object.keys(e).reduce(((t,r)=>{const a=e[r];return"filter"===r&&Array.isArray(a)?a.forEach((e=>{t.push({key:"filter",value:e})})):null!==e[r]&&void 0!==e[r]&&t.push({key:r,value:e[r]}),t}),[]))(e).map((({key:e,value:t})=>"".concat(encodeURIComponent(e),"=").concat(E(t)))).join("&"))(a)):n};class S{constructor({baseUrl:e,apiVersion:t}){i(this,"apiPath",void 0),i(this,"baseUrl",void 0),i(this,"apiVersion",void 0),this.baseUrl=e,this.apiVersion=t,this.apiPath=v("api",String(t))}fetch(e,t){return function(e,t={}){return fetch(e,u(u({},t),{},{credentials:"include",headers:u({"X-Requested-With":"XMLHttpRequest",Accept:"application/json"},t.headers)})).catch((e=>{throw new y({type:"network",message:"An unknown network error occurred",details:e})})).then(g).then((async e=>{const t=(e=>e?e.split(";")[0].trim().toLowerCase():"")(e.headers.get("Content-Type"));return"application/json"===t?await e.json():/^text\/[a-z0-9.-]+$/.test(t)?await e.text():await e.blob()}))}(v(this.baseUrl,e),t)}executeResourceQuery(e,t,{signal:r}){return this.fetch(x(this.apiPath,t),((e,t,r)=>{const a=((e,t)=>t.data?((e,t)=>Object.values(w).some((r=>r(e,t))))(e,t)?"text/plain":((e,t)=>Object.values(O).some((r=>r(e,t))))(e,t)?"multipart/form-data":"application/json":null)(e,t);return{method:P(e),body:C(a,t),headers:j(a),signal:r}})(e,t,r))}}const A=new class{constructor(e){i(this,"errorMessage",void 0),this.errorMessage=e}executeResourceQuery(){return console.error(this.errorMessage),Promise.reject(this.errorMessage)}}("DHIS2 data context must be initialized, please ensure that you include a <DataProvider> in your application"),z={engine:new h(A)},R=a.default.createContext(z),D=({children:e,data:t,options:r})=>{const n=new b(t,r),o={engine:new h(n)};return a.default.createElement(R.Provider,{value:o},e)},M=(e,{warn:t=!1,name:r="input"}={})=>{const n=(0,a.useRef)(e),[o,s]=(0,a.useState)((()=>n.current));return(0,a.useEffect)((()=>{t&&n.current!==e&&console.warn("The ".concat(r," should be static, don't create it within the render loop!"))}),[t,e,n,r]),[o,s]},U=({execute:e,variables:t,singular:r,immediate:n,onComplete:o,onError:s})=>{const[i]=M(e),[c,l]=(0,a.useState)({called:!!n,loading:!!n}),p=(0,a.useRef)(t),d=(0,a.useRef)([]),f=(0,a.useCallback)((()=>{d.current.forEach((e=>e.abort())),d.current=[]}),[]),m=(0,a.useCallback)((()=>{f(),l((e=>({called:e.called,loading:!1,error:new y({type:"aborted",message:"Aborted"})})))}),[f]),h=(0,a.useCallback)(((e={})=>{l((e=>e.called&&e.loading?e:{called:!0,loading:!0})),r&&f();const t=new AbortController;d.current.push(t),p.current=u(u({},p.current),e);const a={variables:p.current,signal:t.signal,onComplete:o,onError:s};return i(a).then((e=>t.signal.aborted?new Promise((()=>{})):(l({called:!0,loading:!1,data:e}),e))).catch((e=>(t.signal.aborted||l({called:!0,loading:!1,error:e}),new Promise((()=>{})))))}),[f,o,s,r,i]);return(0,a.useEffect)((()=>(n&&h(),f)),[]),u({refetch:h,abort:m},c)},T=()=>(0,a.useContext)(R).engine,$={},Z=(e,{onComplete:t,onError:r,variables:n=$,lazy:o=!0}={})=>{const s=T(),[i]=M(e,{warn:!0,name:"mutation"}),c=(0,a.useCallback)((e=>s.mutate(i,e)),[s,i]),{refetch:u,called:l,loading:p,error:d,data:f}=U({execute:c,variables:n,singular:!1,immediate:!o,onComplete:t,onError:r});return[u,{engine:s,called:l,loading:p,error:d,data:f}]},_=({mutation:e,onComplete:t,onError:r,variables:a,children:n})=>n(Z(e,{onComplete:t,onError:r,variables:a})),q=e=>{const t=u(u({},o()),e),r=new S(t),n={engine:new h(r)};return a.default.createElement(R.Provider,{value:n},e.children)},I={},F=(e,{onComplete:t,onError:r,variables:n=I,lazy:o=!1}={})=>{const s=T(),[i]=M(e,{warn:!0,name:"query"}),c=(0,a.useCallback)((e=>s.query(i,e)),[s,i]),{refetch:u,called:l,loading:p,error:d,data:f}=U({execute:c,variables:n,singular:!0,immediate:!o,onComplete:t,onError:r});return{engine:s,refetch:u,called:l,loading:p,error:d,data:f}},Q=({query:e,onComplete:t,onError:r,variables:a,lazy:n,children:o})=>o(F(e,{onComplete:t,onError:r,variables:a,lazy:n})),H=a.default.createContext([]),V=()=>{},L={remove:V,add:V},N=a.default.createContext(L);function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const J=(e,t,r)=>G(G({},e),{},{id:t,remove:()=>r(t)}),B=({children:e})=>{const[t,r]=(0,a.useState)([]),[n]=(0,a.useState)((()=>(e=>{let t=0;const r=t=>{e((e=>e.filter((e=>e.id!==t))))};return{remove:r,add:a=>{e((e=>[...e,J(a,++t,r)]))}}})(r)));return a.default.createElement(N.Provider,{value:n},a.default.createElement(H.Provider,{value:t},e))},K=()=>(0,a.useContext)(H),Y=(e,t={})=>{const r=(0,a.useContext)(N);return{show:a=>{const n={message:String("function"==typeof e?e(a):e),options:"function"==typeof t?t(a):t};r.add(n)}}},ee=({config:e,children:t})=>a.default.createElement(s,{config:e},a.default.createElement(B,null,a.default.createElement(q,null,t)));ee.displayName="DHIS2RuntimeProvider"},297:e=>{e.exports=r}},t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}return a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(117)})())}}}));
//# sourceMappingURL=vendor.dhis2-app-runtime.js.map