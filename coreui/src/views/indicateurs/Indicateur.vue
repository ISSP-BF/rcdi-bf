<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Indicateur id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <p>Libelle : {{ indicateur.libelle }}</p>
          <p>Description : {{ indicateur.description }}</p>
          <p>Groupe : {{ indicateur.groupe }}</p>
          <p>Méthode calcule : {{ indicateur.methode_calcule }}</p>
          <p>Mode de calcule : {{ indicateur.mode_de_calcule }}</p>
          <p>Desagregation : {{ indicateur.desagregation }}</p>
          <p>Période : {{ indicateur.periode }}</p>
          <p>Dernier modificateur : {{ indicateur.updated_user }}</p>
          <p>Créateur : {{ indicateur.created_user }}</p>
          <CButton color="primary" @click="goBack">Retour</CButton>
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
      indicateur: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/indicateurs/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.indicateur = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
