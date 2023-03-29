<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Liste des sous groupes
            <div class="card-header-actions">             
             <AddButton @ajouter="createSousGroupe()"/>&nbsp;
              <ExportButton :items="items" title="Sous Groupe" :fields="fields"/>&nbsp;
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
              <template #groupe="{item}">
                <td>
                  <strong>{{item.groupe}}</strong>
                </td>
              </template>
              <template #sous_groupe="{item}">
                <td>
                  <strong>{{item.libelle}}</strong>
                </td>
              </template>
              <template #description="{item}">
                <td>
                  <strong>{{item.description}}</strong>
                </td>
              </template>              
              
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showSousGroupe( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editSousGroupe( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deleteSousGroupe( item.id )"/>
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
  name: 'Groupes',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'groupe','sous_groupe', 'description','actions'],
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
    sous_groupeLink (id) {
      return `sous_groupes/${id.toString()}`
    },
    editLink (id) {
      return `sous_groupes/${id.toString()}/edit`
    },
    showSousGroupe ( id ) {
      const sous_groupeLink = this.sous_groupeLink( id );
      this.$router.push({path: sous_groupeLink});
    },
    editSousGroupe ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteSousGroupe ( id ) {
      let self = this;
      let groupeId = id;
      axios.post(  this.$apiAdress + '/api/sous_groupes/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.$toasted.show(response.data.message,{type:"success"}); 
          self.getGroupes();
      }).catch(function (error) {
        console.log(error);
        self.$toasted.show(error.data.message,{type:"danger"}); 
        self.$router.push({ path: '/login' });
      });
    },
    createSousGroupe () {
      this.$router.push({path: 'sous_groupes/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getGroupes (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/sous_groupes?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getGroupes();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
