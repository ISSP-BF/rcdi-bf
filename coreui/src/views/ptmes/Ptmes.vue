<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Prévention de la transmission mere enfants
            <div class="card-header-actions">
             <AddButton @ajouter="createPTME()"/>&nbsp;
             <ImportButton title="Importation données de Prévention de la transmission mere enfants" :fields="fieldsI" apiUrl="ptmes"/>&nbsp;
             <ExportButton :items="items" title="PTME" :fields="fields"/>&nbsp;
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
                  <CButton color="secondary"  size="sm" @click="showPTME( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editPTME( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deletePTME( item.id )"/>
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
  name: 'PTMES',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton,ImportButton
  },
  data: () => {
    return {
      items: [],
      /*
     
           'NbFemmeEnceinte_VIHPositif_CPN1','NbFemmeVueCPN_TestVIH','NbFemmeVueCPN_TestVIH_Positif',
      */
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
                'NbFemmeEnceinte_VIHPositif_CPN1','NbFemmeVueCPN_TestVIH','NbFemmeVueCPN_TestVIH_Positif','actions'],
      fieldsI: ['region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
                'NbFemmeEnceinte_VIHPositif_CPN1','NbFemmeVueCPN_TestVIH','NbFemmeVueCPN_TestVIH_Positif'],

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
    ptmeLink (id) {
      return `ptmes/${id.toString()}`
    },
    editLink (id) {
      return `ptmes/${id.toString()}/edit`
    },
    showPTME ( id ) {
      const ptmeLink = this.ptmeLink( id );
      this.$router.push({path: ptmeLink});
    },
    editPTME ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deletePTME ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/ptmes/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted ptme.';
          self.showAlert();
          self.getPTMEs();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createPTME () {
      this.$router.push({path: 'ptmes/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getPTMEs (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/ptmes?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getPTMEs();
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
