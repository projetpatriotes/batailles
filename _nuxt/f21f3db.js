(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{281:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("c5ced6f4",content,!0,{sourceMap:!1})},283:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("01232304",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";n(281)},290:function(t,e,n){var o=n(46)(!1);o.push([t.i,".dropdown-menu{position:relative;display:flex;flex-direction:column;align-items:center;align-content:center}.dropdown-menu button{background-color:transparent;font-size:1rem;cursor:pointer}.dropdown-menu ul{width:100%;top:2rem;background-color:#e0a96d;position:absolute;list-style-type:none;visibility:visible;border-radius:0 0 1rem 1rem}.dropdown-menu ul.dropdown-hidden{visibility:hidden}.dropdown-menu ul li{padding:1rem}.dropdown-menu ul li a:active,.dropdown-menu ul li a:focus,.dropdown-menu ul li a:hover{border-color:#fff!important;color:#e0a96d!important;background-color:#fff!important}.dropdown-menu ul li:first-of-type{margin-top:.625rem}.dropdown-menu ul li:last-of-type{margin-bottom:.625rem}",""]),t.exports=o},295:function(t,e,n){"use strict";n.r(e);var o={props:{titre:{type:String,default:function(){return"Caca"}},items:{type:Array,required:!0}},data:function(){return{dropdownOpen:!1}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{close:function(t){this.$el.contains(t.target)||(this.dropdownOpen=!1)}}},r=(n(289),n(48)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-menu"},[n("button",{class:{active:t.dropdownOpen},on:{click:function(e){t.dropdownOpen=!t.dropdownOpen}}},[t._v("\n    "+t._s(t.titre)+"\n  ")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.dropdownOpen,expression:"dropdownOpen"}]},t._l(t.items,(function(e,o){return n("li",{key:o},[n("NuxtLink",{attrs:{to:e.path}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,n){"use strict";n(283)},298:function(t,e,n){var o=n(46)(!1);o.push([t.i,".logo{color:transparent;background:linear-gradient(#368b48,#368b48 50%,#fff 0,#fff 65%,#c30026 0,#c30026);background:linear-gradient(#368b48 50%,#fff 50% 65%,#c30026 65% 100%);-webkit-background-clip:text;background-clip:text}.nav{z-index:1;width:100%;position:-webkit-sticky;position:sticky;top:0;background-color:#201e20;display:flex;align-items:center;flex-direction:row;height:5rem;color:#fff}.nav .logo{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;margin-left:1.5rem;font-size:2rem}.nav .nav-items{display:flex;list-style:none;flex-direction:row;margin-left:auto;align-items:center;align-content:center}.nav .nav-items .nav-item{text-align:center;margin:.5rem;position:relative}.nav .nav-items .nav-item:last-of-type{margin-right:1rem}.nav .nav-items .nav-item a,.nav .nav-items .nav-item button{color:#fff;text-decoration:none;border:1px solid #fff;border-radius:.75rem;padding:.75rem 1.5rem;transition:background-color .2s ease-in-out,color .2s ease-in-out}.nav .nav-items .nav-item a.active,.nav .nav-items .nav-item a:active,.nav .nav-items .nav-item a:focus,.nav .nav-items .nav-item a:hover,.nav .nav-items .nav-item button.active,.nav .nav-items .nav-item button:active,.nav .nav-items .nav-item button:focus,.nav .nav-items .nav-item button:hover{border-color:#e0a96d;color:#fff;background-color:#e0a96d}.nav .nav-items:last-child{margin-right:1vw}",""]),t.exports=o},319:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(49),n(2).a.extend({data:function(){return{listeDesBatailles:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("batailles").only(["title","path"]).fetch();case 2:t.listeDesBatailles=e.sent;case 3:case"end":return e.stop()}}),e)})))()}})),l=(n(297),n(48)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("span",{staticClass:"logo"},[t._v("Projet Patriotes")]),t._v(" "),n("ul",{staticClass:"nav-items"},[n("li",{staticClass:"nav-item"},[n("NuxtLink",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("DropDown",{attrs:{titre:"Batailles importantes",items:t.listeDesBatailles}})],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("DropDown",{attrs:{titre:"Personnages",items:[{title:"Anglais",path:"/personnages/anglais"},{title:"Français",path:"/personnages/francais"}]}})],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{attrs:{to:"/bibliographie"}},[t._v("Bibliographie")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DropDown:n(295).default})}}]);