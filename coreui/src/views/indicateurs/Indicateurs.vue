<template>
  <CRow>
    <CTabs>
      <CTab active>
        <template slot="title">
          <CIcon name="cil-calculator" />
        </template>

        <transition name="slide">
          <CCard>
            <CCardHeader>
              Indicateurs
              <div class="card-header-actions">
                <AddButton @ajouter="createIndicateur()" />&nbsp;
                <ExportButton
                  :items="items"
                  title="Indicateurs"
                  :fields="fields"
                />&nbsp;
              </div>
            </CCardHeader>
            <CCardBody>
              <CAlert :show.sync="dismissCountDown" color="primary" fade>
                ({{ dismissCountDown }}) {{ message }}
              </CAlert>
              <CDataTable
                id="table"
                hover
                tableFilter
                itemsPerPageSelect
                sorter
                :items="items"
                :fields="fields"
                :items-per-page="10"
                pagination
              >
                <template #numero_acte="{ item }">
                  <td>
                    <strong>{{ item.n_acte }}</strong>
                  </td>
                </template>
                <template #region="{ item }">
                  <td>
                    <label>{{ item.region }}</label>
                  </td>
                </template>
                <template #province="{ item }">
                  <td>
                    {{ item.province }}
                  </td>
                </template>
                <template #commune="{ item }">
                  <td>
                    {{ item.commune }}
                  </td>
                </template>
                <template #date_declaration="{ item }">
                  <td>
                    {{ item.date_declaration | formatDateShort }}
                  </td>
                </template>

                <template #nom_prenom="{ item }">
                  <td>
                    <strong>{{ item.nom }} {{ item.prenom }}</strong>
                  </td>
                </template>
                <template #sexe="{ item }">
                  <td>
                    <strong>{{ item.sexe == "M" ? "Homme" : "Femme" }}</strong>
                  </td>
                </template>

                <template #date_naissance="{ item }">
                  <td>
                    <strong>{{ item.date_naissance | formatDateShort }}</strong>
                  </td>
                </template>

                <template #lieu_naissance_commune="{ item }">
                  <td>
                    {{ item.lieu_naissance_commune }}
                  </td>
                </template>

                <template #centre_sante_naissance="{ item }">
                  <td>
                    {{ item.formationSanitaire }}
                  </td>
                </template>

                <template #date_etablissement="{ item }">
                  <td>
                    {{ item.date_etablissement | formatDateShort }}
                  </td>
                </template>

                <template #date_autorisation="{ item }">
                  <td>
                    {{ item.date_autorisation | formatDateShort }}
                  </td>
                </template>

                <template #actions="{item}">
                  <td>
                    <div class="card-header-actions" style="display:flex">
                      <CButton
                        color="secondary"
                        size="sm"
                        @click="showIndicateur(item.id)"
                      >
                        <CIcon name="cil-file"
                      /></CButton>
                      &nbsp;
                      <EditButton @modifier="editIndicateur(item.id)" />
                      &nbsp;
                      <DeleteButton @supprimer="deleteIndicateur(item.id)" />
                    </div>
                  </td>
                </template>
              </CDataTable>
            </CCardBody>
          </CCard>
        </transition>
      </CTab>
      <CTab active>
        <template slot="title">
          <CIcon name="cil-chart-pie" />
        </template>
        <CRow>
          <CCol col="12" lg="4">
            <CCard no-header>
              <CCardBody>
                <h3>
                  Filtrer
                </h3>

                <div class="row ">
                  <CSelect
                    label="Region"
                    class="col-lg-12"
                    :value.sync="indicateur.region_id"
                    :plain="true"
                    :options="regions"
                    v-model="indicateur.region_id"
                  >
                  </CSelect>

                  <CSelect
                    label="Province"
                    class="col-lg-12"
                    :value.sync="indicateur.province_id"
                    :plain="true"
                    :options="provinces"
                    v-model="indicateur.province_id"
                  >
                  </CSelect>

                  <CSelect
                    label="Commune"
                    class="col-lg-12"
                    :value.sync="indicateur.commune_id"
                    :plain="true"
                    :options="communes"
                    v-model="indicateur.commune_id"
                  >
                  </CSelect>

                  <CSelect
                    label="Groupe"
                    class="col-lg-12"
                    :value.sync="indicateur.groupe"
                    :plain="true"
                    :options="groupes"
                    v-model="indicateur.groupe" @change="filterByGroupe($event)"
                  >
                  </CSelect>

                  <CSelect
                    label="Indicateur"
                    class="col-lg-12"
                    :value.sync="indicateur.indicateur"
                    :plain="true"
                    :options="indicateurliste"
                    v-model="indicateur.indicateur"
                  >
                  </CSelect>

                  <div role="group" class="row col-lg-12">
                  <CSelect
                    :label="vueGraphe=='COURBESIMPLE'||vueGraphe=='COURBEVOLUME'?'Années Debut':'Année'"
                    class="col-lg-6"
                    :value.sync="indicateur.annee"
                    :plain="true"
                    :options="annees"
                    v-model="indicateur.annee"
                  >
                  </CSelect>

                  <CSelect
                    label="Années Fin"  v-if="vueGraphe=='COURBESIMPLE'||vueGraphe=='COURBEVOLUME'"
                    class="col-lg-6"
                    :value.sync="indicateur.anneefin"
                    :plain="true"
                    :options="annees"
                    v-model="indicateur.anneefin"
                  >
                  </CSelect>
                  </div>
                 </div>
                <CButton  v-if="!refreshing" color="primary" @click="search()">Actualiser
                </CButton>
            <CButton  v-if="refreshing"><img src="img/refresh.gif" width="50"/></CButton> &nbsp;
                &nbsp;
              </CCardBody>
            </CCard>
          </CCol>
          <CCol col="12" lg="8">
            <div role="group" class="form-group">
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="secteur" type="radio" class="custom-control-input"
                    v-model="vueGraphe" :value="'SECTEUR'">
                  <label for="secteur" class="custom-control-label"> Secteur </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="histogramme" type="radio" class="custom-control-input"
                    v-model="vueGraphe" :value="'HISTOGRAMME'">
                  <label for="histogramme" class="custom-control-label"> Histogramme </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="courbeSimple" type="radio" class="custom-control-input"
                    v-model="vueGraphe" :value="'COURBESIMPLE'">
                  <label for="courbeSimple" class="custom-control-label"> Courbe simple</label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="courbeVolume" type="radio" class="custom-control-input"
                    v-model="vueGraphe" :value="'COURBEVOLUME'">
                  <label for="courbeVolume" class="custom-control-label"> Courbe volume </label>
                </div>
            </div>
            <div>
              <IndicateursSecteur1 v-if="vueGraphe=='SECTEUR'&&!refreshing" :commune_id="indicateurSearch.commune_id" :annee="indicateurSearch.annee" :indicateur="indicateurSearch.indicateur" />
              <IndicateurBarChart v-if="vueGraphe=='HISTOGRAMME'&&!refreshing" :commune_id="indicateurSearch.commune_id" :annee="indicateurSearch.annee" :groupe="indicateurSearch.groupe" :indicateur="indicateurSearch.indicateur" />
              <IndicateurLineChart v-if="vueGraphe=='COURBEVOLUME'&&!refreshing" :commune_id="indicateurSearch.commune_id" :annee="indicateurSearch.annee" :groupe="indicateurSearch.groupe" :indicateur="indicateurSearch.indicateur" />
              <IndicateurAnneesLineChart v-if="vueGraphe=='COURBESIMPLE'&&!refreshing" :commune_id="indicateurSearch.commune_id" :annee="indicateurSearch.annee" :anneefin="indicateurSearch.anneefin" :groupe="indicateurSearch.groupe" :indicateur="indicateurSearch.indicateur" />
            </div>
          </CCol> 
          </CRow
        >
      </CTab>
    </CTabs>
    <CCol col="12" xl="12"> </CCol>
  </CRow>
