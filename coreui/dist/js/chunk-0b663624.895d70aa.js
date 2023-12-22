(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b663624","chunk-2d0e5b12"],{"0ca4":function(e,t,a){"use strict";var r=function(){var e=this,t=e._self._c;return t("CCard",[t("CCardHeader",{staticClass:"no-margin col-lg-12"},[t("label",{staticClass:"h5"},[e._v(e._s(e.indicateurTitle?e.indicateurTitle:"")+" "+e._s(e.anneelist?e.anneelist.toLocaleString():""))]),t("div",{staticClass:"card-header-actions no-padding no-margin"},[t("CDropdown",{attrs:{color:"link",size:"sm",caret:!1},scopedSlots:e._u([{key:"toggler-content",fn:function(){return[t("CIcon",{attrs:{name:"cil-options"}})]},proxy:!0}])},[t("CDropdownItem",{on:{click:e.toggleFullscreen}},[e._v("Plein écran")]),t("CDropdownItem",{on:{click:function(t){return e.exporter()}}},[e._v("Exporter csv")])],1)],1)]),t("CCardBody",[[t("div",{ref:"myDiv"},["SECTEUR"==e.choixgraphique?t("CChartPie",{attrs:{datasets:e.datasets,options:e.defaultOptions,labels:e.labels}}):e._e(),"DOUGHNUT"==e.choixgraphique?t("CChartDoughnut",{attrs:{datasets:e.datasets,options:e.defaultOptions,labels:e.labels}}):e._e(),"POLAR"==e.choixgraphique?t("CChartPolarArea",{attrs:{datasets:e.datasets,options:e.defaultOptions,labels:e.labels}}):e._e(),t("div",{staticClass:"row col-lg-12"},[t("div",{staticClass:"col-lg-12 form-group",attrs:{role:"group"}},[t("label",{staticClass:"custom-control-inline"},[e._v(" Période ")]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.choixgraphique,expression:"choixgraphique"}],staticClass:"custom-control-input",attrs:{id:"SECTEUR",type:"radio",value:"SECTEUR"},domProps:{checked:e._q(e.choixgraphique,"SECTEUR")},on:{change:function(t){e.choixgraphique="SECTEUR"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"SECTEUR"}},[e._v(" SECTEUR ")])]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.choixgraphique,expression:"choixgraphique"}],staticClass:"custom-control-input",attrs:{id:"DOUGHNUT",type:"radio",value:"DOUGHNUT"},domProps:{checked:e._q(e.choixgraphique,"DOUGHNUT")},on:{change:function(t){e.choixgraphique="DOUGHNUT"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"DOUGHNUT"}},[e._v(" DOUGHNUT ")])]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.choixgraphique,expression:"choixgraphique"}],staticClass:"custom-control-input",attrs:{id:"POLAR",type:"radio",value:"POLAR"},domProps:{checked:e._q(e.choixgraphique,"POLAR")},on:{change:function(t){e.choixgraphique="POLAR"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"POLAR"}},[e._v(" POLAR ")])])])])],1)]],2)],1)},n=[],o=a("f485"),s=a("bc3a"),l=a.n(s),i=a("9621");function c(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=u(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw o}}}}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var h=a("21a6"),p={name:"IndicateursSecteur",components:{CChartPie:o["CChartPie"],CChartDoughnut:o["CChartDoughnut"],CChartPolarArea:o["CChartPolarArea"]},props:["donneeSearch","refreshing"],watch:{reloadParams:function(){this.getDatasets()}},computed:{reloadParams:function(){return[this.refreshing]},defaultOptions:function(){return{aspectRatio:1.5}}},data:function(){return{anneelist:null,periodelist:null,choixgraphique:"SECTEUR",datasets:[{backgroundColor:Object(i["a"])(this.backgroundColor),data:[]}],indicateurTitle:null,labels:[],backgroundColor:{type:String,default:"rgba(0,0,0,.2)"}}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var e=new Blob([this.convertToCSV(this.items)],{type:"text/csv;charset=utf-8"});h.saveAs(e," "+this.anneelist.toLocaleString()+".csv"),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(e){e.forEach((function(t){Object.keys(e[0]).forEach((function(e){t[e]=t[e]?t[e].toString().trim():t[e]}))}));var t=[Object.keys(e[0])].concat(e);return t.map((function(e){return Object.values(e).join(";").toString()})).join("\n")},updatedPeriodeInList:function(e){var t=[];e.forEach((function(e){switch(e.periode){case"TRIMESTRIEL":t=[{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"}];break;case"MENSUEL":t=[{value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},{value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},{value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"}];break;case"SEMESTRIEL":t=[{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}];break;case"ANNUEL":t=[];break;default:break}"ANNUEL"!=e.periode&&(e.periode_value=t[e.periode_value-1].label)}))},genererTableauCouleur:function(e){for(var t=Math.floor(360*e),a=360/e,r=[],n=0;n<e;n++){var o=(t+n*a)%360,s=Math.floor(31*n)+70,l=Math.floor(31*n)+50;r.push("hsl(".concat(o,",").concat(s,"%,").concat(l,"%)"))}return r},genererTableauCouleur2:function(e){for(var t=[],a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],r=0;r<e;r++){for(var n="#",o=0;o<6;o++)console.log(Math.floor(16*Math.random())),n+=a[Math.floor(16*Math.random())];t.push(n)}return console.log(t),t},getDatasets:function(){var e=this;l.a.post(this.$apiAdress+"/api/donnees/findBy?token="+localStorage.getItem("api_token"),e.donneeSearch).then((function(t){e.items=t.data,e.datasets=[{backgroundColor:e.genererTableauCouleur(100),data:[]}],e.updatedPeriodeInList(e.items),e.anneelist=[];var a,r=c(e.items);try{for(r.s();!(a=r.n()).done;){var n=a.value,o=!1;console.log(n);var s,l=c(e.anneelist);try{for(l.s();!(s=l.n()).done;){var i=s.value;if(i===n.annee){o=!0;break}}}catch(y){l.e(y)}finally{l.f()}o||e.anneelist.push(n.annee)}}catch(y){r.e(y)}finally{r.f()}e.periodelist=[];var u,d=c(e.items);try{for(d.s();!(u=d.n()).done;){var h=u.value,p=!1;console.log(h);var f,v=c(e.periodelist);try{for(v.s();!(f=v.n()).done;){var g=f.value;if(g===h.periode_value){p=!0;break}}}catch(y){v.e(y)}finally{v.f()}p||e.periodelist.push(h.periode_value)}}catch(y){d.e(y)}finally{d.f()}e.datasets[0].data=[],e.labels=[];var m,b=c(e.items);try{for(b.s();!(m=b.n()).done;){var C=m.value;e.datasets[0].data.push(C.valeur),e.anneelist.length>1&&e.periodelist.length>1&&"ANNUEL"!=C.periode?e.labels.push(C.periode_value+" "+C.annee):e.anneelist.length>1?e.labels.push(C.annee):e.periodelist.length>1?e.labels.push(C.periode_value):e.labels.push(C.indicateur),e.indicateurTitle=C.indicateur}}catch(y){b.e(y)}finally{b.f()}e.datasets[0].backgroundColor=e.genererTableauCouleur2(e.labels.length)})).catch((function(t){if("The given data was invalid."==t.response.data.message)for(var a in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(a)&&(e.message+=t.response.data.errors[a][0]+"  ");e.$toasted.show(e.message,{type:"error"})}))},toggleFullscreen:function(){var e=this.$refs.myDiv;document.fullscreenElement?document.exitFullscreen():e.requestFullscreen().catch((function(e){console.log("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))}},mounted:function(){var e=this;e.getDatasets()}},f=p,v=(a("311e"),a("2877")),g=Object(v["a"])(f,r,n,!1,null,null,null);t["a"]=g.exports},"13c5":function(e,t,a){"use strict";var r=function(){var e=this,t=e._self._c;return t("CCard",[t("CCardHeader",{staticClass:"no-margin col-lg-12"},[t("label",{staticClass:"h5"},[e._v(e._s(e.indicateurTitle)+" "+e._s(e.anneelist?e.anneelist.toLocaleString():""))]),t("div",{staticClass:"card-header-actions no-padding no-margin"},[t("CDropdown",{attrs:{color:"link",size:"sm",caret:!1},scopedSlots:e._u([{key:"toggler-content",fn:function(){return[t("CIcon",{attrs:{name:"cil-options"}})]},proxy:!0}])},[t("CDropdownItem",{on:{click:e.toggleFullscreen}},[e._v("Plein écran")]),t("CDropdownItem",{on:{click:function(t){return e.exporter()}}},[e._v("Exporter csv")])],1)],1)]),t("CCardBody",{ref:"myDiv"},[t("div",[e.togglePress?e._e():t("CChartBar",{staticStyle:{"min-height":"60vh"},attrs:{datasets:e.datasets,options:e.computedOptions,labels:e.labels}}),e.togglePress?t("CChartLine",{staticStyle:{"min-height":"60vh"},attrs:{datasets:e.datasets,options:e.computedOptions,labels:e.labels,pointed:""}}):e._e()],1),t("br"),t("div",{staticStyle:{display:"inline-flex"}},[t("CSwitch",{staticClass:"mr-1",attrs:{color:"danger",shape:"pill",checked:e.togglePress},on:{"update:checked":function(t){e.togglePress=t}}}),e._v("    "),t("label",[e._v(e._s(e.togglePress?"Histogramme":"Courbe"))])],1),e.datasets[0]?t("div",{staticStyle:{display:"none"}},[e._v(e._s(e.datasets[0].backgroundColor=e.togglePress?"transparent":"#41B883"))]):e._e()])],1)},n=[],o=a("f485"),s=a("88a8"),l=a("bc3a"),i=a.n(l);function c(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=u(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw o}}}}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var h=a("21a6"),p={name:"IndicateurBarChart",components:{CChartBar:o["CChartBar"],CChartLine:o["CChartLine"]},props:["donneeSearch","refreshing","graphique"],data:function(){return{an:null,compteur:0,anneelist:[],periodelist:[],indicateurTitle:"",data1:[],labels:[],items:[],datasets:[],togglePress:!1,indicateur:""}},watch:{reloadParams:function(){localStorage.setItem("togglePress",JSON.stringify(this.togglePress)),this.getDatasets(),"COURBE"==this.graphique?this.togglePress=!0:this.togglePress=!1}},computed:{reloadParams:function(){return[this.refreshing,this.graphique]},defaultDatasets:function(){return[{data:this.data1,label:""}]},defaultOptions:function(){return{aspectRatio:1.5,maintainAspectRatio:!1,legend:{display:!0},scales:{xAxes:[{display:!0,stacked:!0}],yAxes:[{display:!0,stacked:!0}]}}},computedDatasets:function(){return Object(s["a"])(this.defaultDatasets,this.datasets||{})},computedOptions:function(){return Object(s["a"])(this.defaultOptions,this.options||{})}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var e=new Blob([this.convertToCSV(this.items)],{type:"text/csv;charset=utf-8"});h.saveAs(e,this.indicateur+" "+this.anneelist.toLocaleString()+".csv"),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(e){e.forEach((function(t){Object.keys(e[0]).forEach((function(e){t[e]=t[e]?t[e].toString().trim():t[e]}))}));var t=[Object.keys(e[0])].concat(e);return t.map((function(e){return Object.values(e).join(";").toString()})).join("\n")},updatedPeriodeInList:function(e){var t=[];e.forEach((function(e){switch(e.periode){case"TRIMESTRIEL":t=[{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"}];break;case"MENSUEL":t=[{value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},{value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},{value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"}];break;case"SEMESTRIEL":t=[{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}];break;case"ANNUEL":t=[];break;default:break}"ANNUEL"!=e.periode&&(e.periode_value=t[e.periode_value-1].label)}))},genererTableauCouleur:function(e){for(var t=Math.floor(360*Math.random()),a=360/e,r=[],n=0;n<e;n++){var o=(t+n*a)%360,s=Math.floor(31*Math.random())+70,l=Math.floor(31*Math.random())+50;r.push("hsl(".concat(o,",").concat(s,"%,").concat(l,"%)"))}},getDatasets:function(){var e=this;console.log(e.donneeSearch),i.a.post(this.$apiAdress+"/api/donnees/findBy?token="+localStorage.getItem("api_token"),e.donneeSearch).then((function(t){if(e.items=t.data,e.datasets=[{fill:!1,lineTension:.1,pointBorderColor:"#E46651",pointHoverBackgroundColor:"#E46651",pointHoverBorderColor:"#E46651",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,label:e.items&&e.items.length>0?e.items[0].indicateur:"",backgroundColor:"#f87979",borderColor:["#E46651"],data:[]}],e.updatedPeriodeInList(e.items),e.items&&e.items.length>0){e.indicateurTitle=e.items[0].indicateur,e.anneelist=[];var a,r=c(e.items);try{for(r.s();!(a=r.n()).done;){var n,o=a.value,s=!1,l=c(e.anneelist);try{for(l.s();!(n=l.n()).done;){var i=n.value;if(i===o.annee){s=!0;break}}}catch(y){l.e(y)}finally{l.f()}s||e.anneelist.push(o.annee)}}catch(y){r.e(y)}finally{r.f()}e.periodelist=[];var u,d=c(e.items);try{for(d.s();!(u=d.n()).done;){var h=u.value,p=!1;console.log(h);var f,v=c(e.periodelist);try{for(v.s();!(f=v.n()).done;){var g=f.value;if(g===h.periode_value){p=!0;break}}}catch(y){v.e(y)}finally{v.f()}p||e.periodelist.push(h.periode_value)}}catch(y){d.e(y)}finally{d.f()}e.datasets[0].data=[],e.labels=[];var m,b=c(e.items);try{for(b.s();!(m=b.n()).done;){var C=m.value;e.datasets[0].data.push(C.valeur),e.anneelist.length>1&&e.periodelist.length>1&&"ANNUEL"!=C.periode?e.labels.push(C.periode_value+" "+C.annee):e.anneelist.length>1?e.labels.push(C.annee):e.periodelist.length>1?e.labels.push(C.periode_value):C.niveau2?e.labels.push(C.niveau2):C.niveau1?e.labels.push(C.niveau1):C.indicateur&&e.labels.push(C.indicateur)}}catch(y){b.e(y)}finally{b.f()}}e.label=e.indicateur})).catch((function(t){if(console.log(401==t.response.status),t.response&&"The given data was invalid."==t.response.data.message)for(var a in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(a)&&(e.message+=t.response.data.errors[a][0]+"  ");else e.$toasted.show(e.message,{type:"error"}),console.log(t)}))},toggleFullscreen:function(){var e=this.$refs.myDiv;document.fullscreenElement?document.exitFullscreen():e.requestFullscreen().catch((function(e){console.log("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))}},mounted:function(){this.getDatasets(),localStorage.getItem("togglePress")&&(this.togglePress=JSON.parse(localStorage.getItem("togglePress")))}},f=p,v=(a("56a8"),a("2877")),g=Object(v["a"])(f,r,n,!1,null,null,null);t["a"]=g.exports},"311e":function(e,t,a){"use strict";a("bbda")},"56a8":function(e,t,a){"use strict";a("de9a")},9621:function(e,t,a){"use strict";var r=function(){for(var e={},t=document.styleSheets,a="",r=t.length-1;r>-1;r--){for(var n=t[r].cssRules,o=n.length-1;o>-1;o--)if(".ie-custom-properties"===n[o].selectorText){a=n[o].cssText;break}if(a)break}return a=a.substring(a.lastIndexOf("{")+1,a.lastIndexOf("}")),a.split(";").forEach((function(t){if(t){var a=t.split(": ")[0],r=t.split(": ")[1];a&&r&&(e["--".concat(a.trim())]=r.trim())}})),e},n=r,o=10,s=function(){return Boolean(document.documentMode)&&document.documentMode>=o},l=function(e){return e.match(/^--.*/i)},i=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(l(e)&&s()){var r=n();t=r[e]}else t=window.getComputedStyle(a,null).getPropertyValue(e).replace(/^\s/,"");return t},c=i,u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,a="--".concat(e),r=c(a,t);return r||e};t["a"]=u},bbda:function(e,t,a){},de9a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-0b663624.895d70aa.js.map