<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail du Acte Naissance id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>

          <h4>Code: {{acteNaissance.code}}</h4>
          <h4>Region : {{acteNaissance.region}}</h4>
          <h4>Province : {{acteNaissance.province}}</h4>
          <h4>Nom acteNaissance : {{acteNaissance.nom_acteNaissance}}</h4>
          <h4>Nom Majore: {{acteNaissance.nom_majore}}</h4>
          <h4>Lon: {{acteNaissance.lon}}</h4>
          <h4>Lat: {{acteNaissance.lat}}</h4>
          <h4>Superficie: {{acteNaissance.superficie}}</h4>

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
