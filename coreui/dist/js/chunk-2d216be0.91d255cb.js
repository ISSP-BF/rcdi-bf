(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216be0"],{c481:function(e,i,n){"use strict";n.r(i);var t=function(){var e=this,i=e._self._c;return i("CRow",[i("CCol",{attrs:{col:"12",lg:"8"}},[i("CCard",{attrs:{"no-header":""}},[i("CCardBody",[i("h3",[e._v(" Ajouter un indicateur ")]),i("div",{staticClass:"row"},[i("CSelect",{staticClass:"col-lg-4",attrs:{label:"Region",value:e.indicateur.region_id,plain:!0,options:e.regions},on:{"update:value":function(i){return e.$set(e.indicateur,"region_id",i)}},model:{value:e.indicateur.region_id,callback:function(i){e.$set(e.indicateur,"region_id",i)},expression:"indicateur.region_id"}}),i("CSelect",{staticClass:"col-lg-4",attrs:{label:"Province",value:e.indicateur.province_id,plain:!0,options:e.provinces},on:{"update:value":function(i){return e.$set(e.indicateur,"province_id",i)}},model:{value:e.indicateur.province_id,callback:function(i){e.$set(e.indicateur,"province_id",i)},expression:"indicateur.province_id"}}),i("CSelect",{staticClass:"col-lg-4",attrs:{label:"Commune",value:e.indicateur.commune_id,plain:!0,options:e.communes},on:{"update:value":function(i){return e.$set(e.indicateur,"commune_id",i)}},model:{value:e.indicateur.commune_id,callback:function(i){e.$set(e.indicateur,"commune_id",i)},expression:"indicateur.commune_id"}})],1),i("div",{staticClass:"row"},[i("CInput",{staticClass:"col-lg-6",attrs:{label:"groupe",type:"text",placeholder:"groupe"},model:{value:e.indicateur.groupe,callback:function(i){e.$set(e.indicateur,"groupe",i)},expression:"indicateur.groupe"}}),i("CInput",{staticClass:"col-lg-6",attrs:{label:"indicateur",type:"text",placeholder:"indicateur"},model:{value:e.indicateur.indicateur,callback:function(i){e.$set(e.indicateur,"indicateur",i)},expression:"indicateur.indicateur"}}),i("CInput",{staticClass:"col-lg-6",attrs:{label:"niveau1",type:"text",placeholder:"niveau1"},model:{value:e.indicateur.niveau1,callback:function(i){e.$set(e.indicateur,"niveau1",i)},expression:"indicateur.niveau1"}}),i("CInput",{staticClass:"col-lg-6",attrs:{label:"niveau2",type:"text",placeholder:"niveau2"},model:{value:e.indicateur.niveau2,callback:function(i){e.$set(e.indicateur,"niveau2",i)},expression:"indicateur.niveau2"}}),i("CInput",{staticClass:"col-lg-6",attrs:{label:"mois",type:"text",placeholder:"mois"},model:{value:e.indicateur.mois,callback:function(i){e.$set(e.indicateur,"mois",i)},expression:"indicateur.mois"}}),i("CInput",{staticClass:"col-lg-6",attrs:{label:"annee",type:"text",placeholder:"annee"},model:{value:e.indicateur.annee,callback:function(i){e.$set(e.indicateur,"annee",i)},expression:"indicateur.annee"}}),i("CInput",{staticClass:"col-lg-6",attrs:{label:"indice",type:"text",placeholder:"indice"},model:{value:e.indicateur.indice,callback:function(i){e.$set(e.indicateur,"indice",i)},expression:"indicateur.indice"}}),i("CInput",{staticClass:"col-lg-6",attrs:{label:"source",type:"text",placeholder:"source"},model:{value:e.indicateur.source,callback:function(i){e.$set(e.indicateur,"source",i)},expression:"indicateur.source"}})],1),i("CButton",{attrs:{color:"primary"},on:{click:function(i){return e.store()}}},[e._v("Ajouter")]),e._v("   "),i("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)},a=[],o=n("bc3a"),c=n.n(o),r={name:"Create Indicateur",props:{caption:{type:String,default:"ActeNaissance id"}},data:function(){return{indicateur:{region_id:null,province_id:null,commune_id:null,groupe:null,indicateur:null,niveau1:null,niveau2:null,mois:null,annee:null,indice:null,source:null},formationSanitaires:[],regions:[],provinces:[],communes:[],message:""}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;console.log(e.indicateur),c.a.post(this.$apiAdress+"/api/indicateurs-old?token="+localStorage.getItem("api_token"),e.indicateur).then((function(i){e.indicateur={},e.$toasted.show("L'indicateur a été créé avec succès",{type:"success"}),e.goBack()})).catch((function(i){if("The given data was invalid."==i.response.data.message){for(var n in e.message="",i.response.data.errors)i.response.data.errors.hasOwnProperty(n)&&(e.message+=i.response.data.errors[n][0]+"  ");e.$toasted.show(e.message,{type:"error"})}else console.log(i),e.$router.push({path:"login"})}))}},mounted:function(){var e=this;c.a.get(this.$apiAdress+"/api/indicateurs-old/create?token="+localStorage.getItem("api_token")).then((function(i){e.regions=i.data.regions,e.provinces=i.data.provinces,e.communes=i.data.communes,e.formationSanitaires=i.data.formationSanitaires,e.indicateur.region_id=e.regions.length>0?e.regions[0].value:null,e.indicateur.province_id=e.provinces.length>0?e.provinces[0].value:null,e.indicateur.commune_id=e.communes.length>0?e.communes[0].value:null,e.indicateur.formation_sanitaire_id=e.formationSanitaires.length>0?e.formationSanitaires[0].value:null})).catch((function(i){console.log(i),e.$router.push({path:"login"})}))}},l=r,u=n("2877"),s=Object(u["a"])(l,t,a,!1,null,null,null);i["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d216be0.91d255cb.js.map