(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{397:function(t,n,e){"use strict";var o=e(89);e.n(o).a},398:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,"\n.card-body[data-v-40f6f4c2] table > tbody > tr > td {\r\n  cursor: pointer;\n}\r\n",""])},768:function(t,n,e){"use strict";e.r(n);var o=e(1),s=e.n(o),i={name:"Notes",data:function(){return{items:[],fields:["author","title","content","applies_to_date","status","note_type","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},noteLink:function(t){return"notes/".concat(t.toString())},editLink:function(t){return"notes/".concat(t.toString(),"/edit")},showNote:function(t){var n=this.noteLink(t);this.$router.push({path:n})},editNote:function(t){var n=this.editLink(t);this.$router.push({path:n})},deleteNote:function(t){var n=this;s.a.post(this.$apiAdress+"/api/notes/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){n.message="Successfully deleted note.",n.showAlert(),n.getNotes()})).catch((function(t){console.log(t),n.$router.push({path:"/login"})}))},createNote:function(){this.$router.push({path:"notes/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getNotes:function(){var t=this;s.a.get(this.$apiAdress+"/api/notes?token="+localStorage.getItem("api_token")).then((function(n){t.items=n.data})).catch((function(n){console.log(n),t.$router.push({path:"/login"})}))}},mounted:function(){this.getNotes()}},r=(e(397),e(0)),a=Object(r.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("CRow",[e("CCol",{attrs:{col:"12",xl:"12"}},[e("transition",{attrs:{name:"slide"}},[e("CCard",[e("CCardHeader",[t._v("\n          Notes\n          "),e("div",{staticClass:"card-header-actions"},[e("CButton",{attrs:{color:"primary"},on:{click:function(n){return t.createNote()}}},[t._v("Ajouter")])],1)]),t._v(" "),e("CCardBody",[e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(n){t.dismissCountDown=n}}},[t._v("\n            ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n          ")]),t._v(" "),e("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"author",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.author))])])]}},{key:"title",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.title))])])]}},{key:"content",fn:function(n){var o=n.item;return[e("td",[t._v("\n                "+t._s(o.content)+"\n              ")])]}},{key:"applies_to_date",fn:function(n){var o=n.item;return[e("td",[t._v("\n                "+t._s(o.applies_to_date)+"\n              ")])]}},{key:"status",fn:function(n){var o=n.item;return[e("td",[e("CBadge",{attrs:{color:o.status_class}},[t._v(t._s(o.status))])],1)]}},{key:"note_type",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.note_type))])])]}},{key:"actions",fn:function(n){var o=n.item;return[e("td",[e("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[e("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(n){return t.showNote(o.id)}}},[t._v("Détail")]),t._v("\n                 \n                "),e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(n){return t.editNote(o.id)}}},[e("CIcon",{attrs:{name:"cil-pencil"}})],1),t._v("\n                 \n                    "),t.you!=o.id?e("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(n){return t.deleteNote(o.id)}}},[e("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()],1)])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"40f6f4c2",null);n.default=a.exports},89:function(t,n,e){var o=e(398);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(6)(o,s);o.locals&&(t.exports=o.locals)}}]);