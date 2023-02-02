(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{103:function(e,t,n){var s=n(425);"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(s,o);s.locals&&(e.exports=s.locals)},11:function(e,t,n){"use strict";var s=n(369),o={name:"ExportButton",props:["items","fields","title"],data:function(){return{show:!1,successModal:!1}},methods:{exporter:function(){if(this.successModal=!0,this.items&&0!=this.items.length){var e=new Blob([this.convertToCSV(this.items)],{type:"text/xls;charset=utf-8"});s.saveAs(e,this.title),this.successModal=!1}else this.$toasted.show("Pas de données",{type:"warning"})},convertToCSV:function(e){return[Object.keys(e[0])].concat(e).map((function(e){return Object.values(e).toString()})).join("\n")}},mounted:function(){var e=localStorage.getItem("roles");null!=e&&(e=e.split(",")),null!=e&&e.indexOf("exporter")>=0&&(this.show=!0)}},i=n(1),a=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("CButton",{attrs:{color:"success",disabled:e.successModal},on:{click:function(t){return e.exporter()}}},[e._v("Exporter")]):e._e()}),[],!1,null,null,null);t.a=a.exports},12:function(e,t,n){"use strict";var s={name:"AddButton",emits:["ajouter"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var e=localStorage.getItem("roles");null!=e&&(e=e.split(",")),null!=e&&e.indexOf("ajouter")>=0&&(this.show=!0)}},o=n(1),i=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.$emit("ajouter")}}},[e._v("Ajouter")]):e._e()}),[],!1,null,null,null);t.a=i.exports},13:function(e,t,n){"use strict";var s={name:"EditButton",emits:["modifier"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var e=localStorage.getItem("roles");null!=e&&(e=e.split(",")),null!=e&&e.indexOf("modifier")>=0&&(this.show=!0)}},o=n(1),i=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("CButton",{attrs:{size:"sm",color:"primary"},on:{click:function(t){return e.$emit("modifier")}}},[n("CIcon",{attrs:{name:"cil-pencil"}})],1):e._e()}),[],!1,null,null,null);t.a=i.exports},14:function(e,t,n){"use strict";var s={name:"DeleteButton",emits:["supprimer"],data:function(){return{show:!1,successModal:!1}},mounted:function(){var e=localStorage.getItem("roles");null!=e&&(e=e.split(",")),null!=e&&e.indexOf("supprimer")>=0&&(this.show=!0)}},o=n(1),i=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(t){return e.$emit("supprimer")}}},[n("CIcon",{attrs:{name:"cil-x-circle"}})],1):e._e()}),[],!1,null,null,null);t.a=i.exports},27:function(e,t,n){"use strict";var s=n(2),o=n.n(s),i={name:"ImportButton",components:{XlsCsvParser:n(180).XlsCsvParser},props:["fields","title","apiUrl"],data:function(){return{successModal:!1,show:!1,items:[],fields2:[],columns:[{name:"region",value:"region"},{name:"province",value:"province"},{name:"commune",value:"commune"},{name:"district",value:"district"},{name:"annee",value:"annee"},{name:"mois",value:"mois"},{name:"formation_sanitaire",value:"formation_sanitaire"},{name:"NbFemmeVueCPN",value:"NbFemmeVueCPN"},{name:"NbFemmeInscriteCPN1",value:"NbFemmeInscriteCPN1"},{name:"NbFemmeInscriteCPN1_Trim1",value:"NbFemmeInscriteCPN1_Trim1"},{name:"NbFemmeVueCPN4",value:"NbFemmeVueCPN4"},{name:"NbFemmeInscriteVueCPN_2Td",value:"NbFemmeInscriteVueCPN_2Td"},{name:"NbFemmeFer_Acide_Folique",value:"NbFemmeFer_Acide_Folique"},{name:"NbFemmeFer_Acide_Folique_CPN3",value:"NbFemmeFer_Acide_Folique_CPN3"},{name:"NbGrossesse_Refere",value:"NbGrossesse_Refere"},{name:"NbFemmeVueCPN_TPI3",value:"NbFemmeVueCPN_TPI3"},{name:"NbFemmeVueCPN_TPI3_MILDA",value:"NbFemmeVueCPN_TPI3_MILDA"}],help:"Les colonnes necessaires sont : region, province, commune, district, formation_sanitaire, mois, annee,\n                NbFemmeVueCPN, NbFemmeInscriteCPN1, NbFemmeInscriteCPN1_Trim1, NbFemmeVueCPN4, \n                NbFemmeInscriteVueCPN_2Td, NbFemmeFer_Acide_Folique, NbFemmeFer_Acide_Folique_CPN3, \n                NbGrossesse_Refere, NbFemmeVueCPN_TPI3 et NbFemmeVueCPN_TPI3_MILDA ",currentPage:1,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{onValidate:function(e){var t=this;this.results=e,this.items=[];for(var n=0;n<this.results[0].data.length;n++)this.items.push({id:n});this.results.map((function(e){var n=0,s=!0,o=!1,i=void 0;try{for(var a,r=t.items[Symbol.iterator]();!(s=(a=r.next()).done);s=!0){var l=a.value;"NA"==e.data[n]||"NULL"==e.data[n]||null==e.data[n]||null==e.data[n]?l[e.column]=null:l[e.column]=e.data[n],n++}}catch(e){o=!0,i=e}finally{try{s||null==r.return||r.return()}finally{if(o)throw i}}}))},deleteData:function(e){this.items=this.items.filter((function(t){return t.id!==e}))},storeMany:function(){var e=this;console.log({items:e.items}),o.a.post(this.$apiAdress+"/api/"+e.apiUrl+"/storeMany?token="+localStorage.getItem("api_token"),{items:e.items}).then((function(t){e.items={},e.$toasted.show("Les données ont été importées",{type:"success"})})).catch((function(t){if("The given data was invalid."==t.response.data.message){for(var n in e.message="",t.response.data.errors)t.response.data.errors.hasOwnProperty(n)&&(e.message+=t.response.data.errors[n][0]+"  ");e.$toasted.show(e.message,{type:"error"})}else console.log(t),e.$router.push({path:"login"})}))}},mounted:function(){this.columns=[],this.fields2=[],this.help="Les colonnes necessaires sont :";var e=!0,t=!1,n=void 0;try{for(var s,o=this.fields[Symbol.iterator]();!(e=(s=o.next()).done);e=!0){var i=s.value;this.columns.push({name:i,value:i}),this.fields2.push(i),this.help=this.help+" "+i+","}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}this.fields2.push("actions");var a=localStorage.getItem("roles");null!=a&&(a=a.split(",")),null!=a&&a.indexOf("importer")>=0&&(this.show=!0)}},a=n(1),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"contents"}},[n("CModal",{staticStyle:{display:"contents"},attrs:{title:e.title,color:"success",size:"lg",show:e.successModal},on:{"update:show":function(t){e.successModal=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[n("CButton",{attrs:{color:"danger"},on:{click:function(t){e.successModal=!1}}},[e._v("Annuler")]),e._v(" "),e.items.length>0?n("CButton",{attrs:{size:"sm",color:"success"},on:{click:function(t){return e.storeMany()}}},[n("CIcon",{attrs:{name:"cil-x-circle"}}),e._v(" Importer")],1):e._e()]},proxy:!0}])},[n("CRow",[n("CCol",{attrs:{col:"12",xl:"12"}},[n("xls-csv-parser",{attrs:{columns:e.columns,help:e.help,lang:"fr"},on:{"on-validate":e.onValidate}})],1),e._v(" "),e.items.length>0?n("CCol",{attrs:{col:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("CDataTable",{attrs:{hover:"",sorter:"",items:e.items,fields:e.fields2},scopedSlots:e._u([{key:"actions",fn:function(t){var s=t.item;return[n("td",[n("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[e._v("\r\n                    \r\n                      "),n("CButton",{attrs:{size:"sm",color:"danger"},on:{click:function(t){return e.deleteData(s.id)}}})],1)])]}}],null,!1,1113930606)})],1)],1):e._e()],1)],1),e._v(" "),e.show?n("CButton",{attrs:{color:"warning"},on:{click:function(t){e.successModal=!0}}},[e._v("Importer")]):e._e(),e._v(" \r\n")],1)}),[],!1,null,null,null);t.a=r.exports},424:function(e,t,n){"use strict";var s=n(103);n.n(s).a},425:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,"\n.card-body[data-v-c70bd9da] table > tbody > tr > td {\r\n  cursor: pointer;\n}\n.width-max-content[data-v-c70bd9da]{\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\n}\r\n",""])},819:function(e,t,n){"use strict";n.r(t);var s=n(2),o=n.n(s),i=n(11),a=n(12),r=n(13),l=n(14),u=n(27),c={name:"ConsultationPrenatales",components:{ExportButton:i.a,AddButton:a.a,EditButton:r.a,DeleteButton:l.a,ImportButton:u.a},data:function(){return{successModal:!1,items:[],fields:["id","region","province","commune","district","formation_sanitaire","annee","mois","NbFemmeVueCPN","NbFemmeInscriteCPN1","NbFemmeInscriteCPN1_Trim1","NbFemmeVueCPN4","NbFemmeInscriteVueCPN_2Td","NbFemmeFer_Acide_Folique","NbFemmeFer_Acide_Folique_CPN3","NbGrossesse_Refere","NbFemmeVueCPN_TPI3","NbFemmeVueCPN_TPI3_MILDA","actions"],fieldsI:["region","province","commune","district","formation_sanitaire","annee","mois","NbFemmeVueCPN","NbFemmeInscriteCPN1","NbFemmeInscriteCPN1_Trim1","NbFemmeVueCPN4","NbFemmeInscriteVueCPN_2Td","NbFemmeFer_Acide_Folique","NbFemmeFer_Acide_Folique_CPN3","NbGrossesse_Refere","NbFemmeVueCPN_TPI3","NbFemmeVueCPN_TPI3_MILDA"],currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},computed:{},methods:{getRowCount:function(e){return e.length},consultationPrenataleLink:function(e){return"consultation_prenatales/".concat(e.toString())},editLink:function(e){return"consultation_prenatales/".concat(e.toString(),"/edit")},showConsultationPrenatale:function(e){var t=this.consultationPrenataleLink(e);this.$router.push({path:t})},editConsultationPrenatale:function(e){var t=this.editLink(e);this.$router.push({path:t})},deleteConsultationPrenatale:function(e){var t=this;o.a.post(this.$apiAdress+"/api/consultation_prenatales/"+e+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(e){t.message="Successfully deleted consultationPrenatale.",t.showAlert(),t.getConsultationPrenatales()})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))},createConsultationPrenatale:function(){this.$router.push({path:"consultation_prenatales/create"})},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},getConsultationPrenatales:function(){var e=this;o.a.get(this.$apiAdress+"/api/consultation_prenatales?token="+localStorage.getItem("api_token")).then((function(t){e.items=t.data})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},mounted:function(){this.getConsultationPrenatales()}},m=(n(424),n(1)),d=Object(m.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CRow",[n("CCol",{attrs:{col:"12",xl:"12"}},[n("transition",{attrs:{name:"slide"}},[n("CCard",[n("CCardHeader",[e._v("\n          Consultation Prenatales\n          "),n("div",{staticClass:"card-header-actions"},[n("AddButton",{on:{ajouter:function(t){return e.createConsultationPrenatale()}}}),e._v(" \n           "),n("ImportButton",{attrs:{title:"Importation données consultation prénatale",fields:e.fieldsI,apiUrl:"consultation_prenatales"}}),e._v(" \n           "),n("ExportButton",{attrs:{items:e.items,title:"ConsultationPrenatale",fields:e.fieldsI}}),e._v(" \n          ")],1)]),e._v(" "),n("CCardBody",[n("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n            ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n          ")]),e._v(" "),n("CDataTable",{attrs:{hover:"",tableFilter:"",itemsPerPageSelect:"",sorter:"",items:e.items,fields:e.fields,"items-per-page":10,pagination:""},scopedSlots:e._u([{key:"formation_sanitaire",fn:function(t){var s=t.item;return[n("td",[n("label",{staticClass:"width-max-content"},[n("strong",[e._v(e._s(s.formation_sanitaire))])])])]}},{key:"region",fn:function(t){var s=t.item;return[n("td",[n("label",{staticClass:"width-max-content"},[e._v(e._s(s.region))])])]}},{key:"province",fn:function(t){var s=t.item;return[n("td",[n("label",{staticClass:"width-max-content"},[e._v(e._s(s.province))])])]}},{key:"commune",fn:function(t){var s=t.item;return[n("td",[n("label",{staticClass:"width-max-content"},[e._v(e._s(s.commune))])])]}},{key:"district",fn:function(t){var s=t.item;return[n("td",[n("label",{staticClass:"width-max-content"},[e._v(e._s(s.district))])])]}},{key:"actions",fn:function(t){var s=t.item;return[n("td",[n("div",{staticClass:"card-header-actions",staticStyle:{display:"flex"}},[n("CButton",{attrs:{color:"secondary",size:"sm"},on:{click:function(t){return e.showConsultationPrenatale(s.id)}}},[e._v("Détail")]),e._v("\n                 \n                "),n("EditButton",{on:{modifier:function(t){return e.editConsultationPrenatale(s.id)}}}),e._v("\n                 \n                    "),n("DeleteButton",{on:{supprimer:function(t){return e.deleteConsultationPrenatale(s.id)}}})],1)])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"c70bd9da",null);t.default=d.exports}}]);