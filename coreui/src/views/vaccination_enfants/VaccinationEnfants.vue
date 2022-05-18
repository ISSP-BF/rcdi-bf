<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            VaccinationEnfants
            <div class="card-header-actions">
             <CButton color="primary" @click="createVaccinationEnfant()">Ajouter</CButton>
            </div>
        </CCardHeader>
        <CCardBody>
            <CAlert
              :show.sync="dismissCountDown"
              color="primary"
              fade
            >
              ({{dismissCountDown}}) {{ message }}
            </CAlert>
            <CDataTable
              hover
              :items="items"
              :fields="fields"
              :items-per-page="10"
              pagination
            >
            

              <template #formation_sanitaire="{item}">
                <td>
                  <label class="width-max-content"><strong>{{item.formation_sanitaire}}</strong></label>
                </td>
              </template>

              <template #region="{item}">
                <td>
                  <label class="width-max-content">{{item.region}}</label>
                </td>
              </template>

              <template #province="{item}">
                <td>
                  <label class="width-max-content">{{item.province}}</label>
                </td>
              </template>

              <template #commune="{item}">
                <td>
                  <label class="width-max-content">{{item.commune}}</label>
                </td>
              </template>
              

              <template #district="{item}">
                <td>
                  <label class="width-max-content">{{item.district}}</label>
                </td>
              </template>
              
              
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showVaccinationEnfant( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editVaccinationEnfant( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteVaccinationEnfant( item.id )"><CIcon name="cil-x-circle"/></CButton>
                  </div>
                </td>
              </template>
            </CDataTable>
        </CCardBody>  
      </CCard>
      </transition>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VaccinationEnfant',
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
   'NbVaccinationEnfant_Normaux',
   'NbVaccinationEnfant_Assiste',
   'NbVaccinationEnfant_Cesarienne',
   'NbVaccinationEnfant_Partogramme',
   'NNaissance_vivante',
   'NbMortNe_frais',
   'NbMortNe_Macere',
                'actions'],

      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      you: null,
      message: '',
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  computed: {
  },
  methods: {
    getRowCount (items) {
      return items.length
    },
    VaccinationEnfantLink (id) {
      return `vaccinationEnfants/${id.toString()}`
    },
    editLink (id) {
      return `vaccinationEnfants/${id.toString()}/edit`
    },
    showVaccinationEnfant ( id ) {
      const VaccinationEnfantLink = this.VaccinationEnfantLink( id );
      this.$router.push({path: VaccinationEnfantLink});
    },
    editVaccinationEnfant ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteVaccinationEnfant ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/vaccinationEnfants/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted VaccinationEnfant.';
          self.showAlert();
          self.getVaccinationEnfant();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createVaccinationEnfant () {
      this.$router.push({path: 'vaccinationEnfants/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getVaccinationEnfant (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/vaccinationEnfants?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
        console.log(response)
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getVaccinationEnfant();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
.width-max-content{
  width: max-content;
}
</style>
