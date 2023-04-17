<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter Groupe
          </h3>

            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="groupe.libelle"></CInput>
            

             
            
          <div class="row ">{{ groupe.localisation }}
            <div role="group" class="col-lg-12 form-group">
              <label class="custom-control-inline"> Localisation </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ecole" type="radio" class="custom-control-input"
                    v-model="groupe.localisation" value="ecoles">
                  <label for="ecole" class="custom-control-label"> Ecoles</label>
                </div>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="formation_sanitaire" type="radio" class="custom-control-input"
                    v-model="groupe.localisation" value="formation_sanitaires">
                  <label for="formation_sanitaire" class="custom-control-label"> Formation Sanitaire</label>
                </div>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="aucun" type="radio" class="custom-control-input"
                    v-model="groupe.localisation" value="">
                  <label for="aucun" class="custom-control-label"> Aucun</label>
                </div>
            </div>
          </div>
            <CTextarea label="Description" type="text" placeholder="Description" v-model="groupe.description"  rows="9"/>

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
        groupe: {
          code: '',
          groupe: ''
        },
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    store() {
        let self = this;
        axios.post(  this.$apiAdress + '/api/groupes?token=' + localStorage.getItem("api_token"),
          self.groupe
        )
        .then(function (response) {
            self.groupe = {
              libelle: '',
              description: '',
              localisation: ''
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
