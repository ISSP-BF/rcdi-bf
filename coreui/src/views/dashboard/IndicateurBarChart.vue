<template>
  <CCard>
      <CCardHeader><h4 class="card-title mb-0">{{ indicateur }}</h4></CCardHeader>
    <CCardBody>
        <div ref="myDiv" @click="toggleFullscreen">
         <CChartBar
      :datasets="datasets"
      :options="computedOptions"
      :labels="labels"
      style="min-height: 50vh"
    />
        </div>
    </CCardBody>
  </CCard>
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'
import { getColor, deepObjectsMerge } from '@coreui/utils/src'
import axios from 'axios'

export default {
  name: 'IndicateurBarChart',
  components: { CChartBar },
  props: ['commune_id','indicateur','groupe','annee'], 
  data () {
    return {
      data1:[],
      labels:[],
      items:[],
      datasets:[]
    }
  },
  computed: {
    defaultDatasets () {
      return [
        {
          data: this.data1,
          label:""
        }
      ]
    },
    defaultOptions () {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            stacked: true
          }],
          yAxes: [{
            display: true,
            stacked: true
          }],
        }
      }
    },
    computedDatasets () {
      return deepObjectsMerge(this.defaultDatasets, this.datasets || {})
    },
    computedOptions () {
      return deepObjectsMerge(this.defaultOptions, this.options || {})
    }
  },
  methods: {
    async getDatasets (){
      let self = this;
      const criteria =  {
            groupe:this.groupe,
            indicateur:this.indicateur,
            commune_id:this.commune_id,
            annee:this.annee
          };
          if(this.annee)
      axios.post(  this.$apiAdress + '/api/indicateurs-old/findBy?token=' + localStorage.getItem("api_token"),
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
              // self.data1.push(d.indice);
              if(d.niveau1){
              self.labels.push(d.niveau1);
              }
              else if(d.niveau2){
              self.labels.push(d.niveau2);
              }
              else if(d.indicateur){
              self.labels.push(d.indicateur);
              }
              // self.indicateurTitle=d.indicateur;
            }
            self.label = self.indicateur

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
            console.log(self.data1)

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
    }
  },
  mounted: function(){
    this.getDatasets();
  }
}
</script>
