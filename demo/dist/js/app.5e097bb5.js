(function(e){function n(n){for(var r,o,s=n[0],l=n[1],u=n[2],v=0,f=[];v<s.length;v++)o=s[v],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,s=1;s<t.length;s++){var l=t[s];0!==a[l]&&(r=!1)}r&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={app:0},i=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/vuex-along/demo/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var c=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("28a5"),t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),a=t("2f62"),i=(t("a481"),t("7f7f"),t("85f2")),o=t.n(i),s=t("f6f6"),l=t.n(s),u=t("47fc"),c=t.n(u),v=t("4235"),f=t.n(v),h=t("caaa"),m=t.n(h),d=t("f499"),p=t.n(d);function g(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(e,r.key,r)}}function _(e,n,t){return n&&b(e.prototype,n),t&&b(e,t),e}function w(e,n,t){return n in e?o()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var S=function(e){return p()(e,null,2)},y=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.defaultValue,a=void 0===r?{}:r,i=t.serialize,o=void 0===i?S:i,s=t.deserialize,l=void 0===s?JSON.parse:s;g(this,e),w(this,"source",void 0),w(this,"defaultValue",void 0),w(this,"serialize",void 0),w(this,"deserialize",void 0),this.source=n,this.defaultValue=a,this.serialize=o,this.deserialize=l}return _(e,[{key:"read",value:function(){var e=sessionStorage.getItem(this.source);return e?this.deserialize(e):(sessionStorage.setItem(this.source,this.serialize(this.defaultValue)),this.defaultValue)}},{key:"write",value:function(e){sessionStorage.setItem(this.source,this.serialize(e))}}]),e}();function k(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function x(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(e,r.key,r)}}function j(e,n,t){return n&&x(e.prototype,n),t&&x(e,t),e}function A(e,n,t){return n in e?o()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var D=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];k(this,e),A(this,"db",void 0),this.db=f()(t?new y(n):new m.a(n))}return j(e,[{key:"get",value:function(e){return this.db.get(e).value()}},{key:"set",value:function(e,n){this.db.set(e,n).write()}},{key:"unset",value:function(e){this.db.unset(e).write()}}]),e}();function O(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function $(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(e,r.key,r)}}function V(e,n,t){return n&&$(e.prototype,n),t&&$(e,t),e}function B(e,n,t){return n in e?o()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var E=function(){function e(n){var t=this,r=n.local,a=n.session,i=n.name,o=void 0===i?"vuex-along":i,s=n.justSession,l=void 0!==s&&s;O(this,e),B(this,"name",void 0),B(this,"localDBService",void 0),B(this,"sessionDBService",void 0),B(this,"local",void 0),B(this,"session",void 0),B(this,"justSession",void 0),this.name=c.a.base64(o).replace("==",""),this.local=r,this.session=a,this.justSession=l,this.localDBService=new D(o),this.sessionDBService=new D(o,!0),window&&(window.clearVuexAlong=function(e,n){t.clear(e,n)})}return V(e,[{key:"saveData",value:function(e){if(!this.justSession){var n=this.local,t=l.a.cloneDeep(e);if(n){var r=n.list,a=n.isFilter;r.length&&(t=a?l.a.omit(t,r):l.a.pick(t,r))}this.localDBService.set(this.name,t)}var i=this.session;if(i){var o=i.list,s=i.isFilter,u=l.a.cloneDeep(e);o.length&&(u=s?l.a.omit(u,o):l.a.pick(u,o)),this.sessionDBService.set(this.name,u)}}},{key:"restoreData",value:function(e){var n=this.name;e.replaceState(l.a.defaultsDeep(this.sessionDBService.get(n),this.localDBService.get(n),e.state))}},{key:"clear",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=this.name;e&&this.localDBService.unset(t),n&&this.sessionDBService.unset(t)}}]),e}(),z=function(e){var n=new E(e);return function(e){n.restoreData(e),e.subscribe(function(e,t){return n.saveData(t)})}},T=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),r("HelloWorld",{attrs:{msg:"Thanks for using vuex-along"}})],1)},M=[],P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Local example")]),t("ul",[t("li",[e._v("\n        "+e._s(e.$store.state.count)+"\n        "),t("button",{on:{click:e.increment}},[e._v("+ 10")])])]),t("h3",[e._v("Session example")]),t("ul",[t("li",[e._v("\n        "+e._s(e.$store.state.ma.a1)+"\n        "),t("button",{on:{click:e.reverseA1}},[e._v("reverse a1")]),e._v("\n        (Saved ma.a1)\n      ")]),t("li",[e._v("\n        "+e._s(e.$store.state.ma.a2)+"\n        "),t("button",{on:{click:e.reverseA2}},[e._v("reverse a2")]),e._v("\n        (Unsaved ma.a2)\n      ")])]),t("h3",[e._v("clear data")]),t("ul",[t("li",[t("button",{on:{click:e.clearLocal}},[e._v("clear local / 清除 localStorage")])]),t("li",[t("button",{on:{click:e.clearSession}},[e._v("clear Session / 清除 sessionStorage")])])]),e._m(1),t("br"),t("pre",[e._v('const moduleA = {\n  state: {\n    a1: "hello",\n    a2: "world"\n  }\n};\n\nconst store = new Vuex.Store({\n  state: {\n    count: 0\n  },\n  mutations: {\n    increment(state) {\n      state.count += 10;\n    },\n    reverseA1(state) {\n      state.ma.a1 = state.ma.a1\n        .split("")\n        .reverse()\n        .join("");\n    },\n    reverseA2(state) {\n      state.ma.a2 = state.ma.a2\n        .split("")\n        .reverse()\n        .join("");\n    }\n  },\n  modules: {\n    ma: moduleA\n  },\n  plugins: [\n    ')]),t("pre",{staticClass:"light"},[e._v('    createVuexAlong({\n      name: "hello-vuex-along",\n      local: { list: ["ma"], isFilter: true },\n      session: { list: ["ma.a1"] }\n    })\n    ')]),t("pre",[e._v("  ]\n});\n    ")]),e._m(2)])},C=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("\n      Auto save vuex state to localStorage or sessionStorage,\n      "),t("br"),e._v("check out the\n      "),t("a",{attrs:{href:"https://github.com/boenfu/vuex-along",target:"_blank",rel:"noopener"}},[e._v("github")]),e._v(".\n    ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h3",[e._v("\n      Options example\n      "),t("a",{attrs:{href:"https://github.com/boenfu/vuex-along/tree/master/demo/src/main.js",target:"_blank",rel:"noopener"}},[e._v("demo/src/main.js")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("\n      More options\n      "),t("br"),e._v("check out the\n      "),t("a",{attrs:{href:"https://github.com/boenfu/vuex-along",target:"_blank",rel:"noopener"}},[e._v("README")]),e._v(".\n    ")])}],F={name:"HelloWorld",props:{msg:String},methods:{increment:function(){this.$store.commit("increment")},reverseA1:function(){this.$store.commit("reverseA1")},reverseA2:function(){this.$store.commit("reverseA2")},clearLocal:function(){window.clearVuexAlong(!0,!1)},clearSession:function(){window.clearVuexAlong(!1,!0)}}},H=F,I=(t("89c5"),t("2877")),J=Object(I["a"])(H,P,C,!1,null,"1c630b95",null),L=J.exports,W={name:"app",components:{HelloWorld:L}},N=W,R=(t("034f"),Object(I["a"])(N,T,M,!1,null,null,null)),U=R.exports;r["a"].config.productionTip=!1,r["a"].use(a["a"]);var q={state:{a1:"hello",a2:"world"}},G=new a["a"].Store({state:{count:0},mutations:{increment:function(e){e.count+=10},reverseA1:function(e){e.ma.a1=e.ma.a1.split("").reverse().join("")},reverseA2:function(e){e.ma.a2=e.ma.a2.split("").reverse().join("")}},modules:{ma:q},plugins:[z({name:"hello-vuex-along",local:{list:["ma"],isFilter:!0},session:{list:["ma.a1"]}})]});new r["a"]({render:function(e){return e(U)},store:G}).$mount("#app")},"64a9":function(e,n,t){},"89c5":function(e,n,t){"use strict";var r=t("d52d"),a=t.n(r);a.a},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"},d52d:function(e,n,t){}});
//# sourceMappingURL=app.5e097bb5.js.map