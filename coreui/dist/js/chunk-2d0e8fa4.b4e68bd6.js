(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8fa4"],{"8c25":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",lg:"6"}},[e("CCard",[e("CCardHeader",[e("h4",[t._v("Détail du desagregation id: "+t._s(t.$route.params.id))])]),e("CCardBody",[e("h4",[t._v("Libelle: "+t._s(t.desagregation.libelle))]),e("h4",[t._v("Description : "+t._s(t.desagregation.description))]),e("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")])],1)],1)],1)],1)},n=[],r=a("bc3a"),i=a.n(r),s={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{desagregation:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;i.a.get(this.$apiAdress+"/api/desagregations/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(e){t.desagregation=e.data})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},c=s,d=a("2877"),u=Object(d["a"])(c,o,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e8fa4.b4e68bd6.js.map