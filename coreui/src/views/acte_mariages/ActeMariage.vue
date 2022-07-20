<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail du Acte Mariage id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>

          <h4>Numero acte: {{acteMariage.n_acte}}</h4>
          <h4>Region : {{acteMariage.region}}</h4>
          <h4>Province : {{acteMariage.province}}</h4>
          <h4>date_etablissement : {{acteMariage.date_etablissement}}</h4>
          <h4>nom_conjoint: {{acteMariage.nom_conjoint}}</h4>
          <h4>prenom_conjoint: {{acteMariage.prenom_conjoint}}</h4>
          <h4>date_naissance_conjoint: {{acteMariage.date_naissance_conjoint}}</h4>
          <h4>age_mariage_conjoint: {{acteMariage.age_mariage_conjoint}}</h4>
          <h4>sexe_conjoint: {{acteMariage.sexe_conjoint}}</h4>
          <h4>hors_commune_conjoint: {{acteMariage.hors_commune_conjoint}}</h4>
          <h4>commune_naissance_conjoint: {{acteMariage.commune_naissance_conjoint}}</h4>
          <h4>localite_naissance_conjoint: {{acteMariage.localite_naissance_conjoint}}</h4>
          <h4>domicile_conjoint: {{acteMariage.domicile_conjoint}}</h4>
          <h4>profession_conjoint: {{acteMariage.profession_conjoint}}</h4>
          <h4>nom_conjointe: {{acteMariage.nom_conjointe}}</h4>
          <h4>prenom_conjointe: {{acteMariage.prenom_conjointe}}</h4>
          <h4>date_naissance_conjointe: {{acteMariage.date_naissance_conjointe}}</h4>
          <h4>age_mariage_conjointe: {{acteMariage.age_mariage_conjointe}}</h4>
          <h4>sexe_conjointe: {{acteMariage.sexe_conjointe}}</h4>
          <h4>hors_commune_conjointe: {{acteMariage.hors_commune_conjointe}}</h4>
          <h4>commune_naissance_conjointe: {{acteMariage.commune_naissance_conjointe}}</h4>
          <h4>commune_naissance_conjointe: {{acteMariage.commune_naissance_conjointe}}</h4>
          <h4>localite_naissance_conjointe: {{acteMariage.localite_naissance_conjointe}}</h4>
          <h4>domicile_conjointe: {{acteMariage.domicile_conjointe}}</h4>
          <h4>profession_conjointe: {{acteMariage.profession_conjointe}}</h4>
          <h4>regime_matrimonial: {{acteMariage.regime_matrimonial}}</h4>
          <h4>option_matrimonial: {{acteMariage.option_matrimonial}}</h4>
          <h4>profession_conjointe: {{acteMariage.profession_conjointe}}</h4>

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
      acteMariage: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/acte_mariages/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.acteMariage = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
