(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{742:function(t,n,e){"use strict";e.r(n);var o=e(2),r=e.n(o);var i={arrowIcon:["24 24","<path d='M8.25 2.625v5.625h-7.5v7.5h7.5v5.625h1.81l9.375-9.366-9.375-9.384zM9.75 19.565v-5.315h-7.5v-4.5h7.5v-5.314l7.564 7.572z'></path><path d='M21.75 2.625h1.5v18.75h-1.5v-18.75z'></path>"],name:"MenuIndex",data:function(){return{fields:["dropdown","name","actions"],items:[],buffor:[]}},methods:{addElementToBuffor:function(t,n){this.buffor.push({dropdown:n,name:t.name,id:t.id,slug:t.slug,assigned:t.assigned})},innerBuildArrayData:function(t,n){for(var e=0;e<t.length;e++)switch(t[e].slug){case"link":n>1?this.addElementToBuffor(t[e],!0):this.addElementToBuffor(t[e],!1);break;case"title":this.addElementToBuffor(t[e],!1);break;case"dropdown":this.addElementToBuffor(t[e],!1),this.innerBuildArrayData(t[e].elements,n+1)}},buildArrayData:function(t){return this.buffor=[],this.innerBuildArrayData(t,1),this.buffor},addElementToMenu:function(){this.$router.push({path:"menuelement/create"})},showMenu:function(t){this.$router.push({path:"menuelement/".concat(t.toString())})},editMenu:function(t){this.$router.push({path:"menuelement/".concat(t.toString(),"/edit")})},deleteMenu:function(t){this.$router.push({path:"menuelement/".concat(t.toString(),"/delete")})},moveUp:function(t){var n=this;r.a.get(this.$apiAdress+"/api/menu/element/move-up?token="+localStorage.getItem("api_token")+"&id="+t).then((function(t){n.getElements()})).catch((function(t){console.log(t),n.$router.push({path:"/login"})}))},moveDown:function(t){var n=this;r.a.get(this.$apiAdress+"/api/menu/element/move-down?token="+localStorage.getItem("api_token")+"&id="+t).then((function(t){n.getElements()})).catch((function(t){console.log(t),n.$router.push({path:"/login"})}))},getElements:function(){var t=this;console.log(t.$route.params.menu),r.a.get(this.$apiAdress+"/api/menu/element?token="+localStorage.getItem("api_token")+"&menu="+t.$route.params.menu).then((function(n){t.items=t.buildArrayData(n.data.menuToEdit)})).catch((function(n){console.log(n),t.$router.push({path:"/login"})}))}},mounted:function(){this.getElements()}},a=e(1),u=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("CRow",[e("CCol",{attrs:{col:"12",xl:"6"}},[e("transition",{attrs:{name:"slide"}},[e("CCard",[e("CCardBody",[e("h4",[t._v("\n            Menus\n          ")]),t._v(" "),e("CButton",{staticClass:"mb-3",attrs:{color:"primary"},on:{click:function(n){return t.addElementToMenu()}}},[t._v("Ajouter un élément au menu")]),t._v(" "),e("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":30,pagination:""},scopedSlots:t._u([{key:"dropdown",fn:function(n){var o=n.item;return[e("td",[o.dropdown?e("CIcon",{attrs:{content:t.$options.arrowIcon}}):t._e()],1)]}},{key:"name",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.name))])])]}},{key:"actions",fn:function(n){var o=n.item;return[e("td",[e("div",{staticClass:"card-header-actions"},[e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(n){return t.moveUp(o.id)}}},[t._v("Haut")]),t._v("  \n                \n                  "),e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(n){return t.moveDown(o.id)}}},[t._v("Bas")]),t._v(" \n                \n                  "),e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(n){return t.showMenu(o.id)}}},[t._v("Voir")]),t._v(" \n               \n                  "),e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(n){return t.editMenu(o.id)}}},[t._v("Editer")]),t._v(" \n                \n                  "),e("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(n){return t.deleteMenu(o.id)}}})],1)])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=u.exports}}]);