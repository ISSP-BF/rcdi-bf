(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dd7a7e4"],{"176b":function(t,n,e){"use strict";e("3d0c")},"3d0c":function(t,n,e){},e057:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t._self._c;return n("CRow",[n("CCol",{attrs:{col:"8",xl:"8"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardHeader",[t._v(" Communes "),n("div",{staticClass:"card-header-actions"},[n("CButton",{attrs:{color:"primary"},on:{click:function(n){return t.createCommune()}}},[t._v("Ajouter")])],1)]),n("CCardBody",[n("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(n){t.dismissCountDown=n}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),n("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"Province",fn:function(e){var o=e.item;return[n("td",[n("strong",[t._v(t._s(o.province.province))])])]}},{key:"Region",fn:function(e){var o=e.item;return[n("td",[n("strong",[t._v(t._s(o.province.region?o.province.region.region:""))])])]}},{key:"Commune",fn:function(e){var o=e.item;return[n("td",[n("strong",[t._v(t._s(o.commune))])])]}},{key:"actions",fn:function(e){var o=e.item;return[n("td",[n("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[n("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(n){return t.showCommune(o.id)}}},[t._v("Détail")]),t._v("   "),n("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(n){return t.editCommune(o.id)}}},[n("CIcon",{attrs:{name:"cil-pencil"}})],1),t._v("   "),t.you!=o.id?n("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(n){return t.deleteCommune(o.id)}}},[n("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()],1)])]}}])})],1)],1)],1)],1)],1)},i=[],s=e("bc3a"),r=e.n(s),u={name:"Communes",data:function(){return{items:[],fields:["id","Region","Province","Commune","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},CommuneLink:function(t){return"communes/".concat(t.toString())},editLink:function(t){return"communes/".concat(t.toString(),"/edit")},showCommune:function(t){var n=this.CommuneLink(t);this.$router.push({path:n})},editCommune:function(t){var n=this.editLink(t);this.$router.push({path:n})},deleteCommune:function(t){var n=this;r.a.post(this.$apiAdress+"/api/communes/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){n.message="Successfully deleted Commune.",n.showAlert(),n.getCommunes()})).catch((function(t){console.log(t),n.$router.push({path:"/login"})}))},createCommune:function(){this.$router.push({path:"communes/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getCommunes:function(){var t=this;r.a.get(this.$apiAdress+"/api/communes?token="+localStorage.getItem("api_token")).then((function(n){t.items=n.data})).catch((function(n){console.log(n),t.$router.push({path:"/login"})}))}},mounted:function(){this.getCommunes()}},c=u,a=(e("176b"),e("2877")),m=Object(a["a"])(c,o,i,!1,null,"09865777",null);n["default"]=m.exports}}]);
//# sourceMappingURL=chunk-0dd7a7e4.ce1fb961.js.map