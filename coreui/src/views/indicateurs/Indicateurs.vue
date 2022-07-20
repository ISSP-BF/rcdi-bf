<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
        <CCard>
          <CCardHeader>
            Indicateurs
            <div class="card-header-actions">
              <AddButton @ajouter="createIndicateur()"/>&nbsp;
              <ExportButton :items="items" title="Indicateurs" :fields="fields"/>&nbsp;
            </div>
          </CCardHeader>
          <CCardBody>
            <CAlert :show.sync="dismissCountDown" color="primary" fade>
              ({{ dismissCountDown }}) {{ message }}
            </CAlert>
            <CDataTable id="table" hover 
              tableFilter
              itemsPerPageSelect
              sorter :items="items" :fields="fields" :items-per-page="10" pagination>
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

              <template #nom_prenom="{ item }">
                <td>
                  <strong>{{ item.nom }} {{ item.prenom }}</strong>
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
                  {{ item.formationSanitaire }}
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
              
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showIndicateur( item.id )">
                  <CIcon name="cil-file" /></CButton>
                  &nbsp;
                  <EditButton  @modifier="editIndicateur( item.id )"/>
                  &nbsp;
                      <DeleteButton @supprimer="deleteIndicateur( item.id )"/>
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
  name: 'Indicateurs',
  components: { 
    ExportButton,AddButton,EditButton,DeleteButton,
  },
  data: () => {
    return {
      items: [],
      fields: ['id', 'region', 'province', 'commune', 'groupe',
        'indicateur', 'niveau1', 'niveau2',
        'mois', 'annee',
        'indice','source','actions'],

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
    getRowCount(items) {
      return items.length
    },
    indicateurLink(id) {
      return `indicateurs/${id.toString()}`
    },
    editLink(id) {
      return `indicateurs/${id.toString()}/edit`
    },
    showIndicateur(id) {
      const indicateurLink = this.indicateurLink(id);
      this.$router.push({ path: indicateurLink });
    },
    editIndicateur(id) {
      const editLink = this.editLink(id);
      this.$router.push({ path: editLink });
    },
    deleteIndicateur(id) {
      let self = this;
      let indicateurId = id;
      axios.post(this.$apiAdress + '/api/indicateurs/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
        .then(function (response) {
          self.message = 'Successfully deleted indicateur.';
          self.$toasted.show("L'indicateur a été supprimé avec succès",{type:"success"}); 
          self.getndicateurs();
        }).catch(function (error) {
          console.log(error);
          self.$router.push({ path: '/login' });
        });
    },
    createIndicateur() {
      this.$router.push({ path: 'indicateurs/create' });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    getndicateurs() {
      let self = this;

      axios.get(this.$apiAdress + '/api/indicateurs?token=' + localStorage.getItem("api_token"))
        .then(function (response) {
          self.items = response.data;
        }).catch(function (error) {
          console.log(error);
          self.$router.push({ path: '/login' });
        });
    }
  },
  mounted: function () {
    this.getndicateurs();
  }
}

</script>

<style scoped>
.card-body>>>table>tbody>tr>td {
  cursor: pointer;
}
</style>
