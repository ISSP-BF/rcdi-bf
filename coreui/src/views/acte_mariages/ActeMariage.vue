<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail du Acte Mariage id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>

          <h4>Code: {{acteMariage.code}}</h4>
          <h4>Region : {{acteMariage.region}}</h4>
          <h4>Province : {{acteMariage.province}}</h4>
          <h4>Nom acteMariage : {{acteMariage.nom_acteMariage}}</h4>
          <h4>Nom Majore: {{acteMariage.nom_majore}}</h4>
          <h4>Lon: {{acteMariage.lon}}</h4>
          <h4>Lat: {{acteMariage.lat}}</h4>
          <h4>Superficie: {{acteMariage.superficie}}</h4>

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
      // this.$router.replace({path: '/users'})
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
