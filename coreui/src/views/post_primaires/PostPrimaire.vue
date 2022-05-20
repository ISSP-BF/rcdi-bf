<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
        <CCardHeader
          ><h4>Détail de la donnée PostPrimaire id: {{ $route.params.id }}</h4>
        </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>annee :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.annee }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>trimestre :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.trimestre }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Region :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.region }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.province }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.commune }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>ceb :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.ceb }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>nom_structure :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.nom_structure }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>statut :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.statut }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>systeme :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.systeme }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalSalleActivite :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbTotalSalleActivite }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarcon_PS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbGarcon_PS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarconAbandon_PS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbGarconAbandon_PS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarcon_MS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbGarcon_MS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarconAbandon_MS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbGarconAbandon_MS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarcon_GS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbGarcon_GS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarconAbandon_GS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbGarconAbandon_GS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalGarcon :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbTotalGarcon }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalGarconAbandon :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbTotalGarconAbandon }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarcon_PDI :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbGarcon_PDI }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarconAbandon_PDI :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbGarconAbandon_PDI }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFille_PS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbFille_PS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFilleAbandon_PS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbFilleAbandon_PS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFille_MS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbFille_MS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFilleAbandon_MS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbFilleAbandon_MS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFille_GS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbFille_GS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFilleAbandon_GS :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbFilleAbandon_GS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalFille :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbTotalFille }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalFilleAbandon :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbTotalFilleAbandon }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFille_PDI :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbFille_PDI }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFilleAbandon_PDI :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbFilleAbandon_PDI }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalEnseignantHomme :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbTotalEnseignantHomme }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalEnseignantFemme :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.NbTotalEnseignantFemme }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbEnseignantHommeRedeployes :</h5></div>
            <div class="col-lg-6">
              {{ postPrimaire.NbEnseignantHommeRedeployes }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbEnseignantFemmeRedeployes :</h5></div>
            <div class="col-lg-6">
              {{ postPrimaire.NbEnseignantFemmeRedeployes }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbEnseignantHommeVolontaire :</h5></div>
            <div class="col-lg-6">
              {{ postPrimaire.NbEnseignantHommeVolontaire }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbEnseignantFemmeVolontaire :</h5></div>
            <div class="col-lg-6">
              {{ postPrimaire.NbEnseignantFemmeVolontaire }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>ExistenceEspacesRecreatif :</h5></div>
            <div class="col-lg-6">
              {{ postPrimaire.ExistenceEspacesRecreatif }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>ExistenceDispositifHygiene :</h5></div>
            <div class="col-lg-6">
              {{ postPrimaire.ExistenceDispositifHygiene }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>ExistenceCantine :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.ExistenceCantine }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>SourceDotationEtat :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.SourceDotationEtat }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>SourceDotationPartenaire :</h5></div>
            <div class="col-lg-6">
              {{ postPrimaire.SourceDotationPartenaire }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>SourceDotationEndogene :</h5></div>
            <div class="col-lg-6">{{ postPrimaire.SourceDotationEndogene }}</div>
          </div>
          
        </CCardBody>

        <CCardFooter
          ><CButton color="secondary" @click="goBack">Retour</CButton>

          <div class="row float-right">
            <div>Créateur :</div>
            <div>
              {{ postPrimaire.created_by }}
              <CBadge color="primary">{{
                postPrimaire.created_at | formatDate
              }}</CBadge>
            </div>

            <div>Modificateur :</div>
            <div>
              {{ postPrimaire.updated_by }}
              <CBadge color="danger">{{
                postPrimaire.updated_at | formatDate
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
      postPrimaire: [],
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
          "/api/post_primaires/" +
          self.$route.params.id +
          "?token=" +
          localStorage.getItem("api_token")
      )
      .then(function(response) {
        self.postPrimaire = response.data;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
        self.$router.push({ path: "/login" });
      });
  },
};
</script>
