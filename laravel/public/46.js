(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{126:function(e,t,a){var o=a(475);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(9)(o,n);o.locals&&(e.exports=o.locals)},474:function(e,t,a){"use strict";var o=a(126);a.n(o).a},475:function(e,t,a){(e.exports=a(8)(!1)).push([e.i,"\n.card-body[data-v-6cb1048e] table > tbody > tr > td {\r\n  cursor: pointer;\n}\r\n",""])},880:function(e,t,a){"use strict";a.r(t);var o=a(2),n=a.n(o),s={name:"Resources",data:function(){return{items:[],formName:"",fields:["show"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1,activePage:1,maxPages:1}},watch:{activePage:function(){this.getResources()}},computed:{},methods:{getRowCount:function(e){return e.length},resourceLink:function(e){return"resource/".concat(e.toString())},editLink:function(e){return"resource/".concat(e.toString(),"/edit")},showResource:function(e){var t=this.resourceLink(e);this.$router.push({path:t})},editResource:function(e){var t=this.editLink(e);this.$router.push({path:t})},deleteResource:function(e){var t="resource/".concat(e.toString(),"/delete");this.$router.push({path:t})},createResource:function(){this.$router.push({path:"/resource/"+this.$route.params.bread+"/resource/create"})},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},getResources:function(){var e=this;n.a.get(this.$apiAdress+"/api/resource/"+e.$route.params.bread+"/resource?token="+localStorage.getItem("api_token")+"&page="+e.activePage).then((function(t){console.log(t),e.items=t.data.datas,e.formName=t.data.formName,e.fields=[];for(var a=0;a<t.data.header.length;a++)null!==t.data.header[a].relation_table?e.fields.push({key:"relation_"+t.data.header[a].column_name,label:t.data.header[a].name}):e.fields.push({key:t.data.header[a].column_name,label:t.data.header[a].name});e.fields.push({key:"show",label:""}),e.maxPages=t.data.pagination})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},mounted:function(){this.getResources()}},r=(a(474),a(1)),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CRow",[a("CCol",{attrs:{col:"12",xl:"12"}},[a("transition",{attrs:{name:"slide"}},[a("CCard",[a("CCardHeader",[e._v("\n          "+e._s(e.formName)+"\n          "),a("div",{staticClass:"card-header-actions"},[a("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.createResource()}}},[e._v("Ajouter")])],1)]),e._v(" "),a("CCardBody",[a("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n            ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n          ")]),e._v(" "),a("CDataTable",{attrs:{hover:"",items:e.items,fields:e.fields},scopedSlots:e._u([{key:"show",fn:function(t){var o=t.item;return[a("td",[a("div",{staticClass:"card-header-actions",staticStyle:{display:"inline-flex"}},[a("CButton",{attrs:{color:"secondary"},on:{click:function(t){return e.showResource(o.id)}}},[e._v("Détail")]),e._v("\n                     \n                    "),a("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.editResource(o.id)}}},[a("CIcon",{attrs:{name:"cil-pencil"}})],1),e._v("\n                     \n                    "),e.you!=o.id?a("CButton",{attrs:{color:"danger"},on:{click:function(t){return e.deleteResource(o.id)}}},[a("CIcon",{attrs:{name:"cil-x-circle"}})],1):e._e()],1)])]}}])}),e._v(" "),a("CPagination",{attrs:{pages:e.maxPages,"active-page":e.activePage},on:{"update:activePage":function(t){e.activePage=t},"update:active-page":function(t){e.activePage=t}}})],1)],1)],1)],1)],1)}),[],!1,null,"6cb1048e",null);t.default=i.exports}}]);