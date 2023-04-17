<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader><h4>Détail de la requête id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <h4>Libelle: {{ dashboardItem.libelle }}</h4>
          <h4>Description : {{ dashboardItem.description }}</h4> 
          <h4>Groupe : {{ donnee.groupe_id }}</h4> 
          <h4>Sous Groupe : {{ donnee.sous_groupe_id }}</h4> 
          <h4>Indicateur : {{ donnee.indicateur_id }}</h4> 
          <h4 v-if="donnee.sous_indicateur">Sous Indicateur : {{ donnee.sous_indicateur }}</h4> 
          <h4>Periode : {{ donnee.periode }}</h4> 
          <h4 v-if="donnee.periode!='ANNUEL'">periode_value : {{ donnee.periode_value }}</h4> 
          <h4>Annee : {{ donnee.annee }}</h4> 
         <div class="col-lg-12">
          <CButton color="secondary" @click="goBack">Retour</CButton>&nbsp;
          <CButton color="success" @click="visualiser()"> <CIcon name="cil-speedometer"/> </CButton> &nbsp;

         </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" lg="6">
      <div>
                  <IndicateursSecteur
                    v-if="dashboardItem.graphique == 'SECTEUR' &&refreshing"
                    :donneeSearch="donnee" :refreshing="refreshing"
                  />
                  <IndicateurBarChart
                    v-if="dashboardItem.graphique == 'HISTOGRAMME' &&refreshing"
                    :donneeSearch="donnee" :refreshing="refreshing"
                  />
                  <IndicateursShow
                    v-if="dashboardItem.graphique == 'FIXE' &&refreshing"
                    :donneeSearch="donnee" :refreshing="refreshing"
                  />
                </div>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
import IndicateursSecteur from "../donnees/graphique/IndicateursSecteur";
import IndicateurBarChart from "../donnees/graphique/IndicateurBarChart";
import IndicateursShow from "./graphique/IndicateursShow";
export default {
  name: 'User',
  components: { 
    IndicateursSecteur,
    IndicateurBarChart,IndicateursShow
  },
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
      dashboardItem: {},
      donnee:{},
      refreshing:false
    }
  },
  methods: {
    
    visualiser(){
        this.refreshing = !this.refreshing;
        console.log(this.donnee)
    },
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/dashboard-items/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.dashboardItem = response.data;
      self.donnee = JSON.parse(response.data.requete)
    
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
