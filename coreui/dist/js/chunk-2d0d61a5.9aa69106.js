(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d61a5"],{"70b8":function(e,s,o){"use strict";o.r(s);var t=function(){var e=this,s=e._self._c;return s("CRow",[s("CCol",{attrs:{col:"12",lg:"6"}},[s("CCard",{attrs:{"no-header":""}},[s("CCardBody",[s("h3",[e._v(" Ajouter dashboard ")]),s("CInput",{attrs:{label:"Libelle",type:"text",placeholder:"Libelle"},model:{value:e.dashboard.libelle,callback:function(s){e.$set(e.dashboard,"libelle",s)},expression:"dashboard.libelle"}}),s("CTextarea",{attrs:{label:"Description",type:"text",placeholder:"Description",rows:"9"},model:{value:e.dashboard.description,callback:function(s){e.$set(e.dashboard,"description",s)},expression:"dashboard.description"}}),s("CButton",{attrs:{color:"primary"},on:{click:function(s){return e.store()}}},[e._v("Ajouter")]),e._v("   "),s("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)},a=[],r=o("bc3a"),n=o.n(r),i={name:"EditNote",props:{caption:{type:String,default:"Note id"}},data:function(){return{dashboard:{libelle:"",description:""},message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;console.log(e.dashboard),n.a.post(this.$apiAdress+"/api/dashboards?token="+localStorage.getItem("api_token"),e.dashboard).then((function(s){e.dashboard={libelle:"",description:""},e.$toasted.show(s.data.message,{type:"success"}),e.$router.go(-1)})).catch((function(s){if("The given data was invalid."==s.response.data.message){for(var o in e.message="",s.response.data.errors)s.response.data.errors.hasOwnProperty(o)&&(e.message+=s.response.data.errors[o][0]+"  ");e.showAlert(),e.$toasted.show(e.message,{type:"danger"})}else console.log(s)}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){}},d=i,l=o("2877"),c=Object(l["a"])(d,t,a,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d61a5.9aa69106.js.map