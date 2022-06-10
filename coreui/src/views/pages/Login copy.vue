<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CRow>
      <CCol>
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
              <CForm @submit.prevent="login" method="POST">
                <h1>Connexion</h1>
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
          </CCard>
          <CCard
            color="primary"
            text-color="white"
            class="text-center py-5 d-md-down-none"
            body-wrapper
          >
            <h2>Créer un compte</h2>
            <p>La création d'un compte vous permet d'accéder aux données statistique</p>
            <CButton
              color="primary"
              class="active mt-3"
              @click="goRegister()"
            >
              Créer un compte dès maintenant!
            </CButton>
          </CCard>
        </CCardGroup>
      </CCol>
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
        }
      },
      methods: {
        goRegister(){
          this.$router.push({ path: 'register' });
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
            self.$router.push({ path: 'dashboard' });
          })
          .catch(function (error) {
            self.message = 'Incorrect E-mail or password';
            self.showMessage = true;
            console.log(error);
            self.$toasted.show('Incorrect E-mail or password',{type:"error"});
          });
  
        }
      }
    }

</script>
