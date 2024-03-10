<template>
  <div 
    class="row col-lg-12"> 
    <div class="col-lg-12">
    <p v-html="dashboard.description"></p>
  </div>
  <div 
    v-for="item in items" 
    :key="item.id"
      :class="'col-lg-'+item.w"
      class="no-margin"
  >
    <CCard 
      accent-color="primary"  
          v-if="item.graphique !== 'FIXE'"
    >
      <CCardHeader><h6><b>{{ item.libelle }}</b></h6>
        <div>
          <p v-html="item.description"></p>
        </div>
      </CCardHeader> 
      <CCardBody>
        <IndicateursSecteur
          v-if="item.graphique == 'SECTEUR'"
          :donneeSearch="JSON.parse(item.requete)" :refreshing="true"
        />
        <IndicateurBarChart
          v-if="item.graphique == 'HISTOGRAMME'"
          :donneeSearch="JSON.parse(item.requete)" :refreshing="true" :seuil="item"
        />
        <IndicateursShow
          v-if="item.graphique == 'FIXE'"
          :donneeSearch="JSON.parse(item.requete)" :refreshing="true"
        />
      </CCardBody>  
    </CCard>
        <IndicateursShow
          v-if="item.graphique == 'FIXE'"
          :donneeSearch="JSON.parse(item.requete)" :refreshing="true"
        /> 
  </div> 
  
  <CButton block color="link" class="px-0" @click="voirGraphique()">Voir d'autre graphique</CButton>
  </div>
</template>

<script>
import axios from 'axios' 
import IndicateursSecteur from "./graphique/IndicateursSecteur";
import IndicateurBarChart from "./graphique/IndicateurBarChart";
import IndicateursShow from "./graphique/IndicateursShow";
import { GridLayout, GridItem } from 'vue-grid-layout'
const baseLayout = [
  { i: '0', x: 0, y: 0, w: 4, h: 16, accent: 'primary' },
  { i: '1', x: 4, y: 0, w: 4, h: 12, accent: 'secondary', static: true },
  { i: '2', x: 8, y: 0, w: 4, h: 12, accent: 'success' },
  { i: '3', x: 0, y: 4, w: 4, h: 12, accent: 'info' },
  { i: '4', x: 4, y: 4, w: 8, h: 12, accent: 'warning' },
  { i: '5', x: 4, y: 8, w: 4, h: 12, accent: 'danger' },
]
// [
//     {
//         "i": 0,
//         "x": 0,
//         "y": 0,
//         "w": 0,
//         "h": 0,
//         "static": true, 
//     },
//     {  
//         "i": 1,
//         "x": 1,
//         "y": 1,
//         "w": 12,
//         "h": 100,
//         "static": true, 
//     }
// ]
const layoutKey = 'CoreUI-Vue-Draggable-Layouts'
const storedLayout = JSON.parse(localStorage[layoutKey] || null)

export default {
  name: 'DashboardsVue',
  props: ['idData'],
  components: {  
    IndicateursSecteur,
    IndicateurBarChart,IndicateursShow,
    GridLayout,
    GridItem,
  },
  data: () => {
    return { 
      // refreshing:false,
      layout: storedLayout || baseLayout,
      storedLayout,
      gridKey: 0,
      items: [], 
      message: '',
      dashboard: {},
    }
  },
  watch: {
    reloadParams() {
      // this.refreshing = false;
      this.getdashboardItemsByDashboardId();
    },
  },
  computed: {
    reloadParams() {
      return [this.$route.params.id,this.idData];
    },
  },
  methods: { 
    voirGraphique(){
      this.$router.push({ path: '/donnees' });
    },
    async getdashboardItemsByDashboardId (){
      let self = this;
      const id = this.idData ? this.idData : (self.$route.params.id?self.$route.params.id:null);
      axios.get(  this.$apiAdress + '/api/dashboard-items/findBy/'+id+'?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      console.log(self.items)
      }).catch(function (error) {
        console.log(error);
        //self.$router.push({ path: '/login' });
      });
      axios.get(  this.$apiAdress + '/api/dashboards/' + id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.dashboard = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
    },
    saveGrid () {
      this.storedLayout = JSON.parse(JSON.stringify(this.layout))
      localStorage.setItem(layoutKey, JSON.stringify(this.storedLayout))
    },
    resetLayout (type) {
      this.gridKey++
      this.layout = type === 'base' ? baseLayout : this.storedLayout
    }
  },
  mounted: function(){ 
    this.getdashboardItemsByDashboardId();
  }
}
</script>
 

<style>
.vue-grid-item.vue-grid-placeholder {
  background: gray !important;
  border: thin dashed !important;
}
</style>
