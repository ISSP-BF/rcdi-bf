<template>
  <CRow col="12">
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Donnee
            <div class="card-header-actions">
             <CButton color="primary" @click="createDonnee()">Ajouter</CButton>
            </div>
        </CCardHeader>
        <CCardBody>
            <CDataTable
              hover
              :items="items"
              :fields="fields"
              :items-per-page="10"
              pagination
            > 
              <template #periode_value="{item}">
                <td>
                  <strong>{{item.periode_value}}</strong>
                </td>  
              </template>
              
              <template #indicateur="{item}">
                <td>
                  <strong>{{item.indicateur.libelle}}</strong>
                </td>  
              </template>
              <template #groupe="{item}">
                <td>
                  <strong>{{item.indicateur.groupe}}</strong>
                </td>  
              </template>
              <template #sous_groupe="{item}">
                <td>
                  <strong>{{item.indicateur.sous_groupe}}</strong>
                </td>  
              </template>
              
              <template #valeur="{item}">
                <td>
                  <strong>{{item.valeur}}</strong>
                </td>  
              </template>
              <template #source="{item}">
                <td>
                  {{item.source}}
                </td>  
              </template>
              
              <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showDonnee( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editDonnee( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteDonnee( item.id )"><CIcon name="cil-x-circle"/></CButton>
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

export default {
  name: 'Donnee',
  data: () => {
    return {
      items: [],
      fields: ['id','groupe','sous_groupe','indicateur', 'sous_indicateur', 'periode','periode_value', 'annee','valeur', 'source', 'actions'],
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
    donneeLink (id) {
      return `donnees/${id.toString()}`
    },
    editLink (id) {
      return `donnees/${id.toString()}/edit`
    },
    showDonnee ( id ) {
      const donneeLink = this.donneeLink( id );
      this.$router.push({path: donneeLink});
    },
    editDonnee ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteDonnee ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/donnees/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
        self.$toasted.show(response.data.message,{type:"success"}); 
          self.getDonnee();
      }).catch(function (error) {
        console.log(error);
        self.$toasted.show(error.data.message,{type:"danger"}); 
        // self.$router.push({ path: '/login' });
      });
    },
    createDonnee () {
      this.$router.push({path: 'donnees/create'});
    },
    getDonnee (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/donnees?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
        console.log(self.items)
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getDonnee();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
