(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e181b"],{"7b71":function(t,c,a){"use strict";a.r(c);var s=function(){var t=this,c=t._self._c;return c("CRow",[c("CCol",{attrs:{col:"12",lg:"8"}},[c("CCard",[c("CCardHeader",[c("h4",[t._v("Détail de la Accouchement id: "+t._s(t.$route.params.id))])]),c("CCardBody",[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("Region : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.region))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("Province : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.province))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("Commune : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.commune))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("District : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.district))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("Formation Sanitaire : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.formationSanitaire))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("NbAccouchement_Normaux : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbAccouchement_Normaux))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("NbAccouchement_Assiste : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbAccouchement_Assiste))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("NbAccouchement_Cesarienne : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbAccouchement_Cesarienne))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("NbAccouchement_Partogramme : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbAccouchement_Partogramme))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("NNaissance_vivante : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NNaissance_vivante))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("NbMortNe_frais : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbMortNe_frais))])]),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-6"},[c("h5",[t._v("NbMortNe_Macere : ")])]),c("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbMortNe_Macere))])])]),c("CCardFooter",[c("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")]),c("div",{staticClass:"row float-right"},[c("div",[t._v("Créateur : ")]),c("div",[t._v(t._s(t.accouchement.created_by)+" "),c("CBadge",{attrs:{color:"primary"}},[t._v(t._s(t._f("formatDate")(t.accouchement.created_at)))])],1),c("div",[t._v("Modificateur : ")]),c("div",[t._v(t._s(t.accouchement.updated_by)+" "),c("CBadge",{attrs:{color:"danger"}},[t._v(t._s(t._f("formatDate")(t.accouchement.updated_at)))])],1)])],1)],1)],1)],1)},e=[],o=a("bc3a"),i=a.n(o),l={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{accouchement:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;i.a.get(this.$apiAdress+"/api/accouchements/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(c){t.accouchement=c.data})).catch((function(c){console.log(c),t.$router.push({path:"/login"})}))}},r=l,n=a("2877"),v=Object(n["a"])(r,s,e,!1,null,null,null);c["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0e181b.ee13ad5f.js.map