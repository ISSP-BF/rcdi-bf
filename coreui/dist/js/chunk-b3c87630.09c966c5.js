(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3c87630"],{"21a6":function(e,t,n){(function(n){var a,r,o;(function(n,i){r=[],a=i,o="function"===typeof a?a.apply(t,r):a,void 0===o||(e.exports=o)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){l(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?o(l):r(l.href)?a(e,t,n):o(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){o(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(r(e))a(e,n,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){o(s)}))}}:function(e,t,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var o="application/octet-stream"===e.type,l=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||o&&l||s)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=l.saveAs=l,e.exports=l}))}).call(this,n("c8ba"))},8634:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",[t("CCardHeader",[t("h5",[e._v("Ajouter une requête")])]),t("CCardBody",[t("CRow",[t("CCol",{attrs:{col:"12",lg:"12"}},[t("div",[t("div",{staticClass:"row"},[t("CSelect",{staticClass:"col-lg-12",attrs:{label:"Groupe",value:e.donnee.groupe_id,plain:!0,options:e.groupes},on:{"update:value":function(t){return e.$set(e.donnee,"groupe_id",t)},change:function(t){return e.findSousGroupeByGroupe(t)}}}),t("CSelect",{staticClass:"col-lg-12",attrs:{label:"Sous Groupe",value:e.donnee.sous_groupe_id,plain:!0,options:e.sous_groupes},on:{"update:value":function(t){return e.$set(e.donnee,"sous_groupe_id",t)},change:function(t){return e.findIndicateurBySousGroupe(t)}}}),t("CSelect",{staticClass:"col-lg-12",attrs:{label:"Indicateur",value:e.donnee.indicateur_id,plain:!0,options:e.indicateurs},on:{"update:value":function(t){return e.$set(e.donnee,"indicateur_id",t)},change:function(t){e.findSousIndicateurByDesagregation(t),e.findAnneeByIndicateur(t)}}}),e.desagregation_id?t("CSelect",{staticClass:"col-lg-12",attrs:{label:"Sous indicateur",value:e.donnee.sous_indicateur_id,plain:!0,options:e.sousIndicateurs},on:{"update:value":function(t){return e.$set(e.donnee,"sous_indicateur_id",t)}}}):e._e(),t("div",{staticClass:"row col-lg-12"},[t("div",{staticClass:"col-lg-12 form-group",attrs:{role:"group"}},[t("label",{staticClass:"custom-control-inline"},[e._v(" Période ")]),e._l(e.periodesDispobible,(function(n){return t("div",{key:n,staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group",label:n}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.donnee.periode,expression:"donnee.periode"}],staticClass:"custom-control-input",attrs:{id:"periode"+n,type:"radio"},domProps:{value:n,checked:e._q(e.donnee.periode,n)},on:{click:function(t){return e.updatedListPeriode(n)},change:function(t){return e.$set(e.donnee,"periode",n)}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"periode"+n}},[e._v(" "+e._s(n)+" ")])])}))],2)]),e.donnee.periode&&"ANNUEL"!=e.donnee.periode?t("label",{staticClass:"col-lg-12"},[e._v("Période")]):e._e(),e.donnee.periode&&"ANNUEL"!=e.donnee.periode?t("multiselect",{staticClass:"col-lg-11",attrs:{options:e.choixPeriodes,multiple:!0,"close-on-select":!1,label:"label","track-by":"label",placeholder:"Choisir une période","select-label":"cliquer pour ajouter","deselect-label":"cliquer pour supprimer","hide-selected":!0},model:{value:e.selectedPeriode_values,callback:function(t){e.selectedPeriode_values=t},expression:"selectedPeriode_values"}}):e._e(),t("label",{staticClass:"col-lg-12"},[e._v("Années")]),t("multiselect",{staticClass:"col-lg-11",attrs:{options:e.annees,multiple:!0,"close-on-select":!1,label:"label","track-by":"label",placeholder:"Choisir une année","select-label":"cliquer pour ajouter","deselect-label":"cliquer pour supprimer","hide-selected":!0},model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})],1),t("br"),e._v("   "),t("CRow",{staticClass:"align-items-center"},[t("div",{staticClass:"row col-lg-12"},[t("div",{staticClass:"col-lg-12 form-group",attrs:{role:"group"}},[t("label",{staticClass:"custom-control-inline"},[e._v(" Période ")]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.graphique,expression:"graphique"}],staticClass:"custom-control-input",attrs:{id:"SECTEUR2",type:"radio",value:"SECTEUR"},domProps:{checked:e._q(e.graphique,"SECTEUR")},on:{change:function(t){e.graphique="SECTEUR"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"SECTEUR2"}},[e._v(" SECTEUR ")])]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.graphique,expression:"graphique"}],staticClass:"custom-control-input",attrs:{id:"HISTOGRAMME",type:"radio",value:"HISTOGRAMME"},domProps:{checked:e._q(e.graphique,"HISTOGRAMME")},on:{change:function(t){e.graphique="HISTOGRAMME"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"HISTOGRAMME"}},[e._v(" HISTOGRAMME ")])]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.graphique,expression:"graphique"}],staticClass:"custom-control-input",attrs:{id:"FIXE",type:"radio",value:"FIXE"},domProps:{checked:e._q(e.graphique,"FIXE")},on:{change:function(t){e.graphique="FIXE"}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"FIXE"}},[e._v(" FIXE ")])])])])]),e._v("   ")],1)])],1),t("CRow",{staticClass:"col-lg-12 text-justify"},[t("CButton",{attrs:{color:"success"},on:{click:function(t){return e.visualiser()}}},[t("CIcon",{attrs:{name:"cil-speedometer"}}),e._v("Visualiser")],1),e._v("   ")],1)],1),t("CCardFooter",[t("CRow",[t("CInput",{staticClass:"col-lg-12",attrs:{label:"Libelle",type:"text",placeholder:"Libelle"},model:{value:e.dashboardItem.libelle,callback:function(t){e.$set(e.dashboardItem,"libelle",t)},expression:"dashboardItem.libelle"}}),t("CTextarea",{staticClass:"col-lg-12",attrs:{label:"Description",type:"text",placeholder:"Description",rows:"9"},model:{value:e.dashboardItem.description,callback:function(t){e.$set(e.dashboardItem,"description",t)},expression:"dashboardItem.description"}}),t("CInput",{staticClass:"col-lg-4",attrs:{label:"Ordre",type:"text",placeholder:"Ordre décroissante"},model:{value:e.dashboardItem.i,callback:function(t){e.$set(e.dashboardItem,"i",t)},expression:"dashboardItem.i"}}),t("CInput",{staticClass:"col-lg-4",attrs:{label:"Largeur [1 à 12]",type:"text",placeholder:"de 1 à 12"},model:{value:e.dashboardItem.w,callback:function(t){e.$set(e.dashboardItem,"w",t)},expression:"dashboardItem.w"}})],1)],1),t("CCardFooter",[t("CRow",{staticClass:"col-lg-12 text-justify"},[t("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.store()}}},[e._v("Ajouter")]),e._v("   "),t("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1),t("CCol",{attrs:{col:"12",lg:"6"}},[t("div",["SECTEUR"==e.graphique&&e.refreshing?t("IndicateursSecteur",{attrs:{donneeSearch:e.donneeSearch,refreshing:e.refreshing}}):e._e(),"HISTOGRAMME"==e.graphique&&e.refreshing?t("IndicateurBarChart",{attrs:{donneeSearch:e.donneeSearch,refreshing:e.refreshing}}):e._e(),"FIXE"==e.graphique&&e.refreshing?t("IndicateursShow",{attrs:{donneeSearch:e.donneeSearch,refreshing:e.refreshing}}):e._e()],1)])],1)},r=[],o=n("bc3a"),i=n.n(o),s=n("8e5f"),l=n.n(s),u=n("4a7a"),c=n.n(u),d=(n("6dfc"),n("e607"),n("0ca4")),p=n("13c5"),f=n("9626");function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t,n){return t=g(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=m(e,"string");return"symbol"===h(t)?t:String(t)}function m(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==h(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function b(e){return S(e)||_(e)||C(e)||y()}function y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function S(e){if(Array.isArray(e))return w(e)}function I(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=C(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function C(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var E={name:"Requete",components:{Multiselect:l.a,vSelect:c.a,IndicateursSecteur:d["a"],IndicateurBarChart:p["a"],IndicateursShow:f["a"]},props:{caption:{type:String,default:"Requete"}},data:function(){return{dashboardItem:{libelle:"",description:"",i:"",x:"",y:"",w:"",h:"",static:!0},graphique:"",message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1,donneeSearch:{region_id:null,province_id:null,commune_id:null,groupe_id:null,sous_groupe_id:null,indicateur_id:null,sous_indicateur_id:null,desagregation_id:null,selectedItemsIndicateur:null,mois:null,annee:null,indice:null,source:null},donnee:{region_id:null,province_id:null,commune_id:null,groupe_id:null,sous_groupe_id:null,indicateur_id:null,sous_indicateur_id:null,desagregation_id:null,selectedItemsIndicateur:null,mois:null,annee:null,indice:null,source:null},desagregation_id:null,selectedItems:[],selectedPeriode_values:[],periodesDispobible:[],region:null,province:null,commune:null,district:null,groupes:[],indicateurs:[],sous_groupes:[],periodes:[],periodeList:["MENSUEL","TRIMESTRIEL","SEMESTRIEL","ANNUEL"],desagregations:[],communes:[],annees:[],anneesSelect:null,indicateurliste:[],refreshing:!1}},methods:v(v(v({goBack:function(){this.$router.go(-1)},visualiser:function(){this.refreshing=!this.refreshing,this.donneeSearch=JSON.parse(JSON.stringify(this.donnee)),this.donneeSearch.annee=[];var e,t=I(this.selectedItems);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.donneeSearch.annee.push(n.value)}}catch(i){t.e(i)}finally{t.f()}this.donneeSearch.periode_value=[];var a,r=I(this.selectedPeriode_values);try{for(r.s();!(a=r.n()).done;){var o=a.value;this.donneeSearch.periode_value.push(o.value)}}catch(i){r.e(i)}finally{r.f()}},store:function(){var e=this;this.donneeSearch=JSON.parse(JSON.stringify(this.donnee)),this.donneeSearch.annee=[];var t,n=I(this.selectedItems);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.donneeSearch.annee.push(a.value)}}catch(l){n.e(l)}finally{n.f()}this.donneeSearch.periode_value=[];var r,o=I(this.selectedPeriode_values);try{for(o.s();!(r=o.n()).done;){var s=r.value;this.donneeSearch.periode_value.push(s.value)}}catch(l){o.e(l)}finally{o.f()}e.dashboardItem["requete"]=JSON.stringify(this.donneeSearch),e.dashboardItem["graphique"]=this.graphique,e.dashboardItem["dashboard_id"]=this.$route.params.dashboard,console.log(e.dashboardItem),i.a.post(this.$apiAdress+"/api/dashboard-items?token="+localStorage.getItem("api_token"),e.dashboardItem).then((function(t){e.dashboardItem={libelle:"",description:""},e.$toasted.show(t.data.message,{type:"success"}),e.$router.go(-1)})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var n in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(n)&&(e.message+=t.response.data.errors[n][0]+"  ");e.showAlert(),e.$toasted.show(e.message,{type:"danger"})}else console.log(t)}))},updatedListPeriode:function(e){switch(this.choixPeriodes=[],this.selectedPeriode_values=[],e){case"TRIMESTRIEL":this.choixPeriodes=[{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"}];break;case"MENSUEL":this.choixPeriodes=[{value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},{value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},{value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"}];break;case"SEMESTRIEL":this.choixPeriodes=[{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}];break;case"ANNUEL":this.choixPeriodes=[];break;default:break}this.donnee.periode_value=this.choixPeriodes.length>0?this.choixPeriodes[0].value:null},findSousGroupeByGroupe:function(e){this.sous_groupes=[];var t=this;i.a.get(this.$apiAdress+"/api/sous_groupes/findByGroupe/"+t.donnee.groupe_id+"?token="+localStorage.getItem("api_token")).then((function(e){console.log(e),t.sous_groupes=e.data;var n=[{label:"",value:null}];n.push.apply(n,b(t.sous_groupes)),t.sous_groupes=n})).catch((function(e){t.indicateurs=[],t.$router.push({path:"login"})}))},findIndicateurByGroupe:function(e){i.a.get(this.$apiAdress+"/api/indicateurs/findByGroupe/"+self.donnee.groupe_id+"?token="+localStorage.getItem("api_token")).then((function(e){console.log(e),self.indicateurs=e.data;var t=[{label:"",value:null}];t.push.apply(t,b(self.indicateurs)),self.indicateurs=t,self.sous_indicateurs=[],self.periode=null})).catch((function(e){self.indicateurs=[]}))},findAnneeByIndicateur:function(e){self=this,self.annees=[],i.a.get(this.$apiAdress+"/api/donnees/findAnneeByIndicateur/"+self.donnee.indicateur_id+"?token="+localStorage.getItem("api_token")).then((function(e){self.annees=e.data.annees,self.refreshing3=!1,setTimeout((function(){self.refreshing3=!0}),1)})).catch((function(e){self.annees=[]}))},findIndicateurBySousGroupe:function(e){console.log(e);var t=this;i.a.get(this.$apiAdress+"/api/indicateurs/findBySousGroupe/"+t.donnee.sous_groupe_id+"?token="+localStorage.getItem("api_token")).then((function(e){console.log(e,"======><"),t.indicateurs=e.data;var n=[{label:"",value:null}];n.push.apply(n,b(t.indicateurs)),t.indicateurs=n,t.sous_indicateurs=[],t.periode=null})).catch((function(e){t.indicateurs=[]}))},findSousIndicateurByDesagregation:function(e){var t=this,n=this;if(n.desagregation_id=null,this.indicateurs){var a=this.indicateurs.find((function(e){return e.id==t.donnee.indicateur_id}));a&&(null!=a.periode&&(n.periodesDispobible=a.periode.split(",")),n.desagregation_id=a.desagregation_id)}i.a.get(this.$apiAdress+"/api/sous_indicateurs/findByDesagregation/"+n.desagregation_id+"?token="+localStorage.getItem("api_token")).then((function(e){n.sousIndicateurs=e.data;var t=[{label:"",value:null}];t.push.apply(t,b(n.sousIndicateurs)),n.sousIndicateurs=t})).catch((function(e){n.sousIndicateurs=[]}))},search:function(){this.refreshing=!this.refreshing,this.donneeSearch=JSON.parse(JSON.stringify(this.donnee)),this.donneeSearch.annee=[];var e,t=I(this.selectedItems);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.donneeSearch.annee.push(n.value)}}catch(i){t.e(i)}finally{t.f()}this.donneeSearch.periode_value=[];var a,r=I(this.selectedPeriode_values);try{for(r.s();!(a=r.n()).done;){var o=a.value;this.donneeSearch.periode_value.push(o.value)}}catch(i){r.e(i)}finally{r.f()}},findElementFiltre:function(){var e=this;i.a.get(this.$apiAdress+"/api/donnees/elementSearch?token="+localStorage.getItem("api_token")).then((function(t){console.log(t),e.groupes=t.data.groupes,e.sous_groupes=t.data.sous_groupes;var n=[{label:"",value:null}];n.push.apply(n,b(e.sous_groupes)),e.sous_groupes=n,e.donnee.groupe_id=e.groupes.length>0?e.groupes[0].value:null,e.donnee.sous_groupe_id=e.sous_groupes.length>0?e.sous_groupes[0].value:null,e.annees=t.data.annees,e.refreshing3=!1,e.findSousGroupeByGroupe(),setTimeout((function(){e.refreshing3=!0}),1)})).catch((function(e){console.log(e)}))}},"findSousIndicateurByDesagregation",(function(e){var t=this,n=this;if(n.desagregation_id=null,this.indicateurs){var a=this.indicateurs.find((function(e){return e.id==t.donnee.indicateur_id}));a&&(null!=a.periode&&(n.periodesDispobible=a.periode.split(",")),n.desagregation_id=a.desagregation_id)}i.a.get(this.$apiAdress+"/api/sous_indicateurs/findByDesagregation/"+n.desagregation_id+"?token="+localStorage.getItem("api_token")).then((function(e){n.sousIndicateurs=e.data;var t=[{label:"",value:null}];t.push.apply(t,b(n.sousIndicateurs)),n.sousIndicateurs=t})).catch((function(e){n.sousIndicateurs=[]}))})),"countDownChanged",(function(e){this.dismissCountDown=e})),"showAlert",(function(){this.dismissCountDown=this.dismissSecs})),mounted:function(){this.findElementFiltre()}},k=E,A=n("2877"),T=Object(A["a"])(k,a,r,!1,null,null,null);t["default"]=T.exports},9626:function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("CRow",e._l(e.items,(function(n){return t("CCol",{key:n.id,attrs:{sm:"6",lg:"6"}},[t("div",{staticStyle:{display:"none"}},[e._v(e._s(n.titre=n.indicateur+" "+(e.anneelist.length>1&&e.periodelist.length>1&&"ANNUEL"!=n.periode?n.periode_value+" "+n.annee:e.anneelist.length>1?n.annee:e.periodelist.length>1||"ANNUEL"!=n.periode?n.periode_value+" "+n.annee:n.annee)))]),t("CWidgetDropdown",{attrs:{color:n.couleur,header:n.valeur+"",text:n.titre+""},scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"}})]},proxy:!0}],null,!0)})],1)})),1)},r=[],o=n("bc3a"),i=n.n(o);function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function l(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c={name:"IndicateursShow",props:["donneeSearch","refreshing"],data:function(){return{donnee:{indicateur:"",valeur:""},items:[],anneelist:[],periodelist:[],couleurs:[]}},watch:{reloadParams:function(){this.getDatasets()}},computed:{reloadParams:function(){return[this.refreshing]}},methods:{genererTableauCouleur:function(e){var t=[],n=["primary","secondary","success","warning","danger","info","light","dark"];while(t.length<e)t.push.apply(t,n);return t},updatedPeriodeInList:function(e){var t=[];e.forEach((function(e){switch(e.periode){case"TRIMESTRIEL":t=[{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"}];break;case"MENSUEL":t=[{value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},{value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},{value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"}];break;case"SEMESTRIEL":t=[{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}];break;case"ANNUEL":t=[];break;default:break}"ANNUEL"!=e.periode&&(e.periode_value=t[e.periode_value-1].label)}))},getDatasets:function(){var e=this;i.a.post(this.$apiAdress+"/api/donnees/findBy?token="+localStorage.getItem("api_token"),e.donneeSearch).then((function(t){e.items=t.data,e.updatedPeriodeInList(e.items),e.couleurs=e.genererTableauCouleur(e.items.length);for(var n=0;n<e.items.length;n++)e.items[n]["couleur"]=e.couleurs[n];e.anneelist=[];var a,r=s(e.items);try{for(r.s();!(a=r.n()).done;){var o,i=a.value,l=!1,u=s(e.anneelist);try{for(u.s();!(o=u.n()).done;){var c=o.value;if(c===i.annee){l=!0;break}}}catch(b){u.e(b)}finally{u.f()}l||e.anneelist.push(i.annee)}}catch(b){r.e(b)}finally{r.f()}e.periodelist=[];var d,p=s(e.items);try{for(p.s();!(d=p.n()).done;){var f,h=d.value,v=!1,g=s(e.periodelist);try{for(g.s();!(f=g.n()).done;){var m=f.value;if(m===h.periode_value){v=!0;break}}}catch(b){g.e(b)}finally{g.f()}v||e.periodelist.push(h.periode_value)}}catch(b){p.e(b)}finally{p.f()}})).catch((function(t){if("The given data was invalid."==t.response.data.message)for(var n in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(n)&&(e.message+=t.response.data.errors[n][0]+"  ");else e.$router.push({path:"login"})}))}},mounted:function(){var e=this;e.getDatasets()}},d=c,p=n("2877"),f=Object(p["a"])(d,a,r,!1,null,null,null);t["a"]=f.exports}}]);
//# sourceMappingURL=chunk-b3c87630.09c966c5.js.map