<template>
  <CRow>
    <CModal
      title="Importation données consultation prénatale"
      color="success"
      size="lg"
      :show.sync="successModal"
    >
    <CModalBody>
      <Importantion/></CModalBody>
    </CModal>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Consultation Prenatales
            <div class="card-header-actions">
             <CButton color="primary" @click="createConsultationPrenatale()">Ajouter</CButton>&nbsp;
             <CButton color="warning" @click="successModal = true">Importer</CButton>&nbsp;
             <CButton color="success" @click="exporter()">Exporter</CButton>&nbsp;
            </div>
            <div class="card-header-actions" style="float: left;">
             
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
              tableFilter
              itemsPerPageSelect
              sorter
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
                  <CButton color="secondary"  size="sm" @click="showConsultationPrenatale( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editConsultationPrenatale( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteConsultationPrenatale( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
import Importantion from '../consultation_prenatales/Importantion'



export default {
  name: 'ConsultationPrenatales',
  components: {
    Importantion, 
  },
  data: () => {
    return {
      successModal: false,
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'district','formation_sanitaire',
                'NbFemmeVueCPN','NbFemmeInscriteCPN1','NbFemmeInscriteCPN1_Trim1','NbFemmeVueCPN4',
                'NbFemmeInscriteVueCPN_2Td','NbFemmeFer_Acide_Folique','NbFemmeFer_Acide_Folique_CPN3',
                'NbGrossesse_Refere','NbFemmeVueCPN_TPI3','NbFemmeVueCPN_TPI3_MILDA','actions'],

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
    consultationPrenataleLink (id) {
      return `consultation_prenatales/${id.toString()}`
    },
    editLink (id) {
      return `consultation_prenatales/${id.toString()}/edit`
    },
    exporter(){
      let data = JSON.stringify(this.items); 
      fs.writeFileSync("data.json", data);
      var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, "hello world.txt");
    },
    showConsultationPrenatale ( id ) {
      const consultationPrenataleLink = this.consultationPrenataleLink( id );
      this.$router.push({path: consultationPrenataleLink});
    },
    editConsultationPrenatale ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteConsultationPrenatale ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/consultation_prenatales/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted consultationPrenatale.';
          self.showAlert();
          self.getConsultationPrenatales();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createConsultationPrenatale () {
      this.$router.push({path: 'consultation_prenatales/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getConsultationPrenatales (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/consultation_prenatales?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getConsultationPrenatales();
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
