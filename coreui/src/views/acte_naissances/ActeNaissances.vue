<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
        <CCard>
          <CCardHeader>
            <b>La liste des actes de naissances</b>
            <div class="card-header-actions">
              <AddButton @ajouter="createActeNaissance()"/>&nbsp;
              <ExportButton :items="items" title="Acte Naissances" :fields="fields"/>&nbsp;&nbsp;&nbsp;
              
                  <CButton color="warning" @click="exporterTout()" :disabled="loading" >Exporter Tout</CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CDataTable id="table" hover
              tableFilter
              :itemsPerPageSelect="true"
              sorter :items="loadedItems" :fields="fields"
              
              :itemsPerPage="perPage"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc" 
              :loading="loading"
              :sorter-value.sync="sorterValue"
              >
              <template #numero_acte="{ item }">
                <td>
                  <strong>{{ item.n_acte }}</strong>
                </td>
              </template>
              <template #region="{ item }">
                <td>
                  <label>{{ item.region }}</label>
                </td>
              </template>
              <template #province="{ item }">
                <td>
                  {{ item.province }}
                </td>
              </template>
              <template #commune="{ item }">
                <td>
                  {{ item.commune }}
                </td>
              </template>
              <template #date_declaration="{ item }">
                <td>
                  {{ item.date_declaration | formatDateShort }}
                </td>
              </template>
 
              <template #sexe="{ item }">
                <td>
                  <strong>{{ item.sexe == 'M' ? 'Homme' : 'Femme' }}</strong>
                </td>
              </template>

              <template #date_naissance="{ item }">
                <td>
                  <strong>{{ item.date_naissance | formatDateShort }}</strong>
                </td>
              </template>

              <template #lieu_naissance_commune="{ item }">
                <td>
                  {{ item.lieu_naissance_commune }}
                </td>
              </template>

              <template #centre_sante_naissance="{ item }">
                <td>
                  {{ item.centre_sante_naissance }}
                </td>
              </template>

              <template #date_etablissement="{ item }">
                <td>
                  {{ item.date_etablissement | formatDateShort }}
                </td>
              </template>

              <template #date_autorisation="{ item }">
                <td>
                  {{ item.date_autorisation | formatDateShort }}
                </td>
              </template>
              <template #actions="{ item }">
                <td>
                  <div class="card-header-actions" style="display:flex">
                    <CButton color="secondary" size="sm" @click="showActeNaissance(item.id)">Détail</CButton>
                    &nbsp;
                    <EditButton  @modifier="editActeNaissance(item.id)"/>
                    &nbsp;
                    <DeleteButton  @modifier="deleteActeNaissance(item.id)"/>
                  </div>
                </td>
              </template>
            </CDataTable>
            
    <CPagination
      v-show="pages > 1"
      :pages="pages"
      :active-page.sync="activePage"
    />
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
import ViewAllButton from '../buttons/ViewAllButton.vue'
var FileSaver = require('file-saver');

export default {
  name: 'ActeNaissances',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton,ViewAllButton
  },
  data: () => {
    return {
      items: [],
      fields: ['numero_acte', 'region', 'province', 'commune', 'date_declaration',
        'sexe', 'date_naissance',
        'lieu_naissance_commune', 'centre_sante_naissance',
        'date_etablissement', 'actions'],

      totalRows: 0,
      sorterValue: { column: null, asc: true },
      message: '',
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      perPage: 20, // nombre d'éléments par page
      sortBy: "", // champ de tri
      sortDesc: false, // tri croissant ou décroissant,
      activePage: 1,
      loadedItems:[],
      loading: false,
      pages: 5
    }
  },
  watch: {
    reloadParams () {
      this.onTableChange()
    }
  },
  computed: {
    reloadParams () {
      return [  
        this.sorterValue,
        this.columnFilterValue,
        this.tableFilterValue,
        this.activePage,
        this.perPage
      ]
    }
  },
  methods: {
    getRowCount(items) {
      return items.length
    },
    acteNaissanceLink(id) {
      return `acte_naissances/${id.toString()}`
    },
    editLink(id) {
      return `acte_naissances/${id.toString()}/edit`
    },
    showActeNaissance(id) {
      const acteNaissanceLink = this.acteNaissanceLink(id);
      this.$router.push({ path: acteNaissanceLink });
    },
    editActeNaissance(id) {
      const editLink = this.editLink(id);
      this.$router.push({ path: editLink });
    },
    deleteActeNaissance(id) {
      let self = this;
      axios.post(this.$apiAdress + '/api/acte_naissances/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
        .then(function (response) {
          self.$toasted.show("Acte de naissance a été supprimée avec succès",{type:"success"});

          self.getActeNaissances();
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
          self.$router.push({ path: '/login' });
            }
        });
    },
    createActeNaissance() {
      this.$router.push({ path: 'acte_naissances/create' });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }, 
    
    onTableChange () {
      this.loading = true
      let self = this; 
      console.log(this.$apiAdress + '/api/acte_naissancespaginate/'+this.perPage+'/'+this.activePage+'/'+this.sorterValue.column+'/'+this.sorterValue.asc+'?token=' + localStorage.getItem("api_token"))
      axios
        .get(this.$apiAdress + '/api/acte_naissancespaginate/'+this.perPage+'/'+this.activePage+'/'+this.sorterValue.column+'/'+this.sorterValue.asc+'?token=' + localStorage.getItem("api_token"))
        .then((response) => {
          // mettre à jour les données
          self.loading = false
          self.items = response.data.data;
          self.loadedItems =  response.data.data
          self.totalRows = response.data.total;
          self.pages = Math.ceil(response.data.total / self.perPage)
        })
        .catch((error) => {
          self.loading = false
          console.log(error);
        });
 
    },
    
    exporterTout () {
      let self = this; 
      this.loading = true
      axios
        .get(this.$apiAdress + '/api/acte_naissances?token=' + localStorage.getItem("api_token"))
        .then((response) => {
          self.exporter(response.data);
          self.loading = false;
          
        })
        .catch((error) => {
          self.loading = false
          console.log(error);
        });
 
    },
    
    exporter(items){
      this.loading = true
      if(!items||items.length==0){
      this.$toasted.show("Pas de données",{type:"warning"});
      return;
      }

      var blob = new Blob([this.convertToCSV(items)], {type: "text/csv;charset=utf-8"});
      FileSaver.saveAs(blob, "Acte Naissances.csv");
      this.loading = false
    },
    convertToCSV(arr) {
      arr.forEach(item=>{
          Object.keys(arr[0]).forEach(champ => {
              item[champ]=item[champ]?item[champ].toString().trim():item[champ]
            });
        })
        const array = [Object.keys(arr[0])].concat(arr)
        return array.map(it => {
            return Object.values(it).join(';').toString()
        }).join('\n')
    },
  },
  mounted: function () {
    // this.getActeNaissances();
    this.onTableChange();
  }
}

</script>

<style scoped>
.card-body>>>table>tbody>tr>td {
  cursor: pointer;
}
</style>
