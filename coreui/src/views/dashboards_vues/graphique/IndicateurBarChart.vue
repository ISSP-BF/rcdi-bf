<template>
  <CRow class="col-lg-12">

    <highcharts type="chart" :options="chartOptions" class="col-lg-12" v-if="chartOptions.chart.type !== 'FIXE'"></highcharts>
    <IndicateursShow  class="col-lg-12"
          v-if="chartOptions.chart.type == 'FIXE'"
          :donneeSearch="donneeSearch" :refreshing="true" :seuil="seuil"/> 

    <CRow form class="form-group col-lg-12" v-if="anneelist.length > 1 || periodelist.length > 1"
      style="display: inline-flex;">
      <CCol sm="12" class="custom-control-inline">

        <div role="group" class="custom-control custom-control-inline custom-radio">
          <input :id="'HISTOGRAMME' + index" type="radio" class="custom-control-input" v-model="chartOptions.chart.type"
            value="column" />
          <label :for="'HISTOGRAMME' + index" class="custom-control-label"> HISTOGRAMME </label>
        </div>
        <div role="group" class="custom-control custom-control-inline custom-radio">
          <input :id="'COURBE' + index" type="radio" class="custom-control-input" v-model="chartOptions.chart.type"
            value="line" />
          <label :for="'COURBE' + index" class="custom-control-label"> COURBE </label>
        </div>
        <div role="group" class="custom-control custom-control-inline custom-radio">
          <input :id="'FIXE' + index" type="radio" class="custom-control-input" v-model="chartOptions.chart.type"
            value="FIXE" />
          <label :for="'FIXE' + index" class="custom-control-label"> FIXE </label>
        </div>
      </CCol>
    </CRow>

  </CRow>

</template>

<script>
import { CChartBar } from "@coreui/vue-chartjs";
import { CChartLine } from "@coreui/vue-chartjs";
import { deepObjectsMerge } from "@coreui/utils/src";
var FileSaver = require('file-saver');
import { BarChart } from 'highcharts-vue'
import IndicateursShow from "./IndicateursShow";

