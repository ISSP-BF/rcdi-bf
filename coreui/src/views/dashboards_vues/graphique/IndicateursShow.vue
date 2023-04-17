<template>
  <CRow>
    <CCol :sm="12/items.length" :lg="12/items.length" v-for="item in items" 
    :key="item.id">
    <div style="display: none;height:fit-content;border:dotted">{{ item.titre = item.indicateur +" "+ (
      anneelist.length > 1&&periodelist.length>1&&item.periode!="ANNUEL"?item.periode_value+" "+item.annee:
    anneelist.length > 1?item.annee:
    periodelist.length>1?item.periode_value+" "+item.annee:item.periode!="ANNUEL"?item.periode_value+" "+item.annee:item.annee) }}</div>
      <CWidgetDropdown :color="item.couleur" :header="item.valeur+''" :text="item.titre+''"
            >
        <template #footer>
          <div class="mt-3 mx-3"
          />
        </template>
      </CWidgetDropdown>
    </CCol>  
  </CRow>
</template>

<script> 
import axios from 'axios'

export default {
  name: 'IndicateursShow', 
  props: ["donneeSearch", "refreshing"],
  data () {
    return {
      donnee:{
        indicateur:'',
      valeur: '',
      },items:[],
      anneelist: [],
      periodelist:[],
      couleurs:[]
    }
  },
  watch: {
    reloadParams() {
      this.getDatasets();
    },
  },
  computed:{
    reloadParams() {
      return [this.refreshing
      ];
    },
  },
  
  methods: {

    genererTableauCouleur(nombre) {
      const couleurs = [];
      const choixVariableCouleur = [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark"
      ];
      while(couleurs.length<nombre){
        couleurs.push(...choixVariableCouleur)
      }
      return couleurs;
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
    getDatasets(){
      let self = this;
      axios.post(  this.$apiAdress + '/api/donnees/findBy?token=' + localStorage.getItem("api_token"),
      self.donneeSearch
        )
        .then(function (response) {
          self.items = response.data; 
          self.updatedPeriodeInList(self.items);
          self.couleurs = self.genererTableauCouleur(self.items.length);
          for(let i=0;i<self.items.length;i++){
            self.items[i]['couleur'] = self.couleurs[i];
          }
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
              for(let y of self.periodelist){
                if(y===x.periode_value){
                  verif=true;
                  break;
                }
              }
              if(!verif){self.periodelist.push(x.periode_value)}
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
