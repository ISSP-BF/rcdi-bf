<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Pre-Scolaire
            <div class="card-header-actions">
             <AddButton @ajouter="createPreScolaire()"/>&nbsp;
              <ExportButton :items="items" title="Pre-Scolaire" :fields="fields"/>&nbsp;
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
                  <CButton color="secondary"  size="sm" @click="showPreScolaire( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editPreScolaire( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deletePreScolaire( item.id )"/>
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
  name: 'PreScolaire',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id','n_ordre', 'region', 'province', 'commune','trimestre','annee',
      'ceb','nom_structure','statut','systeme','NbTotalSalleActivite','NbLatrine','NbPoubelle','ExistanceBacOrdure','ExistanceSourceEauAmeliore','NbGarcon_PS','NbGarconAbandon_PS','NbGarcon_MS','NbGarconAbandon_MS','NbGarcon_GS','NbGarconAbandon_GS','NbTotalGarcon','NbTotalGarconAbandon','NbGarcon_PDI','NbGarconAbandon_PDI','NbFille_PS','NbFilleAbandon_PS','NbFille_MS','NbFilleAbandon_MS','NbFille_GS','NbFilleAbandon_GS','NbTotalFille','NbTotalFilleAbandon','NbFille_PDI','NbFilleAbandon_PDI','NbTotalEnseignantHomme','NbTotalEnseignantFemme','NbEnseignantHommeRedeployes','NbEnseignantFemmeRedeployes','NbEnseignantHommeVolontaire','NbEnseignantFemmeVolontaire',
      'ExistenceEspacesRecreatif','ExistenceDispositifHygiene','ExistenceCantine','SourceDotationEtat','SourceDotationPartenaire','SourceDotationEndogene',
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
    PreScolaireLink (id) {
      return `pre_scolaires/${id.toString()}`
    },
    editLink (id) {
      return `pre_scolaires/${id.toString()}/edit`
    },
    showPreScolaire ( id ) {
      const PreScolaireLink = this.PreScolaireLink( id );
      this.$router.push({path: PreScolaireLink});
    },
    editPreScolaire ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deletePreScolaire ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/pre_scolaires/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted PreScolaire.';
          self.showAlert();
          self.getPreScolaire();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createPreScolaire () {
      this.$router.push({path: 'pre_scolaires/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getPreScolaire (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/pre_scolaires?token=' + localStorage.getItem("api_token") )
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
    this.getPreScolaire();
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
