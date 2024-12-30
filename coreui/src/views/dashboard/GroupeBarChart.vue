<template>
  <CCard>
      <CCardHeader><h4 class="card-title mb-0">{{groupe}}</h4></CCardHeader>
    <CCardBody>
         <CChartHorizontalBar
      :datasets="computedDatasets"
      :options="computedOptions"
      :labels="labels"
      style="min-height: 50vh"
    />
        
    </CCardBody>
  </CCard>
</template>

<script>
import { CChartHorizontalBar } from '@coreui/vue-chartjs'
import { getColor, deepObjectsMerge } from '@coreui/utils/src'
import axios from 'axios'

export default {
  name: 'GroupeBarChart',
  components: { CChartHorizontalBar },
  props: ['commune_id','groupe','annee'],
  data () {
    return {
      data1:[],
      data2:[],
      labels:[],
      items:[]
    }
  },
  computed: {
    defaultDatasets () {
      return [
        {
          data: this.data1,
          backgroundColor: 'rgba(255,0,0,1)',
          label: "OUI"
        },
        
        {
          data: this.data2,
          backgroundColor: 'rgba(0,0,255,100)',
          label: "NON"
        }
      ]
    },
    defaultOptions () {
      return {
        maintainAspectRatio: false,
        legend: {
          display: true
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
            commune_id:this.commune_id,
            annee:this.annee
          };
          if(this.annee)
      axios.post(  this.$apiAdress + '/api/indicateurs-old/findBy?token=' + localStorage.getItem("api_token"),
         criteria
        )
        .then(function (response) {
            self.items = response.data;
            
            for(let i=0;i<self.items.length;i=i+2)
            { 
              const d=self.items[i];
              const  d2=self.items[i+1];
                self.labels.push(d.indicateur);
                if(d.niveau1=="OUI")
                self.data1.push(d.indice);
                else
                self.data2.push(d.indice);
                
                if(d2.niveau1=="OUI")
                self.data1.push(d2.indice);
                else
                self.data2.push(d2.indice);
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
    }
  },
  mounted: function(){
    this.getDatasets();
  }
}
</script>
