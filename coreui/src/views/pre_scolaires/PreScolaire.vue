<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
        <CCardHeader
          ><h4>Détail de la donnée PreScolaire id: {{ $route.params.id }}</h4>
        </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>annee :</h5></div>
            <div class="col-lg-6">{{ preScolaire.annee }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>trimestre :</h5></div>
            <div class="col-lg-6">{{ preScolaire.trimestre }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Region :</h5></div>
            <div class="col-lg-6">{{ preScolaire.region }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province :</h5></div>
            <div class="col-lg-6">{{ preScolaire.province }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune :</h5></div>
            <div class="col-lg-6">{{ preScolaire.commune }}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>ceb :</h5></div>
            <div class="col-lg-6">{{ preScolaire.ceb }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>nom_structure :</h5></div>
            <div class="col-lg-6">{{ preScolaire.nom_structure }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>statut :</h5></div>
            <div class="col-lg-6">{{ preScolaire.statut }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>systeme :</h5></div>
            <div class="col-lg-6">{{ preScolaire.systeme }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalSalleActivite :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbTotalSalleActivite }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarcon_PS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbGarcon_PS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarconAbandon_PS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbGarconAbandon_PS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarcon_MS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbGarcon_MS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarconAbandon_MS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbGarconAbandon_MS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarcon_GS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbGarcon_GS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarconAbandon_GS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbGarconAbandon_GS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalGarcon :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbTotalGarcon }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalGarconAbandon :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbTotalGarconAbandon }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarcon_PDI :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbGarcon_PDI }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbGarconAbandon_PDI :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbGarconAbandon_PDI }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFille_PS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbFille_PS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFilleAbandon_PS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbFilleAbandon_PS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFille_MS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbFille_MS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFilleAbandon_MS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbFilleAbandon_MS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFille_GS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbFille_GS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFilleAbandon_GS :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbFilleAbandon_GS }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalFille :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbTotalFille }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalFilleAbandon :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbTotalFilleAbandon }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFille_PDI :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbFille_PDI }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbFilleAbandon_PDI :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbFilleAbandon_PDI }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalEnseignantHomme :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbTotalEnseignantHomme }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbTotalEnseignantFemme :</h5></div>
            <div class="col-lg-6">{{ preScolaire.NbTotalEnseignantFemme }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbEnseignantHommeRedeployes :</h5></div>
            <div class="col-lg-6">
              {{ preScolaire.NbEnseignantHommeRedeployes }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbEnseignantFemmeRedeployes :</h5></div>
            <div class="col-lg-6">
              {{ preScolaire.NbEnseignantFemmeRedeployes }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbEnseignantHommeVolontaire :</h5></div>
            <div class="col-lg-6">
              {{ preScolaire.NbEnseignantHommeVolontaire }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbEnseignantFemmeVolontaire :</h5></div>
            <div class="col-lg-6">
              {{ preScolaire.NbEnseignantFemmeVolontaire }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>ExistenceEspacesRecreatif :</h5></div>
            <div class="col-lg-6">
              {{ preScolaire.ExistenceEspacesRecreatif }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>ExistenceDispositifHygiene :</h5></div>
            <div class="col-lg-6">
              {{ preScolaire.ExistenceDispositifHygiene }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>ExistenceCantine :</h5></div>
            <div class="col-lg-6">{{ preScolaire.ExistenceCantine }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>SourceDotationEtat :</h5></div>
            <div class="col-lg-6">{{ preScolaire.SourceDotationEtat }}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>SourceDotationPartenaire :</h5></div>
            <div class="col-lg-6">
              {{ preScolaire.SourceDotationPartenaire }}
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>SourceDotationEndogene :</h5></div>
            <div class="col-lg-6">{{ preScolaire.SourceDotationEndogene }}</div>
          </div>
          
        </CCardBody>

        <CCardFooter
          ><CButton color="secondary" @click="goBack">Retour</CButton>

          <div class="row float-right">
            <div>Créateur :</div>
            <div>
              {{ preScolaire.created_by }}
              <CBadge color="primary">{{
                preScolaire.created_at | formatDate
              }}</CBadge>
            </div>

            <div>Modificateur :</div>
            <div>
              {{ preScolaire.updated_by }}
              <CBadge color="danger">{{
                preScolaire.updated_at | formatDate
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
      preScolaire: [],
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
          "/api/pre_scolaires/" +
          self.$route.params.id +
          "?token=" +
          localStorage.getItem("api_token")
      )
      .then(function(response) {
        self.preScolaire = response.data;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
        self.$router.push({ path: "/login" });
      });
  },
};
</script>
