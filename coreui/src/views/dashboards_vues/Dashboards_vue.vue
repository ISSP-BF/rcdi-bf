<template>
  <div> 
  <GridLayout
  :layout.sync="items"
  :key="gridKey"
  :cols="{ lg: 12, md: 8, sm: 8, xs: 4, xxs: 4 }"
  :row-height="10"
  :is-draggable="true"
  :is-resizable="true"
  :responsive="true"
  :margin="[10, 10]"
>
  <GridItem 
    v-for="item in items" 
    :key="item.id"
    v-bind="{...item, accent: null }"
    :min-h="10"
    :min-w="2"
  >
    <CCard 
      accent-color="primary" 
      class="h-100"
          v-if="item.graphique !== 'FIXE'"
    >
      <CCardHeader>{{ item.libelle }}
      </CCardHeader> 
      <CCardBody>
        <IndicateursSecteur
          v-if="item.graphique == 'SECTEUR'"
          :donneeSearch="JSON.parse(item.requete)" :refreshing="true"
        />
        <IndicateurBarChart
          v-if="item.graphique == 'HISTOGRAMME'"
          :donneeSearch="JSON.parse(item.requete)" :refreshing="true"
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
  </GridItem>
</GridLayout> 
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
  name: 'dashboards',
  components: {  
    IndicateursSecteur,
    IndicateurBarChart,IndicateursShow,
    GridLayout,
    GridItem,
  },
  data: () => {
    return { 
      layout: storedLayout || baseLayout,
      storedLayout,
      gridKey: 0,
      items: [], 
      message: '',
    }
  },
  computed: {
  },
  methods: { 
    getdashboardItemsByDashboardId (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/dashboard-items/findBy/'+self.$route.params.id+'?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      console.log(self.items)
      }).catch(function (error) {
        console.log(error);
        //self.$router.push({ path: '/login' });
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
