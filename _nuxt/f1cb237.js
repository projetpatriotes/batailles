(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4,5,6],{280:function(e,t,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("c5ced6f4",content,!0,{sourceMap:!1})},281:function(e,t,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("9d346d74",content,!0,{sourceMap:!1})},282:function(e,t,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("01232304",content,!0,{sourceMap:!1})},283:function(e,t,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("97af45e8",content,!0,{sourceMap:!1})},284:function(e,t,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("343fd9f8",content,!0,{sourceMap:!1})},285:function(e,t,n){"use strict";n(280)},286:function(e,t,n){var r=n(46)(!1);r.push([e.i,".dropdown-menu{position:relative;display:flex;flex-direction:column;align-items:center;align-content:center}.dropdown-menu button{background-color:transparent;font-size:1rem;cursor:pointer}.dropdown-menu ul{width:100%;top:2rem;background-color:#e0a96d;position:absolute;list-style-type:none;visibility:visible;border-radius:0 0 1rem 1rem}.dropdown-menu ul.dropdown-hidden{visibility:hidden}.dropdown-menu ul li{padding:1rem}.dropdown-menu ul li a:active,.dropdown-menu ul li a:focus,.dropdown-menu ul li a:hover{border-color:#fff!important;color:#e0a96d!important;background-color:#fff!important}.dropdown-menu ul li:first-of-type{margin-top:.625rem}.dropdown-menu ul li:last-of-type{margin-bottom:.625rem}",""]),e.exports=r},287:function(e,t,n){"use strict";n(281)},288:function(e,t,n){var r=n(46)(!1);r.push([e.i,".arrow-downward-icon{height:48px;width:48px}",""]),e.exports=r},289:function(e,t,n){"use strict";n.r(t);var r={props:{titre:{type:String,default:function(){return"Caca"}},items:{type:Array,required:!0}},data:function(){return{dropdownOpen:!1}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{close:function(e){this.$el.contains(e.target)||(this.dropdownOpen=!1)}}},o=(n(285),n(48)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdown-menu"},[n("button",{on:{click:function(t){e.dropdownOpen=!e.dropdownOpen}}},[e._v("\n    "+e._s(e.titre)+"\n  ")]),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.dropdownOpen,expression:"dropdownOpen"}]},e._l(e.items,(function(t,r){return n("li",{key:r},[n("NuxtLink",{attrs:{to:t.path}},[e._v("\n        "+e._s(t.title)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);t.default=component.exports},290:function(e,t,n){"use strict";n.r(t);n(287);var r=n(48),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"arrow-downward-icon",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M24 39.4Q23.75 39.4 23.475 39.3Q23.2 39.2 22.95 38.95L9.05 25.05Q8.6 24.6 8.6 24Q8.6 23.4 9.05 22.95Q9.5 22.5 10.1 22.5Q10.7 22.5 11.15 22.95L22.5 34.3V9.5Q22.5 8.85 22.925 8.425Q23.35 8 24 8Q24.65 8 25.075 8.425Q25.5 8.85 25.5 9.5V34.3L36.85 22.95Q37.3 22.5 37.9 22.5Q38.5 22.5 38.95 22.95Q39.4 23.4 39.4 24Q39.4 24.6 38.95 25.05L25.05 38.95Q24.8 39.2 24.55 39.3Q24.3 39.4 24 39.4Z"}})])}),[],!1,null,null,null);t.default=component.exports},291:function(e,t,n){"use strict";n(282)},292:function(e,t,n){var r=n(46)(!1);r.push([e.i,".nav-wrapper{z-index:1;width:100%;position:-webkit-sticky;position:sticky;top:0;background-color:#201e20}.navbar{display:flex;align-items:center;flex-direction:row;height:5rem;color:#fff}.navbar>span{color:#e0a96d;padding:2rem;font-size:1.2rem}.navbar ul.nav{display:flex;list-style:none;flex-direction:row;margin-left:auto;align-items:center;align-content:center}.navbar ul.nav .nav-item{text-align:center;margin:.5rem;position:relative}.navbar ul.nav .nav-item:last-of-type{margin-right:1rem}.navbar ul.nav .nav-item a,.navbar ul.nav .nav-item button{color:#fff;text-decoration:none;border:1px solid #fff;border-radius:.75rem;padding:.75rem 1.5rem;transition:background-color .2s ease-in-out,color .2s ease-in-out}.navbar ul.nav .nav-item a:active,.navbar ul.nav .nav-item a:focus,.navbar ul.nav .nav-item a:hover,.navbar ul.nav .nav-item button:active,.navbar ul.nav .nav-item button:focus,.navbar ul.nav .nav-item button:hover{border-color:#e0a96d;color:#fff;background-color:#e0a96d}.navbar ul.nav:last-child{margin-right:1vw}",""]),e.exports=r},293:function(e,t,n){var map={"./arriere-plans/capitulation-montreal.png":294,"./arriere-plans/papineau.png":295,"./arriere-plans/st-charles.png":296,"./arriere-plans/st-denis.png":297,"./arriere-plans/st-eustache.png":298,"./portraits/acheson.png":299,"./portraits/default.png":300,"./portraits/durham.png":301,"./portraits/papineau.png":302};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=293},294:function(e,t,n){e.exports=n.p+"img/capitulation-montreal.90bf376.png"},295:function(e,t,n){e.exports=n.p+"img/papineau.cc86bfd.png"},296:function(e,t,n){e.exports=n.p+"img/st-charles.93737b8.png"},297:function(e,t,n){e.exports=n.p+"img/st-denis.1bcb4ce.png"},298:function(e,t,n){e.exports=n.p+"img/st-eustache.fd17cba.png"},299:function(e,t,n){e.exports=n.p+"img/acheson.2161cae.png"},300:function(e,t,n){e.exports=n.p+"img/default.abcf596.png"},301:function(e,t,n){e.exports=n.p+"img/durham.0265ca8.png"},302:function(e,t,n){e.exports=n.p+"img/papineau.f0e6dec.png"},303:function(e,t,n){"use strict";n(283)},304:function(e,t,n){var r=n(46)(!1);r.push([e.i,"@-webkit-keyframes updown{0%,to{transform:translateY(.5rem)}50%{transform:translateY(-.5rem)}}@keyframes updown{0%,to{transform:translateY(.5rem)}50%{transform:translateY(-.5rem)}}.titre{font-size:4rem}.scroll-button{position:absolute;z-index:0;left:50%;top:90%;transform:translate(-50%,-90%)}.scroll-button:hover{cursor:pointer}.scroll-button svg{fill:#e0a96d;-webkit-animation:updown 1s linear infinite;animation:updown 1s linear infinite;-webkit-animation-play-state:running;animation-play-state:running}.scroll-button svg:hover{-webkit-animation-play-state:paused;animation-play-state:paused}.headline{width:100%;height:calc(100vh - 5rem);min-height:350px;background:url(/assets/img/arriere-plans/papineau.png) fixed 50%;background-size:cover;display:flex;flex-direction:column;justify-content:center}.headline p{font-size:1.3rem}.headline .items{padding:1em;background-color:rgba(224,169,109,.5)}.headline .items h1,.headline .items p{color:#fff;text-align:center}",""]),e.exports=r},305:function(e,t,n){"use strict";n(284)},306:function(e,t,n){var r=n(46)(!1);r.push([e.i,"footer{background-color:#201e20;color:#fff;text-align:center;font-size:1rem;padding:1.5rem}footer a{color:#4c307a;transition-duration:.25s}footer a:hover{color:#6f49ad}.copyright{font-size:.9em}",""]),e.exports=r},308:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(49),n(2).a.extend({data:function(){return{listeDesBatailles:[]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("batailles").only(["title","path"]).fetch();case 2:e.listeDesBatailles=t.sent;case 3:case"end":return t.stop()}}),t)})))()}})),l=(n(291),n(48)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-wrapper"},[n("nav",{staticClass:"navbar"},[n("span",[e._v("Projet Patriotes")]),e._v(" "),n("ul",{staticClass:"nav"},[n("li",{staticClass:"nav-item"},[n("NuxtLink",{attrs:{to:"/"}},[e._v("Accueil")])],1),e._v(" "),n("li",{staticClass:"nav-item"},[n("DropDown",{attrs:{titre:"Liste des batailles",items:e.listeDesBatailles}})],1),e._v(" "),n("li",{staticClass:"nav-item"},[n("DropDown",{attrs:{titre:"Liste des personnages",items:[{title:"Anglais",path:"/personnages/anglais"},{title:"Français",path:"/personnages/francais"}]}})],1),e._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{attrs:{to:"/bibliographie"}},[e._v("Bibliographie")])],1)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DropDown:n(289).default})},309:function(e,t,n){"use strict";n.r(t);var r={components:{ArrowDownIcon:n(290).default},data:function(){return{bgimg:n(293)("./".concat(this.image,".png"))}},props:{titre:{type:String,default:"Projet Patriotes"},image:{type:String,default:"arriere-plans/papineau"},noarrow:{type:Boolean,default:!1}},computed:{getStyle:function(){return{backgroundImage:"url("+this.bgimg+")"}}}},o=(n(303),n(48)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"headline",style:e.getStyle},[n("div",{staticClass:"items"},[n("h1",{staticClass:"titre"},[e._v(e._s(e.$props.titre))]),e._v(" "),n("p",[e._v("Projet fait par William Ao et Adnan Taha")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$props.noarrow,expression:"!$props.noarrow"},{name:"scroll-to",rawName:"v-scroll-to",value:"#premiereSection",expression:"'#premiereSection'"}],staticClass:"scroll-button"},[n("ArrowDownIcon")],1)])}),[],!1,null,null,null);t.default=component.exports},310:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{licenseUrl:"https://github.com/projetpatriotes/projetpatriotes.github.io/raw/master/LICENSE.md"}}},o=(n(305),n(48)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"footer"},[n("footer",[n("div",{staticClass:"credits"},[e._v("\n      Ce site web est un projet inter-disciplinaire de l'École internationale\n      de Montréal, avec collaboration entre les cours d'histoire et de\n      français de secondaire 3 de l'année scolaire 2021-2022.\n    ")]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"copyright"},[e._v("\n      Copyright © 2022-present William Ao et Adnan Taha. Ce travail est\n      licensé sous la\n      "),n("a",{attrs:{href:e.licenseUrl,target:"_blank"}},[e._v(" License Publique DBAD ")])])])])}),[],!1,null,null,null);t.default=component.exports},316:function(e,t,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("2ec8a6e3",content,!0,{sourceMap:!1})},321:function(e,t,n){var r=n(3),o=n(142),l=n(52);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){l(t,e,n)}),{AS_ENTRIES:!0}),t}})},322:function(e,t,n){"use strict";n(316)},323:function(e,t,n){var r=n(46)(!1);r.push([e.i,'.liste#premiereSection{height:auto;padding:1vw}.liste#premiereSection ul{display:flex;flex-flow:column nowrap;list-style-type:none}.personnage{display:inline-flex;padding:2rem;margin-bottom:1.5rem;border-radius:1rem;background-color:#201e20}@media only screen and (hover:none)and (pointer:coarse){.personnage{flex-flow:column nowrap;align-items:cen}}.personnage:last-of-type{margin-bottom:0}.personnage .text{padding:0 1em 1em;overflow:hidden}.personnage img{width:15em;height:auto;border-radius:1rem;transition:.2s}.personnage img:hover{border-radius:1rem 1rem 0 0}.personnage img:hover:after{content:attr(alt,"Aucune description de plus sur ce portrait.");position:absolute;z-index:1;left:0;top:2rem;width:15rem;border-radius:0 0 1rem 1rem;font-size:inherit;color:#fff;background-color:#e0a96d}',""]),e.exports=r},338:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(321),n(49),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,t.next=3,n("personnages",r.cote).fetch();case 3:return o=t.sent,l=r.cote,"francais"===r.cote&&(l="français"),t.abrupt("return",{personnages:o,cote:l,images:{anglais:"arriere-plans/capitulation-montreal","français":"arriere-plans/papineau"}});case 7:case"end":return t.stop()}}),t)})))()},methods:{getMargin:function(e){return Object.fromEntries([[e%2==0?"margin-left":"margin-right","auto"]])}}}),l=(n(322),n(48)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("NavBar"),e._v(" "),n("HeadLine",{attrs:{titre:"Personnages "+e.cote,image:e.images[e.cote]}}),e._v(" "),n("section",{staticClass:"liste",attrs:{id:"premiereSection"}},[n("ul",e._l(e.personnages,(function(t,r){return n("li",{key:r,staticClass:"personnage",style:{"flex-flow":r%2==0?"row nowrap":"row-reverse nowrap"}},[n("div",{staticClass:"text"},[n("h2",[e._v(e._s(t.nom))]),e._v(" "),n("NuxtContent",{staticClass:"markdown-content",attrs:{document:t}})],1),e._v(" "),n("img",{style:e.getMargin(r),attrs:{src:t.image,alt:t.alt}})])})),0)]),e._v(" "),n("FooterBar")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NavBar:n(308).default,HeadLine:n(309).default,FooterBar:n(310).default})}}]);