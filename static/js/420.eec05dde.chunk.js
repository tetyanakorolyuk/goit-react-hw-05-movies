"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[420],{8420:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(885),a=n(2791),u=n(501),s=n(6871),c=n(1207),i=n(5340),o="MoviesPage_searchbar__zuyTo",p="MoviesPage_form__2deBf",l="MoviesPage_button__AUtxX",f="MoviesPage_buttonLabel__puUpj",d="MoviesPage_input__16dJ5",h="MoviesPage_gallery__SYKcL",_="MoviesPage_link__Lj8cH",m="MoviesPage_movieName__3+KKL",v="MoviesPage_subName__6IMv5",g=n(184);function b(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],b=t[1],x=(0,a.useState)(""),y=(0,r.Z)(x,2),w=y[0],k=y[1],j=(0,u.lr)(),N=(0,r.Z)(j,2),M=N[0],P=N[1],S=M.get("query"),U=(0,s.TH)();(0,a.useEffect)((function(){var e=new AbortController;if(""!==S){return S&&c.bI(S).then((function(t){if(0===t.length)return b(null);e.signal.aborted||b(t.results)})),function(){e.abort()}}}),[S]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("header",{className:o,children:(0,g.jsxs)("form",{className:p,onSubmit:function(e){if(e.preventDefault(),""!==w.trim()){var t=new FormData(e.currentTarget).get("query");t&&(P({query:t}),k(""))}},children:[(0,g.jsx)("input",{className:d,type:"text",defaultValue:null!==S&&void 0!==S?S:void 0,name:"query",autoComplete:"off",autoFocus:!0,onChange:function(e){k(e.currentTarget.value.toLowerCase())},placeholder:"Search movies"}),(0,g.jsx)("button",{type:"submit",className:l,children:(0,g.jsx)("span",{className:f,children:"Search"})})]})}),(0,g.jsx)("ul",{className:h,children:n&&n.map((function(e){return(0,g.jsx)("li",{children:(0,g.jsxs)(u.rU,{to:"/movies/".concat(e.id),className:_,state:{from:U},children:[(0,g.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w300/".concat(e.poster_path):i,alt:e.title}),(0,g.jsx)("h3",{className:m,children:e.title}),(0,g.jsx)("p",{className:v,children:e.release_date.slice(0,4)?e.release_date.slice(0,4):"Unknown"})]})},e.id)}))})]})}},1207:function(e,t,n){n.d(t,{wr:function(){return o},bI:function(){return l},l2:function(){return d},fU:function(){return _},sv:function(){return v}});var r=n(5861),a=n(7757),u=n.n(a),s=n(4569),c=n.n(s);c().defaults.baseURL="https://api.themoviedb.org/3/";var i="482f454f93dfd7b9b5303b154f274252";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5340:function(e,t,n){e.exports=n.p+"static/media/defaultImage.fe8b8cd8275447e5ce04.jpg"}}]);
//# sourceMappingURL=420.eec05dde.chunk.js.map