<template>
  <CRow>
    <CCol col="6" xl="6">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Liste des groupes
            <div class="card-header-actions">
             <CButton color="primary" @click="createGroupe()">Ajouter</CButton>
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
                  <CButton color="secondary"  size="sm" @click="showGroupe( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editGroupe( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteGroupe( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
  name: 'Groupes',
  data: () => {
    return {
      items: [],
      fields: ['id', 'groupe','localisation', 'description','actions'],
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
    groupeLink (id) {
      return `groupes/${id.toString()}`
    },
    editLink (id) {
      return `groupes/${id.toString()}/edit`
    },
    showGroupe ( id ) {
      const groupeLink = this.groupeLink( id );
      this.$router.push({path: groupeLink});
    },
    editGroupe ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteGroupe ( id ) {
      let self = this;
      let groupeId = id;
      axios.post(  this.$apiAdress + '/api/groupes/' + id + '?token=' + localStorage.getItem("api_token"), {
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
    createGroupe () {
      this.$router.push({path: 'groupes/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getGroupes (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/groupes?token=' + localStorage.getItem("api_token") )
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
