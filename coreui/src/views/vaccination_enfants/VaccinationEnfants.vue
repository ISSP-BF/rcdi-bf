<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Vaccination Enfants
            <div class="card-header-actions">
             <AddButton @ajouter="createVaccinationEnfant()"/>&nbsp;
             <ImportButton title="Importation données Vaccination Enfants" :fields="fieldsI" apiUrl="vaccination_enfants"/>&nbsp;
             <ExportButton :items="items" title="VaccinationEnfant" :fields="fields"/>&nbsp;
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
              tableFilter
              itemsPerPageSelect
              sorter
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
                  <EditButton  @modifier="editVaccinationEnfant( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deleteVaccinationEnfant( item.id )"/>
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
import ExportButton from '../buttons/ExportButton.vue'
import AddButton from '../buttons/AddButton.vue'
import EditButton from '../buttons/EditButton.vue'
import DeleteButton from '../buttons/DeleteButton.vue'
import ImportButton from '../buttons/ImportButton.vue'

export default {
  name: 'VaccinationEnfant',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton,ImportButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
          'NbBCG','NbDTCHepBHib1','NbDTCHepBHib','NbRR1','actions'],
      fieldsI: ['region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
          'NbBCG','NbDTCHepBHib1','NbDTCHepBHib','NbRR1'],
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
      return `vaccination_enfants/${id.toString()}`
    },
    editLink (id) {
      return `vaccination_enfants/${id.toString()}/edit`
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
      axios.post(  this.$apiAdress + '/api/vaccination_enfants/' + id + '?token=' + localStorage.getItem("api_token"), {
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
      this.$router.push({path: 'vaccination_enfants/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getVaccinationEnfant (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/vaccination_enfants?token=' + localStorage.getItem("api_token") )
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
