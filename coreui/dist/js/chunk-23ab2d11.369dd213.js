(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23ab2d11"],{"0e33":function(t,e,n){"use strict";n("cee3")},"21a6":function(t,e,n){(function(n){var o,i,a;(function(n,s){i=[],o=s,a="function"===typeof o?o.apply(e,i):o,void 0===a||(t.exports=a)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){c(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function i(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,n){var r=s.URL||s.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?a(c):i(c.href)?o(t,e,n):a(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,s){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,s),n);else if(i(t))o(t,n,s);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){a(r)}))}}:function(t,e,n,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var a="application/octet-stream"===t.type,c=/constructor/i.test(s.HTMLElement)||s.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&c||r)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},l.readAsDataURL(t)}else{var d=s.URL||s.webkitURL,m=d.createObjectURL(t);i?i.location=m:location.href=m,i=null,setTimeout((function(){d.revokeObjectURL(m)}),4e4)}});s.saveAs=c.saveAs=c,t.exports=c}))}).call(this,n("c8ba"))},34103:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",xl:"12"}},[e("transition",{attrs:{name:"slide"}},[e("CCard",[e("CCardHeader",[t._v(" Acte Mariages "),e("div",{staticClass:"card-header-actions"},[e("AddButton",{on:{ajouter:function(e){return t.createActeMariage()}}}),t._v("  "),e("ExportButton",{attrs:{items:t.items,title:"Acte Mariages",fields:t.fieldsI}}),t._v("  ")],1)]),e("CCardBody",[e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v(" ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+" ")]),e("CDataTable",{attrs:{hover:"",tableFilter:"",itemsPerPageSelect:"",sorter:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"numero_acte",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(o.n_acte))])])]}},{key:"region",fn:function(n){var o=n.item;return[e("td",[e("label",[t._v(t._s(o.region))])])]}},{key:"province",fn:function(n){var o=n.item;return[e("td",[t._v(" "+t._s(o.province)+" ")])]}},{key:"commune",fn:function(n){var o=n.item;return[e("td",[t._v(" "+t._s(o.commune)+" ")])]}},{key:"date_declaration",fn:function(n){var o=n.item;return[e("td",[t._v(" "+t._s(t._f("formatDateShort")(o.date_declaration))+" ")])]}},{key:"sexe",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s("M"==o.sexe?"Homme":"Femme"))])])]}},{key:"date_mariage",fn:function(n){var o=n.item;return[e("td",[e("strong",[t._v(t._s(t._f("formatDateShort")(o.date_mariage)))])])]}},{key:"lieu_mariage_commune",fn:function(n){var o=n.item;return[e("td",[t._v(" "+t._s(o.lieu_mariage_commune)+" ")])]}},{key:"centre_sante_mariage",fn:function(n){var o=n.item;return[e("td",[t._v(" "+t._s(o.centre_sante_mariage)+" ")])]}},{key:"date_etablissement",fn:function(n){var o=n.item;return[e("td",[t._v(" "+t._s(t._f("formatDateShort")(o.date_etablissement))+" ")])]}},{key:"date_autorisation",fn:function(n){var o=n.item;return[e("td",[t._v(" "+t._s(t._f("formatDateShort")(o.date_autorisation))+" ")])]}},{key:"actions",fn:function(n){var o=n.item;return[e("td",[e("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[e("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(e){return t.showActeMariage(o.id)}}},[t._v("Détail")]),t._v("   "),e("EditButton",{on:{modifier:function(e){return t.editActeMariage(o.id)}}}),t._v("   "),e("DeleteButton",{on:{supprimer:function(e){return t.deleteActeMariage(o.id)}}})],1)])]}}])})],1)],1)],1)],1)],1)},i=[],a=n("bc3a"),s=n.n(a),r=n("b2d0"),c=n("469e"),u=n("7714"),l=n("d84b"),d={name:"ActeMariages",components:{ExportButton:r["a"],AddButton:c["a"],EditButton:u["a"],DeleteButton:l["a"]},data:function(){return{items:[],fields:["n_acte","region","province","commune","date_etablissement","date_naissance_conjoint","age_mariage_conjoint","sexe_conjoint","hors_commune_conjoint","commune_naissance_conjoint","localite_naissance_conjoint","domicile_conjoint","profession_conjoint","date_naissance_conjointe","age_mariage_conjointe","sexe_conjointe","hors_commune_conjointe","commune_naissance_conjointe","localite_naissance_conjointe","domicile_conjointe","profession_conjointe","regime_matrimonial","option_matrimonial","actions"],fieldsI:["n_acte","region","province","commune","date_etablissement","date_naissance_conjoint","age_mariage_conjoint","sexe_conjoint","hors_commune_conjoint","commune_naissance_conjoint","localite_naissance_conjoint","domicile_conjoint","profession_conjoint","date_naissance_conjointe","age_mariage_conjointe","sexe_conjointe","hors_commune_conjointe","commune_naissance_conjointe","localite_naissance_conjointe","domicile_conjointe","profession_conjointe","regime_matrimonial","option_matrimonial"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},acteMariageLink:function(t){return"acte_mariages/".concat(t.toString())},editLink:function(t){return"acte_mariages/".concat(t.toString(),"/edit")},showActeMariage:function(t){var e=this.acteMariageLink(t);this.$router.push({path:e})},editActeMariage:function(t){var e=this.editLink(t);this.$router.push({path:e})},deleteActeMariage:function(t){var e=this;s.a.post(this.$apiAdress+"/api/acte_mariages/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.message="Successfully deleted acteMariage.",e.showAlert(),e.getActeMariages()})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},createActeMariage:function(){this.$router.push({path:"acte_mariages/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getActeMariages:function(){var t=this;s.a.get(this.$apiAdress+"/api/acte_mariages?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data,setTimeout((function(){$(".table").DataTable({pagingType:"full_numbers",pageLength:5,processing:!0,dom:"Bfrtip",buttons:["copy","csv","print"]})}),10)})).catch((function(t){console.log(t)}))}},mounted:function(){this.getActeMariages()}},m=d,f=(n("0e33"),n("2877")),_=Object(f["a"])(m,o,i,!1,null,"616808a4",null);e["default"]=_.exports},"469e":function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.$emit("ajouter")}}},[t._v("Ajouter")]):t._e()},i=[],a={name:"AddButton",emits:["ajouter"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("ajouter")>=0&&(this.show=!0)}},s=a,r=n("2877"),c=Object(r["a"])(s,o,i,!1,null,null,null);e["a"]=c.exports},7714:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(e){return t.$emit("modifier")}}},[e("CIcon",{attrs:{name:"cil-pencil"}})],1):t._e()},i=[],a={name:"EditButton",emits:["modifier"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("modifier")>=0&&(this.show=!0)}},s=a,r=n("2877"),c=Object(r["a"])(s,o,i,!1,null,null,null);e["a"]=c.exports},b2d0:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{color:"success",disabled:t.successModal},on:{click:function(e){return t.exporter()}}},[t._v("Exporter")]):t._e()},i=[],a=n("21a6"),s={name:"ExportButton",props:["items","fields","title","showDefault"],data:function(){return{show:!1,successModal:!1}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var t=new Blob([this.convertToCSV(this.items)],{type:"text/csv;charset=utf-8"});a.saveAs(t,this.title+".csv"),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(t){t.forEach((function(e){Object.keys(t[0]).forEach((function(t){e[t]=e[t]?e[t].toString().trim():e[t]}))}));var e=[Object.keys(t[0])].concat(t);return e.map((function(t){return Object.values(t).join(";").toString()})).join("\n")}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("exporter")>=0&&(this.show=!0),this.showDefault&&(this.show=!0)}},r=s,c=n("2877"),u=Object(c["a"])(r,o,i,!1,null,null,null);e["a"]=u.exports},cee3:function(t,e,n){},d84b:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(e){return t.$emit("supprimer")}}},[e("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()},i=[],a={name:"DeleteButton",emits:["supprimer"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("supprimer")>=0&&(this.show=!0)}},s=a,r=n("2877"),c=Object(r["a"])(s,o,i,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-23ab2d11.369dd213.js.map