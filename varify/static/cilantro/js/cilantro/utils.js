define(["jquery","./utils/numbers","./utils/url","./utils/version"],function(t){var e=Array.prototype.slice.call(arguments,1),n=function(t,e){document.cookie=t+"="+window.escape(e)+"; path=/"},i=function(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){var o=n[i].trim();if(0===o.indexOf(e))return o.substring(e.length,o.length)}},o=function(t,e,n){for(var i=e.split("."),o=0;o<i.length;o++)if(t=t[i[o]],void 0===t)return n;return"function"==typeof t?t.apply():t},r=function(e,n,i){if("object"==typeof n)return i===!0?t.extend(!0,{},n):t.extend(!0,e,n);for(var o,r=n.split("."),s=r.pop(),a=0;a<r.length;a++)o=r[a],void 0===e[o]&&(e[o]={}),e=e[o];e[s]=i},s=function(t){console.log(JSON.stringify(t,null,4))};return e.unshift({pprint:s,getDotProp:o,getCookie:i,setCookie:n,setDotProp:r}),t.extend.apply(null,e)});
//@ sourceMappingURL=utils.js.map