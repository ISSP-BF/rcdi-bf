<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter sous indicateur
          </h3>

            <CSelect
              label="Desagregation" 
              :value.sync="sousIndicateur.desagregation_id"
              :plain="true"
              :options="desagregations"
            >
            </CSelect>
            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="sousIndicateur.libelle"></CInput>

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
  name: 'EditSousIndicateur',
  props: {
    caption: {
      type: String,
      default: 'SousIndicateur id'
    },
  },
  data: () => {
    return {
        sousIndicateur: {
          libelle: '',
          desagregation_id: ''
        },
        desagregations: [],
        message: ''
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    store() {
        let self = this;
        console.log(self.sousIndicateur)
        axios.post(  this.$apiAdress + '/api/sous_indicateurs?token=' + localStorage.getItem("api_token"),
          self.sousIndicateur
        )
        .then(function (response) {
            self.sousIndicateur = {
              desagregation_id: '',
              libelle: ''
            };
            self.$toasted.show(response.data.message,{type:"success"}); 
            self.$router.go(-1)
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
    }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/sous_indicateurs/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.desagregations = response.data;
        // Definir la valeur par défaut
        self.sousIndicateur.desagregation_id = self.desagregations.length>0?self.desagregations[0].value:null;
    }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: 'login' });
    });
  }
}

</script>
