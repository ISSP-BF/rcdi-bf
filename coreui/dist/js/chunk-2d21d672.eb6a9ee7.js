(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d672"],{d0c3:function(e,o,t){"use strict";t.r(o);var s=function(){var e=this,o=e._self._c;return o("CRow",[o("CCol",{attrs:{col:"12",lg:"6"}},[o("CCard",[o("CCardBody",[o("h3",[e._v(" Edit Role id: "+e._s(e.$route.params.id)+" ")]),o("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(o){e.dismissCountDown=o}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),o("CInput",{attrs:{label:"Name",type:"text",placeholder:"Name"},model:{value:e.role.name,callback:function(o){e.$set(e.role,"name",o)},expression:"role.name"}}),o("CButton",{attrs:{color:"primary"},on:{click:function(o){return e.update()}}},[e._v("Save")]),o("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)},a=[],n=t("bc3a"),r=t.n(n),i={name:"EditRole",data:function(){return{role:{id:null,name:""},message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},update:function(){var e=this;r.a.post(this.$apiAdress+"/api/roles/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),{_method:"PUT",name:e.role.name}).then((function(o){e.message="Successfully updated role.",e.showAlert()})).catch((function(o){if("The given data was invalid."==o.response.data.message){for(var t in e.message="",o.response.data.errors)o.response.data.errors.hasOwnProperty(t)&&(e.message+=o.response.data.errors[t][0]+"  ");e.showAlert()}else console.log(o),e.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;r.a.get(this.$apiAdress+"/api/roles/"+e.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(o){e.role=o.data})).catch((function(o){console.log(o),e.$router.push({path:"/login"})}))}},l=i,u=t("2877"),c=Object(u["a"])(l,s,a,!1,null,null,null);o["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21d672.eb6a9ee7.js.map