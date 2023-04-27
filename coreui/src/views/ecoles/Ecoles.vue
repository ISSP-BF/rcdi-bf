<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
        
        <CCardHeader>
            Ecole
            <div class="card-header-actions">
             <AddButton @ajouter="createEcole()"/>&nbsp;
              <ExportButton :items="items" title="Ecole" :fields="fields"/>&nbsp;
            </div>
        </CCardHeader>
        <CCardBody>
            <CDataTable
              hover
              tableFilter
              itemsPerPageSelect
              sorter
              :items="items"
              :fields="fields"
              :items-per-page="10"
              :striped="true"
              pagination
            >
              <template #code="{item}">
                <td>
                  <strong>{{item.code}}</strong>
                </td>
              </template>
              <template #region="{item}">
                <td>
                  <label class="width-max-content">{{item.region.region}}</label>
                </td>
              </template>

              <template #province="{item}">
                <td>
                  <label class="width-max-content">{{item.province.province}}</label>
                </td>
              </template> 

              <template #nom_structure="{item}">
                <td>
                  <strong>
                     <label class="width-max-content">{{item.nom_structure}}</label>
                  </strong>
                </td>
              </template>  
              
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showEcole( item.id )">Détail</CButton>
                  &nbsp;
                  <EditButton  @modifier="editEcole( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deleteEcole( item.id )"/>
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
  name: 'Ecoles',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province','nom_structure', 'lon', 'lat', 'statut', 'systeme',
      {
        key: "actions",
        label: "",
        _style: "min-width:1%",
        sorter: false,
        filter: false,
      }],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      message: '',
    }
  },
  computed: {
  },
  methods: {
    ecoleLink (id) {
      return `ecoles/${id.toString()}`
    },
    editLink (id) {
      return `ecoles/${id.toString()}/edit`
    },
    showEcole ( id ) {
      const ecoleLink = this.ecoleLink( id );
      this.$router.push({path: ecoleLink});
    },
    editEcole ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteEcole ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/ecoles/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted ecole.';
          self.getEcoles();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createEcole () {
      this.$router.push({path: 'ecoles/create'});
    },
    getEcoles (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/ecoles?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getEcoles();
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
