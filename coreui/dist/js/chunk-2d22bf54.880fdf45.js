(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bf54"],{f0d8:function(e,o,t){"use strict";t.r(o);var s=function(){var e=this,o=e._self._c;return o("CRow",[o("CCol",{attrs:{col:"12",lg:"12"}},[o("CCard",{attrs:{"no-header":""}},[o("CCardBody",[o("h3",[e._v(" Ajouter Foire Question ")]),o("CInput",{attrs:{label:"Question",type:"text",placeholder:"Question"},model:{value:e.foireQuestion.question,callback:function(o){e.$set(e.foireQuestion,"question",o)},expression:"foireQuestion.question"}}),o("quill-editor",{attrs:{content:e.foireQuestion.reponse},model:{value:e.foireQuestion.reponse,callback:function(o){e.$set(e.foireQuestion,"reponse",o)},expression:"foireQuestion.reponse"}}),o("br"),o("CButton",{attrs:{color:"primary"},on:{click:function(o){return e.store()}}},[e._v("Ajouter")]),e._v("   "),o("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)},n=[],r=t("a026"),i=t("bc3a"),a=t.n(i),u=t("953d"),c=t.n(u);t("a753"),t("8096"),t("14e1");r["default"].use(c.a);var l={name:"EditNote",props:{caption:{type:String,default:"Note id"}},data:function(){return{foireQuestion:{question:"",reponse:""},message:""}},methods:{goBack:function(){this.$router.push({path:"/foire-questions"})},store:function(){var e=this;a.a.post(this.$apiAdress+"/api/foire-questions?token="+localStorage.getItem("api_token"),e.foireQuestion).then((function(o){e.foireQuestion={},e.$toasted.show("Foire question a été créé avec succès",{type:"success"}),e.goBack()})).catch((function(o){if("The given data was invalid."==o.response.data.message){for(var t in e.message="",o.response.data.errors)o.response.data.errors.hasOwnProperty(t)&&(e.message+=o.response.data.errors[t][0]+"  ");e.$toasted.show(e.message,{type:"error"})}else console.log(o)}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){}},d=l,p=t("2877"),f=Object(p["a"])(d,s,n,!1,null,null,null);o["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d22bf54.880fdf45.js.map