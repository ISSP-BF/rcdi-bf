<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter Profession
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>

            <CInput label="Métier" type="text" placeholder="Métier" v-model="profession.metier"></CInput>

          <CButton color="primary" @click="store()">Ajouter</CButton> &nbsp;
          <CButton color="secondary" @click="goBack">Retour</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditProfession',
  props: {
    caption: {
      type: String,
      default: 'Profession id'
    },
  },
  data: () => {
    return {
        profession: {
          metier: '',
        },
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    store() {
        let self = this;
        axios.post(  this.$apiAdress + '/api/professions?token=' + localStorage.getItem("api_token"),
          self.profession
        )
        .then(function (response) {
            self.profession = {
              metier: '',
            };
            self.message = 'Successfully created profession.';
            self.showAlert();
        }).catch(function (error) {
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
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted: function(){
    let self = this;
    // axios.get(  this.$apiAdress + '/api/professions/create?token=' + localStorage.getItem("api_token"))
    // .then(function (response) {
    //     self.statuses = response.data;
    // }).catch(function (error) {
    //     console.log(error);
    //     self.$router.push({ path: 'login' });
    // });
  }
}

</script>
