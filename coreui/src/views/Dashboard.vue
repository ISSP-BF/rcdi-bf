<template>
  <div>
    <CCard>
      <CCardHeader><h4 class="card-title mb-0">DEMOGRAPHIE</h4></CCardHeader>
    <CCardBody>
      <IndicateursShow />
    <CRow>
      
          <CCol sm="6" lg="6">
            <IndicateursSecteur1 commune_id="2208" indicateur="Répartition population par sexe" />
          </CCol>
          <CCol sm="6" lg="6">
            <IndicateursTableau commune_id="2208" indicateur="Quelques Statistiques de Population" />
          </CCol>
    </CRow>
    </CCardBody>
  </CCard>
    

    <CRow>
      
      
      <CCol sm="12" lg="12">
        <GroupeBarChart commune_id="2208"
          groupe="SERVICES" />
      </CCol>
      <CCol sm="6" lg="6">
        <GroupeBarChart commune_id="2208"
          groupe="ASSAINISSEMENT" />
      </CCol>
      <CCol sm="6" lg="6">
        <GroupeBarChart commune_id="2208"
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
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'user' },
        { key: 'country', _classes: 'text-center' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method', _classes: 'text-center' },
        { key: 'activity' },
      ]
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
        commune_id: 2208
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
    }
  },
  mounted: function () {
    let self = this;
    self.getRepartitionPopulationParSexe();
  }
}
</script>
