(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1511"],{"9fb0":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",lg:"6"}},[e("CCard",{attrs:{"no-header":""}},[e("CCardBody",[e("h3",[t._v(" Ajouter Note ")]),e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),e("CInput",{attrs:{label:"Title",type:"text",placeholder:"Title"},model:{value:t.note.title,callback:function(e){t.$set(t.note,"title",e)},expression:"note.title"}}),e("CInput",{attrs:{textarea:"true",label:"Content",rows:9,placeholder:"Content.."},model:{value:t.note.content,callback:function(e){t.$set(t.note,"content",e)},expression:"note.content"}}),e("CInput",{attrs:{label:"Applies to date",type:"date"},model:{value:t.note.applies_to_date,callback:function(e){t.$set(t.note,"applies_to_date",e)},expression:"note.applies_to_date"}}),e("CSelect",{attrs:{label:"Status",value:t.note.status_id,plain:!0,options:t.statuses},on:{"update:value":function(e){return t.$set(t.note,"status_id",e)}}}),e("CInput",{attrs:{label:"Note type",type:"text"},model:{value:t.note.note_type,callback:function(e){t.$set(t.note,"note_type",e)},expression:"note.note_type"}}),e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.store()}}},[t._v("Ajouter")]),t._v("   "),e("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")])],1)],1)],1)],1)},s=[],a=o("bc3a"),i=o.n(a),l={name:"EditNote",props:{caption:{type:String,default:"Note id"}},data:function(){return{note:{title:"",content:"",applies_to_date:"",status_id:null,note_type:""},statuses:[],message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var t=this;i.a.post(this.$apiAdress+"/api/notes?token="+localStorage.getItem("api_token"),t.note).then((function(e){t.note={title:"",content:"",applies_to_date:"",status_id:null,note_type:""},t.message="Successfully created note.",t.showAlert()})).catch((function(e){if("The given data was invalid."==e.response.data.message){for(var o in t.message="",e.response.data.errors)e.response.data.errors.hasOwnProperty(o)&&(t.message+=e.response.data.errors[o][0]+"  ");t.showAlert()}else console.log(e),t.$router.push({path:"login"})}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var t=this;i.a.get(this.$apiAdress+"/api/notes/create?token="+localStorage.getItem("api_token")).then((function(e){t.statuses=e.data})).catch((function(e){console.log(e),t.$router.push({path:"login"})}))}},r=l,u=o("2877"),c=Object(u["a"])(r,n,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0f1511.74c0f17d.js.map