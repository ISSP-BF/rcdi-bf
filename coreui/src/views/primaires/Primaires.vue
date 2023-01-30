<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Primaire
            <div class="card-header-actions">
             <AddButton @ajouter="createPrimaire()"/>&nbsp;
              <ExportButton :items="items" title="Primaire" :fields="fields"/>&nbsp;
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

              <template #ExistenceEspacesRecreatif="{item}">
                <td>
                  {{item.ExistenceEspacesRecreatif?"OUI":"NON"}}
                </td>
              </template>
              <template #ExistenceDispositifHygiene="{item}">
                <td>
                  {{item.ExistenceDispositifHygiene?"OUI":"NON"}}
                </td>
              </template>
              <template #ExistenceCantine="{item}">
                <td>
                  {{item.ExistenceCantine?"OUI":"NON"}}
                </td>
              </template>
              <template #SourceDotationEtat="{item}">
                <td>
                  {{item.SourceDotationEtat?"OUI":"NON"}}
                </td>
              </template>
              <template #SourceDotationPartenaire="{item}">
                <td>
                  {{item.SourceDotationPartenaire?"OUI":"NON"}}
                </td>
              </template>
              <template #SourceDotationEndogene="{item}">
                <td>
                  {{item.SourceDotationEndogene?"OUI":"NON"}}
                </td>
              </template>
              
              
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showPrimaire( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editPrimaire( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deletePrimaire( item.id )"/>
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

export default {
  name: 'Primaire',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
      fields: [
      'id','n_ordre', 'region', 'province', 'commune','trimestre','annee',
      'ceb','nom_structure','statut','type','NbTotalSalleActivite','NbLatrine','NbPoubelle','ExistanceBacOrdure','ExistanceSourceEauAmeliore','NbGarcon_CP1','NbGarconMoyenne_CP1','NbGarconAbandon_CP1','NbGarcon_CP2','NbGarconMoyenne_CP2','NbGarconAbandon_CP2','NbGarcon_CE1','NbGarconMoyenne_CE1','NbGarconAbandon_CE1','NbGarcon_CE2','NbGarconMoyenne_CE2','NbGarconAbandon_CE2','NbGarcon_CM1','NbGarconMoyenne_CM1','NbGarconAbandon_CM1','NbGarcon_CM2','NbGarconMoyenne_CM2','NbGarconAbandon_CM2','NbTotalGarcon','NbTotalGarconMoyenne','NbTotalGarconAbandon','NbGarcon_PDI','NbGarconMoyenne_PDI','NbGarconAbandon_PDI','NbFille_CP1','NbFilleMoyenne_CP1','NbFilleAbandon_CP1','NbFille_CP2','NbFilleMoyenne_CP2','NbFilleAbandon_CP2','NbFille_CE1','NbFilleMoyenne_CE1','NbFilleAbandon_CE1','NbFille_CE2','NbFilleMoyenne_CE2','NbFilleAbandon_CE2','NbFille_CM1','NbFilleMoyenne_CM1','NbFilleAbandon_CM1','NbFille_CM2','NbFilleMoyenne_CM2','NbFilleAbandon_CM2','NbTotalFille','NbTotalFilleMoyenne','NbTotalFilleAbandon','NbFille_PDI','NbFilleMoyenne_PDI','NbFilleAbandon_PDI','NbTotalEnseignantHomme','NbTotalEnseignantFemme','NbEnseignantHommeRedeployes','NbEnseignantFemmeRedeployes','NbEnseignantHommeVolontaire','NbEnseignantFemmeVolontaire','ExistenceEspacesRecreatif','ExistenceDispositifHygiene','ExistenceCantine','SourceDotationEtat','SourceDotationPartenaire','SourceDotationEndogene',
      {
        key: "actions",
        label: "",
        _style: "min-width:1%",
        sorter: false,
        filter: false,
      }],
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
    PrimaireLink (id) {
      return `primaires/${id.toString()}`
    },
    editLink (id) {
      return `primaires/${id.toString()}/edit`
    },
    showPrimaire ( id ) {
      const PrimaireLink = this.PrimaireLink( id );
      this.$router.push({path: PrimaireLink});
    },
    editPrimaire ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deletePrimaire ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/primaires/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Primaire.';
          self.showAlert();
          self.getPrimaire();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createPrimaire () {
      this.$router.push({path: 'primaires/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getPrimaire (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/primaires?token=' + localStorage.getItem("api_token") )
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
    this.getPrimaire();
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
