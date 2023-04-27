<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Sous indicateur
            <div class="card-header-actions">
             <CButton color="primary" @click="createSousIndicateur()">Ajouter</CButton>
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
              <template #desagregation="{item}">
                <td>
                  <strong>{{item.desagregation?.libelle}}</strong>
                </td>
              </template>
              <template #libelle="{item}">
                <td>
                  <strong>{{item.libelle}}</strong>
                </td>  
              </template>
              
              <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showSousIndicateur( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editSousIndicateur( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteSousIndicateur( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
  name: 'Sous indicateur',
  data: () => {
    return {
      items: [],
      fields: ['id', 'desagregation', 'libelle', 'actions'],
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
    sousIndicateurLink (id) {
      return `sousIndicateurs/${id.toString()}`
    },
    editLink (id) {
      return `sousIndicateurs/${id.toString()}/edit`
    },
    showSousIndicateur ( id ) {
      const sousIndicateurLink = this.sousIndicateurLink( id );
      this.$router.push({path: sousIndicateurLink});
    },
    editSousIndicateur ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteSousIndicateur ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/sous_indicateurs/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
        self.$toasted.show(response.data.message,{type:"success"}); 
          self.getSousIndicateur();
      }).catch(function (error) {
        console.log(error);
        self.$toasted.show(error.data.message,{type:"danger"}); 
        self.$router.push({ path: '/login' });
      });
    },
    createSousIndicateur () {
      this.$router.push({path: 'sous_indicateurs/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getSousIndicateur (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/sous_indicateurs?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getSousIndicateur();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
