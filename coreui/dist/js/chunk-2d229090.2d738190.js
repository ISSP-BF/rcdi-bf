(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229090"],{dc72:function(e,a,o){"use strict";o.r(a);var r=function(){var e,a=this,o=a._self._c;return o("CRow",[o("CCol",{attrs:{col:"12",lg:"6"}},[o("CCard",[o("CCardHeader",[a._v(" Donnee id: "+a._s(a.$route.params.id)+" ")]),o("CCardBody",[o("p",[a._v("Indicateur : "+a._s(a.donnee.indicateur.libelle))]),o("p",[a._v("Description : "+a._s(a.donnee.description))]),o("p",[a._v("Groupe : "+a._s(a.donnee.indicateur.groupe))]),o("p",[a._v("Sous Groupe : "+a._s(a.donnee.indicateur.sous_groupe))]),o("p",[a._v("Sous indicateur : "+a._s(a.donnee.sous_indicateur))]),o("p",[a._v("Période : "+a._s(a.donnee.periode))]),o("p",[a._v("Valeur de la période : "+a._s(null===(e=a.donnee)||void 0===e?void 0:e.periode_value_ok))]),o("p",[a._v("Valeur : "+a._s(a.donnee.valeur))]),o("p",[a._v("Annee : "+a._s(a.donnee.annee))]),o("p",[a._v("Source : "+a._s(a.donnee.source))]),o("p",[a._v("Dernier modificateur : "+a._s(a.donnee.updated_user))]),o("p",[a._v("Créateur : "+a._s(a.donnee.created_user))]),o("CButton",{attrs:{color:"primary"},on:{click:a.goBack}},[a._v("Retour")])],1)],1)],1)],1)},n=[],l=o("bc3a"),i=o.n(l),t={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{donnee:[]}},methods:{goBack:function(){this.$router.go(-1)},affichePeriode:function(e,a){switch(e){case"TRIMESTRIEL":this.choixPeriodes=[{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"}];break;case"MENSUEL":this.choixPeriodes=[{value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},{value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},{value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"}];break;case"SEMESTRIEL":this.choixPeriodes=[{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}];break;case"ANNUEL":this.choixPeriodes=[];break;default:break}if(this.choixPeriodes.length>0){var o=this.choixPeriodes.find((function(e){return e.value==a}));o&&(this.donnee.periode_value_ok=o.label)}}},mounted:function(){var e=this;i.a.get(this.$apiAdress+"/api/donnees/"+e.$route.params.id+"?token="+localStorage.getItem("api_token")).then((function(a){e.donnee=a.data,e.affichePeriode(e.donnee.periode,e.donnee.periode_value),console.log(e.donnee)})).catch((function(a){console.log(a),e.$router.push({path:"/login"})}))}},u=t,s=o("2877"),d=Object(s["a"])(u,r,n,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d229090.2d738190.js.map