(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{886:function(t,e,a){"use strict";a.r(e);var n=a(2),o=a.n(n),r={name:"User",data:function(){return{template:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;o.a.get(this.$apiAdress+"/api/mail/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(e){t.template=e.data.template})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},l=a(1),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CRow",[a("CCol",{attrs:{col:"12",lg:"6"}},[a("CCard",{attrs:{"no-header":""}},[a("CCardBody",[a("h3",[t._v("Show Email Template")]),t._v(" "),a("h4",[t._v("Name:")]),t._v(" "),a("p",[t._v(t._s(t.template.name))]),t._v(" "),a("h4",[t._v("Subject:")]),t._v(" "),a("p",[t._v(t._s(t.template.subject))]),t._v(" "),a("h4",[t._v("Content:")]),t._v(" "),a("p",[t._v(t._s(t.template.content))]),t._v(" "),a("CButton",{attrs:{color:"primary"},on:{click:t.goBack}},[t._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);