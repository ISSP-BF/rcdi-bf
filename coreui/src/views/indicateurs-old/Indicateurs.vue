<template>
  <CRow>
    <CCard class="col-lg-12">
      <CCardHeader>
        Indicateurs
        <div class="card-header-actions">
          <AddButton @ajouter="createIndicateur()" />&nbsp;
          <ExportButton
            :items="items"
            title="Indicateurs"
            :fields="fields"
          />&nbsp;

          <CButton
            variant="outline"
            color="primary"
            :pressed.sync="togglePress"
          >
            <CIcon name="cil-chart-pie" v-if="togglePress" />
            <CIcon name="cil-calculator" v-if="!togglePress" />
          </CButton>
          &nbsp;
        </div>
      </CCardHeader>
      <CCardBody>
        {{ togglePress ? getndicateurs() : "" }}
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
          v-if="togglePress"
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

          <template #actions="{ item }">
            <td>
              <div class="card-header-actions" style="display: flex">
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

        <CRow v-if="!togglePress">
          <CCol col="12" lg="3">
            <div>
              <h3>Filtre</h3>

              <div class="row">
                <CSelect
                  label="Groupe"
                  class="col-lg-12"
                  :value.sync="indicateur.groupe"
                  :plain="true"
                  :options="groupes"
                  v-model="indicateur.groupe"
                  @change="filterByGroupe($event)"
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
                <label class="col-lg-12">Années</label>
                  <multiselect
                    class="col-lg-11"
                    v-model="selectedItems"
                    :options="annees"
                    :multiple="true" 
                    :close-on-select="false"
                    label="label"
                    track-by="label"
                    placeholder="Choisir une année"
                    select-label="cliquer pour ajouter"
                    deselect-label="cliquer pour supprimer"
                    :hide-selected="true"
                  >
                  <!-- <template slot="selection" slot-scope="{ values, isOpen }"><span class="multiselect__single" v-if="values.length" v-show="!isOpen">{{ values.length }} année(s) selectionnée(s)</span></template> -->
                  </multiselect>
                  
              </div>
              <br />
              <CButton v-if="!refreshing" color="primary" @click="search()"
                >Actualiser</CButton
              >
              <br />
              <CButton v-if="refreshing"
                ><img src="img/refresh.gif" width="50"
              /></CButton>
              &nbsp;

              <CRow class="align-items-center">
                <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
                  <CButton
                    variant="outline"
                    shape="pill"
                    color="primary"
                    :pressed.sync="togglePressSecteur"
                    @click="choicesGraphe('SECTEUR')"
                  >
                    <CIcon name="cil-chart-pie" />
                  </CButton>
                </CCol>

                <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
                  <CButton
                    variant="outline"
                    shape="pill"
                    color="primary"
                    :pressed.sync="togglePressHistogramme"
                    @click="choicesGraphe('HISTOGRAMME')"
                  >
                    <CIcon name="cil-bar-chart" />
                  </CButton>
                </CCol>
              </CRow>
              &nbsp;
            </div>
          </CCol>
          <CCol col="12" lg="9">
            <div>
              <IndicateursSecteur
                v-if="vueGraphe == 'SECTEUR'"
                :commune_id="indicateurSearch.commune_id"
                :annee="indicateurSearch.annee"
                :indicateur="indicateurSearch.indicateur"
                :groupe="indicateurSearch.groupe"
              />
              <IndicateurBarChart
                v-if="vueGraphe == 'HISTOGRAMME'"
                :commune_id="indicateurSearch.commune_id"
                :annee="indicateurSearch.annee"
                :groupe="indicateurSearch.groupe"
                :indicateur="indicateurSearch.indicateur"
              />
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCol col="12" xl="12"> </CCol>
  </CRow>
</template>

<script>
import axios from "axios";
import ExportButton from "../buttons/ExportButton.vue";
import AddButton from "../buttons/AddButton.vue";
import EditButton from "../buttons/EditButton.vue";
import DeleteButton from "../buttons/DeleteButton.vue";
import IndicateursSecteur from "./graphique/IndicateursSecteur";
import IndicateursTableau from "./../dashboard/IndicateursTableau";
import IndicateurBarChart from "./graphique/IndicateurBarChart";
import IndicateurLineChart from "./graphique/IndicateurLineChart";
import IndicateurAnneesLineChart from "./graphique/IndicateurAnneesLineChart";

