webpackJsonp([0],{109:function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(21),i=r(497),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(189):void 0!==t&&(e=r(189)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(s)}),e.exports=a}).call(t,r(496))},187:function(e,t,r){e.exports=r(493)},188:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},189:function(e,t,r){"use strict";var n=r(21),o=r(498),i=r(500),s=r(501),a=r(502),u=r(190),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(503);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,_="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,_="onload",h=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var m=e.auth.username||"",v=e.auth.password||"";p.Authorization="Basic "+c(m+":"+v)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[_]=function(){if(d&&(4===d.readyState||h)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:r,config:e,request:d};o(t,f,i),d=null}},d.onerror=function(){f(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var y=r(504),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;w&&(p[e.xsrfHeaderName]=w)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},190:function(e,t,r){"use strict";var n=r(499);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},191:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},192:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},193:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.AuthState=void 0;!function(e){e[e.Success=0]="Success",e[e.Fail=1]="Fail",e[e.None=2]="None"}(n||(t.AuthState=n={}));var o=t.UserRole=void 0;!function(e){e.Admin="ROLE_ADMIN",e.User="ROLE_USER"}(o||(t.UserRole=o={}));!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"AuthState","C:/work/bacs-view/src/typings.ts"),__REACT_HOT_LOADER__.register(o,"UserRole","C:/work/bacs-view/src/typings.ts"))}()},21:function(e,t,r){"use strict";function n(e){return"[object Array]"===C.call(e)}function o(e){return"[object ArrayBuffer]"===C.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===C.call(e)}function p(e){return"[object File]"===C.call(e)}function d(e){return"[object Blob]"===C.call(e)}function _(e){return"[object Function]"===C.call(e)}function h(e){return f(e)&&_(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function E(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=E(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)w(arguments[r],e);return t}function T(e,t,r){return w(t,function(t,n){e[n]=r&&"function"==typeof t?g(t,r):t}),e}var g=r(188),A=r(494),C=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isBuffer:A,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:_,isStream:h,isURLSearchParams:m,isStandardBrowserEnv:y,forEach:w,merge:E,extend:T,trim:v}},480:function(e,t,r){e.exports=r(481)},481:function(e,t,r){"use strict";(function(e){function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}var o=r(13),i=n(o),s=r(0),a=t(s),u=r(16),c=t(u),f=r(482),l=r(487),p=n(l);e.__MUI_SvgIcon__=i.default;var d=document.getElementById("react-root"),_=function(e){c.render(a.createElement(f.AppContainer,null,a.createElement(e,null)),d)};_(p.default);!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"rootElement","C:/work/bacs-view/src/index.tsx"),__REACT_HOT_LOADER__.register(_,"render","C:/work/bacs-view/src/index.tsx"))}()}).call(t,r(24))},482:function(e,t,r){e.exports=r(483)},483:function(e,t,r){"use strict";e.exports=r(484)},484:function(e,t,r){"use strict";e.exports.AppContainer=r(485)},485:function(e,t,r){"use strict";e.exports=r(486)},486:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),u=a.Component,c=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return this.props.component?a.createElement(this.props.component,this.props.props):a.Children.only(this.props.children)}}]),t}(u);e.exports=c},487:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(o),s=r(73),a=r(182),u=n(a),c=r(181),f=n(c),l=r(96),p=n(l),d=r(67),_=n(d),h=r(488),m=n(h),v=r(27),y=n(v),w=r(513),E=n(w),T=r(515),g=n(T),A=(0,s.createMuiTheme)({typography:{fontFamily:"Segoe UI"},palette:{primary:u.default,secondary:f.default,error:p.default,grey:_.default,text:{secondary:"#7B7B7B"}}}),C={main:{margin:"auto",maxWidth:"90%"},contestListWrapper:{padding:"15px 10px",backgroundColor:"#A0BDCB"}},O=function(e){return i.createElement(s.MuiThemeProvider,{theme:A},i.createElement(g.default,null,i.createElement("div",{className:e.classes.main},i.createElement(E.default,null),i.createElement(y.default,{className:e.classes.contestListWrapper},i.createElement(m.default,null)))))},R=(0,s.withStyles)(C)(O);t.default=R;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(A,"muiTheme","C:/work/bacs-view/src/app/app.tsx"),__REACT_HOT_LOADER__.register(C,"styles","C:/work/bacs-view/src/app/app.tsx"),__REACT_HOT_LOADER__.register(O,"App","C:/work/bacs-view/src/app/app.tsx"),__REACT_HOT_LOADER__.register(R,"default","C:/work/bacs-view/src/app/app.tsx"))}()},488:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(o),s=r(489),a=n(s),u=r(4),c=n(u),f=r(492),l=n(f),p=r(54),d=n(p),_=r(20),h=n(_),m=r(512),v=n(m),y=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),w={cardWrapper:{marginBottom:20},wrapper:{}},E=function(e){function t(t){var r=e.call(this,t)||this;return r.state={contests:[],expandedContestIndx:-1},r}return y(t,e),t.prototype.fetchContests=function(){var e=this;l.default.GetContests().then(function(t){return e.setState({contests:t})})},t.prototype.componentDidMount=function(){this.fetchContests()},t.prototype.handleExpandContest=function(e,t,r){this.setState(function(e){return{expandedContestIndx:e.expandedContestIndx!==r||t?r:-1}})},t.prototype.render=function(){var e=this,t=this.props.classes;return i.createElement("div",null,i.createElement("div",{className:t.wrapper},i.createElement(d.default,{style:{verticalAlign:"middle"},color:"contrast",onClick:this.fetchContests},i.createElement(v.default,null)),i.createElement(h.default,{type:"title",style:{display:"inline"}},"Список доступных вам контестов:")),this.state.contests&&this.state.contests.map(function(r,n){return i.createElement("div",{key:r.id,className:t.cardWrapper},i.createElement(a.default,{isExpanded:e.state.expandedContestIndx===n,contest:r,onExpand:function(t,r){return e.handleExpandContest(t,r,n)}}))}))},t}(i.Component),T=(0,c.default)(w)(E);t.default=T;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"__extends","C:/work/bacs-view/src/contest/contestList.tsx"),__REACT_HOT_LOADER__.register(w,"styles","C:/work/bacs-view/src/contest/contestList.tsx"),__REACT_HOT_LOADER__.register(E,"ContestList","C:/work/bacs-view/src/contest/contestList.tsx"),__REACT_HOT_LOADER__.register(T,"default","C:/work/bacs-view/src/contest/contestList.tsx"))}()},489:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r=(0,l.getDateDiff)(t,e,l.TimeDiffType.Minutes),n=r/60|0,o=r%60;return(n||"")+"ч. "+(0,l.padToTwoDigit)(o)+"мин."}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(i),a=r(163),u=n(a),c=r(20),f=n(c),l=r(490),p=r(491),d=n(p),_=r(73),h={},m=function(e){var t=e.contest,r=e.isExpanded,n=e.onExpand,i=(e.classes,new Date(t.startTime)),c=new Date(t.finishTime),p=new Date;return s.createElement(u.default,{expanded:r,onChange:n},s.createElement(a.ExpansionPanelSummary,{expandIcon:s.createElement(d.default,null)},s.createElement("div",null,s.createElement(f.default,{type:"headline"},t.name),s.createElement(f.default,{type:"subheading"},p<i&&"Начнется "+(0,l.format)(i),p>c&&"Закончился "+((0,l.getDateDiff)(p,c,l.TimeDiffType.Day)>1?(0,l.format)(c,l.FormatType.Date):(0,l.getDateDiff)(p,c,l.TimeDiffType.Hour)<=1?"менее часа назад":(0,l.getDateDiff)(p,c,l.TimeDiffType.Hour)+"часов назад"),p>i&&p<c&&((0,l.getDateDiff)(c,p,l.TimeDiffType.Day)>1?"Закончится "+(0,l.format)(c):"До конца контеста осталось "+o(p,c))))))},v=(0,_.withStyles)(h)(m);t.default=v;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"formatContinuingContestTime","C:/work/bacs-view/src/contest/contestCard.tsx"),__REACT_HOT_LOADER__.register(h,"styles","C:/work/bacs-view/src/contest/contestCard.tsx"),__REACT_HOT_LOADER__.register(m,"ContestCard","C:/work/bacs-view/src/contest/contestCard.tsx"),__REACT_HOT_LOADER__.register(v,"default","C:/work/bacs-view/src/contest/contestCard.tsx"))}()},490:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.padToTwoDigit=function(e){return e<=9?"0"+e:e},o=t.FormatType=void 0;!function(e){e[e.Date=1]="Date",e[e.Time=2]="Time",e[e.TimeAndDate=3]="TimeAndDate"}(o||(t.FormatType=o={}));var i=t.format=function(e,t){switch(void 0===t&&(t=o.TimeAndDate),t){case o.Date:return a(e);case o.Time:return u(e);case o.TimeAndDate:return a(e)+" в "+u(e)}},s=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","ноября","декабря"],a=function(e){return[e.getDate(),s[e.getMonth()],e.getFullYear()!==(new Date).getFullYear()?e.getFullYear():null].filter(function(e){return e}).join(" ")},u=function(e){return e.getHours()+":"+n(e.getMinutes())},c=function(e){return a(e)+" в "+u(e)},f=t.TimeDiffType=void 0;!function(e){e[e.Day=864e5]="Day",e[e.Hour=36e5]="Hour",e[e.Minutes=6e4]="Minutes"}(f||(t.TimeDiffType=f={}));var l=t.getDateDiff=function(e,t,r){return void 0===r&&(r=f.Day),(e.getTime()-t.getTime())/r|0};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"padToTwoDigit","C:/work/bacs-view/src/DateFormats.ts"),__REACT_HOT_LOADER__.register(o,"FormatType","C:/work/bacs-view/src/DateFormats.ts"),__REACT_HOT_LOADER__.register(i,"format","C:/work/bacs-view/src/DateFormats.ts"),__REACT_HOT_LOADER__.register(s,"months","C:/work/bacs-view/src/DateFormats.ts"),__REACT_HOT_LOADER__.register(a,"formatDate","C:/work/bacs-view/src/DateFormats.ts"),__REACT_HOT_LOADER__.register(u,"formatTime","C:/work/bacs-view/src/DateFormats.ts"),__REACT_HOT_LOADER__.register(c,"formatDateWithTime","C:/work/bacs-view/src/DateFormats.ts"),__REACT_HOT_LOADER__.register(36e5,"hour","C:/work/bacs-view/src/DateFormats.ts"),__REACT_HOT_LOADER__.register(f,"TimeDiffType","C:/work/bacs-view/src/DateFormats.ts"),__REACT_HOT_LOADER__.register(l,"getDateDiff","C:/work/bacs-view/src/DateFormats.ts"))}()},491:function(e,t,r){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),s=r(18),a=n(s),u=r(13),c=n(u),f=e.__MUI_SvgIcon__||c.default,l=i.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),p=function(e){return i.default.createElement(f,e,l)};p=(0,a.default)(p),p.muiName="SvgIcon",t.default=p}).call(t,r(24))},492:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(187),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i={"Content-Type":"application/json"};o.default.defaults.baseURL="https://bacs007.herokuapp.com/",o.default.defaults.headers=i;var s=function(){function e(){}return e.GetContests=function(){return o.default.get("contests").then(function(e){return e.data})},e.GetContestInfo=function(e){return o.default.get("contests"+e).then(function(e){return e.data})},e}(),a=s;t.default=a;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"defaultHeaders","C:/work/bacs-view/src/api/contestApi.ts"),__REACT_HOT_LOADER__.register(s,"ContestApi","C:/work/bacs-view/src/api/contestApi.ts"),__REACT_HOT_LOADER__.register(a,"default","C:/work/bacs-view/src/api/contestApi.ts"))}()},493:function(e,t,r){"use strict";function n(e){var t=new s(e),r=i(s.prototype.request,t);return o.extend(r,s.prototype,t),o.extend(r,t),r}var o=r(21),i=r(188),s=r(495),a=r(109),u=n(a);u.Axios=s,u.create=function(e){return n(o.merge(a,e))},u.Cancel=r(192),u.CancelToken=r(510),u.isCancel=r(191),u.all=function(e){return Promise.all(e)},u.spread=r(511),e.exports=u,e.exports.default=u},494:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},495:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=r(109),i=r(21),s=r(505),a=r(506);n.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},i.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(i.merge(r||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(i.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},496:function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function s(){h&&d&&(h=!1,d.length?_=d.concat(_):m=-1,_.length&&a())}function a(){if(!h){var e=o(s);h=!0;for(var t=_.length;t;){for(d=_,_=[];++m<t;)d&&d[m].run();m=-1,t=_.length}d=null,h=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(e){l=n}}();var d,_=[],h=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];_.push(new u(e,t)),1!==_.length||h||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},497:function(e,t,r){"use strict";var n=r(21);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},498:function(e,t,r){"use strict";var n=r(190);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},499:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},500:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(21);e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(n(t)+"="+n(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},501:function(e,t,r){"use strict";var n=r(21),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}}),s):s}},502:function(e,t,r){"use strict";var n=r(21);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},503:function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),s="",a=0,u=i;o.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if((r=o.charCodeAt(a+=.75))>255)throw new n;t=t<<8|r}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},504:function(e,t,r){"use strict";var n=r(21);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},505:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(21);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},506:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(21),i=r(507),s=r(191),a=r(109),u=r(508),c=r(509);e.exports=function(e){return n(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(n(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},507:function(e,t,r){"use strict";var n=r(21);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},508:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},509:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},510:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(192);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},511:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},512:function(e,t,r){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),s=r(18),a=n(s),u=r(13),c=n(u),f=e.__MUI_SvgIcon__||c.default,l=i.default.createElement("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),p=function(e){return i.default.createElement(f,e,l)};p=(0,a.default)(p),p.muiName="SvgIcon",t.default=p}).call(t,r(24))},513:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(o),s=r(108),a=n(s),u=r(20),c=n(u),f=r(514),l=n(f),p=r(112),d=n(p),_=function(){return i.createElement(d.default,{position:"static",color:"primary"},i.createElement(a.default,null,i.createElement(c.default,{type:"title",color:"inherit"},"Добро пожаловать, любитель контестов!")," ",i.createElement(l.default,null)))},h=_;t.default=h;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"Header","C:/work/bacs-view/src/app/header.tsx"),__REACT_HOT_LOADER__.register(h,"default","C:/work/bacs-view/src/app/header.tsx"))}()},514:function(e,t,r){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),s=r(18),a=n(s),u=r(13),c=n(u),f=e.__MUI_SvgIcon__||c.default,l=i.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),p=function(e){return i.default.createElement(f,e,l)};p=(0,a.default)(p),p.muiName="SvgIcon",t.default=p}).call(t,r(24))},515:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(o),s=r(153),a=n(s),u=r(186),c=n(u),f=r(100),l=n(f),p=r(516),d=n(p),_=r(193),h=r(4),m=n(h),v=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),y=function(e){function t(t){var r=e.call(this,t)||this;return r.signUp=function(){d.default.SignUp(r.state.login,r.state.password).catch(function(e){return r.setState({errorMessage:e.response.data}),Promise.reject(_.AuthState.Fail)}).then(function(){return r.tryAuthorize()}).catch(function(e){return r.setState({authState:e||_.AuthState.Fail})})},r.tryAuthorize=function(){d.default.Auth(r.state.login,r.state.password).then(function(e){return r.setState({authState:e})})},r.handleInputKeyPressed=function(e){13!==e.key&&"Enter"!==e.key||r.tryAuthorize()},r.state={login:"",password:"",authState:d.default.CheckAuth(),errorMessage:""},r}return v(t,e),t.prototype.render=function(){var e=this;if(this.state.authState===_.AuthState.Success)return this.props.children;var t=this.state.authState===_.AuthState.Fail;return i.createElement(a.default,{className:this.props.classes.root,disableBackdropClick:!0,disableEscapeKeyDown:!0,open:!0},i.createElement(s.DialogTitle,null,"Вход"),i.createElement(s.DialogContent,null,i.createElement(c.default,{autoFocus:!0,fullWidth:!0,placeholder:"Логин",value:this.state.login,error:t,onChange:function(t){return e.setState({login:t.target.value})},onKeyPress:this.handleInputKeyPressed,type:"text"}),i.createElement(c.default,{fullWidth:!0,placeholder:"Пароль",value:this.state.password,error:t,onChange:function(t){return e.setState({password:t.target.value})},onKeyPress:this.handleInputKeyPressed,type:"password"}),i.createElement("span",null,this.state.errorMessage&&this.state.errorMessage)),i.createElement(s.DialogActions,null,i.createElement(l.default,{onClick:this.signUp,color:"primary"},"Зарегистрироваться"),i.createElement(l.default,{onClick:this.tryAuthorize,color:"primary"},"Войти")))},t}(i.Component),w={root:{height:"inherit !important"}},E=(0,m.default)(w)(y);t.default=E;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(v,"__extends","C:/work/bacs-view/src/auth/auth.tsx"),__REACT_HOT_LOADER__.register(y,"Auth","C:/work/bacs-view/src/auth/auth.tsx"),__REACT_HOT_LOADER__.register(w,"styles","C:/work/bacs-view/src/auth/auth.tsx"),__REACT_HOT_LOADER__.register(E,"default","C:/work/bacs-view/src/auth/auth.tsx"))}()},516:function(e,t,r){"use strict";function n(e){if(!e)return null;e=e.split(" ")[1];var t=e.split(".")[1],r=t.replace("-","+").replace("_","/");return JSON.parse(window.atob(r))}Object.defineProperty(t,"__esModule",{value:!0});var o=r(517),i=function(e){return e&&e.__esModule?e:{default:e}}(o),s=r(193),a=function(e){return(document.cookie.split(";").map(function(e){return e.trimLeft()}).find(function(t){return t.startsWith(e)})||"").substring(1+e.length)},u=function(){function e(){}return e.SignUp=function(e,t){return i.default.SignUp(e,t)},e.Auth=function(e,t){return i.default.Auth(e,t).then(function(e){console.log(e);var t=e.headers.authorization;return i.default.SetJWT("authorization",t),document.cookie="AuthBacsToken="+t,s.AuthState.Success}).catch(function(){return Promise.resolve(s.AuthState.Fail)})},e.GetSessionInfo=function(){return n(a("AuthBacsToken"))},e.CheckAuth=function(){var e=a("AuthBacsToken"),t=n(e),r=t&&t.exp?new Date(1e3*t.exp):null,o=new Date;return r&&o<r?(i.default.SetJWT("authorization",e),s.AuthState.Success):s.AuthState.None},e}(),c=u;t.default=c;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"parseJwt","C:/work/bacs-view/src/auth/authService.ts"),__REACT_HOT_LOADER__.register("AuthBacsToken","authCookieJWT","C:/work/bacs-view/src/auth/authService.ts"),__REACT_HOT_LOADER__.register(a,"getFromCookies","C:/work/bacs-view/src/auth/authService.ts"),__REACT_HOT_LOADER__.register("authorization","authHeaderName","C:/work/bacs-view/src/auth/authService.ts"),__REACT_HOT_LOADER__.register(u,"AuthService","C:/work/bacs-view/src/auth/authService.ts"),__REACT_HOT_LOADER__.register(c,"default","C:/work/bacs-view/src/auth/authService.ts"))}()},517:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(187),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=function(){function e(){}return e.SignUp=function(e,t){return o.default.post("sign-up",{username:e,password:t})},e.Auth=function(e,t){return o.default.post("login",{username:e,password:t})},e.SetJWT=function(e,t){o.default.defaults.headers[e]=t},e}(),s=i;t.default=s;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"AuthApi","C:/work/bacs-view/src/api/authApi.ts"),__REACT_HOT_LOADER__.register(s,"default","C:/work/bacs-view/src/api/authApi.ts"))}()}},[480]);