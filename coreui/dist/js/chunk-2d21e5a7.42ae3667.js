(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e5a7"],{d4cd:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",xl:"6"}},[t("transition",{attrs:{name:"slide"}},[t("CCard",[t("CCardBody",[t("h3",[e._v(" Create "+e._s(e.form.name)+" ")]),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),e._l(e.columns,(function(o){return t("CreateResourceField",{key:o.id,attrs:{column:o,relations:e.relations,options:e.inputOptions,getData:e.getData},on:{sendData:e.receiveDataFormField}})})),t("CButton",{staticClass:"mt-2",attrs:{color:"primary"},on:{click:function(t){return e.storeFirstStep()}}},[e._v("Create")]),t("CButton",{staticClass:"mt-2",attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],2)],1)],1)],1)],1)},a=[],l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-1 mt-1"},[e.flag?t("div",["checkbox"==e.column.type?t("div",[t("CInputCheckbox",{attrs:{label:e.column.name,value:"true",checked:!1},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):"radio"==e.column.type?t("div",[t("label",{staticClass:"mt-3"},[e._v(" "+e._s(e.column.name)+" ")]),t("CInputRadio",{attrs:{label:"yes",type:"radio",value:"true",name:e.column.column_name,checked:!1}}),t("CInputRadio",{attrs:{label:"no",type:"radio",value:"false",name:e.column.column_name,checked:!1}})],1):t("div",[t("CInput",{attrs:{label:e.column.name,type:e.column.type,placeholder:e.column.name},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)]):"relation_select"==e.column.type?t("div",[t("CSelect",{attrs:{label:e.column.name,options:e.relations["relation_"+e.column.column_name],value:e.model},on:{"update:value":function(t){e.model=t}}})],1):"relation_radio"==e.column.type?t("div",[t("label",{staticClass:"mt-3"},[e._v(e._s(e.column.name))]),e._l(e.relations["relation_"+e.column.column_name],(function(o){return t("CInputRadio",{key:o.value,attrs:{label:o.label,type:"radio",value:o.value,name:e.column.column_name}})}))],2):"file"==e.column.type||"image"==e.column.type?t("div",[t("CInputFile",{attrs:{label:e.column.name},on:{change:e.handleFileUpload}})],1):"text_area"==e.column.type?t("div",[t("CTextarea",{attrs:{label:e.column.name,placeholder:e.column.name,rows:"9"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):t("div",[t("p",[e._v("Not recognize field type: "+e._s(e.column.type))])])])},s=[],i={name:"CreateResourceField",props:{column:Object,relations:Object,options:Array,getData:Boolean},data:function(){return{test:"test",model:null,file:!1}},computed:{flag:function(){for(var e=!1,t=0;t<this.options.length;t++)if(this.options[t]["value"]==this.column.type){e=!0;break}return e}},methods:{handleFileUpload:function(e,t){this.model=e[0],this.file=!0},getDataFunction:function(){var e={data:this.model,file:this.file,name:this.column.column_name};this.$emit("sendData",e)}},watch:{getData:function(){!0===this.getData&&this.getDataFunction()}}},r=i,c=o("2877"),u=Object(c["a"])(r,l,s,!1,null,null,null),m=u.exports,d=o("bc3a"),p=o.n(d),h={name:"CreateResources",components:{CreateResourceField:m},data:function(){return{message:"",dismissSecs:7,dismissCountDown:0,form:{},columns:[],relations:[],inputOptions:[],receiveFormFields:[],getData:!1}},watch:{activePage:function(){this.getResources()}},computed:{},methods:{goBack:function(){this.$router.go(-1)},storeFirstStep:function(){this.getData=!0},receiveDataFormField:function(e){var t=this;t.receiveFormFields.push(e),t.receiveFormFields.length==t.columns.length&&t.store()},preparePostDataForStore:function(){for(var e=new FormData,t=0;t<this.receiveFormFields.length;t++)e.append(this.receiveFormFields[t].name,this.receiveFormFields[t].data);return e},store:function(e,t){var o=this,n=o.preparePostDataForStore();p.a.post(this.$apiAdress+"/api/resource/"+o.$route.params.bread+"/resource?token="+localStorage.getItem("api_token"),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){o.$router.go(-1),o.message="Successfully added to "+o.form.name,o.showAlert()})).catch((function(e){console.log(e),o.$router.push({path:"/login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},getFields:function(){var e=this;p.a.get(this.$apiAdress+"/api/resource/"+e.$route.params.bread+"/resource/create?token="+localStorage.getItem("api_token")).then((function(t){e.form=t.data.form,e.columns=t.data.columns,e.relations=t.data.relations,e.inputOptions=t.data.inputOptions})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},mounted:function(){this.getFields()}},f=h,v=Object(c["a"])(f,n,a,!1,null,"339c6dbc",null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d21e5a7.42ae3667.js.map