import MaskedInput from "vue-text-mask";
import Multiselect from "vue-multiselect";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  name: "Indicateurs",
  components: {
    MaskedInput,
    Multiselect,vSelect,
    ExportButton,
    AddButton,
    EditButton,
    IndicateursSecteur,
    IndicateursTableau,
    DeleteButton,
    IndicateurBarChart,
    IndicateurLineChart,
    IndicateurAnneesLineChart,
  },
  data: () => {
    return {
      vueGraphe: "SECTEUR",
      indicateurSearch: {
        region_id: null,
        province_id: null,
        commune_id: null,
        groupe: null,
        indicateur: null,
        niveau1: null,
        niveau2: null,
        mois: null,
        annee: null,
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
        annee: null,
        indice: null,
        source: null,
      },
      selectedItems: [],
      region: null,
      province: null,
      commune: null,
      district: null,
      formationSanitaires: [],
      regions: [],
      provinces: [],
      communes: [],
      groupes: [],
      annees: [],
      annees2: [],
      anneesSelect: null,
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
      togglePress: false,
      togglePressSecteur: false,
      togglePressHistogramme: false,
      togglePressCourbe: false,
      togglePressCourbe2: false,
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      message: "",
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      refreshing: false,
      refreshing2: false,
      refreshing3: false,
    };
  },
  computed: {},
  methods: {
    showChange(event) {
      console.log(event);
      console.log(this.anneesSelect);
    },
    choicesGraphe(choix) {
      if(this.vueGraphe){
        
        this.togglePressSecteur = false;
          this.togglePressCourbe = false;
          this.togglePressCourbe2 = false;
          this.togglePressHistogramme = false;
      }
      let local = JSON.stringify(this.vueGraphe);
      this.vueGraphe = choix;
      switch (choix) {
        case "SECTEUR":
          this.togglePressSecteur = true;
          this.togglePressCourbe = false;
          this.togglePressCourbe2 = false;
          this.togglePressHistogramme = false;
          break;
        case "HISTOGRAMME":
          this.togglePressHistogramme = true;
          this.togglePressCourbe = false;
          this.togglePressCourbe2 = false;
          this.togglePressSecteur = false;
          break;
        case "COURBEVOLUME":
          this.togglePressCourbe2 = true;
          this.togglePressCourbe = false;
          this.togglePressHistogramme = false;
          this.togglePressSecteur = false;
          break;
        case "COURBESIMPLE":
          this.togglePressCourbe = true;
          this.togglePressCourbe2 = false;
          this.togglePressHistogramme = false;
          this.togglePressSecteur = false;
          break;
        default:
          this.togglePressSecteur = false;
          this.togglePressCourbe = false;
          this.togglePressCourbe2 = false;
          this.togglePressHistogramme = false;
          setTimeout(() => {
            console.log(local,"local===>")
            this.vueGraphe = null;
          this.choicesGraphe(local?JSON.parse(local):'SECTEUR');
          }, 1);
          break;
      }
    },
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
      if (this.indicateur.groupe)
        axios
          .post(
            this.$apiAdress +
              "/api/indicateurs-old/search/groupe?token=" +
              localStorage.getItem("api_token"),
            self.indicateur
          )
          .then(function (response) {
            self.indicateurliste = response.data.indicateurliste;
            self.indicateur.indicateur =
              self.indicateurliste.length > 0
                ? self.indicateurliste[0].value
                : null;
            self.search();
          })
          .catch(function (error) {
            console.log(error);
            // self.$router.push({ path: 'login' });
          });
    },

    search() {
      // this.refreshing = true;
      console.log(this.anneesSelect, this.selectedItems);
      this.indicateurSearch = JSON.parse(JSON.stringify(this.indicateur));
      this.indicateurSearch.annee = [];
      for(let item of this.selectedItems){
        this.indicateurSearch.annee.push(item.value);
      }
      this.choicesGraphe();
    },
    deleteIndicateur(id) {
      let self = this;
      axios
        .post(
          this.$apiAdress +
            "/api/indicateurs-old/" +
            id +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            _method: "DELETE",
          }
        )
        .then(function (response) {
          self.message = "Successfully deleted indicateur.";
          self.$toasted.show("L'indicateur a été supprimé avec succès", {
            type: "success",
          });
          self.getndicateurs();
        })
        .catch(function (error) {
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
            "/api/indicateurs-old?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.items = response.data;
        })
        .catch(function (error) {
          console.log(error);
          // self.$router.push({ path: "/login" });
        });
    },
    getAllIndicateursSearch() {
      let self = this;

      axios
        .get(
          this.$apiAdress +
            "/api/indicateurs-old/search?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.regions = response.data.regions;
          self.provinces = response.data.provinces;
          self.communes = response.data.communes;
          self.formationSanitaires = response.data.formationSanitaires;
          self.indicateurliste = response.data.indicateurliste;
          self.annees = response.data.annees;
          self.annees2 = response.data.annees2;
          self.annees2.forEach((d) => {
            d.text = d.text + "";
          });
          self.refreshing3 = false;
          setTimeout(() => {
            self.refreshing3 = true;
          }, 1);

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
          self.indicateur.indicateur =
            self.indicateurliste.length > 0
              ? self.indicateurliste[0].value
              : null;
          self.indicateur.groupe =
            self.groupes.length > 0 ? self.groupes[0].value : null;
          // self.search();
          self.filterByGroupe();
        })
        .catch(function (error) {
          console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
    getDefaultAll() {
      let self = this;

      axios
        .get(
          this.$apiAdress +
            "/api/indicateurs-old/getDefaultAll?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.region = response.data.region;
          self.indicateur.region_id = self.region.id;
          self.province = response.data.province;
          self.indicateur.province_id = self.province.id;
          self.commune = response.data.commune;
          self.indicateur.commune_id = self.commune.id;

          self.filterByGroupe();
        })
        .catch(function (error) {
          console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },
  },
  mounted: function () {
    this.indicateurSearch = JSON.parse(JSON.stringify(this.indicateur));

    this.getAllIndicateursSearch();
  },
};
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
