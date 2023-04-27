<template> 
      <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions2" ref="chart"
        style="height: 70vh" v-if="refreshing"></highcharts> 
</template>

<script> 

import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts' 
import HighchartsMapModule from 'highcharts/modules/map'
HighchartsMapModule(Highcharts)


 

export default {
  name: 'ShapeMaps',
  props: ['mapDatao'],
  components: {
    highcharts: Chart 
  },
  data () {
    return { 
      refreshing:true, 
      chartOptions2: {
        chart: {
          map: null
        },
        title: {
          text: null
        },  
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: 'spacingBox'
          }
        },
        colorAxis: {
          min: 0
        },
        series: [
          {
                name: 'Europe', 
                borderColor: '#A0A0A0',
                nullColor: 'rgba(177, 244, 177, 0.5)',
                showInLegend: false
            },
           ]
      }
    }
  },
  methods: {
     
  }
  ,mounted () {
    this.chartOptions2.chart.map = this.mapDatao 
    this.refreshing = false;
    setTimeout(() => {
      this.refreshing = true;
    }, 10);
  }
}
</script>
