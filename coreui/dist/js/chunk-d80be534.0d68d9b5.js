(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d80be534"],{"6ca8":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",xl:"12"}},[e("transition",{attrs:{name:"slide"}},[e("CCard",[e("CCardHeader",[e("h4",[t._v("Détail "+t._s(t.form.name))])]),e("CCardBody",t._l(t.columns,(function(o){return e("div",{key:o.id},["default"==o.type?e("div",[t._v(" "+t._s(o.name)+": "),e("strong",[t._v(t._s(o.value))])]):"file"==o.type?e("div",[e("a",{staticClass:"btn btn-primary",attrs:{href:o.value,target:"_blank"}},[t._v("Open file")])]):e("div",[e("img",{staticClass:"img-mini",attrs:{src:o.value}})])])})),0),e("CCardFooter",[e("CButton",{attrs:{color:"secondary"},on:{click:t.goBack}},[t._v("Retour")])],1)],1)],1)],1)],1)},a=[],s=o("bc3a"),r=o.n(s),i={name:"ResourceDetails",data:function(){return{form:{},columns:[]}},watch:{},computed:{},methods:{goBack:function(){this.$router.go(-1)},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getResource:function(){var t=this;r.a.get(this.$apiAdress+"/api/resource/"+t.$route.params.bread+"/resource/"+t.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(e){t.form=e.data.form,t.columns=e.data.columns})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},mounted:function(){this.getResource()}},c=i,u=(o("7ee8"),o("2877")),l=Object(u["a"])(c,n,a,!1,null,"c443d1b2",null);e["default"]=l.exports},"7ee8":function(t,e,o){"use strict";o("ab67")},ab67:function(t,e,o){}}]);
//# sourceMappingURL=chunk-d80be534.0d68d9b5.js.map