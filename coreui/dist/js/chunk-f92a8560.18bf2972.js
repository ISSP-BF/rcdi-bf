(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f92a8560"],{"0456":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("CRow",[t("CCol",{attrs:{col:"12",xl:"12"}},[t("transition",{attrs:{name:"slide"}},[t("CCard",[t("CCardHeader",[e._v(" "+e._s(e.formName)+" "),t("div",{staticClass:"card-header-actions"},[t("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.createResource()}}},[e._v("Ajouter")])],1)]),t("CCardBody",[t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v(" ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+" ")]),t("CDataTable",{attrs:{hover:"",items:e.items,fields:e.fields},scopedSlots:e._u([{key:"show",fn:function(a){var o=a.item;return[t("td",[t("div",{staticClass:"card-header-actions",staticStyle:{display:"inline-flex"}},[t("CButton",{attrs:{color:"secondary"},on:{click:function(t){return e.showResource(o.id)}}},[e._v("Détail")]),e._v("   "),t("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.editResource(o.id)}}},[t("CIcon",{attrs:{name:"cil-pencil"}})],1),e._v("   "),e.you!=o.id?t("CButton",{attrs:{color:"danger"},on:{click:function(t){return e.deleteResource(o.id)}}},[t("CIcon",{attrs:{name:"cil-x-circle"}})],1):e._e()],1)])]}}])}),t("CPagination",{attrs:{pages:e.maxPages,"active-page":e.activePage},on:{"update:activePage":function(t){e.activePage=t},"update:active-page":function(t){e.activePage=t}}})],1)],1)],1)],1)],1)},s=[],n=a("bc3a"),r=a.n(n),i={name:"Resources",data:function(){return{items:[],formName:"",fields:["show"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1,activePage:1,maxPages:1}},watch:{activePage:function(){this.getResources()}},computed:{},methods:{getRowCount:function(e){return e.length},resourceLink:function(e){return"resource/".concat(e.toString())},editLink:function(e){return"resource/".concat(e.toString(),"/edit")},showResource:function(e){var t=this.resourceLink(e);this.$router.push({path:t})},editResource:function(e){var t=this.editLink(e);this.$router.push({path:t})},deleteResource:function(e){var t="resource/".concat(e.toString(),"/delete");this.$router.push({path:t})},createResource:function(){this.$router.push({path:"/resource/"+this.$route.params.bread+"/resource/create"})},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},getResources:function(){var e=this;r.a.get(this.$apiAdress+"/api/resource/"+e.$route.params.bread+"/resource?token="+localStorage.getItem("api_token")+"&page="+e.activePage).then((function(t){console.log(t),e.items=t.data.datas,e.formName=t.data.formName,e.fields=[];for(var a=0;a<t.data.header.length;a++)null!==t.data.header[a].relation_table?e.fields.push({key:"relation_"+t.data.header[a].column_name,label:t.data.header[a].name}):e.fields.push({key:t.data.header[a].column_name,label:t.data.header[a].name});e.fields.push({key:"show",label:""}),e.maxPages=t.data.pagination})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},mounted:function(){this.getResources()}},c=i,u=(a("cb0e"),a("2877")),d=Object(u["a"])(c,o,s,!1,null,"dd92cdc2",null);t["default"]=d.exports},cb0e:function(e,t,a){"use strict";a("fb37")},fb37:function(e,t,a){}}]);
//# sourceMappingURL=chunk-f92a8560.18bf2972.js.map