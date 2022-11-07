<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter Commune
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
            <CInput label="Code" type="text" placeholder="Code" v-model="commune.code"></CInput>

            <CSelect
              label="Province" 
              :value.sync="commune.province_id"
              :plain="true"
              :options="communes"
               v-model="commune.province_id"
            >
            </CSelect>
            <CInput label="Commune" type="text" placeholder="commune" v-model="commune.commune"></CInput> 
 
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
  name: 'EditCommune',
  props: {
    caption: {
      type: String,
      default: 'Commune id'
    },
  },
  data: () => {
    return {
        commune: {
          code: '',
          commune: '',
          province_id: '', 
        },
        communes: [],
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
        // console.log(self.commune)
        axios.post(  this.$apiAdress + '/api/communes?token=' + localStorage.getItem("api_token"),
          self.commune
        )
        .then(function (response) {
            self.commune = {
              code: '',
              commune: '',
              province_id: null, 
            };
            self.message = 'Successfully created commune.';
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
    axios.get(  this.$apiAdress + '/api/communes/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.communes = response.data;
    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
