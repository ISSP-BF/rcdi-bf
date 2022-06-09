<template>
  <CRow>
    
    <CCol col="12" xl="12">
       <xls-csv-parser :columns="columns" @on-validate="onValidate" :help="help" lang="fr"></xls-csv-parser>
    </CCol>
    <CCol col="12" xl="12">
      <transition name="slide">
            <CDataTable
              hover 
              sorter
              :items="items"
              :fields="fields"
            >
              <template #formation_sanitaire="{item}">
                <td>
                  <label class="width-max-content"><strong>{{item.formation_sanitaire}}</strong></label>
                </td>
              </template>

              <!-- <template #region="{item}">
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
              </template>  -->
              
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                   &nbsp;
                      <CButton size="sm" color="danger" @click="deleteConsultation( item.id )"/>
                  </div>
                </td>
              </template>
            </CDataTable>
         
      </transition>
    </CCol>
    <CCol col="12" xl="12">
      <CButton size="sm" color="success" @click="storeMany()"/>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
import { XlsCsvParser } from 'vue-xls-csv-parser';

export default {
  name: 'Importantion',
  components: {
      XlsCsvParser,
    },
  data: () => {
     return {
       items:[],
        columns: [
          { name: 'region', value:'region'},
          { name: 'province', value:'province'},
          { name: 'commune', value:'commune'},
          { name: 'district', value:'district'},
          { name: 'annee', value:'annee'},
          { name: 'mois', value:'mois'},
          { name: 'formation_sanitaire', value:'formation_sanitaire'},
          { name: 'NbFemmeVueCPN', value:'NbFemmeVueCPN'},
          { name: 'NbFemmeInscriteCPN1', value:'NbFemmeInscriteCPN1'},
          { name: 'NbFemmeInscriteCPN1_Trim1', value:'NbFemmeInscriteCPN1_Trim1'},
          { name: 'NbFemmeVueCPN4', value:'NbFemmeVueCPN4'},
          { name: 'NbFemmeInscriteVueCPN_2Td', value:'NbFemmeInscriteVueCPN_2Td'},
          { name: 'NbFemmeFer_Acide_Folique', value:'NbFemmeFer_Acide_Folique'},
          { name: 'NbFemmeFer_Acide_Folique_CPN3', value:'NbFemmeFer_Acide_Folique_CPN3'},
          { name: 'NbGrossesse_Refere', value:'NbGrossesse_Refere'},
          { name: 'NbFemmeVueCPN_TPI3', value:'NbFemmeVueCPN_TPI3'},
          { name: 'NbFemmeVueCPN_TPI3_MILDA', value:'NbFemmeVueCPN_TPI3_MILDA'},
        ],

        results: null,
        help: `Les colonnes necessaires sont : region, province, commune, district, formation_sanitaire, mois, annee,
                NbFemmeVueCPN, NbFemmeInscriteCPN1, NbFemmeInscriteCPN1_Trim1, NbFemmeVueCPN4, 
                NbFemmeInscriteVueCPN_2Td, NbFemmeFer_Acide_Folique, NbFemmeFer_Acide_Folique_CPN3, 
                NbGrossesse_Refere, NbFemmeVueCPN_TPI3 et NbFemmeVueCPN_TPI3_MILDA `,
    
      fields: ['region', 'province', 'commune', 'district','formation_sanitaire','mois','annee',
                'NbFemmeVueCPN','NbFemmeInscriteCPN1','NbFemmeInscriteCPN1_Trim1','NbFemmeVueCPN4',
                'NbFemmeInscriteVueCPN_2Td','NbFemmeFer_Acide_Folique','NbFemmeFer_Acide_Folique_CPN3',
                'NbGrossesse_Refere','NbFemmeVueCPN_TPI3','NbFemmeVueCPN_TPI3_MILDA','actions'],

      currentPage: 1,
      
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
    onValidate(results) {
        this.results = results;
        this.items = [];
        for(let i=0;i<this.results[0].data.length;i++){this.items.push(
          {
            id:i,
            region_id: null,
            province_id: null,
            commune_id: null,
            district_id: null,
            formation_sanitaire_id: null,
            annee: null,
            mois: null,
            NbFemmeVueCPN: null,
            NbFemmeInscriteCPN1: null,
            NbFemmeInscriteCPN1_Trim1: null,
            NbFemmeVueCPN4: null,
            NbFemmeInscriteVueCPN_2Td: null,
            NbFemmeFer_Acide_Folique: null,
            NbFemmeFer_Acide_Folique_CPN3: null,
            NbGrossesse_Refere: null,
            NbFemmeVueCPN_TPI3: null,
            NbFemmeVueCPN_TPI3_MILDA: null
        }
        )}
        
        this.results.map(localColumn => {
          let i=0;
          for(let it of this.items){
             if(localColumn.data[i]=='NA'||localColumn.data[i]=='NULL'||localColumn.data[i]==undefined||localColumn.data[i]==null){
              it[localColumn.column] = null
             }
             else {
               it[localColumn.column] = localColumn.data[i]
             }
            i++;
          }
        });
      },
    deleteConsultation ( dataToDelete ) {
      let data = [];
      // data.splice
      // this.items = this.items.splice(dataToDelete,1);
      this.items = this.items.filter(function(f) { return f.id !== dataToDelete })

    },
    
    storeMany() {
        let self = this;
        console.log({items:self.items}) 
        axios.post(  this.$apiAdress + '/api/consultation_prenatales/storeMany?token=' + localStorage.getItem("api_token"),
          {items:self.items}
        )
        .then(function (response) {
            self.items = {
            };
            // self.message = 'Successfully created consultation Prenatale.';
            self.$toasted.show("Les données ont été importées",{type:"success"}); 
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
            self.$toasted.show(self.message,{type:"error"}); 
            }else{
              console.log(error);
              self.$router.push({ path: 'login' }); 
            }
        });
    },
  },
  mounted: function(){
    // this.getConsultationPrenatales();
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
