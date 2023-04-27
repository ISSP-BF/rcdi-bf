<template>
  <CCard>
    <CCardHeader class=" no-margin col-lg-12"><label class="h5">{{indicateurTitle?indicateurTitle:indicateur}}  {{ anneelist.toLocaleString() }}</label>
            <div class="card-header-actions no-padding no-margin">
              
              <CDropdown
                color="link"
                size="sm"
                :caret="false" 
              >
                <template #toggler-content>
                  <CIcon name="cil-options"/>
                </template>
                <CDropdownItem @click="toggleFullscreen">Plein écran</CDropdownItem>
                <CDropdownItem  @click="exporter()">Exporter csv</CDropdownItem>
              </CDropdown>
            </div>
    </CCardHeader>
    <CCardBody>
      <template>
        <div ref="myDiv" @click="toggleFullscreen">

        <CChartPie
          :datasets="datasets"
          :labels="labels"
        />
      </div>
      </template>
    </CCardBody>
  </CCard>
</template>

<script>
import { CChartPie } from '@coreui/vue-chartjs'
import axios from 'axios'
var FileSaver = require('file-saver');

export default {
  name: 'IndicateursSecteur',
  components: { CChartPie },
  props: ['groupe','commune_id','indicateur','annee'],
  data () {
    return {anneelist:null,
      datasets:[
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: []
        }
      ],
      indicateurTitle:null,
      labels:[]
    }
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
    getDatasets (){
      let self = this;
      console.log(this.indicateur,this.annee)
      if(!this.indicateur) return;
      if(!this.annee||this.annee.length<1) return;
      const criteria =  {
        groupe: this.groupe,
            indicateur:this.indicateur,
            commune_id:this.commune_id,
            annee:this.annee
          };
      axios.post(  this.$apiAdress + '/api/indicateurs-old/findBy',
         criteria
        )
        .then(function (response) {
            self.items = response.data;
            
            self.datasets=[{
              backgroundColor: [
                '#41B883',
                '#E46651',
                '#00D8FF',
                '#DD1B16'
              ],
              data: []
            }]
            
            self.anneelist = [];
            for (let x of response.data) {
              let verif = false;
              console.log(x)
              for(let y of self.anneelist){
                if(y===x.annee){
                  verif=true;
                  break;
                }
              }
              if(!verif){self.anneelist.push(x.annee)}
            }

            for (let d of response.data){
              self.datasets[0].data.push(d.indice);
             // if(d.niveau1)
             if (self.anneelist.length > 1) {
                self.labels.push(d.annee);
              }
              else
              self.labels.push(d.niveau1?d.niveau1:d.indicateur);
              self.indicateurTitle=d.indicateur;
            }
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
            }else{
              // console.log(error.response);
              self.$router.push({ path: 'login' }); 
            }
            self.$toasted.show(self.message,{type:"error"});
        });
    },
    toggleFullscreen() {
      const elem = this.$refs.myDiv;
      if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
          console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  },
  mounted: function(){
    let self = this;
    self.getDatasets();
  }
}
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