(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{786:function(e,s,o){"use strict";o.r(s);var t=o(1),n=o.n(t),r={name:"EditMetier",props:{caption:{type:String,default:"Metier id"}},data:function(){return{profession:{metier:""},statuses:[],message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},update:function(){var e=this;n.a.post(this.$apiAdress+"/api/professions/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),{_method:"PUT",metier:e.profession.metier}).then((function(s){e.message="Successfully updated profession.",e.showAlert()})).catch((function(s){if("The given data was invalid."==s.response.data.message){for(var o in e.message="",s.response.data.errors)s.response.data.errors.hasOwnProperty(o)&&(e.message+=s.response.data.errors[o][0]+"  ");e.showAlert()}else console.log(s),e.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;n.a.get(this.$apiAdress+"/api/professions/"+e.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(s){e.profession=s.data.profession})).catch((function(e){console.log(e)}))}},i=o(0),a=Object(i.a)(r,(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("CRow",[o("CCol",{attrs:{col:"12",lg:"6"}},[o("CCard",[o("CCardBody",[o("h3",[e._v("\n          Modifier Profession\n        ")]),e._v(" "),o("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(s){e.dismissCountDown=s}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),o("CInput",{attrs:{label:"Métier",type:"text",placeholder:"Métier"},model:{value:e.profession.metier,callback:function(s){e.$set(e.profession,"metier",s)},expression:"profession.metier"}}),e._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:function(s){return e.update()}}},[e._v("Modifier")]),e._v("  \n        "),o("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)}),[],!1,null,null,null);s.default=a.exports}}]);