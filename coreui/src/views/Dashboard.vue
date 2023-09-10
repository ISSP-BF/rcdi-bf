<template>
  <div>
    <CCard>
      <CCardBody>
        <div class="row">
          <div class="col-md-6">
            <img
              :src="'img/presentation/bg-' + communelabel + '-1.jpg'"
              style="height: 400px"
            />
          </div>
          <div class="col-md-6 card" v-if="actualites">
          <CCarousel class="card"
            arrows
            indicators
            animate
            height="400px"
          >
            <CCarouselItem  v-for="n in actualites" v-bind:key="n.id"
              :captionHeader="n.title.rendered"
              :image="n.imageAcceuil"
              :captionText="strippedContent(n.excerpt.rendered)"
            />
          </CCarousel>
            <CCarousel  controls indicators transition="crossfade" v-if="false">
              
              <CCarouselItem v-for="n in actualites" v-bind:key="n.id">
                <img
                  class="d-block w-100"
                  :src="n.imageAcceuil"
                  :alt="n.title.rendered"
                />
                <CCarouselCaption class="d-none d-md-block">
                  <h5 v-html="n.title.rendered"></h5>
                  
                    <p v-html="n.excerpt.rendered"></p> 
                  
                </CCarouselCaption>
              </CCarouselItem>
            </CCarousel>
          </div>
        </div>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardBody>
        <div class="row">
          <label v-if="commune">{{ commune.commune }}</label>
          <label v-if="!commune">Pas de commune par défaut</label>
          <CInput
            label="Année"
            type="number"
            placeholder="Ex. 2019"
            v-model="annee"
            class="col-lg-3"
            invalid-feedback="Veuillez saisir une année valide"
            :is-valid="anneeValidator"
          ></CInput>
          <CButton v-if="!refreshing" color="primary" @click="refresh()"
            >Actualiser
          </CButton>
          &nbsp;
          <CButton v-if="refreshing"
            ><img src="img/refresh.gif" width="50"
          /></CButton>
          &nbsp;
        </div>
      </CCardBody>
    </CCard>

    <CRow v-if="!refreshing2">
      <CCol xs="12" lg="12">
        <CCard>
          <CCardBody>
            <CTabs add-tab-classes="mt-1">
              <CTab active>
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
              <CTab v-if="false">
                <template slot="title">
                  <CIcon name="cil-chart-pie" /> ETAT CIVIL
                </template>
              </CTab>
              <CTab v-if="false">
                <template slot="title">
                  <CIcon name="cil-chart-pie" /> EDUCATION
                </template>
              </CTab>
              <CTab v-if="false">
                <template slot="title">
                  <CIcon name="cil-chart-pie" /> SANTE
                </template>
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
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    IndicateursShow,
    IndicateursSecteur1,
    IndicateursTableau,
    GroupeBarChart,
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
      refreshing2: false,actualites:null,
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
    anneeValidator(val) {
      return val ? (val <= 2022 && val >= 1900 ? null : false) : null;
    },
    refresh() {
      if (!Array.isArray(this.annee)) {
        this.annee = [this.annee];
      }

      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
        this.refreshing2 = true;
        setTimeout(() => {
          this.refreshing2 = false;
        }, 1);
      }, 1);
    },
    strippedContent(string) {
           string = string.replace(/<\/?[^>]+>/ig, " "); 
           return string.replace('&hellip;',"...").replace('&nbsp;',' ');
    },
    getPost() {
      let self = this;
      this.refreshing = true;
      // if(!this.commune)return;
      axios
        .get(this.commune.urlSiteWeb+'?categories='+this.commune.categorie)
        .then(function (response) {
          let actualites = response.data;
          for(let actualite of actualites){
            actualite['imageAcceuil'] = actualite['yoast_head_json']['og_image'][0]['url']
          }
          self.actualites = actualites;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getCommuneDefaut() {
      let self = this;
      this.refreshing = true;
      axios
        .get(this.$apiAdress + "/api/indicateurs-old/getDefaultCommune")
        .then(function (response) {
          localStorage.setItem("communedefaut", JSON.stringify(response.data));
          self.commune = response.data;
          self.commune_id = self.commune.id;
          self.communelabel = self.commune.commune.toLowerCase();
          self.refresh();
          self.getPost();
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
      this.communelabel = this.commune.commune;
    } else {
      this.commune_id = null; 
    }
    this.getPost();
    this.getCommuneDefaut();
  },
};
</script>
