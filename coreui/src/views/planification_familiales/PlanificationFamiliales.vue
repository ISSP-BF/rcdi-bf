<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Planification Familiale
            <div class="card-header-actions">
             <AddButton @ajouter="createPlanificationFamiliale()"/>&nbsp;
             <ImportButton title="Importation données Planification Familiale" :fields="fieldsI" apiUrl="planification_familiales"/>&nbsp;
             <ExportButton :items="items" title="PlanificationFamiliale" :fields="fields"/>&nbsp;
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
                  <CButton color="secondary"  size="sm" @click="showPlanificationFamiliale( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editPlanificationFamiliale( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deletePlanificationFamiliale( item.id )"/>
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
  name: 'PlanificationFamiliale',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton,ImportButton,
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
           'type_utilisatrices','NbPillule_COC','NbPillule_COP','NbDMPlule_IM','NbDMPA_IM','NbImplant_5ans','NbImplant_3ans','NbDIU','NbPreservatif_Masculin','NbPreservatif_Feminin','NbLigature','NbVasectomie','NbCollier_Cycle','NbMethode_maman','actions'],
      fieldsI: ['region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
           'type_utilisatrices','NbPillule_COC','NbPillule_COP','NbDMPlule_IM','NbDMPA_IM','NbImplant_5ans','NbImplant_3ans','NbDIU','NbPreservatif_Masculin','NbPreservatif_Feminin','NbLigature','NbVasectomie','NbCollier_Cycle','NbMethode_maman'],
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
    PlanificationFamilialeLink (id) {
      return `planification_familiales/${id.toString()}`
    },
    editLink (id) {
      return `planification_familiales/${id.toString()}/edit`
    },
    showPlanificationFamiliale ( id ) {
      const PlanificationFamilialeLink = this.PlanificationFamilialeLink( id );
      this.$router.push({path: PlanificationFamilialeLink});
    },
    editPlanificationFamiliale ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deletePlanificationFamiliale ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/planification_familiales/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Planification Familiale.';
          self.showAlert();
          self.getPlanificationFamiliale();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createPlanificationFamiliale () {
      this.$router.push({path: 'planification_familiales/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getPlanificationFamiliale (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/planification_familiales?token=' + localStorage.getItem("api_token") )
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
    this.getPlanificationFamiliale();
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
