(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{782:function(t,e,o){"use strict";o.r(e);var n=o(2),s=o.n(n),a={name:"EditUser",props:{caption:{type:String,default:"User id"}},data:function(){return{note:{title:"",content:"",applies_to_date:"",status_id:null,note_type:""},statuses:[],message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},update:function(){var t=this;s.a.post(this.$apiAdress+"/api/notes/"+t.$route.params.id+"?token="+localStorage.getItem("api_token"),{_method:"PUT",title:t.note.title,content:t.note.content,applies_to_date:t.note.applies_to_date,status_id:t.note.status_id,note_type:t.note.note_type}).then((function(e){t.message="Successfully updated note.",t.showAlert()})).catch((function(e){if("The given data was invalid."==e.response.data.message){for(var o in t.message="",e.response.data.errors)e.response.data.errors.hasOwnProperty(o)&&(t.message+=e.response.data.errors[o][0]+"  ");t.showAlert()}else console.log(e),t.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var t=this;s.a.get(this.$apiAdress+"/api/notes/"+t.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(e){t.note=e.data.note,t.statuses=e.data.statuses})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},i=o(1),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("CRow",[o("CCol",{attrs:{col:"12",lg:"6"}},[o("CCard",[o("CCardBody",[o("h3",[t._v("\n          Modifier Note id:  "+t._s(t.$route.params.id)+"\n        ")]),t._v(" "),o("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v("\n          ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n        ")]),t._v(" "),o("CInput",{attrs:{label:"Title",type:"text",placeholder:"Title"},model:{value:t.note.title,callback:function(e){t.$set(t.note,"title",e)},expression:"note.title"}}),t._v(" "),o("CInput",{attrs:{label:"Content",placeholder:"Content..",textarea:"true",rows:"9"},model:{value:t.note.content,callback:function(e){t.$set(t.note,"content",e)},expression:"note.content"}}),t._v(" "),o("CInput",{attrs:{label:"Applies to date",type:"date"},model:{value:t.note.applies_to_date,callback:function(e){t.$set(t.note,"applies_to_date",e)},expression:"note.applies_to_date"}}),t._v(" "),o("CSelect",{attrs:{value:t.note.status_id,options:t.statuses,label:"Status"},on:{"update:value":function(e){return t.$set(t.note,"status_id",e)}}}),t._v(" "),o("CInput",{attrs:{label:"Note type",type:"text"},model:{value:t.note.note_type,callback:function(e){t.$set(t.note,"note_type",e)},expression:"note.note_type"}}),t._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.update()}}},[t._v("Modifier")]),t._v("  \n        "),o("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);