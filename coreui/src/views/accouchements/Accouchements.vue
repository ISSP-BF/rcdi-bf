<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Accouchement
            <div class="card-header-actions">
             <AddButton @ajouter="createAccouchement()"/>&nbsp;
             <ImportButton title="Importation données de l'Accouchement" :fields="fieldsI" apiUrl="accouchements"/>&nbsp;
             <ExportButton :items="items" title="Accouchement" :fields="fields"/>&nbsp;
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
                  <CButton color="secondary"  size="sm" @click="showAccouchement( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editAccouchement( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deleteAccouchement( item.id )"/>
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
  name: 'Accouchement',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton,ImportButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
      'NbAccouchement_Normaux','NbAccouchement_Assiste','NbAccouchement_Cesarienne','NbAccouchement_Partogramme',
      'NNaissance_vivante','NbMortNe_frais','NbMortNe_Macere','actions'],
      fieldsI: ['region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
      'NbAccouchement_Normaux','NbAccouchement_Assiste','NbAccouchement_Cesarienne','NbAccouchement_Partogramme',
      'NNaissance_vivante','NbMortNe_frais','NbMortNe_Macere'],
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
    AccouchementLink (id) {
      return `accouchements/${id.toString()}`
    },
    editLink (id) {
      return `accouchements/${id.toString()}/edit`
    },
    showAccouchement ( id ) {
      const AccouchementLink = this.AccouchementLink( id );
      this.$router.push({path: AccouchementLink});
    },
    editAccouchement ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteAccouchement ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/accouchements/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Accouchement.';
          self.showAlert();
          self.getAccouchement();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createAccouchement () {
      this.$router.push({path: 'accouchements/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getAccouchement (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/accouchements?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
        // console.log(response)
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getAccouchement();
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
