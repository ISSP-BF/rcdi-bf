(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f388c0e"],{"1dca":function(i,t,n){"use strict";n("3223")},3223:function(i,t,n){},fe88:function(i,t,n){"use strict";n.r(t);var a=function(){var i=this,t=i._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",xl:"12"}},[t("transition",{attrs:{name:"slide"}},[t("CCard",[t("CCardHeader",[i._v(" Planification Familiale "),t("div",{staticClass:"card-header-actions"},[t("AddButton",{on:{ajouter:function(t){return i.createPlanificationFamiliale()}}}),i._v("  "),t("ImportButton",{attrs:{title:"Importation données Planification Familiale",fields:i.fieldsI,apiUrl:"planification_familiales"}}),i._v("  "),t("ExportButton",{attrs:{items:i.items,title:"PlanificationFamiliale",fields:i.fields}}),i._v("  ")],1)]),t("CCardBody",[t("CAlert",{attrs:{show:i.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){i.dismissCountDown=t}}},[i._v(" ("+i._s(i.dismissCountDown)+") "+i._s(i.message)+" ")]),t("CDataTable",{attrs:{hover:"",tableFilter:"",itemsPerPageSelect:"",sorter:"",items:i.items,fields:i.fields,"items-per-page":10,pagination:""},scopedSlots:i._u([{key:"formation_sanitaire",fn:function(n){var a=n.item;return[t("td",[t("label",{staticClass:"width-max-content"},[t("strong",[i._v(i._s(a.formation_sanitaire))])])])]}},{key:"region",fn:function(n){var a=n.item;return[t("td",[t("label",{staticClass:"width-max-content"},[i._v(i._s(a.region))])])]}},{key:"province",fn:function(n){var a=n.item;return[t("td",[t("label",{staticClass:"width-max-content"},[i._v(i._s(a.province))])])]}},{key:"commune",fn:function(n){var a=n.item;return[t("td",[t("label",{staticClass:"width-max-content"},[i._v(i._s(a.commune))])])]}},{key:"district",fn:function(n){var a=n.item;return[t("td",[t("label",{staticClass:"width-max-content"},[i._v(i._s(a.district))])])]}},{key:"actions",fn:function(n){var a=n.item;return[t("td",[t("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[t("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(t){return i.showPlanificationFamiliale(a.id)}}},[i._v("Détail")]),i._v("   "),t("EditButton",{on:{modifier:function(t){return i.editPlanificationFamiliale(a.id)}}}),i._v("   "),t("DeleteButton",{on:{supprimer:function(t){return i.deletePlanificationFamiliale(a.id)}}})],1)])]}}])})],1)],1)],1)],1)],1)},e=[],o=n("bc3a"),s=n.n(o),l=n("b2d0"),r=n("469e"),c=n("7714"),u=n("d84b"),m=n("3fef"),f={name:"PlanificationFamiliale",components:{ExportButton:l["a"],AddButton:r["a"],EditButton:c["a"],DeleteButton:u["a"],ImportButton:m["a"]},data:function(){return{items:[],fields:["id","region","province","commune","district","formation_sanitaire","mois","annee","type_utilisatrices","NbPillule_COC","NbPillule_COP","NbDMPlule_IM","NbDMPA_IM","NbImplant_5ans","NbImplant_3ans","NbDIU","NbPreservatif_Masculin","NbPreservatif_Feminin","NbLigature","NbVasectomie","NbCollier_Cycle","NbMethode_maman","actions"],fieldsI:["region","province","commune","district","formation_sanitaire","mois","annee","type_utilisatrices","NbPillule_COC","NbPillule_COP","NbDMPlule_IM","NbDMPA_IM","NbImplant_5ans","NbImplant_3ans","NbDIU","NbPreservatif_Masculin","NbPreservatif_Feminin","NbLigature","NbVasectomie","NbCollier_Cycle","NbMethode_maman"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(i){return i.length},PlanificationFamilialeLink:function(i){return"planification_familiales/".concat(i.toString())},editLink:function(i){return"planification_familiales/".concat(i.toString(),"/edit")},showPlanificationFamiliale:function(i){var t=this.PlanificationFamilialeLink(i);this.$router.push({path:t})},editPlanificationFamiliale:function(i){var t=this.editLink(i);this.$router.push({path:t})},deletePlanificationFamiliale:function(i){var t=this;s.a.post(this.$apiAdress+"/api/planification_familiales/"+i+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(i){t.message="Successfully deleted Planification Familiale.",t.showAlert(),t.getPlanificationFamiliale()})).catch((function(i){console.log(i),t.$router.push({path:"/login"})}))},createPlanificationFamiliale:function(){this.$router.push({path:"planification_familiales/create"})},countDownChanged:function(i){this.dismissCountDown=i},showAlert:function(){this.dismissCountDown=this.dismissSecs},getPlanificationFamiliale:function(){var i=this;s.a.get(this.$apiAdress+"/api/planification_familiales?token="+localStorage.getItem("api_token")).then((function(t){i.items=t.data,console.log(t)})).catch((function(t){console.log(t),i.$router.push({path:"/login"})}))}},mounted:function(){this.getPlanificationFamiliale()}},d=f,_=(n("1dca"),n("2877")),p=Object(_["a"])(d,a,e,!1,null,"1b0d0092",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-4f388c0e.92f6d211.js.map