export default {
  name: "IndicateurBarChart",
  components: { CChartBar, CChartLine, BarChart,IndicateursShow },
  props: ["donneeSearch", "refreshing", "choixgraphique", "seuil"],
  data() {
    return {
      an: null,
      compteur: 0,
      choixgraphiquelocal: null,
      anneelist: [],
      periodelist: [],
      indicateurTitle: "",
      index: Math.random() * 100,
      data1: [],
      labels: [],
      items: [],
      datasets: [],
      togglePress: false,
      indicateur: "",
      chartOptions: {
        credits: {
          text: '',
          href: '#'
        },
        title: { text: '' },
        chart: {
          type: 'column',
        },
        borderColor: '#F0F',
        xAxis: {
          categories: []
        },
        plotOptions: {
          series: {
            colorByPoint: true,
            zones: []
          }
        },
        series: [{
          data: [],// sample data,
          colorByPoint: true,
        }]
      }
    }
  },
  watch: {
    reloadParams() {
      if (!this.choixgraphiquelocal) { this.choixgraphiquelocal = "column" }
      localStorage.setItem("choixgraphiquelocal", JSON.stringify(this.choixgraphiquelocal))
      this.getDatasets();
    },
  },
  computed: {
    reloadParams() {
      return [this.refreshing
      ];
    },

    defaultDatasets() {
      return [
        {
          data: this.data1,
          label: "",
        },
      ];
    },
    defaultOptions() {
      return {
        aspectRatio: 1.5,
        maintainAspectRatio: false,
        legend: {
          display: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              stacked: true,
            },
          ],
          yAxes: [
            {
              display: true,
              stacked: true,
            },
          ],
        },
      };
    },
    computedDatasets() {
      return deepObjectsMerge(this.defaultDatasets, this.datasets || {});
    },
    computedOptions() {
      return deepObjectsMerge(this.defaultOptions, {});
    },
  },
  methods: {
    exporter() {
      this.successModal = true;
      if (!this.items || this.items.length == 0) {
        this.$toasted.show("Pas de données", { type: "warning" });
        return;
      }

      var blob = new Blob([this.convertToCSV(this.items)], { type: "text/csv;charset=utf-8" });
      FileSaver.saveAs(blob, this.indicateur + " " + this.anneelist.toLocaleString() + ".csv");
      this.successModal = false;
    },
    convertToCSV(arr) {
      arr.forEach(item => {
        Object.keys(arr[0]).forEach(champ => {
          item[champ] = item[champ] ? item[champ].toString().trim() : item[champ]
        });
      })
      const array = [Object.keys(arr[0])].concat(arr)
      return array.map(it => {
        return Object.values(it).join(';').toString()
      }).join('\n')
    },
    updatedPeriodeInList(listValue) {
      let choixPeriodes = [];
      listValue.forEach(d => {
        switch (d.periode) {
          case "TRIMESTRIEL":
            choixPeriodes = [{ value: 1, label: "Trimestre 1" }, { value: 2, label: "Trimestre 2" }, { value: 3, label: "Trimestre 3" }, { value: 4, label: "Trimestre 4" },]
            break;
          case "MENSUEL":
            choixPeriodes = [
              { value: 1, label: "Janvier" }, { value: 2, label: "Février" }, { value: 3, label: "Mars" }, { value: 4, label: "Avril" },
              { value: 5, label: "Mai" }, { value: 6, label: "Juin" }, { value: 7, label: "Juillet" }, { value: 8, label: "Aout" },
              { value: 9, label: "Septembre" }, { value: 10, label: "Octobre" }, { value: 11, label: "Novembre" }, { value: 12, label: "Décembre" },
            ]
            break;
          case "SEMESTRIEL":
            choixPeriodes = [{ value: 1, label: "Semestre 1" }, { value: 2, label: "Semestre 2" }]
            break;
          case "ANNUEL":
            choixPeriodes = [];
            break;

          default:
            break;
        }
        if (d.periode != "ANNUEL") {
          d.periode_value = choixPeriodes[d.periode_value - 1].label;
        }

      })


    },
    async seuilControle() {
      let self = this;
      let donneeSearch = JSON.parse(JSON.stringify(self.donneeSearch));
      if (this.seuil.type_seuil == 'DATE_REFERENCE') {
        donneeSearch['periode'] = this.seuil.seuil_periode;
        donneeSearch['periode_value'] = [this.seuil.seuil_periode_value];
        donneeSearch['annee'] = [this.seuil.seuil_annee];
        this.$axios
          .post(this.$apiAdress + '/api/donnees/findBy?token=' + localStorage.getItem("api_token"),
            donneeSearch
          )
          .then(function (response) {
            let itemsSeuil = response.data;
            console.log(itemsSeuil, "itemsSeuil", self.seuil)
            if (itemsSeuil.length > 0) {
              self.seuil.seuil_valeur_reference = itemsSeuil[0].valeur;
            }
            self.getDatasets();
          }
          );
      }
      else {
        this.getDatasets();
      }
    },
    async getDatasets() {
      let self = this;
      this.$axios
        .post(this.$apiAdress + '/api/donnees/findBy?token=' + localStorage.getItem("api_token"),
          self.donneeSearch
        )
        .then(function (response) {
          self.items = response.data;
          self.datasets = [
            {
              fill: false,
              lineTension: 0.1,
              pointBorderColor: '#E46651',
              pointHoverBackgroundColor: '#E46651',
              pointHoverBorderColor: '#E46651',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              label: self.items && self.items.length > 0 ? self.items[0].indicateur : '',
              backgroundColor: '#f87979',
              borderColor: ["#E46651"],
              data: [],
            },
          ];
          self.updatedPeriodeInList(self.items);
          if (self.seuil?.type_seuil == 'MOYENNE') {
            self.seuil.seuil_valeur_reference = 0;
            if (self.items && self.items.length > 0) {
              for (let x of self.items) {
                self.seuil.seuil_valeur_reference = self.seuil.seuil_valeur_reference + x.valeur;
              }
              self.seuil.seuil_valeur_reference = self.seuil.seuil_valeur_reference / self.items.length;
            }
          }
          
            if (self.seuil?.type_seuil!=='INTERVALLE') {
              self.chartOptions.plotOptions.series.zones = [
                { value: self.seuil.seuil_valeur_reference, color: self.seuil.seuil_couleur_inferieur},
                { color: self.seuil.seuil_couleur_superieur }]
            }
            if (self.seuil?.type_seuil=='INTERVALLE'){
              self.chartOptions.plotOptions.series.zones = JSON.parse(self.seuil?.seuil_segment_list);
            }
          // Verifier si nous avons plusieurs année
          if (self.items && self.items.length > 0) {
            self.indicateurTitle = self.items[0].indicateur;
            self.anneelist = [];
            for (let x of self.items) {
              let verif = false;
              for (let y of self.anneelist) {
                if (y === x.annee) {
                  verif = true;
                  break;
                }
              }
              if (!verif) { self.anneelist.push(x.annee) }
            }


            self.periodelist = []
            for (let x of self.items) {
              let verif = false;
              for (let y of self.periodelist) {
                if (y === x.periode_value) {
                  verif = true;
                  break;
                }
              }
              if (!verif) { self.periodelist.push(x.periode_value) }
            }
            self.datasets[0].data = []
            self.labels = []
            for (let d of self.items) {
              if (self.seuil?.type_seuil!="INTERVALLE" && d.valeur > self.seuil.seuil_valeur_reference) {
                self.datasets[0].data.push({
                  y: d.valeur,
                  color: self.seuil.seuil_couleur_superieur
                });
              }
              if (self.seuil?.type_seuil!="INTERVALLE" && d.valeur < self.seuil.seuil_valeur_reference) {
                self.datasets[0].data.push({
                  y: d.valeur,
                  color: self.seuil.seuil_couleur_inferieur
                });
              }
              else if(self.seuil?.type_seuil=="INTERVALLE"){
                self.seuilcopy?.seuil_segment_list?.forEach(data => {
                  if (d['valeur'] >= data.debut && d['valeur'] <= data.value){
                    d['color'] = data.color;
                    console.log(data.color)
                    self.datasets[0].data.push({
                      y: d.valeur,
                      color: data.color
                    });
                  }
                });
                }
              else {
                self.datasets[0].data.push({
                  y: d.valeur,
                  color: "#0F0"
                });
              }
              if (self.anneelist.length > 1 && self.periodelist.length > 1 && d.periode != "ANNUEL") {
                self.labels.push(d.periode_value + " " + d.annee)
              }
              else if (self.anneelist.length > 1) {
                self.labels.push(d.annee);
              }
              else if (self.periodelist.length > 1) {
                self.labels.push(d.periode_value)
              }
              else if (d.niveau2) {
                self.labels.push(d.niveau2);
              } else if (d.niveau1) {
                self.labels.push(d.niveau1);
              } else if (d.indicateur) {
                self.labels.push(d.indicateur);
              }
            }
            self.chartOptions.xAxis.categories = self.labels;
            self.chartOptions.series[0].data = self.datasets[0].data;
            self.chartOptions.series[0].name = self.indicateurTitle;
            //self.chartOptions.title.text = self.indicateurTitle ;
          }
        })
        .catch(function (error) {
          if (
            error.response &&
            error.response.data.message == "The given data was invalid."
          ) {
            self.message = "";
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
          } else {
            // if(error.response.status==401)
            // self.$router.push({ path: "login" });
            self.$toasted.show(self.message, { type: "error" });
            console.log(error);
          }
        });
    },
    toggleFullscreen() {
      const elem = this.$refs.myDiv;
      if (!document.fullscreenElement) {
        elem.requestFullscreen().catch((err) => {
          console.log(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      } else {
        document.exitFullscreen();
      }
    },
  },
  mounted: function () {
    let self=this;
    self.seuilcopy = JSON.parse(JSON.stringify(self.seuil));
    if (self.seuilcopy?.type_seuil=='INTERVALLE'){
            self.seuilcopy['seuil_segment_list'] = JSON.parse(self.seuilcopy?.seuil_segment_list);
    }
    this.seuilControle();
    this.choixgraphiquelocal = this.choixgraphique;

    if (localStorage.getItem("choixgraphiquelocal")) {
      this.choixgraphiquelocal = JSON.parse(localStorage.getItem("choixgraphiquelocal"))
    } else
      if (!this.choixgraphiquelocal) { this.choixgraphiquelocal = "column" }
  },
};
</script>
<style>
div:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background-color: white;
}

div:-moz-full-screen {
  width: 100%;
  height: 100%;
  background-color: white;
}

div:fullscreen {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
