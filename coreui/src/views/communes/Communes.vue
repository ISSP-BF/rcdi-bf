<template>
  <CRow>
    <CCol col="8" xl="8">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Communes
            <div class="card-header-actions">
             <CButton color="primary" @click="createCommune()">Ajouter</CButton>
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
               
              <template #Province="{item}">
                <td>
                  <strong>{{item.province.province}}</strong>
                </td>
              </template>
              <template #Region="{item}">
                <td>
                  <strong>{{item.province.region?item.province.region.region:''}}</strong>
                </td>
              </template>
              <template #Commune="{item}">
                <td>
                  <strong>{{item.commune}}</strong>
                </td>  
              </template>
                          
              <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showCommune( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editCommune( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteCommune( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
  name: 'Communes',
  data: () => {
    return {
      items: [],
      
      fields: ['id','Region','Province', 'Commune', 'actions'],
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
    CommuneLink (id) {
      return `communes/${id.toString()}`
    },
    editLink (id) {
      return `communes/${id.toString()}/edit`
    },
    showCommune ( id ) {
      const CommuneLink = this.CommuneLink( id );
      this.$router.push({path: CommuneLink});
    },
    editCommune ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteCommune ( id ) {
      let self = this;
      let CommuneId = id;
      axios.post(  this.$apiAdress + '/api/communes/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Commune.';
          self.showAlert();
          self.getCommunes();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createCommune () {
      this.$router.push({path: 'communes/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getCommunes (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/communes?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getCommunes();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
