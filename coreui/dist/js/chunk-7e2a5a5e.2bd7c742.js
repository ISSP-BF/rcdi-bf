(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e2a5a5e"],{"0498":function(t,e,s){},"762c":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"6",xl:"6"}},[e("transition",{attrs:{name:"slide"}},[e("CCard",[e("CCardHeader",[t._v(" Desagregations "),e("div",{staticClass:"card-header-actions"},[e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.createDesagregation()}}},[t._v("Ajouter")])],1)]),e("CCardBody",[e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),e("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"desagregation",fn:function(s){var n=s.item;return[e("td",[e("strong",[t._v(t._s(n.libelle))])])]}},{key:"description",fn:function(s){var n=s.item;return[e("td",[e("strong",[t._v(t._s(n.description))])])]}},{key:"actions",fn:function(s){var n=s.item;return[e("td",[e("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[e("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(e){return t.showDesagregation(n.id)}}},[t._v("Détail")]),t._v("   "),e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(e){return t.editDesagregation(n.id)}}},[e("CIcon",{attrs:{name:"cil-pencil"}})],1),t._v("   "),t.you!=n.id?e("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(e){return t.deleteDesagregation(n.id)}}},[e("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()],1)])]}}])})],1)],1)],1)],1)],1)},i=[],o=s("bc3a"),a=s.n(o),r={name:"Desagregations",data:function(){return{items:[],fields:["id","desagregation","description","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},desagregationLink:function(t){return"desagregations/".concat(t.toString())},editLink:function(t){return"desagregations/".concat(t.toString(),"/edit")},showDesagregation:function(t){var e=this.desagregationLink(t);this.$router.push({path:e})},editDesagregation:function(t){var e=this.editLink(t);this.$router.push({path:e})},deleteDesagregation:function(t){var e=this;a.a.post(this.$apiAdress+"/api/desagregations/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.$toasted.show(t.data.message,{type:"success"}),e.getDesagregations()})).catch((function(t){console.log(t),e.$toasted.show(t.data.message,{type:"danger"}),e.$router.push({path:"/login"})}))},createDesagregation:function(){this.$router.push({path:"desagregations/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getDesagregations:function(){var t=this;a.a.get(this.$apiAdress+"/api/desagregations?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.getDesagregations()}},c=r,u=(s("9b13"),s("2877")),d=Object(u["a"])(c,n,i,!1,null,"085c3986",null);e["default"]=d.exports},"9b13":function(t,e,s){"use strict";s("0498")}}]);
//# sourceMappingURL=chunk-7e2a5a5e.2bd7c742.js.map