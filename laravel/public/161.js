(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{848:function(t,a,s){"use strict";s.r(a);var i=s(2),r=s.n(i),e={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{serviceCuratif:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;r.a.get(this.$apiAdress+"/api/service_curatifs/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(a){t.serviceCuratif=a.data,console.log(a)})).catch((function(a){console.log(a),t.$router.push({path:"/login"})}))}},v=s(1),c=Object(v.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("CRow",[s("CCol",{attrs:{col:"12",lg:"8"}},[s("CCard",[s("CCardHeader",[s("h4",[t._v("Détail de la Service Curatif id:  "+t._s(t.$route.params.id))])]),t._v(" "),s("CCardBody",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Region : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.region))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Province : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.province))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Commune : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.commune))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("District : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.district))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("Formation Sanitaire : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.formationSanitaire))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("NbNouveaux_consultant : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.NbNouveaux_consultant))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("NbEnft_PrisCharge_PCIME : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.NbEnft_PrisCharge_PCIME))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h5",[t._v("NbMaladie_MisObservation : ")])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.NbMaladie_MisObservation))])])]),t._v(" "),s("CCardFooter",[s("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")]),t._v(" "),s("div",{staticClass:"row float-right"},[s("div",[t._v("Créateur : ")]),t._v(" "),s("div",[t._v(t._s(t.serviceCuratif.created_by)+" "),s("CBadge",{attrs:{color:"primary"}},[t._v(t._s(t._f("formatDate")(t.serviceCuratif.created_at)))])],1),t._v(" "),s("div",[t._v("Modificateur : ")]),t._v(" "),s("div",[t._v(t._s(t.serviceCuratif.updated_by)+" \n          "),s("CBadge",{attrs:{color:"danger"}},[t._v(t._s(t._f("formatDate")(t.serviceCuratif.updated_at)))])],1)])],1)],1)],1)],1)}),[],!1,null,null,null);a.default=c.exports}}]);