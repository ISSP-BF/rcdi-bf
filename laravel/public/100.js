(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{874:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o={name:"EditEmailTemplate",data:function(){return{template:{name:"",subject:"",content:""},message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},update:function(){var e=this;s.a.post(this.$apiAdress+"/api/mail/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),{_method:"PUT",name:e.template.name,subject:e.template.subject,content:e.template.content}).then((function(t){e.message="Successfully updated note.",e.showAlert()})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var a in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(a)&&(e.message+=t.response.data.errors[a][0]+"  ");e.showAlert()}else console.log(t),e.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;s.a.get(this.$apiAdress+"/api/mail/"+e.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(t){e.template=t.data.template})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},l=a(0),r=Object(l.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CRow",[a("CCol",{attrs:{col:"12",lg:"6"}},[a("CCard",[a("CCardBody",[a("h3",[e._v("\n          Edit Email Template\n        ")]),e._v(" "),a("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),a("CInput",{attrs:{label:"Name",type:"text",placeholder:"Name"},model:{value:e.template.name,callback:function(t){e.$set(e.template,"name",t)},expression:"template.name"}}),e._v(" "),a("CInput",{attrs:{label:"Subject",type:"text",placeholder:"Subject"},model:{value:e.template.subject,callback:function(t){e.$set(e.template,"subject",t)},expression:"template.subject"}}),e._v(" "),a("CTextarea",{attrs:{textarea:"true",label:"Content",rows:15,placeholder:"Content.."},model:{value:e.template.content,callback:function(t){e.$set(e.template,"content",t)},expression:"template.content"}}),e._v(" "),a("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.update()}}},[e._v("Save")]),e._v(" "),a("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);