(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{891:function(e,t,n){"use strict";n.r(t);var s=n(2),o=n.n(s),i={name:"DeleteMenu",data:function(){return{message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},deleteMenu:function(){var e=this;o.a.get(this.$apiAdress+"/api/menu/menu/delete?token="+localStorage.getItem("api_token")+"&id="+e.$route.params.id,{}).then((function(t){1==t.data.success?e.$router.go(-1):(e.message="Can't delete. This menu have assigned menu elements",e.showAlert())})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){}},u=n(1),a=Object(u.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CRow",[n("CCol",{attrs:{col:"6",lg:"6"}},[n("CCard",[n("CCardBody",[n("h4",[e._v("Delete Menu")]),e._v(" "),n("p",[e._v("Are you sure?")]),e._v(" "),n("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),n("CButton",{attrs:{color:"danger"},on:{click:function(t){return e.deleteMenu()}}},[e._v("Delete")]),e._v(" "),n("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);