(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab2a7"],{"13b1":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("div",[e.marker?a("CRow",[a("CCol",{attrs:{col:"6",lg:"6"}},[a("CCard",{attrs:{"no-header":""}},[a("CCardBody",[a("h3",[e._v(" Create Bread ")]),a("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(a){e.dismissCountDown=a}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),a("div",[a("CInput",{attrs:{label:"Table name in database",type:"text",placeholder:"Table name in database"},model:{value:e.tableNameInDatabase,callback:function(a){e.tableNameInDatabase=a},expression:"tableNameInDatabase"}}),a("CButton",{attrs:{color:"primary"},on:{click:function(a){return e.choiceTableInDatabase()}}},[e._v("Select")]),a("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)],1):a("CRow",[a("CCol",{attrs:{col:"6",lg:"6"}},[a("CCard",{attrs:{"no-header":""}},[a("CCardBody",[a("h3",[e._v(" Create Bread ")]),a("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(a){e.dismissCountDown=a}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),a("CInput",{attrs:{label:"Form name",type:"text",placeholder:"Form name",required:""},model:{value:e.bread.name,callback:function(a){e.$set(e.bread,"name",a)},expression:"bread.name"}}),a("CInput",{attrs:{label:"Records on one page of table",type:"number",placeholder:"Records on one page of table",required:""},model:{value:e.bread.pagination,callback:function(a){e.$set(e.bread,"pagination",a)},expression:"bread.pagination"}}),a("CInputCheckbox",{attrs:{label:"Enable Show button in table",value:"true",checked:!0},model:{value:e.bread.read,callback:function(a){e.$set(e.bread,"read",a)},expression:"bread.read"}}),a("CInputCheckbox",{attrs:{label:"Enable Edit button in table",value:"true",checked:!0},model:{value:e.bread.edit,callback:function(a){e.$set(e.bread,"edit",a)},expression:"bread.edit"}}),a("CInputCheckbox",{attrs:{label:"Enable Add button in table",value:"true",checked:!0},model:{value:e.bread.add,callback:function(a){e.$set(e.bread,"add",a)},expression:"bread.add"}}),a("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Enable Delete button in table",value:"true",checked:!0},model:{value:e.bread.delete,callback:function(a){e.$set(e.bread,"delete",a)},expression:"bread.delete"}})],1)],1)],1),a("CCol",{attrs:{col:"6",lg:"6"}},[a("CCard",{attrs:{"no-header":""}},[a("CCardBody",[a("h4",[e._v("Assign to roles:")]),e._l(e.roles,(function(t){return a("CInputCheckbox",{key:t,attrs:{label:t,value:"true",checked:!0},on:{"update:checked":function(a){return e.checkRoleCheckbox(t)}}})}))],2)],1)],1),a("CCol",{attrs:{col:"6",lg:"6"}},[a("CCard",{attrs:{"no-header":""}},[a("CCardBody",[e._l(e.formFields,(function(t){return a("CreateBreadFieldCard",{key:t.id,attrs:{getData:e.getData,options:e.options,columnName:t,visibleName:t},on:{sendData:e.receiveDataFormField}})})),a("CButton",{staticClass:"mt-2",attrs:{color:"primary"},on:{click:function(a){return e.storeFirstStep()}}},[e._v("Create")]),a("CButton",{staticClass:"mt-2",attrs:{color:"primary"},on:{click:function(a){e.marker=!0}}},[e._v("Back")])],2)],1)],1)],1)],1)},o=[],l=function(){var e=this,a=e._self._c;return"id"!=e.columnName?a("CCard",[a("CCardHeader",[a("h5",[e._v(e._s(e.columnName))])]),a("CCardBody",[a("CInput",{attrs:{label:"Visible name",type:"text",placeholder:"Visible name",required:""},model:{value:e.visibleName,callback:function(a){e.visibleName=a},expression:"visibleName"}}),a("CSelect",{attrs:{label:"Field type",options:e.options,value:e.type},on:{"update:value":function(a){e.type=a}}}),a("CInput",{attrs:{label:"Optional relation table name",type:"text",placeholder:"Optional relation table name"},model:{value:e.relationTable,callback:function(a){e.relationTable=a},expression:"relationTable"}}),a("CInput",{attrs:{label:"Optional column name in relation table - to print",type:"text",placeholder:"Optional column name in relation table - to print"},model:{value:e.relationColumn,callback:function(a){e.relationColumn=a},expression:"relationColumn"}}),a("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Browse",value:"true",checked:!1},on:{"update:checked":function(a){return e.selectCheckbox("browse")}},model:{value:e.browse,callback:function(a){e.browse=a},expression:"browse"}}),a("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Read",value:"true",checked:!1},on:{"update:checked":function(a){return e.selectCheckbox("read")}},model:{value:e.read,callback:function(a){e.read=a},expression:"read"}}),a("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Edit",value:"true",checked:!1},on:{"update:checked":function(a){return e.selectCheckbox("edit")}},model:{value:e.edit,callback:function(a){e.edit=a},expression:"edit"}}),a("CInputCheckbox",{staticClass:"mb-2",attrs:{label:"Add",value:"true",checked:!1},on:{"update:checked":function(a){return e.selectCheckbox("add")}},model:{value:e.add,callback:function(a){e.add=a},expression:"add"}})],1)],1):e._e()},n=[],s={name:"CreateBreadFieldCard",props:{columnName:String,visibleName:String,getData:Boolean,options:Array},data:function(){return{type:"text",relationTable:"",relationColumn:"",browse:null,read:null,edit:null,add:null}},computed:{},methods:{selectCheckbox:function(e){switch(e){case"browse":1==this.browse?this.browse=!1:this.browse=!0;break;case"read":1==this.read?this.read=!1:this.read=!0;break;case"edit":1==this.edit?this.edit=!1:this.edit=!0;break;case"add":1==this.add?this.add=!1:this.add=!0;break}},getDataFunction:function(){var e={columnName:this.columnName,visibleName:this.visibleName,type:this.type,relationTable:this.relationTable,relationColumn:this.relationColumn,browse:this.browse,read:this.read,edit:this.edit,add:this.add};this.$emit("sendData",e)}},watch:{getData:function(){!0===this.getData&&this.getDataFunction()}}},i=s,d=t("2877"),c=Object(d["a"])(i,l,n,!1,null,null,null),u=c.exports,m=t("bc3a"),b=t.n(m),h={name:"CreateBread",components:{CreateBreadFieldCard:u},data:function(){return{message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1,tableNameInDatabase:"",marker:!0,bread:{name:"",pagination:5,read:!0,edit:!0,add:!0,delete:!0},formFields:[],receiveFormFields:[],options:[],getData:!1,rolesArray:[],roles:[]}},methods:{goBack:function(){this.$router.go(-1)},checkRoleCheckbox:function(e){1==this.rolesArray[e]?this.rolesArray[e]=!1:this.rolesArray[e]=!0},choiceTableInDatabase:function(){var e=this;b.a.post(this.$apiAdress+"/api/bread?token="+localStorage.getItem("api_token"),{marker:"selectModel",model:e.tableNameInDatabase}).then((function(a){if("lackcolumns"==a.data.status)e.message="Table not detected, or there is no columns in table",e.showAlert(),e.tableNameInDatabase="",e.receiveFormFields=[];else{e.marker=!1,e.formFields=a.data.columns,e.options=a.data.options,e.roles=a.data.roles,e.rolesArray=[];for(var t=0;t<e.roles.length;t++)e.rolesArray[e.roles[t]]=!0}})).catch((function(a){console.log(a),e.$router.push({path:"login"})}))},storeFirstStep:function(){this.getData=!0},createPostDataForStore:function(){for(var e=this,a={marker:"createForm",model:e.tableNameInDatabase,name:e.bread.name,pagination:e.bread.pagination,read:e.bread.read,edit:e.bread.edit,add:e.bread.add,delete:e.bread.delete},t=0;t<e.receiveFormFields.length;t++)"id"!=e.receiveFormFields[t].columnName&&(a[e.receiveFormFields[t].columnName+"_name"]=e.receiveFormFields[t].visibleName,a[e.receiveFormFields[t].columnName+"_field_type"]=e.receiveFormFields[t].type,a[e.receiveFormFields[t].columnName+"_relation_table"]=e.receiveFormFields[t].relationTable,a[e.receiveFormFields[t].columnName+"_relation_column"]=e.receiveFormFields[t].relationColumn,a[e.receiveFormFields[t].columnName+"_browse"]=e.receiveFormFields[t].browse,a[e.receiveFormFields[t].columnName+"_read"]=e.receiveFormFields[t].read,a[e.receiveFormFields[t].columnName+"_edit"]=e.receiveFormFields[t].edit,a[e.receiveFormFields[t].columnName+"_add"]=e.receiveFormFields[t].add);for(var r=0;r<e.roles.length;r++)1==e.rolesArray[e.roles[r]]&&(a["_role_"+e.roles[r]]="true");return a},receiveDataFormField:function(e){var a=this;a.receiveFormFields.push(e),a.receiveFormFields.length==a.formFields.length&&a.store()},store:function(){var e=this,a=e.createPostDataForStore();b.a.post(this.$apiAdress+"/api/bread?token="+localStorage.getItem("api_token"),a).then((function(a){e.marker=!1,e.$router.push({path:""+a.data.id})})).catch((function(a){if("The given data was invalid."==a.response.data.message){for(var t in e.message="",a.response.data.errors)a.response.data.errors.hasOwnProperty(t)&&(e.message+=a.response.data.errors[t][0]+"  ");e.showAlert()}else console.log(a),e.$router.push({path:"/login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},p=h,C=Object(d["a"])(p,r,o,!1,null,null,null);a["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0ab2a7.4db4e625.js.map