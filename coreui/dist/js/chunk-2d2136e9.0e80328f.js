(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2136e9"],{ad3c:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",{attrs:{"no-header":""}},[t("CCardBody",[t("h4",[e._v(" Send Email ")]),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),t("CInput",{attrs:{label:"Email",type:"text",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.store()}}},[e._v("Send")]),t("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)},a=[],n=s("bc3a"),i=s.n(n),r={name:"SendEmail",data:function(){return{email:"",template:{name:"",subject:"",content:""},message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;i.a.post(this.$apiAdress+"/api/mailSend/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),{email:e.email}).then((function(t){e.email="",e.message="Successfully send Email.",e.showAlert()})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var s in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(s)&&(e.message+=t.response.data.errors[s][0]+"  ");e.showAlert()}else console.log(t),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;i.a.get(this.$apiAdress+"/api/prepareSend/"+e.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(t){e.template=t.data.template})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},l=r,c=s("2877"),u=Object(c["a"])(l,o,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2136e9.0e80328f.js.map