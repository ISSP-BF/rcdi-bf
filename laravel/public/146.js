(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{789:function(t,o,e){"use strict";e.r(o);var n=e(2),r=e.n(n),a={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{province:[]}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;r.a.get(this.$apiAdress+"/api/provinces/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(o){t.province=o.data})).catch((function(o){console.log(o),t.$router.push({path:"/login"})}))}},i=e(1),v=Object(i.a)(a,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("CRow",[e("CCol",{attrs:{col:"12",lg:"6"}},[e("CCard",{attrs:{"no-header":""}},[e("CCardBody",[e("h3",[t._v("Province id:  "+t._s(t.$route.params.id))]),t._v(" "),e("h4",[t._v("Author:")]),t._v(" "),e("p",[t._v(t._s(t.province.author))]),t._v(" "),e("h4",[t._v("Title:")]),t._v(" "),e("p",[t._v(t._s(t.province.title))]),t._v(" "),e("h4",[t._v("Content:")]),t._v(" "),e("p",[t._v(t._s(t.province.content))]),t._v(" "),e("h4",[t._v("Applies to date:")]),t._v(" "),e("p",[t._v(t._s(t.province.applies_to_date))]),t._v(" "),e("h4",[t._v("Status: ")]),t._v(" "),e("p",[e("CBadge",{attrs:{color:t.province.status_class}},[t._v(t._s(t.province.status))])],1),t._v(" "),e("h4",[t._v("Province type:")]),t._v(" "),e("p",[t._v(t._s(t.province.province_type))]),t._v(" "),e("CButton",{attrs:{color:"primary"},on:{click:t.goBack}},[t._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);o.default=v.exports}}]);