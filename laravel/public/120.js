(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{883:function(e,n,t){"use strict";t.r(n);var s=t(1),o=t.n(s),a={name:"CreateMenuElement",data:function(){return{roles:"",menuroles:[],menuelement:[],message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},getData:function(){var e=this;o.a.get(this.$apiAdress+"/api/menu/element/show?token="+localStorage.getItem("api_token")+"&id="+e.$route.params.id).then((function(n){e.menuelement=n.data.menuElement,e.menuroles=n.data.menuroles,e.roles="";for(var t=0;t<e.menuroles.length;t++)t>0&&(e.roles+=", "),e.roles+=e.menuroles[t].role_name})).catch((function(n){console.log(n),e.$router.push({path:"/login"})}))}},mounted:function(){this.getData()}},r=t(0),l=Object(r.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",{attrs:{"no-header":""}},[t("CCardBody",[t("h3",[e._v("\n          Visualisation Menu Element\n        ")]),e._v(" "),t("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(n){e.dismissCountDown=n}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),t("h4",[e._v("Menu")]),e._v("\n        "+e._s(e.menuelement.menu_name)+"\n        "),t("h4",[e._v("User Roles")]),e._v("\n        "+e._s(e.roles)+"\n        "),t("h4",[e._v("Name")]),e._v("\n        "+e._s(e.menuelement.name)+"\n        "),t("h4",[e._v("Type")]),e._v("\n        "+e._s(e.menuelement.slug)+"\n        "),t("h4",[e._v("Href")]),e._v("\n        "+e._s(e.menuelement.href)+"\n        "),t("h4",[e._v("Dropdown parent")]),e._v("\n        "+e._s(e.menuelement.parent_name)+"\n        "),t("h4",[e._v("Icon")]),e._v("\n        "+e._s(e.menuelement.icon)+"\n        "),t("br"),t("br"),e._v(" "),t("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=l.exports}}]);