/*! For license information please see 587.6326feec.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[587],{294:function(e,t,r){r.d(t,{iv:function(){return g}});var n=r(791),a=r.t(n,2),o=!!a.useInsertionEffect&&a.useInsertionEffect;o||n.useLayoutEffect;var c=r(952);function s(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var i=/[A-Z]|^ms/g,l=/_EMO_([^_]+?)_([^]*?)_EMO_/g,f=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!==typeof e},p=s((function(e){return f(e)?e:e.replace(i,"-$&").toLowerCase()})),m=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(l,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===c.Z[e]||f(e)||"number"!==typeof t||0===t?t:t+"px"};function y(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=y(e,t,r[a])+";";else for(var o in r){var c=r[o];if("object"!==typeof c)null!=t&&void 0!==t[c]?n+=o+"{"+t[c]+"}":u(c)&&(n+=p(o)+":"+m(o,c)+";");else if(!Array.isArray(c)||"string"!==typeof c[0]||null!=t&&void 0!==t[c[0]]){var s=y(e,t,c);switch(o){case"animation":case"animationName":n+=p(o)+":"+s+";";break;default:n+=o+"{"+s+"}"}}else for(var i=0;i<c.length;i++)u(c[i])&&(n+=p(o)+":"+m(o,c[i])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=d,o=r(e);return d=a,y(e,t,o)}}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var d,v=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var b=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";d=void 0;var o=e[0];null==o||void 0===o.raw?(n=!1,a+=y(r,t,o)):a+=o[0];for(var c=1;c<e.length;c++)a+=y(r,t,e[c]),n&&(a+=o[c]);v.lastIndex=0;for(var s,i="";null!==(s=v.exec(a));)i+="-"+s[1];var l=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+i;return{name:l,styles:a,next:d}};Math.abs,String.fromCharCode,Object.assign;r(110);function g(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return b(t)}},110:function(e,t,r){var n=r(309),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||a}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var l=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var a=m(r);a&&a!==y&&e(t,a,n)}var c=f(r);u&&(c=c.concat(u(r)));for(var s=i(t),d=i(r),v=0;v<c.length;++v){var b=c[v];if(!o[b]&&(!n||!n[b])&&(!d||!d[b])&&(!s||!s[b])){var g=p(r,b);try{l(t,b,g)}catch(h){}}}}return t}},746:function(e,t){var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case u:case o:case s:case c:case m:return e;default:switch(e=e&&e.$$typeof){case l:case p:case v:case d:case i:return e;default:return t}}case a:return t}}}function $(e){return w(e)===u}t.AsyncMode=f,t.ConcurrentMode=u,t.ContextConsumer=l,t.ContextProvider=i,t.Element=n,t.ForwardRef=p,t.Fragment=o,t.Lazy=v,t.Memo=d,t.Portal=a,t.Profiler=s,t.StrictMode=c,t.Suspense=m,t.isAsyncMode=function(e){return $(e)||w(e)===f},t.isConcurrentMode=$,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===i},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===v},t.isMemo=function(e){return w(e)===d},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===c},t.isSuspense=function(e){return w(e)===m},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===u||e===s||e===c||e===m||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===d||e.$$typeof===i||e.$$typeof===l||e.$$typeof===p||e.$$typeof===g||e.$$typeof===h||e.$$typeof===S||e.$$typeof===b)},t.typeOf=w},309:function(e,t,r){e.exports=r(746)},780:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(791),a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function o(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return a[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}var c=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,c="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(c,0),n},s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},l=[1,3,5],f=[c("PropagateLoader","25% {transform: translateX(-".concat(l[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(l[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(l[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-0"),c("PropagateLoader","25% {transform: translateX(-".concat(l[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(l[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(l[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-1"),c("PropagateLoader","25% {transform: translateX(-".concat(l[0],"rem) scale(0.75)}\n    75% {transform: translateX(-").concat(l[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-2"),c("PropagateLoader","25% {transform: translateX(".concat(l[0],"rem) scale(0.75)}\n    75% {transform: translateX(").concat(l[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-3"),c("PropagateLoader","25% {transform: translateX(".concat(l[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(l[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(l[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-4"),c("PropagateLoader","25% {transform: translateX(".concat(l[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(l[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(l[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-5")];var u=function(e){var t=e.loading,r=void 0===t||t,a=e.color,c=void 0===a?"#000000":a,l=e.speedMultiplier,u=void 0===l?1:l,p=e.cssOverride,m=void 0===p?{}:p,y=e.size,d=void 0===y?15:y,v=i(e,["loading","color","speedMultiplier","cssOverride","size"]),b=o(d),g=b.value,h=b.unit,S=s({display:"inherit",position:"relative"},m),w=function(e){return{position:"absolute",fontSize:"".concat(g/3).concat(h),width:"".concat(g).concat(h),height:"".concat(g).concat(h),background:c,borderRadius:"50%",animation:"".concat(f[e]," ").concat(1.5/u,"s infinite"),animationFillMode:"forwards"}};return r?n.createElement("span",s({style:S},v),n.createElement("span",{style:w(0)}),n.createElement("span",{style:w(1)}),n.createElement("span",{style:w(2)}),n.createElement("span",{style:w(3)}),n.createElement("span",{style:w(4)}),n.createElement("span",{style:w(5)})):null}}}]);
//# sourceMappingURL=587.6326feec.chunk.js.map