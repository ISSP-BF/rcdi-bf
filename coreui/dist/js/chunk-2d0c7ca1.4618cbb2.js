(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7ca1"],{"51b1":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",{attrs:{"no-header":""}},[t("CCardBody",[t("h3",[e._v(" Create Role ")]),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),t("CInput",{attrs:{label:"Name",type:"text",placeholder:"Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}}),t("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.store()}}},[e._v("Create")]),t("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)},n=[],a=s("bc3a"),r=s.n(a),i={name:"CreateRole",data:function(){return{role:{name:""},message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;r.a.post(this.$apiAdress+"/api/roles?token="+localStorage.getItem("api_token"),{name:e.role.name}).then((function(t){e.note={title:"",content:"",applies_to_date:"",status_id:null,note_type:""},e.message="Successfully created role.",e.showAlert()})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var s in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(s)&&(e.message+=t.response.data.errors[s][0]+"  ");e.showAlert()}else console.log(t),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;r.a.get(this.$apiAdress+"/api/roles/create?token="+localStorage.getItem("api_token")).then((function(t){e.statuses=t.data})).catch((function(t){console.log(t),e.$router.push({path:"login"})}))}},l=i,c=s("2877"),u=Object(c["a"])(l,o,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c7ca1.4618cbb2.js.map