(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{818:function(e,a,o){"use strict";o.r(a);var t=o(2),n=o.n(t),i={name:"EditActeMariage",props:{caption:{type:String,default:"ActeMariage id"}},data:function(){return{acteMariage:{n_acte:"",date_etablissement:(new Date).toISOString().slice(0,10),date_naissance_conjoint:"",age_mariage_conjoint:"",sexe_conjoint:"M",hors_commune_conjoint:"NON",commune_naissance_conjoint:"",localite_naissance_conjoint:"",domicile_conjoint:"",profession_conjoint:"",date_naissance_conjointe:"",age_mariage_conjointe:"",sexe_conjointe:"F",hors_commune_conjointe:"NON",commune_naissance_conjointe:"",localite_naissance_conjointe:"",domicile_conjointe:"",profession_conjointe:"",regime_matrimonial:"MONOGAMIE",option_matrimonial:"BIEN_SEPARE",province_id:null,region_id:null,commune_id:null},professions:[],regions:[],provinces:[],communes:[],message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{ageCalculeAndValidatorConjoint:function(e){return this.acteMariage.date_naissance_conjoint&&this.acteMariage.date_naissance_conjoint?this.acteMariage.age_mariage_conjoint=new Date(this.acteMariage.date_etablissement).getFullYear()-new Date(this.acteMariage.date_naissance_conjoint).getFullYear():this.acteMariage.age_mariage_conjoint=null,e?new Date(e)<=new Date&&null:null},ageCalculeAndValidatorConjointe:function(e){return this.acteMariage.date_naissance_conjointe&&this.acteMariage.date_naissance_conjointe?this.acteMariage.age_mariage_conjointe=new Date(this.acteMariage.date_etablissement).getFullYear()-new Date(this.acteMariage.date_naissance_conjointe).getFullYear():this.acteMariage.age_mariage_conjointe=null,e?new Date(e)<=new Date&&null:null},goBack:function(){this.$router.go(-1)},store:function(){var e=this;"NON"==this.acteMariage.hors_commune_conjointe?this.acteMariage.localite_naissance_conjointe="":this.acteMariage.commune_naissance_conjointe=null,"NON"==this.acteMariage.hors_commune_conjoint?this.acteMariage.localite_naissance_conjoint="":this.acteMariage.commune_naissance_conjoint=null,n.a.post(this.$apiAdress+"/api/acte_mariages?token="+localStorage.getItem("api_token"),e.acteMariage).then((function(a){e.acteMariage={},e.$toasted.show("L'acte a été créé avec succès",{type:"success"}),e.showAlert(),e.goBack()})).catch((function(a){if("The given data was invalid."==a.response.data.message){for(var o in e.message="",a.response.data.errors)a.response.data.errors.hasOwnProperty(o)&&(e.message+=a.response.data.errors[o][0]+"  ");e.$toasted.show(e.message,{type:"error"}),e.showAlert()}else console.log(a),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;n.a.get(this.$apiAdress+"/api/acte_mariages/create?token="+localStorage.getItem("api_token")).then((function(a){e.regions=a.data.regions,e.provinces=a.data.provinces,e.communes=a.data.communes,e.professions=a.data.professions,e.acteMariage.region_id=e.regions.length>0?e.regions[0].value:null,e.acteMariage.province_id=e.provinces.length>0?e.provinces[0].value:null,e.acteMariage.commune_id=e.communes.length>0?e.communes[0].value:null,e.acteMariage.commune_naissance_conjoint=e.communes.length>0?e.communes[0].value:null,e.acteMariage.commune_naissance_conjointe=e.communes.length>0?e.communes[0].value:null,e.acteMariage.profession_conjoint_id=e.professions.length>0?e.professions[0].value:null,e.acteMariage.profession_conjointe_id=e.professions.length>0?e.professions[0].value:null})).catch((function(a){console.log(a),e.$router.push({path:"login"})}))}},s=o(1),c=Object(s.a)(i,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("CRow",[o("CCol",{attrs:{col:"12",lg:"12"}},[o("CCard",[o("CCardHeader",[e._v("\n         Acte de Mariage\n      ")]),e._v(" "),o("CCardBody",[o("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(a){e.dismissCountDown=a}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),o("div",{staticClass:"row "},[o("CSelect",{staticClass:"col-lg-3",attrs:{label:"Region",value:e.acteMariage.region_id,plain:!0,options:e.regions},on:{"update:value":function(a){return e.$set(e.acteMariage,"region_id",a)}},model:{value:e.acteMariage.region_id,callback:function(a){e.$set(e.acteMariage,"region_id",a)},expression:"acteMariage.region_id"}}),e._v(" "),o("CSelect",{staticClass:"col-lg-3",attrs:{label:"Province",value:e.acteMariage.province_id,plain:!0,options:e.provinces},on:{"update:value":function(a){return e.$set(e.acteMariage,"province_id",a)}},model:{value:e.acteMariage.province_id,callback:function(a){e.$set(e.acteMariage,"province_id",a)},expression:"acteMariage.province_id"}}),e._v(" "),o("CSelect",{staticClass:"col-lg-3",attrs:{label:"Commune",value:e.acteMariage.commune_id,plain:!0,options:e.communes},on:{"update:value":function(a){return e.$set(e.acteMariage,"commune_id",a)}},model:{value:e.acteMariage.commune_id,callback:function(a){e.$set(e.acteMariage,"commune_id",a)},expression:"acteMariage.commune_id"}}),e._v(" "),o("CInput",{staticClass:"col-lg-3",attrs:{label:"Numero Acte",type:"text",placeholder:"Numero Acte"},model:{value:e.acteMariage.n_acte,callback:function(a){e.$set(e.acteMariage,"n_acte",a)},expression:"acteMariage.n_acte"}}),e._v(" "),o("CInput",{staticClass:"col-lg-3",attrs:{label:"Date établissement",type:"date",placeholder:"Date établissement"},model:{value:e.acteMariage.date_etablissement,callback:function(a){e.$set(e.acteMariage,"date_etablissement",a)},expression:"acteMariage.date_etablissement"}}),e._v(" "),[o("div",{staticClass:"form-group form-row col-lg-3"},[o("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v("\n                  Regime matrimonial\n                ")]),e._v(" "),o("CCol",{class:"form-inline",attrs:{sm:"12"}},[o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.regime_matrimonial,expression:"acteMariage.regime_matrimonial"}],staticClass:"custom-control-input",attrs:{id:"regime_matrimonialO",type:"radio",value:"MONOGAMIE"},domProps:{checked:e._q(e.acteMariage.regime_matrimonial,"MONOGAMIE")},on:{change:function(a){return e.$set(e.acteMariage,"regime_matrimonial","MONOGAMIE")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"regime_matrimonialO"}},[e._v(" Monogamie ")])]),e._v(" "),o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.regime_matrimonial,expression:"acteMariage.regime_matrimonial"}],staticClass:"custom-control-input",attrs:{id:"regime_matrimonialN",type:"radio",value:"POLYGAMIE"},domProps:{checked:e._q(e.acteMariage.regime_matrimonial,"POLYGAMIE")},on:{change:function(a){return e.$set(e.acteMariage,"regime_matrimonial","POLYGAMIE")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"regime_matrimonialN"}},[e._v(" Polygamie ")])])])],1)],e._v(" "),[o("div",{staticClass:"form-group form-row col-lg-3"},[o("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v("\n                  Option matrimonial\n                ")]),e._v(" "),o("CCol",{class:"form-inline",attrs:{sm:"12"}},[o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.option_matrimonial,expression:"acteMariage.option_matrimonial"}],staticClass:"custom-control-input",attrs:{id:"option_matrimonialO",type:"radio",value:"BIEN_COMMUN"},domProps:{checked:e._q(e.acteMariage.option_matrimonial,"BIEN_COMMUN")},on:{change:function(a){return e.$set(e.acteMariage,"option_matrimonial","BIEN_COMMUN")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"option_matrimonialO"}},[e._v(" Bien commun ")])]),e._v(" "),o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.option_matrimonial,expression:"acteMariage.option_matrimonial"}],staticClass:"custom-control-input",attrs:{id:"option_matrimonialN",type:"radio",value:"BIEN_SEPARE"},domProps:{checked:e._q(e.acteMariage.option_matrimonial,"BIEN_SEPARE")},on:{change:function(a){return e.$set(e.acteMariage,"option_matrimonial","BIEN_SEPARE")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"option_matrimonialN"}},[e._v(" Bien separe ")])])])],1)]],2)],1)],1)],1),e._v(" "),o("CCol",{attrs:{col:"6",lg:"6"}},[o("CCard",[o("CCardHeader",[e._v("\n          Information du conjoint\n      ")]),e._v(" "),o("CCardBody",[o("div",{staticClass:"row "},[o("CInput",{staticClass:"col-lg-8",attrs:{label:"Date naissance (Si jour inconnu choisir le 01 du mois,Si mois inconnu choisir Janvier)",type:"date",placeholder:"Date naissance","is-valid":e.ageCalculeAndValidatorConjoint},model:{value:e.acteMariage.date_naissance_conjoint,callback:function(a){e.$set(e.acteMariage,"date_naissance_conjoint",a)},expression:"acteMariage.date_naissance_conjoint"}}),e._v(" "),[o("div",{staticClass:"form-group form-row",staticStyle:{"align-items":"end"}},[e._v(" \n                  Age : "),o("label",{attrs:{for:"age_mariage_conjoint"}},[e._v(" "+e._s(e.acteMariage.age_mariage_conjoint)+" ")])])]],2),e._v(" "),[o("div",{staticClass:"form-group form-row"},[o("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v("\n                  Sexe\n                ")]),e._v(" "),o("CCol",{class:"form-inline",attrs:{sm:"9"}},[o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.sexe_conjoint,expression:"acteMariage.sexe_conjoint"}],staticClass:"custom-control-input",attrs:{id:"homme",type:"radio",value:"M"},domProps:{checked:e._q(e.acteMariage.sexe_conjoint,"M")},on:{change:function(a){return e.$set(e.acteMariage,"sexe_conjoint","M")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"homme"}},[e._v(" Homme ")])]),e._v(" "),o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.sexe_conjoint,expression:"acteMariage.sexe_conjoint"}],staticClass:"custom-control-input",attrs:{id:"femme",type:"radio",value:"F"},domProps:{checked:e._q(e.acteMariage.sexe_conjoint,"F")},on:{change:function(a){return e.$set(e.acteMariage,"sexe_conjoint","F")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"femme"}},[e._v(" Femme ")])])])],1)],e._v(" "),[o("div",{staticClass:"form-group form-row"},[o("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v("\n                  Hors commune\n                ")]),e._v(" "),o("CCol",{class:"form-inline",attrs:{sm:"9"}},[o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.hors_commune_conjoint,expression:"acteMariage.hors_commune_conjoint"}],staticClass:"custom-control-input",attrs:{id:"hors_commune_conjointO",type:"radio",value:"OUI"},domProps:{checked:e._q(e.acteMariage.hors_commune_conjoint,"OUI")},on:{change:function(a){return e.$set(e.acteMariage,"hors_commune_conjoint","OUI")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"hors_commune_conjointO"}},[e._v(" Oui ")])]),e._v(" "),o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.hors_commune_conjoint,expression:"acteMariage.hors_commune_conjoint"}],staticClass:"custom-control-input",attrs:{id:"hors_commune_conjointN",type:"radio",value:"NON"},domProps:{checked:e._q(e.acteMariage.hors_commune_conjoint,"NON")},on:{change:function(a){return e.$set(e.acteMariage,"hors_commune_conjoint","NON")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"hors_commune_conjointN"}},[e._v(" Non ")])])])],1)],e._v(" "),"NON"==e.acteMariage.hors_commune_conjoint?o("CSelect",{attrs:{label:"Commune de naissance",value:e.acteMariage.commune_naissance_conjoint,plain:!0,options:e.communes},on:{"update:value":function(a){return e.$set(e.acteMariage,"commune_naissance_conjoint",a)}},model:{value:e.acteMariage.commune_naissance_conjoint,callback:function(a){e.$set(e.acteMariage,"commune_naissance_conjoint",a)},expression:"acteMariage.commune_naissance_conjoint"}}):e._e(),e._v(" "),"OUI"==e.acteMariage.hors_commune_conjoint?o("CInput",{attrs:{label:"Localite de naissance",type:"text",placeholder:"Localite de naissance"},model:{value:e.acteMariage.localite_naissance_conjoint,callback:function(a){e.$set(e.acteMariage,"localite_naissance_conjoint",a)},expression:"acteMariage.localite_naissance_conjoint"}}):e._e(),e._v(" "),o("CInput",{attrs:{label:"Domicile",type:"text",placeholder:"Domicile"},model:{value:e.acteMariage.domicile_conjoint,callback:function(a){e.$set(e.acteMariage,"domicile_conjoint",a)},expression:"acteMariage.domicile_conjoint"}}),e._v(" "),o("CSelect",{attrs:{label:"Profession",value:e.acteMariage.profession_conjoint_id,plain:!0,options:e.professions},on:{"update:value":function(a){return e.$set(e.acteMariage,"profession_conjoint_id",a)}},model:{value:e.acteMariage.profession_conjoint_id,callback:function(a){e.$set(e.acteMariage,"profession_conjoint_id",a)},expression:"acteMariage.profession_conjoint_id"}})],2)],1)],1),e._v(" "),o("CCol",{attrs:{col:"6",lg:"6"}},[o("CCard",[o("CCardHeader",[e._v("\n          Information de la conjointe\n      ")]),e._v(" "),o("CCardBody",[o("div",{staticClass:"row"},[o("CInput",{staticClass:"col-lg-8",attrs:{label:"Date naissance (Si jour inconnu choisir le 01 du mois,Si mois inconnu choisir Janvier)",type:"date",placeholder:"Date naissance","is-valid":e.ageCalculeAndValidatorConjointe},model:{value:e.acteMariage.date_naissance_conjointe,callback:function(a){e.$set(e.acteMariage,"date_naissance_conjointe",a)},expression:"acteMariage.date_naissance_conjointe"}}),e._v(" "),[o("div",{staticClass:"form-group form-row",staticStyle:{"align-items":"end"}},[e._v(" \n                  Age : "),o("label",{attrs:{for:"age_mariage_conjointe"}},[e._v(" "+e._s(e.acteMariage.age_mariage_conjointe)+" ")])])]],2),e._v(" "),[o("div",{staticClass:"form-group form-row"},[o("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v("\n                  Sexe\n                ")]),e._v(" "),o("CCol",{class:"form-inline",attrs:{sm:"9"}},[o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.sexe_conjointe,expression:"acteMariage.sexe_conjointe"}],staticClass:"custom-control-input",attrs:{id:"homme",type:"radio",value:"M"},domProps:{checked:e._q(e.acteMariage.sexe_conjointe,"M")},on:{change:function(a){return e.$set(e.acteMariage,"sexe_conjointe","M")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"homme"}},[e._v(" Homme ")])]),e._v(" "),o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.sexe_conjointe,expression:"acteMariage.sexe_conjointe"}],staticClass:"custom-control-input",attrs:{id:"femme",type:"radio",value:"F"},domProps:{checked:e._q(e.acteMariage.sexe_conjointe,"F")},on:{change:function(a){return e.$set(e.acteMariage,"sexe_conjointe","F")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"femme"}},[e._v(" Femme ")])])])],1)],e._v(" "),[o("div",{staticClass:"form-group form-row"},[o("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v("\n                  Hors commune\n                ")]),e._v(" "),o("CCol",{class:"form-inline",attrs:{sm:"9"}},[o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.hors_commune_conjointe,expression:"acteMariage.hors_commune_conjointe"}],staticClass:"custom-control-input",attrs:{id:"hors_commune_conjointeO",type:"radio",value:"OUI"},domProps:{checked:e._q(e.acteMariage.hors_commune_conjointe,"OUI")},on:{change:function(a){return e.$set(e.acteMariage,"hors_commune_conjointe","OUI")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"hors_commune_conjointeO"}},[e._v(" Oui ")])]),e._v(" "),o("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.acteMariage.hors_commune_conjointe,expression:"acteMariage.hors_commune_conjointe"}],staticClass:"custom-control-input",attrs:{id:"hors_commune_conjointeN",type:"radio",value:"NON"},domProps:{checked:e._q(e.acteMariage.hors_commune_conjointe,"NON")},on:{change:function(a){return e.$set(e.acteMariage,"hors_commune_conjointe","NON")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"hors_commune_conjointeN"}},[e._v(" Non ")])])])],1)],e._v(" "),"NON"==e.acteMariage.hors_commune_conjointe?o("CSelect",{attrs:{label:"Commune de naissance",value:e.acteMariage.commune_naissance_conjointe,plain:!0,options:e.communes},on:{"update:value":function(a){return e.$set(e.acteMariage,"commune_naissance_conjointe",a)}},model:{value:e.acteMariage.commune_naissance_conjointe,callback:function(a){e.$set(e.acteMariage,"commune_naissance_conjointe",a)},expression:"acteMariage.commune_naissance_conjointe"}}):e._e(),e._v(" "),"OUI"==e.acteMariage.hors_commune_conjointe?o("CInput",{attrs:{label:"Localite de naissance",type:"text",placeholder:"Localite de naissance"},model:{value:e.acteMariage.localite_naissance_conjointe,callback:function(a){e.$set(e.acteMariage,"localite_naissance_conjointe",a)},expression:"acteMariage.localite_naissance_conjointe"}}):e._e(),e._v(" "),o("CInput",{attrs:{label:"Domicile",type:"text",placeholder:"Domicile"},model:{value:e.acteMariage.domicile_conjointe,callback:function(a){e.$set(e.acteMariage,"domicile_conjointe",a)},expression:"acteMariage.domicile_conjointe"}}),e._v(" "),o("CSelect",{attrs:{label:"Profession",value:e.acteMariage.profession_conjointe_id,plain:!0,options:e.professions},on:{"update:value":function(a){return e.$set(e.acteMariage,"profession_conjointe_id",a)}},model:{value:e.acteMariage.profession_conjointe_id,callback:function(a){e.$set(e.acteMariage,"profession_conjointe_id",a)},expression:"acteMariage.profession_conjointe_id"}})],2)],1)],1),e._v(" "),o("CCol",{attrs:{col:"12",lg:"12"}},[o("CCard",[o("CCardBody",[o("CButton",{attrs:{color:"primary"},on:{click:function(a){return e.store()}}},[e._v("Ajouter")]),e._v("  \n        "),o("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)}),[],!1,null,null,null);a.default=c.exports}}]);