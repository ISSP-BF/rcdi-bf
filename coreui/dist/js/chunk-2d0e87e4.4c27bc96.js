(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e87e4"],{"8a05":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",{attrs:{"no-header":""}},[t("CCardBody",[t("CForm",[t("template",{slot:"header"},[e._v(" Edit User id: "+e._s(e.$route.params.id)+" ")]),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),t("CInput",{attrs:{type:"text",label:"Nom",placeholder:"Nom"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),t("CInput",{attrs:{type:"text",label:"Prénom(s)",placeholder:"Prénom(s)"},model:{value:e.user.firstname,callback:function(t){e.$set(e.user,"firstname",t)},expression:"user.firstname"}}),t("CInput",{attrs:{type:"text",label:"Fonction",placeholder:"Fonction"},model:{value:e.user.fonction,callback:function(t){e.$set(e.user,"fonction",t)},expression:"user.fonction"}}),t("CInput",{attrs:{type:"text",label:"Téléphone",placeholder:"Téléphone"},model:{value:e.user.tel,callback:function(t){e.$set(e.user,"tel",t)},expression:"user.tel"}}),t("CInput",{attrs:{type:"text",label:"Lieu",placeholder:"Lieu"},model:{value:e.user.lieu,callback:function(t){e.$set(e.user,"lieu",t)},expression:"user.lieu"}}),t("CInput",{attrs:{type:"text",label:"Email",placeholder:"Email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),[t("div",{staticClass:"form-group form-row"},[t("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"12"}},[e._v(" Roles ")]),t("CCol",{class:"form-inline",attrs:{sm:"9"}},e._l(e.role,(function(s){return t("CInputCheckbox",{key:s.name,attrs:{label:s.name,custom:!0,name:"selectRoles",checked:e.fixedmenuroles[s.name],inline:!0},on:{"update:checked":function(t){return e.selectRadioSelectRole(s.name)}}})})),1)],1)],t("CCol",{staticClass:"row",attrs:{sm:"5"}},[t("CSelect",{attrs:{label:"Status",options:e.options,value:e.user.status},on:{"update:value":function(t){return e.$set(e.user,"status",t)}}})],1),t("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.update()}}},[e._v("Modifier")]),e._v("  "),t("CButton",{attrs:{color:"default"},on:{click:e.goBack}},[e._v("Retour")])],2)],1)],1)],1)],1)},n=[],l=s("bc3a"),r=s.n(l),a={name:"EditUser",data:function(){return{role:[],resultroles:[],fixedmenuroles:[],user:{name:"",email:"",status:""},options:["Active","Pending","Inactive","Banned"],showMessage:!1,message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{onclick:function(){this.$toasted.show("I'm test",{type:"success"})},goBack:function(){this.$router.go(-1)},selectRadioSelectRole:function(e){var t=this.resultroles.indexOf(e);t>-1?this.resultroles.splice(t,1):this.resultroles.push(e)},update:function(){var e=this;e.user.roles=e.resultroles.toString(),console.log(e.user),r.a.put(this.$apiAdress+"/api/users/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),e.user).then((function(t){e.message="Successfully updated user.",e.showAlert(),e.$toasted.show("L'utilisateur a bien été mis à jour.",{type:"success"})})).catch((function(t){console.log(t,"dao"),e.$toasted.show("Impossible de mettre à jour les données de l'utilisateur",{type:"error"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;r.a.get(this.$apiAdress+"/api/roles?token="+localStorage.getItem("api_token")).then((function(t){e.role=t.data,r.a.get(e.$apiAdress+"/api/users/"+e.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(t){if(e.user=t.data,e.role&&e.user.roles){e.resultroles=[];for(var s=0;s<e.role.length;s++)e.user.roles.includes(e.role[s].name)&&(e.resultroles.push(e.role[s].name),e.fixedmenuroles[""+e.role[s].name]=!0)}})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))})).catch((function(e){console.log(e)}))}},u=a,i=s("2877"),c=Object(i["a"])(u,o,n,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e87e4.4c27bc96.js.map