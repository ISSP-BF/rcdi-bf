(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{109:function(e,t,s){var n=s(437);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(9)(n,i);n.locals&&(e.exports=n.locals)},11:function(e,t,s){"use strict";var n=s(369),i={name:"ExportButton",props:["items","fields","title"],data:function(){return{show:!1,successModal:!1}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var e=new Blob([this.convertToCSV(this.items)],{type:"text/xls;charset=utf-8"});n.saveAs(e,this.title),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(e){return[Object.keys(e[0])].concat(e).map((function(e){return Object.values(e).toString()})).join("\n")}},mounted:function(){var e=localStorage.getItem("roles");null!=e&&(e=e.split(",")),null!=e&&e.indexOf("exporter")>=0&&(this.show=!0)}},o=s(1),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.show?s("CButton",{attrs:{color:"success",disabled:e.successModal},on:{click:function(t){return e.exporter()}}},[e._v("Exporter")]):e._e()}),[],!1,null,null,null);t.a=r.exports},12:function(e,t,s){"use strict";var n={name:"AddButton",emits:["ajouter"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var e=localStorage.getItem("roles");null!=e&&(e=e.split(",")),null!=e&&e.indexOf("ajouter")>=0&&(this.show=!0)}},i=s(1),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.show?s("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.$emit("ajouter")}}},[e._v("Ajouter")]):e._e()}),[],!1,null,null,null);t.a=o.exports},13:function(e,t,s){"use strict";var n={name:"EditButton",emits:["modifier"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var e=localStorage.getItem("roles");null!=e&&(e=e.split(",")),null!=e&&e.indexOf("modifier")>=0&&(this.show=!0)}},i=s(1),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.show?s("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(t){return e.$emit("modifier")}}},[s("CIcon",{attrs:{name:"cil-pencil"}})],1):e._e()}),[],!1,null,null,null);t.a=o.exports},14:function(e,t,s){"use strict";var n={name:"DeleteButton",emits:["supprimer"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var e=localStorage.getItem("roles");null!=e&&(e=e.split(",")),null!=e&&e.indexOf("supprimer")>=0&&(this.show=!0)}},i=s(1),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.show?s("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(t){return e.$emit("supprimer")}}},[s("CIcon",{attrs:{name:"cil-x-circle"}})],1):e._e()}),[],!1,null,null,null);t.a=o.exports},27:function(e,t,s){"use strict";var n=s(2),i=s.n(n),o={name:"ImportButton",components:{XlsCsvParser:s(180).XlsCsvParser},props:["fields","title","apiUrl"],data:function(){return{successModal:!1,show:!1,items:[],fields2:[],columns:[{name:"region",value:"region"},{name:"province",value:"province"},{name:"commune",value:"commune"},{name:"district",value:"district"},{name:"annee",value:"annee"},{name:"mois",value:"mois"},{name:"formation_sanitaire",value:"formation_sanitaire"},{name:"NbFemmeVueCPN",value:"NbFemmeVueCPN"},{name:"NbFemmeInscriteCPN1",value:"NbFemmeInscriteCPN1"},{name:"NbFemmeInscriteCPN1_Trim1",value:"NbFemmeInscriteCPN1_Trim1"},{name:"NbFemmeVueCPN4",value:"NbFemmeVueCPN4"},{name:"NbFemmeInscriteVueCPN_2Td",value:"NbFemmeInscriteVueCPN_2Td"},{name:"NbFemmeFer_Acide_Folique",value:"NbFemmeFer_Acide_Folique"},{name:"NbFemmeFer_Acide_Folique_CPN3",value:"NbFemmeFer_Acide_Folique_CPN3"},{name:"NbGrossesse_Refere",value:"NbGrossesse_Refere"},{name:"NbFemmeVueCPN_TPI3",value:"NbFemmeVueCPN_TPI3"},{name:"NbFemmeVueCPN_TPI3_MILDA",value:"NbFemmeVueCPN_TPI3_MILDA"}],help:"Les colonnes necessaires sont : region, province, commune, district, formation_sanitaire, mois, annee,\n                NbFemmeVueCPN, NbFemmeInscriteCPN1, NbFemmeInscriteCPN1_Trim1, NbFemmeVueCPN4, \n                NbFemmeInscriteVueCPN_2Td, NbFemmeFer_Acide_Folique, NbFemmeFer_Acide_Folique_CPN3, \n                NbGrossesse_Refere, NbFemmeVueCPN_TPI3 et NbFemmeVueCPN_TPI3_MILDA ",currentPage:1,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{onValidate:function(e){var t=this;this.results=e,this.items=[];for(var s=0;s<this.results[0].data.length;s++)this.items.push({id:s});this.results.map((function(e){var s=0,n=!0,i=!1,o=void 0;try{for(var r,a=t.items[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var l=r.value;"NA"==e.data[s]||"NULL"==e.data[s]||null==e.data[s]||null==e.data[s]?l[e.column]=null:l[e.column]=e.data[s],s++}}catch(e){i=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}}))},deleteData:function(e){this.items=this.items.filter((function(t){return t.id!==e}))},storeMany:function(){var e=this;console.log({items:e.items}),i.a.post(this.$apiAdress+"/api/"+e.apiUrl+"/storeMany?token="+localStorage.getItem("api_token"),{items:e.items}).then((function(t){e.items={},e.$toasted.show("Les données ont été importées",{type:"success"})})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var s in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(s)&&(e.message+=t.response.data.errors[s][0]+"  ");e.$toasted.show(e.message,{type:"error"})}else console.log(t),e.$router.push({path:"login"})}))}},mounted:function(){this.columns=[],this.fields2=[],this.help="Les colonnes necessaires sont :";var e=!0,t=!1,s=void 0;try{for(var n,i=this.fields[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var o=n.value;this.columns.push({name:o,value:o}),this.fields2.push(o),this.help=this.help+" "+o+","}}catch(e){t=!0,s=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw s}}this.fields2.push("actions");var r=localStorage.getItem("roles");null!=r&&(r=r.split(",")),null!=r&&r.indexOf("importer")>=0&&(this.show=!0)}},r=s(1),a=Object(r.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{display:"contents"}},[s("CModal",{staticStyle:{display:"contents"},attrs:{title:e.title,color:"success",size:"lg",show:e.successModal},on:{"update:show":function(t){e.successModal=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[s("CButton",{attrs:{color:"danger"},on:{click:function(t){e.successModal=!1}}},[e._v("Annuler")]),e._v(" "),e.items.length>0?s("CButton",{attrs:{size:"sm",color:"success"},on:{click:function(t){return e.storeMany()}}},[s("CIcon",{attrs:{name:"cil-x-circle"}}),e._v(" Importer")],1):e._e()]},proxy:!0}])},[s("CRow",[s("CCol",{attrs:{col:"12",xl:"12"}},[s("xls-csv-parser",{attrs:{columns:e.columns,help:e.help,lang:"fr"},on:{"on-validate":e.onValidate}})],1),e._v(" "),e.items.length>0?s("CCol",{attrs:{col:"12",xl:"12"}},[s("transition",{attrs:{name:"slide"}},[s("CDataTable",{attrs:{hover:"",sorter:"",items:e.items,fields:e.fields2},scopedSlots:e._u([{key:"actions",fn:function(t){var n=t.item;return[s("td",[s("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[e._v("\r\n                    \r\n                      "),s("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(t){return e.deleteData(n.id)}}})],1)])]}}],null,!1,1113930606)})],1)],1):e._e()],1)],1),e._v(" "),e.show?s("CButton",{attrs:{color:"warning"},on:{click:function(t){e.successModal=!0}}},[e._v("Importer")]):e._e(),e._v(" \r\n")],1)}),[],!1,null,null,null);t.a=a.exports},436:function(e,t,s){"use strict";var n=s(109);s.n(n).a},437:function(e,t,s){(e.exports=s(8)(!1)).push([e.i,"\n.card-body[data-v-26249376] table > tbody > tr > td {\r\n  cursor: pointer;\n}\n.width-max-content[data-v-26249376]{\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\n}\r\n",""])},843:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),o=s(11),r=s(12),a=s(13),l=s(14),u=s(27),c={name:"MorbilitePaludisme",components:{ExportButton:o.a,AddButton:r.a,EditButton:a.a,DeleteButton:l.a,ImportButton:u.a},data:function(){return{items:[],fields:["id","region","province","commune","district","formation_sanitaire","mois","annee","NbCas_Suspect_Palu","NbCas_PaluSimple_Confirme","NbCas_PaluSimple_Presume","NbCas_PaluGrave_Confirme","NbCas_PaluGrave_Presume","NbCas_Deces_PaluGrave","actions"],fieldsI:["region","province","commune","district","formation_sanitaire","mois","annee","NbCas_Suspect_Palu","NbCas_PaluSimple_Confirme","NbCas_PaluSimple_Presume","NbCas_PaluGrave_Confirme","NbCas_PaluGrave_Presume","NbCas_Deces_PaluGrave"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(e){return e.length},MorbilitePaludismeLink:function(e){return"morbilite_paludismes/".concat(e.toString())},editLink:function(e){return"morbilite_paludismes/".concat(e.toString(),"/edit")},showMorbilitePaludisme:function(e){var t=this.MorbilitePaludismeLink(e);this.$router.push({path:t})},editMorbilitePaludisme:function(e){var t=this.editLink(e);this.$router.push({path:t})},deleteMorbilitePaludisme:function(e){var t=this;i.a.post(this.$apiAdress+"/api/morbilite_paludismes/"+e+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(e){t.message="Successfully deleted Planification Familiale.",t.showAlert(),t.getMorbilitePaludisme()})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))},createMorbilitePaludisme:function(){this.$router.push({path:"morbilite_paludismes/create"})},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},getMorbilitePaludisme:function(){var e=this;i.a.get(this.$apiAdress+"/api/morbilite_paludismes?token="+localStorage.getItem("api_token")).then((function(t){e.items=t.data,console.log(t)})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},mounted:function(){this.getMorbilitePaludisme()}},m=(s(436),s(1)),d=Object(m.a)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("CRow",[s("CCol",{attrs:{col:"12",xl:"12"}},[s("transition",{attrs:{name:"slide"}},[s("CCard",[s("CCardHeader",[e._v("\n          Morbilite Paludismes\n          "),s("div",{staticClass:"card-header-actions"},[s("AddButton",{on:{ajouter:function(t){return e.createMorbilitePaludisme()}}}),e._v(" \n           "),s("ImportButton",{attrs:{title:"Importation données Morbilite Paludismes",fields:e.fieldsI,apiUrl:"morbilite_paludismes"}}),e._v(" \n           "),s("ExportButton",{attrs:{items:e.items,title:"MorbilitePaludisme",fields:e.fields}}),e._v(" \n          ")],1)]),e._v(" "),s("CCardBody",[s("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n            ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n          ")]),e._v(" "),s("CDataTable",{attrs:{hover:"",tableFilter:"",itemsPerPageSelect:"",sorter:"",items:e.items,fields:e.fields,"items-per-page":10,pagination:""},scopedSlots:e._u([{key:"formation_sanitaire",fn:function(t){var n=t.item;return[s("td",[s("label",{staticClass:"width-max-content"},[s("strong",[e._v(e._s(n.formation_sanitaire))])])])]}},{key:"region",fn:function(t){var n=t.item;return[s("td",[s("label",{staticClass:"width-max-content"},[e._v(e._s(n.region))])])]}},{key:"province",fn:function(t){var n=t.item;return[s("td",[s("label",{staticClass:"width-max-content"},[e._v(e._s(n.province))])])]}},{key:"commune",fn:function(t){var n=t.item;return[s("td",[s("label",{staticClass:"width-max-content"},[e._v(e._s(n.commune))])])]}},{key:"district",fn:function(t){var n=t.item;return[s("td",[s("label",{staticClass:"width-max-content"},[e._v(e._s(n.district))])])]}},{key:"actions",fn:function(t){var n=t.item;return[s("td",[s("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[s("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(t){return e.showMorbilitePaludisme(n.id)}}},[e._v("Détail")]),e._v("\n                 \n                "),s("EditButton",{on:{modifier:function(t){return e.editMorbilitePaludisme(n.id)}}}),e._v("\n                 \n                    "),s("DeleteButton",{on:{supprimer:function(t){return e.deleteMorbilitePaludisme(n.id)}}})],1)])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"26249376",null);t.default=d.exports}}]);