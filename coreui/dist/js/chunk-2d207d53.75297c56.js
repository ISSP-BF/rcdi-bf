(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207d53"],{a1e2:function(t,n,e){"use strict";e.r(n);var u=function(){var t=this,n=t._self._c;return n("CRow",[n("CCol",{attrs:{col:"12",xl:"6"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardBody",[n("h4",[t._v(" Menus ")]),n("CButton",{staticClass:"mb-3",attrs:{color:"primary"},on:{click:function(n){return t.addMenu()}}},[t._v("Ajouter un Menu")]),n("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"intitule",fn:function(e){var u=e.item;return[n("td",[n("strong",[t._v(t._s(u.name))])])]}},{key:"elements_menu",fn:function(e){var u=e.item;return[n("td",[n("CButton",{attrs:{color:"primary"},on:{click:function(n){return t.menuElements(u.id)}}},[t._v("Sous element du menu")])],1)]}},{key:"actions",fn:function(e){var u=e.item;return[n("td",[n("CButton",{attrs:{color:"primary"},on:{click:function(n){return t.editMenu(u.id)}}},[t._v("Actions")])],1),n("td",[n("CButton",{attrs:{color:"danger"},on:{click:function(n){return t.deleteMenu(u.id)}}},[t._v("Supprimer")])],1)]}}])})],1)],1)],1)],1)],1)},i=[],o=e("bc3a"),r=e.n(o),a={name:"MenuIndex",data:function(){return{fields:["intitule","elements_menu","actions"],items:[]}},methods:{menuElements:function(t){this.$router.push({path:"menuelement/".concat(t.toString(),"/menuelement")})},addMenu:function(){this.$router.push({path:"create"})},editMenu:function(t){this.$router.push({path:"menu/".concat(t.toString(),"/edit")})},deleteMenu:function(t){this.$router.push({path:"menu/".concat(t.toString(),"/delete")})},getMenus:function(){var t=this;r.a.get(this.$apiAdress+"/api/menu/menu?token="+localStorage.getItem("api_token")).then((function(n){t.items=n.data.menulist})).catch((function(n){console.log(n),t.$router.push({path:"/login"})}))}},mounted:function(){this.getMenus()}},s=a,c=e("2877"),l=Object(c["a"])(s,u,i,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d207d53.75297c56.js.map