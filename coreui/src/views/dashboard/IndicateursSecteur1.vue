<template>
  <CCard>
    <CCardHeader><label class="h5">{{indicateurTitle}}</label>
            <div class="card-header-actions">
              
              <CDropdown
                color="link"
                size="lg"
                :caret="false"
              >
                <template #toggler-content>
                  <CIcon name="cil-options"/>
                </template>
                <CDropdownItem @click="toggleFullscreen">Plein écran</CDropdownItem>
                <CDropdownItem>Exporter csv</CDropdownItem>
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

export default {
  name: 'IndicateursSecteur1',
  components: { CChartPie },
  props: ['commune_id','indicateur','annee'],
  data () {
    return {
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
      indicateurTitle:'',
      labels:[]
    }
  },
  methods: {
    async getDatasets (){
      let self = this;
      const criteria =  {
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
            for (let d of response.data){
              self.datasets[0].data.push(d.indice);
             // if(d.niveau1)
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
    this.getDatasets();
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