(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{856:function(t,a,i){"use strict";i.r(a);var s=i(2),e=i.n(s),r={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{indicateurCarteSanitaire:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;e.a.get(this.$apiAdress+"/api/indicateur_carte_sanitaires/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(a){t.indicateurCarteSanitaire=a.data,console.log(a)})).catch((function(a){console.log(a),t.$router.push({path:"/login"})}))}},c=i(1),o=Object(c.a)(r,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("CRow",[i("CCol",{attrs:{col:"12",lg:"8"}},[i("CCard",[i("CCardHeader",[i("h4",[t._v("Détail de la Systeme Information Sanitaire id:  "+t._s(t.$route.params.id))])]),t._v(" "),i("CCardBody",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("h5",[t._v("Region : ")])]),t._v(" "),i("div",{staticClass:"col-lg-6"},[t._v(t._s(t.indicateurCarteSanitaire.region))])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("h5",[t._v("Province : ")])]),t._v(" "),i("div",{staticClass:"col-lg-6"},[t._v(t._s(t.indicateurCarteSanitaire.province))])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("h5",[t._v("Commune : ")])]),t._v(" "),i("div",{staticClass:"col-lg-6"},[t._v(t._s(t.indicateurCarteSanitaire.commune))])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("h5",[t._v("District : ")])]),t._v(" "),i("div",{staticClass:"col-lg-6"},[t._v(t._s(t.indicateurCarteSanitaire.district))])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("h5",[t._v("Formation Sanitaire : ")])]),t._v(" "),i("div",{staticClass:"col-lg-6"},[t._v(t._s(t.indicateurCarteSanitaire.formationSanitaire))])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("h5",[t._v("NbLit_SuiteCouche : ")])]),t._v(" "),i("div",{staticClass:"col-lg-6"},[t._v(t._s(t.indicateurCarteSanitaire.NbLit_SuiteCouche))])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("h5",[t._v("NbLit_HospiMaternite : ")])]),t._v(" "),i("div",{staticClass:"col-lg-6"},[t._v(t._s(t.indicateurCarteSanitaire.NbLit_HospiMaternite))])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6"},[i("h5",[t._v("NbLit_HospiAutreService : ")])]),t._v(" "),i("div",{staticClass:"col-lg-6"},[t._v(t._s(t.indicateurCarteSanitaire.NbLit_HospiAutreService))])])]),t._v(" "),i("CCardFooter",[i("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")]),t._v(" "),i("div",{staticClass:"row float-right"},[i("div",[t._v("Créateur : ")]),t._v(" "),i("div",[t._v(t._s(t.indicateurCarteSanitaire.created_by)+" "),i("CBadge",{attrs:{color:"primary"}},[t._v(t._s(t._f("formatDate")(t.indicateurCarteSanitaire.created_at)))])],1),t._v(" "),i("div",[t._v("Modificateur : ")]),t._v(" "),i("div",[t._v(t._s(t.indicateurCarteSanitaire.updated_by)+" \n          "),i("CBadge",{attrs:{color:"danger"}},[t._v(t._s(t._f("formatDate")(t.indicateurCarteSanitaire.updated_at)))])],1)])],1)],1)],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);