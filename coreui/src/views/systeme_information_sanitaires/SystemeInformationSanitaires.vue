<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Systeme Information Sanitaires
            <div class="card-header-actions">
             <AddButton @ajouter="createSystemeInformationSanitaire()"/>&nbsp;
             <ImportButton title="Importation données Systeme Information Sanitaires" :fields="fieldsI" apiUrl="systeme_information_sanitaires"/>&nbsp;
             <ExportButton :items="items" title="SystemeInformationSanitaire" :fields="fields"/>&nbsp;
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
                  <CButton color="secondary"  size="sm" @click="showSystemeInformationSanitaire( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editSystemeInformationSanitaire( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deleteSystemeInformationSanitaire( item.id )"/>
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
  name: 'SystemeInformationSanitaire',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton,ImportButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
     'type_rapport','rapport_attendu','rapport_recu','rapport_recu_temps','actions'],
      fieldsI: [ 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
     'type_rapport','rapport_attendu','rapport_recu','rapport_recu_temps'],
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
    SystemeInformationSanitaireLink (id) {
      return `systeme_information_sanitaires/${id.toString()}`
    },
    editLink (id) {
      return `systeme_information_sanitaires/${id.toString()}/edit`
    },
    showSystemeInformationSanitaire ( id ) {
      const SystemeInformationSanitaireLink = this.SystemeInformationSanitaireLink( id );
      this.$router.push({path: SystemeInformationSanitaireLink});
    },
    editSystemeInformationSanitaire ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteSystemeInformationSanitaire ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/systeme_information_sanitaires/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Systeme Information Sanitaire.';
          self.showAlert();
          self.getSystemeInformationSanitaire();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createSystemeInformationSanitaire () {
      this.$router.push({path: 'systeme_information_sanitaires/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getSystemeInformationSanitaire (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/systeme_information_sanitaires?token=' + localStorage.getItem("api_token") )
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
    this.getSystemeInformationSanitaire();
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
