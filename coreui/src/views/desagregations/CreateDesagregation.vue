<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter Desagregation
          </h3>

            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="desagregation.libelle"></CInput>
            <CTextarea label="Description" type="text" placeholder="Description" v-model="desagregation.description"  rows="9"/>

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
        desagregation: {
          code: '',
          desagregation: ''
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
        axios.post(  this.$apiAdress + '/api/desagregations?token=' + localStorage.getItem("api_token"),
          self.desagregation
        )
        .then(function (response) {
            self.desagregation = {
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
  }
}

</script>
