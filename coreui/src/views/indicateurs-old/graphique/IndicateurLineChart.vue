<template>
  <CCard>
    <CCardHeader class="no-margin col-lg-12"
      ><label class="h5">{{ indicateur }}</label>
      <div class="card-header-actions no-padding no-margin">
        <CDropdown color="link" size="sm" :caret="false">
          <template #toggler-content>
            <CIcon name="cil-options" />
          </template>
          <CDropdownItem @click="toggleFullscreen">Plein écran</CDropdownItem>
          <CDropdownItem>Exporter csv</CDropdownItem>
        </CDropdown>
      </div>
    </CCardHeader>
    <CCardBody>
      <template>
        <div ref="myDiv" @click="toggleFullscreen">
          <CChartLine
            :datasets="datasets"
            :options="computedOptions"
            :labels="labels"
            style="min-height: 50vh"
          />
        </div>
      </template>
    </CCardBody>
  </CCard>
</template>

<script>
import { deepObjectsMerge } from "@coreui/utils/src";
import axios from "axios";
import { CChartLine } from "@coreui/vue-chartjs";

export default {
  name: "IndicateurLineChart",
  components: { CChartLine },
  props: ["commune_id", "indicateur", "groupe", "annee"],
  data() {
    return {
      data1: [],
      labels: [],
      items: [],
      datasets: [],
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
      return deepObjectsMerge(this.defaultOptions, this.options || {});
    },
  },
  methods: {
    getDatasets() {
      let self = this;
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
            console.log(response.data)
          self.datasets = [
            {
              backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
              data: [],
            },
          ];
          for (let d of response.data) {
            self.datasets[0].data.push(d.indice);
            // self.data1.push(d.indice);
            if (d.niveau1) {
              self.labels.push(d.niveau1);
            } else if (d.niveau2) {
              self.labels.push(d.niveau2);
            } else if (d.indicateur) {
              self.labels.push(d.indicateur);
            }
            // self.indicateurTitle=d.indicateur;
          }
          self.label = self.indicateur;

          // for(let i=0;i<self.items.length;i=i+1)
          // {
          //   // console.log(self.items)
          //   const d=self.items[i];
          //   // const  d2=self.items[i+1];
          //   //   self.labels.push(d.indicateur);
          //   //   if(d.niveau1=="OUI")
          //     self.data1.push(d.indice);
          //     // else
          //     // self.data2.push(d.indice);

          //     // if(d2.niveau1=="OUI")
          //     // self.data1.push(d2.indice);
          //     // else
          //     // self.data2.push(d2.indice);
          // }
          console.log(self.data1);
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
            // console.log(error.response);
            self.$router.push({ path: "login" });
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
