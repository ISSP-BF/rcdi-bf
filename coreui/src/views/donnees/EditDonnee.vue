<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Modifier Donnee id:  {{ $route.params.id }}
        </CCardHeader>
        
        <CCardBody>
          <CSelect
              label="Groupe" 
              :value.sync="donnee.groupe_id"
              :plain="true"
              :options="groupes"
              @change="findIndicateurByGroupe($event)"
            >
            </CSelect>


            <CSelect
                label="Localisation" 
                :value.sync="donnee.localisation_id"
                :plain="true"
                :options="localisations"
              >
              </CSelect>
          <CSelect
              label="Indicateur" 
              :value.sync="donnee.indicateur_id"
              :plain="true"
              :options="indicateurs"
              @change="findSousIndicateurByDesagregation($event)"
            >
            </CSelect>
          <CSelect v-if="desagregation_id"
              label="Sous indicateur" 
              :value.sync="donnee.sous_indicateur_id"
              :plain="true"
              :options="sousIndicateurs"
            >
            </CSelect>

            
            
          <div class="row ">
            <div role="group" class="col-lg-12 form-group">
              <label class="custom-control-inline"> Période </label>
              <div role="group" class="custom-control custom-control-inline custom-radio" v-for="rol in periodesDispobible" :key="rol"
                  :label="rol">
                  <input :id="'periode'+rol" type="radio" class="custom-control-input"
                    v-model="donnee.periode" :value="rol" @click="updatedListPeriode(rol)">
                  <label :for="'periode'+rol" class="custom-control-label"> {{ rol }} </label>
                </div>
            </div>
          </div>

          <CSelect
            label="Choix période" v-if="donnee.periode&&donnee.periode!='ANNUEL'"
            :value.sync="donnee.periode_value"
            :plain="true"
            :options.sync="choixPeriodes"
          >
          </CSelect>
          <CInput label="Annee" type="text" placeholder="Annee" v-model="donnee.annee" :is-valid="anneeValidator"></CInput>

          <CInput label="Valeur" type="text" placeholder="Valeur" v-model="donnee.valeur"></CInput>
          <CInput label="Source" type="text" placeholder="Source" v-model="donnee.source"></CInput>
          
          <CButton color="primary" @click="update()">Modifier</CButton> &nbsp;
          <CButton color="secondary" @click="goBack">Retour</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditDonnee',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
      donnee: {
          libelle: '',
          groupe_id: '',
          sous_indicateur_id: '',
          periode:null
        },
        localisations:[],
        groupes:[],
        periodes:[],
        periodeList:['MENSUEL','TRIMESTRIEL','SEMESTRIEL', 'ANNUEL'],
        indicateurs: [],
        sousIndicateurs: [],
        desagregation_id:null,
        message: '',
        periodesDispobible:[],
        choixPeriodes:[]
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    selectRadioSelectPeriode(periode){
      let temp = this.periodes.indexOf(periode); 
      if (temp > -1) {
        this.periodes.splice(temp, 1);
      }else{
        this.periodes.push(periode);
      }
    },
    updatedListPeriode(choix){
        this.choixPeriodes = [];
        switch (choix) {
          case "TRIMESTRIEL":
            this.choixPeriodes = [{value:1,label:"Trimestre 1"},{value:2,label:"Trimestre 2"},{value:3,label:"Trimestre 3"},{value:4,label:"Trimestre 4"},]
            break;
          case "MENSUEL":
          this.choixPeriodes = [
            {value:1,label:"Janvier"},{value:2,label:"Février"},{value:3,label:"Mars"},{value:4,label:"Avril"},
            {value:5,label:"Mai"},{value:6,label:"Juin"},{value:7,label:"Juillet"},{value:8,label:"Aout"},
            {value:9,label:"Septembre"},{value:10,label:"Octobre"},{value:11,label:"Novembre"},{value:12,label:"Décembre"},
          ]
            break;
          case "SEMESTRIEL":
        this.choixPeriodes = [{value:1,label:"Semestre 1"},{value:2,label:"Semestre 2"}]
            break;
          case "ANNUEL":
            this.choixPeriodes = [];
            break;
        
          default:
            break;
        }
        this.donnee.periode_value = this.choixPeriodes.length>0?this.choixPeriodes[0].value:null;
        
    },
    update() {
        let self = this; 
        self.donnee.periode = this.periodes.toString()
        axios.put(  this.$apiAdress + '/api/donnees/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.donnee)
        .then(function (response) {
            self.$router.go(-1) 
            self.$toasted.show(response.data.message,{type:"success"});
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
            self.$toasted.show(self.message,{type:"success"}); 
            }else{
              self.$router.push({ path: '/login' }); 
            }
        });
    },
    anneeValidator(val) {
      return val ? (val <= 2023 && val >= 1900 ? null : false) : null;
    },
    findLocalisationByGroupe(event){
      let self = this;
      axios.get(  this.$apiAdress + '/api/indicateurs/findLocalisationByGroupe/'+self.donnee.groupe_id+'?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response)
        self.localisations = response.data;
        let lest = [{label:'',value:null}]
        lest.push(...self.localisations);
        self.localisations = lest;
    }).catch(function (error) {
      self.localisations  = []
    });
    },
    findIndicateurByGroupe(event){
      this.findLocalisationByGroupe(event);
      console.log(event)
      let self = this;
      axios.get(  this.$apiAdress + '/api/indicateurs/findByGroupe/'+self.donnee.groupe_id+'?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response)
        self.indicateurs = response.data;
        
        let lest = [{label:'',value:null}]
        lest.push(...self.indicateurs);
        self.indicateurs = lest;

        self.sous_indicateurs = [];
        self.periode = null;
    }).catch(function (error) {
      self.indicateurs  = []
        // console.log(error);
        // self.$router.push({ path: 'login' });
    });
    },
    findSousIndicateurByDesagregation(event){
      let self = this;
      self.desagregation_id = null;
      if(this.indicateurs){
        let indicateur = this.indicateurs.find(p=>p.id==this.donnee.indicateur_id);
        if(indicateur){
          if (indicateur.periode != null) {
            self.periodesDispobible = indicateur.periode.split(',')
          }
          self.desagregation_id = indicateur.desagregation_id
        }
      }
      axios.get(  this.$apiAdress + '/api/sous_indicateurs/findByDesagregation/'+self.desagregation_id+'?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.sousIndicateurs = response.data;
        let lest = [{label:'',value:null}]
        lest.push(...self.sousIndicateurs);
        self.sousIndicateurs = lest;
    }).catch(function (error) {
      self.sousIndicateurs =[]
        // console.log(error);
        // self.$router.push({ path: 'login' });
    });
    }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/donnees/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.indicateurs = response.data.indicateurs;
        self.groupes = response.data.groupes;
        self.donnee = response.data.donnee
        self.sousIndicateurs = response.data.sousIndicateurs
        if (self.indicateur.periode != null) {
          self.periodes = self.donnee.periode.split(',')
        }
        for(let p of self.periodes){
          self.fixedPeriode[""+p+""] = true;
        }
        self.updatedListPeriode(self.donnee.periode)
        let lest = [{label:'',value:null}]
        lest.push(...self.indicateurs);
        self.indicateurs = lest;
        // // Definir la valeur par défaut
        self.donnee.groupe_id = self.groupes.length>0?self.groupes[0].value:null;
    }).catch(function (error) {
        // console.log(error);
        // self.$router.push({ path: '/login' });
    });
  }
}

/*
      items: (id) => {
        const user = usersData.find( user => user.id.toString() === id)
        const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
        return userDetails.map(([key, value]) => {return {key: key, value: value}})
      },
*/

</script>
