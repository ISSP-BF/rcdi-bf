<template>
  <CCard>
  <highcharts
    :constructorType="'mapChart'"
    class="hc"
    :options="chartOptions2"
    ref="chart"
    style="height: 75vh"
    v-if="refreshing"
  ></highcharts>
  </CCard>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import HighchartsMapModule from "highcharts/modules/map";
import axios from "axios"; 
HighchartsMapModule(Highcharts);

export default {
  name: "ShapeMaps",
  props: ["mapDataO","donneeSearch","refreshingparent"],
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      refreshing: true,
      markers:[],
      chartOptions2: {
        chart: {
          map: null,
        },
        title: {
          text: null,
        },
        tooltip: {
                headerFormat: '',
                pointFormat: '<b>{point.country}</b><br>Valeur : {point.valeur:.2f}<br>Source : {point.source}'
            },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: "spacingBox",
          },
        },
        colorAxis: {
          min: 0,
        },
        exporting: {
    buttons: {
        contextButton: {
            menuItems: ['viewFullscreen', 'downloadPNG', 'downloadJPEG', 'downloadPDF']
        }
    }
},
        series: [
          {
            name: "Europe",
            borderColor: "#A0A0A0",
            nullColor: "rgba(177, 244, 177, 0.5)",
            showInLegend: false,
          },
          {
            type: 'mapbubble',
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
          showInLegend: false,
        colorKey: 'clusterPointsAmount',
        data: [],
                minSize: 0,
                maxSize: '20%',
        color: Highcharts.getOptions().colors[5],
        marker: {
                  lineWidth: 1,
                  lineColor: '#fff',
                  symbol: 'mapmarker',
                  radius: 1
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
        }
        ],
      },
    };
  },
  watch: {
    reloadParams() { 
      this.init();
       this.getDatasets();
    },
  },
  computed:{
    reloadParams() {
      return [this.refreshingparent
      ];
    },
  },
  methods: {
    init(){
    this.chartOptions2.chart.map = this.mapDataO;
            this.refreshing = false;
            setTimeout(() => {
              this.refreshing = true;
            }, 10);
    
    },
    getDatasets (){
      let self = this;
      axios.post(this.$apiAdress + '/api/donnees/findCarteDataBy?token=' + localStorage.getItem("api_token"),
         self.donneeSearch
        )
        .then(function (response) {
            self.markers = [];

            for(let co of response.data){
              let mark =
                {
                   valeur : co.valeur,
                   z : co.valeur,
                  lat: parseFloat(co.localisation.lat), lon: parseFloat(co.localisation.lon),
                  name: 'o',
                  draggable: false,
                  country: co.localisation.nom_structure,
                  source : co.source,
                }
              self.markers.push(mark);
            }
            self.chartOptions2.series[1].data = self.markers; 
            self.chartOptions2.series[1].name = "Name"; 
            self.refreshing = false;
            setTimeout(() => {
              self.refreshing = true;
            }, 10);
        })
      .catch(function (error) {
          console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
  },
  mounted() {
    this.getDatasets();
     this.init();
  },
};
</script>
