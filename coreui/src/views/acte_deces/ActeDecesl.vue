<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Acte de Décès
            <div class="card-header-actions">
              <AddButton @ajouter="createActeDeces()"/>&nbsp;
              <ExportButton :items="items" title="Acte de Décès" :fields="fields"/>&nbsp;
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
              :loading="loading"
              pagination
            >
              <template #numero_acte="{item}">
                <td>
                  <strong>{{item.n_acte}}</strong>
                </td>
              </template>
              <template #region="{item}">
                <td>
                  <label>{{item.region}}</label>
                </td>  
              </template>
              <template #prenom="{item}">
                <td>
                  <label>{{item.prenom}}</label>
                </td>  
              </template>
              <template #nom="{item}">
                <td>
                  <label>{{item.nom}}</label>
                </td>  
              </template>
              <template #province="{item}">
                <td>
                  {{item.province}}
                </td>  
              </template>
              <template #commune="{item}">
                <td>
                  {{item.commune}}
                </td>  
              </template>
              <template #date_declaration="{item}">
                <td>
                  {{item.date_declaration|formatDateShort}}
                </td>  
              </template>
              <template #date_etablissement="{item}">
                <td>
                  {{item.date_etablissement|formatDateShort}}
                </td>  
              </template>

              <template #sexe="{item}">
                <td>
                  <strong>{{item.sexe=='M'?'Homme':'Femme'}}</strong>
                </td>
              </template>
              
              <template #date_deces="{item}">
                <td>
                  {{item.date_deces|formatDateShort}}
                </td>
              </template>
              <template #date_naissance="{item}">
                <td>
                  {{item.date_naissance|formatDateShort}}
                </td>
              </template>
              <template #age="{item}">
                <td>
                  <strong>{{item.age}}</strong>
                </td>
              </template>

              <template #profession="{item}">
                <td>
                  <label>{{item.profession.slice(0,40)}}</label>
                </td>
              </template>
              
              <template #statut_matrimonial="{item}">
                <td>
                  {{item.statut_matrimonial}}
                </td>
              </template>
              
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showActeDeces( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editActeDeces( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deleteActeDeces( item.id )"/>
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
  name: 'ActeDecess',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
      fields: ['numero_acte', 'region', 'province', 'commune','date_declaration','nom','prenom',
       'sexe','date_naissance','date_deces','age',
       'date_etablissement','profession','statut_matrimonial', 'actions'],
       loading:false,
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
    acteDecesLink (id) {
      return `acte_deces/${id.toString()}`
    },
    editLink (id) {
      return `acte_deces/${id.toString()}/edit`
    },
    showActeDeces ( id ) {
      const acteDecesLink = this.acteDecesLink( id );
      this.$router.push({path: acteDecesLink});
    },
    editActeDeces ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteActeDeces ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/acte_deces/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted acteDeces.';
          self.showAlert();
          self.getActeDecess();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createActeDeces () {
      this.$router.push({path: 'acte_deces/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getActeDecess (){
      let self = this;
      this.loading = true;
      axios.get(  this.$apiAdress + '/api/acte_deces?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
        self.loading = false;
      }).catch(function (error) {
        console.log(error);
        self.loading = false;
        // self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getActeDecess();
  }
}
</script>

<style scoped>
  .card-body >>> table > tbody > tr > td {
    cursor: pointer;
  }
  td>label{
    width: max-content!important;
  }
</style>
