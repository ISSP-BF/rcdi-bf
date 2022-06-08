<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Acte Mariages
            <div class="card-header-actions">
              <AddButton @ajouter="createActeMariage()"/>&nbsp;
              <ExportButton :items="items" title="Acte Mariages" :fields="fields"/>&nbsp;
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

              <template #nom_prenom="{item}">
                <td>
                  <strong>{{item.nom}} {{item.prenom}}</strong>
                </td>
              </template>
              <template #sexe="{item}">
                <td>
                  <strong>{{item.sexe=='M'?'Homme':'Femme'}}</strong>
                </td>
              </template>
              
              <template #date_mariage="{item}">
                <td>
                  <strong>{{item.date_mariage|formatDateShort}}</strong>
                </td>
              </template>
              
              <template #lieu_mariage_commune="{item}">
                <td>
                  {{item.lieu_mariage_commune}}
                </td>
              </template>

              <template #centre_sante_mariage="{item}">
                <td>
                  {{item.centre_sante_mariage}}
                </td>
              </template>
              
              <template #date_etablissement="{item}">
                <td>
                  {{item.date_etablissement|formatDateShort}}
                </td>
              </template>
              
              <template #date_autorisation="{item}">
                <td>
                  {{item.date_autorisation|formatDateShort}}
                </td>
              </template>
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showActeMariage( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editActeMariage( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteActeMariage( item.id )"><CIcon name="cil-x-circle"/></CButton>
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

export default {
  name: 'ActeMariages',
  components: { 
    ExportButton,AddButton
  },
  data: () => {
    return {
      items: [],
      fields:['n_acte','region', 'province', 'commune','date_etablissement','nom_conjoint','prenom_conjoint','date_naissance_conjoint','age_mariage_conjoint','sexe_conjoint','hors_commune_conjoint','commune_naissance_conjoint','localite_naissance_conjoint','domicile_conjoint','profession_conjoint','nom_conjointe','prenom_conjointe','date_naissance_conjointe','age_mariage_conjointe','sexe_conjointe','hors_commune_conjointe','commune_naissance_conjointe','localite_naissance_conjointe','domicile_conjointe','profession_conjointe','regime_matrimonial','option_matrimonial','actions'],

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
    acteMariageLink (id) {
      return `acte_mariages/${id.toString()}`
    },
    editLink (id) {
      return `acte_mariages/${id.toString()}/edit`
    },
    showActeMariage ( id ) {
      const acteMariageLink = this.acteMariageLink( id );
      this.$router.push({path: acteMariageLink});
    },
    editActeMariage ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteActeMariage ( id ) {
      let self = this;
      let acteMariageId = id;
      axios.post(  this.$apiAdress + '/api/acte_mariages/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted acteMariage.';
          self.showAlert();
          self.getActeMariages();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createActeMariage () {
      this.$router.push({path: 'acte_mariages/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getActeMariages (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/acte_mariages?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
        setTimeout(function () {
            $('.table').DataTable(
              {
                pagingType: 'full_numbers',
                pageLength: 5,
                processing: true,
                dom: 'Bfrtip',
                buttons: ['copy', 'csv', 'print'
                ]
              }
            );
          },
            10
          );
      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getActeMariages();
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
  
  th{
    width: max-content!important;
    border: dotted;
    background-color: red;
  }
</style>
