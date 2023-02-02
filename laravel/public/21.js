(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{11:function(t,e,n){"use strict";var s=n(369),i={name:"ExportButton",props:["items","fields","title"],data:function(){return{show:!1,successModal:!1}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var t=new Blob([this.convertToCSV(this.items)],{type:"text/xls;charset=utf-8"});s.saveAs(t,this.title),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(t){return[Object.keys(t[0])].concat(t).map((function(t){return Object.values(t).toString()})).join("\n")}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("exporter")>=0&&(this.show=!0)}},o=n(1),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("CButton",{attrs:{color:"success",disabled:t.successModal},on:{click:function(e){return t.exporter()}}},[t._v("Exporter")]):t._e()}),[],!1,null,null,null);e.a=r.exports},111:function(t,e,n){var s=n(441);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(9)(s,i);s.locals&&(t.exports=s.locals)},12:function(t,e,n){"use strict";var s={name:"AddButton",emits:["ajouter"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("ajouter")>=0&&(this.show=!0)}},i=n(1),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("CButton",{attrs:{color:"primary"},on:{click:function(e){return t.$emit("ajouter")}}},[t._v("Ajouter")]):t._e()}),[],!1,null,null,null);e.a=o.exports},13:function(t,e,n){"use strict";var s={name:"EditButton",emits:["modifier"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("modifier")>=0&&(this.show=!0)}},i=n(1),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(e){return t.$emit("modifier")}}},[n("CIcon",{attrs:{name:"cil-pencil"}})],1):t._e()}),[],!1,null,null,null);e.a=o.exports},14:function(t,e,n){"use strict";var s={name:"DeleteButton",emits:["supprimer"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var t=localStorage.getItem("roles");null!=t&&(t=t.split(",")),null!=t&&t.indexOf("supprimer")>=0&&(this.show=!0)}},i=n(1),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(e){return t.$emit("supprimer")}}},[n("CIcon",{attrs:{name:"cil-x-circle"}})],1):t._e()}),[],!1,null,null,null);e.a=o.exports},27:function(t,e,n){"use strict";var s=n(2),i=n.n(s),o={name:"ImportButton",components:{XlsCsvParser:n(180).XlsCsvParser},props:["fields","title","apiUrl"],data:function(){return{successModal:!1,show:!1,items:[],fields2:[],columns:[{name:"region",value:"region"},{name:"province",value:"province"},{name:"commune",value:"commune"},{name:"district",value:"district"},{name:"annee",value:"annee"},{name:"mois",value:"mois"},{name:"formation_sanitaire",value:"formation_sanitaire"},{name:"NbFemmeVueCPN",value:"NbFemmeVueCPN"},{name:"NbFemmeInscriteCPN1",value:"NbFemmeInscriteCPN1"},{name:"NbFemmeInscriteCPN1_Trim1",value:"NbFemmeInscriteCPN1_Trim1"},{name:"NbFemmeVueCPN4",value:"NbFemmeVueCPN4"},{name:"NbFemmeInscriteVueCPN_2Td",value:"NbFemmeInscriteVueCPN_2Td"},{name:"NbFemmeFer_Acide_Folique",value:"NbFemmeFer_Acide_Folique"},{name:"NbFemmeFer_Acide_Folique_CPN3",value:"NbFemmeFer_Acide_Folique_CPN3"},{name:"NbGrossesse_Refere",value:"NbGrossesse_Refere"},{name:"NbFemmeVueCPN_TPI3",value:"NbFemmeVueCPN_TPI3"},{name:"NbFemmeVueCPN_TPI3_MILDA",value:"NbFemmeVueCPN_TPI3_MILDA"}],help:"Les colonnes necessaires sont : region, province, commune, district, formation_sanitaire, mois, annee,\n                NbFemmeVueCPN, NbFemmeInscriteCPN1, NbFemmeInscriteCPN1_Trim1, NbFemmeVueCPN4, \n                NbFemmeInscriteVueCPN_2Td, NbFemmeFer_Acide_Folique, NbFemmeFer_Acide_Folique_CPN3, \n                NbGrossesse_Refere, NbFemmeVueCPN_TPI3 et NbFemmeVueCPN_TPI3_MILDA ",currentPage:1,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{onValidate:function(t){var e=this;this.results=t,this.items=[];for(var n=0;n<this.results[0].data.length;n++)this.items.push({id:n});this.results.map((function(t){var n=0,s=!0,i=!1,o=void 0;try{for(var r,a=e.items[Symbol.iterator]();!(s=(r=a.next()).done);s=!0){var l=r.value;"NA"==t.data[n]||"NULL"==t.data[n]||null==t.data[n]||null==t.data[n]?l[t.column]=null:l[t.column]=t.data[n],n++}}catch(t){i=!0,o=t}finally{try{s||null==a.return||a.return()}finally{if(i)throw o}}}))},deleteData:function(t){this.items=this.items.filter((function(e){return e.id!==t}))},storeMany:function(){var t=this;console.log({items:t.items}),i.a.post(this.$apiAdress+"/api/"+t.apiUrl+"/storeMany?token="+localStorage.getItem("api_token"),{items:t.items}).then((function(e){t.items={},t.$toasted.show("Les données ont été importées",{type:"success"})})).catch((function(e){if("The given data was invalid."==e.response.data.message){for(var n in t.message="",e.response.data.errors)e.response.data.errors.hasOwnProperty(n)&&(t.message+=e.response.data.errors[n][0]+"  ");t.$toasted.show(t.message,{type:"error"})}else console.log(e),t.$router.push({path:"login"})}))}},mounted:function(){this.columns=[],this.fields2=[],this.help="Les colonnes necessaires sont :";var t=!0,e=!1,n=void 0;try{for(var s,i=this.fields[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var o=s.value;this.columns.push({name:o,value:o}),this.fields2.push(o),this.help=this.help+" "+o+","}}catch(t){e=!0,n=t}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}this.fields2.push("actions");var r=localStorage.getItem("roles");null!=r&&(r=r.split(",")),null!=r&&r.indexOf("importer")>=0&&(this.show=!0)}},r=n(1),a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"contents"}},[n("CModal",{staticStyle:{display:"contents"},attrs:{title:t.title,color:"success",size:"lg",show:t.successModal},on:{"update:show":function(e){t.successModal=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("CButton",{attrs:{color:"danger"},on:{click:function(e){t.successModal=!1}}},[t._v("Annuler")]),t._v(" "),t.items.length>0?n("CButton",{attrs:{size:"sm",color:"success"},on:{click:function(e){return t.storeMany()}}},[n("CIcon",{attrs:{name:"cil-x-circle"}}),t._v(" Importer")],1):t._e()]},proxy:!0}])},[n("CRow",[n("CCol",{attrs:{col:"12",xl:"12"}},[n("xls-csv-parser",{attrs:{columns:t.columns,help:t.help,lang:"fr"},on:{"on-validate":t.onValidate}})],1),t._v(" "),t.items.length>0?n("CCol",{attrs:{col:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("CDataTable",{attrs:{hover:"",sorter:"",items:t.items,fields:t.fields2},scopedSlots:t._u([{key:"actions",fn:function(e){var s=e.item;return[n("td",[n("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[t._v("\r\n                    \r\n                      "),n("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(e){return t.deleteData(s.id)}}})],1)])]}}],null,!1,1113930606)})],1)],1):t._e()],1)],1),t._v(" "),t.show?n("CButton",{attrs:{color:"warning"},on:{click:function(e){t.successModal=!0}}},[t._v("Importer")]):t._e(),t._v(" \r\n")],1)}),[],!1,null,null,null);e.a=a.exports},440:function(t,e,n){"use strict";var s=n(111);n.n(s).a},441:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.card-body[data-v-0d5d0538] table > tbody > tr > td {\r\n  cursor: pointer;\n}\n.width-max-content[data-v-0d5d0538]{\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\n}\r\n",""])},851:function(t,e,n){"use strict";n.r(e);var s=n(2),i=n.n(s),o=n(11),r=n(12),a=n(13),l=n(14),u=n(27),c={name:"SystemeInformationSanitaire",components:{ExportButton:o.a,AddButton:r.a,EditButton:a.a,DeleteButton:l.a,ImportButton:u.a},data:function(){return{items:[],fields:["id","region","province","commune","district","formation_sanitaire","mois","annee","type_rapport","rapport_attendu","rapport_recu","rapport_recu_temps","actions"],fieldsI:["region","province","commune","district","formation_sanitaire","mois","annee","type_rapport","rapport_attendu","rapport_recu","rapport_recu_temps"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(t){return t.length},SystemeInformationSanitaireLink:function(t){return"systeme_information_sanitaires/".concat(t.toString())},editLink:function(t){return"systeme_information_sanitaires/".concat(t.toString(),"/edit")},showSystemeInformationSanitaire:function(t){var e=this.SystemeInformationSanitaireLink(t);this.$router.push({path:e})},editSystemeInformationSanitaire:function(t){var e=this.editLink(t);this.$router.push({path:e})},deleteSystemeInformationSanitaire:function(t){var e=this;i.a.post(this.$apiAdress+"/api/systeme_information_sanitaires/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){e.message="Successfully deleted Systeme Information Sanitaire.",e.showAlert(),e.getSystemeInformationSanitaire()})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},createSystemeInformationSanitaire:function(){this.$router.push({path:"systeme_information_sanitaires/create"})},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getSystemeInformationSanitaire:function(){var t=this;i.a.get(this.$apiAdress+"/api/systeme_information_sanitaires?token="+localStorage.getItem("api_token")).then((function(e){t.items=e.data,console.log(e)})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},mounted:function(){this.getSystemeInformationSanitaire()}},m=(n(440),n(1)),d=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CRow",[n("CCol",{attrs:{col:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardHeader",[t._v("\n          Systeme Information Sanitaires\n          "),n("div",{staticClass:"card-header-actions"},[n("AddButton",{on:{ajouter:function(e){return t.createSystemeInformationSanitaire()}}}),t._v(" \n           "),n("ImportButton",{attrs:{title:"Importation données Systeme Information Sanitaires",fields:t.fieldsI,apiUrl:"systeme_information_sanitaires"}}),t._v(" \n           "),n("ExportButton",{attrs:{items:t.items,title:"SystemeInformationSanitaire",fields:t.fields}}),t._v(" \n          ")],1)]),t._v(" "),n("CCardBody",[n("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(e){t.dismissCountDown=e}}},[t._v("\n            ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n          ")]),t._v(" "),n("CDataTable",{attrs:{hover:"",tableFilter:"",itemsPerPageSelect:"",sorter:"",items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"formation_sanitaire",fn:function(e){var s=e.item;return[n("td",[n("label",{staticClass:"width-max-content"},[n("strong",[t._v(t._s(s.formation_sanitaire))])])])]}},{key:"region",fn:function(e){var s=e.item;return[n("td",[n("label",{staticClass:"width-max-content"},[t._v(t._s(s.region))])])]}},{key:"province",fn:function(e){var s=e.item;return[n("td",[n("label",{staticClass:"width-max-content"},[t._v(t._s(s.province))])])]}},{key:"commune",fn:function(e){var s=e.item;return[n("td",[n("label",{staticClass:"width-max-content"},[t._v(t._s(s.commune))])])]}},{key:"district",fn:function(e){var s=e.item;return[n("td",[n("label",{staticClass:"width-max-content"},[t._v(t._s(s.district))])])]}},{key:"actions",fn:function(e){var s=e.item;return[n("td",[n("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[n("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(e){return t.showSystemeInformationSanitaire(s.id)}}},[t._v("Détail")]),t._v("\n                 \n                "),n("EditButton",{on:{modifier:function(e){return t.editSystemeInformationSanitaire(s.id)}}}),t._v("\n                 \n                    "),n("DeleteButton",{on:{supprimer:function(e){return t.deleteSystemeInformationSanitaire(s.id)}}})],1)])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"0d5d0538",null);e.default=d.exports}}]);