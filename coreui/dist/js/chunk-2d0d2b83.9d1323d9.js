(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d2b83"],{"5a67":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",lg:"6"}},[e("CCard",[e("CCardBody",[e("h3",[t._v(" Modifier Note id: "+t._s(t.$route.params.id)+" ")]),e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),e("CInput",{attrs:{label:"Title",type:"text",placeholder:"Title"},model:{value:t.note.title,callback:function(e){t.$set(t.note,"title",e)},expression:"note.title"}}),e("CInput",{attrs:{label:"Content",placeholder:"Content..",textarea:"true",rows:"9"},model:{value:t.note.content,callback:function(e){t.$set(t.note,"content",e)},expression:"note.content"}}),e("CInput",{attrs:{label:"Applies to date",type:"date"},model:{value:t.note.applies_to_date,callback:function(e){t.$set(t.note,"applies_to_date",e)},expression:"note.applies_to_date"}}),e("CSelect",{attrs:{value:t.note.status_id,options:t.statuses,label:"Status"},on:{"update:value":function(e){return t.$set(t.note,"status_id",e)}}}),e("CInput",{attrs:{label:"Note type",type:"text"},model:{value:t.note.note_type,callback:function(e){t.$set(t.note,"note_type",e)},expression:"note.note_type"}}),e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.update()}}},[t._v("Modifier")]),t._v("   "),e("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")])],1)],1)],1)],1)},n=[],a=o("bc3a"),i=o.n(a),r={name:"EditUser",props:{caption:{type:String,default:"User id"}},data:function(){return{note:{title:"",content:"",applies_to_date:"",status_id:null,note_type:""},statuses:[],message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},update:function(){var t=this;i.a.post(this.$apiAdress+"/api/notes/"+t.$route.params.id+"?token="+localStorage.getItem("api_token"),{_method:"PUT",title:t.note.title,content:t.note.content,applies_to_date:t.note.applies_to_date,status_id:t.note.status_id,note_type:t.note.note_type}).then((function(e){t.message="Successfully updated note.",t.showAlert()})).catch((function(e){if("The given data was invalid."==e.response.data.message){for(var o in t.message="",e.response.data.errors)e.response.data.errors.hasOwnProperty(o)&&(t.message+=e.response.data.errors[o][0]+"  ");t.showAlert()}else console.log(e),t.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var t=this;i.a.get(this.$apiAdress+"/api/notes/"+t.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(e){t.note=e.data.note,t.statuses=e.data.statuses})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},l=r,u=o("2877"),p=Object(u["a"])(l,s,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d2b83.9d1323d9.js.map