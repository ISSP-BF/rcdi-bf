(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9b159f4"],{"21a6":function(t,e,n){(function(n){var o,s,i;(function(n,a){s=[],o=a,i="function"===typeof o?o.apply(e,s):o,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){c(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function s(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,n){var r=a.URL||a.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):s(c.href)?o(t,e,n):i(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,a){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,a),n);else if(s(t))o(t,n,a);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){i(r)}))}}:function(t,e,n,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var i="application/octet-stream"===t.type,c=/constructor/i.test(a.HTMLElement)||a.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||i&&c||r)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=t:location=t,s=null},l.readAsDataURL(t)}else{var d=a.URL||a.webkitURL,f=d.createObjectURL(t);s?s.location=f:location.href=f,s=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});a.saveAs=c.saveAs=c,t.exports=c}))}).call(this,n("c8ba"))},"41d5":function(t,e,n){"use strict";n("af8a")},"469e":function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.$emit("ajouter")}}},[t._v("Ajouter")]):t._e()},s=[],i={name:"AddButton",emits:["ajouter"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("ajouter")>=0&&(this.show=!0)}},a=i,r=n("2877"),c=Object(r["a"])(a,o,s,!1,null,null,null);e["a"]=c.exports},7714:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(e){return t.$emit("modifier")}}},[e("CIcon",{attrs:{name:"cil-pencil"}})],1):t._e()},s=[],i={name:"EditButton",emits:["modifier"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("modifier")>=0&&(this.show=!0)}},a=i,r=n("2877"),c=Object(r["a"])(a,o,s,!1,null,null,null);e["a"]=c.exports},af8a:function(t,e,n){},b2d0:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{color:"success",disabled:t.successModal},on:{click:function(e){return t.exporter()}}},[t._v("Exporter")]):t._e()},s=[],i=n("21a6"),a={name:"ExportButton",props:["items","fields","title","showDefault"],data:function(){return{show:!1,successModal:!1}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var t=new Blob([this.convertToCSV(this.items)],{type:"text/csv;charset=utf-8"});i.saveAs(t,this.title+".csv"),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(t){t.forEach((function(e){Object.keys(t[0]).forEach((function(t){e[t]=e[t]?e[t].toString().trim():e[t]}))}));var e=[Object.keys(t[0])].concat(t);return e.map((function(t){return Object.values(t).join(";").toString()})).join("\n")}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("exporter")>=0&&(this.show=!0),this.showDefault&&(this.show=!0)}},r=a,c=n("2877"),u=Object(c["a"])(r,o,s,!1,null,null,null);e["a"]=u.exports},cf4b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",xl:"12"}},[e("transition",{attrs:{name:"slide"}},[e("CCard",[e("CCardHeader",[e("b",[t._v("Liste des Tableaux de board personnalisés")]),e("div",{staticClass:"card-header-actions"},[e("AddButton",{on:{ajouter:function(e){return t.createdashboard()}}}),t._v("  "),e("ExportButton",{attrs:{items:t.items,title:"DashBoards Personnalisés",fields:t.fields}}),t._v("  ")],1)]),e("CCardBody",[e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),e("CDataTable",{attrs:{hover:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"dashboard",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.libelle))])])]}},{key:"description",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.description))])])]}},{key:"actions",fn:function(n){var o=n.item;return[e("td",[e("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[e("CButton",{attrs:{color:"success"},on:{click:function(e){return t.visualiser(o.id)}}},[e("CIcon",{attrs:{name:"cil-speedometer"}}),t._v("Visualiser")],1),t._v("   "),e("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(e){return t.redirectionElement(o.id)}}},[t._v("Les requêtes ")]),t._v("   "),e("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(e){return t.showdashboard(o.id)}}},[t._v("Détail")]),t._v("   "),e("EditButton",{on:{modifier:function(e){return t.editdashboard(o.id)}}}),t._v("   "),e("DeleteButton",{on:{supprimer:function(e){return t.deletedashboard(o.id)}}})],1)])]}}])})],1)],1)],1)],1)],1)},s=[],i=n("bc3a"),a=n.n(i),r=n("b2d0"),c=n("469e"),u=n("7714"),l=n("d84b"),d={name:"dashboards",components:{ExportButton:r["a"],AddButton:c["a"],EditButton:u["a"],DeleteButton:l["a"]},data:function(){return{items:[],fields:["id","dashboard","description","actions"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{visualiser:function(t){this.$router.push({path:"dashboard-personalise/"+t})},getRowCount:function(t){return t.length},dashboardLink:function(t){return"dashboards/".concat(t.toString())},editLink:function(t){return"dashboards/".concat(t.toString(),"/edit")},showdashboard:function(t){var e=this.dashboardLink(t);this.$router.push({path:e})},redirectionElement:function(t){this.$router.push({path:"".concat(t.toString(),"/dashboard-items")})},editdashboard:function(t){var e=this.editLink(t);this.$router.push({path:e})},deletedashboard:function(t){var e=this;a.a.post(this.$apiAdress+"/api/dashboards/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.$toasted.show(t.data.message,{type:"success"}),e.getdashboards()})).catch((function(t){console.log(t),e.$toasted.show(t.data.message,{type:"danger"}),e.$router.push({path:"/login"})}))},createdashboard:function(){this.$router.push({path:"dashboards/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getdashboards:function(){var t=this;a.a.get(this.$apiAdress+"/api/dashboards?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.getdashboards()}},f=d,h=(n("41d5"),n("2877")),p=Object(h["a"])(f,o,s,!1,null,"65fb2475",null);e["default"]=p.exports},d84b:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(e){return t.$emit("supprimer")}}},[e("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()},s=[],i={name:"DeleteButton",emits:["supprimer"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("supprimer")>=0&&(this.show=!0)}},a=i,r=n("2877"),c=Object(r["a"])(a,o,s,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-b9b159f4.1f36936d.js.map