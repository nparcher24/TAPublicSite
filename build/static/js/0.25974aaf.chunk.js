(this["webpackJsonpreact-tailwind-starter"]=this["webpackJsonpreact-tailwind-starter"]||[]).push([[0],{36:function(e,n,t){"use strict";function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i}))},37:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),i="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},38:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return c}));var r,i,o=t(36),u=t(0),a=t(39);function c(e){var n=e.props,t=e.slot,u=e.defaultTag,c=e.features,s=e.visible,l=void 0===s||s,d=e.name;if(l)return f(n,t,u,d);var v=null!=c?c:r.None;if(v&r.Static){var b=n.static,p=void 0!==b&&b,m=Object(o.c)(n,["static"]);if(p)return f(m,t,u,d)}if(v&r.RenderStrategy){var O,j=n.unmount,h=void 0===j||j,g=Object(o.c)(n,["unmount"]),y=h?i.Unmount:i.Hidden;return Object(a.a)(y,((O={})[i.Unmount]=function(){return null},O[i.Hidden]=function(){return f(Object(o.b)({},g,{hidden:!0,style:{display:"none"}}),t,u,d)},O))}return f(n,t,u,d)}function f(e,n,t,r){var i;void 0===n&&(n={});var a=l(e,["unmount","static"]),c=a.as,f=void 0===c?t:c,s=a.children,d=a.refName,v=void 0===d?"ref":d,b=Object(o.c)(a,["as","children","refName"]),p=void 0!==e.ref?((i={})[v]=e.ref,i):{},m="function"===typeof s?s(n):s;if(b.className&&"function"===typeof b.className&&(b.className=b.className(n)),f===u.Fragment&&Object.keys(b).length>0){if(!Object(u.isValidElement)(m)||Array.isArray(m)&&m.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(b).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return Object(u.cloneElement)(m,Object.assign({},function(e,n,t){for(var r,i=Object.assign({},e),u=function(){var t,o=r.value;void 0!==e[o]&&void 0!==n[o]&&Object.assign(i,((t={})[o]=function(t){t.defaultPrevented||e[o](t),t.defaultPrevented||n[o](t)},t))},a=Object(o.a)(t);!(r=a()).done;)u();return i}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(l(b,["ref"])),m.props,["onClick"]),p))}return Object(u.createElement)(f,Object.assign({},l(b,["ref"]),f!==u.Fragment&&p),m)}function s(e){var n;return Object.assign(Object(u.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function l(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),i=Object(o.a)(n);!(t=i()).done;){var u=t.value;u in r&&delete r[u]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(i||(i={}))},39:function(e,n,t){"use strict";function r(e,n){if(e in n){for(var t=n[e],i=arguments.length,o=new Array(i>2?i-2:0),u=2;u<i;u++)o[u-2]=arguments[u];return"function"===typeof t?t.apply(void 0,o):t}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}t.d(n,"a",(function(){return r}))},41:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0),i=t(37),o=t(42),u=0;function a(){return++u}function c(){var e=Object(o.a)(),n=Object(r.useState)(e?a:null),t=n[0],u=n[1];return Object(i.a)((function(){null===t&&u(a())}),[t]),null!=t?""+t:void 0}},42:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0),i={serverHandoffComplete:!1};function o(){var e=Object(r.useState)(i.serverHandoffComplete),n=e[0],t=e[1];return Object(r.useEffect)((function(){!0!==n&&t(!0)}),[n]),Object(r.useEffect)((function(){!1===i.serverHandoffComplete&&(i.serverHandoffComplete=!0)}),[]),n}},45:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a}));var r,i=t(0),o=t.n(i),u=Object(i.createContext)(null);function a(){return Object(i.useContext)(u)}function c(e){var n=e.value,t=e.children;return o.a.createElement(u.Provider,{value:n},t)}u.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},46:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0);function i(e,n,t){var i=Object(r.useRef)(n);i.current=n,Object(r.useEffect)((function(){function n(e){i.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}},47:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(r||(r={}))},54:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0);function i(){var e=Object(r.useRef)(!1);return Object(r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}},55:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(36),i=t(0);function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(i.useRef)(n);return Object(i.useEffect)((function(){o.current=n}),[n]),Object(i.useCallback)((function(e){for(var n,t=Object(r.a)(o.current);!(n=t()).done;){var i=n.value;null!=i&&("function"===typeof i?i(e):i.current=e)}}),[o])}},56:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return l})),t.d(n,"e",(function(){return d})),t.d(n,"f",(function(){return f})),t.d(n,"g",(function(){return s}));var r,i,o,u,a=t(39),c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function f(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(c))}function s(e,n){var t;return void 0===n&&(n=u.Strict),e!==document.body&&Object(a.a)(n,((t={})[u.Strict]=function(){return e.matches(c)},t[u.Loose]=function(){for(var n=e;null!==n;){if(n.matches(c))return!0;n=n.parentElement}return!1},t))}function l(e){null==e||e.focus({preventScroll:!0})}function d(e,n){var t=Array.isArray(e)?e.slice().sort((function(e,n){var t=e.compareDocumentPosition(n);return t&Node.DOCUMENT_POSITION_FOLLOWING?-1:t&Node.DOCUMENT_POSITION_PRECEDING?1:0})):f(e),u=document.activeElement,a=function(){if(n&(r.First|r.Next))return o.Next;if(n&(r.Previous|r.Last))return o.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),c=function(){if(n&r.First)return 0;if(n&r.Previous)return Math.max(0,t.indexOf(u))-1;if(n&r.Next)return Math.max(0,t.indexOf(u))+1;if(n&r.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),s=n&r.NoScroll?{preventScroll:!0}:{},l=0,d=t.length,v=void 0;do{var b;if(l>=d||l+d<=0)return i.Error;var p=c+l;if(n&r.WrapAround)p=(p+d)%d;else{if(p<0)return i.Underflow;if(p>=d)return i.Overflow}null==(b=v=t[p])||b.focus(s),l+=a}while(v!==document.activeElement);return v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),i.Success}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(r||(r={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(i||(i={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(o||(o={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(u||(u={}))},57:function(e,n,t){"use strict";function r(e){for(var n,t,r=e.parentElement,i=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(i=r),r=r.parentElement;var o=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!o||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(i))&&o}t.d(n,"a",(function(){return r}))},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return T}));var r,i=t(36),o=t(0),u=t.n(o),a=t(39),c=t(38),f=t(37),s=t(42),l=t(41),d=t(54),v=t(45);function b(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=Object(i.a)(e.splice(0));!(n=t()).done;){var r=n.value;r()}}};return n}function p(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function m(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function O(e,n,t,i,o,u){var a=b(),c=void 0!==u?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(u):function(){};return m.apply(void 0,[e].concat(o)),p.apply(void 0,[e].concat(n,t)),a.nextFrame((function(){m.apply(void 0,[e].concat(t)),p.apply(void 0,[e].concat(i)),a.add(function(e,n){var t=b();if(!e)return t.dispose;var i=getComputedStyle(e),o=[i.transitionDuration,i.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),u=o[0],a=o[1];return 0!==u?t.setTimeout((function(){n(r.Finished)}),u+a):n(r.Finished),t.add((function(){return n(r.Cancelled)})),t.dispose}(e,(function(t){return m.apply(void 0,[e].concat(i,n)),p.apply(void 0,[e].concat(o)),c(t)})))})),a.add((function(){return m.apply(void 0,[e].concat(n,t,i,o))})),a.add((function(){return c(r.Cancelled)})),a.dispose}function j(e){return void 0===e&&(e=""),Object(o.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(r||(r={}));var h,g=Object(o.createContext)(null);g.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(h||(h={}));var y=Object(o.createContext)(null);function E(e){return"children"in e?E(e.children):e.current.filter((function(e){return e.state===h.Visible})).length>0}function w(e){var n=Object(o.useRef)(e),t=Object(o.useRef)([]),r=Object(d.a)();Object(o.useEffect)((function(){n.current=e}),[e]);var i=Object(o.useCallback)((function(e,i){var o;void 0===i&&(i=c.b.Hidden);var u=t.current.findIndex((function(n){return n.id===e}));-1!==u&&(Object(a.a)(i,((o={})[c.b.Unmount]=function(){t.current.splice(u,1)},o[c.b.Hidden]=function(){t.current[u].state=h.Hidden},o)),!E(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),u=Object(o.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==h.Visible&&(n.state=h.Visible):t.current.push({id:e,state:h.Visible}),function(){return i(e,c.b.Unmount)}}),[t,i]);return Object(o.useMemo)((function(){return{children:t,register:u,unregister:i}}),[u,i,t])}function S(){}y.displayName="NestingContext";var F=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function A(e){for(var n,t={},r=Object(i.a)(F);!(n=r()).done;){var o,u=n.value;t[u]=null!=(o=e[u])?o:S}return t}var C=c.a.RenderStrategy;function N(e){var n,t=e.beforeEnter,d=e.afterEnter,b=e.beforeLeave,p=e.afterLeave,m=e.enter,S=e.enterFrom,F=e.enterTo,N=e.entered,T=e.leave,L=e.leaveFrom,x=e.leaveTo,H=Object(i.c)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),P=Object(o.useRef)(null),R=Object(o.useState)(h.Visible),U=R[0],V=R[1],k=H.unmount?c.b.Unmount:c.b.Hidden,M=function(){var e=Object(o.useContext)(g);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),D=M.show,I=M.appear,q=M.initial,W=function(){var e=Object(o.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),_=W.register,B=W.unregister,G=Object(l.a)(),J=Object(o.useRef)(!1),Y=w((function(){J.current||(V(h.Hidden),B(G),ne.current.afterLeave())}));Object(f.a)((function(){if(G)return _(G)}),[_,G]),Object(f.a)((function(){var e;k===c.b.Hidden&&G&&(D&&U!==h.Visible?V(h.Visible):Object(a.a)(U,((e={})[h.Hidden]=function(){return B(G)},e[h.Visible]=function(){return _(G)},e)))}),[U,G,_,B,D,k]);var $=j(m),z=j(S),K=j(F),Q=j(N),X=j(T),Z=j(L),ee=j(x),ne=function(e){var n=Object(o.useRef)(A(e));return Object(o.useEffect)((function(){n.current=A(e)}),[e]),n}({beforeEnter:t,afterEnter:d,beforeLeave:b,afterLeave:p}),te=Object(s.a)();Object(o.useEffect)((function(){if(te&&U===h.Visible&&null===P.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[P,U,te]);var re=q&&!I;Object(f.a)((function(){var e=P.current;if(e&&!re)return J.current=!0,D&&ne.current.beforeEnter(),D||ne.current.beforeLeave(),D?O(e,$,z,K,Q,(function(e){J.current=!1,e===r.Finished&&ne.current.afterEnter()})):O(e,X,Z,ee,Q,(function(e){J.current=!1,e===r.Finished&&(E(Y)||(V(h.Hidden),B(G),ne.current.afterLeave()))}))}),[ne,G,J,B,Y,P,re,D,$,z,K,X,Z,ee]);var ie={ref:P},oe=H;return u.a.createElement(y.Provider,{value:Y},u.a.createElement(v.a,{value:Object(a.a)(U,(n={},n[h.Visible]=v.b.Open,n[h.Hidden]=v.b.Closed,n))},Object(c.d)({props:Object(i.b)({},oe,ie),defaultTag:"div",features:C,visible:U===h.Visible,name:"Transition.Child"})))}function T(e){var n,t=e.show,r=e.appear,f=void 0!==r&&r,s=e.unmount,l=Object(i.c)(e,["show","appear","unmount"]),d=Object(v.c)();void 0===t&&null!==d&&(t=Object(a.a)(d,((n={})[v.b.Open]=!0,n[v.b.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var b=Object(o.useState)(t?h.Visible:h.Hidden),p=b[0],m=b[1],O=w((function(){m(h.Hidden)})),j=function(){var e=Object(o.useRef)(!0);return Object(o.useEffect)((function(){e.current=!1}),[]),e.current}(),S=Object(o.useMemo)((function(){return{show:t,appear:f||!j,initial:j}}),[t,f,j]);Object(o.useEffect)((function(){t?m(h.Visible):E(O)||m(h.Hidden)}),[t,O]);var F={unmount:s};return u.a.createElement(y.Provider,{value:O},u.a.createElement(g.Provider,{value:S},Object(c.d)({props:Object(i.b)({},F,{as:o.Fragment,children:u.a.createElement(N,Object.assign({},F,l))}),defaultTag:o.Fragment,features:C,visible:p===h.Visible,name:"Transition"})))}T.Child=function(e){var n=null!==Object(o.useContext)(g),t=null!==Object(v.c)();return!n&&t?u.a.createElement(T,Object.assign({},e)):u.a.createElement(N,Object.assign({},e))},T.Root=T}}]);
//# sourceMappingURL=0.25974aaf.chunk.js.map