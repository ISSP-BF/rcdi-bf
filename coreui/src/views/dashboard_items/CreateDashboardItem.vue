<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          <h5>Ajouter une requête</h5>
        </CCardHeader>
        <CCardBody>


          <CRow>
            <CCol col="12" lg="12">
              <div>

                <div class="row">
                  <CSelect label="Groupe" class="col-lg-12" :value.sync="donnee.groupe_id" :plain="true"
                    :options="groupes" @change="findSousGroupeByGroupe($event)">
                  </CSelect>
                  
                  <CSelect label="Localisation" class="col-lg-12" :value.sync="donnee.localisation_id"
                        :plain="true" :options="localisations"
                        @change="findSousGroupeByLocalisation($event)"
                      >
                      </CSelect>
                  <CSelect label="Sous Groupe" class="col-lg-12" :value.sync="donnee.sous_groupe_id" :plain="true"
                    :options="sous_groupes" @change="findIndicateurBySousGroupe($event)">
                  </CSelect>

                  <CSelect label="Indicateur" class="col-lg-12" :value.sync="donnee.indicateur_id" :plain="true"
                    :options="indicateurs"
                    @change="findSousIndicateurByDesagregation($event);findAnneeByIndicateur($event)">
                  </CSelect>
                  <CSelect v-if="desagregation_id" class="col-lg-12" label="Sous indicateur"
                    :value.sync="donnee.sous_indicateur_id" :plain="true" :options="sousIndicateurs">
                  </CSelect>
                  <div class="row col-lg-12">
                    <div role="group" class="col-lg-12 form-group">
                      <label class="custom-control-inline"> Période </label>
                      <div role="group" class="custom-control custom-control-inline custom-radio"
                        v-for="rol in periodesDispobible" :key="rol" :label="rol">
                        <input :id="'periode' + rol" type="radio" class="custom-control-input" v-model="donnee.periode"
                          :value="rol" @click="updatedListPeriode(rol)" />
                        <label :for="'periode' + rol" class="custom-control-label">
                          {{ rol }}
                        </label>
                      </div>
                    </div>
                  </div>

                  <label class="col-lg-12" v-if="donnee.periode && donnee.periode != 'ANNUEL'">Période</label>
                  <multiselect v-if="donnee.periode && donnee.periode != 'ANNUEL'" class="col-lg-11"
                    v-model="selectedPeriode_values" :options="choixPeriodes" :multiple="true" :close-on-select="false"
                    label="label" track-by="label" placeholder="Choisir une période" select-label="cliquer pour ajouter"
                    deselect-label="cliquer pour supprimer" :hide-selected="true">
                  </multiselect>

                  <label class="col-lg-12">Années</label>
                  <multiselect class="col-lg-11" v-model="selectedItems" :options="annees" :multiple="true"
                    :close-on-select="false" label="label" track-by="label" placeholder="Choisir une année"
                    select-label="cliquer pour ajouter" deselect-label="cliquer pour supprimer" :hide-selected="true">
                  </multiselect>
                </div>

                <br />
                &nbsp;

                <CRow class="align-items-center">

                  <div class="row col-lg-12">
                    <div role="group" class="col-lg-12 form-group">
                      <label class="custom-control-inline"> Période </label>
                      <div role="group" class="custom-control custom-control-inline custom-radio">
                        <input id="SECTEUR2" type="radio" class="custom-control-input" v-model="graphique"
                          value="SECTEUR" />
                        <label for="SECTEUR2" class="custom-control-label"> SECTEUR </label>
                      </div>
                      <div role="group" class="custom-control custom-control-inline custom-radio">
                        <input id="HISTOGRAMME" type="radio" class="custom-control-input" v-model="graphique"
                          value="HISTOGRAMME" />
                        <label for="HISTOGRAMME" class="custom-control-label"> HISTOGRAMME </label>
                      </div>
                      <div role="group" class="custom-control custom-control-inline custom-radio">
                        <input id="FIXE" type="radio" class="custom-control-input" v-model="graphique" value="FIXE" />
                        <label for="FIXE" class="custom-control-label"> FIXE </label>
                      </div>
                    </div>
                  </div>
                </CRow>
                &nbsp;
              </div>
            </CCol>
          </CRow>
          <CRow class="col-lg-12 text-justify">

            <CButton color="success" @click="visualiser()">
              <CIcon name="cil-speedometer" />Visualiser
            </CButton> &nbsp;

          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow>

            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="dashboardItem.libelle"
              class="col-lg-12" />

            <CCol col="12" lg="12">
              <label for="">Description</label>
              <quill-editor :content="dashboardItem.description" v-model="dashboardItem.description" />
            </CCol>
            <CInput label="Ordre" type="text" placeholder="Ordre décroissante" v-model="dashboardItem.i"
              class="col-lg-4" />
            <CInput label="Largeur [1 à 12]" type="text" placeholder="de 1 à 12" v-model="dashboardItem.w"
              class="col-lg-4" />
          <div class="col-lg-4"></div>
           
            <label for="" class="col-lg-12">Seuil</label>
            <CSelect :value.sync="dashboardItem.type_seuil" class="col-lg-4"
            :options="options">
            </CSelect>

            <CInput v-if="dashboardItem.type_seuil == 'VALEUR_REFERENCE'" type="text" placeholder="Ex. 15" v-model="dashboardItem.seuil_valeur_reference"
              class="col-lg-2" />
            <CSelect v-if="dashboardItem.type_seuil == 'DATE_REFERENCE'" :value.sync="dashboardItem.seuil_periode_value" class="col-lg-2"
            :options="choixPeriodes">
            </CSelect>
            <CSelect v-if="dashboardItem.type_seuil == 'DATE_REFERENCE'" :value.sync="dashboardItem.seuil_annee" class="col-lg-2"
            :options="annees">
            </CSelect>
            <CInput v-if="dashboardItem.type_seuil && dashboardItem.type_seuil !== 'INTERVALLE'" type="text" placeholder="Couleur Inférieur #F00" v-model="dashboardItem.seuil_couleur_inferieur"
              class="col-lg-4" />
            <CInput v-if="dashboardItem.type_seuil && dashboardItem.type_seuil !== 'INTERVALLE'" type="text" placeholder="Couleur supérieur #0F0" v-model="dashboardItem.seuil_couleur_superieur"
              class="col-lg-4" />
            <div class="col-lg-12" v-if="dashboardItem.type_seuil == 'INTERVALLE' && refreshingSegment">
              <div class="row"  :key="index" v-for="(item, index) in dashboardItem.seuil_segment_list">
                <CInput type="text" placeholder="Ex. 1" v-model="item.debut"
                class="col-lg-3" />
                <CInput type="text" placeholder="Ex. 10" v-model="item.value"
                class="col-lg-3" />
                <CInput type="text" placeholder="Ex. FFF" v-model="item.color"
                class="col-lg-4" />
                <CButton class="form-group" size="sm" color="danger" @click="deleteSegment(index)">
                  <CIcon  color="danger" name="cil-x-circle" />
                </CButton>
              </div>
              <CButton size="sm" color="primary" @click="ajouterSegment()">
                  <CIcon name="cil-plus" />
                </CButton>
            </div>
          </CRow>
        </CCardFooter>
        <CCardFooter>

          <CRow class="col-lg-12 text-justify">

            <CButton color="primary" @click="store()">Ajouter</CButton> &nbsp;
            <CButton color="secondary" @click="goBack">Retour</CButton>

          </CRow>

        </CCardFooter>
      </CCard>
    </CCol>
    <CCol col="12" lg="6">
      <div>
        <IndicateursSecteur v-if="graphique == 'SECTEUR' &&refreshing" :donneeSearch="donneeSearch"
          :refreshing="refreshing" />
        <IndicateurBarChart v-if="graphique == 'HISTOGRAMME' &&refreshing" :donneeSearch="donneeSearch"
          :refreshing="refreshing" />

        <IndicateursShow v-if="graphique == 'FIXE' &&refreshing" :donneeSearch="donneeSearch"
          :refreshing="refreshing" />
      </div>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
