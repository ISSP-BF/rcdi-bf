<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail du District id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>

          <h4>Code: {{district.code}}</h4>
          <h4>Region : {{district.region}}</h4>
          <h4>Province : {{district.province}}</h4>
          <h4>Nom district : {{district.nom_district}}</h4>
          <h4>Nom Majore: {{district.nom_majore}}</h4>
          <h4>Lon: {{district.lon}}</h4>
          <h4>Lat: {{district.lat}}</h4>
          <h4>Superficie: {{district.superficie}}</h4>

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
      district: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/districts/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.district = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
