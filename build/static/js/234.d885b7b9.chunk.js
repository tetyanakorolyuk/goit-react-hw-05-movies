"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[234],{7234:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(907);var a=e(181);function c(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=e(885),i=e(2791),o=e(6871),s=e(1207),p=e(9309),f="Cast_cast__ZilR+",l="Cast_actor__YauAu",h=e(184);function d(){var t=(0,o.UO)().movieId,n=(0,i.useState)([]),e=(0,u.Z)(n,2),r=e[0],a=e[1];(0,i.useEffect)((function(){s.fU(t).then((function(t){a(t.cast)}))}),[t]);var d=c(r).slice(0,12);return console.log(r),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{className:f,children:r&&d.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w300".concat(t.profile_path):p,alt:t.name}),(0,h.jsx)("p",{className:l,children:t.original_name}),(0,h.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}},1207:function(t,n,e){e.d(n,{wr:function(){return s},bI:function(){return f},l2:function(){return h},fU:function(){return m},sv:function(){return y}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="482f454f93dfd7b9b5303b154f274252";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("trending/movie/day?api_key=".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("search/movie?api_key=".concat(o,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9309:function(t,n,e){t.exports=e.p+"static/media/defaultPhoto.bfef5c6ce52ad41e7422.jpg"}}]);
//# sourceMappingURL=234.d885b7b9.chunk.js.map