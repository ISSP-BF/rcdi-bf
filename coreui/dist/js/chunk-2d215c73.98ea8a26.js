(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215c73"],{c03c:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t._self._c;return o("CRow",[o("CCol",{attrs:{col:"12",lg:"6"}},[o("CCard",{attrs:{"no-header":""}},[o("CCardBody",[o("h3",[t._v("Note id: "+t._s(t.$route.params.id))]),o("h4",[t._v("Author:")]),o("p",[t._v(t._s(t.note.author))]),o("h4",[t._v("Title:")]),o("p",[t._v(t._s(t.note.title))]),o("h4",[t._v("Content:")]),o("p",[t._v(t._s(t.note.content))]),o("h4",[t._v("Applies to date:")]),o("p",[t._v(t._s(t.note.applies_to_date))]),o("h4",[t._v("Status: ")]),o("p",[o("CBadge",{attrs:{color:t.note.status_class}},[t._v(t._s(t.note.status))])],1),o("h4",[t._v("Note type:")]),o("p",[t._v(t._s(t.note.note_type))]),o("CButton",{attrs:{color:"primary"},on:{click:t.goBack}},[t._v("Back")])],1)],1)],1)],1)},a=[],s=e("bc3a"),r=e.n(s),c={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{note:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;r.a.get(this.$apiAdress+"/api/notes/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(o){t.note=o.data})).catch((function(o){console.log(o),t.$router.push({path:"/login"})}))}},i=c,p=e("2877"),u=Object(p["a"])(i,n,a,!1,null,null,null);o["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d215c73.98ea8a26.js.map