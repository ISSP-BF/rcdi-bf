(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6694fd9a"],{"87d6":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t._self._c;return n("CRow",[n("CCol",{attrs:{col:"6",xl:"6"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardHeader",[t._v(" Regions "),n("div",{staticClass:"card-header-actions"},[n("CButton",{attrs:{color:"primary"},on:{click:function(n){return t.createRegion()}}},[t._v("Ajouter")])],1)]),n("CCardBody",[n("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(n){t.dismissCountDown=n}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),n("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"region",fn:function(e){var i=e.item;return[n("td",[n("strong",[t._v(t._s(i.region))])])]}},{key:"actions",fn:function(e){var i=e.item;return[n("td",[n("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[n("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(n){return t.showRegion(i.id)}}},[t._v("Détail")]),t._v("   "),n("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(n){return t.editRegion(i.id)}}},[n("CIcon",{attrs:{name:"cil-pencil"}})],1),t._v("   "),t.you!=i.id?n("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(n){return t.deleteRegion(i.id)}}},[n("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()],1)])]}}])})],1)],1)],1)],1)],1)},o=[],s=e("bc3a"),r=e.n(s),a={name:"Regions",data:function(){return{items:[],fields:["id","region","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},regionLink:function(t){return"regions/".concat(t.toString())},editLink:function(t){return"regions/".concat(t.toString(),"/edit")},showRegion:function(t){var n=this.regionLink(t);this.$router.push({path:n})},editRegion:function(t){var n=this.editLink(t);this.$router.push({path:n})},deleteRegion:function(t){var n=this;r.a.post(this.$apiAdress+"/api/regions/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){n.message="Successfully deleted region.",n.showAlert(),n.getRegions()})).catch((function(t){console.log(t),n.$router.push({path:"/login"})}))},createRegion:function(){this.$router.push({path:"regions/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getRegions:function(){var t=this;r.a.get(this.$apiAdress+"/api/regions?token="+localStorage.getItem("api_token")).then((function(n){t.items=n.data})).catch((function(n){console.log(n),t.$router.push({path:"/login"})}))}},mounted:function(){this.getRegions()}},c=a,u=(e("cab7"),e("2877")),d=Object(u["a"])(c,i,o,!1,null,"0314b115",null);n["default"]=d.exports},c514:function(t,n,e){},cab7:function(t,n,e){"use strict";e("c514")}}]);
//# sourceMappingURL=chunk-6694fd9a.658167d4.js.map