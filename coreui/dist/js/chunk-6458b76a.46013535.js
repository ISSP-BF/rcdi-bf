(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6458b76a"],{"21a6":function(t,e,n){(function(n){var a,o,s;(function(n,i){o=[],a=i,s="function"===typeof a?a.apply(e,o):a,void 0===s||(t.exports=s)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function a(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){c(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,e,n){var r=i.URL||i.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?s(c):o(c.href)?a(t,e,n):s(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),n);else if(o(t))a(t,n,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){s(r)}))}}:function(t,e,n,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,n);var s="application/octet-stream"===t.type,c=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||s&&c||r)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},l.readAsDataURL(t)}else{var d=i.URL||i.webkitURL,f=d.createObjectURL(t);o?o.location=f:location.href=f,o=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});i.saveAs=c.saveAs=c,t.exports=c}))}).call(this,n("c8ba"))},"469e":function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.$emit("ajouter")}}},[t._v("Ajouter")]):t._e()},o=[],s={name:"AddButton",emits:["ajouter"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("ajouter")>=0&&(this.show=!0)}},i=s,r=n("2877"),c=Object(r["a"])(i,a,o,!1,null,null,null);e["a"]=c.exports},6841:function(t,e,n){},7714:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(e){return t.$emit("modifier")}}},[e("CIcon",{attrs:{name:"cil-pencil"}})],1):t._e()},o=[],s={name:"EditButton",emits:["modifier"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("modifier")>=0&&(this.show=!0)}},i=s,r=n("2877"),c=Object(r["a"])(i,a,o,!1,null,null,null);e["a"]=c.exports},b2d0:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{color:"success",disabled:t.successModal},on:{click:function(e){return t.exporter()}}},[t._v("Exporter")]):t._e()},o=[],s=n("21a6"),i={name:"ExportButton",props:["items","fields","title","showDefault"],data:function(){return{show:!1,successModal:!1}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var t=new Blob([this.convertToCSV(this.items)],{type:"text/csv;charset=utf-8"});s.saveAs(t,this.title+".csv"),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(t){t.forEach((function(e){Object.keys(t[0]).forEach((function(t){e[t]=e[t]?e[t].toString().trim():e[t]}))}));var e=[Object.keys(t[0])].concat(t);return e.map((function(t){return Object.values(t).join(";").toString()})).join("\n")}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("exporter")>=0&&(this.show=!0),this.showDefault&&(this.show=!0)}},r=i,c=n("2877"),u=Object(c["a"])(r,a,o,!1,null,null,null);e["a"]=u.exports},d84b:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(e){return t.$emit("supprimer")}}},[e("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()},o=[],s={name:"DeleteButton",emits:["supprimer"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("supprimer")>=0&&(this.show=!0)}},i=s,r=n("2877"),c=Object(r["a"])(i,a,o,!1,null,null,null);e["a"]=c.exports},e567:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("CRow",[e("CCol",{attrs:{col:"12",xl:"12"}},[e("transition",{attrs:{name:"slide"}},[e("CCard",[e("CCardHeader",[e("b",[t._v("La liste des actes de naissances")]),e("div",{staticClass:"card-header-actions"},[e("AddButton",{on:{ajouter:function(e){return t.createActeNaissance()}}}),t._v("  "),e("ExportButton",{attrs:{items:t.items,title:"Acte Naissances",fields:t.fields}}),t._v("    "),e("CButton",{attrs:{color:"warning",disabled:t.loading},on:{click:function(e){return t.exporterTout()}}},[t._v("Exporter Tout")])],1)]),e("CCardBody",[e("div",{staticClass:"float-justify custom-control-inline row"},[e("div",{staticClass:"col-lg-6 float-left"}),e("div",{staticClass:"col-lg-6 text-right"},[e("label",{staticClass:"custom-control-inline"},[t._v(" Elements par page ")]),e("CSelect",{staticClass:"custom-control custom-control-inline custom-radio",attrs:{value:t.perPage,options:t.perPageValues},on:{"update:value":function(e){t.perPage=e}}})],1)]),e("CDataTable",{attrs:{id:"table",hover:"",sorter:"",items:t.loadedItems,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,loading:t.loading,"sorter-value":t.sorterValue},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},"update:sorterValue":function(e){t.sorterValue=e},"update:sorter-value":function(e){t.sorterValue=e}},scopedSlots:t._u([{key:"numero_acte",fn:function(n){var a=n.item;return[e("td",[e("strong",[t._v(t._s(a.n_acte))])])]}},{key:"region",fn:function(n){var a=n.item;return[e("td",[e("label",[t._v(t._s(a.region))])])]}},{key:"province",fn:function(n){var a=n.item;return[e("td",[t._v(" "+t._s(a.province)+" ")])]}},{key:"commune",fn:function(n){var a=n.item;return[e("td",[t._v(" "+t._s(a.commune)+" ")])]}},{key:"date_declaration",fn:function(n){var a=n.item;return[e("td",[t._v(" "+t._s(t._f("formatDateShort")(a.date_declaration))+" ")])]}},{key:"sexe",fn:function(n){var a=n.item;return[e("td",[e("strong",[t._v(t._s("M"==a.sexe?"Homme":"Femme"))])])]}},{key:"date_naissance",fn:function(n){var a=n.item;return[e("td",[e("strong",[t._v(t._s(t._f("formatDateShort")(a.date_naissance)))])])]}},{key:"lieu_naissance_commune",fn:function(n){var a=n.item;return[e("td",[t._v(" "+t._s(a.lieu_naissance_commune)+" ")])]}},{key:"centre_sante_naissance",fn:function(n){var a=n.item;return[e("td",[t._v(" "+t._s(a.centre_sante_naissance)+" ")])]}},{key:"date_etablissement",fn:function(n){var a=n.item;return[e("td",[t._v(" "+t._s(t._f("formatDateShort")(a.date_etablissement))+" ")])]}},{key:"date_autorisation",fn:function(n){var a=n.item;return[e("td",[t._v(" "+t._s(t._f("formatDateShort")(a.date_autorisation))+" ")])]}},{key:"actions",fn:function(n){var a=n.item;return[e("td",[e("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[e("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(e){return t.showActeNaissance(a.id)}}},[t._v("Détail")]),t._v("   "),e("EditButton",{on:{modifier:function(e){return t.editActeNaissance(a.id)}}}),t._v("   "),e("DeleteButton",{on:{modifier:function(e){return t.deleteActeNaissance(a.id)}}})],1)])]}}])}),e("CPagination",{directives:[{name:"show",rawName:"v-show",value:t.pages>1,expression:"pages > 1"}],attrs:{pages:t.pages,"active-page":t.activePage},on:{"update:activePage":function(e){t.activePage=e},"update:active-page":function(e){t.activePage=e}}})],1)],1)],1)],1)],1)},o=[],s=n("bc3a"),i=n.n(s),r=n("b2d0"),c=n("469e"),u=n("7714"),l=n("d84b"),d=function(){var t=this,e=t._self._c;return t.show?e("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.$emit("afficherTout")}}},[t._v("Afficher tout")]):t._e()},f=[],p={name:"ViewAllButton",emits:["afficherTout"],data:function(){return{show:!1,successModal:!1}},mounted:function(){this.show=!0;var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("ajouter")>=0&&(this.show=!0)}},m=p,h=n("2877"),v=Object(h["a"])(m,d,f,!1,null,null,null),g=v.exports,_=n("21a6"),w={name:"ActeNaissances",components:{ExportButton:r["a"],AddButton:c["a"],EditButton:u["a"],DeleteButton:l["a"],ViewAllButton:g},data:function(){return{items:[],fields:["numero_acte","region","province","commune","date_declaration","sexe","date_naissance","lieu_naissance_commune","centre_sante_naissance","date_etablissement","actions"],perPageValues:[{value:"10",label:"10"},{value:"20",label:"20"},{value:"50",label:"50"},{value:"100",label:"100"},{value:"500",label:"500"},{value:"1000",label:"1000"}],totalRows:0,sorterValue:{column:null,asc:!0},message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1,perPage:20,sortBy:"",sortDesc:!1,activePage:1,loadedItems:[],loading:!1,tableFilterValue:null,pages:5}},watch:{reloadParams:function(){this.onTableChange()}},computed:{reloadParams:function(){return[this.sorterValue,this.columnFilterValue,this.tableFilterValue,this.activePage,this.perPage]}},methods:{getRowCount:function(t){return t.length},acteNaissanceLink:function(t){return"acte_naissances/".concat(t.toString())},editLink:function(t){return"acte_naissances/".concat(t.toString(),"/edit")},showActeNaissance:function(t){var e=this.acteNaissanceLink(t);this.$router.push({path:e})},editActeNaissance:function(t){var e=this.editLink(t);this.$router.push({path:e})},deleteActeNaissance:function(t){var e=this;i.a.post(this.$apiAdress+"/api/acte_naissances/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.$toasted.show("Acte de naissance a été supprimée avec succès",{type:"success"}),e.getActeNaissances()})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var n in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(n)&&(e.message+=t.response.data.errors[n][0]+"  ");e.$toasted.show(e.message,{type:"error"})}else console.log(t),e.$router.push({path:"/login"})}))},createActeNaissance:function(){this.$router.push({path:"acte_naissances/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},onTableChange:function(){this.loading=!0;var t=this;console.log(this.$apiAdress+"/api/acte_naissancespaginate/"+this.perPage+"/"+this.activePage+"/"+this.sorterValue.column+"/"+this.sorterValue.asc+"?token="+localStorage.getItem("api_token")),i.a.get(this.$apiAdress+"/api/acte_naissancespaginate/"+this.perPage+"/"+this.activePage+"/"+this.sorterValue.column+"/"+this.sorterValue.asc+"?token="+localStorage.getItem("api_token")).then((function(e){t.loading=!1,t.items=e.data.data,t.loadedItems=e.data.data,t.totalRows=e.data.total,t.pages=Math.ceil(e.data.total/t.perPage)})).catch((function(e){t.loading=!1,console.log(e)}))},exporterTout:function(){var t=this;this.loading=!0,i.a.get(this.$apiAdress+"/api/acte_naissances?token="+localStorage.getItem("api_token")).then((function(e){t.exporter(e.data),t.loading=!1})).catch((function(e){t.loading=!1,console.log(e)}))},exporter:function(t){if(this.loading=!0,t&&0!=t.length){var e=new Blob([this.convertToCSV(t)],{type:"text/csv;charset=utf-8"});_.saveAs(e,"Acte Naissances.csv"),this.loading=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(t){t.forEach((function(e){Object.keys(t[0]).forEach((function(t){e[t]=e[t]?e[t].toString().trim():e[t]}))}));var e=[Object.keys(t[0])].concat(t);return e.map((function(t){return Object.values(t).join(";").toString()})).join("\n")}},mounted:function(){this.onTableChange()}},b=w,y=(n("f604"),Object(h["a"])(b,a,o,!1,null,"6e184b5d",null));e["default"]=y.exports},f604:function(t,e,n){"use strict";n("6841")}}]);
//# sourceMappingURL=chunk-6458b76a.46013535.js.map