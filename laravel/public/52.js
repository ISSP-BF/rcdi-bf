(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{828:function(t,c,a){"use strict";a.r(c);var s=a(2),e=a.n(s),o={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{accouchement:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;e.a.get(this.$apiAdress+"/api/accouchements/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(c){t.accouchement=c.data})).catch((function(c){console.log(c),t.$router.push({path:"/login"})}))}},i=a(1),v=Object(i.a)(o,(function(){var t=this,c=t.$createElement,a=t._self._c||c;return a("CRow",[a("CCol",{attrs:{col:"12",lg:"8"}},[a("CCard",[a("CCardHeader",[a("h4",[t._v("Détail de la Accouchement id:  "+t._s(t.$route.params.id))])]),t._v(" "),a("CCardBody",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("Region : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.region))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("Province : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.province))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("Commune : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.commune))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("District : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.district))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("Formation Sanitaire : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.formationSanitaire))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NbAccouchement_Normaux : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbAccouchement_Normaux))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NbAccouchement_Assiste : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbAccouchement_Assiste))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NbAccouchement_Cesarienne : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbAccouchement_Cesarienne))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NbAccouchement_Partogramme : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbAccouchement_Partogramme))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NNaissance_vivante : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NNaissance_vivante))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NbMortNe_frais : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbMortNe_frais))])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("NbMortNe_Macere : ")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[t._v(t._s(t.accouchement.NbMortNe_Macere))])])]),t._v(" "),a("CCardFooter",[a("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")]),t._v(" "),a("div",{staticClass:"row float-right"},[a("div",[t._v("Créateur : ")]),t._v(" "),a("div",[t._v(t._s(t.accouchement.created_by)+" "),a("CBadge",{attrs:{color:"primary"}},[t._v(t._s(t._f("formatDate")(t.accouchement.created_at)))])],1),t._v(" "),a("div",[t._v("Modificateur : ")]),t._v(" "),a("div",[t._v(t._s(t.accouchement.updated_by)+" \n          "),a("CBadge",{attrs:{color:"danger"}},[t._v(t._s(t._f("formatDate")(t.accouchement.updated_at)))])],1)])],1)],1)],1)],1)}),[],!1,null,null,null);c.default=v.exports}}]);