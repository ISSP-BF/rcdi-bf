<template>
  <CRow col="12">
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Liste des indicateurs
            <div class="card-header-actions">
             <AddButton @ajouter="createIndicateur()"/>&nbsp;
             <ExportButton :items="items" title="La liste des indicateurs" :fields="fieldsI"/>&nbsp;
            &nbsp;
            </div>
        </CCardHeader>
        <CCardBody>
           
            <CDataTable
              hover
              tableFilter
              sorter
              :items="items"
              :fields="fields"
              :items-per-page="10"
              :striped="true"
              :border="true"
              
              items-per-page-select
              pagination
            > 
              <template #desagregation="{item}">
                <td>
                  <strong>{{item.desagregation}}</strong>
                </td>
              </template>
              <template #groupe="{item}">
                <td>
                  <strong>{{item.groupe}}</strong>
                </td>
              </template>
              <template #libelle="{item}">
                <td>
                  <strong>{{item.libelle|uppercase}}</strong>
                </td>  
              </template>
              
              <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showIndicateur( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editIndicateur( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteIndicateur( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
import AddButton from '../buttons/AddButton.vue'
import EditButton from '../buttons/EditButton.vue'
import DeleteButton from '../buttons/DeleteButton.vue'
import ExportButton from '../buttons/ExportButton.vue'

export default {
  name: 'Indicateur',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id','groupe','sous_groupe', 'code','libelle', 'desagregation','periode', 'actions'],
      fieldsI: ['id','groupe','sous_groupe', 'code','libelle', 'desagregation','periode', 'actions'],
      currentPage: 1,
      perPage: 5,
      totalRows: 0, 
      you: null,
      message: '',
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      perPage: "10", // nombre d'éléments par page
      perPageValues: [
        { value: "5", label: "5" },
        { value: "10", label: "10" },
        { value: "20", label: "20" },
        { value: "50", label: "50" },
      ],
      tableFilterValue:""
    }
  },
  computed: {
  },
  methods: {
    getRowCount (items) {
      return items.length
    },
    indicateurLink (id) {
      return `indicateurs/${id.toString()}`
    },
    editLink (id) {
      return `indicateurs/${id.toString()}/edit`
    },
    showIndicateur ( id ) {
      const indicateurLink = this.indicateurLink( id );
      this.$router.push({path: indicateurLink});
    },
    editIndicateur ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteIndicateur ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/indicateurs/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
        self.$toasted.show(response.data.message,{type:"success"}); 
          self.getIndicateur();
      }).catch(function (error) {
        console.log(error);
        self.$toasted.show(error.data.message,{type:"danger"}); 
        self.$router.push({ path: '/login' });
      });
    },
    createIndicateur () {
      this.$router.push({path: 'indicateurs/create'});
    },
    getIndicateur (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/indicateurs?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getIndicateur();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
