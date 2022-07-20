<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail du Acte Naissance id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <h4>Numero Acte: {{acteNaissance.n_acte}}</h4>
          <h4>Region : {{acteNaissance.region}}</h4>
          <h4>Province : {{acteNaissance.province}}</h4>
          <h4>Commune : {{acteNaissance.commune}}</h4>
          <h4>Date déclaration : {{acteNaissance.date_declaration|formatDateShort}}</h4>
          <h4>Nom & premom: {{acteNaissance.nom}} {{acteNaissance.prenom}}</h4>
          <h4>Sexe: {{acteNaissance.sexe}}</h4>
          <h4>Date naissance: {{acteNaissance.date_naissance|formatDateShort}}</h4>
          <h4>Lieu de naissance: {{acteNaissance.lieu_naissance_commune}}</h4>
          <h4>Centre sante naissance: {{acteNaissance.formationSanitaire}}</h4>

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
      acteNaissance: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/acte_naissances/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.acteNaissance = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
