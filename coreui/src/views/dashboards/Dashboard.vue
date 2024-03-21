<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader><h4>Détail du dashboard id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <h4>Libelle: {{ dashboard.libelle }}</h4>
          <h4>Description : {{ dashboard.description }}</h4> 
          <h4>Acteur : {{ dashboard.role }}</h4> 
          <CButton color="secondary" @click="goBack">Retour</CButton>
        </CCardBody>
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
      dashboard: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/dashboards/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.dashboard = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
