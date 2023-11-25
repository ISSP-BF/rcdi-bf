<template>
  <CRow>
    <CCol sm="6" lg="4">
      <CWidgetDropdown color="primary" :header="tailleMoyenneMenages.value" :text="tailleMoyenneMenages.label">
       
        <template #footer>
          <div class="mt-3 mx-3"
            style="height:70px"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="4">
      
      <CWidgetDropdown color="info" :header="rM.value" :text="rM.label">
       
        <template #footer>
          <div
            
            class="mt-3 mx-3"
            style="height:70px"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="4">
      
      <CWidgetDropdown color="warning" :header="pt.value" :text="pt.label">
       
        <template #footer>
          <div
            
            class="mt-3 mx-3"
            style="height:70px"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <!-- <CCol sm="6" lg="3">
      
      <CWidgetDropdown color="danger" header="9.823" text="Taille moyenne des ménages">
       
        <template #footer>
          <div
            
            class="mt-3 mx-3"
            style="height:70px"
          />
        </template>
      </CWidgetDropdown>
    </CCol> -->
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'
import axios from 'axios'

export default {
  name: 'IndicateursShow',
  components: { CChartLineSimple, CChartBarSimple },
  props: ['commune_id','annee'],
  data () {
    return {
      tailleMoyenneMenages: {label:"Taille moyenne des ménages",value:"Données non disponible"},
      rM: {label:"Rapport de Masculinite",value:"Données non disponible"},
      pt: {label:"pt",value:"Données non disponible"},
    }
  },
  
  methods: {
    async getTailleMoyenneMenages(){
      let self = this;
      const criteria =  {
            indicateur:"Taille moyenne des ménages",
            commune_id:this.commune_id,
            annee:this.annee
          };
          
      axios.post(  this.$apiAdress + '/api/indicateurs-old/findBy',
         criteria
        )
        .then(function (response) {
            self.items = response.data;
            self.tailleMoyenneMenages.label = criteria.indicateur;
              self.tailleMoyenneMenages.value = "Données non disponible";
            for (let d of response.data){
              self.tailleMoyenneMenages.label = d.indicateur;
              self.tailleMoyenneMenages.value = d.indice + "";
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
              // console.log(error);
              self.$router.push({ path: 'login' }); 
            }
        });
    },
    async getRM(){
      let self = this;
      const criteria =  {
            indicateur:"Rapport de Masculinite",
            commune_id:this.commune_id,
            annee:this.annee
          };
          
      axios.post(  this.$apiAdress + '/api/indicateurs-old/findBy',
         criteria
        )
        .then(function (response) {
            self.items = response.data;
            self.rM.label = criteria.indicateur;
              self.rM.value = "Données non disponible";
            for (let d of response.data){
              self.rM.label = d.indicateur;
              self.rM.value = d.indice + "";
            }
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
              // self.showAlert();
            }else{
              // console.log(error);
              self.$router.push({ path: 'login' }); 
            }
        });
    },
    async getPopulationTotale(){
      let self = this;
      const criteria =  {
            indicateur:"Population totale",
            commune_id:this.commune_id,
            annee:this.annee
          };
          
      axios.post(  this.$apiAdress + '/api/indicateurs-old/findBy',
         criteria
        )
        .then(function (response) {
            self.items = response.data;
            self.pt.label = criteria.indicateur;
              self.pt.value = "Données non disponible";
            for (let d of response.data){
              self.pt.label = d.indicateur;
              self.pt.value = d.indice+"";
            }
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
              // self.showAlert();
            }else{
              console.log(error);
              self.$router.push({ path: 'login' }); 
            }
        });
    },
    
  },
  mounted: function(){
    this.getTailleMoyenneMenages ();
    this.getRM();
    this.getPopulationTotale();
  }
}
</script>
