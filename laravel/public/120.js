(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{889:function(e,s,n){"use strict";n.r(s);var t=n(2),o=n.n(t),a={name:"CreateMenu",data:function(){return{name:"",message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;o.a.post(this.$apiAdress+"/api/menu/menu/store?token="+localStorage.getItem("api_token"),{name:e.name}).then((function(s){e.name="",e.message="Successfully created note.",e.showAlert()})).catch((function(s){if("The given data was invalid."==s.response.data.message){for(var n in e.message="",s.response.data.errors)s.response.data.errors.hasOwnProperty(n)&&(e.message+=s.response.data.errors[n][0]+"  ");e.showAlert()}else console.log(s),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){}},r=n(1),i=Object(r.a)(a,(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("CRow",[n("CCol",{attrs:{col:"12",lg:"6"}},[n("CCard",{attrs:{"no-header":""}},[n("CCardBody",[n("h3",[e._v("\n          Create Menu\n        ")]),e._v(" "),n("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(s){e.dismissCountDown=s}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),n("CInput",{attrs:{label:"Name",type:"text",placeholder:"Name"},model:{value:e.name,callback:function(s){e.name=s},expression:"name"}}),e._v(" "),n("CButton",{attrs:{color:"primary"},on:{click:function(s){return e.store()}}},[e._v("Create")]),e._v(" "),n("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);s.default=i.exports}}]);