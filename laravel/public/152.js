(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{774:function(e,o,t){"use strict";t.r(o);var n=t(1),s=t.n(n),r={name:"EditUser",props:{caption:{type:String,default:"User id"}},data:function(){return{region:{code:"",region:""},statuses:[],message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},update:function(){var e=this;s.a.post(this.$apiAdress+"/api/regions/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),{_method:"PUT",code:e.region.code,region:e.region.region}).then((function(o){e.message="Successfully updated region.",e.showAlert()})).catch((function(o){if("The given data was invalid."==o.response.data.message){for(var t in e.message="",o.response.data.errors)o.response.data.errors.hasOwnProperty(t)&&(e.message+=o.response.data.errors[t][0]+"  ");e.showAlert()}else console.log(o),e.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;s.a.get(this.$apiAdress+"/api/regions/"+e.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(o){e.region=o.data.region})).catch((function(e){console.log(e)}))}},i=t(0),a=Object(i.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",[t("CCardBody",[t("h3",[e._v("\n          Modifier Region\n        ")]),e._v(" "),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(o){e.dismissCountDown=o}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),t("CInput",{attrs:{label:"Code",type:"text",placeholder:"Code"},model:{value:e.region.code,callback:function(o){e.$set(e.region,"code",o)},expression:"region.code"}}),e._v(" "),t("CInput",{attrs:{label:"Region",type:"text",placeholder:"Region"},model:{value:e.region.region,callback:function(o){e.$set(e.region,"region",o)},expression:"region.region"}}),e._v(" "),t("CButton",{attrs:{color:"primary"},on:{click:function(o){return e.update()}}},[e._v("Modifier")]),e._v("  \n        "),t("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)}),[],!1,null,null,null);o.default=a.exports}}]);