!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=60)}({0:function(t,r){t.exports=e},1:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,l(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.PureComponent),r=t,(n=[{key:"render",value:function(){return this.props.icon(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}({},this.props))}}])&&u(r.prototype,n),i&&u(r,i),t}();t.default=p},60:function(e,t,r){"use strict";r.r(t),r.d(t,"IconRDBEAR",function(){return u}),r.d(t,"SVGRDBEAR",function(){return c});var n=r(0),o=r.n(n),i=r(1),c=function(){return o.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},o.a.createElement("title",null,"icons/underlying assets/volatility/bear market/ic-marketbear"),o.a.createElement("defs",null,o.a.createElement("circle",{id:"a",cx:"10",cy:"10",r:"10"}),o.a.createElement("circle",{id:"c",cx:"10",cy:"10",r:"10"})),o.a.createElement("g",{transform:"translate(6 6)",fill:"none","fill-rule":"evenodd"},o.a.createElement("mask",{id:"b",fill:"#fff"},o.a.createElement("use",{xlinkHref:"#a"})),o.a.createElement("use",{fill:"#D20000",xlinkHref:"#a"}),o.a.createElement("path",{d:"M9.718 4.296a64.16 64.16 0 0 0 1.601-.172c.394.203.605.56.635 1.072 2.138 2.058 3.207 3.599 3.207 4.621a28.905 28.905 0 0 1 2.864 2.5.339.339 0 0 1 .017.462c-.597.687-1.21 1.03-1.836 1.03.03.17.034.322.01.456-.03.175-.417.402-.596.384-1.353-.13-2.464-.532-3.78-.998-3.8-.474-6.696.683-7.025 3.096-.22 1.608-.22 3.943 0 7.003C.932 16.254-.872 10.548-.598 6.63c.274-3.917 2.125-5.048 5.553-3.392 1.088.462 1.92.758 2.499.886.578.129 1.332.186 2.264.172z",fill:"#FFF",mask:"url(#b)"}),o.a.createElement("circle",{stroke:"#D20000","stroke-width":"1.25",cx:"10",cy:"10",r:"9.375"})))},u=function(){return o.a.createElement(i.default,{icon:c})};u.displayName="IconRDBEAR",c.displayName="SVGRDBEAR"}})});