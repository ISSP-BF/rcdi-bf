<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail du Acte Deces id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <h4>Numero acte: {{acteDeces.n_acte}}</h4>
          <h4>Region : {{acteDeces.region}}</h4>
          <h4>Province : {{acteDeces.province}}</h4>
          <h4>Date declaration : {{acteDeces.date_declaration}}</h4>
          <h4>Date deces: {{acteDeces.date_deces}}</h4>
          <h4>Nom: {{acteDeces.nom}}</h4>
          <h4>Prenom: {{acteDeces.prenom}}</h4>
          <h4>Date naissance: {{acteDeces.date_naissance}}</h4>
          <h4>Age: {{acteDeces.age}}</h4>
          <h4>Sexe: {{acteDeces.date_naissance}}</h4>
          <h4>Date etablissement: {{acteDeces.date_etablissement}}</h4>
          <h4>Statut matrimonial: {{acteDeces.statut_matrimonial}}</h4>
          <h4>Profession: {{acteDeces.profession}}</h4>
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          </CCardFooter>      
      </CCard>


    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
      acteDeces: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/acte_deces/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.acteDeces = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
