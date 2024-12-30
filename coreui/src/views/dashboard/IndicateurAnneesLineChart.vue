<template>
  <CCard>
      <CCardHeader><h4 class="card-title mb-0">{{ indicateur }}</h4></CCardHeader>
    <CCardBody>
         <CChartLine
      :datasets="datasets"
      :options="computedOptions"
      :labels="labels"
      style="min-height: 50vh"
    />
        
    </CCardBody>
  </CCard>
</template>

<script>
import { deepObjectsMerge } from '@coreui/utils/src'
import axios from 'axios'
import { CChartLine } from '@coreui/vue-chartjs'

export default {
  name: 'IndicateurAnneesLineChart',
  components: { CChartLine },
  props: ['commune_id','indicateur','groupe','annee','anneefin'], 
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
            annee:this.annee,
            anneefin:this.anneefin
          };
          if(this.annee)
      axios.post(  this.$apiAdress + '/api/indicateurs-old/findBy?token=' + localStorage.getItem("api_token"),
         criteria
        )
        .then(function (response) {
            self.items = response.data;
            self.datasets=[{
              borderColor: [
                '#41B883',
                '#E46651',
                '#00D8FF',
                '#DD1B16'
              ], backgroundColor:['transparent'],
              data: []
            }]
            let data =[]
            console.log(self.items)
            self.items = self.items.sort((a,b)=>{return a.annee<b.annee})
            
            console.log(self.items)
            self.labels = [];
            for (let d of self.items){
              self.datasets[0].data.push(d.indice);
              // self.data1.push(d.indice);
              if(d.annee){
              self.labels.push(d.annee);
              }
              else if(d.niveau1){
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
              // self.$router.push({ path: 'login' }); 
            }
        });
    }
  },
  mounted: function(){
    this.getDatasets();
  }
}
</script>
