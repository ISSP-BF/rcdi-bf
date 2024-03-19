<template>
  <div>
    <div></div>


    <CRow v-if="!refreshing2">
      <CCol xs="12" lg="12">
        <CCard>
          <CCardBody>
            <CTabs add-tab-classes="mt-1">
              <CTab active>
                <template slot="title">
                  <CIcon name="cil-chart-pie" /> SANTE
                </template>
                <DashboardsVue :idData="1"></DashboardsVue>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie" /> EDUCATION
                </template>
                <DashboardsVue :idData="2"></DashboardsVue>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie" /> ETAT CIVIL
                </template>
                <DashboardsVue :idData="3"></DashboardsVue>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-calculator" /> DEMOGRAPHIE
                </template>
                <CCardBody v-if="!refreshing2">
                  <IndicateursShow :commune_id="commune_id" :annee="annee" />
                  <CRow>
                    <CCol sm="6" lg="6">
                      <IndicateursSecteur1
                        :commune_id="commune_id"
                        :annee="annee"
                        indicateur="Répartition population par sexe"
                      />
                    </CCol>
                    <CCol sm="6" lg="6">
                      <IndicateursTableau
                        :commune_id="commune_id"
                        :annee="annee"
                        indicateur="Quelques Statistiques de Population"
                      />
                    </CCol>
                  </CRow>
                </CCardBody>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-basket" /> SERVICES
                </template>
                <GroupeBarChart
                  :commune_id="commune_id"
                  :annee="annee"
                  groupe="SERVICES"
                />
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie" /> ASSAINISSEMENT
                </template>
                <GroupeBarChart
                  :commune_id="commune_id"
                  :annee="annee"
                  groupe="ASSAINISSEMENT"
                />
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie" /> AGRICULTURE
                </template>
                <GroupeBarChart
                  :commune_id="commune_id"
                  :annee="annee"
                  groupe="AGRICULTURE"
                />
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import IndicateursShow from "./dashboard/IndicateursShow";
import IndicateursSecteur1 from "./dashboard/IndicateursSecteur1";
import IndicateursTableau from "./dashboard/IndicateursTableau";
import GroupeBarChart from "./dashboard/GroupeBarChart";
import DashboardsVue from "./dashboards_vues/Dashboards_vue"
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    IndicateursShow,
    IndicateursSecteur1,
    IndicateursTableau,
    GroupeBarChart,DashboardsVue
  },
  computed: {
    defaultDatasets() {
      return [
        {
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
          data: [40, 20, 80, 10],
        },
      ];
    },
  },
  data() {
    return {
      tabs: ["Calculator", "Shopping cart", "Charts"],
      activeTab: 3,
      selected: "Month",
      repartitionPopulationParSexe: [
        {
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
          data: [],
          labels: [],
          titre: "",
        },
      ],
      commune_id: null,
      annee: [2019],
      commune: {},
      communelabel: "",
      refreshing: false,
      refreshing2: false,
      actualites: null,
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    anneeValidator(val) {
      return val ? (val <= 2022 && val >= 1900 ? null : false) : null;
    },
    refresh() {
      if (!Array.isArray(this.annee)) {
        this.annee = [this.annee];
      }

      this.refreshing = true;
      // setTimeout(() => {
      //   this.refreshing = false;
      //   this.refreshing2 = true;
      //   // setTimeout(() => {
      //   //   this.refreshing2 = false;
      //   // }, 1);
      // }, 1);
    },
    strippedContent(string) {
      string = string.replace(/<\/?[^>]+>/gi, " ");
      string = string.replace("&hellip;", "...");
      string = string.replace(/&nbsp;/g, " ");
      return string;
    },
    visiterLePost(n) {
      window.open(n.link, "_blank");
    },
    async getPost() {
      let self = this;
      this.refreshing = true;
      // if(!this.commune)return;
      axios
        .get(this.commune.urlSiteWeb + "?categories=" + this.commune.categorie)
        .then(function (response) {
          let actualites = response.data;
          for (let actualite of actualites) {
            actualite["imageAcceuil"] =
              actualite["yoast_head_json"]["og_image"][0]["url"];
          }
          self.actualites = actualites;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getCommuneDefaut() {
      let self = this;
      this.refreshing = true;
      axios
        .get(this.$apiAdress + "/api/indicateurs-old/getDefaultCommune")
        .then(function (response) {
          localStorage.setItem("communedefaut", JSON.stringify(response.data));
          self.commune = response.data;
          self.commune_id = self.commune.id;
          self.communelabel = self.commune.commune.toLowerCase();
          // setTimeout(() => {
            self.getPost();
          // }, 500);
          // self.refresh();
        })
        .catch(function (error) {
          console.log(error);
          this.refreshing = false;
          // self.$router.push({ path: '/login' });
          localStorage.removeItem("communedefaut");
          self.commune_id = 0;
          self.commune = 0;
        });
    },
  },
  mounted: function () {
    if (localStorage.getItem("communedefaut")) {
      this.commune = JSON.parse(localStorage.getItem("communedefaut"));
      this.commune_id = this.commune.id;
      this.communelabel = this.commune.commune.toLowerCase();
    } else {
      this.commune_id = null;
    }
    this.getPost();
    this.getCommuneDefaut();
  },
};
</script>
<style>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-40px);
  }
  60% {
    transform: translateY(-10px);
  }
}
.h11 {
  font-family: Arial, sans-serif; /* Police de caractères */
  font-weight: bold; /* Poids de la police (gras) */
  text-align: center; /* Alignement du texte */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Ombre du texte */
}

.bienvenue {
  animation: bounce 5s infinite;
  color: #ff5733;
  text-transform: capitalize;
}
</style>
