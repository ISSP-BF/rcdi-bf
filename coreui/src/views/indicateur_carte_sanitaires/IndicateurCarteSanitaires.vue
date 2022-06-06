<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Systeme Information Sanitaires
            <div class="card-header-actions">
             <CButton color="primary" @click="createIndicateurCarteSanitaire()">Ajouter</CButton>&nbsp;
             <ImportButton title="Importation données Systeme Information Sanitaires" :fields="fieldsI" apiUrl="indicateur_carte_sanitaires"/>&nbsp;
             <ExportButton :items="items" title="IndicateurCarteSanitaire" :fields="fields"/>&nbsp;
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
                  <CButton color="secondary"  size="sm" @click="showIndicateurCarteSanitaire( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editIndicateurCarteSanitaire( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteIndicateurCarteSanitaire( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
import ImportButton from '../buttons/ImportButton.vue'

export default {
  name: 'IndicateurCarteSanitaire',
  components: { 
    ExportButton,ImportButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
     'NbLit_SuiteCouche','NbLit_HospiMaternite','NbLit_HospiAutreService','actions'],
      fieldsI: ['region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
     'NbLit_SuiteCouche','NbLit_HospiMaternite','NbLit_HospiAutreService'],
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
    IndicateurCarteSanitaireLink (id) {
      return `indicateur_carte_sanitaires/${id.toString()}`
    },
    editLink (id) {
      return `indicateur_carte_sanitaires/${id.toString()}/edit`
    },
    showIndicateurCarteSanitaire ( id ) {
      const IndicateurCarteSanitaireLink = this.IndicateurCarteSanitaireLink( id );
      this.$router.push({path: IndicateurCarteSanitaireLink});
    },
    editIndicateurCarteSanitaire ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteIndicateurCarteSanitaire ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/indicateur_carte_sanitaires/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Indicateur Carte Sanitaire.';
          self.showAlert();
          self.getIndicateurCarteSanitaire();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createIndicateurCarteSanitaire () {
      this.$router.push({path: 'indicateur_carte_sanitaires/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getIndicateurCarteSanitaire (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/indicateur_carte_sanitaires?token=' + localStorage.getItem("api_token") )
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
    this.getIndicateurCarteSanitaire();
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
