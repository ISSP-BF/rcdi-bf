<template>
  <CCard>
      <CCardHeader><h4 class="card-title mb-0">{{indicateurTitle}}</h4></CCardHeader>
    <CCardBody>
         <CListGroup>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
                v-for="n in items"
                v-bind:key="n.id"
              >
                {{n.niveau1}}
                <CBadge color="danger" shape="pill">{{n.indice}}</CBadge>
              </CListGroupItem>
            </CListGroup>
        
    </CCardBody>
  </CCard>
</template>

<script>
import { CChartPie } from '@coreui/vue-chartjs'
import axios from 'axios'

export default {
  name: 'IndicateursTableau',
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
      labels:[],
      items:[]
    }
  },
  methods: {
    getDatasets (){
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
            // console.log(self.items)
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
              self.labels.push(d.niveau1);
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
              console.log(error.response);
              self.$router.push({ path: 'login' }); 
            }
        });
    }
  },
  mounted: function(){
    let self = this;
    self.getDatasets();
  }
}
</script>