</template>

<script>
import axios from "axios";
import ExportButton from "../buttons/ExportButton.vue";
import AddButton from "../buttons/AddButton.vue";
import EditButton from "../buttons/EditButton.vue";
import DeleteButton from "../buttons/DeleteButton.vue";
import IndicateursSecteur1 from './../dashboard/IndicateursSecteur1'
import IndicateursTableau from './../dashboard/IndicateursTableau'
import IndicateurBarChart from './../dashboard/IndicateurBarChart'
import IndicateurLineChart from './../dashboard/IndicateurLineChart'
import IndicateurAnneesLineChart from './../dashboard/IndicateurAnneesLineChart'
 

export default {
  name: "Indicateurs",
  components: {
    ExportButton,
    AddButton,
    EditButton,
    IndicateursSecteur1,
    IndicateursTableau,
    DeleteButton,IndicateurBarChart,IndicateurLineChart,IndicateurAnneesLineChart,
  },
  data: () => {
    return {
      vueGraphe:"SECTEUR",  
      indicateurSearch: {
        region_id: null,
        province_id: null,
        commune_id: null,
        groupe: null,
        indicateur: null,
        niveau1: null,
        niveau2: null,
        mois: null,
        annee: 2019,
        anneefin: 2019,
        indice: null,
        source: null,
      }, 
      indicateur: {
        region_id: null,
        province_id: null,
        commune_id: null,
        groupe: null,
        indicateur: null,
        niveau1: null,
        niveau2: null,
        mois: null,
        annee: 2019,
        anneefin: 2019,
        indice: null,
        source: null,
      }, 
      region:null,
      province:null,
      commune:null,
      district:null,
      formationSanitaires: [],
      regions: [],
      provinces: [],
      communes: [],
      groupes: [],
      annees: [],
      indicateurliste: [],
      items: [],
      fields: [
        "id",
        "region",
        "province",
        "commune",
        "groupe",
        "indicateur",
        "niveau1",
        "niveau2",
        "mois",
        "annee",
        "indice",
        "source",
        "actions",
      ],

      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      you: null,
      message: "",
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      refreshing:false,
      refreshing2:false,
    };
  },
  computed: { },
  methods: {
    getRowCount(items) {
      return items.length;
    },
    indicateurLink(id) {
      return `indicateurs/${id.toString()}`;
    },
    editLink(id) {
      return `indicateurs/${id.toString()}/edit`;
    },
    showIndicateur(id) {
      const indicateurLink = this.indicateurLink(id);
      this.$router.push({ path: indicateurLink });
    },
    editIndicateur(id) {
      const editLink = this.editLink(id);
      this.$router.push({ path: editLink });
    }, 
    filterByGroupe(event) {
      let self = this;
      if(this.indicateur.groupe)
      axios.post(  this.$apiAdress + '/api/indicateurs/search/groupe?token=' + localStorage.getItem("api_token"),
          self.indicateur
        )
        .then(function(response) { 
          self.indicateurliste = response.data.indicateurliste; 
          self.indicateur.indicateur = self.indicateurliste.length>0?self.indicateurliste[0].value:null;
          self.search();
        })
        .catch(function(error) {
          console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },

    search(){
      this.refreshing = true;
      this.indicateurSearch = JSON.parse(JSON.stringify(this.indicateur))
       setTimeout(() => {
        this.refreshing = false;
        this.refreshing2 = true;
          setTimeout(() => {
          this.refreshing2 = false;
        }, 10);
       }, 10);
    }, 
    deleteIndicateur(id) {
      let self = this;
      axios
        .post(
          this.$apiAdress +
            "/api/indicateurs/" +
            id +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            _method: "DELETE",
          }
        )
        .then(function(response) {
          self.message = "Successfully deleted indicateur.";
          self.$toasted.show("L'indicateur a été supprimé avec succès", {
            type: "success",
          });
          self.getndicateurs();
        })
        .catch(function(error) {
          console.log(error);
          // self.$router.push({ path: "/login" });
        });
    },
    createIndicateur() {
      this.$router.push({ path: "indicateurs/create" });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    getndicateurs() {
      let self = this;

      axios
        .get(
          this.$apiAdress +
            "/api/indicateurs?token=" +
            localStorage.getItem("api_token")
        )
        .then(function(response) {
          self.items = response.data;
        })
        .catch(function(error) {
          console.log(error);
          // self.$router.push({ path: "/login" });
        });
    },
    getAllIndicateursSearch() {
      let self = this;
      
      axios
        .get(
          this.$apiAdress +
            "/api/indicateurs/search?token=" +
            localStorage.getItem("api_token")
        )
        .then(function(response) {
          self.regions = response.data.regions;
          self.provinces = response.data.provinces;
          self.communes = response.data.communes;
          self.formationSanitaires = response.data.formationSanitaires;
          self.indicateurliste = response.data.indicateurliste;
          self.annees = response.data.annees;
          self.groupes = response.data.groupes;

          // Définir valeur par défaut
          self.indicateur.region_id =
            self.regions.length > 0 ? self.regions[0].value : null;
          self.indicateur.province_id =
            self.provinces.length > 0 ? self.provinces[0].value : null;
          self.indicateur.commune_id =
            self.communes.length > 0 ? self.communes[0].value : null;
          self.indicateur.formation_sanitaire_id =
            self.formationSanitaires.length > 0
              ? self.formationSanitaires[0].value
              : null;
          self.indicateur.indicateur = self.indicateurliste.length>0?self.indicateurliste[0].value:null;
          self.indicateur.groupe = self.groupes.length>0?self.groupes[0].value:null;
          // self.search();
          self.filterByGroupe();

          
        })
        .catch(function(error) {
          console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
    getDefaultAll() {
      let self = this;
      
      axios
        .get(
          this.$apiAdress +
            "/api/indicateurs/getDefaultAll?token=" +
            localStorage.getItem("api_token")
        )
        .then(function(response) {
          self.region = response.data.region;
          self.indicateur.region_id = self.region.id;
          self.province = response.data.province;
          self.indicateur.province_id = self.province.id;
          self.commune = response.data.commune;
          self.indicateur.commune_id = self.commune.id;
           
          self.filterByGroupe();

        })
        .catch(function(error) {
          console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
  },
  mounted: function() {
    
    this.indicateurSearch = JSON.parse(JSON.stringify(this.indicateur))
    this.getndicateurs();
    this.getAllIndicateursSearch();
  },
};
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
<style>
@import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>