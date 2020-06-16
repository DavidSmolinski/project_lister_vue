(function(t){function e(e){for(var n,i,l=e[0],a=e[1],c=e[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,l=1;l<s.length;l++){var a=s[l];0!==o[a]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=a;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),o=s.n(n);o.a},"0d62":function(t,e,s){},"42fe":function(t,e,s){t.exports=s.p+"img/vue_logo.125fe5eb.png"},"54d9":function(t,e,s){t.exports=s.p+"img/head.c5ba7dfc.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"title text-center"},[s("h2",[s("img",{staticClass:"App-logo",attrs:{src:t.img_urls.head,alt:"head"}}),t._v(" Portfolio Lister "),s("img",{staticClass:"App-logo",attrs:{src:t.img_urls.vue_logo,alt:"vue_logo"}})])]),t._m(0),s("div",{staticClass:"jumbotron"},[t._v(" This app is made with VueJS and JavaScript. It will allow users to select code skills (languages, modules, etc.) in my portfolio, and view projects that use those skills. For now, I'm using dummy data for skills and projects. ")]),t._m(1),s("div",{staticClass:"jumbotron links"},[s("a",{staticClass:"checkbox_link",attrs:{href:"https://davidsmolinski.github.io/project_lister/"}},[s("span",[s("label",[s("img",{staticClass:"App-logo-still",attrs:{src:t.img_urls.react_logo,alt:"react_logo"}}),t._v(" React version ")])])]),s("a",{staticClass:"checkbox_link",attrs:{href:"https://github.com/DavidSmolinski/project_lister/tree/master"}},[s("span",[s("label",[s("img",{staticClass:"App-logo-still",attrs:{src:t.img_urls.react_logo,alt:"react_logo"}}),t._v(" React code ")])])]),t._m(2)]),t._m(3),s("div",{staticClass:"jumbotron"},[t._v(" Click on skills to select or unselect them. Selected skills are highlighted orange. A list of projects with at least one of the selected skills will be shown. The number of selected skills (n.s. skills) a project uses is listed before its name. The list is ordered by the n.s. skills each project uses. When there is a difference in the n.s. skills per project, these differences are shown with green highlighting. Projects with more selected skills are greener. ")]),s("Lister")],1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jumbo-heading"},[s("h6",{staticClass:"date"},[t._v("by David Smolinski")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jumbo-heading"},[s("h6",{staticClass:"date"},[t._v("Links")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"checkbox_link",attrs:{href:"https://github.com/DavidSmolinski/portfolio/tree/master/table%20of%20contents"}},[s("span",[s("label",[t._v(" my code portfolio ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jumbo-heading"},[s("h6",{staticClass:"date"},[t._v("Instructions")])])}],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"jumbotron"},t._l(t.skills,(function(e){return s("span",{key:e.id,staticClass:"checkbox",class:t.color_skill(e.on),on:{click:function(s){return t.handle_click(e.id)}}},[s("label",[t._v(" "+t._s(e.name))])])})),0),t._m(1),s("div",{staticClass:"jumbotron"},t._l(t.projects_to_show,(function(e){return s("Project",{key:e,staticClass:"checkbox",attrs:{proj_i:e,projects_to_show:t.projects_to_show,projects_on:t.projects_on,name:t.projects[e].name}})})),1)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jumbo-heading"},[s("h6",{staticClass:"date"},[t._v("code skills")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jumbo-heading"},[s("h6",{staticClass:"date"},[t._v("projects with the selected skills")])])}],a=(s("cb29"),s("4de4"),s("d81d"),s("5530")),c={skills:[{id:0,name:"skill 0",on:!1},{id:1,name:"skill 1",on:!1},{id:2,name:"skill 2",on:!1},{id:3,name:"skill 3",on:!1},{id:4,name:"skill 4",on:!1},{id:5,name:"skill 5",on:!1}],projects:[{id:0,name:"project 0",url:"blank"},{id:1,name:"project 1",url:"blank"},{id:2,name:"project 2",url:"blank"},{id:3,name:"project 3",url:"blank"}],skills_projects:[[1,0,0,0],[1,1,1,0],[0,0,1,1],[1,0,1,0],[0,1,0,1],[1,1,0,0]]},u={add:function(t,e){return t.map((function(t,s){return t+e[s]}))},subtract:function(t,e){return t.map((function(t,s){return t-e[s]}))}},p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{style:t.color()},[s("label",[t._v(" "+t._s(t.num_proj_skills())+": "+t._s(t.name)+" ")])])},d=[],f=(s("99af"),{name:"Project",props:["proj_i","projects_to_show","projects_on","name"],methods:{num_proj_skills:function(){return this.projects_on[this.proj_i]},color:function(){var t=this.projects_to_show,e=this.projects_on,s=t[0],n=t[t.length-1],o=e[s],r=e[n],i=o-r,l=e[this.proj_i],a=0===i?255:255/i,c=255-Math.floor(a*(l-r));return{backgroundColor:"rgb(".concat(c,", 255, ").concat(c,")")}}}}),_=f,h=s("2877"),m=Object(h["a"])(_,p,d,!1,null,null,null),j=m.exports,v={name:"Lister",components:{Project:j},data:function(){return Object(a["a"])(Object(a["a"])({},c),{},{projects_to_show:[],projects_on:Array(c.skills_projects[0].length).fill(0)})},methods:{color_skill:function(t){return t?"on_skill_style":"off_skill_style"},handle_click:function(t){this.skills[t].on=!this.skills[t].on;var e=this.projects_on;e=this.skills[t].on?u.add(e,this.skills_projects[t]):u.subtract(e,this.skills_projects[t]),this.projects_on=e,this.projects_to_show=e.map((function(t,e){return[t,e]})).filter((function(t){return 0!==t[0]})).sort((function(t,e){return e[0]-t[0]})).map((function(t){return t[1]}))}}},b=v,g=(s("b508"),Object(h["a"])(b,i,l,!1,null,null,null)),k=g.exports,w={name:"App",components:{Lister:k},data:function(){return{img_urls:{vue_logo:s("42fe"),react_logo:s("ca62"),head:s("54d9")}}}},y=w,C=(s("034f"),Object(h["a"])(y,o,r,!1,null,null,null)),x=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,s){},b508:function(t,e,s){"use strict";var n=s("0d62"),o=s.n(n);o.a},ca62:function(t,e,s){t.exports=s.p+"img/react_logo.8260e3f9.png"}});
//# sourceMappingURL=app.b3924ee4.js.map