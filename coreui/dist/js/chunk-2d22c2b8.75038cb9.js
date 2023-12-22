(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c2b8"],{f1a8:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"6",lg:"6"}},[t("CCard",[t("CCardBody",[t("h3",[e._v(" Edit Bread ")]),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),t("CInput",{attrs:{label:"Form name",type:"text",placeholder:"Form name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),t("CInput",{attrs:{label:"Records on one page of table",type:"number",placeholder:"Records on one page of table",required:""},model:{value:e.form.pagination,callback:function(t){e.$set(e.form,"pagination",t)},expression:"form.pagination"}}),t("CInputCheckbox",{attrs:{label:"Enable Show button in table",value:"true",checked:!0},model:{value:e.form.read,callback:function(t){e.$set(e.form,"read",t)},expression:"form.read"}}),t("CInputCheckbox",{attrs:{label:"Enable Edit button in table",value:"true",checked:!0},model:{value:e.form.edit,callback:function(t){e.$set(e.form,"edit",t)},expression:"form.edit"}}),t("CInputCheckbox",{attrs:{label:"Enable Add button in table",value:"true",checked:!0},model:{value:e.form.add,callback:function(t){e.$set(e.form,"add",t)},expression:"form.add"}}),t("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Enable Delete button in table",value:"true",checked:!0},model:{value:e.form.delete,callback:function(t){e.$set(e.form,"delete",t)},expression:"form.delete"}})],1)],1)],1),t("CCol",{attrs:{col:"6",lg:"6"}},[t("CCard",[t("CCardBody",[t("h4",[e._v("Assign to roles:")]),e._l(e.roles,(function(a){return t("CInputCheckbox",{key:a,attrs:{label:a,value:"true",checked:e.rolesArray[a]},on:{"update:checked":function(t){return e.checkRoleCheckbox(a)}}})}))],2)],1)],1),t("CCol",{attrs:{col:"6",lg:"6"}},[t("CCard",[t("CCardBody",[e._l(e.formFields,(function(a){return t("EditBreadFieldCard",{key:a.id,attrs:{getData:e.getData,options:e.options,data:a},on:{sendData:e.receiveDataFormField}})})),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),t("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.updateFirstStep()}}},[e._v("Save")]),t("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],2)],1)],1)],1)},r=[],s=function(){var e=this,t=e._self._c;return"id"!=e.data.column_name?t("CCard",[t("CCardHeader",[t("h5",[e._v(e._s(e.data.column_name))])]),t("CCardBody",[t("CInput",{attrs:{label:"Visible name",type:"text",placeholder:"Visible name",required:""},model:{value:e.data.name,callback:function(t){e.$set(e.data,"name",t)},expression:"data.name"}}),t("CSelect",{attrs:{label:"Field type",options:e.options,value:e.data.type},on:{"update:value":function(t){return e.$set(e.data,"type",t)}}}),t("CInput",{attrs:{label:"Optional relation table name",type:"text",placeholder:"Optional relation table name"},model:{value:e.data.relation_table,callback:function(t){e.$set(e.data,"relation_table",t)},expression:"data.relation_table"}}),t("CInput",{attrs:{label:"Optional column name in relation table - to print",type:"text",placeholder:"Optional column name in relation table - to print"},model:{value:e.data.relation_column,callback:function(t){e.$set(e.data,"relation_column",t)},expression:"data.relation_column"}}),t("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Browse",value:"true",checked:1==e.data.browse},on:{"update:checked":function(t){return e.selectCheckbox("browse")}}}),t("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Read",value:"true",checked:1==e.data.read},on:{"update:checked":function(t){return e.selectCheckbox("read")}}}),t("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Edit",value:"true",checked:1==e.data.edit},on:{"update:checked":function(t){return e.selectCheckbox("edit")}}}),t("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Add",value:"true",checked:1==e.data.add},on:{"update:checked":function(t){return e.selectCheckbox("add")}}})],1)],1):e._e()},i=[],n={name:"CreateBreadFieldCard",props:{data:Object,getData:Boolean,options:Array},data:function(){return{type:"text",relationTable:"",relationColumn:""}},computed:{},methods:{selectCheckbox:function(e){switch(e){case"browse":1==this.data.browse?this.data.browse=!1:this.data.browse=!0;break;case"read":1==this.data.read?this.data.read=!1:this.data.read=!0;break;case"edit":1==this.data.edit?this.data.edit=!1:this.data.edit=!0;break;case"add":1==this.data.add?this.data.add=!1:this.data.add=!0;break}},getDataFunction:function(){this.$emit("sendData",this.data)}},watch:{getData:function(){!0===this.getData&&this.getDataFunction()}}},l=n,d=a("2877"),c=Object(d["a"])(l,s,i,!1,null,null,null),u=c.exports,m=a("bc3a"),p=a.n(m),h={name:"EditBread",components:{EditBreadFieldCard:u},data:function(){return{form:[],formFields:[],options:[],roles:[],formRoles:[],getData:!1,receiveFormFields:[],rolesArray:[],message:"",dismissSecs:7,dismissCountDown:0}},methods:{goBack:function(){this.$router.go(-1)},checkRoleCheckbox:function(e){1==this.rolesArray[e]?this.rolesArray[e]=!1:this.rolesArray[e]=!0},updateFirstStep:function(){this.getData=!0},receiveDataFormField:function(e){var t=this;t.receiveFormFields.push(e),t.receiveFormFields.length==t.formFields.length&&t.update()},createPostDataForUpdate:function(){for(var e=this,t={_method:"PUT",name:e.form.name,pagination:e.form.pagination,read:e.form.read,edit:e.form.edit,add:e.form.add,delete:e.form.delete},a=0;a<e.receiveFormFields.length;a++)"id"!=e.receiveFormFields[a].column_name&&(t[e.receiveFormFields[a].id+"_name"]=e.receiveFormFields[a].name,t[e.receiveFormFields[a].id+"_field_type"]=e.receiveFormFields[a].type,t[e.receiveFormFields[a].id+"_relation_table"]=e.receiveFormFields[a].relation_table,t[e.receiveFormFields[a].id+"_relation_column"]=e.receiveFormFields[a].relation_column,1==e.receiveFormFields[a].browse&&(t[e.receiveFormFields[a].id+"_browse"]=e.receiveFormFields[a].browse),1==e.receiveFormFields[a].read&&(t[e.receiveFormFields[a].id+"_read"]=e.receiveFormFields[a].read),1==e.receiveFormFields[a].edit&&(t[e.receiveFormFields[a].id+"_edit"]=e.receiveFormFields[a].edit),1==e.receiveFormFields[a].add&&(t[e.receiveFormFields[a].id+"_add"]=e.receiveFormFields[a].add));for(var o=0;o<e.roles.length;o++)1==e.rolesArray[e.roles[o]]&&(t["_role_"+e.roles[o]]="true");return t},update:function(){var e=this,t=this.createPostDataForUpdate();p.a.post(this.$apiAdress+"/api/bread/"+e.$route.params.id+"?token="+localStorage.getItem("api_token"),t).then((function(t){e.message="Successfully updated BREAD.",e.showAlert(),e.getData=!1,e.receiveFormFields=[]})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var a in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(a)&&(e.message+=t.response.data.errors[a][0]+"  ");e.showAlert()}else console.log(t),e.$router.push({path:"/login"})}))},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;p.a.get(this.$apiAdress+"/api/bread/"+e.$route.params.id+"/edit?token="+localStorage.getItem("api_token")).then((function(t){e.form=t.data.form,e.formFields=t.data.formFields,e.options=t.data.options,e.roles=t.data.roles,e.formRoles=t.data.formRoles,e.rolesArray=[];for(var a=0;a<e.roles.length;a++)-1!=e.formRoles.indexOf(e.roles[a])?e.rolesArray[e.roles[a]]=!0:e.rolesArray[e.roles[a]]=!1})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},b=h,f=Object(d["a"])(b,o,r,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d22c2b8.75038cb9.js.map