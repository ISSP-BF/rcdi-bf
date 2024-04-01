<template>
  <CRow v-if="refreshing">
    <CCol :sm="seuil.w" :lg="seuil.w" v-for="item in items" 
    :key="item.id" style="padding: 0 !important;display: grid !important;;">
    {{ item.titre =seuil.w < 0 ? '' : " "+ (
      anneelist.length > 1&&periodelist.length>1&&item.periode!="ANNUEL"?item.periode_value+" "+item.annee:
    anneelist.length > 1?item.annee:
    periodelist.length>1?item.periode_value+" "+item.annee:item.periode!="ANNUEL"?item.periode_value+" "+item.annee:item.annee) }}
      <CCard :style="{ backgroundColor: item.couleur }">
        <CCardBody class="text-center"><b style="display: flex;">{{item.valeur}}</b></CCardBody>
      </CCard>
      <!-- <CWidgetDropdown :style="{ backgroundColor: item.couleur }" :header="item.valeur+''" :text="item.titre+''">
      </CWidgetDropdown> -->
    </CCol>  
  </CRow>
</template>

<script> 

export default {
  name: 'IndicateursShow', 
  props: ["donneeSearch", "refreshing","seuil"],
  data () {
    return {
      donnee:{
        indicateur:'',
      valeur: '',
      },items:[],
      anneelist: [],
      periodelist:[],
      couleurs:[],
      seuilcopy:null

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
            {value:1,label:"Jan."},{value:2,label:"Fév."},{value:3,label:"Mrs."},{value:4,label:"Avr."},
            {value:5,label:"Mai"},{value:6,label:"Jui."},{value:7,label:"Juil."},{value:8,label:"Aou."},
            {value:9,label:"Sept."},{value:10,label:"Oct."},{value:11,label:"Nov."},{value:12,label:"Déc."},
          ]
            break;
          case "SEMESTRIEL":
        choixPeriodes = [
          {value: 1, label: "Semestre 1"},{value: 2,label: "Semestre 2"}]
            break;
          case "ANNUEL":
            choixPeriodes = [];
            break;
        
          default:
            break;
        }
        if (d.periode!="ANNUEL") {
          d.periode_value = choixPeriodes[d.periode_value-1].label;
        }
      });
    },
    async seuilControle() {
      let self = this;
      let donneeSearch = JSON.parse(JSON.stringify(self.donneeSearch));
      if (this.seuil.type_seuil == 'DATE_REFERENCE') {
        donneeSearch['periode'] = this.seuil.seuil_periode;
        donneeSearch['periode_value'] = [this.seuil.seuil_periode_value];
        donneeSearch['annee'] = [this.seuil.seuil_annee];
        this.$axios
          .post(this.$apiAdress + '/api/donnees/findBy?token=' + localStorage.getItem("api_token"),
            donneeSearch
          )
          .then(function (response) {
            let itemsSeuil = response.data;
            if (itemsSeuil.length > 0) {
              self.seuil.seuil_valeur_reference = itemsSeuil[0].valeur;
            }
            self.getDatasets();
          }
          );
      }
      else {
        this.getDatasets();
      }
    },
    async getDatasets(){
      let self = this;
      this.$axios.post(this.$apiAdress + '/api/donnees/findBy?token=' + localStorage.getItem("api_token"),
      self.donneeSearch)
        .then(function (response) {
          self.items = response.data; 
          self.updatedPeriodeInList(self.items);
          
          if (self.seuil?.type_seuil=='INTERVALLE') {
            for (let i=0; i<self.items.length; i++) {
              //self.items[i]['couleur'] = self.couleurs[i];
              self.seuilcopy?.seuil_segment_list?.forEach(data => {
                if (self.items[i]['valeur'] >= data.debut && self.items[i]['valeur'] <= data.value)
                  self.items[i]['couleur'] = data.color; return;
              });
            }
          }
          
          if (self.seuil?.type_seuil == 'MOYENNE') {
            self.seuil.seuil_valeur_reference = 0;
            if (self.items && self.items.length > 0) {
              for (let x of self.items) {
                self.seuil.seuil_valeur_reference = self.seuil.seuil_valeur_reference + x.valeur;
              }
              self.seuil.seuil_valeur_reference = self.seuil.seuil_valeur_reference / self.items.length;
            }
          }
          if (self.seuil?.type_seuil !== 'INTERVALLE') {
            for (let x of self.items) {
                if (x.valeur > self.seuil.seuil_valeur_reference) {
                  x.couleur = self.seuil.seuil_couleur_superieur;
                }
                else x.couleur = self.seuil.seuil_couleur_inferieur;
              }
          }

          self.anneelist = [];
            for (let x of self.items) {
              let verif = false;
              for (let y of self.anneelist) {
                if (y === x.annee) {
                  verif = true;
                  break;
                }
              }
              if (!verif) {
                self.anneelist.push(x.annee);
              }
            }

          self.periodelist = []
          for (let x of self.items) {
            let verif = false;
            for (let y of self.periodelist) {
              if (y===x.periode_value) {
                verif = true;
                break;
              }
            }
            if (!verif) {
              self.periodelist.push(x.periode_value);
            }
          }
        
        }).catch(function (error) {
          console.log(error)
            if (error.response?.data?.message == 'The given data was invalid.') {
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
            } else {
              //self.$router.push({ path: '/login' }); 
            }
        });
    }
    
  },
  mounted: function(){
    let self = this;
    self.seuilcopy = JSON.parse(JSON.stringify(self.seuil));
    if (self.seuilcopy?.type_seuil=='INTERVALLE'){
            self.seuilcopy['seuil_segment_list'] = JSON.parse(self.seuilcopy?.seuil_segment_list);
    }
    this.seuilControle();
  }
}
</script>
