(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0db4e2"],{"6efc":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t._self._c;return a("CRow",[a("CCol",{attrs:{col:"12",lg:"8"}},[a("CCard",[a("CCardHeader",[a("h4",[t._v("Détail de la Service Curatif id: "+t._s(t.$route.params.id))])]),a("CCardBody",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("Region : ")])]),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.region))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("Province : ")])]),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.province))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("Commune : ")])]),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.commune))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("District : ")])]),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.district))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("Formation Sanitaire : ")])]),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.formationSanitaire))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NbNouveaux_consultant : ")])]),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.NbNouveaux_consultant))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NbEnft_PrisCharge_PCIME : ")])]),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.NbEnft_PrisCharge_PCIME))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NbMaladie_MisObservation : ")])]),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.serviceCuratif.NbMaladie_MisObservation))])])]),a("CCardFooter",[a("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")]),a("div",{staticClass:"row float-right"},[a("div",[t._v("Créateur : ")]),a("div",[t._v(t._s(t.serviceCuratif.created_by)+" "),a("CBadge",{attrs:{color:"primary"}},[t._v(t._s(t._f("formatDate")(t.serviceCuratif.created_at)))])],1),a("div",[t._v("Modificateur : ")]),a("div",[t._v(t._s(t.serviceCuratif.updated_by)+" "),a("CBadge",{attrs:{color:"danger"}},[t._v(t._s(t._f("formatDate")(t.serviceCuratif.updated_at)))])],1)])],1)],1)],1)],1)},r=[],e=s("bc3a"),c=s.n(e),o={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{serviceCuratif:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;c.a.get(this.$apiAdress+"/api/service_curatifs/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(a){t.serviceCuratif=a.data,console.log(a)})).catch((function(a){console.log(a),t.$router.push({path:"/login"})}))}},l=o,v=s("2877"),d=Object(v["a"])(l,i,r,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0db4e2.216ed451.js.map