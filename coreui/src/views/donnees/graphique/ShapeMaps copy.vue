<template>
  <CCard>
    <CCardHeader>
      <CIcon name="cil-map"/>
      Shape File 
    </CCardHeader>
    <CCardBody style="height: 80vh;">    
      <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions2" ref="chart"
        style="height: 80vh"></highcharts>

    </CCardBody>
  </CCard>
</template>

<script> 

import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import mapData from './tenado.geo.json'
import HighchartsMapModule from 'highcharts/modules/map'
HighchartsMapModule(Highcharts)
Highcharts.maps['myMapName'] = mapData
import ecoledata from './ecoledata.json'

 

export default {
  name: 'ShapeMaps',
  components: {
    highcharts: Chart 
  },
  data () {
    return { 
        data:[],
      chartOptions2: {
        chart: {
          map: mapData
        },
        title: {
          text: 'Commune de Tenado'
        },
        subtitle: {
          text: 'Source map: ISSP</a>'
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
                accessibility: {
                    exposeAsGroupOnly: true
                },
                borderColor: '#A0A0A0',
                nullColor: 'rgba(177, 244, 177, 0.5)',
                showInLegend: false
            },
        {
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          },
          allAreas: true,
          markers: [{
        position: {lat: -2.66153, lng: 12.19218},
        label: 'S',
        draggable: false,
        title: 'Stanford',
        www: 'https://www.stanford.edu/'
      },],
          data: this.data
        }]
      }
    }
  },
  methods: {
     
  }
  ,mounted () {
    this.data = [];
    
    for(let o of ecoledata){
     let lon =  o.geometry.coordinates[0]
     let lat =  o.geometry.coordinates[1]
     if(o.properties.type=="EDUCATION"&&o.properties.Code_Provi==22){
      let mark =
      {
        lat: lat, lon: lon,
        label: o.properties.Désignati.charAt(0),
        draggable: false,
        title: o.properties.Désignati,
        www: 'https://www.apple.com/',
        volume : Math.random()*1000
      }
      this.data.push(mark)
     }
    }
    this.chartOptions2.
  }
}
</script>
