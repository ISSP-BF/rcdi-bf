(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{120:function(t,e,n){var o=n(464);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,i);o.locals&&(t.exports=o.locals)},364:function(t,e,n){(function(n){var o,i,s;i=[],void 0===(s="function"==typeof(o=function(){"use strict";function e(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){r(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(t,n,a){var r=s.URL||s.webkitURL,c=document.createElement("a");n=n||t.name||"download",c.download=n,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):o(c.href)?e(t,n,a):i(c,c.target="_blank")):(c.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,s){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,s),n);else if(o(t))e(t,n,s);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout((function(){i(a)}))}}:function(t,n,o,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,o);var r="application/octet-stream"===t.type,c=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&c||a)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},u.readAsDataURL(t)}else{var d=s.URL||s.webkitURL,f=d.createObjectURL(t);i?i.location=f:location.href=f,i=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});s.saveAs=r.saveAs=r,t.exports=r})?o.apply(e,i):o)||(t.exports=s)}).call(this,n(55))},463:function(t,e,n){"use strict";var o=n(120);n.n(o).a},464:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,"\n.card-body[data-v-2faeab12] table > tbody > tr > td {\r\n  cursor: pointer;\n}\r\n",""])},8:function(t,e,n){"use strict";var o=n(364),i={name:"ExportButton",props:["items","fields","title","showDefault"],data:function(){return{show:!1,successModal:!1}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var t=new Blob([this.convertToCSV(this.items)],{type:"text/csv;charset=utf-8"});o.saveAs(t,this.title+".csv"),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(t){return[Object.keys(t[0])].concat(t).map((function(t){return Object.values(t).join(";").toString()})).join("\n")}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("exporter")>=0&&(this.show=!0),this.showDefault&&(this.show=!0)}},s=n(0),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("CButton",{attrs:{color:"success",disabled:t.successModal},on:{click:function(e){return t.exporter()}}},[t._v("Exporter")]):t._e()}),[],!1,null,null,null);e.a=a.exports},862:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),s={name:"FichierVillages",components:{ExportButton:n(8).a},data:function(){return{items:[],dataVisualisation:[],fields:["CODE_REGION","REGION","CODE_PROVINCE","PROVINCE","CODE_COMMUNE","COMMUNE","MILIEU_RESIDENCE","codeAppel","Village_Secteur","m5_new"],fieldsI:["CODE_REGION","REGION","CODE_PROVINCE","PROVINCE","CODE_COMMUNE","COMMUNE","MILIEU_RESIDENCE","codeAppel","Village_Secteur","m5_new"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getFichierVillages:function(){var t=this;i.a.get(this.$apiAdress+"/api/fichier-villages?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data,t.dataVisualisation=[],t.items.forEach((function(e){var n=t.dataVisualisation.find((function(t){return t.m5_new.includes(e.m5_new)}));n?n[e.Indicateur]=e.Valeur:((n=e)[e.Indicateur]=e.Valeur,t.dataVisualisation.push(n)),t.fields&&t.fields.findIndex((function(t){return t==e.Indicateur}))<0&&(t.fields.push(e.Indicateur),t.fieldsI.push(e.Indicateur))}))})).catch((function(t){console.log(t)}))}},mounted:function(){this.getFichierVillages()}},a=(n(463),n(0)),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CRow",[n("CCol",{attrs:{col:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardHeader",[n("h3",[n("strong",[t._v("Fichier Village")])]),t._v(" "),n("h6",[t._v("Source : RGPH 2019")]),t._v(" "),n("div",{staticClass:"card-header-actions"},[n("ExportButton",{attrs:{items:t.dataVisualisation,title:"Fichier village",fields:t.fields,showDefault:!0}}),t._v(" \n           ")],1)]),t._v(" "),n("CCardBody",[n("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v("\n            ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n          ")]),t._v(" "),n("CDataTable",{attrs:{hover:"",items:t.dataVisualisation,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"PROVINCE",fn:function(e){var o=e.item;return[n("td",[n("strong",[t._v(t._s(o.PROVINCE))])])]}},{key:"COMMUNE",fn:function(e){var o=e.item;return[n("td",[n("strong",[t._v(t._s(o.COMMUNE))])])]}},{key:"REGION",fn:function(e){var o=e.item;return[n("td",[n("strong",[t._v(t._s(o.REGION))])])]}},{key:"Indicateur",fn:function(e){var o=e.item;return[n("td",[n("strong",[t._v(t._s(o.Indicateur))])])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"2faeab12",null);e.default=r.exports}}]);