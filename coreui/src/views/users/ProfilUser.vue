<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
              Mon profil
            </template>
            
            <CInput type="text" label="Nom" placeholder="Nom" v-model="user.name"></CInput>
            <CInput type="text" label="Prénom(s)" placeholder="Prénom(s)" v-model="user.firstname"></CInput>
            <CInput type="text" label="Fonction" placeholder="Fonction" v-model="user.fonction"></CInput>
            <CInput type="text" label="Téléphone" placeholder="Téléphone" v-model="user.tel"></CInput>
            <CInput type="text" label="Lieu" placeholder="Lieu" v-model="user.lieu"></CInput>
            <CInput type="text" label="Email" placeholder="Email" v-model="user.email" disabled></CInput>
           
            <div>
              <div role="group" class="form-group custom-control custom-checkbox">
                <input id="choix1s" type="checkbox" name="changermotpasse" class="custom-control-input" value="true"
                v-model="user.changermotpasse">
                <label for="choix1s" class="custom-control-label"> Voulez vous changer de mot de passe? </label>
              </div>
            </div>
            
            <CButton color="primary" @click="update()" v-if="!user.changermotpasse">Modifier</CButton>&nbsp;
            <CButton color="default" @click="goBack" v-if="!user.changermotpasse">Retour</CButton>
          </CForm>
        </CCardBody>
        <CCardFooter v-if="user.changermotpasse">
         <CInput

                  placeholder="Nouveau mot de passe"
                  type="password"
                  prependHtml="<i class='cui-lock-locked'></i>"
                  autocomplete="new-password"
                  v-model="user.password"
                  valid-feedback="Mot de passe correcte"
                  invalid-feedback="Veuillez saisir un mot de passe de plus de 4 caractère"
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
            
            <CButton color="primary" @click="update()">Modifier</CButton>&nbsp;
            <CButton color="default" @click="goBack">Retour</CButton>
        </CCardFooter>
      </CCard>
    </CCol> 
  </CRow>
</template>

<script>
import axios from 'axios' 
export default {
  name: 'ProfilUser',
  data: () => {
    return {
        user: { 
          name: '',
          email: '',
          status:'',
          changermotpasse:false
       },
          showMessage: false,
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
    
    update() {
        let self = this;
        
        axios.put(this.$apiAdress + '/api/users/updateProfil?token=' + localStorage.getItem("api_token"),
        self.user)
        .then(function (response) {
            self.message = 'Successfully updated user.';
            self.showAlert();
            self.$toasted.show("Vos données ont été mise à jour.",{type:"success"});
        }).catch(function (error) {
            self.$toasted.show("Impossible de mettre à jour vos données",{type:"error"});
            // self.$router.push({ path: '/login' });
        });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    
    validator (val) {
      return val ? val.length >= 4 : null
    },
    validatorsamepassword (val) {
      return val ? this.user.password==val : null
    },
  }, 
  mounted: function(){
    let self = this; 
     axios.get(  self.$apiAdress + '/api/users/profil?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.user = response.data;
        console.log(response.data)
      }).catch(function (error) {
          console.log(error);
          self.$router.push({ path: '/login' });
      }); 
  }
}

</script>
