(this["webpackJsonpreact-tailwind-starter"]=this["webpackJsonpreact-tailwind-starter"]||[]).push([[9],{98:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var o,r,a,c=n(4),u=n(0),l=n.n(u),i=n(16),s=n.n(i),p=n(96),b=n(36),d=n(39),f=n(38),v=n(55),m=n(47),j=n(57),O=n(41),x=n(56),h=n(46),y=n(45),g=n(37);function S(e){var t;if(e.type)return e.type;var n=null!=(t=e.as)?t:"button";return"string"===typeof n&&"button"===n.toLowerCase()?"button":void 0}!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(a||(a={}));var w=((o={})[a.TogglePopover]=function(e){var t;return Object(b.b)({},e,{popoverState:Object(d.a)(e.popoverState,(t={},t[r.Open]=r.Closed,t[r.Closed]=r.Open,t))})},o[a.ClosePopover]=function(e){return e.popoverState===r.Closed?e:Object(b.b)({},e,{popoverState:r.Closed})},o[a.SetButton]=function(e,t){return e.button===t.button?e:Object(b.b)({},e,{button:t.button})},o[a.SetButtonId]=function(e,t){return e.buttonId===t.buttonId?e:Object(b.b)({},e,{buttonId:t.buttonId})},o[a.SetPanel]=function(e,t){return e.panel===t.panel?e:Object(b.b)({},e,{panel:t.panel})},o[a.SetPanelId]=function(e,t){return e.panelId===t.panelId?e:Object(b.b)({},e,{panelId:t.panelId})},o),P=Object(u.createContext)(null);function C(e){var t=Object(u.useContext)(P);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+D.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,C),n}return t}P.displayName="PopoverContext";var E=Object(u.createContext)(null);function k(e){var t=Object(u.useContext)(E);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+D.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,k),n}return t}E.displayName="PopoverAPIContext";var I=Object(u.createContext)(null);function N(){return Object(u.useContext)(I)}I.displayName="PopoverGroupContext";var T=Object(u.createContext)(null);function B(e,t){return Object(d.a)(t.type,w,e,t)}T.displayName="PopoverPanelContext";function D(e){var t,n="headlessui-popover-button-"+Object(O.a)(),o="headlessui-popover-panel-"+Object(O.a)(),c=Object(u.useReducer)(B,{popoverState:r.Closed,button:null,buttonId:n,panel:null,panelId:o}),i=c[0],s=i.popoverState,p=i.button,b=i.panel,v=c[1];Object(u.useEffect)((function(){return v({type:a.SetButtonId,buttonId:n})}),[n,v]),Object(u.useEffect)((function(){return v({type:a.SetPanelId,panelId:o})}),[o,v]);var m=Object(u.useMemo)((function(){return{buttonId:n,panelId:o,close:function(){return v({type:a.ClosePopover})}}}),[n,o,v]),j=N(),g=null==j?void 0:j.registerPopover,S=Object(u.useCallback)((function(){var e;return null!=(e=null==j?void 0:j.isFocusWithinPopoverGroup())?e:(null==p?void 0:p.contains(document.activeElement))||(null==b?void 0:b.contains(document.activeElement))}),[j,p,b]);Object(u.useEffect)((function(){return null==g?void 0:g(m)}),[g,m]),Object(h.a)("focus",(function(){s===r.Open&&(S()||p&&b&&v({type:a.ClosePopover}))}),!0),Object(h.a)("mousedown",(function(e){var t=e.target;s===r.Open&&((null==p?void 0:p.contains(t))||(null==b?void 0:b.contains(t))||(v({type:a.ClosePopover}),Object(x.g)(t,x.c.Loose)||(e.preventDefault(),null==p||p.focus())))}));var w=Object(u.useCallback)((function(e){v({type:a.ClosePopover});var t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:p:p;null==t||t.focus()}),[v,p]),C=Object(u.useMemo)((function(){return{close:w}}),[w]),k=Object(u.useMemo)((function(){return{open:s===r.Open,close:w}}),[s,w]);return l.a.createElement(P.Provider,{value:c},l.a.createElement(E.Provider,{value:C},l.a.createElement(y.a,{value:Object(d.a)(s,(t={},t[r.Open]=y.b.Open,t[r.Closed]=y.b.Closed,t))},Object(f.d)({props:e,slot:k,defaultTag:"div",name:"Popover"}))))}var L=Object(f.c)((function e(t,n){var o=C([D.name,e.name].join(".")),c=o[0],l=o[1],i=Object(u.useRef)(null),s=N(),p=null==s?void 0:s.closeOthers,d=Object(u.useContext)(T),O=null!==d&&d===c.panelId,y=Object(v.a)(i,n,O?null:function(e){return l({type:a.SetButton,button:e})}),w=Object(v.a)(i,n),P=Object(u.useRef)(null),E=Object(u.useRef)("undefined"===typeof window?null:document.activeElement);Object(h.a)("focus",(function(){E.current=P.current,P.current=document.activeElement}),!0);var k=Object(u.useCallback)((function(e){var t;if(O){if(c.popoverState===r.Closed)return;switch(e.key){case m.a.Space:case m.a.Enter:e.preventDefault(),e.stopPropagation(),l({type:a.ClosePopover}),null==(t=c.button)||t.focus()}}else switch(e.key){case m.a.Space:case m.a.Enter:e.preventDefault(),e.stopPropagation(),c.popoverState===r.Closed&&(null==p||p(c.buttonId)),l({type:a.TogglePopover});break;case m.a.Escape:if(c.popoverState!==r.Open)return null==p?void 0:p(c.buttonId);if(!i.current)return;if(!i.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),l({type:a.ClosePopover});break;case m.a.Tab:if(c.popoverState!==r.Open)return;if(!c.panel)return;if(!c.button)return;if(e.shiftKey){var n;if(!E.current)return;if(null==(n=c.button)?void 0:n.contains(E.current))return;if(c.panel.contains(E.current))return;var o=Object(x.f)(),u=o.indexOf(E.current);if(o.indexOf(c.button)>u)return;e.preventDefault(),e.stopPropagation(),Object(x.e)(c.panel,x.a.Last)}else e.preventDefault(),e.stopPropagation(),Object(x.e)(c.panel,x.a.First)}}),[l,c.popoverState,c.buttonId,c.button,c.panel,i,p,O]),I=Object(u.useCallback)((function(e){var t;if(!O&&(e.key===m.a.Space&&e.preventDefault(),c.popoverState===r.Open&&c.panel&&c.button&&e.key===m.a.Tab)){if(!E.current)return;if(null==(t=c.button)?void 0:t.contains(E.current))return;if(c.panel.contains(E.current))return;var n=Object(x.f)(),o=n.indexOf(E.current);if(n.indexOf(c.button)>o)return;e.preventDefault(),e.stopPropagation(),Object(x.e)(c.panel,x.a.Last)}}),[c.popoverState,c.panel,c.button,O]),B=Object(u.useCallback)((function(e){var n,o;Object(j.a)(e.currentTarget)||(t.disabled||(O?(l({type:a.ClosePopover}),null==(n=c.button)||n.focus()):(c.popoverState===r.Closed&&(null==p||p(c.buttonId)),null==(o=c.button)||o.focus(),l({type:a.TogglePopover}))))}),[l,c.button,c.popoverState,c.buttonId,t.disabled,p,O]),L=Object(u.useMemo)((function(){return{open:c.popoverState===r.Open}}),[c]),R=function(e,t){var n=Object(u.useState)((function(){return S(e)})),o=n[0],r=n[1];return Object(g.a)((function(){r(S(e))}),[e.type,e.as]),Object(g.a)((function(){o||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")}),[o,t]),o}(t,i),F=t,M=O?{ref:w,type:R,onKeyDown:k,onClick:B}:{ref:y,id:c.buttonId,type:R,"aria-expanded":t.disabled?void 0:c.popoverState===r.Open,"aria-controls":c.panel?c.panelId:void 0,onKeyDown:k,onKeyUp:I,onClick:B};return Object(f.d)({props:Object(b.b)({},F,M),slot:L,defaultTag:"button",name:"Popover.Button"})})),R=f.a.RenderStrategy|f.a.Static,F=Object(f.c)((function e(t,n){var o=C([D.name,e.name].join(".")),c=o[0].popoverState,l=o[1],i=Object(v.a)(n),s="headlessui-popover-overlay-"+Object(O.a)(),p=Object(y.c)(),d=null!==p?p===y.b.Open:c===r.Open,m=Object(u.useCallback)((function(e){if(Object(j.a)(e.currentTarget))return e.preventDefault();l({type:a.ClosePopover})}),[l]),x=Object(u.useMemo)((function(){return{open:c===r.Open}}),[c]),h={ref:i,id:s,"aria-hidden":!0,onClick:m},g=t;return Object(f.d)({props:Object(b.b)({},g,h),slot:x,defaultTag:"div",features:R,visible:d,name:"Popover.Overlay"})})),M=f.a.RenderStrategy|f.a.Static,K=Object(f.c)((function e(t,n){var o=t.focus,c=void 0!==o&&o,i=Object(b.c)(t,["focus"]),s=C([D.name,e.name].join(".")),p=s[0],d=s[1],j=k([D.name,e.name].join(".")).close,O=Object(u.useRef)(null),g=Object(v.a)(O,n,(function(e){d({type:a.SetPanel,panel:e})})),S=Object(y.c)(),w=null!==S?S===y.b.Open:p.popoverState===r.Open,P=Object(u.useCallback)((function(e){var t;if(e.key===m.a.Escape){if(p.popoverState!==r.Open)return;if(!O.current)return;if(!O.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),d({type:a.ClosePopover}),null==(t=p.button)||t.focus()}}),[p,O,d]);Object(u.useEffect)((function(){return function(){return d({type:a.SetPanel,panel:null})}}),[d]),Object(u.useEffect)((function(){var e;t.static||p.popoverState!==r.Closed||null!=(e=t.unmount)&&!e||d({type:a.SetPanel,panel:null})}),[p.popoverState,t.unmount,t.static,d]),Object(u.useEffect)((function(){if(c&&p.popoverState===r.Open&&O.current){var e=document.activeElement;O.current.contains(e)||Object(x.e)(O.current,x.a.First)}}),[c,O,p.popoverState]),Object(h.a)("keydown",(function(e){if(p.popoverState===r.Open&&O.current&&e.key===m.a.Tab&&document.activeElement&&O.current&&O.current.contains(document.activeElement)){e.preventDefault();var t,n=Object(x.e)(O.current,e.shiftKey?x.a.Previous:x.a.Next);if(n===x.b.Underflow)return null==(t=p.button)?void 0:t.focus();if(n===x.b.Overflow){if(!p.button)return;var o=Object(x.f)(),a=o.indexOf(p.button),c=o.splice(a+1).filter((function(e){var t;return!(null==(t=O.current)?void 0:t.contains(e))}));Object(x.e)(c,x.a.First)===x.b.Error&&Object(x.e)(document.body,x.a.First)}}})),Object(h.a)("focus",(function(){var e;c&&p.popoverState===r.Open&&O.current&&((null==(e=O.current)?void 0:e.contains(document.activeElement))||d({type:a.ClosePopover}))}),!0);var E=Object(u.useMemo)((function(){return{open:p.popoverState===r.Open,close:j}}),[p,j]),I={ref:g,id:p.panelId,onKeyDown:P};return l.a.createElement(T.Provider,{value:p.panelId},Object(f.d)({props:Object(b.b)({},i,I),slot:E,defaultTag:"div",features:M,visible:w,name:"Popover.Panel"}))}));D.Button=L,D.Overlay=F,D.Panel=K,D.Group=function(e){var t=Object(u.useRef)(null),n=Object(u.useState)([]),o=n[0],r=n[1],a=Object(u.useCallback)((function(e){r((function(t){var n=t.indexOf(e);if(-1!==n){var o=t.slice();return o.splice(n,1),o}return t}))}),[r]),c=Object(u.useCallback)((function(e){return r((function(t){return[].concat(t,[e])})),function(){return a(e)}}),[r,a]),i=Object(u.useCallback)((function(){var e,n=document.activeElement;return!!(null==(e=t.current)?void 0:e.contains(n))||o.some((function(e){var t,o;return(null==(t=document.getElementById(e.buttonId))?void 0:t.contains(n))||(null==(o=document.getElementById(e.panelId))?void 0:o.contains(n))}))}),[t,o]),s=Object(u.useCallback)((function(e){for(var t,n=Object(b.a)(o);!(t=n()).done;){var r=t.value;r.buttonId!==e&&r.close()}}),[o]),p=Object(u.useMemo)((function(){return{registerPopover:c,unregisterPopover:a,isFocusWithinPopoverGroup:i,closeOthers:s}}),[c,a,i,s]),d=Object(u.useMemo)((function(){return{}}),[]),v={ref:t},m=e;return l.a.createElement(I.Provider,{value:p},Object(f.d)({props:Object(b.b)({},m,v),slot:d,defaultTag:"div",name:"Popover.Group"}))};n(19);var A=n(1);var G=n(8),H=[{name:"Home",destination:"/"},{name:"About Us",destination:"/about"},{name:"Locations",destination:"/locations"},{name:"FAQs",destination:"/faq"}];function W(e){var t=Object(u.useState)(!0),n=Object(c.a)(t,2),o=n[0],r=n[1],a=Object(u.useState)(0),l=Object(c.a)(a,2),i=l[0],b=l[1],d=Object(u.useState)(!1),f=Object(c.a)(d,2),v=f[0],m=f[1],j=Object(u.useState)(!1),O=Object(c.a)(j,2),x=O[0],h=O[1],y=function(e){var t=window.scrollY;t<1?(r(!0),h(!1)):t>=i?(r(!1),h(!0)):(h(!0),r(!0)),b(t),console.log(o)};return Object(u.useEffect)((function(){return window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}})),Object(A.jsx)("div",{className:"z-50 absolute",children:Object(A.jsx)(s.a,{top:!0,when:o,duration:300,children:Object(A.jsx)("div",{className:"bg-white shadows w-screen top-0 fixed overflow-hidden ",style:x?{boxShadow:"0px 0px 20px 2px #c2c2c2"}:{},children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(A.jsx)("div",{className:"flex justify-between h-20",children:Object(A.jsxs)("div",{className:"flex justify-between w-full",children:[Object(A.jsx)("div",{className:"flex-shrink-0 flex items-center transition duration-500 hover:bg-gray-300 hover:bg-opacity-20 rounded-xl",children:Object(A.jsx)("a",{href:"/",className:"",children:Object(A.jsx)("img",{src:"https://res.cloudinary.com/trainamerican/image/upload/dpr_auto,f_auto,q_auto:best/v1634735144/large%20dark%20logo.webp",alt:"104010 Logo",className:"h-16"})})}),Object(A.jsx)("div",{className:"-ml-2 mr-2 flex items-center md:hidden",children:Object(A.jsxs)("div",{"aria-label":"menu",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 ",children:[Object(A.jsx)("span",{className:"sr-only",children:"Open main menu"}),v?Object(A.jsx)(G.f,{onClick:function(){m(!v)},className:"block h-6 w-6","aria-hidden":"true"}):Object(A.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[Object(A.jsx)(G.c,{className:"block h-10 w-10 rounded-md p-2 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500","aria-hidden":"true",onClick:function(){m(!v)}}),Object(A.jsx)("a",{"area-label":"contact button",href:"https://www.fitmetrix.io/memberportal/login/fee66bea-163c-ec11-aa68-c756551153f3?LocationID=16470",className:"h-12 py-3 text-md inline-flex items-center font-semibold leading-none   ",children:Object(A.jsx)(G.e,{className:"block h-6 w-6 hover:bg-gray-200 rounded-full transition duration-200 ","area-hidden":"true"})})]})]})}),Object(A.jsxs)("div",{className:"hidden md:ml-6 md:flex md:space-x-8",children:[H.map((function(t,n){return"Home"!==t.name?Object(A.jsx)("div",{className:"flex items-center justify-items-center border-b-2  ".concat(e.pathName===t.destination?"border-blue-500":""),children:Object(A.jsx)("a",{href:t.destination,className:"text-gray-900 p-2 px-4 rounded-md hover:bg-opacity-40 transition duration-500 ease-in-out hover:scale-150 hover:translate-y-1 hover:bg-gray-200 inline-flex items-center  text-sm font-medium ",children:t.name})},"desktop".concat(n)):Object(A.jsx)("div",{},"empty".concat(n))})),Object(A.jsx)("div",{className:"flex items-center justify-items-center",children:Object(A.jsx)("a",{"area-label":"contact button",href:"/locations",className:"h-12 px-4 py-3 text-md inline-flex items-center font-semibold leading-none bg-taBlue hover:bg-taLightBlue text-white rounded transition duration-500 ease-in-out ",children:"FREE TRIAL"})}),Object(A.jsx)("div",{className:"flex items-center justify-items-center",children:Object(A.jsx)("a",{"area-label":"contact button",href:"https://www.fitmetrix.io/webportal/packages/fee66bea-163c-ec11-aa68-c756551153f3",className:"h-12 px-4 py-3 text-md inline-flex items-center font-semibold leading-none bg-taRed hover:bg-opacity-80 text-white rounded transition duration-500 ease-in-out ",children:"BOOK NOW"})}),Object(A.jsx)("div",{className:"flex items-center justify-items-center",children:Object(A.jsx)("a",{"area-label":"contact button",href:"https://www.fitmetrix.io/memberportal/login/fee66bea-163c-ec11-aa68-c756551153f3?LocationID=16470",className:"h-12 py-3 text-md inline-flex items-center font-semibold leading-none  text-gray-700  ",children:Object(A.jsx)(G.e,{className:"block h-8 w-8 hover:bg-gray-200 rounded-full transition duration-200 ","area-hidden":"true"})})})]})]})})}),Object(A.jsx)(p.a,{show:v,enter:"transition duration-500 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-500 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:Object(A.jsx)("div",{className:"md:hidden",children:Object(A.jsxs)("div",{className:"flex flex-col pt-2 pb-3 space-y-3",children:[H.map((function(t,n){return Object(A.jsxs)("a",{href:t.destination,className:"bg-gray-50  block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 ".concat(e.pathName===t.destination?"border-blue-500 text-blue-700":""),children:[" ",t.name]},"mobile".concat(n))})),Object(A.jsx)("a",{href:"/locations",className:"bg-taBlue text-center text-white block pl-3 pr-4 py-2  text-2xl font-medium sm:pl-5 sm:pr-6",children:"FREE TRIAL"}),Object(A.jsx)("a",{href:"https://www.fitmetrix.io/webportal/packages/fee66bea-163c-ec11-aa68-c756551153f3",className:"bg-taRed text-center text-white block pl-3 pr-4 py-2  text-2xl font-medium sm:pl-5 sm:pr-6",children:"BOOK NOW"})]})})})]})})})})}}}]);
//# sourceMappingURL=9.80ee47da.chunk.js.map