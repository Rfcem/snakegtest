(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),s=n("0366"),o=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),g=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,r){o(t,u,e),g(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&c(r,t[l],{that:t,AS_ENTRIES:n})})),v=h(e),p=function(t,e,n){var r,a,i=v(t),s=y(t,e);return s?s.value=n:(i.last=s={index:a=d(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=s),r&&(r.next=s),f?i.size++:t.size++,"F"!==a&&(i.index[a]=s)),t},y=function(t,e){var n,r=v(t),a=d(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(u.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=y(e,t);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),i(u.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),f&&r(u.prototype,"size",{get:function(){return v(this).size}}),u},setStrong:function(t,e,n){var r=e+" Iterator",a=h(e),i=h(r);l(t,e,(function(t,e){g(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),l=n("19aa"),u=n("861d"),f=n("d039"),d=n("1c7e"),v=n("d44e"),g=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),y=h?"set":"add",b=a[t],m=b&&b.prototype,w=b,j={},x=function(t){var e=m[t];s(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},S=i(t,"function"!=typeof b||!(p||m.forEach&&!f((function(){(new b).entries().next()}))));if(S)w=n.getConstructor(e,t,h,y),o.REQUIRED=!0;else if(i(t,!0)){var C=new w,O=C[y](p?{}:-0,1)!=C,k=f((function(){C.has(1)})),_=d((function(t){new b(t)})),z=!p&&f((function(){var t=new b,e=5;while(e--)t[y](e,e);return!t.has(-0)}));_||(w=e((function(e,n){l(e,w,t);var r=g(new b,e,w);return void 0!=n&&c(n,r[y],{that:r,AS_ENTRIES:h}),r})),w.prototype=m,m.constructor=w),(k||z)&&(x("delete"),x("has"),h&&x("get")),(z||O)&&x(y),p&&m.clear&&delete m.clear}return j[t]=w,r({global:!0,forced:w!=b},j),v(w,t),p||n.setStrong(w,t,h),w}},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("v-card",{attrs:{dark:""}},[n("v-card-text",[n("v-row",{staticClass:"mb-4",attrs:{align:"center"}},[n("strong",{staticClass:"title"},[t._v("About The Game")]),n("v-spacer")],1),n("p",[t._v(" Woof is a game based on the snake game, but it differs in two points. The first is that in this game you collect gems instead of apples and when you colect a red gem (which is like a ruby) your length decreases by 2, this is normally good but if your length is lees than or equal to 2 it's game over for you. The other difference are the bombs, these elements move around the map and every time you collect 10 gems, one of them spawns. Be careful with this because if you collide with them you may die. ")]),n("v-row",{staticClass:"mb-4",attrs:{align:"center"}},[n("strong",{staticClass:"title"},[t._v("Credits")]),n("v-spacer")],1),n("p",[t._v(" This game was made with "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://phaser.io"}},[t._v("Phaser")]),t._v(" as it's engine, "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://v3.vuejs.org"}},[t._v("Vue.js")]),t._v(" and "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://vuetifyjs.com"}},[t._v("Vuetify")]),t._v(" were used to create the UI and this page as well. ")]),n("p",[t._v(" The images were taken from "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://pixabay.com"}},[t._v("pixabay")])])],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"d-flex child-flex",attrs:{cols:"3"}},[n("v-img",{attrs:{src:"phaser.png","lazy-src":"phaser.png"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1),n("v-col",{staticClass:"d-flex child-flex",attrs:{cols:"3"}},[n("v-img",{attrs:{src:"vue.png","lazy-src":"vue.png"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1),n("v-col",{staticClass:"d-flex child-flex",attrs:{cols:"3"}},[n("v-img",{attrs:{src:"vuetify.png","lazy-src":"vuetify.png"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1)},a=[],i=n("2877"),s=n("6544"),o=n.n(s),c=n("b0af"),l=n("99d9"),u=n("ade3"),f=n("5530"),d=(n("13d5"),n("a9e3"),n("b64b"),n("5319"),n("ac1f"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),v=n("d9f7"),g=n("80d2"),h=["sm","md","lg","xl"],p=function(){return h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),y=function(){return h.reduce((function(t,e){return t["offset"+Object(g["t"])(e)]={type:[String,Number],default:null},t}),{})}(),b=function(){return h.reduce((function(t,e){return t["order"+Object(g["t"])(e)]={type:[String,Number],default:null},t}),{})}(),m={col:Object.keys(p),offset:Object.keys(y),order:Object.keys(b)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var j=new Map,x=d["a"].extend({name:"v-col",functional:!0,props:Object(f["a"])(Object(f["a"])(Object(f["a"])(Object(f["a"])({cols:{type:[Boolean,String,Number],default:!1}},p),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},b),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,a=e.children,i=(e.parent,"");for(var s in n)i+=String(n[s]);var o=j.get(i);return o||function(){var t,e;for(e in o=[],m)m[e].forEach((function(t){var r=n[t],a=w(e,t,r);a&&o.push(a)}));var r=o.some((function(t){return t.startsWith("col-")}));o.push((t={col:!r||!n.cols},Object(u["a"])(t,"col-".concat(n.cols),n.cols),Object(u["a"])(t,"offset-".concat(n.offset),n.offset),Object(u["a"])(t,"order-".concat(n.order),n.order),Object(u["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),j.set(i,o)}(),t(n.tag,Object(v["a"])(r,{class:o}),a)}}),S=n("adda"),C=n("490a"),O=(n("2532"),n("99af"),["sm","md","lg","xl"]),k=["start","end","center"];function _(t,e){return O.reduce((function(n,r){return n[t+Object(g["t"])(r)]=e(),n}),{})}var z=function(t){return[].concat(k,["baseline","stretch"]).includes(t)},E=_("align",(function(){return{type:String,default:null,validator:z}})),V=function(t){return[].concat(k,["space-between","space-around"]).includes(t)},N=_("justify",(function(){return{type:String,default:null,validator:V}})),T=function(t){return[].concat(k,["space-between","space-around","stretch"]).includes(t)},I=_("alignContent",(function(){return{type:String,default:null,validator:T}})),B={align:Object.keys(E),justify:Object.keys(N),alignContent:Object.keys(I)},R={align:"align",justify:"justify",alignContent:"align-content"};function M(t,e,n){var r=R[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var A=new Map,F=d["a"].extend({name:"v-row",functional:!0,props:Object(f["a"])(Object(f["a"])(Object(f["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:z}},E),{},{justify:{type:String,default:null,validator:V}},N),{},{alignContent:{type:String,default:null,validator:T}},I),render:function(t,e){var n=e.props,r=e.data,a=e.children,i="";for(var s in n)i+=String(n[s]);var o=A.get(i);return o||function(){var t,e;for(e in o=[],B)B[e].forEach((function(t){var r=n[t],a=M(e,t,r);a&&o.push(a)}));o.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(u["a"])(t,"align-".concat(n.align),n.align),Object(u["a"])(t,"justify-".concat(n.justify),n.justify),Object(u["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),A.set(i,o)}(),t(n.tag,Object(v["a"])(r,{staticClass:"row",class:o}),a)}}),G=n("2fa4"),L={},W=Object(i["a"])(L,r,a,!1,null,null,null);e["default"]=W.exports;o()(W,{VCard:c["a"],VCardText:l["c"],VCol:x,VImg:S["a"],VProgressCircular:C["a"],VRow:F,VSpacer:G["a"]})}}]);
//# sourceMappingURL=about.2c1a6c04.js.map