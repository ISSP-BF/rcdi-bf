(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de901"],{"85d2":function(o,t,e){"use strict";e.r(t);var r=function(){var o=this,t=o._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",[t("CCardHeader",[t("h4",[o._v("Détail du groupe id: "+o._s(o.$route.params.id))])]),t("CCardBody",[t("h4",[o._v("Libelle: "+o._s(o.groupe.libelle))]),t("h4",[o._v("Localisation: "+o._s(o.groupe.localisation))]),t("h4",[o._v("Description : "+o._s(o.groupe.description))]),t("CButton",{attrs:{color:"secondary"},on:{click:o.goBack}},[o._v("Retour")])],1)],1)],1)],1)},a=[],n=e("bc3a"),i=e.n(n),s={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{groupe:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var o=this;i.a.get(this.$apiAdress+"/api/groupes/"+o.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(t){o.groupe=t.data})).catch((function(t){console.log(t),o.$router.push({path:"/login"})}))}},u=s,c=e("2877"),l=Object(c["a"])(u,r,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0de901.e1ba709b.js.map