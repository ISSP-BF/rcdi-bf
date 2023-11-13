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
import accessibility from 'highcharts/modules/accessibility'; // Assure-toi d'inclure le module d'accessibilité
import exporting from 'highcharts/modules/exporting'; // Assure-toi d'inclure le module exporting

accessibility(Highcharts);
exporting(Highcharts);
import axios from "axios";
HighchartsMapModule(Highcharts);

export default {
  name: "ShapeMaps",
  props: ["mapDataO", "donneeSearch", "refreshingparent"],
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      refreshing: true,
      markers: [],
      chartOptions2: {
        chart: {
          map: null,
        },
        title: {
          text: null,
        },
        tooltip: {
          headerFormat: "",
          pointFormat:
            "<b>{point.country}</b><br>Valeur : {point.valeur:.2f}<br>Source : {point.source}",
        },

        legend: {
            title: {
                text: 'Degrees Celsius'
            },
            floating: true,
            backgroundColor: '#ffffffcc'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: "spacingBox",
                verticalAlign: 'bottom'
          },
        },

      colorAxis: {
          min: 0,
          max: 400,
          labels: {
              format: '{valeur}'
          },
          stops: [
              [0, '#0000ff'],
              [0.3, '#6da5ff'],
              [0.6, '#ffff00'],
              [1, '#ff0000']
          ]
      },
      
      exporting: {
        enabled: true, // Active les boutons d'exportation
            buttons: {
                contextButton: {
                    align: 'left',
                    menuItems: [
                      "viewFullscreen",
                      "downloadPNG",
                      "downloadJPEG",
                      "downloadPDF",
                    ],
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
            data: [],
            animation: false,
            type: 'mappoint',
            showInLegend: false,
            marker: {
                enabled: false
            },
            // dataLabels: {
            //   enabled: false,
            // },
            // allAreas: true,
            dataLabels: {
                crop: true,
                format: '{y}',
                inside: true,
                y: -14,
                style: {
                    color: 'contrast',
                    textOutline: 'none'
                },
                shape: 'mapmarker',
                borderColor: 'black',
                borderWidth: 1,
                backgroundColor: 'auto'
            },
          },
        ],
      accessibility: {
        enabled: true, // Assure-toi que l'accessibilité est activée
      },
      },
    };
  },
  watch: {
    reloadParams() {
      this.init();
      this.getDatasets();
    },
  },
  computed: {
    reloadParams() {
      return [this.refreshingparent];
    },
  },
  methods: {
    init() {
      this.chartOptions2.chart.map = this.mapDataO;
      this.refreshing = false;
      setTimeout(() => {
        this.refreshing = true;
      }, 10);
    },
    getDatasets() {
      let self = this;
      axios
        .post(
          this.$apiAdress +
            "/api/donnees/findCarteDataBy?token=" +
            localStorage.getItem("api_token"),
          self.donneeSearch
        )
        .then(function (response) {
          self.markers = [];

          for (let co of response.data) {
            let mark = {
              valeur: co.valeur,
              z: co.valeur,
              y: co.valeur,
              lat: parseFloat(co.localisation.lat),
              lon: parseFloat(co.localisation.lon),
              name: ".",
              draggable: false,
              country: co.localisation.nom_structure,
              source: co.source,
              radius: 5,
            };
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
