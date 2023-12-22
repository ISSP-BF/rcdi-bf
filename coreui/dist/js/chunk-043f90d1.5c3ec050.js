(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-043f90d1"],{"4a91":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",[t("CCardHeader",[e._v(" Ajouter un indicateur ")]),t("CCardBody",[t("CSelect",{attrs:{label:"Groupe",value:e.indicateur.groupe_id,plain:!0,options:e.groupes},on:{"update:value":function(t){return e.$set(e.indicateur,"groupe_id",t)},change:function(t){return e.findSousGroupeByGroupe(t)}}}),t("CSelect",{attrs:{label:"Sous Groupe",value:e.indicateur.sous_groupe_id,plain:!0,options:e.sous_groupes},on:{"update:value":function(t){return e.$set(e.indicateur,"sous_groupe_id",t)}}}),t("CInput",{attrs:{label:"Code",type:"text",placeholder:"Code"},model:{value:e.indicateur.code,callback:function(t){e.$set(e.indicateur,"code",t)},expression:"indicateur.code"}}),t("CInput",{attrs:{label:"Libelle",type:"text",placeholder:"Libelle"},model:{value:e.indicateur.libelle,callback:function(t){e.$set(e.indicateur,"libelle",t)},expression:"indicateur.libelle"}}),t("CTextarea",{attrs:{label:"Description",type:"text",placeholder:"Description",rows:"9"},model:{value:e.indicateur.description,callback:function(t){e.$set(e.indicateur,"description",t)},expression:"indicateur.description"}}),t("CTextarea",{attrs:{label:"Methode de calcule",type:"text",placeholder:"Methode de calcule",rows:"9"},model:{value:e.indicateur.methode_calcule,callback:function(t){e.$set(e.indicateur,"methode_calcule",t)},expression:"indicateur.methode_calcule"}}),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-3 form-group",attrs:{role:"group"}},[t("label",{staticClass:"row col custom-control-inline"},[e._v(" Période ")]),e._l(e.periodeList,(function(r){return t("CInputCheckbox",{key:r,attrs:{label:r,name:"Période "},on:{"update:checked":function(t){return e.selectRadioSelectPeriode(r)}}})}))],2)]),t("CSelect",{attrs:{label:"Desagregation",value:e.indicateur.desagregation_id,plain:!0,options:e.desagregations},on:{"update:value":function(t){return e.$set(e.indicateur,"desagregation_id",t)}}}),t("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.store()}}},[e._v("Ajouter")]),e._v("   "),t("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)},a=[],i=r("bc3a"),n=r.n(i);function s(e){return d(e)||c(e)||l(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function d(e){if(Array.isArray(e))return p(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var g={name:"CreateIndicateur",props:{caption:{type:String,default:"Indicateur id"}},data:function(){return{indicateur:{libelle:"",groupe_id:"",desagregation_id:""},groupes:[],sous_groupes:[],periodes:[],periodeList:["MENSUEL","TRIMESTRIEL","SEMESTRIEL","ANNUEL"],desagregations:[],message:""}},methods:{goBack:function(){this.$router.go(-1)},selectRadioSelectPeriode:function(e){var t=this.periodes.indexOf(e);t>-1?this.periodes.splice(t,1):this.periodes.push(e)},store:function(){var e=this;e.indicateur.periode=this.periodes.toString(),n.a.post(this.$apiAdress+"/api/indicateurs?token="+localStorage.getItem("api_token"),e.indicateur).then((function(t){e.indicateur={desagregation_id:"",libelle:""},e.$toasted.show(t.data.message,{type:"success"}),e.$router.go(-1)})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var r in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(r)&&(e.message+=t.response.data.errors[r][0]+"  ");e.$toasted.show(e.message,{type:"danger"})}}))},findSousGroupeByGroupe:function(e){this.sous_groupes=[];var t=this;n.a.get(this.$apiAdress+"/api/sous_groupes/findByGroupe/"+t.indicateur.groupe_id+"?token="+localStorage.getItem("api_token")).then((function(e){console.log(e),t.sous_groupes=e.data;var r=[{label:"",value:null}];r.push.apply(r,s(t.sous_groupes)),t.sous_groupes=r})).catch((function(e){t.indicateurs=[]}))}},mounted:function(){var e=this;n.a.get(this.$apiAdress+"/api/indicateurs/create?token="+localStorage.getItem("api_token")).then((function(t){e.desagregations=t.data.desagregations,e.groupes=t.data.groupes,e.sous_groupes=t.data.sous_groupes;var r=[{label:"",value:null}];r.push.apply(r,s(e.desagregations)),e.desagregations=r,e.indicateur.desagregation_id=e.desagregations.length>0?e.desagregations[0].value:null,e.indicateur.groupe_id=e.groupes.length>0?e.groupes[0].value:null,e.indicateur.sous_groupe_id=e.sous_groupes.length>0?e.sous_groupes[0].value:null})).catch((function(t){e.$router.push({path:"login"})}))}},f=g,h=(r("e428"),r("2877")),_=Object(h["a"])(f,o,a,!1,null,"897c2102",null);t["default"]=_.exports},b3c4:function(e,t,r){},e428:function(e,t,r){"use strict";r("b3c4")}}]);
//# sourceMappingURL=chunk-043f90d1.5c3ec050.js.map