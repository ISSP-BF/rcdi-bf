(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a0e0906"],{"29d2":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",xl:"12"}},[e("transition",{attrs:{name:"slide"}},[e("CCard",[e("CCardHeader",[t._v(" Notes "),e("div",{staticClass:"card-header-actions"},[e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.createNote()}}},[t._v("Ajouter")])],1)]),e("CCardBody",[e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),e("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"author",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.author))])])]}},{key:"title",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.title))])])]}},{key:"content",fn:function(n){var o=n.item;return[e("td",[t._v(" "+t._s(o.content)+" ")])]}},{key:"applies_to_date",fn:function(n){var o=n.item;return[e("td",[t._v(" "+t._s(o.applies_to_date)+" ")])]}},{key:"status",fn:function(n){var o=n.item;return[e("td",[e("CBadge",{attrs:{color:o.status_class}},[t._v(t._s(o.status))])],1)]}},{key:"note_type",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.note_type))])])]}},{key:"actions",fn:function(n){var o=n.item;return[e("td",[e("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[e("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(e){return t.showNote(o.id)}}},[t._v("Détail")]),t._v("   "),e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(e){return t.editNote(o.id)}}},[e("CIcon",{attrs:{name:"cil-pencil"}})],1),t._v("   "),t.you!=o.id?e("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(e){return t.deleteNote(o.id)}}},[e("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()],1)])]}}])})],1)],1)],1)],1)],1)},s=[],i=n("bc3a"),r=n.n(i),a={name:"Notes",data:function(){return{items:[],fields:["author","title","content","applies_to_date","status","note_type","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},noteLink:function(t){return"notes/".concat(t.toString())},editLink:function(t){return"notes/".concat(t.toString(),"/edit")},showNote:function(t){var e=this.noteLink(t);this.$router.push({path:e})},editNote:function(t){var e=this.editLink(t);this.$router.push({path:e})},deleteNote:function(t){var e=this;r.a.post(this.$apiAdress+"/api/notes/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.message="Successfully deleted note.",e.showAlert(),e.getNotes()})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},createNote:function(){this.$router.push({path:"notes/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getNotes:function(){var t=this;r.a.get(this.$apiAdress+"/api/notes?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},mounted:function(){this.getNotes()}},c=a,u=(n("c607"),n("2877")),d=Object(u["a"])(c,o,s,!1,null,"96837882",null);e["default"]=d.exports},c607:function(t,e,n){"use strict";n("f2b9")},f2b9:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0a0e0906.e852bae1.js.map