<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader><h4>Détail du groupe id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <h4>Libelle: {{ groupe.libelle }}</h4>
          <h4>Localisation: {{ groupe.localisation }}</h4>
          <h4>Description : {{ groupe.description }}</h4> 
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
      groupe: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/groupes/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.groupe = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
