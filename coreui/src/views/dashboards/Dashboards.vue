<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            <b>Liste des Tableaux de board personnalisés</b>
            <div class="card-header-actions">
              <AddButton @ajouter="createdashboard()"/>&nbsp;
              <ExportButton :items="items" title="DashBoards Personnalisés" :fields="fields"/>&nbsp;
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
              <template #dashboard="{item}">
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
                    <CButton color="success" @click="visualiser(item.id)"> <CIcon name="cil-speedometer"/>Visualiser</CButton> &nbsp;
                    <CButton color="secondary" size="sm" @click="redirectionElement(item.id)">Les requêtes  </CButton>
                    &nbsp;
                    <CButton color="secondary" size="sm" @click="showdashboard(item.id)">Détail</CButton>
                    &nbsp;
                    <EditButton  @modifier="editdashboard(item.id)"/>
                    &nbsp;
                    <DeleteButton  @supprimer="deletedashboard(item.id)"/>
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
  name: 'dashboards',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'dashboard', 'description','actions'],
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
    visualiser(id){
      this.$router.push({path:'dashboard-personalise/'+ id});
    },
    getRowCount (items) {
      return items.length
    },
    dashboardLink (id) {
      return `dashboards/${id.toString()}`
    },
    editLink (id) {
      return `dashboards/${id.toString()}/edit`
    },
    showdashboard ( id ) {
      const dashboardLink = this.dashboardLink( id );
      this.$router.push({path: dashboardLink});
    },
    redirectionElement ( id ) {
      this.$router.push({path: `${id.toString()}/dashboard-items`});
    },
    editdashboard ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deletedashboard ( id ) {
      let self = this;
      let dashboardId = id;
      axios.post(  this.$apiAdress + '/api/dashboards/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.$toasted.show(response.data.message,{type:"success"}); 
          self.getdashboards();
      }).catch(function (error) {
        console.log(error);
        self.$toasted.show(error.data.message,{type:"danger"}); 
        self.$router.push({ path: '/login' });
      });
    },
    createdashboard () {
      this.$router.push({path: 'dashboards/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getdashboards (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/dashboards?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getdashboards();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
