<template> 
    <CContainer fluid>
      <CRow class="d-flex min-vh-100">
        <div class="sidebar">
          <CCardHeader>
            
          <label>
            <h4 style="text-align: center">Création de compte</h4>
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
              <CForm @submit.prevent="register" method="POST">
                <h1> </h1>
                <p class="text-muted">Veuillez créer votre compte</p>
                <CInput
                  placeholder="identifiant"
                  prependHtml="<i class='cui-user'></i>"
                  autocomplete="username"
                  v-model="name"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="E-mail"
                  prepend="@"
                  autocomplete="email"
                  v-model="email"
                />
                <CInput
                  placeholder="Mot de passe"
                  type="password"
                  prependHtml="<i class='cui-lock-locked'></i>"
                  autocomplete="new-password"
                  v-model="password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Confirmer mot de passe"
                  type="password"
                  prependHtml="<i class='cui-lock-locked'></i>"
                  autocomplete="new-password"
                  class="mb-4"
                  v-model="password_confirmation"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CButton type="submit" color="primary" block>Créer compte</CButton>
              </CForm>
            </CCardBody>
            <CCardFooter class="p-1">
                  <CButton block color="link" class="px-0" @click="goLogin()">J'ai déjà un compte</CButton>
            </CCardFooter>
          </div>  
          </CCardBody>
           
            <div class="card-body pb-0 mb-0">
                <p class="card-description">
                    Pour tout problème avec votre compte, veuillez contacter notre support d'assistance pour vous aider
                </p>
            </div>
             
          </div>
        <CCard class="main-panel">
          
          <div style="background-image: url(img/presentation/bg2.jpg);
        width:100%;height: 100%;
        background-size: 100% 100%;
        " v-bind:style="{ backgroundImage: 'url(img/presentation/bg-'+commune+'-2.jpg)' }">
            <div class="information-register" 
            v-bind:class="[commune]">
            La mise en œuvre de ces systèmes de données infranationaux permettra à la commune de {{ commune }} :
              <ul>
                <li>Disposer de données permettant une bonne connaissance de l’état socio-sanitaire et démographique de la population de l’aire de responsabilité;</li>
                <li>Disposer de données permettant une auto-évaluation des activités menées pour faciliter les prises de décisions au niveau local;</li>
              </ul>            
            </div>
        </div>

           
        </CCard>
      </CRow>
    </CContainer>
</template>

  <script>
    import axios from 'axios'
    export default {
      data() {
        return {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
          commune: ''
        }
      },    
      methods: {
        goLogin(){
          this.$router.push({ path: 'login' });
        },
        goToDashboard(){
          this.$router.push({ path: '/' });
        },
        register() {
          var self = this;
          axios.post(  this.$apiAdress + '/api/register', {
            name: self.name,
            email: self.email,
            password: self.password,
            password_confirmation: self.password_confirmation
          }).then(function (response) {
            self.name = '';
            self.email = '';
            self.password = '';
            self.password_confirmation = '';
            console.log(response);
            self.$toasted.show('Votre compte a été crée',{type:"success"});
            self.$router.push({ path: '/login' });
          })
          .catch(function (error) {
            console.log(error);
            self.$toasted.show('Veuillez verifier vos informations',{type:"error"});
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
    .information-register{
        margin-top: 50%; float: left;width: 80%;margin-left: 10%;
        font-family: "Times New Roman", Times, serif;
        font-size: x-large;
        color: white;
        text-align: justify;
  text-justify: inter-word;
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
    opacity: 90%!important;
    border-radius: 5px;
    padding: 1%;
      
    }
    .manga{
    background-color: rgb(255, 145, 1);
        opacity: 90%!important;
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
     .information-register{
        margin-top: 50%; float: left;width: 80%;margin-left: 10%;
        font-family: "Times New Roman", Times, serif;
        font-size: xx-large;
        color: white;
    }
}</style>