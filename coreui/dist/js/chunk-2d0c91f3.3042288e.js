(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c91f3"],{5893:function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e._self._c;return s("CRow",[s("CCol",{attrs:{col:"12",lg:"6"}},[s("CCard",{attrs:{"no-header":""}},[s("CCardBody",[s("CForm",[s("template",{slot:"header"},[e._v(" Mon profil ")]),s("CInput",{attrs:{type:"text",label:"Nom",placeholder:"Nom"},model:{value:e.user.name,callback:function(s){e.$set(e.user,"name",s)},expression:"user.name"}}),s("CInput",{attrs:{type:"text",label:"Prénom(s)",placeholder:"Prénom(s)"},model:{value:e.user.firstname,callback:function(s){e.$set(e.user,"firstname",s)},expression:"user.firstname"}}),s("CInput",{attrs:{type:"text",label:"Fonction",placeholder:"Fonction"},model:{value:e.user.fonction,callback:function(s){e.$set(e.user,"fonction",s)},expression:"user.fonction"}}),s("CInput",{attrs:{type:"text",label:"Téléphone",placeholder:"Téléphone"},model:{value:e.user.tel,callback:function(s){e.$set(e.user,"tel",s)},expression:"user.tel"}}),s("CInput",{attrs:{type:"text",label:"Lieu",placeholder:"Lieu"},model:{value:e.user.lieu,callback:function(s){e.$set(e.user,"lieu",s)},expression:"user.lieu"}}),s("CInput",{attrs:{type:"text",label:"Email",placeholder:"Email",disabled:""},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}),s("div",[s("div",{staticClass:"form-group custom-control custom-checkbox",attrs:{role:"group"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.changermotpasse,expression:"user.changermotpasse"}],staticClass:"custom-control-input",attrs:{id:"choix1s",type:"checkbox",name:"changermotpasse",value:"true"},domProps:{checked:Array.isArray(e.user.changermotpasse)?e._i(e.user.changermotpasse,"true")>-1:e.user.changermotpasse},on:{change:function(s){var t=e.user.changermotpasse,o=s.target,a=!!o.checked;if(Array.isArray(t)){var r="true",n=e._i(t,r);o.checked?n<0&&e.$set(e.user,"changermotpasse",t.concat([r])):n>-1&&e.$set(e.user,"changermotpasse",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.user,"changermotpasse",a)}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"choix1s"}},[e._v(" Voulez vous changer de mot de passe? ")])])]),e.user.changermotpasse?e._e():s("CButton",{attrs:{color:"primary"},on:{click:function(s){return e.update()}}},[e._v("Modifier")]),e._v("  "),e.user.changermotpasse?e._e():s("CButton",{attrs:{color:"default"},on:{click:e.goBack}},[e._v("Retour")])],2)],1),e.user.changermotpasse?s("CCardFooter",[s("CInput",{attrs:{placeholder:"Nouveau mot de passe",type:"password",prependHtml:"<i class='cui-lock-locked'></i>",autocomplete:"new-password","valid-feedback":"Mot de passe correcte","invalid-feedback":"Veuillez saisir un mot de passe de plus de 4 caractère","is-valid":e.validator},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[s("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}],null,!1,3300492400),model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}}),s("CInput",{staticClass:"mb-4",attrs:{placeholder:"Confirmer mot de passe",type:"password",prependHtml:"<i class='cui-lock-locked'></i>",autocomplete:"new-password","valid-feedback":"Mot de passe confirmé","invalid-feedback":"Veuillez confirmer votre mot de passe","is-valid":e.validatorsamepassword},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[s("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}],null,!1,3300492400),model:{value:e.user.password_confirmation,callback:function(s){e.$set(e.user,"password_confirmation",s)},expression:"user.password_confirmation"}}),s("CButton",{attrs:{color:"primary"},on:{click:function(s){return e.update()}}},[e._v("Modifier")]),e._v("  "),s("CButton",{attrs:{color:"default"},on:{click:e.goBack}},[e._v("Retour")])],1):e._e()],1)],1)],1)},a=[],r=t("bc3a"),n=t.n(r),l={name:"ProfilUser",data:function(){return{user:{name:"",email:"",status:"",changermotpasse:!1},showMessage:!1,message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},update:function(){var e=this;n.a.put(this.$apiAdress+"/api/users/updateProfil?token="+localStorage.getItem("api_token"),e.user).then((function(s){e.message="Successfully updated user.",e.showAlert(),e.$toasted.show("Vos données ont été mise à jour.",{type:"success"})})).catch((function(s){e.$toasted.show("Impossible de mettre à jour vos données",{type:"error"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},validator:function(e){return e?e.length>=4:null},validatorsamepassword:function(e){return e?this.user.password==e:null}},mounted:function(){var e=this;n.a.get(e.$apiAdress+"/api/users/profil?token="+localStorage.getItem("api_token")).then((function(s){e.user=s.data,console.log(s.data)})).catch((function(s){console.log(s),e.$router.push({path:"/login"})}))}},c=l,u=t("2877"),i=Object(u["a"])(c,o,a,!1,null,null,null);s["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0c91f3.3042288e.js.map