<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter dashboard
          </h3>
          <CCol col="12" lg="6">
            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="dashboard.libelle"></CInput>
          </CCol>
          <CCol col="12" lg="12">
            <quill-editor :content="dashboard.description" v-model="dashboard.description" />
          </CCol>
          <BR></BR>
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
  name: 'EditNote',
  props: {
    caption: {
      type: String,
      default: 'Note id'
    },
  },
  data: () => {
    return {
        dashboard: {
          libelle: '',
          description: ''
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
          },
    store() {
        let self = this;
        console.log(self.dashboard)
        axios.post(  this.$apiAdress + '/api/dashboards?token=' + localStorage.getItem("api_token"),
          self.dashboard
        )
        .then(function (response) {
            self.dashboard = {
              libelle: '',
              description: ''
            };
            self.$toasted.show(response.data.message,{type:"success"}); 
            self.$router.go(-1)
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
              self.showAlert();
            self.$toasted.show(self.message,{type:"danger"}); 
            }else{
              console.log(error);
              //self.$router.push({ path: 'login' }); 
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
  }
}

</script>
