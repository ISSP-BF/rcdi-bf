<template>
  <div class="col-lg-12" ref="myDiv">
    <CChartPie
      v-if="choixgraphique == 'SECTEUR'"
      :datasets="datasets"
      :options="defaultOptions"
      :labels="labels"
    />
    <CChartDoughnut
      v-if="choixgraphique == 'DOUGHNUT'"
      :datasets="datasets"
      :options="defaultOptions"
      :labels="labels"
    />
    <CChartPolarArea
      v-if="choixgraphique == 'POLAR'"
      :datasets="datasets"
      :options="defaultOptions"
      :labels="labels"
    />

    <CRow form class="form-group col-lg-12"> 
      <CCol sm="12" class="custom-control-inline">
         
        <div
          role="group"
          class="custom-control custom-control-inline custom-radio"
        >
          <input
            id="SECTEUR" 
            type="radio"
            class="custom-control-input"
            v-model="choixgraphique"
            value="SECTEUR"
          />
          <label for="SECTEUR" class="custom-control-label"> SECTEUR </label>
         </div>
        <div
          role="group"
          class="custom-control custom-control-inline custom-radio"
        >
          <input
            id="DOUGHNUT"
            type="radio"
            class="custom-control-input"
            v-model="choixgraphique"
            value="DOUGHNUT"
          />
          <label for="DOUGHNUT" class="custom-control-label"> DOUGHNUT </label>
        </div>
        <div
          role="group"
          class="custom-control custom-control-inline custom-radio"
        >
          <input
            id="POLAR"
            type="radio"
            class="custom-control-input"
            v-model="choixgraphique"
            value="POLAR"
          />
          <label for="POLAR" class="custom-control-label"> POLAR </label>
        </div>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { CChartPie } from "@coreui/vue-chartjs";
import axios from "axios";
var FileSaver = require("file-saver");
import { getColor, deepObjectsMerge } from "@coreui/utils/src";
import { CChartDoughnut } from "@coreui/vue-chartjs";
import { CChartPolarArea } from "@coreui/vue-chartjs";

