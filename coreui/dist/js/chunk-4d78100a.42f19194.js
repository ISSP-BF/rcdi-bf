(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d78100a"],{"02ec":function(t,i,n){},a17b:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t._self._c;return i("CRow",[i("CCol",{attrs:{col:"12",xl:"12"}},[i("transition",{attrs:{name:"slide"}},[i("CCard",[i("CCardHeader",[t._v(" Districts "),i("div",{staticClass:"card-header-actions"},[i("CButton",{attrs:{color:"primary"},on:{click:function(i){return t.createDistrict()}}},[t._v("Ajouter")])],1)]),i("CCardBody",[i("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(i){t.dismissCountDown=i}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),i("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"code",fn:function(n){var s=n.item;return[i("td",[i("strong",[t._v(t._s(s.code))])])]}},{key:"region",fn:function(n){var s=n.item;return[i("td",[t._v(" "+t._s(s.region)+" ")])]}},{key:"province",fn:function(n){var s=n.item;return[i("td",[t._v(" "+t._s(s.province)+" ")])]}},{key:"nom_district",fn:function(n){var s=n.item;return[i("td",[i("strong",[t._v(t._s(s.nom_district))])])]}},{key:"nom_majore",fn:function(n){var s=n.item;return[i("td",[i("strong",[t._v(t._s(s.nom_majore))])])]}},{key:"lon",fn:function(n){var s=n.item;return[i("td",[t._v(" "+t._s(s.lon)+" ")])]}},{key:"lat",fn:function(n){var s=n.item;return[i("td",[t._v(" "+t._s(s.lat)+" ")])]}},{key:"superficie",fn:function(n){var s=n.item;return[i("td",[t._v(" "+t._s(s.superficie)+" ")])]}},{key:"actions",fn:function(n){var s=n.item;return[i("td",[i("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[i("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(i){return t.showDistrict(s.id)}}},[t._v("Détail")]),t._v("   "),i("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(i){return t.editDistrict(s.id)}}},[i("CIcon",{attrs:{name:"cil-pencil"}})],1),t._v("   "),t.you!=s.id?i("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(i){return t.deleteDistrict(s.id)}}},[i("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()],1)])]}}])})],1)],1)],1)],1)],1)},e=[],o=n("bc3a"),r=n.n(o),c={name:"Districts",data:function(){return{items:[],fields:["code","region","province","nom_district","nom_majore","lon","lat","superficie","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},districtLink:function(t){return"districts/".concat(t.toString())},editLink:function(t){return"districts/".concat(t.toString(),"/edit")},showDistrict:function(t){var i=this.districtLink(t);this.$router.push({path:i})},editDistrict:function(t){var i=this.editLink(t);this.$router.push({path:i})},deleteDistrict:function(t){var i=this;r.a.post(this.$apiAdress+"/api/districts/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){i.message="Successfully deleted district.",i.showAlert(),i.getDistricts()})).catch((function(t){console.log(t),i.$router.push({path:"/login"})}))},createDistrict:function(){this.$router.push({path:"districts/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getDistricts:function(){var t=this;r.a.get(this.$apiAdress+"/api/districts?token="+localStorage.getItem("api_token")).then((function(i){t.items=i.data})).catch((function(i){console.log(i),t.$router.push({path:"/login"})}))}},mounted:function(){this.getDistricts()}},a=c,u=(n("b6a1"),n("2877")),d=Object(u["a"])(a,s,e,!1,null,"cb585268",null);i["default"]=d.exports},b6a1:function(t,i,n){"use strict";n("02ec")}}]);
//# sourceMappingURL=chunk-4d78100a.42f19194.js.map