<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Donnee id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <p>Indicateur : {{ donnee.indicateur.libelle }}</p>
          <p>Description : {{ donnee.description }}</p>
          <p>Groupe : {{ donnee.indicateur.groupe }}</p>
          <p>Sous Groupe : {{ donnee.indicateur.sous_groupe }}</p>
          <p>Sous indicateur : {{ donnee.sous_indicateur }}</p>
          <p>Période : {{ donnee.periode }}</p>
          <p>Valeur de la période : {{ donnee?.periode_value_ok }}</p>
          <p>Valeur : {{ donnee.valeur }}</p>
          <p>Annee : {{ donnee.annee }}</p>
          <p>Source : {{ donnee.source }}</p>
          <p>Dernier modificateur : {{ donnee.updated_user }}</p>
          <p>Créateur : {{ donnee.created_user }}</p>
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
      donnee: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
          
    affichePeriode(periode,periode_value){
        switch (periode) {
          case "TRIMESTRIEL":
            this.choixPeriodes = [{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"},]
            break;
          case "MENSUEL":
          this.choixPeriodes = [
            {value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},
            {value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},
            {value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"},
          ]
            break;
          case "SEMESTRIEL":
        this.choixPeriodes = [{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}]
            break;
          case "ANNUEL":
            this.choixPeriodes = [];
            break;
        
          default:
            break;
        }
        if(this.choixPeriodes.length>0){
          let index = this.choixPeriodes.find(p=>p.value==periode_value);
          if(index){
            this.donnee.periode_value_ok = index.label;
          }
        }        
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/donnees/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.donnee = response.data;
      self.affichePeriode(self.donnee.periode,self.donnee.periode_value)
      console.log(self.donnee)
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
