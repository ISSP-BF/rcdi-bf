(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{820:function(t,a,s){"use strict";s.r(a);var o=s(1),l=s.n(o),i={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{ConsultationPostnatale:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;l.a.get(this.$apiAdress+"/api/consultation_postnatales/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(a){t.ConsultationPostnatale=a.data})).catch((function(a){console.log(a),t.$router.push({path:"/login"})}))}},n=s(0),e=Object(n.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CRow",[s("CCol",{attrs:{col:"12",lg:"8"}},[s("CCard",[s("CCardHeader",[s("h4",[t._v("Détail de la Consultation Postnatale id:  "+t._s(t.$route.params.id))])]),t._v(" "),s("CCardBody",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Region : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.consultationPostnatale.region))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Province : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.consultationPostnatale.province))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Commune : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.consultationPostnatale.commune))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("District : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.consultationPostnatale.district))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Formation Sanitaire : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.consultationPostnatale.formationSanitaire))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("NbFemmeVueConsultation_PostNatale : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.consultationPostnatale.NbFemmeVueConsultation_PostNatale))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("NbFemmeVueConsultation_PostNatalePrecoce : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.consultationPostnatale.NbFemmeVueConsultation_PostNatalePrecoce))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("NbFemmeVueConsultation_PostNataleTardive : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.consultationPostnatale.NbFemmeVueConsultation_PostNataleTardive))])])]),t._v(" "),s("CCardFooter",[s("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")]),t._v(" "),s("div",{staticClass:"row float-right"},[s("div",[t._v("Créateur : ")]),t._v(" "),s("div",[t._v(t._s(t.consultationPostnatale.created_by)+" "),s("CBadge",{attrs:{color:"primary"}},[t._v(t._s(t._f("formatDate")(t.consultationPostnatale.created_at)))])],1),t._v(" "),s("div",[t._v("Modificateur : ")]),t._v(" "),s("div",[t._v(t._s(t.consultationPostnatale.updated_by)+" \n          "),s("CBadge",{attrs:{color:"danger"}},[t._v(t._s(t._f("formatDate")(t.consultationPostnatale.updated_at)))])],1)])],1)],1)],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);