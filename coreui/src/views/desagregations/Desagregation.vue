<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader><h4>Détail du desagregation id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <h4>Libelle: {{ desagregation.libelle }}</h4>
          <h4>Description : {{ desagregation.description }}</h4> 
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
      desagregation: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/desagregations/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.desagregation = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
