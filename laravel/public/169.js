(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{778:function(e,s,t){"use strict";t.r(s);var o=t(2),a=t.n(o),r={name:"ProfilUser",data:function(){return{user:{name:"",email:"",status:"",changermotpasse:!1},showMessage:!1,message:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1)},update:function(){var e=this;a.a.put(this.$apiAdress+"/api/users/updateProfil?token="+localStorage.getItem("api_token"),e.user).then((function(s){e.message="Successfully updated user.",e.showAlert(),e.$toasted.show("Vos données ont été mise à jour.",{type:"success"})})).catch((function(s){e.$toasted.show("Impossible de mettre à jour vos données",{type:"error"})}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},validator:function(e){return e?e.length>=4:null},validatorsamepassword:function(e){return e?this.user.password==e:null}},mounted:function(){var e=this;a.a.get(e.$apiAdress+"/api/users/profil?token="+localStorage.getItem("api_token")).then((function(s){e.user=s.data,console.log(s.data)})).catch((function(s){console.log(s),e.$router.push({path:"/login"})}))}},n=t(1),l=Object(n.a)(r,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("CRow",[t("CCol",{attrs:{col:"12",lg:"6"}},[t("CCard",{attrs:{"no-header":""}},[t("CCardBody",[t("CForm",[t("template",{slot:"header"},[e._v("\n            Mon profil\n          ")]),e._v(" "),t("CInput",{attrs:{type:"text",label:"Nom",placeholder:"Nom"},model:{value:e.user.name,callback:function(s){e.$set(e.user,"name",s)},expression:"user.name"}}),e._v(" "),t("CInput",{attrs:{type:"text",label:"Prénom(s)",placeholder:"Prénom(s)"},model:{value:e.user.firstname,callback:function(s){e.$set(e.user,"firstname",s)},expression:"user.firstname"}}),e._v(" "),t("CInput",{attrs:{type:"text",label:"Fonction",placeholder:"Fonction"},model:{value:e.user.fonction,callback:function(s){e.$set(e.user,"fonction",s)},expression:"user.fonction"}}),e._v(" "),t("CInput",{attrs:{type:"text",label:"Téléphone",placeholder:"Téléphone"},model:{value:e.user.tel,callback:function(s){e.$set(e.user,"tel",s)},expression:"user.tel"}}),e._v(" "),t("CInput",{attrs:{type:"text",label:"Lieu",placeholder:"Lieu"},model:{value:e.user.lieu,callback:function(s){e.$set(e.user,"lieu",s)},expression:"user.lieu"}}),e._v(" "),t("CInput",{attrs:{type:"text",label:"Email",placeholder:"Email",disabled:""},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}),e._v(" "),t("div",[t("div",{staticClass:"form-group custom-control custom-checkbox",attrs:{role:"group"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.changermotpasse,expression:"user.changermotpasse"}],staticClass:"custom-control-input",attrs:{id:"choix1s",type:"checkbox",name:"changermotpasse",value:"true"},domProps:{checked:Array.isArray(e.user.changermotpasse)?e._i(e.user.changermotpasse,"true")>-1:e.user.changermotpasse},on:{change:function(s){var t=e.user.changermotpasse,o=s.target,a=!!o.checked;if(Array.isArray(t)){var r=e._i(t,"true");o.checked?r<0&&e.$set(e.user,"changermotpasse",t.concat(["true"])):r>-1&&e.$set(e.user,"changermotpasse",t.slice(0,r).concat(t.slice(r+1)))}else e.$set(e.user,"changermotpasse",a)}}}),e._v(" "),t("label",{staticClass:"custom-control-label",attrs:{for:"choix1s"}},[e._v(" Voulez vous changer de mot de passe? ")])])]),e._v(" "),e.user.changermotpasse?e._e():t("CButton",{attrs:{color:"primary"},on:{click:function(s){return e.update()}}},[e._v("Modifier")]),e._v(" \n          "),e.user.changermotpasse?e._e():t("CButton",{attrs:{color:"default"},on:{click:e.goBack}},[e._v("Retour")])],2)],1),e._v(" "),e.user.changermotpasse?t("CCardFooter",[t("CInput",{attrs:{placeholder:"Nouveau mot de passe",type:"password",prependHtml:"<i class='cui-lock-locked'></i>",autocomplete:"new-password","valid-feedback":"Mot de passe correcte","invalid-feedback":"Veuillez saisir un mot de passe de plus de 4 caractère","is-valid":e.validator},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[t("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}],null,!1,3300492400),model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}}),e._v(" "),t("CInput",{staticClass:"mb-4",attrs:{placeholder:"Confirmer mot de passe",type:"password",prependHtml:"<i class='cui-lock-locked'></i>",autocomplete:"new-password","valid-feedback":"Mot de passe confirmé","invalid-feedback":"Veuillez confirmer votre mot de passe","is-valid":e.validatorsamepassword},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[t("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}],null,!1,3300492400),model:{value:e.user.password_confirmation,callback:function(s){e.$set(e.user,"password_confirmation",s)},expression:"user.password_confirmation"}}),e._v(" "),t("CButton",{attrs:{color:"primary"},on:{click:function(s){return e.update()}}},[e._v("Modifier")]),e._v(" \n          "),t("CButton",{attrs:{color:"default"},on:{click:e.goBack}},[e._v("Retour")])],1):e._e()],1)],1)],1)}),[],!1,null,null,null);s.default=l.exports}}]);