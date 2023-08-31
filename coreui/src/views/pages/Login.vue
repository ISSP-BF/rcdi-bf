<template> 
    <CContainer fluid>
      <CRow class="d-flex min-vh-100">
        <div class="sidebar">
          
          <CCardHeader>
            
          <label>
            <h4 style="text-align: center">Connexion</h4>
          </label>

            <div class="card-header-actions" style="float: left;">
              
              <CButton block color="link" class="px-0" @click="goToDashboard()">
                <div class="c-avatar" style="width: 134px">
                <img :src="'img/avatars/logo-'+commune+'-full.png'" class="c-avatar-img " />
              </div>
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody class="align-items-center mt-5 pt-5">
          <div class="mx-10 mb-0 col-lg-10">
            <CCardBody class="p-4 align-items-center">
              
              <CForm @submit.prevent="login" method="POST">
                 
                <p class="text-muted">Connectez-vous à votre compte</p>
                <CInput
                  v-model="email"
                  prependHtml="<i class='cui-user'></i>"
                  placeholder="E-mail"
                  autocomplete="E-mail"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  v-model="password"
                  prependHtml="<i class='cui-lock-locked'></i>"
                  placeholder="Mot de passe"
                  type="password"
                  autocomplete="curent-password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CRow>
                  <CCol col="6">
                    <CButton type="submit" color="primary" class="px-4">Connexion</CButton>
                  </CCol>
                  <CCol col="6" class="text-right">
                    <CButton color="link" class="px-0">Mot de passe oublié?</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
            
            <CCardFooter class="p-4">
                  <CButton block color="link" class="px-0" @click="goToDashboard()">cliquer ici pour aller sur la page d'acceuil</CButton>
            </CCardFooter>
            
          <div 
            text-color="white"
            class="text-center py-4"
            body-wrapper
          > 
            <CButton
              color="secondary"
              class="active mt-3"
              @click="goRegister()"
            >
              Créer un compte dès maintenant!
            </CButton>
          </div>
          </div>  
          </CCardBody>
           
            <div class="card-body pb-0 mb-0 py-5">
                <p class="card-description">
                    Pour tout problème avec votre compte, veuillez contacter notre support d'assistance pour vous aider
                </p>
            </div> 
            :src="'img/avatars/logo-'+commune+'-full.png'" 
             
          </div>
        <CCard class="main-panel">
          <div style="background-image: url(img/presentation/bg1.jpg);
        width:100%;height: 100%;
        background-size: 100% 100%;
        " v-bind:style="{ backgroundImage: 'url(img/presentation/bg-'+commune+'-1.jpg)' }">
            <div class="information" 
            v-bind:class="[commune]">
              Trois thématiques d’intérêt sont abordés sur cette plateforme. Il s’agit des statistiques d’état civil, des statistiques sanitaires et des statistiques d’éducation de base et présecondaire.
            </div>
        </div>
        </CCard>
      </CRow>
    </CContainer>
</template>

<script>

import axios from "axios";

    export default {
      name: 'Login',
      data() {
        return {
          email: '',
          password: '',
          showMessage: false,
          message: '',
          commune: ''
        }
      },
      methods: {
        goRegister(){
          this.$router.push({ path: 'register' });
        },
        goToDashboard(){
          this.$router.push({ path: '/' });
        },
        login() {
          let self = this;
          axios.post(  this.$apiAdress + '/api/login', {
            email: self.email,
            password: self.password,
          }).then(function (response) {
            self.email = '';
            self.password = '';
            localStorage.setItem("api_token", response.data.access_token);
            localStorage.setItem('roles', response.data.roles);
            self.$router.push({ path: '/' });
          })
          .catch(function (error) {
            self.message = 'E-mail ou mot de passe incorrect';
            self.showMessage = true;
            console.log(error);
            self.$toasted.show('E-mail ou mot de passe incorrect',{type:"error"});
          });
  
        }
      },
  mounted () {
    
    if(localStorage.getItem("communedefaut")){
        this.commune = JSON.parse(localStorage.getItem("communedefaut"));
        this.commune = this.commune.commune.toLowerCase();
      }
      else {
        this.commune_id = null;
      }}
    }

</script>
<style>
@media (min-width: 991px){
    .main-panel{
        width: 60%!important;
        padding: 0;
        margin: 0;
    }
    .sidebar{
        display: block!important;
        width: 40%!important;
        padding: 0;
        margin: 0;
        background-color: white;
        text-align: -webkit-center;
    }
    .information{
        margin-top: 61%; float: left;width: 80%;margin-left: 10%;
        font-family: "Times New Roman", Times, serif;
        font-size: x-large;
        color: white;
    }
    .sidebar-wrapper{
    text-align: -webkit-center;
    text-align: -moz-center;
    width: 100%!important;
    }
    .sidebar-wrapper>.card-body{
        width: 80%!important;
        margin-top: 7%!important;
    }
    .tenado{
    background-color: rgb(83, 133, 225);
        opacity: 90%;
    border-radius: 5px;
    padding: 1%;
      
    }
    .manga{
    background-color: rgb(255, 145, 1);
        opacity: 90%;
    border-radius: 5px;
    padding: 1%;
      
    }
}
@media (max-width: 991px){
    .main-panel{
        width: 0!important;
        display: none;
    }
    .sidebar-wrapper{
        text-align: -webkit-center;
        text-align: -moz-center;
        width: 100%!important;
        }
    .sidebar{
        display: block!important;
        -webkit-transform:none;
        width: 100%!important;
        padding: 0;
        margin: 0;
        background-color: white;
        text-align: -webkit-center;
    }
    .sidebar-wrapper>.card-body{
        width: 100%!important;
    }
     .information{
        margin-top: 50%; float: left;width: 80%;margin-left: 10%;
        font-family: "Times New Roman", Times, serif;
        font-size: xx-large;
        color: white;
    }
}</style>