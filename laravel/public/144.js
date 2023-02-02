(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{791:function(e,o,n){"use strict";n.r(o);var t=n(2),i=n.n(t),r={name:"EditProvince",props:{caption:{type:String,default:"Province id"}},data:function(){return{province:{code:"",province:"",region_id:"",cheflieu:"",lon:"",lat:""},regions:[],message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},store:function(){var e=this;console.log(e.province),i.a.post(this.$apiAdress+"/api/provinces?token="+localStorage.getItem("api_token"),e.province).then((function(o){e.province={code:"",province:"",region_id:null,lon:"",lat:"",cheflieu:""},e.message="Successfully created province.",e.showAlert()})).catch((function(o){if("The given data was invalid."==o.response.data.message){for(var n in e.message="",o.response.data.errors)o.response.data.errors.hasOwnProperty(n)&&(e.message+=o.response.data.errors[n][0]+"  ");e.showAlert()}else console.log(o),e.$router.push({path:"login"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}},mounted:function(){var e=this;i.a.get(this.$apiAdress+"/api/provinces/create?token="+localStorage.getItem("api_token")).then((function(o){e.regions=o.data,e.province.region_id=e.regions.length>0?e.regions[0].value:null})).catch((function(o){console.log(o),e.$router.push({path:"login"})}))}},s=n(1),c=Object(s.a)(r,(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("CRow",[n("CCol",{attrs:{col:"12",lg:"6"}},[n("CCard",{attrs:{"no-header":""}},[n("CCardBody",[n("h3",[e._v("\n          Ajouter Province\n        ")]),e._v(" "),n("CAlert",{attrs:{show:e.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(o){e.dismissCountDown=o}}},[e._v("\n          ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n        ")]),e._v(" "),n("CInput",{attrs:{label:"Code",type:"text",placeholder:"Code"},model:{value:e.province.code,callback:function(o){e.$set(e.province,"code",o)},expression:"province.code"}}),e._v(" "),n("CSelect",{attrs:{label:"Région",value:e.province.region_id,plain:!0,options:e.regions},on:{"update:value":function(o){return e.$set(e.province,"region_id",o)}}}),e._v(" "),n("CInput",{attrs:{label:"Province",type:"text",placeholder:"province"},model:{value:e.province.province,callback:function(o){e.$set(e.province,"province",o)},expression:"province.province"}}),e._v(" "),n("CInput",{attrs:{label:"Chef lieu",type:"text",placeholder:"Chef lieu"},model:{value:e.province.cheflieu,callback:function(o){e.$set(e.province,"cheflieu",o)},expression:"province.cheflieu"}}),e._v(" "),n("CInput",{attrs:{label:"Longitude",type:"text",placeholder:"Longitude"},model:{value:e.province.lon,callback:function(o){e.$set(e.province,"lon",o)},expression:"province.lon"}}),e._v(" "),n("CInput",{attrs:{label:"Latitude",type:"text",placeholder:"Latitude"},model:{value:e.province.lat,callback:function(o){e.$set(e.province,"lat",o)},expression:"province.lat"}}),e._v(" "),n("CButton",{attrs:{color:"primary"},on:{click:function(o){return e.store()}}},[e._v("Ajouter")]),e._v("  \n        "),n("CButton",{attrs:{color:"secondary"},on:{click:e.goBack}},[e._v("Retour")])],1)],1)],1)],1)}),[],!1,null,null,null);o.default=c.exports}}]);