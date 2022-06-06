<template style="display: contents;">
<div style="display: contents;">
  <CModal
      :title="title"
      color="success"
      size="lg"
      :show.sync="successModal" style="display: contents;"
    > 
       <CRow>
    
    <CCol col="12" xl="12">
       <xls-csv-parser :columns="columns" @on-validate="onValidate" :help="help" lang="fr"></xls-csv-parser>
    </CCol>
    <CCol col="12" xl="12"  v-if="items.length>0">
      <transition name="slide">
            <CDataTable
              hover 
              sorter
              :items="items" 
              :fields="fields2"
            >
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                   &nbsp;
                      <CButton size="sm" color="danger" @click="deleteData( item.id )"><CIcon name="cil-x-circle"/></CButton>
                  </div>
                </td>
              </template>
            </CDataTable>
         
      </transition>
    </CCol>
  </CRow>
      <template #footer>
        <CButton @click="successModal = false" color="danger">Annuler</CButton>
        <CButton size="sm" color="success" @click="storeMany()"   v-if="items.length>0"><CIcon name="cil-x-circle"/> Importer</CButton>
      </template>
    </CModal>
    
    <CButton color="warning" @click="successModal = true">Importer</CButton>&nbsp;
</div>
</template>

<script>

import axios from 'axios'
import { XlsCsvParser } from 'vue-xls-csv-parser';

export default {
  name: 'ImportButton',
  components: {
      XlsCsvParser,
    },
  props: ['fields','title','apiUrl'],
  
  data: () => {
    return {
      successModal: false,
      items:[],
      fields2:[],
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
        help: `Les colonnes necessaires sont : region, province, commune, district, formation_sanitaire, mois, annee,
                NbFemmeVueCPN, NbFemmeInscriteCPN1, NbFemmeInscriteCPN1_Trim1, NbFemmeVueCPN4, 
                NbFemmeInscriteVueCPN_2Td, NbFemmeFer_Acide_Folique, NbFemmeFer_Acide_Folique_CPN3, 
                NbGrossesse_Refere, NbFemmeVueCPN_TPI3 et NbFemmeVueCPN_TPI3_MILDA `,
    

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
  methods: {
    onValidate(results) {
        this.results = results;
        this.items = [];
        for(let i=0;i<this.results[0].data.length;i++){this.items.push(
          {
            id:i
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
    deleteData ( dataToDelete ) {
      this.items = this.items.filter(function(f) { return f.id !== dataToDelete });
    },
    storeMany() {
        let self = this;
        console.log({items:self.items});
        axios.post(this.$apiAdress + '/api/'+self.apiUrl+'/storeMany?token=' + localStorage.getItem("api_token"),
          {items:self.items}
        )
        .then(function (response) {
            self.items = {
            };
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
    this.columns = [];
    this.fields2 = [];
    this.help = "Les colonnes necessaires sont :"
    for(const item of this.fields){
      this.columns.push({ name: item, value:item})
      this.fields2.push(item);
      this.help = this.help +" "+ item+","
    }
    this.fields2.push("actions")
  }
}
</script>