<template>
  <CCard>
    <CCardHeader class="no-margin col-lg-12"
      ><label class="h5"
        >{{ indicateur }} {{ anneelist.toLocaleString() }}</label
      >
      <div class="card-header-actions no-padding no-margin">
        <CDropdown color="link" size="sm" :caret="false">
          <template #toggler-content>
            <CIcon name="cil-options" />
          </template>
          <CDropdownItem @click="toggleFullscreen">Plein écran</CDropdownItem>
          <CDropdownItem  @click="exporter()">Exporter csv</CDropdownItem>
        </CDropdown>
      </div>
    </CCardHeader>
    <CCardBody>
      <div ref="myDiv">
        <CChartBar v-if="!togglePress"
          :datasets="datasets"
          :options="computedOptions"
          :labels="labels"
          style="min-height: 50vh"
        />
        
        <CChartLine  v-if="togglePress"
            :datasets="datasets"
            :options="computedOptions"
            :labels="labels"
            style="min-height: 50vh"
          />
      </div>

      <div v-if="anneelist.length > 1">Changer de graphique 
        <CSwitch
          class="mr-1"
          color="danger"
          shape="pill"
          :checked.sync="togglePress"
        />
      </div>
      <div style="display: none;">{{ datasets[0].backgroundColor = !togglePress?"#41B883":'transparent' }}</div>
    </CCardBody>
  </CCard>
</template>

<script>
import { CChartBar } from "@coreui/vue-chartjs";
import { CChartLine } from "@coreui/vue-chartjs";
import { getColor, deepObjectsMerge } from "@coreui/utils/src";
import axios from "axios";
var FileSaver = require('file-saver');

export default {
  name: "IndicateurBarChart",
  components: { CChartBar,CChartLine },
  props: ["commune_id", "indicateur", "groupe", "annee"],
  data() {
    return {
      an: null,
      compteur: 0,
      anneelist: [],
      data1: [],
      labels: [],
      items: [],
      datasets: [],
      togglePress: false,
    };
  },
  computed: {
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
        maintainAspectRatio: true,
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
      return deepObjectsMerge(this.defaultOptions, this.options || {});
    },
  },
  methods: {
    exporter(){
      this.successModal = true;
      if(!this.items||this.items.length==0){
      this.$toasted.show("Pas de données",{type:"warning"});
      return;
      }

      var blob = new Blob([this.convertToCSV(this.items)], {type: "text/csv;charset=utf-8"});
      FileSaver.saveAs(blob, this.indicateur+" "+this.anneelist.toLocaleString() +".csv");
      this.successModal = false;
    },
    convertToCSV(arr) {
      arr.forEach(item=>{
          Object.keys(arr[0]).forEach(champ => {
              item[champ]=item[champ]?item[champ].toString().trim():item[champ]
            });
        })
        const array = [Object.keys(arr[0])].concat(arr)
        return array.map(it => {
            return Object.values(it).join(';').toString()
        }).join('\n')
    },
    getDatasets() {
      let self = this;
      if(!this.indicateur) return;
      if(!this.annee) return;
      const criteria = {
        groupe: this.groupe,
        indicateur: this.indicateur,
        commune_id: this.commune_id,
        annee: this.annee,
      };
      axios
        .post(
          this.$apiAdress +
            "/api/indicateurs-old/findBy?token=" +
            localStorage.getItem("api_token"),
          criteria
        )
        .then(function (response) {
          self.items = response.data;
          self.datasets = [
            {
              label: self.indicateur,
              backgroundColor: '#f87979',
              borderColor:["#E46651"],
              data: [],
            },
          ];
          // Verifier si nous avons plusieurs année
          if (response.data) {
            self.anneelist = [];
            for (let x of response.data) {
              let verif = false;
              for(let y of self.anneelist){
                if(y===x.annee){
                  verif=true;
                  break;
                }
              }
              if(!verif){self.anneelist.push(x.annee)}
            }
            // self.datasets[0].label = self.anneelist;
            
            for (let d of response.data) {
              self.datasets[0].data.push(d.indice);
              if (self.anneelist.length > 1) {
                self.labels.push(d.annee);
              } else if (d.niveau2) {
                self.labels.push(d.niveau2);
              } else if (d.niveau1) {
                self.labels.push(d.niveau1);
              } else if (d.indicateur) {
                self.labels.push(d.indicateur);
              }
            }

          }
          self.label = self.indicateur;
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
            // self.$router.push({ path: "login" });
            self.$toasted.show(self.message,{type:"error"});
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
    this.getDatasets();
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
