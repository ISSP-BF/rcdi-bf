<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Morbilite Paludismes
            <div class="card-header-actions">
             <AddButton @ajouter="createMorbilitePaludisme()"/>&nbsp;
             <ImportButton title="Importation données Morbilite Paludismes" :fields="fieldsI" apiUrl="morbilite_paludismes"/>&nbsp;
             <ExportButton :items="items" title="MorbilitePaludisme" :fields="fields"/>&nbsp;
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
                  <CButton color="secondary"  size="sm" @click="showMorbilitePaludisme( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editMorbilitePaludisme( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deleteMorbilitePaludisme( item.id )"/>
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
  name: 'MorbilitePaludisme',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton,ImportButton,
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
     'NbCas_Suspect_Palu','NbCas_PaluSimple_Confirme','NbCas_PaluSimple_Presume','NbCas_PaluGrave_Confirme','NbCas_PaluGrave_Presume','NbCas_Deces_PaluGrave','actions'],
      fieldsI: ['region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
     'NbCas_Suspect_Palu','NbCas_PaluSimple_Confirme','NbCas_PaluSimple_Presume','NbCas_PaluGrave_Confirme','NbCas_PaluGrave_Presume','NbCas_Deces_PaluGrave'],
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
    MorbilitePaludismeLink (id) {
      return `morbilite_paludismes/${id.toString()}`
    },
    editLink (id) {
      return `morbilite_paludismes/${id.toString()}/edit`
    },
    showMorbilitePaludisme ( id ) {
      const MorbilitePaludismeLink = this.MorbilitePaludismeLink( id );
      this.$router.push({path: MorbilitePaludismeLink});
    },
    editMorbilitePaludisme ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteMorbilitePaludisme ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/morbilite_paludismes/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Planification Familiale.';
          self.showAlert();
          self.getMorbilitePaludisme();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createMorbilitePaludisme () {
      this.$router.push({path: 'morbilite_paludismes/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getMorbilitePaludisme (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/morbilite_paludismes?token=' + localStorage.getItem("api_token") )
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
    this.getMorbilitePaludisme();
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
