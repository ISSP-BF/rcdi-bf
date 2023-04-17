<template>
  <CRow col="12">
    <CCol col="12" xl="12">
      <transition name="slide">
        <CCard>
          <CCardHeader>
            Les données calculées
            <div class="card-header-actions">
              <AddButton @ajouter="createDonnee()" />&nbsp;
              <ImportButton
                title="Importation des données calculées des indicateurs"
                :fields="fieldsI"
                apiUrl="donnees"
              />&nbsp;
              <ExportButton
                :items="items"
                title="Donnees Indicateurs"
                :fields="fieldsI"
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
            <div class="float-justify custom-control-inline row"
              v-if="togglePress">
                  <div class="col-lg-6 float-left">
                        <label class="custom-control-inline"> Filtrer </label>
                        <CInput class="col-lg-8 custom-control-inline" type="text" placeholder="Valeur" v-model="tableFilterValue"></CInput>
                  </div>
                  <div class="col-lg-6 text-right">
                        <label class="custom-control-inline"> Items per page </label>
                        <CSelect class=" custom-control custom-control-inline custom-radio" :value.sync="perPage" :options="perPageValues">
                        </CSelect>
                  </div>
            </div>
            <CDataTable
              hover
              sorter
              :items="loadedItems"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :loading="loading"
              :sorter-value.sync="sorterValue"
              v-if="togglePress"
            >
              <template #periode_value="{ item }">
                <td>
                  <strong>{{ item.periode_value }}</strong>
                </td>
              </template>

              <template #indicateur="{ item }">
                <td>
                  <strong>{{ item.indicateur }}</strong>
                </td>
              </template>
              <template #groupe="{ item }">
                <td>
                  <strong>{{ item.groupe }}</strong>
                </td>
              </template>
              <template #sous_indicateur="{ item }">
                <td>
                  <strong>{{ item.sous_indicateur }}</strong>
                </td>
              </template>
              <template #sous_groupe="{ item }">
                <td>
                  <strong>{{ item.sous_groupe }}</strong>
                </td>
              </template>

              <template #valeur="{ item }">
                <td>
                  <strong>{{ item.valeur }}</strong>
                </td>
              </template>
              <template #source="{ item }">
                <td>
                  {{ item.source }}
                </td>
              </template>

              <template #actions="{ item }">
                <td>
                  <div class="card-header-actions" style="display: flex">
                    <CButton
                      color="secondary"
                      size="sm"
                      @click="showDonnee(item.id)"
                      >Détail</CButton
                    >
                    &nbsp;
                    <CButton
                      size="sm"
                      color="primary"
                      @click="editDonnee(item.id)"
                      ><CIcon name="cil-pencil"
                    /></CButton>
                    &nbsp;
                    <CButton
                      v-if="you != item.id"
                      size="sm"
                      color="danger"
                      @click="deleteDonnee(item.id)"
                      ><CIcon name="cil-x-circle"
                    /></CButton>
                  </div>
                </td>
              </template>
            </CDataTable>

            <CPagination
              v-show="pages > 1"
              :pages="pages"
              :active-page.sync="activePage"
              v-if="togglePress"
            />

            <CRow v-if="!togglePress">
              <CCol col="12" lg="3">
                <div>
                  <h3>Filtre</h3>

                  <div class="row">
                    <CSelect
                      label="Groupe"
                      class="col-lg-12"
                      :value.sync="donnee.groupe_id"
                      :plain="true"
                      :options="groupes"
                      @change="findSousGroupeByGroupe($event)"
                    >
                    </CSelect>
                    <CSelect
                      label="Sous Groupe"
                      class="col-lg-12"
                      :value.sync="donnee.sous_groupe_id"
                      :plain="true"
                      :options="sous_groupes"
                      @change="findIndicateurBySousGroupe($event)"
                    >
                    </CSelect>

                    <CSelect
                      label="Indicateur"
                      class="col-lg-12"
                      :value.sync="donnee.indicateur_id"
                      :plain="true"
                      :options="indicateurs"
                      @change="findSousIndicateurByDesagregation($event)"
                    >
                    </CSelect>
                    <CSelect
                      v-if="desagregation_id"
                      class="col-lg-12"
                      label="Sous indicateur"
                      :value.sync="donnee.sous_indicateur_id"
                      :plain="true"
                      :options="sousIndicateurs"
                    >
                    </CSelect>
                    <div class="row col-lg-12">
                      <div role="group" class="col-lg-12 form-group">
                        <label class="custom-control-inline"> Période </label>
                        <div
                          role="group"
                          class="custom-control custom-control-inline custom-radio"
                          v-for="rol in periodesDispobible"
                          :key="rol"
                          :label="rol"
                        >
                          <input
                            :id="'periode' + rol"
                            type="radio"
                            class="custom-control-input"
                            v-model="donnee.periode"
                            :value="rol"
                            @click="updatedListPeriode(rol)"
                          />
                          <label
                            :for="'periode' + rol"
                            class="custom-control-label"
                          >
                            {{ rol }}
                          </label>
                        </div>
                      </div>
                    </div>

                    <label
                      class="col-lg-12"
                      v-if="donnee.periode && donnee.periode != 'ANNUEL'"
                      >Période</label
                    >
                    <CSelect
                      v-if="donnee.periode && donnee.periode != 'ANNUEL'&&togglePressMaps"
                      class="col-lg-12"
                      placeholder="Choisir une période"
                      :value.sync="donnee.selectedPeriode_values"
                      :plain="true"
                      :options="choixPeriodes"
                    >
                    </CSelect>
                    <multiselect
                      v-if="donnee.periode && donnee.periode != 'ANNUEL'&&!togglePressMaps"
                      class="col-lg-11"
                      v-model="selectedPeriode_values"
                      :options="choixPeriodes"
                      :multiple="true"
                      :close-on-select="false"
                      label="label"
                      track-by="label"
                      placeholder="Choisir une période"
                      select-label="cliquer pour ajouter"
                      deselect-label="cliquer pour supprimer"
                      :hide-selected="true"
                    >
                    </multiselect>

                    <label class="col-lg-12">Années</label>
                    
                    <CSelect
                      v-if="togglePressMaps"
                      class="col-lg-12"
                      placeholder="Choisir une année"
                      :value.sync="donnee.selectedItems"
                      :plain="true"
                      :options="annees"
                    >
                    </CSelect>

                    <multiselect
                      v-if="!togglePressMaps"
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
                    </multiselect>
                  </div>
                  <br />
                   <CButton timeout="2000" color="primary" @click="search()">Actualiser</CButton>

                   <br/>
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
                        :pressed.sync="togglePressMaps"
                        @click="choicesGraphe('MAPS')"
                      >
                        <CIcon name="cib-openstreetmap" />
                      </CButton>
                    </CCol>
                    <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
                      <CButton
                        variant="outline"
                        shape="pill"
                        color="primary"
                        :pressed.sync="togglePressMaps2"
                        @click="choicesGraphe('MAPS2')"
                      >
                        <CIcon name="cib-openstreetmap" />
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
                    :donneeSearch="donneeSearch" :refreshing="refreshing"
                  />
                  <IndicateurBarChart
                    v-if="vueGraphe == 'HISTOGRAMME'"
                    :donneeSearch="donneeSearch" :refreshing="refreshing"
                  />
                  <GoogleMaps 
                    v-if="vueGraphe == 'MAPS'"/>
                  <ShapeMaps 
                    v-if="vueGraphe == 'MAPS2'"/>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </transition>
    </CCol>
  </CRow>
