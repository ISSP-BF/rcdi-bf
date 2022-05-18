<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Accouchements
            <div class="card-header-actions">
             <CButton color="primary" @click="createAccouchement()">Ajouter</CButton>
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
            

              <template #formation_sanitaire="{item}">
                <td>
                  <label class="width-max-content"><strong>{{item.formation_sanitaire}}</strong></label>
                </td>
              </template>

              <template #region="{item}">
                <td>
                  <label class="width-max-content">{{item.region}}</label>
                </td>
              </template>

              <template #province="{item}">
                <td>
                  <label class="width-max-content">{{item.province}}</label>
                </td>
              </template>

              <template #commune="{item}">
                <td>
                  <label class="width-max-content">{{item.commune}}</label>
                </td>
              </template>
              

              <template #district="{item}">
                <td>
                  <label class="width-max-content">{{item.district}}</label>
                </td>
              </template>
              
              
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showAccouchement( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editAccouchement( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteAccouchement( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
  name: 'Accouchement',
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
   'NbAccouchement_Normaux',
   'NbAccouchement_Assiste',
   'NbAccouchement_Cesarienne',
   'NbAccouchement_Partogramme',
   'NNaissance_vivante',
   'NbMortNe_frais',
   'NbMortNe_Macere',
                'actions'],

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
    AccouchementLink (id) {
      return `accouchements/${id.toString()}`
    },
    editLink (id) {
      return `accouchements/${id.toString()}/edit`
    },
    showAccouchement ( id ) {
      const AccouchementLink = this.AccouchementLink( id );
      this.$router.push({path: AccouchementLink});
    },
    editAccouchement ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteAccouchement ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/accouchements/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted Accouchement.';
          self.showAlert();
          self.getAccouchement();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createAccouchement () {
      this.$router.push({path: 'accouchements/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getAccouchement (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/accouchements?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
        console.log(response)
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getAccouchement();
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
