(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{796:function(a,e,t){"use strict";t.r(e);var n=t(1),s=t.n(n),c={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{acteNaissance:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var a=this;s.a.get(this.$apiAdress+"/api/acte_naissances/"+a.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(e){a.acteNaissance=e.data})).catch((function(e){console.log(e),a.$router.push({path:"/login"})}))}},o=t(0),i=Object(o.a)(c,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",[t("CCardHeader",[t("h4",[a._v("Détail du Acte Naissance id:  "+a._s(a.$route.params.id))])]),a._v(" "),t("CCardBody",[t("h4",[a._v("Numero Acte: "+a._s(a.acteNaissance.n_acte))]),a._v(" "),t("h4",[a._v("Region : "+a._s(a.acteNaissance.region))]),a._v(" "),t("h4",[a._v("Province : "+a._s(a.acteNaissance.province))]),a._v(" "),t("h4",[a._v("Commune : "+a._s(a.acteNaissance.commune))]),a._v(" "),t("h4",[a._v("Date déclaration : "+a._s(a._f("formatDateShort")(a.acteNaissance.date_declaration)))]),a._v(" "),t("h4",[a._v("Sexe: "+a._s(a.acteNaissance.sexe))]),a._v(" "),t("h4",[a._v("Date naissance: "+a._s(a._f("formatDateShort")(a.acteNaissance.date_naissance)))]),a._v(" "),t("h4",[a._v("Lieu de naissance: "+a._s(a.acteNaissance.lieu_naissance_commune))]),a._v(" "),t("h4",[a._v("Centre sante naissance: "+a._s(a.acteNaissance.formationSanitaire))])]),a._v(" "),t("CCardFooter",[t("CButton",{attrs:{color:"secondary"},on:{click:a.goBack}},[a._v("Retour")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);