</template>

<script>
import axios from "axios";
import ExportButton from "../buttons/ExportButton.vue";
import AddButton from "../buttons/AddButton.vue";
import EditButton from "../buttons/EditButton.vue";
import DeleteButton from "../buttons/DeleteButton.vue";
import ImportButton from "../buttons/ImportButton.vue";
import IndicateursSecteur from "./graphique/IndicateursSecteur";
import IndicateurBarChart from "./graphique/IndicateurBarChart";
import GoogleMaps from "./graphique/GoogleMaps";
import ShapeMaps from "./graphique/ShapeMaps";

import MaskedInput from "vue-text-mask";
import Multiselect from "vue-multiselect";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  name: "Donnee",
  components: {
    MaskedInput,
    Multiselect,
    vSelect,
    ExportButton,
    AddButton,
    EditButton,
    DeleteButton,
    ImportButton,
    IndicateursSecteur,
    IndicateurBarChart,
    GoogleMaps,ShapeMaps,
  },
  data: () => {
    return {
      perPageValues: [
        { value: "5", label: "5" },
        { value: "10", label: "10" },
        { value: "20", label: "20" },
        { value: "50", label: "50" },
      ],
      vueGraphe: "",
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
        niveau1: null,
        niveau2: null,
        mois: null,
        annee: null,
        indice: null,
        source: null,
      },
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
        niveau1: null,
        niveau2: null,
        mois: null,
        annee: null,
        indice: null,
        source: null,
      },
      desagregation_id: null,
      selectedItems: [],
      selectedPeriode_values: [],
      region: null,
      province: null,
      commune: null,
      district: null,
      groupes: [],
      indicateurs: [],
      sous_groupes: [],
      periodes: [],
      periodeList: ["MENSUEL", "TRIMESTRIEL", "SEMESTRIEL", "ANNUEL"],
      desagregations: [],
      communes: [],
      annees: [],
      anneesSelect: null,
      indicateurliste: [],
      items: [],
      fields: [
        "id",
        "groupe",
        "sous_groupe",
        "indicateur",
        "sous_indicateur",
        "periode",
        "periode_value",
        "annee",
        "valeur",
        "source",
        "actions",
      ],
      fieldsI: [
        "groupe_id",
        "sous_groupe_id",
        "indicateur_id",
        "sous_indicateur_id",
        "periode",
        "periode_value",
        "annee",
        "valeur",
        "source",
      ],
      currentPage: 1,
      totalRows: 0,
      you: null,
      message: "",
      showMessage: false,
      totalRows: 0,
      sorterValue: { column: null, asc: true },
      perPage: "10", // nombre d'éléments par page
      sortBy: "", // champ de tri
      sortDesc: false, // tri croissant ou décroissant,
      activePage: 1,
      loadedItems: [],
      loading: false,
      pages: 5,
      togglePress: false,
      togglePressSecteur: false,
      togglePressHistogramme: false,
      togglePressCourbe: false,
      togglePressCourbe2: false,
      refreshing: false,
      refreshing2: false,
      refreshing3: false,
      periodesDispobible: [],
      choixPeriodes: [],
      tableFilterValue:null,
      togglePressMaps:false,
      togglePressMaps2:false,
    };
  },
  watch: {
    reloadParams() {
      this.onTableChange();
    },
  },
  computed: {
    reloadParams() {
      return [
        this.sorterValue,
        this.columnFilterValue,
        this.tableFilterValue,
        this.activePage,
        this.perPage,
      ];
    },
  },
  methods: {
    getRowCount(items) {
      return items.length;
    },
    donneeLink(id) {
      return `donnees/${id.toString()}`;
    },
    editLink(id) {
      return `donnees/${id.toString()}/edit`;
    },
    showDonnee(id) {
      const donneeLink = this.donneeLink(id);
      this.$router.push({ path: donneeLink });
    },
    editDonnee(id) {
      const editLink = this.editLink(id);
      this.$router.push({ path: editLink });
    },
    selectRadioSelectPeriode(periode) {
      let temp = this.periodes.indexOf(periode);
      if (temp > -1) {
        this.periodes.splice(temp, 1);
      } else {
        this.periodes.push(periode);
      }
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
    findSousGroupeByGroupe(event) {
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
    choicesGraphe(choix) {
      if (this.vueGraphe) {
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
          this.togglePressHistogramme = false;
          this.togglePressMaps = false;
          this.togglePressMaps2 = false;
          break;
        case "MAPS":
          this.togglePressSecteur = false; 
          this.togglePressHistogramme = false;
          this.togglePressMaps = true;
          this.togglePressMaps2 = false;
          break;
        case "MAPS2":
          this.togglePressSecteur = false; 
          this.togglePressHistogramme = false;
          this.togglePressMaps = false;
          this.togglePressMaps2 = true;
          break;
        case "HISTOGRAMME":
          this.togglePressHistogramme = true; 
          this.togglePressSecteur = false;
          this.togglePressMaps = false;
          this.togglePressMaps2 = false;
          break;
        case "COURBEVOLUME":
          this.togglePressCourbe2 = true; 
          this.togglePressSecteur = false;
          this.togglePressMaps = false;
          this.togglePressMaps2 = false;
          break;
        case "COURBESIMPLE":
          this.togglePressCourbe = true; 
          this.togglePressSecteur = false;
          this.togglePressMaps = false;
          this.togglePressMaps2 = false;
          break;
        default:
          this.togglePressSecteur = false; 
          this.togglePressHistogramme = false;
          this.togglePressMaps = false;
          this.togglePressMaps2 = false;
          // setTimeout(() => {
            // console.log(local, "local===>");
            this.vueGraphe = null;
            this.choicesGraphe(local ? JSON.parse(local) : "SECTEUR");
          // }, 1);
          break;
      }
    },
    findIndicateurByGroupe(event) {
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
      this.choicesGraphe();
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
          setTimeout(() => {
            self.refreshing3 = true;
          }, 1);
        })
        .catch(function (error) {
          console.log(error);
          // self.$router.push({ path: 'login' });
        });
    },

    deleteDonnee(id) {
      let self = this;
      axios
        .post(
          this.$apiAdress +
            "/api/donnees/" +
            id +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            _method: "DELETE",
          }
        )
        .then(function (response) {
          self.$toasted.show(response.data.message, { type: "success" });
          self.onTableChange();
        })
        .catch(function (error) {
          console.log(error);
          self.$toasted.show(error.data.message, { type: "danger" });
          // self.$router.push({ path: '/login' });
        });
    },
    createDonnee() {
      this.$router.push({ path: "donnees/create" });
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

    onTableChange() {
      this.loading = true;
      let self = this;
      console.log(
        this.$apiAdress +
          "/api/donneespaginate/" +
          this.perPage +
          "/" +
          this.activePage +
          "/" +
          this.sorterValue.column +
          "/" +
          this.sorterValue.asc +
          "?token=" +
          localStorage.getItem("api_token")
      );
      axios
        .post(
          this.$apiAdress +
            "/api/donneespaginate/" +
            this.perPage +
            "/" +
            this.activePage +
            "/" +
            this.sorterValue.column +
            "/" +
            this.sorterValue.asc +
            "?token=" +
            localStorage.getItem("api_token"),
            {tableFilterValue:this.tableFilterValue}
        )
        .then((response) => {
          // mettre à jour les données
          console.log(response.data);
          self.loading = false;
          self.items = response.data.data;
          self.loadedItems = response.data.data;
          self.totalRows = response.data.total;
          self.pages = Math.ceil(response.data.total / self.perPage);
        })
        .catch((error) => {
          self.loading = false;
          console.log(error);
        });
    },
  },
  mounted: function () {
    this.onTableChange();
    // this.getAllIndicateursSearch();
    this.findElementFiltre();
  },
};
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
