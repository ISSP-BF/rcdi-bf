<template>
  <div v-if="!refreshing">
    <CCard>
    <CCardBody>
          <div class="row">
            <CSelect label="Commune" class="col-lg-3" :value.sync="commune_id" :plain="true"
              :options="communes" v-model="commune_id">
            </CSelect>
          <CInput label="Année" type="number" placeholder="Ex. 2020" v-model="annee" class="col-lg-3"
            invalid-feedback="Veuillez saisir une année valide" :is-valid="anneeValidator"></CInput>
            <CButton color="primary" @click="refresh()">Actualiser</CButton> &nbsp;
          </div>
    </CCardBody>
  </CCard>
    <CCard>
      <CCardHeader><h4 class="card-title mb-0">DEMOGRAPHIE</h4></CCardHeader>
    <CCardBody>
      <IndicateursShow :commune_id="commune_id"/>
    <CRow>
          <CCol sm="6" lg="6">
            <IndicateursSecteur1 :commune_id="commune_id" indicateur="Répartition population par sexe" />
          </CCol>
          <CCol sm="6" lg="6">
            <IndicateursTableau :commune_id="commune_id" indicateur="Quelques Statistiques de Population" />
          </CCol>
    </CRow>
    </CCardBody>
  </CCard>
    <CRow>
      <CCol sm="12" lg="12">
        <GroupeBarChart :commune_id="commune_id"
          groupe="SERVICES" />
      </CCol>
      <CCol sm="6" lg="6">
        <GroupeBarChart :commune_id="commune_id"
          groupe="ASSAINISSEMENT" />
      </CCol>
      <CCol sm="6" lg="6">
        <GroupeBarChart :commune_id="commune_id"
          groupe="AGRICULTURE" />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import IndicateursShow from './dashboard/IndicateursShow'
import IndicateursSecteur1 from './dashboard/IndicateursSecteur1'
import IndicateursTableau from './dashboard/IndicateursTableau'
import GroupeBarChart from './dashboard/GroupeBarChart'
import WidgetsBrand from './widgets/WidgetsBrand'
import { CChartPie } from '@coreui/vue-chartjs'
import axios from 'axios'

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    IndicateursShow,
    IndicateursSecteur1,
    IndicateursTableau,
    GroupeBarChart,
    WidgetsBrand, CChartPie
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
      communes:[],
      refreshing:false
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
    getRepartitionPopulationParSexe() {
      let self = this;
      const criteria = {
        indicateur: "Répartition population par sexe",
        commune_id: this.commune_id
      };
      axios.post(this.$apiAdress + '/api/indicateurs/findBy?token=' + localStorage.getItem("api_token"),
        criteria
      )
        .then(function (response) {
          self.items = response.data;
          console.log(response.data);
          self.repartitionPopulationParSexe = [{
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [],
            labels: []
          }]
          for (let d of response.data) {
            self.repartitionPopulationParSexe[0].data.push(d.indice);
            self.repartitionPopulationParSexe[0].labels.push(d.niveau1);
            self.repartitionPopulationParSexe[0].titre = d.indicateur;
          }
        }).catch(function (error) {
          if (error.response.data.message == 'The given data was invalid.') {
            self.message = '';
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + '  ';
              }
            }
            self.showAlert();
          } else {
            console.log(error);
            // self.$router.push({ path: 'login' }); 
          }
        });
    },
    anneeValidator(val) {
      return val ? (val <= 2022 && val >= 1900 ? null : false) : null;
    },
    refresh(){
      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
      }, 200);
    },
    getCommunes (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/communes_list?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.communes = response.data;
        self.commune_id = self.communes[0].value;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function () {
    let self = this;
    self.getRepartitionPopulationParSexe();
    this.getCommunes();
  }
}
</script>
