(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{890:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),o={name:"EditMenu",data:function(){return{name:"",message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},update:function(){var e=this;a.a.post(this.$apiAdress+"/api/menu/menu/update?token="+localStorage.getItem("api_token"),{name:e.name,id:e.$route.params.id}).then((function(t){e.message="Successfully updated note.",e.showAlert()})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var n in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(n)&&(e.message+=t.response.data.errors[n][0]+"  ");e.showAlert()}else console.log(t),e.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;a.a.get(this.$apiAdress+"/api/menu/menu/edit?token="+localStorage.getItem("api_token")+"&id="+e.$route.params.id).then((function(t){e.name=t.data.menulist.name})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},r=n(1),i=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CRow",[n("CCol",{attrs:{col:"12",lg:"6"}},[n("CCard",[n("CCardBody",[n("h3",[e._v("\n          Edit Menu\n        ")]),e._v(" "),n("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),n("CInput",{attrs:{label:"Name",type:"text",placeholder:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.update()}}},[e._v("Save")]),e._v(" "),n("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);