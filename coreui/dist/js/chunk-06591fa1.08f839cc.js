(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06591fa1"],{"21a6":function(t,e,n){(function(n){var o,i,s;(function(n,r){i=[],o=r,s="function"===typeof o?o.apply(e,i):o,void 0===s||(t.exports=s)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){c(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function i(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(t,e,n){var a=r.URL||r.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?s(c):i(c.href)?o(t,e,n):s(c,c.target="_blank")):(c.href=a.createObjectURL(t),setTimeout((function(){a.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,r){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,r),n);else if(i(t))o(t,n,r);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout((function(){s(a)}))}}:function(t,e,n,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var s="application/octet-stream"===t.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||a)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},u.readAsDataURL(t)}else{var d=r.URL||r.webkitURL,f=d.createObjectURL(t);i?i.location=f:location.href=f,i=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});r.saveAs=c.saveAs=c,t.exports=c}))}).call(this,n("c8ba"))},"469e":function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.$emit("ajouter")}}},[t._v("Ajouter")]):t._e()},i=[],s={name:"AddButton",emits:["ajouter"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("ajouter")>=0&&(this.show=!0)}},r=s,a=n("2877"),c=Object(a["a"])(r,o,i,!1,null,null,null);e["a"]=c.exports},7714:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(e){return t.$emit("modifier")}}},[e("CIcon",{attrs:{name:"cil-pencil"}})],1):t._e()},i=[],s={name:"EditButton",emits:["modifier"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("modifier")>=0&&(this.show=!0)}},r=s,a=n("2877"),c=Object(a["a"])(r,o,i,!1,null,null,null);e["a"]=c.exports},7914:function(t,e,n){},b2d0:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{color:"success",disabled:t.successModal},on:{click:function(e){return t.exporter()}}},[t._v("Exporter")]):t._e()},i=[],s=n("21a6"),r={name:"ExportButton",props:["items","fields","title","showDefault"],data:function(){return{show:!1,successModal:!1}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var t=new Blob([this.convertToCSV(this.items)],{type:"text/csv;charset=utf-8"});s.saveAs(t,this.title+".csv"),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(t){t.forEach((function(e){Object.keys(t[0]).forEach((function(t){e[t]=e[t]?e[t].toString().trim():e[t]}))}));var e=[Object.keys(t[0])].concat(t);return e.map((function(t){return Object.values(t).join(";").toString()})).join("\n")}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("exporter")>=0&&(this.show=!0),this.showDefault&&(this.show=!0)}},a=r,c=n("2877"),l=Object(c["a"])(a,o,i,!1,null,null,null);e["a"]=l.exports},d84b:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(e){return t.$emit("supprimer")}}},[e("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()},i=[],s={name:"DeleteButton",emits:["supprimer"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("supprimer")>=0&&(this.show=!0)}},r=s,a=n("2877"),c=Object(a["a"])(r,o,i,!1,null,null,null);e["a"]=c.exports},d8fc:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",xl:"12"}},[e("transition",{attrs:{name:"slide"}},[e("CCard",[e("CCardHeader",[t._v(" Ecole "),e("div",{staticClass:"card-header-actions"},[e("AddButton",{on:{ajouter:function(e){return t.createEcole()}}}),t._v("  "),e("ExportButton",{attrs:{items:t.items,title:"Ecole",fields:t.fields}}),t._v("  ")],1)]),e("CCardBody",[e("CDataTable",{attrs:{hover:"",tableFilter:"",itemsPerPageSelect:"",sorter:"",items:t.items,fields:t.fields,"items-per-page":10,striped:!0,pagination:""},scopedSlots:t._u([{key:"code",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.code))])])]}},{key:"region",fn:function(n){var o=n.item;return[e("td",[e("label",{staticClass:"width-max-content"},[t._v(t._s(o.region.region))])])]}},{key:"province",fn:function(n){var o=n.item;return[e("td",[e("label",{staticClass:"width-max-content"},[t._v(t._s(o.province.province))])])]}},{key:"nom_structure",fn:function(n){var o=n.item;return[e("td",[e("strong",[e("label",{staticClass:"width-max-content"},[t._v(t._s(o.nom_structure))])])])]}},{key:"actions",fn:function(n){var o=n.item;return[e("td",[e("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[e("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(e){return t.showEcole(o.id)}}},[t._v("Détail")]),t._v("   "),e("EditButton",{on:{modifier:function(e){return t.editEcole(o.id)}}}),t._v("   "),e("DeleteButton",{on:{supprimer:function(e){return t.deleteEcole(o.id)}}})],1)])]}}])})],1)],1)],1)],1)],1)},i=[],s=n("bc3a"),r=n.n(s),a=n("b2d0"),c=n("469e"),l=n("7714"),u=n("d84b"),d={name:"Ecoles",components:{ExportButton:a["a"],AddButton:c["a"],EditButton:l["a"],DeleteButton:u["a"]},data:function(){return{items:[],fields:["id","region","province","nom_structure","lon","lat","statut","systeme",{key:"actions",label:"",_style:"min-width:1%",sorter:!1,filter:!1}],currentPage:1,perPage:5,totalRows:0,message:""}},computed:{},methods:{ecoleLink:function(t){return"ecoles/".concat(t.toString())},editLink:function(t){return"ecoles/".concat(t.toString(),"/edit")},showEcole:function(t){var e=this.ecoleLink(t);this.$router.push({path:e})},editEcole:function(t){var e=this.editLink(t);this.$router.push({path:e})},deleteEcole:function(t){var e=this;r.a.post(this.$apiAdress+"/api/ecoles/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.message="Successfully deleted ecole.",e.getEcoles()})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},createEcole:function(){this.$router.push({path:"ecoles/create"})},getEcoles:function(){var t=this;r.a.get(this.$apiAdress+"/api/ecoles?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.getEcoles()}},f=d,p=(n("dac0"),n("2877")),m=Object(p["a"])(f,o,i,!1,null,"f851e852",null);e["default"]=m.exports},dac0:function(t,e,n){"use strict";n("7914")}}]);
//# sourceMappingURL=chunk-06591fa1.08f839cc.js.map