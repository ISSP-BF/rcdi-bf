(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9537"],{5952:function(o,a,t){"use strict";t.r(a);var i=function(){var o=this,a=o._self._c;return a("CRow",[a("CCol",{attrs:{col:"12",lg:"6"}},[a("CCard",[a("CCardHeader",[a("h4",[o._v("Détail du FormationSanitaire id: "+o._s(o.$route.params.id))])]),a("CCardBody",[a("h4",[o._v("Code: "+o._s(o.formationSanitaire.code))]),a("h4",[o._v("Region : "+o._s(o.formationSanitaire.region))]),a("h4",[o._v("Province : "+o._s(o.formationSanitaire.province))]),a("h4",[o._v("Nom formationSanitaire : "+o._s(o.formationSanitaire.nom_formationSanitaire))]),a("h4",[o._v("Nom Majore: "+o._s(o.formationSanitaire.nom_majore))]),a("h4",[o._v("Lon: "+o._s(o.formationSanitaire.lon))]),a("h4",[o._v("Lat: "+o._s(o.formationSanitaire.lat))]),a("h4",[o._v("Superficie: "+o._s(o.formationSanitaire.superficie))])]),a("CCardFooter",[a("CButton",{attrs:{color:"secondary"},on:{click:o.goBack}},[o._v("Retour")])],1)],1)],1)],1)},n=[],r=t("bc3a"),e=t.n(r),s={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{formationSanitaire:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var o=this;e.a.get(this.$apiAdress+"/api/formationSanitaires/"+o.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(a){o.formationSanitaire=a.data})).catch((function(a){console.log(a),o.$router.push({path:"/login"})}))}},c=s,u=t("2877"),f=Object(u["a"])(c,i,n,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0c9537.f16d1d9e.js.map