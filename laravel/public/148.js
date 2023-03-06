(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{814:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),o={name:"EditPTME",props:{caption:{type:String,default:"PTME id"}},data:function(){return{ptme:{region_id:null,province_id:null,commune_id:null,district_id:null,formation_sanitaire_id:null,annee:null,mois:null,NbFemmeEnceinte_VIHPositif_CPN1:null,NbFemmeVueCPN_TestVIH:null,NbFemmeVueCPN_TestVIH_Positif:null},regions:[],provinces:[],communes:[],districts:[],formationSanitaires:[],message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;console.log(e.ptme),s.a.post(this.$apiAdress+"/api/ptmes?token="+localStorage.getItem("api_token"),e.ptme).then((function(t){e.ptme={},e.$toasted.show("Prévention de la transmission mere enfant créé avec succès",{type:"success"}),e.showAlert()})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var i in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(i)&&(e.message+=t.response.data.errors[i][0]+"  ");e.$toasted.show(e.message,{type:"error"}),e.showAlert()}else console.log(t),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},anneeValidator:function(e){return e?e<=2022&&e>=1900:null},moisValidator:function(e){return e?e<=12&&e>=1:null}},mounted:function(){var e=this;s.a.get(this.$apiAdress+"/api/ptmes/create?token="+localStorage.getItem("api_token")).then((function(t){e.regions=t.data.regions,e.provinces=t.data.provinces,e.communes=t.data.communes,e.districts=t.data.districts,e.formationSanitaires=t.data.formationSanitaires,e.ptme.region_id=e.regions.length>0?e.regions[0].value:null,e.ptme.province_id=e.provinces.length>0?e.provinces[0].value:null,e.ptme.province_id=e.provinces.length>0?e.provinces[0].value:null,e.ptme.commune_id=e.communes.length>0?e.communes[0].value:null,e.ptme.district_id=e.districts.length>0?e.districts[0].value:null,e.ptme.formation_sanitaire_id=e.formationSanitaires.length>0?e.formationSanitaires[0].value:null})).catch((function(t){console.log(t),e.$router.push({path:"login"})}))}},a=i(0),l=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("CRow",[i("CCol",{attrs:{col:"12",lg:"12"}},[i("CCard",[i("CCardHeader",[i("h5",[e._v("\n         Ajouter une Prévention de la transmission mere enfant\n        ")])]),e._v(" "),i("CCardBody",[i("h6",[e._v("\n          Localisation\n        ")]),e._v(" "),i("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),i("div",{staticClass:"row "},[i("CSelect",{staticClass:"col-lg-3",attrs:{label:"Region",value:e.ptme.region_id,plain:!0,options:e.regions},on:{"update:value":function(t){return e.$set(e.ptme,"region_id",t)}},model:{value:e.ptme.region_id,callback:function(t){e.$set(e.ptme,"region_id",t)},expression:"ptme.region_id"}}),e._v(" "),i("CSelect",{staticClass:"col-lg-3",attrs:{label:"Province",value:e.ptme.province_id,plain:!0,options:e.provinces},on:{"update:value":function(t){return e.$set(e.ptme,"province_id",t)}},model:{value:e.ptme.province_id,callback:function(t){e.$set(e.ptme,"province_id",t)},expression:"ptme.province_id"}}),e._v(" "),i("CSelect",{staticClass:"col-lg-3",attrs:{label:"Commune",value:e.ptme.commune_id,plain:!0,options:e.communes},on:{"update:value":function(t){return e.$set(e.ptme,"commune_id",t)}},model:{value:e.ptme.commune_id,callback:function(t){e.$set(e.ptme,"commune_id",t)},expression:"ptme.commune_id"}}),e._v(" "),i("CSelect",{staticClass:"col-lg-3",attrs:{label:"District",value:e.ptme.district_id,plain:!0,options:e.districts},on:{"update:value":function(t){return e.$set(e.ptme,"district_id",t)}},model:{value:e.ptme.district_id,callback:function(t){e.$set(e.ptme,"district_id",t)},expression:"ptme.district_id"}}),e._v(" "),i("CSelect",{staticClass:"col-lg-3",attrs:{label:"Formation Sanitaire",value:e.ptme.formation_sanitaire_id,plain:!0,options:e.formationSanitaires},on:{"update:value":function(t){return e.$set(e.ptme,"formation_sanitaire_id",t)}},model:{value:e.ptme.formation_sanitaire_id,callback:function(t){e.$set(e.ptme,"formation_sanitaire_id",t)},expression:"ptme.formation_sanitaire_id"}}),e._v(" "),i("CInput",{staticClass:"col-lg-3",attrs:{label:"Annee",type:"number",placeholder:"Annee","invalid-feedback":"Veuillez saisir une année valide","is-valid":e.anneeValidator},model:{value:e.ptme.annee,callback:function(t){e.$set(e.ptme,"annee",t)},expression:"ptme.annee"}}),e._v(" "),i("CInput",{staticClass:"col-lg-3",attrs:{label:"Mois",type:"number",placeholder:"Mois","invalid-feedback":"Veuillez saisir un mois valide","is-valid":e.moisValidator},model:{value:e.ptme.mois,callback:function(t){e.$set(e.ptme,"mois",t)},expression:"ptme.mois"}})],1)],1)],1)],1),e._v(" "),i("CCol",{attrs:{col:"12",lg:"12"}},[i("CCard",[i("CCardBody",[i("h6",[e._v("\n          Mesures\n      ")]),e._v(" "),i("div",{staticClass:"row"},[i("CInput",{staticClass:"col-lg-4",attrs:{label:"Nombre de femmes enceintes déjà connues séropositives vues en CPN1",type:"number",placeholder:"NbFemmeEnceinte_VIHPositif_CPN1"},model:{value:e.ptme.NbFemmeEnceinte_VIHPositif_CPN1,callback:function(t){e.$set(e.ptme,"NbFemmeEnceinte_VIHPositif_CPN1",t)},expression:"ptme.NbFemmeEnceinte_VIHPositif_CPN1"}}),e._v(" "),i("CInput",{staticClass:"col-lg-4",attrs:{label:"Nombre de femmes vues en CPN au cours du mois et ayant bénéficié d’un test VIH",type:"number",placeholder:"NbFemmeVueCPN_TestVIH"},model:{value:e.ptme.NbFemmeVueCPN_TestVIH,callback:function(t){e.$set(e.ptme,"NbFemmeVueCPN_TestVIH",t)},expression:"ptme.NbFemmeVueCPN_TestVIH"}}),e._v(" "),i("CInput",{staticClass:"col-lg-4",attrs:{label:"Nombre de femmes vues en CPN au cours du mois testées VIH+",type:"number",placeholder:"NbFemmeVueCPN_TestVIH_Positif"},model:{value:e.ptme.NbFemmeVueCPN_TestVIH_Positif,callback:function(t){e.$set(e.ptme,"NbFemmeVueCPN_TestVIH_Positif",t)},expression:"ptme.NbFemmeVueCPN_TestVIH_Positif"}})],1),e._v(" "),i("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.store()}}},[e._v("Ajouter")]),e._v("  \n        "),i("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);