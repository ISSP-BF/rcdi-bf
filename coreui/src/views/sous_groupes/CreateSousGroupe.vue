<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter un sous groupe
          </h3>

          <CSelect
              label="Groupe" 
              :value.sync="sous_groupe.groupe_id"
              :plain="true"
              :options="groupes"
            />
            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="sous_groupe.libelle"></CInput>
            <CTextarea label="Description" type="text" placeholder="Description" v-model="sous_groupe.description"  rows="9"/>

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
  name: 'Edit Sous Groupe',
  props: {
    caption: {
      type: String,
      default: 'Sous Groupe id'
    },
  },
  data: () => {
    return {
      sous_groupe: {
          groupe_id: '',
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
        axios.post(  this.$apiAdress + '/api/sous_groupes?token=' + localStorage.getItem("api_token"),
          self.sous_groupe
        )
        .then(function (response) {
            self.groupe = {
              groupe_id: '',
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
    let self = this;
    axios.get(  this.$apiAdress + '/api/sous_groupes/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.groupes = response.data.groupes;
        // Definir la valeur par défaut
        self.sous_groupe.groupe_id = self.groupes.length>0?self.groupes[0].value:null;
    }).catch(function (error) {
        // console.log(error);
        // self.$router.push({ path: 'login' });
    });
  }
}

</script>
