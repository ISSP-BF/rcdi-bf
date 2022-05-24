<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Post-Primaire
            <div class="card-header-actions">
             <CButton color="primary" @click="createPostPrimaire()">Ajouter</CButton>
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
              :striped="true"
              pagination
            >
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

              <template #ExistenceEspacesRecreatif="{item}">
                <td>
                  {{item.ExistenceEspacesRecreatif?"OUI":"NON"}}
                </td>
              </template>
              <template #ExistenceDispositifHygiene="{item}">
                <td>
                  {{item.ExistenceDispositifHygiene?"OUI":"NON"}}
                </td>
              </template>
              <template #ExistenceCantine="{item}">
                <td>
                  {{item.ExistenceCantine?"OUI":"NON"}}
                </td>
              </template>
              <template #SourceDotationEtat="{item}">
                <td>
                  {{item.SourceDotationEtat?"OUI":"NON"}}
                </td>
              </template>
              <template #SourceDotationPartenaire="{item}">
                <td>
                  {{item.SourceDotationPartenaire?"OUI":"NON"}}
                </td>
              </template>
              <template #SourceDotationEndogene="{item}">
                <td>
                  {{item.SourceDotationEndogene?"OUI":"NON"}}
                </td>
              </template>
              
              
          <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showPostPrimaire( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editPostPrimaire( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deletePostPrimaire( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
  name: 'PostPrimaire',
  data: () => {
    return {
      items: [],
      fields: [
      'id','n_ordre', 'region', 'province', 'commune','trimestre','annee',
      'ceb','nom_structure','statut','type','NbTotalSalleActivite','NbGarcon_6e','NbGarconMoyenne_6e',
      'NbGarconAbandon_6e','NbGarcon_5e','NbGarconMoyenne_5e','NbGarconAbandon_5e','NbGarcon_4e','NbGarconMoyenne_4e',
      'NbGarconAbandon_4e','NbGarcon_3e','NbGarconMoyenne_3e','NbGarconAbandon_3e','NbTotalGarcon','NbTotalGarconMoyenne',
      'NbTotalGarconAbandon','NbGarcon_PDI','NbGarconMoyenne_PDI','NbGarconAbandon_PDI','NbFille_6e','NbFilleMoyenne_6e',
      'NbFilleAbandon_6e','NbFille_5e','NbFilleMoyenne_5e','NbFilleAbandon_5e','NbFille_4e','NbFilleMoyenne_4e',
      'NbFilleAbandon_4e','NbFille_3e','NbFilleMoyenne_3e','NbFilleAbandon_3e','NbTotalFille','NbTotalFilleMoyenne',
      'NbTotalFilleAbandon','NbFille_PDI','NbFilleMoyenne_PDI','NbFilleAbandon_PDI','NbHomme_Francais','NbHommeVacataire_Francais',
      'NbHomme_Anglais','NbHommeVacataire_Anglais','NbHomme_Allemand','NbHommeVacataire_Allemand','NbHomme_HisGeo',
      'NbHommeVacataire_HisGeo','NbHomme_SVT','NbHommeVacataire_SVT','NbHomme_PC','NbHommeVacataire_PC','NbHomme_Math',
      'NbHommeVacataire_Math','NbHomme_EPS','NbHommeVacataire_EPS','NbTotalEnseignantHomme','NbTotalEnseignantHommeVacataire',
      'NbEnseignantHommeRedeployes','NbEnseignantHommeRedeployesVacataire','NbEnseignantHommeVolontaire','NbFemme_Francais',
      'NbFemmeVacataire_Francais','NbFemme_Anglais','NbFemmeVacataire_Anglais','NbFemme_Allemand','NbFemmeVacataire_Allemand',
      'NbFemme_HisGeo','NbFemmeVacataire_HisGeo','NbFemme_SVT','NbFemmeVacataire_SVT','NbFemme_PC','NbFemmeVacataire_PC',
      'NbFemme_Math','NbFemmeVacataire_Math','NbFemme_EPS','NbFemmeVacataire_EPS','NbTotalEnseignantFemme',
      'NbTotalEnseignantFemmeVacataire','NbEnseignantFemmeRedeployes','NbEnseignantFemmeRedeployesVacataire',
      'NbEnseignantFemmeVolontaire','ExistenceEspacesRecreatif','ExistenceDispositifHygiene','ExistenceCantine',
      'SourceDotationEtat','SourceDotationPartenaire','SourceDotationEndogene',
      {
        key: "actions",
        label: "",
        _style: "min-width:1%",
        sorter: false,
        filter: false,
      }
  ],
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
    PostPrimaireLink (id) {
      return `post_primaires/${id.toString()}`
    },
    editLink (id) {
      return `post_primaires/${id.toString()}/edit`
    },
    showPostPrimaire ( id ) {
      const PostPrimaireLink = this.PostPrimaireLink( id );
      this.$router.push({path: PostPrimaireLink});
    },
    editPostPrimaire ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deletePostPrimaire ( id ) {
      let self = this;
      axios.post(  this.$apiAdress + '/api/post_primaires/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted PostPrimaire.';
          self.showAlert();
          self.getPostPrimaire();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createPostPrimaire () {
      this.$router.push({path: 'post_primaires/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getPostPrimaire (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/post_primaires?token=' + localStorage.getItem("api_token") )
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
    this.getPostPrimaire();
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