export default {
  name: "IndicateursSecteur",
  components: { CChartPie, CChartDoughnut, CChartPolarArea },
  props: ["donneeSearch", "refreshing"],

  watch: {
    reloadParams() {
      this.getDatasets();
    },
  },
  computed: {
    reloadParams() {
      return [this.refreshing];
    },
    defaultOptions() {
      return {
        aspectRatio: 0.9,
      };
    },
  },
  data() {
    return {
      anneelist: null,
      periodelist: null,
      choixgraphique: "SECTEUR",
      datasets: [
        {
          backgroundColor: getColor(this.backgroundColor),
          data: [],
        },
      ],
      indicateurTitle: null,
      labels: [],
      backgroundColor: {
        type: String,
        default: "rgba(0,0,0,.2)",
      },
    };
  },
  methods: {
    exporter() {
      this.successModal = true;
      if (!this.items || this.items.length == 0) {
        this.$toasted.show("Pas de données", { type: "warning" });
        return;
      }

      var blob = new Blob([this.convertToCSV(this.items)], {
        type: "text/csv;charset=utf-8",
      });
      FileSaver.saveAs(blob, " " + this.anneelist.toLocaleString() + ".csv");
      this.successModal = false;
    },
    convertToCSV(arr) {
      arr.forEach((item) => {
        Object.keys(arr[0]).forEach((champ) => {
          item[champ] = item[champ]
            ? item[champ].toString().trim()
            : item[champ];
        });
      });
      const array = [Object.keys(arr[0])].concat(arr);
      return array
        .map((it) => {
          return Object.values(it).join(";").toString();
        })
        .join("\n");
    },
    updatedPeriodeInList(listValue) {
      let choixPeriodes = [];
      listValue.forEach((d) => {
        switch (d.periode) {
          case "TRIMESTRIEL":
            choixPeriodes = [
              { value: 1, label: "Trimestre 1" },
              { value: 2, label: "Trimestre 2" },
              { value: 3, label: "Trimestre 3" },
              { value: 4, label: "Trimestre 4" },
            ];
            break;
          case "MENSUEL":
            choixPeriodes = [
              { value: 1, label: "Janvier" },
              { value: 2, label: "Février" },
              { value: 3, label: "Mars" },
              { value: 4, label: "Avril" },
              { value: 5, label: "Mai" },
              { value: 6, label: "Juin" },
              { value: 7, label: "Juillet" },
              { value: 8, label: "Aout" },
              { value: 9, label: "Septembre" },
              { value: 10, label: "Octobre" },
              { value: 11, label: "Novembre" },
              { value: 12, label: "Décembre" },
            ];
            break;
          case "SEMESTRIEL":
            choixPeriodes = [
              { value: 1, label: "Semestre 1" },
              { value: 2, label: "Semestre 2" },
            ];
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
      });
    },
    genererTableauCouleur(nombre) {
      const teinteBase = Math.floor(nombre * 360);
      const variationTeinte = 360 / nombre;
      const couleurs = [];
      for (let i = 0; i < nombre; i++) {
        const teinte = (teinteBase + i * variationTeinte) % 360;
        const saturation = Math.floor(i * 31) + 70;
        const luminosite = Math.floor(i * 31) + 50;
        couleurs.push(`hsl(${teinte},${saturation}%,${luminosite}%)`);
      }
      return couleurs;
    },
    genererTableauCouleur2(nombre) {
      const couleurs = [];
      const choixVariableCouleur = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      for (let t = 0; t < nombre; t++) {
        let c = "#";
        for (let i = 0; i < 6; i++) {
          c += choixVariableCouleur[Math.floor(Math.random() * 16)];
        }
        couleurs.push(c);
      }
      return couleurs;
    },
    async getDatasets() {
      let self = this;
      axios
        .post(
          this.$apiAdress +
            "/api/donnees/findBy?token=" +
            localStorage.getItem("api_token"),
          self.donneeSearch
        )
        .then(function (response) {
          self.items = response.data;
          self.datasets = [
            {
              backgroundColor: self.genererTableauCouleur(100),
              data: [],
            },
          ];
          self.updatedPeriodeInList(self.items);

          self.anneelist = [];
          for (let x of self.items) {
            let verif = false;
            for (let y of self.anneelist) {
              if (y === x.annee) {
                verif = true;
                break;
              }
            }
            if (!verif) {
              self.anneelist.push(x.annee);
            }
          }

          self.periodelist = [];
          for (let x of self.items) {
            let verif = false;
            for (let y of self.periodelist) {
              if (y === x.periode_value) {
                verif = true;
                break;
              }
            }
            if (!verif) {
              self.periodelist.push(x.periode_value);
            }
          }

          self.datasets[0].data = [];
          self.labels = [];
          for (let d of self.items) {
            self.datasets[0].data.push(d.valeur);
            // if(d.niveau1)
            if (
              self.anneelist.length > 1 &&
              self.periodelist.length > 1 &&
              d.periode != "ANNUEL"
            ) {
              self.labels.push(d.periode_value + " " + d.annee);
            } else if (self.anneelist.length > 1) {
              self.labels.push(d.annee);
            } else if (self.periodelist.length > 1) {
              self.labels.push(d.periode_value);
            } else self.labels.push(d.indicateur);
            self.indicateurTitle = d.indicateur;
          }

          self.datasets[0].backgroundColor = self.genererTableauCouleur2(
            self.labels.length
          );
        })
        .catch(function (error) {
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
          } else {
            // if(error.response.status==401)
            // self.$router.push({ path: "login" });
            // console.log(error.response);
            // self.$router.push({ path: 'login' });
          }
          self.$toasted.show(self.message, { type: "error" });
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
    let self = this;
    self.getDatasets();
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
