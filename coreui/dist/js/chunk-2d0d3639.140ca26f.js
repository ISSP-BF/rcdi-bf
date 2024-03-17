(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3639"],{"5d0d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",[t("CCardBody",[t("h3",[e._v(" Modifier Acte de Décès numéro : "+e._s(e.$route.params.id)+" ")]),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),t("CSelect",{attrs:{label:"Region",value:e.acteDeces.region_id,plain:!0,options:e.regions},on:{"update:value":function(t){return e.$set(e.acteDeces,"region_id",t)}},model:{value:e.acteDeces.region_id,callback:function(t){e.$set(e.acteDeces,"region_id",t)},expression:"acteDeces.region_id"}}),t("CSelect",{attrs:{label:"Province",value:e.acteDeces.province_id,plain:!0,options:e.provinces},on:{"update:value":function(t){return e.$set(e.acteDeces,"province_id",t)}},model:{value:e.acteDeces.province_id,callback:function(t){e.$set(e.acteDeces,"province_id",t)},expression:"acteDeces.province_id"}}),t("CSelect",{attrs:{label:"Commune",value:e.acteDeces.commune_id,plain:!0,options:e.communes},on:{"update:value":function(t){return e.$set(e.acteDeces,"commune_id",t)}},model:{value:e.acteDeces.commune_id,callback:function(t){e.$set(e.acteDeces,"commune_id",t)},expression:"acteDeces.commune_id"}}),t("CInput",{attrs:{label:"Numero Acte",type:"text",placeholder:"Numero Acte"},model:{value:e.acteDeces.n_acte,callback:function(t){e.$set(e.acteDeces,"n_acte",t)},expression:"acteDeces.n_acte"}}),t("CInput",{attrs:{label:"Nom",type:"text",placeholder:"Nom"},model:{value:e.acteDeces.nom,callback:function(t){e.$set(e.acteDeces,"nom",t)},expression:"acteDeces.nom"}}),t("CInput",{attrs:{label:"Prenom(s)",type:"text",placeholder:"Prenom(s)"},model:{value:e.acteDeces.prenom,callback:function(t){e.$set(e.acteDeces,"prenom",t)},expression:"acteDeces.prenom"}}),t("CInput",{attrs:{label:"Date déclaration",type:"date",placeholder:"Date déclaration","invalid-feedback":"Veuillez saisir une année valide","is-valid":e.anneeEnCourValidator},model:{value:e.acteDeces.date_declaration,callback:function(t){e.$set(e.acteDeces,"date_declaration",t)},expression:"acteDeces.date_declaration"}}),t("CInput",{attrs:{label:"Date naissance (Si jour inconnu choisir le 01 du mois,Si mois inconnu choisir Janvier)",type:"date",placeholder:"Date naissance","invalid-feedback":"Veuillez saisir une année valide","is-valid":e.ageCalculeAndValidator},model:{value:e.acteDeces.date_naissance,callback:function(t){e.$set(e.acteDeces,"date_naissance",t)},expression:"acteDeces.date_naissance"}}),t("CInput",{attrs:{label:"Date deces (Si jour inconnu choisir le 01 du mois,Si mois inconnu choisir Janvier)",type:"date",placeholder:"Date deces","invalid-feedback":"Veuillez saisir une année valide","is-valid":e.ageCalculeAndValidator},model:{value:e.acteDeces.date_deces,callback:function(t){e.$set(e.acteDeces,"date_deces",t)},expression:"acteDeces.date_deces"}}),[t("div",{staticClass:"form-group form-row"},[t("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v(" Age : "),t("label",{attrs:{for:"celibataire"}},[e._v(" "+e._s(e.acteDeces.age)+" ")])])],1)],t("CInput",{attrs:{label:"Date Etablissement",type:"date",placeholder:"Date Etablissement","invalid-feedback":"Veuillez saisir une année valide","is-valid":e.anneeEnCourValidator},model:{value:e.acteDeces.date_etablissement,callback:function(t){e.$set(e.acteDeces,"date_etablissement",t)},expression:"acteDeces.date_etablissement"}}),t("CSelect",{attrs:{label:"Profession",value:e.acteDeces.profession_id,plain:!0,options:e.professions},on:{"update:value":function(t){return e.$set(e.acteDeces,"profession_id",t)}},model:{value:e.acteDeces.profession_id,callback:function(t){e.$set(e.acteDeces,"profession_id",t)},expression:"acteDeces.profession_id"}}),[t("div",{staticClass:"form-group form-row"},[t("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v(" Situation Matrimonial ")]),t("CCol",{class:"form-inline",attrs:{sm:"9"}},[t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.acteDeces.statut_matrimonial,expression:"acteDeces.statut_matrimonial"}],staticClass:"custom-control-input",attrs:{id:"celibataire",type:"radio",value:"CELIBATAIRE"},domProps:{checked:e._q(e.acteDeces.statut_matrimonial,"CELIBATAIRE")},on:{change:function(t){return e.$set(e.acteDeces,"statut_matrimonial","CELIBATAIRE")}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"celibataire"}},[e._v(" Célibataire ")])]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.acteDeces.statut_matrimonial,expression:"acteDeces.statut_matrimonial"}],staticClass:"custom-control-input",attrs:{id:"marie",type:"radio",value:"MARIE"},domProps:{checked:e._q(e.acteDeces.statut_matrimonial,"MARIE")},on:{change:function(t){return e.$set(e.acteDeces,"statut_matrimonial","MARIE")}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"marie"}},[e._v(" Marié(e) ")])]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.acteDeces.statut_matrimonial,expression:"acteDeces.statut_matrimonial"}],staticClass:"custom-control-input",attrs:{id:"divorce",type:"radio",value:"DIVORCE"},domProps:{checked:e._q(e.acteDeces.statut_matrimonial,"DIVORCE")},on:{change:function(t){return e.$set(e.acteDeces,"statut_matrimonial","DIVORCE")}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"divorce"}},[e._v(" Divorcé(e) ")])]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.acteDeces.statut_matrimonial,expression:"acteDeces.statut_matrimonial"}],staticClass:"custom-control-input",attrs:{id:"veuf",type:"radio",value:"VEUF"},domProps:{checked:e._q(e.acteDeces.statut_matrimonial,"VEUF")},on:{change:function(t){return e.$set(e.acteDeces,"statut_matrimonial","VEUF")}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"veuf"}},[e._v(" Veuf(ve) ")])]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.acteDeces.statut_matrimonial,expression:"acteDeces.statut_matrimonial"}],staticClass:"custom-control-input",attrs:{id:"manquant",type:"radio",value:"MANQUANT"},domProps:{checked:e._q(e.acteDeces.statut_matrimonial,"MANQUANT")},on:{change:function(t){return e.$set(e.acteDeces,"statut_matrimonial","MANQUANT")}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"manquant"}},[e._v(" Manquant ")])])])],1)],[t("div",{staticClass:"form-group form-row"},[t("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v(" Sexe ")]),t("CCol",{class:"form-inline",attrs:{sm:"12"}},[t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.acteDeces.sexe,expression:"acteDeces.sexe"}],staticClass:"custom-control-input",attrs:{id:"homme",type:"radio",value:"M"},domProps:{checked:e._q(e.acteDeces.sexe,"M")},on:{change:function(t){return e.$set(e.acteDeces,"sexe","M")}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"homme"}},[e._v(" Homme ")])]),t("div",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.acteDeces.sexe,expression:"acteDeces.sexe"}],staticClass:"custom-control-input",attrs:{id:"femme",type:"radio",value:"F"},domProps:{checked:e._q(e.acteDeces.sexe,"F")},on:{change:function(t){return e.$set(e.acteDeces,"sexe","F")}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"femme"}},[e._v(" Femme ")])])])],1)],t("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.update()}}},[e._v("Modifier")]),e._v("   "),t("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],2)],1)],1)],1)},o=[],c=a("bc3a"),n=a.n(c),i={name:"EditUser",props:{caption:{type:String,default:"User id"}},data:function(){return{acteDeces:{region_id:null,province_id:null,commune_id:null,n_acte:"",nom:"",prenom:"",date_declaration:"",date_deces:"",date_naissance:"",statut_matrimonial:"",profession_id:"",date_etablissement:"",sexe:""},regions:[],provinces:[],communes:[],message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},selectRadioSelectRole:function(e){},update:function(){var e=this;n.a.put(this.$apiAdress+"/api/acte_deces/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),e.acteDeces).then((function(t){e.message="Successfully updated Acte Deces.",e.$toasted.show("L'acte a été mises à jour avec succès",{type:"success"}),e.goBack()})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var a in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(a)&&(e.message+=t.response.data.errors[a][0]+"  ");e.$toasted.show(e.message,{type:"error"})}else console.log(t)}))},showAlert:function(){this.dismissCountDown=this.dismissSecs},ageCalculeAndValidator:function(e){return this.acteDeces.date_deces&&this.acteDeces.date_naissance?this.acteDeces.age=new Date(this.acteDeces.date_deces).getFullYear()-new Date(this.acteDeces.date_naissance).getFullYear():this.acteDeces.age=null,e?new Date(e)<=new Date&&null:null},anneeEnCourValidator:function(e){return e?new Date(e)<=new Date&&null:null}},mounted:function(){var e=this;n.a.get(this.$apiAdress+"/api/acte_deces/"+e.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(t){e.acteDeces=t.data.acteDeces,e.regions=t.data.regions,e.provinces=t.data.provinces,e.communes=t.data.communes,e.professions=t.data.professions})).catch((function(e){console.log(e)}))}},l=i,r=a("2877"),u=Object(r["a"])(l,s,o,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d3639.140ca26f.js.map