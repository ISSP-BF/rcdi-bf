<template>
  <div>
    <CCard>
    <CCardBody>
          <div class="row">
            <label v-if="commune">{{commune.commune}}</label>
            <label v-if="!commune">Pas de commune par défaut</label>
          <CInput label="Année" type="number" placeholder="Ex. 2019" v-model="annee" class="col-lg-3"
            invalid-feedback="Veuillez saisir une année valide" :is-valid="anneeValidator"></CInput>
            <CButton v-if="!refreshing"  color="primary" @click="refresh()">Actualiser </CButton> &nbsp;
            <CButton  v-if="refreshing"><img src="img/refresh.gif" width="50"/></CButton> &nbsp;
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
                  <CIcon name="cil-calculator"/> DEMOGRAPHIE
                </template>
                <CCardBody v-if="!refreshing2">
      <IndicateursShow :commune_id="commune_id" :annee="annee"/>
    <CRow>
          <CCol sm="6" lg="6">
            <IndicateursSecteur1 :commune_id="commune_id" :annee="annee" indicateur="Répartition population par sexe" />
          </CCol>
          <CCol sm="6" lg="6">
            <IndicateursTableau :commune_id="commune_id" :annee="annee" indicateur="Quelques Statistiques de Population" />
          </CCol>
    </CRow>
    </CCardBody>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-basket"/> SERVICES
                </template>
                <GroupeBarChart :commune_id="commune_id" :annee="annee" groupe="SERVICES" />
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> ASSAINISSEMENT
                </template>
                <GroupeBarChart :commune_id="commune_id" :annee="annee" groupe="ASSAINISSEMENT" />
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> AGRICULTURE
                </template>
                <GroupeBarChart :commune_id="commune_id" :annee="annee" groupe="AGRICULTURE" />
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> ETAT CIVIL
                </template>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> EDUCATION
                </template>
              </CTab>
              <CTab>
                <template slot="title">
                  <CIcon name="cil-chart-pie"/> SANTE
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
import IndicateursShow from './dashboard/IndicateursShow'
import IndicateursSecteur1 from './dashboard/IndicateursSecteur1'
import IndicateursTableau from './dashboard/IndicateursTableau'
import GroupeBarChart from './dashboard/GroupeBarChart'
import axios from 'axios'

export default {
  name: 'Dashboard',
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
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }
  },
  data() {
    return {
      tabs: [
        'Calculator',
        'Shopping cart',
        'Charts'
      ],
      activeTab: 3,
      selected: 'Month',
      repartitionPopulationParSexe: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [],
          labels: [],
          titre: ""
        }
      ],
      commune_id:null,
      annee:null,
      commune:{},
      refreshing:false,
      refreshing2:false
    }
  },
  methods: {
    color(value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    },
    anneeValidator(val) {
      return val ? (val <= 2022 && val >= 1900 ? null : false) : null;
    },
    refresh(){
      this.refreshing = true;
       setTimeout(() => {
        this.refreshing = false;
        this.refreshing2 = true;
          setTimeout(() => {
          this.refreshing2 = false;
        }, 1);
       }, 2000);
    },
    getCommuneDefaut (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/indicateurs/getDefaultCommune')
      .then(function (response) {
        localStorage.setItem("communedefaut",JSON.stringify(response))
        self.commune = response.data;
        self.commune_id = self.commune.id;
        self.refresh();
      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
        localStorage.removeItem("communedefaut")
        self.commune_id = 0;
        self.commune = 0;
      });
    }
  },
  mounted: function () {
      if(localStorage.getItem("communedefaut")){
        this.commune = JSON.parse(localStorage.getItem("communedefaut"));
        this.commune_id = this.commune.id;
      }
      else {
        this.commune_id = null;
      }
    this.getCommuneDefaut();
    let self = this;
  }
}
</script>
