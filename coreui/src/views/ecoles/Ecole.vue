<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail sur l'école id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <h4>Code: {{ecole.code}}</h4>
          <h4>Region : {{ecole.region.region}}</h4>
          <h4>Province : {{ecole.province.province}}</h4>
          <h4>Nom ecole : {{ecole.nom_structure}}</h4>
           <h4>Lon: {{ecole.lon}}</h4>
          <h4>Lat: {{ecole.lat}}</h4>
          <h4>Statut: {{ecole.statut}}</h4>
          <h4>Systeme: {{ecole.systeme}}</h4>
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
      ecole: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/ecoles/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.ecole = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
