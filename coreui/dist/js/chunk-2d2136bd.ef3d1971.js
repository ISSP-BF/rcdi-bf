(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2136bd"],{ad37:function(e,o,s){"use strict";s.r(o);var t=function(){var e=this,o=e._self._c;return o("CRow",[o("CCol",{attrs:{col:"12",lg:"6"}},[o("CCard",{attrs:{"no-header":""}},[o("CCardBody",[o("h3",[e._v(" Ajouter Region ")]),o("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(o){e.dismissCountDown=o}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),o("CInput",{attrs:{label:"Code",type:"text",placeholder:"Code"},model:{value:e.region.code,callback:function(o){e.$set(e.region,"code",o)},expression:"region.code"}}),o("CInput",{attrs:{label:"Region",type:"text",placeholder:"Region"},model:{value:e.region.region,callback:function(o){e.$set(e.region,"region",o)},expression:"region.region"}}),o("CButton",{attrs:{color:"primary"},on:{click:function(o){return e.store()}}},[e._v("Ajouter")]),e._v("   "),o("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)},n=[],r=s("bc3a"),i=s.n(r),a={name:"EditNote",props:{caption:{type:String,default:"Note id"}},data:function(){return{region:{code:"",region:""},message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;i.a.post(this.$apiAdress+"/api/regions?token="+localStorage.getItem("api_token"),e.region).then((function(o){e.region={code:"",region:""},e.message="Successfully created region.",e.showAlert()})).catch((function(o){if("The given data was invalid."==o.response.data.message){for(var s in e.message="",o.response.data.errors)o.response.data.errors.hasOwnProperty(s)&&(e.message+=o.response.data.errors[s][0]+"  ");e.showAlert()}else console.log(o),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){}},c=a,l=s("2877"),u=Object(l["a"])(c,t,n,!1,null,null,null);o["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2136bd.ef3d1971.js.map