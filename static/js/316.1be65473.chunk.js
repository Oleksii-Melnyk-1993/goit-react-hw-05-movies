"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[316],{245:function(e,r,t){t.d(r,{a:function(){return o}});var n,s=t(168),a=t(487).ZP.div(n||(n=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 110vh;\n"]))),i=t(184),o=function(e){var r=e.children;return(0,i.jsx)(a,{children:r})}},155:function(e,r,t){t.d(r,{O:function(){return l}});var n=t(689),s=t(87),a="MoviesList_listMovies__uQIHW",i="MoviesList_movieItem__p4FQU",o="MoviesList_poster__aewlD",c="MoviesList_movieName__HnGim",u=t(184),l=function(e){var r=e.movies,t=(0,n.TH)();return(0,u.jsx)("ul",{className:a,children:r.map((function(e){return(0,u.jsx)("li",{className:i,children:(0,u.jsxs)(s.rU,{to:"/movies/".concat(e.id),state:{from:t},children:[(0,u.jsx)("img",{className:o,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://www.reelviews.net/resources/img/default_poster.jpg",alt:e.title}),(0,u.jsx)("p",{className:c,children:e.title})]})},e.id)}))})}},316:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n,s=t(165),a=t(433),i=t(861),o=t(439),c=t(168),u=t(87),l=t(791),m=t(231),h=t(14),v="MovieSearchForm_formContainer__c0Ue8",f="MovieSearchForm_formSearch__gosL-",_="MovieSearchForm_input__L3jrA",p="MovieSearchForm_buttonSubmit__Deu3r",d=t(184),g=function(){var e,r=(0,u.lr)(),t=(0,o.Z)(r,2),n=t[0],s=t[1],a=null!==(e=n.get("searchQuery"))&&void 0!==e?e:"";return(0,d.jsx)("div",{className:v,children:(0,d.jsxs)("form",{className:f,autoComplete:"off",onSubmit:function(e){e.preventDefault(),""!==e.target.elements.searchQuery.value.trim()?(s({searchQuery:e.target.elements.searchQuery.value}),e.currentTarget.reset()):h.ZP.error("Please, enter something")},children:[(0,d.jsx)("input",{className:_,type:"text",placeholder:"Enter movie...",name:"searchQuery",defaultValue:a}),(0,d.jsx)("button",{className:p,type:"submit",children:"Search"})]})})},x=t(155),j=t(245),Z=t(780),b=(0,t(294).iv)(n||(n=(0,c.Z)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),w=function(){var e=(0,l.useState)([]),r=(0,o.Z)(e,2),t=r[0],n=r[1],c=(0,l.useState)(!1),v=(0,o.Z)(c,2),f=v[0],_=v[1],p=(0,u.lr)(),w=(0,o.Z)(p,1)[0].get("searchQuery");return(0,l.useEffect)((function(){if(w){var e=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,m.vw)(w);case 4:if(r=e.sent,n((0,a.Z)(r.results)),r.results.length){e.next=8;break}return e.abrupt("return",h.ZP.error("No matches, try to find other movie"));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error",e.t0.message);case 13:return e.prev=13,_(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[w]),(0,d.jsxs)("div",{children:[f&&(0,d.jsx)(j.a,{children:(0,d.jsx)(Z.Z,{color:"#36D7B7",css:b,loading:f})}),(0,d.jsx)(g,{}),(0,d.jsx)(x.O,{movies:t})]})}}}]);
//# sourceMappingURL=316.1be65473.chunk.js.map