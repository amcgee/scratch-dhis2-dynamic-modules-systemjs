System.register(["react","react-dom","@dhis2/app-runtime","@dhis2/ui"],(function(e,t){var r={},n={},o={},a={};return{setters:[function(e){r.default=e.default,r.useEffect=e.useEffect,r.useState=e.useState},function(e){n.default=e.default},function(e){o.Provider=e.Provider,o.useConfig=e.useConfig,o.useDataQuery=e.useDataQuery},function(e){a.SingleSelect=e.SingleSelect,a.SingleSelectOption=e.SingleSelectOption}],execute:function(){e((()=>{var e={266:(e,t,r)=>{"use strict";r.r(t),r.d(t,{bootstrap:()=>B,mount:()=>A,name:()=>U,unmount:()=>_,update:()=>I});var n=r(297),o=r(268);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var u=null,l={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},errorBoundary:null,domElementGetter:null,parcelCanUpdate:!0};function s(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function p(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=function(e,t){return t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=y(e,t),i=function(e,t){var r=e(t);if(!r)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return r}(o,t);d({elementToRender:a,domElement:i,whenFinished:function(){r(this)},opts:e}),e.domElements[t.name]=i}))}function m(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function f(e,t){return new Promise((function(r,n){d({elementToRender:y(e,t),domElement:e.domElements[t.name],whenFinished:function(){r(this)},opts:e})}))}function d(e){var t=e.opts,r=e.elementToRender,n=e.domElement,o=e.whenFinished;return["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(t.renderType)>=0?t.ReactDOM[t.renderType](n).render(r,o):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(n).render(r,o):"hydrate"===t.renderType?t.ReactDOM.hydrate(r,n,o):t.ReactDOM.render(r,n,o)}function y(e,t){var r=e.React.createElement(e.rootComponent,t),n=u?e.React.createElement(u.Provider,{value:t},r):r;return e.errorBoundary&&(e.errorBoundaryClass=e.errorBoundaryClass||function(e){function t(r){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(r.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(e),n=e.React.createElement(e.errorBoundaryClass,t,n)),n}var h=r(465),b=r(401);function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?S(e):t}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,n.default.Component);var t,r,o=(t=a,function(){var e,r=w(t);if(P()){var n=w(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return j(this,e)});function a(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),g(S(t=o.call(this,e)),"handleRef",(function(e){t.el=e})),g(S(t),"addThingToDo",(function(e,r){t.state.hasError&&"unmount"!==e||(t.nextThingToDo=(t.nextThingToDo||Promise.resolve()).then((function(){if(!t.unmounted||"unmount"===e)return r.apply(void 0,arguments)})).catch((function(r){throw t.nextThingToDo=Promise.resolve(),t.setState({hasError:!0}),r&&r.message&&(r.message="During '".concat(e,"', parcel threw an error: ").concat(r.message)),t.props.handleError?t.props.handleError(r):setTimeout((function(){throw r})),r})))})),g(S(t),"getParcelProps",(function(){var e=E({},t.props);return delete e.mountParcel,delete e.config,delete e.wrapWith,delete e.wrapStyle,delete e.appendTo,delete e.handleError,delete e.parcelDidMount,e})),t.state={hasError:!1},!e.config)throw new Error("single-spa-react's Parcel component requires the 'config' prop to either be a parcel config or a loading function that returns a promise. See https://github.com/single-spa/single-spa-react");return t}return(r=[{key:"componentDidMount",value:function(){var e=this;this.addThingToDo("mount",(function(){var t,r=e.props.mountParcel||e.mountParcel;if(!r)throw new Error("\n\t\t\t\t  <Parcel /> was not passed a mountParcel prop, nor is it rendered where mountParcel is within the React context.\n\t\t\t\t  If you are using <Parcel /> within a module that is not a single-spa application, you will need to import mountRootParcel from single-spa and pass it into <Parcel /> as a mountParcel prop\t\n\t\t\t\t");return e.el?t=e.el:(e.createdDomElement=t=document.createElement(e.props.wrapWith),Object.keys(e.props.wrapStyle).forEach((function(r){t.style[r]=e.props.wrapStyle[r]})),e.props.appendTo.appendChild(t)),e.parcel=r(e.props.config,E({domElement:t},e.getParcelProps())),e.parcel.mountPromise.then(e.props.parcelDidMount),e.parcel.mountPromise}))}},{key:"componentDidUpdate",value:function(){var e=this;this.addThingToDo("update",(function(){if(e.parcel&&e.parcel.update)return e.parcel.update(e.getParcelProps())}))}},{key:"componentWillUnmount",value:function(){var e=this;this.addThingToDo("unmount",(function(){if(e.parcel&&"MOUNTED"===e.parcel.getStatus())return e.parcel.unmount()})),this.createdDomElement&&this.createdDomElement.parentNode.removeChild(this.createdDomElement),this.unmounted=!0}},{key:"render",value:function(){var e=this;if(this.props.appendTo)return u&&u.Consumer?n.default.createElement(u.Consumer,null,(function(t){return e.mountParcel=t?t.mountParcel:null,null})):null;var t=u&&u.Consumer?n.default.createElement(u.Consumer,null,(function(t){return e.mountParcel=t?t.mountParcel:null,null})):void 0;return n.default.createElement(this.props.wrapWith,{ref:this.handleRef,style:this.props.wrapStyle,className:this.props.wrapClassName},t)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(a.prototype,r),a}();g(D,"defaultProps",{wrapWith:"div",wrapStyle:{},parcelDidMount:function(){}});const C=D;function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=function(e){var t=e.appName,r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.useState)(),2),o=r[0],a=r[1],i=(0,h.useConfig)();return(0,n.useEffect)((function(){System.import("@dhis2-apps/".concat(t,"-plugin")).then((function(e){a(e)}))}),[]),n.default.createElement("div",{style:{border:"1px solid black",marginTop:8}},n.default.createElement("div",{style:{padding:4,borderBottom:"1px solid #999"}},o?o.name:"Loading..."),o&&n.default.createElement(C,{config:o,runtimeConfig:i}))};function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N={me:{resource:"me",params:{fields:["displayName"]}}},M=function(){var e=(0,h.useDataQuery)(N),t=e.error,r=e.data,o=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.useState)(),2),a=o[0],i=o[1];return r?n.default.createElement("div",{style:{padding:32,textAlign:"center"}},n.default.createElement("h1",null,"Hello ",r.me.displayName),n.default.createElement("h3",null,"Welcome to DHIS2"),n.default.createElement(b.SingleSelect,{selected:a,onChange:function(e){var t=e.selected;return i(t)}},n.default.createElement(b.SingleSelectOption,{label:"App #2",value:"app2"})),a&&n.default.createElement(T,{appName:a})):t?"Error!":"Loading..."},k=function(e){if("object"!==a(e))throw new Error("single-spa-react requires a configuration object");var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},l,{},e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!u&&t.React.createContext&&(u=t.React.createContext());var r={bootstrap:s.bind(null,t),mount:p.bind(null,t),unmount:m.bind(null,t)};return t.parcelCanUpdate&&(r.update=f.bind(null,t)),r}({React:n.default,ReactDOM:o.default,errorBoundary:function(){return n.default.createElement("div",null,"Error")},rootComponent:function(e){var t=e.runtimeConfig;return n.default.createElement(h.Provider,{config:t},n.default.createElement(M,null))},parcelCanUpdate:!0}),B=k.bootstrap,A=k.mount,_=k.unmount,I=k.update,U="Example App"},858:(e,t,r)=>{const{autoPublicPath:n}=r(722);n(1)},722:(e,t,r)=>{const{resolveDirectory:n}=r(905);t.autoPublicPath=function(e=1){if(!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{function n(e,t){const r=document.createElement("a");r.href=e;const n="/"===r.pathname[0]?r.pathname:"/"+r.pathname;let o=0,a=n.length;for(;o!==t&&a>=0;)"/"===n[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);const i=n.slice(0,a+1);return r.protocol+"//"+r.host+i}t.setPublicPath=function(e,t){if(t||(t=1),"string"!=typeof e||0===e.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof t||t<=0||isNaN(t)||!o(t))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");let a;try{if(a=window.System.resolve(e),!a)throw Error()}catch(t){throw Error("systemjs-webpack-interop: There is no such module '"+e+"' in the SystemJS registry. Did you misspell the name of your module?")}r.p=n(a,t)},t.resolveDirectory=n;const o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},465:e=>{"use strict";e.exports=o},401:e=>{"use strict";e.exports=a},297:e=>{"use strict";e.exports=r},268:e=>{"use strict";e.exports=n}},i={};function c(t){if(i[t])return i[t].exports;var r=i[t]={exports:{}};return e[t](r,r.exports,c),r.exports}return c.y=t,c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="",c(858),c(266)})())}}}));
//# sourceMappingURL=dhis2-apps-example.js.map