(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42184b9c","chunk-2d0e5b12"],{"0ca4":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("CCard",[e("CCardHeader",{staticClass:"no-margin col-lg-12"},[e("label",{staticClass:"h5"},[t._v(t._s(t.indicateurTitle?t.indicateurTitle:"")+" "+t._s(t.anneelist?t.anneelist.toLocaleString():""))]),e("div",{staticClass:"card-header-actions no-padding no-margin"},[e("CDropdown",{attrs:{color:"link",size:"sm",caret:!1},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-options"}})]},proxy:!0}])},[e("CDropdownItem",{on:{click:t.toggleFullscreen}},[t._v("Plein écran")]),e("CDropdownItem",{on:{click:function(e){return t.exporter()}}},[t._v("Exporter csv")])],1)],1)]),e("CCardBody",[[e("div",{ref:"myDiv"},["SECTEUR"==t.choixgraphique?e("CChartPie",{attrs:{datasets:t.datasets,options:t.defaultOptions,labels:t.labels}}):t._e(),"DOUGHNUT"==t.choixgraphique?e("CChartDoughnut",{attrs:{datasets:t.datasets,options:t.defaultOptions,labels:t.labels}}):t._e(),"POLAR"==t.choixgraphique?e("CChartPolarArea",{attrs:{datasets:t.datasets,options:t.defaultOptions,labels:t.labels}}):t._e(),e("div",{staticClass:"row col-lg-12"},[e("div",{staticClass:"col-lg-12 form-group",attrs:{role:"group"}},[e("label",{staticClass:"custom-control-inline"},[t._v(" Période ")]),e("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.choixgraphique,expression:"choixgraphique"}],staticClass:"custom-control-input",attrs:{id:"SECTEUR",type:"radio",value:"SECTEUR"},domProps:{checked:t._q(t.choixgraphique,"SECTEUR")},on:{change:function(e){t.choixgraphique="SECTEUR"}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"SECTEUR"}},[t._v(" SECTEUR ")])]),e("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.choixgraphique,expression:"choixgraphique"}],staticClass:"custom-control-input",attrs:{id:"DOUGHNUT",type:"radio",value:"DOUGHNUT"},domProps:{checked:t._q(t.choixgraphique,"DOUGHNUT")},on:{change:function(e){t.choixgraphique="DOUGHNUT"}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"DOUGHNUT"}},[t._v(" DOUGHNUT ")])]),e("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.choixgraphique,expression:"choixgraphique"}],staticClass:"custom-control-input",attrs:{id:"POLAR",type:"radio",value:"POLAR"},domProps:{checked:t._q(t.choixgraphique,"POLAR")},on:{change:function(e){t.choixgraphique="POLAR"}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"POLAR"}},[t._v(" POLAR ")])])])])],1)]],2)],1)},o=[],a=r("f485"),i=r("bc3a"),s=r.n(i),l=r("9621");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),s=new A(n||[]);return o(i,"_invoke",{value:k(t,r,s)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",v="suspendedYield",g="executing",m="completed",y={};function b(){}function w(){}function C(){}var E={};h(E,i,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(N([])));S&&S!==r&&n.call(S,i)&&(E=S);var L=C.prototype=b.prototype=Object.create(E);function _(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,s){var l=d(t[o],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==c(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var o=p;return function(a,i){if(o===g)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var l=P(s,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var c=d(e,r,n);if("normal"===c.type){if(o=n.done?m:v,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=m,n.method="throw",n.arg=c.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(c(e)+" is not iterable")}return w.prototype=C,o(L,"constructor",{value:C,configurable:!0}),o(C,"constructor",{value:w,configurable:!0}),w.displayName=h(C,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,h(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(O.prototype),h(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),h(L,l,"Generator"),h(L,i,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function h(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=f(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function f(t,e){if(t){if("string"===typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e,r,n,o,a,i){try{var s=t[a](i),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){p(a,n,o,i,s,"next",t)}function s(t){p(a,n,o,i,s,"throw",t)}i(void 0)}))}}var g=r("21a6"),m={name:"IndicateursSecteur",components:{CChartPie:a["CChartPie"],CChartDoughnut:a["CChartDoughnut"],CChartPolarArea:a["CChartPolarArea"]},props:["donneeSearch","refreshing"],watch:{reloadParams:function(){this.getDatasets()}},computed:{reloadParams:function(){return[this.refreshing]},defaultOptions:function(){return{aspectRatio:1.5}}},data:function(){return{anneelist:null,periodelist:null,choixgraphique:"SECTEUR",datasets:[{backgroundColor:Object(l["a"])(this.backgroundColor),data:[]}],indicateurTitle:null,labels:[],backgroundColor:{type:String,default:"rgba(0,0,0,.2)"}}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var t=new Blob([this.convertToCSV(this.items)],{type:"text/csv;charset=utf-8"});g.saveAs(t," "+this.anneelist.toLocaleString()+".csv"),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(t){t.forEach((function(e){Object.keys(t[0]).forEach((function(t){e[t]=e[t]?e[t].toString().trim():e[t]}))}));var e=[Object.keys(t[0])].concat(t);return e.map((function(t){return Object.values(t).join(";").toString()})).join("\n")},updatedPeriodeInList:function(t){var e=[];t.forEach((function(t){switch(t.periode){case"TRIMESTRIEL":e=[{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"}];break;case"MENSUEL":e=[{value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},{value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},{value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"}];break;case"SEMESTRIEL":e=[{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}];break;case"ANNUEL":e=[];break;default:break}"ANNUEL"!=t.periode&&(t.periode_value=e[t.periode_value-1].label)}))},genererTableauCouleur:function(t){for(var e=Math.floor(360*t),r=360/t,n=[],o=0;o<t;o++){var a=(e+o*r)%360,i=Math.floor(31*o)+70,s=Math.floor(31*o)+50;n.push("hsl(".concat(a,",").concat(i,"%,").concat(s,"%)"))}return n},genererTableauCouleur2:function(t){for(var e=[],r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],n=0;n<t;n++){for(var o="#",a=0;a<6;a++)console.log(Math.floor(16*Math.random())),o+=r[Math.floor(16*Math.random())];e.push(o)}return console.log(e),e},getDatasets:function(){var t=this;return v(u().mark((function e(){var r;return u().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t,s.a.post(t.$apiAdress+"/api/donnees/findBy?token="+localStorage.getItem("api_token"),r.donneeSearch).then((function(t){r.items=t.data,r.datasets=[{backgroundColor:r.genererTableauCouleur(100),data:[]}],r.updatedPeriodeInList(r.items),r.anneelist=[];var e,n=h(r.items);try{for(n.s();!(e=n.n()).done;){var o=e.value,a=!1;console.log(o);var i,s=h(r.anneelist);try{for(s.s();!(i=s.n()).done;){var l=i.value;if(l===o.annee){a=!0;break}}}catch(w){s.e(w)}finally{s.f()}a||r.anneelist.push(o.annee)}}catch(w){n.e(w)}finally{n.f()}r.periodelist=[];var c,u=h(r.items);try{for(u.s();!(c=u.n()).done;){var f=c.value,d=!1;console.log(f);var p,v=h(r.periodelist);try{for(v.s();!(p=v.n()).done;){var g=p.value;if(g===f.periode_value){d=!0;break}}}catch(w){v.e(w)}finally{v.f()}d||r.periodelist.push(f.periode_value)}}catch(w){u.e(w)}finally{u.f()}r.datasets[0].data=[],r.labels=[];var m,y=h(r.items);try{for(y.s();!(m=y.n()).done;){var b=m.value;r.datasets[0].data.push(b.valeur),r.anneelist.length>1&&r.periodelist.length>1&&"ANNUEL"!=b.periode?r.labels.push(b.periode_value+" "+b.annee):r.anneelist.length>1?r.labels.push(b.annee):r.periodelist.length>1?r.labels.push(b.periode_value):r.labels.push(b.indicateur),r.indicateurTitle=b.indicateur}}catch(w){y.e(w)}finally{y.f()}r.datasets[0].backgroundColor=r.genererTableauCouleur2(r.labels.length)})).catch((function(t){if("The given data was invalid."==t.response.data.message)for(var e in r.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(e)&&(r.message+=t.response.data.errors[e][0]+"  ");r.$toasted.show(r.message,{type:"error"})}));case 2:case"end":return e.stop()}}),e)})))()},toggleFullscreen:function(){var t=this.$refs.myDiv;document.fullscreenElement?document.exitFullscreen():t.requestFullscreen().catch((function(t){console.log("Error attempting to enable full-screen mode: ".concat(t.message," (").concat(t.name,")"))}))}},mounted:function(){var t=this;t.getDatasets()}},y=m,b=(r("da20"),r("2877")),w=Object(b["a"])(y,n,o,!1,null,null,null);e["a"]=w.exports},"13c5":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("CCard",[e("CCardHeader",{staticClass:"no-margin col-lg-12"},[e("label",{staticClass:"h5"},[t._v(t._s(t.indicateurTitle)+" "+t._s(t.anneelist?t.anneelist.toLocaleString():""))]),e("div",{staticClass:"card-header-actions no-padding no-margin"},[e("CDropdown",{attrs:{color:"link",size:"sm",caret:!1},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-options"}})]},proxy:!0}])},[e("CDropdownItem",{on:{click:t.toggleFullscreen}},[t._v("Plein écran")]),e("CDropdownItem",{on:{click:function(e){return t.exporter()}}},[t._v("Exporter csv")])],1)],1)]),e("CCardBody",{ref:"myDiv"},[e("div",[t.togglePress?t._e():e("CChartBar",{staticStyle:{"min-height":"60vh"},attrs:{datasets:t.datasets,options:t.computedOptions,labels:t.labels}}),t.togglePress?e("CChartLine",{staticStyle:{"min-height":"60vh"},attrs:{datasets:t.datasets,options:t.computedOptions,labels:t.labels,pointed:""}}):t._e()],1),e("br"),e("div",{staticStyle:{display:"inline-flex"}},[e("CSwitch",{staticClass:"mr-1",attrs:{color:"danger",shape:"pill",checked:t.togglePress},on:{"update:checked":function(e){t.togglePress=e}}}),t._v("    "),e("label",[t._v(t._s(t.togglePress?"Histogramme":"Courbe"))])],1),t.datasets[0]?e("div",{staticStyle:{display:"none"}},[t._v(t._s(t.datasets[0].backgroundColor=t.togglePress?"transparent":"#41B883"))]):t._e()])],1)},o=[],a=r("f485"),i=r("88a8"),s=r("bc3a"),l=r.n(s);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),s=new A(n||[]);return o(i,"_invoke",{value:k(t,r,s)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",v="suspendedYield",g="executing",m="completed",y={};function b(){}function w(){}function C(){}var E={};h(E,i,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(N([])));S&&S!==r&&n.call(S,i)&&(E=S);var L=C.prototype=b.prototype=Object.create(E);function _(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,i,s){var l=d(t[o],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==c(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var o=p;return function(a,i){if(o===g)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var l=P(s,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var c=d(e,r,n);if("normal"===c.type){if(o=n.done?m:v,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=m,n.method="throw",n.arg=c.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(c(e)+" is not iterable")}return w.prototype=C,o(L,"constructor",{value:C,configurable:!0}),o(C,"constructor",{value:w,configurable:!0}),w.displayName=h(C,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,h(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(O.prototype),h(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),h(L,l,"Generator"),h(L,i,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function h(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=f(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function f(t,e){if(t){if("string"===typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e,r,n,o,a,i){try{var s=t[a](i),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){p(a,n,o,i,s,"next",t)}function s(t){p(a,n,o,i,s,"throw",t)}i(void 0)}))}}var g=r("21a6"),m={name:"IndicateurBarChart",components:{CChartBar:a["CChartBar"],CChartLine:a["CChartLine"]},props:["donneeSearch","refreshing","graphique"],data:function(){return{an:null,compteur:0,anneelist:[],periodelist:[],indicateurTitle:"",data1:[],labels:[],items:[],datasets:[],togglePress:!1,indicateur:""}},watch:{reloadParams:function(){localStorage.setItem("togglePress",JSON.stringify(this.togglePress)),this.getDatasets(),"COURBE"==this.graphique?this.togglePress=!0:this.togglePress=!1}},computed:{reloadParams:function(){return[this.refreshing,this.graphique]},defaultDatasets:function(){return[{data:this.data1,label:""}]},defaultOptions:function(){return{aspectRatio:1.5,maintainAspectRatio:!1,legend:{display:!0},scales:{xAxes:[{display:!0,stacked:!0}],yAxes:[{display:!0,stacked:!0}]}}},computedDatasets:function(){return Object(i["a"])(this.defaultDatasets,this.datasets||{})},computedOptions:function(){return Object(i["a"])(this.defaultOptions,this.options||{})}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var t=new Blob([this.convertToCSV(this.items)],{type:"text/csv;charset=utf-8"});g.saveAs(t,this.indicateur+" "+this.anneelist.toLocaleString()+".csv"),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(t){t.forEach((function(e){Object.keys(t[0]).forEach((function(t){e[t]=e[t]?e[t].toString().trim():e[t]}))}));var e=[Object.keys(t[0])].concat(t);return e.map((function(t){return Object.values(t).join(";").toString()})).join("\n")},updatedPeriodeInList:function(t){var e=[];t.forEach((function(t){switch(t.periode){case"TRIMESTRIEL":e=[{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"}];break;case"MENSUEL":e=[{value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},{value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},{value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"}];break;case"SEMESTRIEL":e=[{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}];break;case"ANNUEL":e=[];break;default:break}"ANNUEL"!=t.periode&&(t.periode_value=e[t.periode_value-1].label)}))},genererTableauCouleur:function(t){for(var e=Math.floor(360*Math.random()),r=360/t,n=[],o=0;o<t;o++){var a=(e+o*r)%360,i=Math.floor(31*Math.random())+70,s=Math.floor(31*Math.random())+50;n.push("hsl(".concat(a,",").concat(i,"%,").concat(s,"%)"))}},getDatasets:function(){var t=this;return v(u().mark((function e(){var r;return u().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t,console.log(r.donneeSearch),l.a.post(t.$apiAdress+"/api/donnees/findBy?token="+localStorage.getItem("api_token"),r.donneeSearch).then((function(t){if(r.items=t.data,r.datasets=[{fill:!1,lineTension:.1,pointBorderColor:"#E46651",pointHoverBackgroundColor:"#E46651",pointHoverBorderColor:"#E46651",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,label:r.items&&r.items.length>0?r.items[0].indicateur:"",backgroundColor:"#f87979",borderColor:["#E46651"],data:[]}],r.updatedPeriodeInList(r.items),r.items&&r.items.length>0){r.indicateurTitle=r.items[0].indicateur,r.anneelist=[];var e,n=h(r.items);try{for(n.s();!(e=n.n()).done;){var o,a=e.value,i=!1,s=h(r.anneelist);try{for(s.s();!(o=s.n()).done;){var l=o.value;if(l===a.annee){i=!0;break}}}catch(w){s.e(w)}finally{s.f()}i||r.anneelist.push(a.annee)}}catch(w){n.e(w)}finally{n.f()}r.periodelist=[];var c,u=h(r.items);try{for(u.s();!(c=u.n()).done;){var f=c.value,d=!1;console.log(f);var p,v=h(r.periodelist);try{for(v.s();!(p=v.n()).done;){var g=p.value;if(g===f.periode_value){d=!0;break}}}catch(w){v.e(w)}finally{v.f()}d||r.periodelist.push(f.periode_value)}}catch(w){u.e(w)}finally{u.f()}r.datasets[0].data=[],r.labels=[];var m,y=h(r.items);try{for(y.s();!(m=y.n()).done;){var b=m.value;r.datasets[0].data.push(b.valeur),r.anneelist.length>1&&r.periodelist.length>1&&"ANNUEL"!=b.periode?r.labels.push(b.periode_value+" "+b.annee):r.anneelist.length>1?r.labels.push(b.annee):r.periodelist.length>1?r.labels.push(b.periode_value):b.niveau2?r.labels.push(b.niveau2):b.niveau1?r.labels.push(b.niveau1):b.indicateur&&r.labels.push(b.indicateur)}}catch(w){y.e(w)}finally{y.f()}}r.label=r.indicateur})).catch((function(t){if(console.log(401==t.response.status),t.response&&"The given data was invalid."==t.response.data.message)for(var e in r.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(e)&&(r.message+=t.response.data.errors[e][0]+"  ");else r.$toasted.show(r.message,{type:"error"}),console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},toggleFullscreen:function(){var t=this.$refs.myDiv;document.fullscreenElement?document.exitFullscreen():t.requestFullscreen().catch((function(t){console.log("Error attempting to enable full-screen mode: ".concat(t.message," (").concat(t.name,")"))}))}},mounted:function(){this.getDatasets(),localStorage.getItem("togglePress")&&(this.togglePress=JSON.parse(localStorage.getItem("togglePress")))}},y=m,b=(r("1c77"),r("2877")),w=Object(b["a"])(y,n,o,!1,null,null,null);e["a"]=w.exports},"1c77":function(t,e,r){"use strict";r("e498")},"4fe4":function(t,e,r){},9621:function(t,e,r){"use strict";var n=function(){for(var t={},e=document.styleSheets,r="",n=e.length-1;n>-1;n--){for(var o=e[n].cssRules,a=o.length-1;a>-1;a--)if(".ie-custom-properties"===o[a].selectorText){r=o[a].cssText;break}if(r)break}return r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}")),r.split(";").forEach((function(e){if(e){var r=e.split(": ")[0],n=e.split(": ")[1];r&&n&&(t["--".concat(r.trim())]=n.trim())}})),t},o=n,a=10,i=function(){return Boolean(document.documentMode)&&document.documentMode>=a},s=function(t){return t.match(/^--.*/i)},l=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(s(t)&&i()){var n=o();e=n[t]}else e=window.getComputedStyle(r,null).getPropertyValue(t).replace(/^\s/,"");return e},c=l,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(t),n=c(r,e);return n||t};e["a"]=u},da20:function(t,e,r){"use strict";r("4fe4")},e498:function(t,e,r){}}]);
//# sourceMappingURL=chunk-42184b9c.23bee562.js.map