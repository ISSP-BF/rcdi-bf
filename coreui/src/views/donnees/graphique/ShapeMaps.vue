<template>
  <CCard>
    <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions2" ref="chart" style="height: 75vh"
      v-if="refreshing"></highcharts>
  </CCard>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import HighchartsMapModule from "highcharts/modules/map";
import accessibility from 'highcharts/modules/accessibility'; // Assure-toi d'inclure le module d'accessibilité
import exporting from 'highcharts/modules/exporting'; // Assure-toi d'inclure le module exporting
import tiledwebmap from "highcharts/modules/tiledwebmap";

accessibility(Highcharts);
exporting(Highcharts);
// tiledwebmap(Highcharts);
import axios from "axios";
HighchartsMapModule(Highcharts);
tiledwebmap(Highcharts);
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
          text: '',
        },
        legend: {
          enabled: true,
        },
        tooltip: {
          headerFormat: "",
          pointFormat:
            "<b>{point.country}</b><br>Valeur : {point.valeur:.2f}<br>Source : {point.source}",
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: "spacingBox",
            verticalAlign: 'bottom'
          },
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
            type: 'tiledwebmap',
            name: 'Carte OpenStreetMap',
            provider: {
              type: 'OpenStreetMap',// Thunderforest|OpenStreetMap|Esri|Stamen
              theme: 'Standard',// OpenTopoMap|Standard,
              subdomain: 'a'
              // https://www.highcharts.com/docs/maps/tiledwebmap
            },
            states: {
              hover: {
                enabled: true,
                opacity: 0.2,
                color: 'rgba(0, 0, 0, 0)', // Couleur transparente au survol
              },
            },
          },

          {

            data: [],
            name: 'Commune',
            dataLabels: {
              verticalAlign: 'top'
            },
            borderColor: '#A0A0A0',
            nullColor: 'rgba(0, 0, 0, 0.5)',
          },
          {
            type: 'mapbubble',
            enableMouseTracking: true,
            showInLegend: false,
            colorKey: 'clusterPointsAmount',
            data: [],
            minSize: '1%',
            maxSize: '5%',
            color: '#2caffe',
            marker: {
              lineWidth: 0.1,
              lineColor: '#000',
              symbol: 'topology',
              radius: 1
            },
            dataLabels: {
              verticalAlign: 'top'
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}'
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
      this.chartOptions2.series[1].mapData = this.mapDataO;
      // this.refreshing = false;
      // setTimeout(() => {
      //   this.refreshing = true;
      // }, 10);
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
              name: "",
              draggable: false,
              country: co.localisation.nom_structure,
              source: co.source,
              radius: 5,
            };
            self.markers.push(mark);
          }
          self.chartOptions2.series[2].data = self.markers;
          self.chartOptions2.series[2].name = "Name";
          self.chartOptions2.title.text = response.data[0].indicateur.libelle;
          // self.refreshing = false;
          // setTimeout(() => {
          //   self.refreshing = true;
          // }, 10);
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
