(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{775:function(t,e,n){"use strict";n.r(e);var s=n(2),i=n.n(s),r=(n(4),{name:"Users",data:function(){return{items:[],fields:["id","name","fonction","lieu","tel","email","creation","roles","status","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},paginationProps:{align:"center",doubleArrows:!1,previousButtonHtml:"prev",nextButtonHtml:"next"},methods:{getBadge:function(t){return"Active"===t?"success":"Inactive"===t?"secondary":"Pending"===t?"warning":"Banned"===t?"danger":"primary"},userLink:function(t){return"users/".concat(t.toString())},editLink:function(t){return"users/".concat(t.toString(),"/edit")},showUser:function(t){var e=this.userLink(t);this.$router.push({path:e})},editUser:function(t){var e=this.editLink(t);this.$router.push({path:e})},deleteUser:function(t){var e=this;i.a.post(this.$apiAdress+"/api/users/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.message="Successfully deleted user.",e.showAlert(),e.getUsers()})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},createUser:function(){this.$router.push({path:"users/create/"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getUsers:function(){var t=this;i.a.get(this.$apiAdress+"/api/users?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data.users,t.you=e.data.you})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},mounted:function(){this.getUsers()}}),o=n(1),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CRow",[n("CCol",{attrs:{col:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardHeader",[t._v("\n          Utilisateurs\n          "),n("div",{staticClass:"card-header-actions"},[n("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.createUser()}}},[t._v("Ajouter")])],1)]),t._v(" "),n("CCardBody",[n("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v("\n          ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n        ")]),t._v(" "),n("CDataTable",{attrs:{hover:"",striped:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"status",fn:function(e){var s=e.item;return[n("td",[n("CBadge",{attrs:{color:t.getBadge(s.status)}},[t._v(t._s(s.status))])],1)]}},{key:"name",fn:function(e){var s=e.item;return[n("td",[t._v("\n            "+t._s(s.name)+" "+t._s(s.firstname)+"\n          ")])]}},{key:"fonction",fn:function(e){var s=e.item;return[n("td",[t._v("\n            "+t._s(s.fonction)+"\n          ")])]}},{key:"lieu",fn:function(e){var s=e.item;return[n("td",[t._v("\n            "+t._s(s.lieu)+"\n          ")])]}},{key:"tel",fn:function(e){var s=e.item;return[n("td",[t._v("\n            "+t._s(s.tel)+"\n          ")])]}},{key:"creation",fn:function(e){var s=e.item;return[n("td",[t._v("\n            "+t._s(t._f("formatDateShort")(s.created_at))+"\n          ")])]}},{key:"actions",fn:function(e){var s=e.item;return[n("td",[n("CButton",{attrs:{color:"warning",size:"sm"},on:{click:function(e){return t.showUser(s.id)}}},[t._v("Détail")]),t._v("\n             \n            "),n("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(e){return t.editUser(s.id)}}},[n("CIcon",{attrs:{name:"cil-pencil"}})],1),t._v("\n              \n            "),t.you!=s.id?n("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(e){return t.deleteUser(s.id)}}},[n("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);