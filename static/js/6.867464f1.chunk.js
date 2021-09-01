(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[6],{1012:function(e,t,n){var r=n(396),i=n(1095);e.exports=function(e){return i(r(e).toLowerCase())}},1013:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},1095:function(e,t,n){var r=n(1096)("toUpperCase");e.exports=r},1096:function(e,t,n){var r=n(1097),i=n(1013),o=n(1099),c=n(396);e.exports=function(e){return function(t){t=c(t);var n=i(t)?o(t):void 0,a=n?n[0]:t.charAt(0),u=n?r(n,1).join(""):t.slice(1);return a[e]()+u}}},1097:function(e,t,n){var r=n(1098);e.exports=function(e,t,n){var i=e.length;return n=void 0===n?i:n,!t&&n>=i?e:r(e,t,n)}},1098:function(e,t){e.exports=function(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(i);++r<i;)o[r]=e[r+t];return o}},1099:function(e,t,n){var r=n(1100),i=n(1013),o=n(1101);e.exports=function(e){return i(e)?o(e):r(e)}},1100:function(e,t){e.exports=function(e){return e.split("")}},1101:function(e,t){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+i+")"+"?",l="[\\ufe0e\\ufe0f]?",s=l+u+("(?:\\u200d(?:"+[o,c,a].join("|")+")"+l+u+")*"),d="(?:"+[o+r+"?",r,c,a,n].join("|")+")",f=RegExp(i+"(?="+i+")|"+d+s,"g");e.exports=function(e){return e.match(f)||[]}},894:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return p}));var r=n(13),i=n(60),o=n(2),c=n(55),a=n.n(c),u=n(59),l=n(108),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},i=t.onEnterViewport,c=t.onLeaveViewport,a=Object(o.useState)(),s=Object(u.a)(a,2),d=s[1],f=Object(o.useRef)(null),v=Object(o.useRef)(!1),b=Object(o.useRef)(!1),p=Object(o.useRef)(0),j=Object(o.useRef)(0),m=Object(o.useCallback)((function(){if(e.current&&f.current){var t=Object(l.findDOMNode)(e.current);t&&f.current.observe(t)}}),[e,f]),O=Object(o.useCallback)((function(){if(e.current&&f.current){var t=Object(l.findDOMNode)(e.current);t&&(f.current.unobserve(t),f.current.disconnect(),f.current=null)}}),[e,f]),h=Object(o.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,o=t.intersectionRatio,a="undefined"!==typeof n?n:o>0;if(!b.current&&a)return b.current=!0,null===i||void 0===i||i(),p.current+=1,v.current=a,void d(a);b.current&&!a&&(b.current=!1,null===c||void 0===c||c(),r.disconnectOnLeave&&f.current&&f.current.disconnect(),j.current+=1,v.current=a,d(a))}),[f,r.disconnectOnLeave,i,c]),x=Object(o.useCallback)((function(){f.current||(f.current=new IntersectionObserver(h,n))}),[f,n,h]);return Object(o.useEffect)((function(){return x(),m(),function(){O()}}),[x,m,O]),{inViewport:v.current,enterCount:p.current,leaveCount:j.current}},d=n(1104);var f=function(e){var t=Object(d.a)();return Object(o.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},v=n(3),b=["children","className","onScrollToEnd"],p=Object(o.createContext)({}),j=function(e){var t=e.children,n=e.className,c=e.onScrollToEnd,u=Object(i.a)(e,b),l=Object(o.useRef)(null),d=f("scrollable"),j=Object(o.useMemo)((function(){return{id:d}}),[d]);return s(l,{onEnterViewport:c}),Object(v.jsxs)("div",Object(r.a)(Object(r.a)({className:a()("overflow-y-auto h-full",n)},u),{},{id:d,children:[Object(v.jsx)(p.Provider,{value:j,children:t}),c&&Object(v.jsx)("div",{className:"h-40",ref:l})]}))}},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(13),i=n(899),o=n(3),c=function(e){return Object(o.jsx)(i.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(13),i=n(60),o=n(55),c=n.n(o),a=n(253),u=n(3),l=["children","className"],s=function(e){var t=e.children,n=e.className,o=Object(i.a)(e,l);return t?Object(u.jsx)(a.a,Object(r.a)(Object(r.a)({},o),{},{className:c()("flex justify-between items-center m-1 mb-3 min-h-9",n),as:"div",children:t})):null}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(13),i=n(60),o=n(55),c=n.n(o),a=n(2),u=n(930),l=n.n(u),s=n(894),d=n(3),f=function(e){var t=Object(a.useContext)(s.a).id;return Object(d.jsx)(l.a,Object(r.a)(Object(r.a)({once:!0,offset:100,scrollContainer:t&&"#".concat(t)},e),{},{placeholder:Object(d.jsx)("div",{className:"w-full h-full"})}))};var v=f,b=n(254),p=["className","wrapperClassName","source","caption","children"],j=function(e){var t=e.className,n=e.wrapperClassName,o=e.source,a=e.caption,u=e.children,l=Object(i.a)(e,p);return Object(d.jsxs)(b.a,Object(r.a)(Object(r.a)({},l),{},{className:c()("rounded-xl w-1/5 cursor-pointer",n),children:[Object(d.jsxs)(v,{className:c()("h-40 m-1 flex flex-col relative",t),children:[Object(d.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:o,alt:a}),u]}),a&&Object(d.jsx)("div",{className:"px-2",children:Object(d.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:a})})]}))}},900:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var r=n(252);function i(e,t,n){var i,o,c,a,u=(null===e||void 0===e||null===(i=e.videos)||void 0===i?void 0:i.find((function(e){var n=e.number,i=e.watching;return t?+t===+n:i.status!==r.b.Watched})))||(null===e||void 0===e||null===(o=e.videos)||void 0===o?void 0:o[0]),l=(null===e||void 0===e||null===(c=e.seasons)||void 0===c?void 0:c.find((function(e){var t=e.number,i=e.watching;return n?+n===+t:i.status!==r.b.Watched})))||(null===e||void 0===e||null===(a=e.seasons)||void 0===a?void 0:a[0]),s=(null===l||void 0===l?void 0:l.episodes.find((function(e){var n=e.number,i=e.watching;return t?+t===+n:i.status!==r.b.Watched})))||(null===l||void 0===l?void 0:l.episodes[0]);return[u||s,l]}function o(e,t,n){var r=(null===e||void 0===e?void 0:e.title)||"";return n?"".concat(r," (s").concat((null===t||void 0===t?void 0:t.snumber)||1,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):r}function c(e,t,n){var r=(null===t||void 0===t?void 0:t.title)||"",i="s".concat((null===t||void 0===t?void 0:t.snumber)||1,"e").concat((null===t||void 0===t?void 0:t.number)||1);return n?r?"".concat(r," (").concat(i,")"):i:r}function a(e){return(null===e||void 0===e?void 0:e.quality)?2160===e.quality?"4k":1080===e.quality||720===e.quality?"hd":"sd":null}},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(906),i=n.n(r);function o(e){return i()(e)}},905:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var r,i,o=n(27),c=n.n(o),a=n(50),u=n(59),l=n(2),s=n(32),d=n(55),f=n.n(d),v=n(252),b=n(255),p=n(897),j=n(259),m=n(256),O=n(6),h=["title","titleId"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t){var n=e.title,o=e.titleId,c=y(e,h);return l.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":o},c),n?l.createElement("title",{id:o},n):null,r||(r=l.createElement("path",{d:"M436.714 26.001H75.287c-27.21 0-49.285 22.075-49.285 49.286v361.427c0 27.211 22.075 49.285 49.285 49.285h361.427c27.211 0 49.284-22.074 49.284-49.285V75.287c0-27.211-22.073-49.286-49.284-49.286z",fill:"#fbbf14"})),i||(i=l.createElement("path",{fill:"#273238",d:"M91.716 190.287h33.883v131.222H91.716zM241.831 321.509h-29.469v-88.714l-11.912 88.714H179.3l-12.528-86.763v86.763h-29.776V190.287h43.947c3.39 20.329 6.16 40.968 8.934 61.504l7.803-61.504h44.152v131.222zM330.544 236.8c0-8.317.31-17.25-1.438-25.055-4.414-23.102-32.24-21.458-50.311-21.458h-25.261v131.222c88.408.103 77.01 6.16 77.01-84.709zm-43.022 61.913v-85.94c12.219 0 10.576 6.47 10.576 16.428v50.622c.001 9.958 1.951 19.199-10.576 18.89zM395.949 223.656c-9.137 0-15.298 2.773-21.457 9.447v-42.816h-32.55v131.222h30.597l1.953-8.317c5.852 6.982 12.218 10.063 21.457 10.063 20.331 0 22.795-15.607 22.795-31.729v-36.963c0-17.763-.821-30.907-22.795-30.907zm-16.427 80.706c-1.642 0-3.081-.823-3.902-2.465-2.26-5.237-1.128-45.281-1.128-45.897 0-3.901-1.132-13.04 5.03-13.04 7.496 0 6.364 7.496 6.364 13.04v33.574c.001 5.546 1.644 14.788-6.364 14.788z"})))}var w,N=l.forwardRef(g),E=(n.p,["title","titleId"]);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function S(e,t){var n=e.title,r=e.titleId,i=I(e,E);return l.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"#ff6600",ref:t,"aria-labelledby":r},i),n?l.createElement("title",{id:r},n):null,w||(w=l.createElement("path",{d:"M15.518 10.736A8 8 0 11.482 5.264a8 8 0 0115.036 5.472zM8.94 8.342a1 1 0 10-1.88-.684 1 1 0 001.88.684zm-2.906 2.135A2 2 0 102.275 9.11a2 2 0 003.76 1.368zM8.086 4.84A2 2 0 104.328 3.47a2 2 0 003.758 1.368zm5.639 2.052a2 2 0 10-3.76-1.368 2 2 0 003.76 1.368zm-2.053 5.638a2 2 0 10-3.758-1.368 2 2 0 003.758 1.368z"})))}var M=l.forwardRef(S),C=(n.p,n(900)),A=n(901),_=n(3),R=function(e){var t=e.item,n=e.className,r=e.wrapperClassName,i=e.showViews,o=e.noCaption,d=e.disableNavigation,h=e.episodeId,x=e.seasonId,y=e.playOnClick,g=e.children,w=Object(s.h)(),E=Object(l.useState)(!1),k=Object(u.a)(E,2),I=k[0],S=k[1],R=Object(C.b)(t),z=Object(l.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),T=Object(l.useMemo)((function(){return i&&(null===t||void 0===t?void 0:t.views)&&Object(A.a)(null===t||void 0===t?void 0:t.views)||""}),[i,null===t||void 0===t?void 0:t.views]),P=Object(j.a)("itemMedia").itemMediaAsync,V=Object(l.useCallback)(Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===t||void 0===t?void 0:t.id)||d||!I){e.next=5;break}return e.next=3,P([t.id]);case 3:n=e.sent,w.push(Object(O.b)(O.a.Video,{itemId:null===n||void 0===n?void 0:n.item.id},h&&x?{episodeId:h,seasonId:x}:{}),{item:null===n||void 0===n?void 0:n.item});case 5:case"end":return e.stop()}}),e)}))),[null===t||void 0===t?void 0:t.id,d,h,x,I,w,P]),F=Object(l.useCallback)((function(){y?V():(null===t||void 0===t?void 0:t.id)&&!d&&w.push(Object(O.b)(O.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,d,y,V,w]);return Object(m.a)(["Play","Red"],V),Object(_.jsxs)(p.a,{onClick:F,onFocus:function(){return S(!0)},onBlur:function(){return S(!1)},source:null===t||void 0===t?void 0:t.posters.medium,caption:o?"":z,className:f()("h-72",n),wrapperClassName:r,children:[g,(null===t||void 0===t?void 0:t.new)&&Object(_.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new}),T&&Object(_.jsxs)("div",{className:"absolute top-2 right-2 h-6 pr-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:[Object(_.jsx)(b.a,{name:"visibility"}),T]}),x&&h&&Object(_.jsx)("div",{className:"absolute top-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:"s".concat(x,"e").concat(h)}),(R||(null===t||void 0===t?void 0:t.ac3)||(null===t||void 0===t?void 0:t.advert))&&Object(_.jsxs)("div",{className:"absolute top-2 left-2 h-6 bg-black bg-opacity-50 rounded flex items-center",children:[R&&Object(_.jsx)(b.a,{name:R}),(null===t||void 0===t?void 0:t.ac3)===v.a.True&&Object(_.jsx)(b.a,{name:"graphic_eq"}),(null===t||void 0===t?void 0:t.advert)&&Object(_.jsx)(b.a,{name:"report"})]}),((null===t||void 0===t?void 0:t.rating)>0||(null===t||void 0===t?void 0:t.imdb_rating)>0||(null===t||void 0===t?void 0:t.kinopoisk_rating)>0)&&Object(_.jsxs)("div",{className:"absolute bottom-2 left-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex justify-between items-center",children:[Object(_.jsxs)("div",{className:"flex items-center justify-start w-1/3",children:[Object(_.jsx)(N,{className:"h-3 w-3 mr-1"}),Object(_.jsx)("span",{children:((null===t||void 0===t?void 0:t.imdb_rating)||0).toFixed(1)})]}),Object(_.jsxs)("div",{className:"flex items-center justify-center w-1/3",children:[Object(_.jsx)(M,{className:"h-3 w-3 mr-1"}),Object(_.jsx)("span",{children:((null===t||void 0===t?void 0:t.kinopoisk_rating)||0).toFixed(1)})]}),Object(_.jsxs)("div",{className:"flex items-center justify-end w-1/3",children:[Object(_.jsx)(b.a,{name:"thumb_up"}),Object(_.jsxs)("span",{children:[(null===t||void 0===t?void 0:t.rating_percentage)||0,"%"]})]})]})]})}},906:function(e,t,n){"use strict";var r=n(911),i=n(27),o=i.mark(u);Object.defineProperty(t,"__esModule",{value:!0}),t.millify=void 0;var c=n(914),a=n(915);function u(e){var t,n;return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=1e3;case 1:if(!((n=e/t)<1)){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,n;case 7:t*=1e3,r.next=1;break;case 10:case"end":return r.stop()}}),o)}function l(e,t){var n,i=t?Object.assign(Object.assign({},c.defaultOptions),t):c.defaultOptions;if(!Array.isArray(i.units)||!i.units.length)throw new Error("Option `units` must be a non-empty array");var o=a.parseValue(e),l=o<0?"-":"";o=Math.abs(o);var s,d=0,f=r(u(o));try{for(f.s();!(s=f.n()).done;){o=s.value,d+=1}}catch(x){f.e(x)}finally{f.f()}if(d>=i.units.length)return e.toString();var v,b=a.roundTo(o,i.precision),p=r(u(b));try{for(p.s();!(v=p.n()).done;){b=v.value,d+=1}}catch(x){p.e(x)}finally{p.f()}var j=null!==(n=i.units[d])&&void 0!==n?n:"",m=i.lowercase?j.toLowerCase():j,O=i.space?" ":"",h=b.toString().replace(c.defaultOptions.decimalSeparator,i.decimalSeparator);return"".concat(l).concat(h).concat(O).concat(m)}t.millify=l,t.default=l},909:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(107),i=(n(2),n(55)),o=n.n(i),c=n(198),a=n.n(c),u=n(894),l=n(896),s=n(905),d=n(3),f=function(e){var t=e.title,n=e.items,i=e.loading,c=e.onScrollToEnd,f=e.scrollable,v=void 0===f||f,b=e.className,p=e.titleClassName,j=Object(d.jsxs)("div",{children:[Object(d.jsx)(l.a,{className:p,children:t}),Object(d.jsxs)("div",{className:o()("flex flex-wrap",b),children:[a()(n,(function(e){return Object(d.jsx)(s.a,{item:e},e.id)})),i&&a()(Object(r.a)(new Array(15)),(function(e,t){return Object(d.jsx)(s.a,{},t)}))]})]});return v?Object(d.jsx)(u.b,{onScrollToEnd:c,children:j}):j}},911:function(e,t,n){var r=n(912);e.exports=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw c}}}}},912:function(e,t,n){var r=n(913);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},913:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0,t.defaultOptions={decimalSeparator:".",lowercase:!1,precision:1,space:!1,units:["","K","M","B","T","P","E"]}},915:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.roundTo=t.parseValue=void 0,t.parseValue=function(e){var t=parseFloat(e.toString());if(isNaN(t))throw new Error("Input value is not a number");if(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)throw new RangeError("Input value is outside of safe integer range");return t},t.roundTo=function(e,t){if(!Number.isFinite(e))throw new Error("Input value is not a finite number");if(!Number.isInteger(t)||t<0)throw new Error("Precision is not a positive integer");return Number.isInteger(e)?e:parseFloat(e.toFixed(t))}}}]);
//# sourceMappingURL=6.867464f1.chunk.js.map