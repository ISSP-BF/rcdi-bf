(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0def0e"],{8891:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",[t("CCardHeader",[t("h4",[e._v("Détail de l'acte de décès id: "+e._s(e.$route.params.id))])]),t("CCardBody",[t("h4",[e._v("Numero acte: "+e._s(e.acteDeces.n_acte))]),t("h4",[e._v("Region : "+e._s(e.acteDeces.region))]),t("h4",[e._v("Province : "+e._s(e.acteDeces.province))]),t("h4",[e._v("Date declaration : "+e._s(e.acteDeces.date_declaration))]),t("h4",[e._v("Date deces: "+e._s(e.acteDeces.date_deces))]),t("h4",[e._v("Nom: "+e._s(e.acteDeces.nom))]),t("h4",[e._v("Prenom: "+e._s(e.acteDeces.prenom))]),t("h4",[e._v("Date naissance: "+e._s(e.acteDeces.date_naissance))]),t("h4",[e._v("Age: "+e._s(e.acteDeces.age))]),t("h4",[e._v("Sexe: "+e._s(e.acteDeces.date_naissance))]),t("h4",[e._v("Date etablissement: "+e._s(e.acteDeces.date_etablissement))]),t("h4",[e._v("Statut matrimonial: "+e._s(e.acteDeces.statut_matrimonial))]),t("h4",[e._v("Profession: "+e._s(e.acteDeces.profession))])]),t("CCardFooter",[t("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)},c=[],o=a("bc3a"),n=a.n(o),r={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{acteDeces:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var e=this;n.a.get(this.$apiAdress+"/api/acte_deces/"+e.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(t){e.acteDeces=t.data})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},i=r,_=a("2877"),d=Object(_["a"])(i,s,c,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0def0e.3370420b.js.map