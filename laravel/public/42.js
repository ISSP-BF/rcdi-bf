(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{412:function(t,s,n){"use strict";var o=n(97);n.n(o).a},413:function(t,s,n){(t.exports=n(8)(!1)).push([t.i,"\n.card-body[data-v-10d78697] table > tbody > tr > td {\r\n  cursor: pointer;\n}\r\n",""])},796:function(t,s,n){"use strict";n.r(s);var o=n(2),e=n.n(o),i={name:"Professions",data:function(){return{items:[],fields:["metier","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},professionLink:function(t){return"professions/".concat(t.toString())},editLink:function(t){return"professions/".concat(t.toString(),"/edit")},showProfession:function(t){var s=this.professionLink(t);this.$router.push({path:s})},editProfession:function(t){var s=this.editLink(t);this.$router.push({path:s})},deleteProfession:function(t){var s=this;e.a.post(this.$apiAdress+"/api/professions/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){s.message="Successfully deleted profession.",s.showAlert(),s.getProfessions()})).catch((function(t){console.log(t),s.$router.push({path:"/login"})}))},createProfession:function(){this.$router.push({path:"professions/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getProfessions:function(){var t=this;e.a.get(this.$apiAdress+"/api/professions?token="+localStorage.getItem("api_token")).then((function(s){t.items=s.data})).catch((function(s){console.log(s),t.$router.push({path:"/login"})}))}},mounted:function(){this.getProfessions()}},r=(n(412),n(1)),a=Object(r.a)(i,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("CRow",[n("CCol",{attrs:{col:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardHeader",[t._v("\n          Professions\n          "),n("div",{staticClass:"card-header-actions"},[n("CButton",{attrs:{color:"primary"},on:{click:function(s){return t.createProfession()}}},[t._v("Ajouter")])],1)]),t._v(" "),n("CCardBody",[n("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(s){t.dismissCountDown=s}}},[t._v("\n            ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n          ")]),t._v(" "),n("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"metier",fn:function(s){var o=s.item;return[n("td",[t._v("\n                "+t._s(o.metier)+"\n              ")])]}},{key:"actions",fn:function(s){var o=s.item;return[n("td",[n("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[n("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(s){return t.showProfession(o.id)}}},[t._v("Détail")]),t._v("\n                 \n                "),n("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(s){return t.editProfession(o.id)}}},[n("CIcon",{attrs:{name:"cil-pencil"}})],1),t._v("\n                 \n                    "),t.you!=o.id?n("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(s){return t.deleteProfession(o.id)}}},[n("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()],1)])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"10d78697",null);s.default=a.exports},97:function(t,s,n){var o=n(413);"string"==typeof o&&(o=[[t.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n(9)(o,e);o.locals&&(t.exports=o.locals)}}]);