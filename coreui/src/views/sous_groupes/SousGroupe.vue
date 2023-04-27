<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader><h4>Détail du sous groupe id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <h4>Groupe: {{ sous_groupe.groupe }}</h4>
          <h4>Libelle: {{ sous_groupe.libelle }}</h4>
          <h4>Description : {{ sous_groupe.description }}</h4> 
          <CButton color="secondary" @click="goBack">Retour</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Sous Groupe',
  props: {
    caption: {
      type: String,
      default: 'Sous Groupe id'
    },
  },
  data: () => {
    return {
      sous_groupe: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/sous_groupes/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.sous_groupe = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