import Multiselect from "vue-multiselect";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import "vue-multiselect/dist/vue-multiselect.min.css";
import IndicateursSecteur from "../donnees/graphique/IndicateursSecteur";
import IndicateurBarChart from "../donnees/graphique/IndicateurBarChart";
import IndicateursShow from "./graphique/IndicateursShow";

// Import the styles too, globally
export default {
  name: 'Requete',
  components: {
    Multiselect,
    vSelect,
    IndicateursSecteur,
    IndicateurBarChart,IndicateursShow
  },
  props: {
    caption: {
      type: String,
      default: 'Requete'
    },
  },
  data: () => {
    return {
        dashboardItem: {
          libelle: '',
          description: '',
          i:'',
          x:'',
          y:'',
          w:'',
          h:'',
          static:true
        },
        graphique:'',
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        donneeSearch: {
        region_id: null,
        province_id: null,
        commune_id: null,
        groupe_id: null,
        sous_groupe_id: null,
        indicateur_id: null,
        sous_indicateur_id: null,
        desagregation_id: null,
        selectedItemsIndicateur: null,
        mois: null,
        annee: null,
        indice: null,
        source: null,
        seuil_segment_list:[],
      },
      localisations:[],
      donnee: {
        region_id: null,
        province_id: null,
        commune_id: null,
        groupe_id: null,
        sous_groupe_id: null,
        indicateur_id: null,
        sous_indicateur_id: null,
        desagregation_id: null,
        selectedItemsIndicateur: null,
        mois: null,
        annee: null,
        indice: null,
        source: null,
      },
      desagregation_id: null,
      selectedItems: [],
      selectedPeriode_values: [],
      periodesDispobible:[],
      region: null,
      province: null,
      commune: null,
      district: null,
      groupes: [],
      indicateurs: [],
      sous_groupes: [],
      periodes: [],
      annees: [],
      periodeList: ["MENSUEL", "TRIMESTRIEL", "SEMESTRIEL", "ANNUEL"],
      desagregations: [],
      communes: [],
      date_references: [],
      anneesSelect: null,
      indicateurliste: [],
      refreshing:false,
      options : [
        { label: '', value: '' },
        { label: 'Moyenne', value: 'MOYENNE' },
        { label: 'Valeur de référence', value: 'VALEUR_REFERENCE' },
        { label: 'Date de référence', value: 'DATE_REFERENCE' },
        { label: 'Intervalle', value: 'INTERVALLE' }
      ],
      refreshingSegment:true,
    }
  },
  methods: {
    goBack() {
        this.$router.go(-1)
        },
    visualiser(){
        this.refreshing = !this.refreshing;
        this.donneeSearch = JSON.parse(JSON.stringify(this.donnee));
        this.donneeSearch.annee = [];
        for (let item of this.selectedItems) {
          this.donneeSearch.annee.push(item.value);
        }
        this.donneeSearch.periode_value = [];
        for (let item of this.selectedPeriode_values) {
          this.donneeSearch.periode_value.push(item.value);
        }
    },
    store() {
        let self = this;
        this.donneeSearch = JSON.parse(JSON.stringify(this.donnee));
        this.donneeSearch.annee = [];
        for (let item of this.selectedItems) {
          this.donneeSearch.annee.push(item.value);
        }
        this.donneeSearch.periode_value = [];
        for (let item of this.selectedPeriode_values) {
          this.donneeSearch.periode_value.push(item.value);
        }
        self.dashboardItem['requete'] = JSON.stringify(this.donneeSearch);
        self.dashboardItem['graphique'] = this.graphique;
        self.dashboardItem['dashboard_id'] = this.$route.params.dashboard;
        self.dashboardItem['seuil_periode'] = this.donnee.periode;
        self.dashboardItem['seuil_segment_list'] = JSON.stringify(self.dashboardItem['seuil_segment_list']);
        console.log(self.dashboardItem)

        axios.post(  this.$apiAdress + '/api/dashboard-items?token=' + localStorage.getItem("api_token"),
          self.dashboardItem
        )
        .then(function (response) {
            self.dashboardItem = {
              libelle: '',
              description: ''
            };
            self.$toasted.show(response.data.message,{type:"success"}); 
            self.$router.go(-1)
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
              self.showAlert();
            self.$toasted.show(self.message,{type:"danger"}); 
            }else{
              console.log(error);
              //self.$router.push({ path: 'login' }); 
            }
        });
    },
    ajouterSegment(){
      this.refreshingSegment = false;
      if (!this.dashboardItem.seuil_segment_list){
        this.dashboardItem.seuil_segment_list=[];
        this.ajouterSegment();
      }
      else {
        this.dashboardItem.seuil_segment_list.push({});
      }
        console.log("======",this.dashboardItem.seuil_segment_list);
      this.refreshingSegment = true;
     },
    deleteSegment(index){ 
      this.refreshingSegment = false;
       this.dashboardItem.seuil_segment_list.splice(index,1);
      this.refreshingSegment = true;
        console.log("======"+index);
     },
    updatedListPeriode(choix) {
      this.choixPeriodes = [];
      this.selectedPeriode_values = [];
      switch (choix) {
        case "TRIMESTRIEL":
          this.choixPeriodes = [
            { value: 1, label: "Trimestre 1" },
            { value: 2, label: "Trimestre 2" },
            { value: 3, label: "Trimestre 3" },
            { value: 4, label: "Trimestre 4" },
          ];
          break;
        case "MENSUEL":
          this.choixPeriodes = [
            { value: 1, label: "Janvier" },
            { value: 2, label: "Février" },
            { value: 3, label: "Mars" },
            { value: 4, label: "Avril" },
            { value: 5, label: "Mai" },
            { value: 6, label: "Juin" },
            { value: 7, label: "Juillet" },
            { value: 8, label: "Aout" },
            { value: 9, label: "Septembre" },
            { value: 10, label: "Octobre" },
            { value: 11, label: "Novembre" },
            { value: 12, label: "Décembre" },
          ];
          break;
        case "SEMESTRIEL":
          this.choixPeriodes = [
            { value: 1, label: "Semestre 1" },
            { value: 2, label: "Semestre 2" },
          ];
          break;
        case "ANNUEL":
          this.choixPeriodes = [];
          break;

        default:
          break;
      }
      this.donnee.periode_value =
        this.choixPeriodes.length > 0 ? this.choixPeriodes[0].value : null;
    },
    
    findLocalisationByGroupe(event){
      
      this.donnee.localisation_id = null
      let self = this;
      axios.get(  this.$apiAdress + '/api/indicateurs/findLocalisationByGroupe/'+self.donnee.groupe_id+'?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.localisations = response.data;
        let lest = [{label:'Niveau Commune',value:null}]
        lest.push(...self.localisations);
        lest.push({label:'Niveau Désagrégé',value:-1});
        self.localisations = lest;
    }).catch(function (error) {
      self.localisations  = []
    });
    }, 
    findSousGroupeByGroupe(event) {
       this.findLocalisationByGroupe(event);
       this.findIndicateurByGroupe(event);
      this.sous_groupes = [];
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/sous_groupes/findByGroupe/" +
            self.donnee.groupe_id +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response);
          self.sous_groupes = response.data;

          let lest = [{ label: "", value: null }];
          lest.push(...self.sous_groupes);
          self.sous_groupes = lest;
        })
        .catch(function (error) {
          self.indicateurs = [];
          // console.log(error);
          self.$router.push({ path: "login" });
        });
    },
    findIndicateurByGroupe(event) {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/indicateurs/findByGroupe/" +
            self.donnee.groupe_id +
            "?token=" +
            localStorage.getItem("api_token")
         )
        .then(function (response) {
          console.log(response);
          self.indicateurs = response.data;

          let lest = [{ label: "", value: null }];
          lest.push(...self.indicateurs);
          self.indicateurs = lest;

          self.sous_indicateurs = [];
          self.periode = null;
        })
        .catch(function (error) {
          self.indicateurs = [];
          // console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
    findAnneeByIndicateur(event) { 
      self = this;
      self.annees = [];
      axios
        .get(
          this.$apiAdress +
            "/api/donnees/findAnneeByIndicateur/" +
            self.donnee.indicateur_id +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.annees = response.data.annees;
          self.refreshing3 = false;
          setTimeout(() => {
            self.refreshing3 = true;
          }, 1);
        })
        .catch(function (error) {
          self.annees = [];
          // console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
     
     findSousGroupeByLocalisation(event) { 
       this.sous_groupes = [];
       let self = this;
       let localisationId = null;
       if(self.donnee.localisation_id!==-1){
        localisationId = self.donnee.localisation_id;
       }
       
       axios
         .get(
           this.$apiAdress +
             "/api/donnees/findSousGroupeByLocalisation/" +
             localisationId  +"/"+self.donnee.groupe_id+
             "?token=" +
             localStorage.getItem("api_token")
         )
         .then(function (response) {
           self.sous_groupes = response.data;
 
           let lest = [{ label: "", value: null }];
           lest.push(...self.sous_groupes);
           self.sous_groupes = lest;
         })
         .catch(function (error) {
           self.indicateurs = [];
          //  self.$router.push({ path: "login" });
         });
     },
    findIndicateurBySousGroupe(event) {
      console.log(event);
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/indicateurs/findBySousGroupe/" +
            self.donnee.sous_groupe_id +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response, "======><");
          self.indicateurs = response.data;

          let lest = [{ label: "", value: null }];
          lest.push(...self.indicateurs);
          self.indicateurs = lest;

          self.sous_indicateurs = [];
          self.periode = null;
        })
        .catch(function (error) {
          self.indicateurs = [];
          // console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
    findSousIndicateurByDesagregation(event) {
      let self = this;
      self.desagregation_id = null;
      if (this.indicateurs) {
        let indicateur = this.indicateurs.find(
          (p) => p.id == this.donnee.indicateur_id
        );
        if (indicateur) {
          if (indicateur.periode != null) {
            self.periodesDispobible = indicateur.periode.split(",");
          }
          self.desagregation_id = indicateur.desagregation_id;
        }
      }

      axios
        .get(
          this.$apiAdress +
            "/api/sous_indicateurs/findByDesagregation/" +
            self.desagregation_id +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.sousIndicateurs = response.data;
          let lest = [{ label: "", value: null }];
          lest.push(...self.sousIndicateurs);
          self.sousIndicateurs = lest;
        })
        .catch(function (error) {
          self.sousIndicateurs = [];
          // console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },

    search() {
      this.refreshing = ! this.refreshing;
      this.donneeSearch = JSON.parse(JSON.stringify(this.donnee));
      this.donneeSearch.annee = [];
      for (let item of this.selectedItems) {
        this.donneeSearch.annee.push(item.value);
      }
      this.donneeSearch.periode_value = [];
      for (let item of this.selectedPeriode_values) {
        this.donneeSearch.periode_value.push(item.value);
      } 
    },
    findElementFiltre() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/donnees/elementSearch?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          console.log(response);
          self.groupes = response.data.groupes;
          self.sous_groupes = response.data.sous_groupes;

          let lest2 = [{ label: "", value: null }];
          lest2.push(...self.sous_groupes);
          self.sous_groupes = lest2;

          // Definir la valeur par défaut
          self.donnee.groupe_id =
            self.groupes.length > 0 ? self.groupes[0].value : null;
          self.donnee.sous_groupe_id =
            self.sous_groupes.length > 0 ? self.sous_groupes[0].value : null;
          self.annees = response.data.annees;
          self.refreshing3 = false;
          self.findSousGroupeByGroupe();
          setTimeout(() => {
            self.refreshing3 = true;
          }, 1);
        })
        .catch(function (error) {
          console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
    findSousIndicateurByDesagregation(event) {
      let self = this;
      self.desagregation_id = null;
      if (this.indicateurs) {
        let indicateur = this.indicateurs.find(
          (p) => p.id == this.donnee.indicateur_id
        );
        if (indicateur) {
          if (indicateur.periode != null) {
            self.periodesDispobible = indicateur.periode.split(",");
          }
          self.desagregation_id = indicateur.desagregation_id;
        }
      }
      axios
        .get(
          this.$apiAdress +
            "/api/sous_indicateurs/findByDesagregation/" +
            self.desagregation_id +
            "?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.sousIndicateurs = response.data;
          let lest = [{ label: "", value: null }];
          lest.push(...self.sousIndicateurs);
          self.sousIndicateurs = lest;
        })
        .catch(function (error) {
          self.sousIndicateurs = [];
          // console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted: function(){
    this.findElementFiltre();
  }
}

</script>
