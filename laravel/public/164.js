(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{852:function(t,a,s){"use strict";s.r(a);var i=s(2),o=s.n(i),e={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{systemeInformationSanitaire:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;o.a.get(this.$apiAdress+"/api/systeme_information_sanitaires/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(a){t.systemeInformationSanitaire=a.data,console.log(a)})).catch((function(a){console.log(a),t.$router.push({path:"/login"})}))}},r=s(1),n=Object(r.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CRow",[s("CCol",{attrs:{col:"12",lg:"8"}},[s("CCard",[s("CCardHeader",[s("h4",[t._v("Détail de la Systeme Information Sanitaire id:  "+t._s(t.$route.params.id))])]),t._v(" "),s("CCardBody",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Region : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.systemeInformationSanitaire.region))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Province : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.systemeInformationSanitaire.province))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Commune : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.systemeInformationSanitaire.commune))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("District : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.systemeInformationSanitaire.district))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Formation Sanitaire : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.systemeInformationSanitaire.formationSanitaire))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Type de rapport : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.systemeInformationSanitaire.type_rapport))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Rapport attendu : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.systemeInformationSanitaire.rapport_attendu))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("rapport recu : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.systemeInformationSanitaire.rapport_recu))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("rapport reçu à temps : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.systemeInformationSanitaire.rapport_recu_temps))])])]),t._v(" "),s("CCardFooter",[s("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")]),t._v(" "),s("div",{staticClass:"row float-right"},[s("div",[t._v("Créateur : ")]),t._v(" "),s("div",[t._v(t._s(t.systemeInformationSanitaire.created_by)+" "),s("CBadge",{attrs:{color:"primary"}},[t._v(t._s(t._f("formatDate")(t.systemeInformationSanitaire.created_at)))])],1),t._v(" "),s("div",[t._v("Modificateur : ")]),t._v(" "),s("div",[t._v(t._s(t.systemeInformationSanitaire.updated_by)+" \n          "),s("CBadge",{attrs:{color:"danger"}},[t._v(t._s(t._f("formatDate")(t.systemeInformationSanitaire.updated_at)))])],1)])],1)],1)],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);