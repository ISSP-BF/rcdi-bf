<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
        <CCardHeader
          ><h4>Détail de la donnée Primaire id: {{ $route.params.id }}</h4>
        </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>annee :</h5></div>
            <div class="col-lg-6">{{ primaire.annee }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>trimestre :</h5></div>
            <div class="col-lg-6">{{ primaire.trimestre }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Region :</h5></div>
            <div class="col-lg-6">{{ primaire.region }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province :</h5></div>
            <div class="col-lg-6">{{ primaire.province }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune :</h5></div>
            <div class="col-lg-6">{{ primaire.commune }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>ceb :</h5></div>
            <div class="col-lg-6">{{ primaire.ceb }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>ceb :</h5></div>
            <div class="col-lg-6">{{ primaire.ceb }}</div>
          </div>
          <div v-for="item in fields" :key="item.id">
            {{ item.text }}
          </div>

          
        </CCardBody>

        <CCardFooter
          ><CButton color="secondary" @click="goBack">Retour</CButton>

          <div class="row float-right">
            <div>Créateur :</div>
            <div>
              {{ primaire.created_by }}
              <CBadge color="primary">{{
                primaire.created_at | formatDate
              }}</CBadge>
            </div>

            <div>Modificateur :</div>
            <div>
              {{ primaire.updated_by }}
              <CBadge color="danger">{{
                primaire.updated_at | formatDate
              }}</CBadge>
            </div>
          </div>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  props: {
    caption: {
      type: String,
      default: "User id",
    },
  },
  data: () => {
    return {
      primaire: {},
      fields: ['id','n_ordre', 'region', 'province', 'commune','trimestre','annee',
      'ceb','nom_structure','statut','type','NbTotalSalleActivite','NbGarcon_CP1','NbGarconMoyenne_CP1','NbGarconAbandon_CP1','NbGarcon_CP2','NbGarconMoyenne_CP2','NbGarconAbandon_CP2','NbGarcon_CE1','NbGarconMoyenne_CE1','NbGarconAbandon_CE1','NbGarcon_CE2','NbGarconMoyenne_CE2','NbGarconAbandon_CE2','NbGarcon_CM1','NbGarconMoyenne_CM1','NbGarconAbandon_CM1','NbGarcon_CM2','NbGarconMoyenne_CM2','NbGarconAbandon_CM2','NbTotalGarcon','NbTotalGarconMoyenne','NbTotalGarconAbandon','NbGarcon_PDI','NbGarconMoyenne_PDI','NbGarconAbandon_PDI','NbFille_CP1','NbFilleMoyenne_CP1','NbFilleAbandon_CP1','NbFille_CP2','NbFilleMoyenne_CP2','NbFilleAbandon_CP2','NbFille_CE1','NbFilleMoyenne_CE1','NbFilleAbandon_CE1','NbFille_CE2','NbFilleMoyenne_CE2','NbFilleAbandon_CE2','NbFille_CM1','NbFilleMoyenne_CM1','NbFilleAbandon_CM1','NbFille_CM2','NbFilleMoyenne_CM2','NbFilleAbandon_CM2','NbTotalFille','NbTotalFilleMoyenne','NbTotalFilleAbandon','NbFille_PDI','NbFilleMoyenne_PDI','NbFilleAbandon_PDI','NbTotalEnseignantHomme','NbTotalEnseignantFemme','NbEnseignantHommeRedeployes','NbEnseignantFemmeRedeployes','NbEnseignantHommeVolontaire','NbEnseignantFemmeVolontaire','ExistenceEspacesRecreatif','ExistenceDispositifHygiene','ExistenceCantine','SourceDotationEtat','SourceDotationPartenaire','SourceDotationEndogene',
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      // this.$router.replace({path: '/users'})
    },
  },
  mounted: function() {
    let self = this;
    axios
      .get(
        this.$apiAdress +
          "/api/primaires/" +
          self.$route.params.id +
          "?token=" +
          localStorage.getItem("api_token")
      )
      .then(function(response) {
        self.primaire = response.data;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
        self.$router.push({ path: "/login" });
      });
  },
};
</script>
