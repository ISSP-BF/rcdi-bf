(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{840:function(i,a,l){"use strict";l.r(a);var s=l(2),t=l.n(s),c={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{planificationFamiliale:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var i=this;t.a.get(this.$apiAdress+"/api/planification_familiales/"+i.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(a){i.planificationFamiliale=a.data,console.log(a)})).catch((function(a){console.log(a),i.$router.push({path:"/login"})}))}},v=l(1),o=Object(v.a)(c,(function(){var i=this,a=i.$createElement,l=i._self._c||a;return l("CRow",[l("CCol",{attrs:{col:"12",lg:"8"}},[l("CCard",[l("CCardHeader",[l("h4",[i._v("Détail de la PlanificationFamiliale id:  "+i._s(i.$route.params.id))])]),i._v(" "),l("CCardBody",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("Region : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.region))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("Province : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.province))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("Commune : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.commune))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("District : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.district))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("Formation Sanitaire : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.formationSanitaire))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("type_utilisatrices : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.type_utilisatrices))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbPillule_COC : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbPillule_COC))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbPillule_COP : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbPillule_COP))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbDMPlule_IM : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbDMPlule_IM))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbDMPA_IM : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbDMPA_IM))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbImplant_5ans : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbImplant_5ans))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbImplant_3ans : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbImplant_3ans))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbDIU : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbDIU))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbPreservatif_Masculin : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbPreservatif_Masculin))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbPreservatif_Feminin : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbPreservatif_Feminin))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbLigature : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbLigature))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbVasectomie : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbVasectomie))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbCollier_Cycle : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbCollier_Cycle))])]),i._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6"},[l("h5",[i._v("NbMethode_maman : ")])]),i._v(" "),l("div",{staticClass:"col-lg-6"},[i._v(i._s(i.planificationFamiliale.NbMethode_maman))])])]),i._v(" "),l("CCardFooter",[l("CButton",{attrs:{color:"secondary"},on:{click:i.goBack}},[i._v("Retour")]),i._v(" "),l("div",{staticClass:"row float-right"},[l("div",[i._v("Créateur : ")]),i._v(" "),l("div",[i._v(i._s(i.planificationFamiliale.created_by)+" "),l("CBadge",{attrs:{color:"primary"}},[i._v(i._s(i._f("formatDate")(i.planificationFamiliale.created_at)))])],1),i._v(" "),l("div",[i._v("Modificateur : ")]),i._v(" "),l("div",[i._v(i._s(i.planificationFamiliale.updated_by)+" \n          "),l("CBadge",{attrs:{color:"danger"}},[i._v(i._s(i._f("formatDate")(i.planificationFamiliale.updated_at)))])],1)])],1)],1)],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);