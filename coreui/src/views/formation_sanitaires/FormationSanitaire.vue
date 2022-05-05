<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail du FormationSanitaire id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>

          <h4>Code: {{formationSanitaire.code}}</h4>
          <h4>Region : {{formationSanitaire.region}}</h4>
          <h4>Province : {{formationSanitaire.province}}</h4>
          <h4>Nom formationSanitaire : {{formationSanitaire.nom_formationSanitaire}}</h4>
          <h4>Nom Majore: {{formationSanitaire.nom_majore}}</h4>
          <h4>Lon: {{formationSanitaire.lon}}</h4>
          <h4>Lat: {{formationSanitaire.lat}}</h4>
          <h4>Superficie: {{formationSanitaire.superficie}}</h4>

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
      formationSanitaire: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/formationSanitaires/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.formationSanitaire = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
