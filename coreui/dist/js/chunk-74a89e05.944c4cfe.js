(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74a89e05"],{"6f50f":function(e,i,l){"use strict";l.r(i);var a=function(){var e=this,i=e._self._c;return i("CRow",[i("CCol",{attrs:{col:"12",lg:"12"}},[i("CCard",[i("CCardHeader",[i("h5",[e._v(" Ajouter une morbilite paludisme ")])]),i("CCardBody",[i("h6",[e._v(" Localisation ")]),i("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(i){e.dismissCountDown=i}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),i("div",{staticClass:"row"},[i("CSelect",{staticClass:"col-lg-3",attrs:{label:"Region",value:e.morbilitePaludisme.region_id,plain:!0,options:e.regions},on:{"update:value":function(i){return e.$set(e.morbilitePaludisme,"region_id",i)}},model:{value:e.morbilitePaludisme.region_id,callback:function(i){e.$set(e.morbilitePaludisme,"region_id",i)},expression:"morbilitePaludisme.region_id"}}),i("CSelect",{staticClass:"col-lg-3",attrs:{label:"Province",value:e.morbilitePaludisme.province_id,plain:!0,options:e.provinces},on:{"update:value":function(i){return e.$set(e.morbilitePaludisme,"province_id",i)}},model:{value:e.morbilitePaludisme.province_id,callback:function(i){e.$set(e.morbilitePaludisme,"province_id",i)},expression:"morbilitePaludisme.province_id"}}),i("CSelect",{staticClass:"col-lg-3",attrs:{label:"Commune",value:e.morbilitePaludisme.commune_id,plain:!0,options:e.communes},on:{"update:value":function(i){return e.$set(e.morbilitePaludisme,"commune_id",i)}},model:{value:e.morbilitePaludisme.commune_id,callback:function(i){e.$set(e.morbilitePaludisme,"commune_id",i)},expression:"morbilitePaludisme.commune_id"}}),i("CSelect",{staticClass:"col-lg-3",attrs:{label:"District",value:e.morbilitePaludisme.district_id,plain:!0,options:e.districts},on:{"update:value":function(i){return e.$set(e.morbilitePaludisme,"district_id",i)}},model:{value:e.morbilitePaludisme.district_id,callback:function(i){e.$set(e.morbilitePaludisme,"district_id",i)},expression:"morbilitePaludisme.district_id"}}),i("CSelect",{staticClass:"col-lg-3",attrs:{label:"Formation Sanitaire",value:e.morbilitePaludisme.formation_sanitaire_id,plain:!0,options:e.formationSanitaires},on:{"update:value":function(i){return e.$set(e.morbilitePaludisme,"formation_sanitaire_id",i)}},model:{value:e.morbilitePaludisme.formation_sanitaire_id,callback:function(i){e.$set(e.morbilitePaludisme,"formation_sanitaire_id",i)},expression:"morbilitePaludisme.formation_sanitaire_id"}}),i("CInput",{staticClass:"col-lg-3",attrs:{label:"Annee",type:"number",placeholder:"Annee","invalid-feedback":"Veuillez saisir une année valide","is-valid":e.anneeValidator},model:{value:e.morbilitePaludisme.annee,callback:function(i){e.$set(e.morbilitePaludisme,"annee",i)},expression:"morbilitePaludisme.annee"}}),i("CInput",{staticClass:"col-lg-3",attrs:{label:"Mois",type:"number",placeholder:"Mois","invalid-feedback":"Veuillez saisir un mois valide","is-valid":e.moisValidator},model:{value:e.morbilitePaludisme.mois,callback:function(i){e.$set(e.morbilitePaludisme,"mois",i)},expression:"morbilitePaludisme.mois"}})],1)],1)],1)],1),i("CCol",{attrs:{col:"12",lg:"12"}},[i("CCard",[i("CCardBody",[i("h6",[e._v(" Mesures ")]),i("div",{staticClass:"row"},[i("CInput",{staticClass:"col-lg-4",attrs:{label:"NbCas_Suspect_Palu",type:"number",placeholder:"NbCas_Suspect_Palu"},model:{value:e.morbilitePaludisme.NbCas_Suspect_Palu,callback:function(i){e.$set(e.morbilitePaludisme,"NbCas_Suspect_Palu",i)},expression:"morbilitePaludisme.NbCas_Suspect_Palu"}}),i("CInput",{staticClass:"col-lg-4",attrs:{label:"NbCas_PaluSimple_Confirme",type:"number",placeholder:"NbCas_PaluSimple_Confirme"},model:{value:e.morbilitePaludisme.NbCas_PaluSimple_Confirme,callback:function(i){e.$set(e.morbilitePaludisme,"NbCas_PaluSimple_Confirme",i)},expression:"morbilitePaludisme.NbCas_PaluSimple_Confirme"}}),i("CInput",{staticClass:"col-lg-4",attrs:{label:"NbCas_PaluSimple_Presume",type:"number",placeholder:"NbCas_PaluSimple_Presume"},model:{value:e.morbilitePaludisme.NbCas_PaluSimple_Presume,callback:function(i){e.$set(e.morbilitePaludisme,"NbCas_PaluSimple_Presume",i)},expression:"morbilitePaludisme.NbCas_PaluSimple_Presume"}}),i("CInput",{staticClass:"col-lg-4",attrs:{label:"NbCas_PaluGrave_Confirme",type:"number",placeholder:"NbCas_PaluGrave_Confirme"},model:{value:e.morbilitePaludisme.NbCas_PaluGrave_Confirme,callback:function(i){e.$set(e.morbilitePaludisme,"NbCas_PaluGrave_Confirme",i)},expression:"morbilitePaludisme.NbCas_PaluGrave_Confirme"}}),i("CInput",{staticClass:"col-lg-4",attrs:{label:"NbCas_PaluGrave_Presume",type:"number",placeholder:"NbCas_PaluGrave_Presume"},model:{value:e.morbilitePaludisme.NbCas_PaluGrave_Presume,callback:function(i){e.$set(e.morbilitePaludisme,"NbCas_PaluGrave_Presume",i)},expression:"morbilitePaludisme.NbCas_PaluGrave_Presume"}}),i("CInput",{staticClass:"col-lg-4",attrs:{label:"NbCas_Deces_PaluGrave",type:"number",placeholder:"NbCas_Deces_PaluGrave"},model:{value:e.morbilitePaludisme.NbCas_Deces_PaluGrave,callback:function(i){e.$set(e.morbilitePaludisme,"NbCas_Deces_PaluGrave",i)},expression:"morbilitePaludisme.NbCas_Deces_PaluGrave"}})],1),i("CButton",{attrs:{color:"primary"},on:{click:function(i){return e.store()}}},[e._v("Ajouter")]),e._v("   "),i("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)},s=[],t=l("bc3a"),o=l.n(t),r={name:"EditMorbilitePaludisme",props:{caption:{type:String,default:"MorbilitePaludisme id"}},data:function(){return{morbilitePaludisme:{region_id:null,province_id:null,commune_id:null,district_id:null,formation_sanitaire_id:null,annee:null,mois:null,NbCas_Suspect_Palu:null,NbCas_PaluSimple_Confirme:null,NbCas_PaluSimple_Presume:null,NbCas_PaluGrave_Confirme:null,NbCas_PaluGrave_Presume:null,NbCas_Deces_PaluGrave:null},regions:[],provinces:[],communes:[],districts:[],formationSanitaires:[],message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;console.log(e.morbilitePaludisme),o.a.post(this.$apiAdress+"/api/morbilite_paludismes?token="+localStorage.getItem("api_token"),e.morbilitePaludisme).then((function(i){e.morbilitePaludisme={},e.morbilitePaludisme.region_id=e.regions.length>0?e.regions[0].value:null,e.morbilitePaludisme.province_id=e.provinces.length>0?e.provinces[0].value:null,e.morbilitePaludisme.province_id=e.provinces.length>0?e.provinces[0].value:null,e.morbilitePaludisme.commune_id=e.communes.length>0?e.communes[0].value:null,e.morbilitePaludisme.district_id=e.districts.length>0?e.districts[0].value:null,e.morbilitePaludisme.formation_sanitaire_id=e.formationSanitaires.length>0?e.formationSanitaires[0].value:null,e.$toasted.show("morbilite paludisme créé avec succès",{type:"success"}),e.showAlert()})).catch((function(i){if("The given data was invalid."==i.response.data.message){for(var l in e.message="",i.response.data.errors)i.response.data.errors.hasOwnProperty(l)&&(e.message+=i.response.data.errors[l][0]+"  ");e.$toasted.show(e.message,{type:"error"}),e.showAlert()}else console.log(i),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},anneeValidator:function(e){return e?e<=2022&&e>=1900:null},moisValidator:function(e){return e?e<=12&&e>=1:null}},mounted:function(){var e=this;o.a.get(this.$apiAdress+"/api/morbilite_paludismes/create?token="+localStorage.getItem("api_token")).then((function(i){e.regions=i.data.regions,e.provinces=i.data.provinces,e.communes=i.data.communes,e.districts=i.data.districts,e.formationSanitaires=i.data.formationSanitaires,e.morbilitePaludisme.region_id=e.regions.length>0?e.regions[0].value:null,e.morbilitePaludisme.province_id=e.provinces.length>0?e.provinces[0].value:null,e.morbilitePaludisme.province_id=e.provinces.length>0?e.provinces[0].value:null,e.morbilitePaludisme.commune_id=e.communes.length>0?e.communes[0].value:null,e.morbilitePaludisme.district_id=e.districts.length>0?e.districts[0].value:null,e.morbilitePaludisme.formation_sanitaire_id=e.formationSanitaires.length>0?e.formationSanitaires[0].value:null})).catch((function(i){console.log(i),e.$router.push({path:"login"})}))}},n=r,u=l("2877"),m=Object(u["a"])(n,a,s,!1,null,null,null);i["default"]=m.exports}}]);
//# sourceMappingURL=chunk-74a89e05.944c4cfe.js.map