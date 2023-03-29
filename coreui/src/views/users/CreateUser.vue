<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Créer un utilisateur
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>

            <CInput
                  placeholder="Nom"
                  prependHtml="<i class='cui-user'></i>"
                  autocomplete="username"
                  v-model="user.name"/> 
            <CInput
                  placeholder="Prénom"
                  prependHtml="<i class='cui-user'></i>"
                  autocomplete="firstname"
                  v-model="user.firstname"/> 
            <CInput
                  placeholder="Fonction"
                  prependHtml="<i class='cui-user'></i>"
                  autocomplete="fonction"
                  v-model="user.fonction"/> 
            <CInput
                  placeholder="Lieu"
                  prependHtml="<i class='cui-user'></i>"
                  autocomplete="lieu"
                  v-model="user.lieu"/> 
            <CInput
              placeholder="E-mail"
              prepend="@"
              autocomplete="email"
              v-model="user.email"/>

                <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="1" class="col-form-label">
                    Roles
                  </CCol>
                  <CCol sm="9" :class="'form-inline'">
                  <CInputCheckbox
                      v-for="rol in role"
                      :key="rol.name"
                      :label="rol.name"
                      :custom="true"
                      name="selectRoles"
                      @update:checked="selectRadioSelectRole(rol.name)"
                      :inline="true"
                  />
                  </CCol>
                </div>
                </template>
                 
                <CInput
                  placeholder="Mot de passe"
                  type="password"
                  prependHtml="<i class='cui-lock-locked'></i>"
                  autocomplete="new-password"
                  v-model="user.password"
                  valid-feedback="Mot de passe correcte"
                  invalid-feedback="Veuillez saisir un mot de passe de 6 caractère"
                  :is-valid="validator"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                
                <CInput
                  placeholder="Confirmer mot de passe"
                  type="password"
                  prependHtml="<i class='cui-lock-locked'></i>"
                  autocomplete="new-password"
                  class="mb-4"
                  v-model="user.password_confirmation"
                  valid-feedback="Mot de passe confirmé"
                  invalid-feedback="Veuillez confirmer votre mot de passe"
                  :is-valid="validatorsamepassword"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
            <CButton color="primary" @click="store()">Sauvegarder</CButton> &nbsp;

            <CButton color="primary" @click="goBack">Retour</CButton>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditUser',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
        role: [],
        resultroles: [],
        user: {
          name: '',
          email: '',
          roles:null,
          password: '',
          password_confirmation: ''
        },
        statuses: [],
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    selectRadioSelectRole(role){
      let temp = this.resultroles.indexOf(role); 
      if (temp > -1) {
        this.resultroles.splice(temp, 1);
      }else{
        this.resultroles.push(role);
      }
    },
    register() {
      var self = this;
      axios.post(  this.$apiAdress + '/api/register', {
        name: self.user.name,
        email: self.user.email,
        password: self.user.password,
        password_confirmation: self.user.password_confirmation,
        roles:self.user.roles
      }).then(function (response) {
        self.user.name = '';
        self.user.email = '';
        self.user.password = '';
        self.user.password_confirmation = '';
        self.user.roles = null;
        // console.log(response);
        // self.$router.push({ path: '/login' });
        
            self.message = 'Successfully created user.';
            self.showAlert();
      })
      .catch(function (error) { 
        if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
              self.showAlert();
            }else{
              console.log(error);
              self.$router.push({ path: 'login' }); 
            }
      });
    },
    store() {
        let self = this;
        self.user.menuroles=this.resultroles.toString();
        console.log(self.user)
        axios.post(  this.$apiAdress + '/api/users?token=' + localStorage.getItem("api_token"),
          self.user
        )
        .then(function (response) {
            self.user = {
              name: '',
              email: ''
            };
            self.message = 'Successfully created user.';
            self.$toasted.show(self.message,{type:"success"});
            self.showAlert();
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
            self.$toasted.show(self.message,{type:"danger"});
            }else{
              console.log(error);
              // self.$router.push({ path: 'login' }); 
            }
        });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getData() {
      let self = this;
      axios.get(  this.$apiAdress + '/api/roles?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        console.log(response)
        self.role =  response.data;
      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
    },
    
    validator (val) {
      return val ? val.length >= 4 : null
    },
    validatorsamepassword (val) {
      return val ? this.user.password==val : null
    },
  
  },
  mounted: function(){
    this.getData();
  }
}

</script>
