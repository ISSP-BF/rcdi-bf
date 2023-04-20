<template>
  <CCard>
    <CCardHeader>
      <CIcon name="cil-map"/>
      Shape File 
    </CCardHeader>
    <CCardBody style="height: 80vh;">    
      <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions2" ref="chart"
        style="height: 80vh" v-if="refreshing"></highcharts>

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
      refreshing:true,
        data:[],
      chartOptions2: {
        chart: {
          map: mapData
        },
        title: {
          text: mapData.name
        },
        subtitle: {
          text: 'Source map: ISSP</a>'
        },
        
        tooltip: {
                headerFormat: '',
                pointFormat: '<b>{point.country}</b><br>Lat: {point.lat:.5f}, Lon: {point.lon:.5f}'
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
            type: 'mappoint',
            enableMouseTracking: true,
            accessibility: {
                point: {
                    descriptionFormatter: function (point) {
                        if (point.isCluster) {
                            return 'Grouping of ' + point.clusterPointsAmount + ' points.';
                        }
                        return point.name + ', country code: ' + point.country + '.';
                    }
                }
          },
        colorKey: 'clusterPointsAmount',
        data: [],
        color: Highcharts.getOptions().colors[5],
        marker: {
                  lineWidth: 5,
                  lineColor: '#fff',
                  symbol: 'mapmarker',
                  radius: 16
              },
        dataLabels: {
            verticalAlign: 'top'
        },
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
        name: o.properties.Désignati.charAt(0),
        draggable: false,
        country: o.properties.Désignati,
        volume : Math.random()*1000
      }
      this.data.push(mark)
     }
    }
    this.chartOptions2.series[1].data = this.data;
    console.log(this.chartOptions2)
    this.refreshing = false;
    setTimeout(() => {
      this.refreshing = true;
    }, 10);
  }
}
</script>
