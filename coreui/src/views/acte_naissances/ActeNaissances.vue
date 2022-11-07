<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
        <CCard>
          <CCardHeader>
            Acte Naissances
            <div class="card-header-actions">
              <AddButton @ajouter="createActeNaissance()"/>&nbsp;
              <ExportButton :items="items" title="Acte Naissances" :fields="fields"/>&nbsp;
              <ViewAllButton @afficherTout="afficherTout()"></ViewAllButton>&nbsp;
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
      let acteNaissanceId = id;
      axios.post(this.$apiAdress + '/api/acte_naissances/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
        .then(function (response) {
          self.message = 'Successfully deleted acteNaissance.';
          self.showAlert();
          self.getActeNaissances();
        }).catch(function (error) {
          console.log(error);
          self.$router.push({ path: '/login' });
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
    getActeNaissances() {
      let self = this;
      console.log(this.$apiAdress + '/api/acte_naissances/limiter?token=' + localStorage.getItem("api_token"))
      axios.get(this.$apiAdress + '/api/acte_naissanceslimiter?token=' + localStorage.getItem("api_token"))
        .then(function (response) {
          console.log(response)
          self.items = response.data;
        }).catch(function (error) {
          console.log(error);
          self.$router.push({ path: '/login' });
        });
    },
    afficherTout() {
      let self = this;

      axios.get(this.$apiAdress + '/api/acte_naissances?token=' + localStorage.getItem("api_token"))
        .then(function (response) {
          self.items = response.data;
        }).catch(function (error) {
          console.log(error);
          self.$router.push({ path: '/login' });
        });
    }
  },
  mounted: function () {
    this.getActeNaissances();
  }
}

</script>

<style scoped>
.card-body>>>table>tbody>tr>td {
  cursor: pointer;
}
</style>
