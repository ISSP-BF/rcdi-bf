<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Liste des Formations Sanitaires 
            <div class="card-header-actions">
             <AddButton @ajouter="createFormationSanitaire()"/>&nbsp;
             <ExportButton :items="items" title="La liste des formations sanitaires" :fields="fieldsI"/>&nbsp;
            &nbsp;
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
              <template #code="{item}">
                <td>
                  <strong>{{item.code}}</strong>
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

              <template #district="{item}">
                <td>
                  <label class="width-max-content">{{item.district}}</label>
                </td>
              </template>

              <template #nom_structure="{item}">
                <td>
                  <strong>
                                      <label class="width-max-content">{{item.nom_structure}}</label>
</strong>
                </td>
              </template>
              
              <template #proprietaire="{item}">
                <td>
                  <strong>{{item.proprietaire}}</strong>
                </td>
              </template>
              
              <template #type="{item}">
                <td>
                  {{item.type}}
                </td>
              </template>

              <template #titre="{item}">
                <td>
                  {{item.titre}}
                </td>
              </template>
              
              <template #n_decision="{item}">
                <td>
                  {{item.n_decision}}
                </td>
              </template>
              
              <template #date_autorisation="{item}">
                <td>
                  {{item.date_autorisation}}
                </td>
              </template>
              
              <template #date_fermeture="{item}">
                <td>
                  {{item.date_fermeture}}
                </td>
              </template>
              
              <template #adresse="{item}">
                <td>
                  {{item.adresse}}
                </td>
              </template>
              
              <template #adresse_postale="{item}">
                <td>
                  {{item.adresse_postale}}
                </td>
              </template>
              
              <template #tel="{item}">
                <td>
                  {{item.tel}}
                </td>
              </template>
              
              <template #fax="{item}">
                <td>
                  {{item.fax}}
                </td>
              </template>
              <template #email="{item}">
                <td>
                  {{item.email}}
                </td>
              </template>
              
              <template #lon="{item}">
                <td>
                  {{item.lon}}
                </td>
              </template>
              <template #lat="{item}">
                <td>
                  {{item.lat}}
                </td>
              </template> 
              <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showFormationSanitaire( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editFormationSanitaire( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteFormationSanitaire( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
import AddButton from '../buttons/AddButton.vue'
import EditButton from '../buttons/EditButton.vue'
import DeleteButton from '../buttons/DeleteButton.vue'
import ExportButton from '../buttons/ExportButton.vue'

export default {
  name: 'FormationSanitaires',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
     
      fields: ['id', 'region', 'province','district', 'nom_structure', 'lon', 'lat', 'proprietaire','type','titre','n_decision','date_autorisation','date_fermeture','adresse', 'adresse_postale', 'tel', 'fax', 'email', 'actions'],
      fieldsI: ['id', 'region', 'province','district', 'nom_structure', 'proprietaire','type','titre','n_decision','date_autorisation','date_fermeture','adresse', 'adresse_postale', 'tel', 'fax', 'email', 'lon', 'lat'],
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
    formationSanitaireLink (id) {
      return `formation_sanitaires/${id.toString()}`
    },
    editLink (id) {
      return `formation_sanitaires/${id.toString()}/edit`
    },
    showFormationSanitaire ( id ) {
      const formationSanitaireLink = this.formationSanitaireLink( id );
      this.$router.push({path: formationSanitaireLink});
    },
    editFormationSanitaire ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteFormationSanitaire ( id ) {
      let self = this;
      let formationSanitaireId = id;
      axios.post(  this.$apiAdress + '/api/formation_sanitaires/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted formationSanitaire.';
          self.showAlert();
          self.getFormationSanitaires();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createFormationSanitaire () {
      this.$router.push({path: 'formation_sanitaires/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getFormationSanitaires (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/formation_sanitaires?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
        
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getFormationSanitaires();
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
