<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            <h3>
            <strong>Fichier Village</strong></h3>
            <h6>Source : RGPH 2019</h6>
            <div class="card-header-actions"><ExportButton
                  :items="dataVisualisation"
                  title="Fichier village"
                  :fields="fields"
                  :showDefault="true"
                />&nbsp;
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
              :items="dataVisualisation"
              :fields="fields"
              :items-per-page="10"
              pagination
            >
              <template #PROVINCE="{item}">
                <td>
                  <strong>{{item.PROVINCE}}</strong>
                </td>
              </template>
              <template #COMMUNE="{item}">
                <td>
                  <strong>{{item.COMMUNE}}</strong>
                </td>  
              </template>
              <template #REGION="{item}">
                <td>
                  <strong>{{item.REGION}}</strong>
                </td>  
              </template> 
              <template #Indicateur="{item}">
                <td>
                  <strong>{{item.Indicateur}}</strong>
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
import ExportButton from "../buttons/ExportButton.vue";

export default {
  name: 'FichierVillages',
  components: {
    ExportButton
  },
  data: () => {
    return {
      items: [],
      dataVisualisation:[],
      fields: ['CODE_REGION','REGION','CODE_PROVINCE','PROVINCE','CODE_COMMUNE','COMMUNE','MILIEU_RESIDENCE','codeAppel',
      'Village_Secteur','m5_new'],
      fieldsI: ['CODE_REGION','REGION','CODE_PROVINCE','PROVINCE','CODE_COMMUNE','COMMUNE','MILIEU_RESIDENCE','codeAppel',
      'Village_Secteur','m5_new'],
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
    getFichierVillages (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/fichier-villages?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
        self.dataVisualisation = [];
        self.items.forEach(item => {
            let dataSearch = self.dataVisualisation.find(p=>p.m5_new.includes(item.m5_new));
            if(dataSearch){
              dataSearch[item.Indicateur]=item.Valeur;
            }
            else{
              dataSearch=item;
              dataSearch[item.Indicateur]=item.Valeur;
              self.dataVisualisation.push(dataSearch);
            }
            if(self.fields&&self.fields.findIndex(p=>p==item.Indicateur)<0){
              self.fields.push(item.Indicateur);
              self.fieldsI.push(item.Indicateur);
            }
        });
        // self.fields.push('actions');
      }).catch(function (error) {
        console.log(error);
        //self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getFichierVillages();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
