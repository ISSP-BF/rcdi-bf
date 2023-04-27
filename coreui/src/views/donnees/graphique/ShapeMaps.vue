<template>
  <highcharts
    :constructorType="'mapChart'"
    class="hc"
    :options="chartOptions2"
    ref="chart"
    style="height: 75vh"
    v-if="refreshing"
  ></highcharts>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import HighchartsMapModule from "highcharts/modules/map";
HighchartsMapModule(Highcharts);

export default {
  name: "ShapeMaps",
  props: ["mapDatao","markers"],
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      refreshing: true,
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
                  // symbol: 'mapmarker',
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
    },
  },
  computed:{
    reloadParams() {
      return [this.markers,this.mapDatao
      ];
    },
  },
  methods: {
    init(){
      this.chartOptions2.chart.map = this.mapDatao;
    this.chartOptions2.series[1].data = this.markers; 
    this.chartOptions2.series[1].name = "Name"; 
    this.refreshing = false;
    setTimeout(() => {
      this.refreshing = true;
    }, 10);
    }
  },
  mounted() {
    this.init();
  },
};
</script>
