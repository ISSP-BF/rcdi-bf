(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5993ef44"],{"4f8f":function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t._self._c;return s("CRow",[s("CCol",{attrs:{col:"12",xl:"12"}},[s("transition",{attrs:{name:"slide"}},[s("CCard",[s("CCardHeader",[t._v(" Professions "),s("div",{staticClass:"card-header-actions"},[s("CButton",{attrs:{color:"primary"},on:{click:function(s){return t.createProfession()}}},[t._v("Ajouter")])],1)]),s("CCardBody",[s("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(s){t.dismissCountDown=s}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),s("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"metier",fn:function(o){var e=o.item;return[s("td",[t._v(" "+t._s(e.metier)+" ")])]}},{key:"actions",fn:function(o){var e=o.item;return[s("td",[s("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[s("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(s){return t.showProfession(e.id)}}},[t._v("Détail")]),t._v("   "),s("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(s){return t.editProfession(e.id)}}},[s("CIcon",{attrs:{name:"cil-pencil"}})],1),t._v("   "),t.you!=e.id?s("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(s){return t.deleteProfession(e.id)}}},[s("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()],1)])]}}])})],1)],1)],1)],1)],1)},n=[],i=o("bc3a"),r=o.n(i),a={name:"Professions",data:function(){return{items:[],fields:["metier","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},professionLink:function(t){return"professions/".concat(t.toString())},editLink:function(t){return"professions/".concat(t.toString(),"/edit")},showProfession:function(t){var s=this.professionLink(t);this.$router.push({path:s})},editProfession:function(t){var s=this.editLink(t);this.$router.push({path:s})},deleteProfession:function(t){var s=this;r.a.post(this.$apiAdress+"/api/professions/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){s.message="Successfully deleted profession.",s.showAlert(),s.getProfessions()})).catch((function(t){console.log(t),s.$router.push({path:"/login"})}))},createProfession:function(){this.$router.push({path:"professions/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getProfessions:function(){var t=this;r.a.get(this.$apiAdress+"/api/professions?token="+localStorage.getItem("api_token")).then((function(s){t.items=s.data})).catch((function(s){console.log(s),t.$router.push({path:"/login"})}))}},mounted:function(){this.getProfessions()}},c=a,u=(o("b8b4"),o("2877")),f=Object(u["a"])(c,e,n,!1,null,"69947b84",null);s["default"]=f.exports},b8b4:function(t,s,o){"use strict";o("f97a")},f97a:function(t,s,o){}}]);
//# sourceMappingURL=chunk-5993ef44.eb3cfdd4.js.map