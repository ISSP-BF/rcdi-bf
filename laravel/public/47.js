(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{124:function(t,e,o){var n=o(471);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(9)(n,s);n.locals&&(t.exports=n.locals)},470:function(t,e,o){"use strict";var n=o(124);o.n(n).a},471:function(t,e,o){(t.exports=o(8)(!1)).push([t.i,"\n.card-body[data-v-70698f9d] table > tbody > tr > td {\n  cursor: pointer;\n}\n",""])},874:function(t,e,o){"use strict";o.r(e);var n=o(2),s=o.n(n),r={name:"Roles",data:function(){return{items:[],fields:["name","hierarchy","move-up","move-down","show","edit","delete"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},roleLink:function(t){return"roles/".concat(t.toString())},editLink:function(t){return"roles/".concat(t.toString(),"/edit")},showRole:function(t){var e=this.roleLink(t);this.$router.push({path:e})},editRole:function(t){var e=this.editLink(t);this.$router.push({path:e})},deleteRole:function(t){var e=this;s.a.post(this.$apiAdress+"/api/roles/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){"success"===t.data.status?(e.message="Successfully deleted role.",e.showAlert(),e.getRoles()):"rejected"===t.data.status&&(e.message="Can't delete. Role has assigned one or more menu elements.",e.showAlert())})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},moveUp:function(t){var e=this;s.a.get(this.$apiAdress+"/api/roles/move/move-up?id="+t+"&token="+localStorage.getItem("api_token")).then((function(t){e.message="Successfully move role.",e.showAlert(),e.getRoles()})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},moveDown:function(t){var e=this;s.a.get(this.$apiAdress+"/api/roles/move/move-down?id="+t+"&token="+localStorage.getItem("api_token")).then((function(t){e.message="Successfully move role.",e.showAlert(),e.getRoles()})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},createRole:function(){this.$router.push({path:"roles/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getRoles:function(){var t=this;s.a.get(this.$apiAdress+"/api/roles?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},mounted:function(){this.getRoles()}},i=(o(470),o(1)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("CRow",[o("CCol",{attrs:{col:"12",xl:"12"}},[o("transition",{attrs:{name:"slide"}},[o("CCard",[o("CCardBody",[o("h4",[t._v("Roles")]),t._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.createRole()}}},[t._v("Create Role")]),t._v(" "),o("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v("\n            ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n          ")]),t._v(" "),o("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"name",fn:function(e){var n=e.item;return[o("td",[o("strong",[t._v(t._s(n.name))])])]}},{key:"hierarchy",fn:function(e){var n=e.item;return[o("td",[o("strong",[t._v(t._s(n.hierarchy))])])]}},{key:"move-up",fn:function(e){var n=e.item;return[o("td",[o("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.moveUp(n.id)}}},[t._v("Move Up")])],1)]}},{key:"move-down",fn:function(e){var n=e.item;return[o("td",[o("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.moveDown(n.id)}}},[t._v("Move Down")])],1)]}},{key:"show",fn:function(e){var n=e.item;return[o("td",[o("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.showRole(n.id)}}},[t._v("Show")])],1)]}},{key:"edit",fn:function(e){var n=e.item;return[o("td",[o("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.editRole(n.id)}}},[t._v("Edit")])],1)]}},{key:"delete",fn:function(e){var n=e.item;return[o("td",[o("CButton",{attrs:{color:"danger"},on:{click:function(e){return t.deleteRole(n.id)}}},[t._v("Delete")])],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"70698f9d",null);e.default=a.exports}}]);