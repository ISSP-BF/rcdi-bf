(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eacbedb8"],{"21a6":function(e,t,n){(function(n){var r,a,o;(function(n,i){a=[],r=i,o="function"===typeof r?r.apply(t,a):r,void 0===o||(e.exports=o)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){l(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?o(l):a(l.href)?r(e,t,n):o(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){o(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))r(e,n,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){o(s)}))}}:function(e,t,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var o="application/octet-stream"===e.type,l=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||o&&l||s)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,f=d.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});i.saveAs=l.saveAs=l,e.exports=l}))}).call(this,n("c8ba"))},6870:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",[t("CCardHeader",[t("h4",[e._v("Détail de la requête id: "+e._s(e.$route.params.id))])]),t("CCardBody",[t("h4",[e._v("Libelle: "+e._s(e.dashboardItem.libelle))]),t("h4",[e._v("Description : "+e._s(e.dashboardItem.description))]),t("h4",[e._v("Groupe : "+e._s(e.donnee.groupe_id))]),t("h4",[e._v("Sous Groupe : "+e._s(e.donnee.sous_groupe_id))]),t("h4",[e._v("Indicateur : "+e._s(e.donnee.indicateur_id))]),e.donnee.sous_indicateur?t("h4",[e._v("Sous Indicateur : "+e._s(e.donnee.sous_indicateur))]):e._e(),t("h4",[e._v("Periode : "+e._s(e.donnee.periode))]),"ANNUEL"!=e.donnee.periode?t("h4",[e._v("periode_value : "+e._s(e.donnee.periode_value))]):e._e(),t("h4",[e._v("Annee : "+e._s(e.donnee.annee))]),t("div",{staticClass:"col-lg-12"},[t("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")]),e._v("  "),t("CButton",{attrs:{color:"success"},on:{click:function(t){return e.visualiser()}}},[t("CIcon",{attrs:{name:"cil-speedometer"}})],1),e._v("   ")],1)])],1)],1),t("CCol",{attrs:{col:"12",lg:"6"}},[t("div",["SECTEUR"==e.dashboardItem.graphique&&e.refreshing?t("IndicateursSecteur",{attrs:{donneeSearch:e.donnee,refreshing:e.refreshing}}):e._e(),"HISTOGRAMME"==e.dashboardItem.graphique&&e.refreshing?t("IndicateurBarChart",{attrs:{donneeSearch:e.donnee,refreshing:e.refreshing}}):e._e(),"FIXE"==e.dashboardItem.graphique&&e.refreshing?t("IndicateursShow",{attrs:{donneeSearch:e.donnee,refreshing:e.refreshing}}):e._e()],1)])],1)},a=[],o=n("bc3a"),i=n.n(o),s=n("0ca4"),l=n("13c5"),u=n("9626"),c={name:"User",components:{IndicateursSecteur:s["a"],IndicateurBarChart:l["a"],IndicateursShow:u["a"]},props:{caption:{type:String,default:"User id"}},data:function(){return{dashboardItem:{},donnee:{},refreshing:!1}},methods:{visualiser:function(){this.refreshing=!this.refreshing,console.log(this.donnee)},goBack:function(){this.$router.go(-1)}},mounted:function(){var e=this;i.a.get(this.$apiAdress+"/api/dashboard-items/"+e.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(t){e.dashboardItem=t.data,e.donnee=JSON.parse(t.data.requete)})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},d=c,f=n("2877"),p=Object(f["a"])(d,r,a,!1,null,null,null);t["default"]=p.exports},9626:function(e,t,n){"use strict";var r=function(){var e=this,t=e._self._c;return t("CRow",e._l(e.items,(function(n){return t("CCol",{key:n.id,attrs:{sm:"6",lg:"6"}},[t("div",{staticStyle:{display:"none"}},[e._v(e._s(n.titre=n.indicateur+" "+(e.anneelist.length>1&&e.periodelist.length>1&&"ANNUEL"!=n.periode?n.periode_value+" "+n.annee:e.anneelist.length>1?n.annee:e.periodelist.length>1||"ANNUEL"!=n.periode?n.periode_value+" "+n.annee:n.annee)))]),t("CWidgetDropdown",{attrs:{color:n.couleur,header:n.valeur+"",text:n.titre+""},scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"}})]},proxy:!0}],null,!0)})],1)})),1)},a=[],o=n("bc3a"),i=n.n(o);function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function l(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c={name:"IndicateursShow",props:["donneeSearch","refreshing"],data:function(){return{donnee:{indicateur:"",valeur:""},items:[],anneelist:[],periodelist:[],couleurs:[]}},watch:{reloadParams:function(){this.getDatasets()}},computed:{reloadParams:function(){return[this.refreshing]}},methods:{genererTableauCouleur:function(e){var t=[],n=["primary","secondary","success","warning","danger","info","light","dark"];while(t.length<e)t.push.apply(t,n);return t},updatedPeriodeInList:function(e){var t=[];e.forEach((function(e){switch(e.periode){case"TRIMESTRIEL":t=[{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"}];break;case"MENSUEL":t=[{value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},{value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},{value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"}];break;case"SEMESTRIEL":t=[{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}];break;case"ANNUEL":t=[];break;default:break}"ANNUEL"!=e.periode&&(e.periode_value=t[e.periode_value-1].label)}))},getDatasets:function(){var e=this;i.a.post(this.$apiAdress+"/api/donnees/findBy?token="+localStorage.getItem("api_token"),e.donneeSearch).then((function(t){e.items=t.data,e.updatedPeriodeInList(e.items),e.couleurs=e.genererTableauCouleur(e.items.length);for(var n=0;n<e.items.length;n++)e.items[n]["couleur"]=e.couleurs[n];e.anneelist=[];var r,a=s(e.items);try{for(a.s();!(r=a.n()).done;){var o,i=r.value,l=!1,u=s(e.anneelist);try{for(u.s();!(o=u.n()).done;){var c=o.value;if(c===i.annee){l=!0;break}}}catch(m){u.e(m)}finally{u.f()}l||e.anneelist.push(i.annee)}}catch(m){a.e(m)}finally{a.f()}e.periodelist=[];var d,f=s(e.items);try{for(f.s();!(d=f.n()).done;){var p,h=d.value,v=!1,b=s(e.periodelist);try{for(b.s();!(p=b.n()).done;){var g=p.value;if(g===h.periode_value){v=!0;break}}}catch(m){b.e(m)}finally{b.f()}v||e.periodelist.push(h.periode_value)}}catch(m){f.e(m)}finally{f.f()}})).catch((function(t){if("The given data was invalid."==t.response.data.message)for(var n in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(n)&&(e.message+=t.response.data.errors[n][0]+"  ");else e.$router.push({path:"login"})}))}},mounted:function(){var e=this;e.getDatasets()}},d=c,f=n("2877"),p=Object(f["a"])(d,r,a,!1,null,null,null);t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-eacbedb8.494eb7d2.js.map