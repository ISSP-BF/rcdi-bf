(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{887:function(e,t,s){"use strict";s.r(t);var n=s(2),o=s.n(n),a={name:"SendEmail",data:function(){return{email:"",template:{name:"",subject:"",content:""},message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;o.a.post(this.$apiAdress+"/api/mailSend/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),{email:e.email}).then((function(t){e.email="",e.message="Successfully send Email.",e.showAlert()})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var s in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(s)&&(e.message+=t.response.data.errors[s][0]+"  ");e.showAlert()}else console.log(t),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;o.a.get(this.$apiAdress+"/api/prepareSend/"+e.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(t){e.template=t.data.template})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},i=s(1),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("CRow",[s("CCol",{attrs:{col:"12",lg:"6"}},[s("CCard",{attrs:{"no-header":""}},[s("CCardBody",[s("h4",[e._v("\n          Send Email\n        ")]),e._v(" "),s("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),s("CInput",{attrs:{label:"Email",type:"text",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),s("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.store()}}},[e._v("Send")]),e._v(" "),s("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);