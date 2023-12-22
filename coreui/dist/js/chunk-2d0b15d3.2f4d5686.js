(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b15d3"],{2010:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e._self._c;return n("CRow",[n("CCol",{attrs:{col:"12",lg:"6"}},[n("CCard",[n("CCardHeader",[e._v(" Modifier Donnee id: "+e._s(e.$route.params.id)+" ")]),n("CCardBody",[n("CSelect",{attrs:{label:"Groupe",value:e.donnee.groupe_id,plain:!0,options:e.groupes},on:{"update:value":function(n){return e.$set(e.donnee,"groupe_id",n)},change:function(n){return e.findIndicateurByGroupe(n)}}}),n("CSelect",{attrs:{label:"Localisation",value:e.donnee.localisation_id,plain:!0,options:e.localisations},on:{"update:value":function(n){return e.$set(e.donnee,"localisation_id",n)}}}),n("CSelect",{attrs:{label:"Indicateur",value:e.donnee.indicateur_id,plain:!0,options:e.indicateurs},on:{"update:value":function(n){return e.$set(e.donnee,"indicateur_id",n)},change:function(n){return e.findSousIndicateurByDesagregation(n)}}}),e.desagregation_id?n("CSelect",{attrs:{label:"Sous indicateur",value:e.donnee.sous_indicateur_id,plain:!0,options:e.sousIndicateurs},on:{"update:value":function(n){return e.$set(e.donnee,"sous_indicateur_id",n)}}}):e._e(),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 form-group",attrs:{role:"group"}},[n("label",{staticClass:"custom-control-inline"},[e._v(" Période ")]),e._l(e.periodesDispobible,(function(t){return n("div",{key:t,staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group",label:t}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.donnee.periode,expression:"donnee.periode"}],staticClass:"custom-control-input",attrs:{id:"periode"+t,type:"radio"},domProps:{value:t,checked:e._q(e.donnee.periode,t)},on:{click:function(n){return e.updatedListPeriode(t)},change:function(n){return e.$set(e.donnee,"periode",t)}}}),n("label",{staticClass:"custom-control-label",attrs:{for:"periode"+t}},[e._v(" "+e._s(t)+" ")])])}))],2)]),e.donnee.periode&&"ANNUEL"!=e.donnee.periode?n("CSelect",{attrs:{label:"Choix période",value:e.donnee.periode_value,plain:!0,options:e.choixPeriodes},on:{"update:value":function(n){return e.$set(e.donnee,"periode_value",n)},"update:options":function(n){e.choixPeriodes=n}}}):e._e(),n("CInput",{attrs:{label:"Annee",type:"text",placeholder:"Annee","is-valid":e.anneeValidator},model:{value:e.donnee.annee,callback:function(n){e.$set(e.donnee,"annee",n)},expression:"donnee.annee"}}),n("CInput",{attrs:{label:"Valeur",type:"text",placeholder:"Valeur"},model:{value:e.donnee.valeur,callback:function(n){e.$set(e.donnee,"valeur",n)},expression:"donnee.valeur"}}),n("CInput",{attrs:{label:"Source",type:"text",placeholder:"Source"},model:{value:e.donnee.source,callback:function(n){e.$set(e.donnee,"source",n)},expression:"donnee.source"}}),n("CButton",{attrs:{color:"primary"},on:{click:function(n){return e.update()}}},[e._v("Modifier")]),e._v("   "),n("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)},a=[],i=t("bc3a"),r=t.n(i);function s(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=d(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return r=e.done,e},e:function(e){s=!0,i=e},f:function(){try{r||null==t.return||t.return()}finally{if(s)throw i}}}}function l(e){return p(e)||c(e)||d(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,n){if(e){if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function p(e){if(Array.isArray(e))return f(e)}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var v={name:"EditDonnee",props:{caption:{type:String,default:"User id"}},data:function(){return{donnee:{libelle:"",groupe_id:"",sous_indicateur_id:"",periode:null},localisations:[],groupes:[],periodes:[],periodeList:["MENSUEL","TRIMESTRIEL","SEMESTRIEL","ANNUEL"],indicateurs:[],sousIndicateurs:[],desagregation_id:null,message:"",periodesDispobible:[],choixPeriodes:[]}},methods:{goBack:function(){this.$router.go(-1)},selectRadioSelectPeriode:function(e){var n=this.periodes.indexOf(e);n>-1?this.periodes.splice(n,1):this.periodes.push(e)},updatedListPeriode:function(e){switch(this.choixPeriodes=[],e){case"TRIMESTRIEL":this.choixPeriodes=[{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"}];break;case"MENSUEL":this.choixPeriodes=[{value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},{value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},{value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"}];break;case"SEMESTRIEL":this.choixPeriodes=[{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}];break;case"ANNUEL":this.choixPeriodes=[];break;default:break}this.donnee.periode_value=this.choixPeriodes.length>0?this.choixPeriodes[0].value:null},update:function(){var e=this;e.donnee.periode=this.periodes.toString(),r.a.put(this.$apiAdress+"/api/donnees/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),e.donnee).then((function(n){e.$router.go(-1),e.$toasted.show(n.data.message,{type:"success"})})).catch((function(n){if("The given data was invalid."==n.response.data.message){for(var t in e.message="",n.response.data.errors)n.response.data.errors.hasOwnProperty(t)&&(e.message+=n.response.data.errors[t][0]+"  ");e.$toasted.show(e.message,{type:"success"})}else e.$router.push({path:"/login"})}))},anneeValidator:function(e){return e?e<=2023&&e>=1900&&null:null},findLocalisationByGroupe:function(e){var n=this;r.a.get(this.$apiAdress+"/api/indicateurs/findLocalisationByGroupe/"+n.donnee.groupe_id+"?token="+localStorage.getItem("api_token")).then((function(e){console.log(e),n.localisations=e.data;var t=[{label:"",value:null}];t.push.apply(t,l(n.localisations)),n.localisations=t})).catch((function(e){n.localisations=[]}))},findIndicateurByGroupe:function(e){this.findLocalisationByGroupe(e),console.log(e);var n=this;r.a.get(this.$apiAdress+"/api/indicateurs/findByGroupe/"+n.donnee.groupe_id+"?token="+localStorage.getItem("api_token")).then((function(e){console.log(e),n.indicateurs=e.data;var t=[{label:"",value:null}];t.push.apply(t,l(n.indicateurs)),n.indicateurs=t,n.sous_indicateurs=[],n.periode=null})).catch((function(e){n.indicateurs=[]}))},findSousIndicateurByDesagregation:function(e){var n=this,t=this;if(t.desagregation_id=null,this.indicateurs){var o=this.indicateurs.find((function(e){return e.id==n.donnee.indicateur_id}));o&&(null!=o.periode&&(t.periodesDispobible=o.periode.split(",")),t.desagregation_id=o.desagregation_id)}r.a.get(this.$apiAdress+"/api/sous_indicateurs/findByDesagregation/"+t.desagregation_id+"?token="+localStorage.getItem("api_token")).then((function(e){t.sousIndicateurs=e.data;var n=[{label:"",value:null}];n.push.apply(n,l(t.sousIndicateurs)),t.sousIndicateurs=n})).catch((function(e){t.sousIndicateurs=[]}))}},mounted:function(){var e=this;r.a.get(this.$apiAdress+"/api/donnees/"+e.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(n){e.indicateurs=n.data.indicateurs,e.groupes=n.data.groupes,e.donnee=n.data.donnee,e.sousIndicateurs=n.data.sousIndicateurs,null!=e.indicateur.periode&&(e.periodes=e.donnee.periode.split(","));var t,o=s(e.periodes);try{for(o.s();!(t=o.n()).done;){var a=t.value;e.fixedPeriode[""+a]=!0}}catch(r){o.e(r)}finally{o.f()}e.updatedListPeriode(e.donnee.periode);var i=[{label:"",value:null}];i.push.apply(i,l(e.indicateurs)),e.indicateurs=i,e.donnee.groupe_id=e.groupes.length>0?e.groupes[0].value:null})).catch((function(e){}))}},h=v,g=t("2877"),b=Object(g["a"])(h,o,a,!1,null,null,null);n["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0b15d3.2f4d5686.js.map