<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail du Acte Deces id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>

          <h4>Code: {{acteDeces.code}}</h4>
          <h4>Region : {{acteDeces.region}}</h4>
          <h4>Province : {{acteDeces.province}}</h4>
          <h4>Nom acteDeces : {{acteDeces.nom_acteDeces}}</h4>
          <h4>Nom Majore: {{acteDeces.nom_majore}}</h4>
          <h4>Lon: {{acteDeces.lon}}</h4>
          <h4>Lat: {{acteDeces.lat}}</h4>
          <h4>Superficie: {{acteDeces.superficie}}</h4>

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
      // this.$router.replace({path: '/users'})
    }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/acte_decess/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.acteDeces = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
