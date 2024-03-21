<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            <b>Les requêtes</b>
            <div class="card-header-actions">
              <AddButton @ajouter="createdashboardItem()"/>&nbsp;
              <ExportButton :items="items" title="dashboardItems Personnalisés" :fields="fields"/>&nbsp;
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
              <template #dashboardItem="{item}">
                <td>
                  <strong>{{item.libelle}}</strong>
                </td>
              </template>
              <template #ordre="{item}">
                <td>
                  <strong>{{item.i}} [largeur = {{item.w}}]</strong>
                </td>
              </template>
              <template #description="{item}">
                <td>
                  <strong>{{item.description}}</strong>
                </td>
              </template>
              
              
              <template #actions="{item}">
                <td>
                  
                  <div class="card-header-actions" style="display:flex"><CButton color="secondary" size="sm" @click="showdashboardItem(item.id)">Details</CButton>
                    &nbsp;
                    <EditButton  @modifier="editdashboardItem(item.id)"/>
                    &nbsp;
                    <DeleteButton  @supprimer="deletedashboardItem(item.id)"/>
                  </div>
                </td>
              </template>
            </CDataTable>
        </CCardBody>  
      </CCard>
      </transition>
    <CCol>
      
      <CButton color="success" @click="visualiser()"> <CIcon name="cil-speedometer"/>Visualiser</CButton> &nbsp;
                    <CButton color="secondary" size="sm" @click="redirectionElement()">Retour  </CButton>
    </CCol>
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
  name: 'dashboardItems',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id','ordre', 'dashboardItem','graphique', 'description','actions'],
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
    dashboardItemLink (id) {
      return `dashboard-items/${id.toString()}`
    },
    editLink (id) {
      return `dashboard-items/${id.toString()}/edit`
    },
    showdashboardItem ( id ) {
      const dashboardItemLink = this.dashboardItemLink( id );
      this.$router.push({path: dashboardItemLink});
    },
    editdashboardItem ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deletedashboardItem ( id ) {
      let self = this;
      let dashboardItemId = id;
      console.log("=======>")
      axios.post(  this.$apiAdress + '/api/dashboard-items/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.$toasted.show(response.data.message,{type:"success"}); 
          self.getdashboardItems();
      }).catch(function (error) {
        console.log(error);
        self.$toasted.show(error.data.message,{type:"danger"}); 
        self.$router.push({ path: '/login' });
      });
    },
    createdashboardItem () {
      this.$router.push({path: 'dashboard-items/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getdashboardItems (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/dashboard-items?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
    },visualiser(){
      this.$router.push('/dashboard-personalise/'+ this.$route.params.dashboard);
    },
    redirectionElement () {
      this.$router.push('/dashboards');
    },
    getdashboardItemsByDashboardId (){
      let self = this;
      console.log("self.$route.params.dashboard",self.$route.params.dashboard)
      axios.get(  this.$apiAdress + '/api/dashboard-items/findBy/'+self.$route.params.dashboard+'?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getdashboardItemsByDashboardId();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
