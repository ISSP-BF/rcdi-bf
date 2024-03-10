<template>
  <CCard>
    <CCardHeader class="no-margin col-lg-12"
      ><label class="h5"
        >{{ indicateurTitle }} {{ anneelist?anneelist.toLocaleString():"" }}</label
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
    <CCardBody ref="myDiv">
      <div>
        <CChartBar v-if="!togglePress"
          :datasets="datasets"
          :options="computedOptions"
          :labels="labels"
          style="min-height: 60vh"
        />
        
        <CChartLine  v-if="togglePress"
            :datasets="datasets"
            :options="computedOptions"
            :labels="labels"
            style="min-height: 60vh"
            pointed
          />
      </div>
      <br>
      <div style="display: inline-flex;">
        
        <CSwitch
          class="mr-1"
          color="danger"
          shape="pill"
          :checked.sync="togglePress"
        /> &nbsp;&nbsp; <label>{{!togglePress?"Courbe":'Histogramme'}}</label>
      </div>
      <div style="display: none;" v-if="datasets[0]">{{ datasets[0].backgroundColor = !togglePress?"#41B883":'transparent' }}</div>

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
  props: ["donneeSearch","refreshing","graphique"],
  data() {
    return {
      an: null,
      compteur: 0,
      anneelist: [],
      periodelist:[],
      indicateurTitle:"",
      data1: [],
      labels: [],
      items: [],
      datasets: [],
      togglePress: false,
      indicateur:"",
    };
  },
  watch: {
    reloadParams() {
      localStorage.setItem("togglePress",JSON.stringify(this.togglePress))
      this.getDatasets();
      if(this.graphique=="COURBE"){this.togglePress = true;}
      else this.togglePress = false;
    },
  },
  computed:{
    reloadParams() {
      return [this.refreshing,this.graphique
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
    updatedPeriodeInList(listValue){
        let choixPeriodes = [];
        listValue.forEach(d=>{
        switch (d.periode) {
          case "TRIMESTRIEL":
            choixPeriodes = [{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"},]
            break;
          case "MENSUEL":
          choixPeriodes = [
            {value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},
            {value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},
            {value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"},
          ]
            break;
          case "SEMESTRIEL":
        choixPeriodes = [{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}]
            break;
          case "ANNUEL":
            choixPeriodes = [];
            break;
        
          default:
            break;
        }
        if(d.periode!="ANNUEL"){
          d.periode_value = choixPeriodes[d.periode_value-1].label;
        }

      })
        

    },
    genererTableauCouleur(nombre){
        const teinteBase = Math.floor(Math.random()*360);
        const variationTeinte = 360/nombre;
        const couleurs = [];
        for(let i=0;i<nombre;i++){
          const teinte = (teinteBase+i*variationTeinte)%360;
          const saturation = Math.floor(Math.random()*31)+70;
          const luminosite = Math.floor(Math.random()*31)+50;
          couleurs.push(`hsl(${teinte},${saturation}%,${luminosite}%)`)
        }
    },
    async getDatasets() {
      let self = this;
     console.log(self.donneeSearch)
      axios
        .post(this.$apiAdress + '/api/donnees/findBy?token=' + localStorage.getItem("api_token"),
          self.donneeSearch
        )
        .then(function (response) {
          self.items = response.data;
          self.datasets = [
            {fill: false,
        lineTension: 0.1,  
        pointBorderColor: '#E46651',  
        pointHoverBackgroundColor: '#E46651',
        pointHoverBorderColor: '#E46651',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
              label: self.items&&self.items.length>0?self.items[0].indicateur:'',
              backgroundColor: '#f87979',
              borderColor:["#E46651"],
              data: [],
            },
          ];
          self.updatedPeriodeInList(self.items);
          // Verifier si nous avons plusieurs année
          if (self.items&&self.items.length>0) {
            self.indicateurTitle=self.items[0].indicateur;
            self.anneelist = [];
            for (let x of self.items) {
              let verif = false;
              for(let y of self.anneelist){
                if(y===x.annee){
                  verif=true;
                  break;
                }
              }
              if(!verif){self.anneelist.push(x.annee)}
            }
            

            self.periodelist = []
            for (let x of self.items) {
              let verif = false;
              console.log(x)
              for(let y of self.periodelist){
                if(y===x.periode_value){
                  verif=true;
                  break;
                }
              }
              if(!verif){self.periodelist.push(x.periode_value)}
            }
            self.datasets[0].data = []
            self.labels =  [ ]
            for (let d of self.items) {
              self.datasets[0].data.push(d.valeur);
              if(self.anneelist.length > 1&&self.periodelist.length>1&&d.periode!="ANNUEL"){
                self.labels.push(d.periode_value+" "+d.annee)
              }
              else if (self.anneelist.length > 1) {
                self.labels.push(d.annee);
              } 
              else if(self.periodelist.length>1){
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

          }
          self.label = self.indicateur;
        })
        .catch(function (error) {
          console.log(error.response.status==401);
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
    if(localStorage.getItem("togglePress")){
      this.togglePress = JSON.parse(localStorage.getItem("togglePress"))
    }
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
