(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9759"],{"58dd":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",lg:"6"}},[e("CCard",{attrs:{"no-header":""}},[e("CCardBody",[e("h3",[t._v(" Ajouter Formation Sanitaire ")]),e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),e("CInput",{attrs:{label:"Code",type:"text",placeholder:"Code"},model:{value:t.formationSanitaire.code,callback:function(e){t.$set(t.formationSanitaire,"code",e)},expression:"formationSanitaire.code"}}),e("CSelect",{attrs:{label:"Region",value:t.formationSanitaire.region_id,plain:!0,options:t.regions},on:{"update:value":function(e){return t.$set(t.formationSanitaire,"region_id",e)}},model:{value:t.formationSanitaire.region_id,callback:function(e){t.$set(t.formationSanitaire,"region_id",e)},expression:"formationSanitaire.region_id"}}),e("CSelect",{attrs:{label:"Province",value:t.formationSanitaire.province_id,plain:!0,options:t.provinces},on:{"update:value":function(e){return t.$set(t.formationSanitaire,"province_id",e)}},model:{value:t.formationSanitaire.province_id,callback:function(e){t.$set(t.formationSanitaire,"province_id",e)},expression:"formationSanitaire.province_id"}}),e("CSelect",{attrs:{label:"District",value:t.formationSanitaire.district_id,plain:!0,options:t.districts},on:{"update:value":function(e){return t.$set(t.formationSanitaire,"district_id",e)}},model:{value:t.formationSanitaire.district_id,callback:function(e){t.$set(t.formationSanitaire,"district_id",e)},expression:"formationSanitaire.district_id"}}),e("CInput",{attrs:{label:"Nom Structure",type:"text",placeholder:"Nom Structure"},model:{value:t.formationSanitaire.nom_structure,callback:function(e){t.$set(t.formationSanitaire,"nom_structure",e)},expression:"formationSanitaire.nom_structure"}}),e("CInput",{attrs:{label:"Longitude",type:"text",placeholder:"Longitude"},model:{value:t.formationSanitaire.lon,callback:function(e){t.$set(t.formationSanitaire,"lon",e)},expression:"formationSanitaire.lon"}}),e("CInput",{attrs:{label:"Latitude",type:"text",placeholder:"Latitude"},model:{value:t.formationSanitaire.lat,callback:function(e){t.$set(t.formationSanitaire,"lat",e)},expression:"formationSanitaire.lat"}}),e("CInput",{attrs:{label:"Type",type:"text",placeholder:"Type"},model:{value:t.formationSanitaire.type,callback:function(e){t.$set(t.formationSanitaire,"type",e)},expression:"formationSanitaire.type"}}),e("CInput",{attrs:{label:"Adresse",type:"text",placeholder:"Adresse"},model:{value:t.formationSanitaire.adresse,callback:function(e){t.$set(t.formationSanitaire,"adresse",e)},expression:"formationSanitaire.adresse"}}),e("CInput",{attrs:{label:"Adresse Postale",type:"text",placeholder:"Adresse Postale"},model:{value:t.formationSanitaire.adresse_postale,callback:function(e){t.$set(t.formationSanitaire,"adresse_postale",e)},expression:"formationSanitaire.adresse_postale"}}),e("CInput",{attrs:{label:"Tel",type:"text",placeholder:"Tel"},model:{value:t.formationSanitaire.tel,callback:function(e){t.$set(t.formationSanitaire,"tel",e)},expression:"formationSanitaire.tel"}}),e("CInput",{attrs:{label:"Fax",type:"text",placeholder:"Fax"},model:{value:t.formationSanitaire.fax,callback:function(e){t.$set(t.formationSanitaire,"fax",e)},expression:"formationSanitaire.fax"}}),e("CInput",{attrs:{label:"Email",type:"text",placeholder:"Email"},model:{value:t.formationSanitaire.email,callback:function(e){t.$set(t.formationSanitaire,"email",e)},expression:"formationSanitaire.email"}}),e("CInput",{attrs:{label:"Titre",type:"text",placeholder:"Titre"},model:{value:t.formationSanitaire.titre,callback:function(e){t.$set(t.formationSanitaire,"titre",e)},expression:"formationSanitaire.titre"}}),e("CInput",{attrs:{label:"Proprietaire",type:"text",placeholder:"Proprietaire"},model:{value:t.formationSanitaire.proprietaire,callback:function(e){t.$set(t.formationSanitaire,"proprietaire",e)},expression:"formationSanitaire.proprietaire"}}),e("CInput",{attrs:{label:"Qualification",type:"text",placeholder:"Qualification"},model:{value:t.formationSanitaire.qualificat,callback:function(e){t.$set(t.formationSanitaire,"qualificat",e)},expression:"formationSanitaire.qualificat"}}),e("CInput",{attrs:{label:"Numero Decision",type:"text",placeholder:"Numero Decision"},model:{value:t.formationSanitaire.n_decision,callback:function(e){t.$set(t.formationSanitaire,"n_decision",e)},expression:"formationSanitaire.n_decision"}}),e("CInput",{attrs:{label:"Date Autorisation",type:"date",placeholder:"Date Autorisation"},model:{value:t.formationSanitaire.date_autorisation,callback:function(e){t.$set(t.formationSanitaire,"date_autorisation",e)},expression:"formationSanitaire.date_autorisation"}}),e("CInput",{attrs:{textarea:"true",rows:9,label:"Observations Qualification",type:"text",placeholder:"Observations Qualification"},model:{value:t.formationSanitaire.observations_ualification,callback:function(e){t.$set(t.formationSanitaire,"observations_ualification",e)},expression:"formationSanitaire.observations_ualification"}}),e("CInput",{attrs:{textarea:"true",rows:9,label:"Observations Structure",type:"text",placeholder:"Observations Structure"},model:{value:t.formationSanitaire.observations_structure,callback:function(e){t.$set(t.formationSanitaire,"observations_structure",e)},expression:"formationSanitaire.observations_structure"}}),e("CInput",{attrs:{textarea:"true",rows:9,label:"Autre Observations",type:"text",placeholder:"Autre Observations"},model:{value:t.formationSanitaire.autre_observations,callback:function(e){t.$set(t.formationSanitaire,"autre_observations",e)},expression:"formationSanitaire.autre_observations"}}),e("CInput",{attrs:{label:"Date Fermeture",type:"date",placeholder:"Date Fermeture"},model:{value:t.formationSanitaire.date_fermeture,callback:function(e){t.$set(t.formationSanitaire,"date_fermeture",e)},expression:"formationSanitaire.date_fermeture"}}),e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.store()}}},[t._v("Ajouter")]),t._v("   "),e("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")])],1)],1)],1)],1)},o=[],r=a("bc3a"),n=a.n(r),s={name:"EditFormationSanitaire",props:{caption:{type:String,default:"FormationSanitaire id"}},data:function(){return{formationSanitaire:{code:"",region_id:null,province_id:null,district_id:null,nom_structure:"",lon:"",lat:"",type:"",adresse:"",adresse_postale:"",tel:"",fax:"",email:"",titre:"",proprietaire:"",qualificat:"",n_decision:"",date_autorisation:"",observations_qualification:"",observations_structure:"",autre_observations:"",date_fermeture:""},regions:[],provinces:[],districts:[],message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var t=this;console.log(t.formationSanitaire),n.a.post(this.$apiAdress+"/api/formation_sanitaires?token="+localStorage.getItem("api_token"),t.formationSanitaire).then((function(e){t.formationSanitaire={code:"",nom_formationSanitaire:"",nom_majore:"",region_id:null,province_id:null,lon:"",lat:"",superficie:""},t.message="Successfully created formationSanitaire.",t.showAlert()})).catch((function(e){if("The given data was invalid."==e.response.data.message){for(var a in t.message="",e.response.data.errors)e.response.data.errors.hasOwnProperty(a)&&(t.message+=e.response.data.errors[a][0]+"  ");t.showAlert()}else console.log(e),t.$router.push({path:"login"})}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var t=this;n.a.get(this.$apiAdress+"/api/formation_sanitaires/create?token="+localStorage.getItem("api_token")).then((function(e){t.regions=e.data.regions,t.provinces=e.data.provinces,t.districts=e.data.districts,t.formationSanitaire.region_id=t.regions.length>0?t.regions[0].value:null,t.formationSanitaire.province_id=t.provinces.length>0?t.provinces[0].value:null,t.formationSanitaire.district_id=t.districts.length>0?t.districts[0].value:null})).catch((function(e){console.log(e),t.$router.push({path:"login"})}))}},l=s,c=a("2877"),u=Object(c["a"])(l,i,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c9759.4e60bb9c.js.map