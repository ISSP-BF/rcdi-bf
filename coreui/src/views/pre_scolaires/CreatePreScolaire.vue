<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
        
      </CCard>
      <CCard>
        <CCardHeader>
          <h5>
            Ajouter des données Pré-Scolaire
          </h5>
        </CCardHeader>
        <CCardBody>
          
          <div class="row ">
          <CInput label="Année" type="number" placeholder="Ex. 2020" v-model="preScolaire.annee" class="col-lg-3"
            invalid-feedback="Veuillez saisir une année valide" :is-valid="anneeValidator"></CInput>
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Trimestre </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre1" type="radio" class="custom-control-input"
                    v-model="preScolaire.trimestre" :value="'1'">
                  <label for="trimestre1" class="custom-control-label"> 1 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre2" type="radio" class="custom-control-input"
                    v-model="preScolaire.trimestre" :value="'2'">
                  <label for="trimestre2" class="custom-control-label"> 2 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre3" type="radio" class="custom-control-input"
                    v-model="preScolaire.trimestre" :value="'3'">
                  <label for="trimestre3" class="custom-control-label"> 3 </label>
                </div>
            </div>
            </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" lg="12">
      <CCard>
        <CCardBody>
          <CTabs>
            <CTab title="I. IDENTIFICATION DE LA STRUCTURE" active>
      <CCard> 
        <CCardBody>
          <div class="row ">
            <CInput label="Numéro Ordre" type="text" placeholder="Ex. 001xxx" v-model="preScolaire.n_ordre" class="col-lg-3">
            </CInput>

            <CSelect label="Région" class="col-lg-3" :value.sync="preScolaire.region_id" :plain="true"
              :options="regions" v-model="preScolaire.region_id">
            </CSelect>

            <CSelect label="Province" class="col-lg-3" :value.sync="preScolaire.province_id" :plain="true"
              :options="provinces" v-model="preScolaire.province_id">
            </CSelect>

            <CSelect label="Commune" class="col-lg-3" :value.sync="preScolaire.commune_id" :plain="true"
              :options="communes" v-model="preScolaire.commune_id">
            </CSelect>

            <CInput label="ceb" type="text" placeholder="ceb" v-model="preScolaire.ceb" class="col-lg-3"></CInput>
            <CInput label="Nom de la structure" type="text" placeholder="" v-model="preScolaire.nom_structure"
              class="col-lg-3"></CInput>
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Statut </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="statutPUBLIC" type="radio" class="custom-control-input"
                    v-model="preScolaire.statut" :value="'PUBLIC'">
                  <label for="statutPUBLIC" class="custom-control-label"> Public </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="statutPRIVE" type="radio" class="custom-control-input"
                    v-model="preScolaire.statut" :value="'PRIVE'">
                  <label for="statutPRIVE" class="custom-control-label"> Privé </label>
                </div>
            </div>
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Système </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="systemeFORMEL" type="radio" class="custom-control-input"
                    v-model="preScolaire.systeme" :value="'FORMEL'">
                  <label for="systemeFORMEL" class="custom-control-label"> Formel </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="systemeNONFORMEL" type="radio" class="custom-control-input"
                    v-model="preScolaire.systeme" :value="'NONFORMEL'">
                  <label for="systemeNONFORMEL" class="custom-control-label"> Non Formel </label>
                </div>
            </div>
            <CInput label="Nombre total de salles d'activités" type="number" placeholder="0xx"
              v-model="preScolaire.NbTotalSalleActivite" class="col-lg-3"></CInput>
          </div>
        </CCardBody>
      </CCard>
            </CTab>
            <CTab title="II. EFFECTIFS DES ELEVES (auditeurs)">
              
      <CCard>
        <CCardBody>
          <table class="table table-bordered">
            <tr>
              <td></td>
              <td></td>
              <td>Effectifs</td>
              <td>abandons</td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">Petite section</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="preScolaire.NbGarcon_PS"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="preScolaire.NbGarconAbandon_PS"></CInput>
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="preScolaire.NbFille_PS"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="preScolaire.NbFilleAbandon_PS"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2">Moyenne section</td>
              <td>Garcon</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbGarcon_MS"></CInput>
              </td>
              <td>
                <CInput type="number" v-model="preScolaire.NbGarconAbandon_MS"></CInput>
              </td>
            </tr>
            <tr>
              <td>Fille</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbFille_MS"></CInput>
              </td>
              <td>
                <CInput type="number" v-model="preScolaire.NbFilleAbandon_MS"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2">Grande section</td>
              <td>Garcon</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbGarcon_GS"></CInput>
              </td>
              <td>
                <CInput type="number" v-model="preScolaire.NbGarconAbandon_GS"></CInput>
              </td>
            </tr>
            <tr>
              <td>Fille</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbFille_GS"></CInput>
              </td>
              <td>
                <CInput type="number" v-model="preScolaire.NbFilleAbandon_GS"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2">Total</td>
              <td>Garcon</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbTotalGarcon"></CInput>
              </td>
              <td>
                <CInput type="number" v-model="preScolaire.NbTotalGarconAbandon"></CInput>
              </td>
            </tr>
            <tr>
              <td>Fille</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbTotalFille"></CInput>
              </td>
              <td>
                <CInput type="number" v-model="preScolaire.NbTotalFilleAbandon"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2">Déplacés Interne</td>
              <td>Garcon</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbGarcon_PDI"></CInput>
              </td>
              <td>
                <CInput type="number" v-model="preScolaire.NbGarconAbandon_PDI"></CInput>
              </td>
            </tr>
            <tr>
              <td>Fille</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbFille_PDI"></CInput>
              </td>
              <td>
                <CInput type="number" v-model="preScolaire.NbFilleAbandon_PDI"></CInput>
              </td>
            </tr>
          </table>
        </CCardBody>
      </CCard>
            </CTab>
            <CTab title="III. EFFECTIFS DES ENSEIGNANTS">
      <CCard> 
        <CCardBody>
          <table class="table table-bordered">
            <tr>
              <td colspan="3"></td>
              <td>Effectifs</td>
            </tr>
            <tr>
              <td rowspan="4" class="col-lg-4">
                Effectifs des encadreurs (hors volontaires communautaires)
              </td>
              <td rowspan="2" class="col-lg-4">Total</td>
              <td class="col-lg-2">Homme</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbTotalEnseignantHomme"></CInput>
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbTotalEnseignantFemme"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                Dont redeployés (arrivés) suite à la fermeture de leur structure
              </td>
              <td>Homme</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbEnseignantHommeRedeployes"></CInput>
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbEnseignantFemmeRedeployes"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2">volontaires communautaires</td>
              <td rowspan="2"></td>
              <td>Homme</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbEnseignantHommeVolontaire"></CInput>
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                <CInput type="number" v-model="preScolaire.NbEnseignantFemmeVolontaire"></CInput>
              </td>
            </tr>
          </table>
        </CCardBody>
      </CCard> </CTab>
            <CTab title="IV. ENVIRONNEMENT D’APPRENTISSAGE">
              
      <CCard>
        <CCardBody>
          <table class="table table-bordered">
            <tr>
              <td class="col-lg-4">Existence d'espaces récréatifs</td>
              <td class="col-lg-4"></td>
              <td class="col-lg-4 no-margin-padding">
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistenceEspacesRecreatifO" type="radio" class="custom-control-input"
                    v-model="preScolaire.ExistenceEspacesRecreatif" :value="1">
                  <label for="ExistenceEspacesRecreatifO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistenceEspacesRecreatifN" type="radio" class="custom-control-input"
                    v-model="preScolaire.ExistenceEspacesRecreatif" :value="0">
                  <label for="ExistenceEspacesRecreatifN" class="custom-control-label"> Non </label>
                </div>

              </td>
            </tr>
            <tr>
              <td class="col-lg-4">Existence de dispositif d’hygiène</td>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistenceDispositifHygieneO" type="radio" class="custom-control-input"
                    v-model="preScolaire.ExistenceDispositifHygiene" :value="1">
                  <label for="ExistenceDispositifHygieneO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistenceDispositifHygieneN" type="radio" class="custom-control-input"
                    v-model="preScolaire.ExistenceDispositifHygiene" :value="0">
                  <label for="ExistenceDispositifHygieneN" class="custom-control-label"> Non </label>
                </div>
              </td>
            </tr>
            <tr>
              <td class="col-lg-4">Existence cantine</td>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistenceCantineO" type="radio" class="custom-control-input"
                    v-model="preScolaire.ExistenceCantine" :value="1">
                  <label for="ExistenceCantineO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistenceCantineN" type="radio" class="custom-control-input"
                    v-model="preScolaire.ExistenceCantine" :value="0">
                  <label for="ExistenceCantineN" class="custom-control-label"> Non </label>
                </div>
              </td>
            </tr>
            <tr>
              <td class="col-lg-4">Source de la dotation</td>
              <td class="col-lg-4">Etat</td>
              <td class="col-lg-4">
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="SourceDotationEtatO" type="radio" class="custom-control-input"
                    v-model="preScolaire.SourceDotationEtat" :value="1">
                  <label for="SourceDotationEtatO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="SourceDotationEtatN" type="radio" class="custom-control-input"
                    v-model="preScolaire.SourceDotationEtat" :value="0">
                  <label for="SourceDotationEtatN" class="custom-control-label"> Non </label>
                </div>
              </td>
            </tr>
            <tr>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">Partenaire</td>
              <td class="col-lg-4">
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="SourceDotationPartenaireO" type="radio" class="custom-control-input"
                    v-model="preScolaire.SourceDotationPartenaire" :value="1">
                  <label for="SourceDotationPartenaireO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="SourceDotationPartenaireN" type="radio" class="custom-control-input"
                    v-model="preScolaire.SourceDotationPartenaire" :value="0">
                  <label for="SourceDotationPartenaireN" class="custom-control-label"> Non </label>
                </div>
              </td>
            </tr>
            <tr>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">Endogène</td>
              <td class="col-lg-4">
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="SourceDotationEndogeneO" type="radio" class="custom-control-input"
                    v-model="preScolaire.SourceDotationEndogene" :value="1">
                  <label for="SourceDotationEndogeneO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="SourceDotationEndogeneN" type="radio" class="custom-control-input"
                    v-model="preScolaire.SourceDotationEndogene" :value="0">
                  <label for="SourceDotationEndogeneN" class="custom-control-label"> Non </label>
                </div>
              </td>
            </tr>
          </table>
        </CCardBody>
      </CCard>
            </CTab>
          </CTabs>
        </CCardBody>
      </CCard>
      
    </CCol>
    <CCol col="12" lg="12">
    </CCol>

    <CCol col="12" lg="12">
    </CCol>

    <CCol col="12" lg="12">
    </CCol>

    <CCol col="12" lg="12">
      <CCard>
        <CCardBody>
          <div class="row">
            <CButton color="primary" @click="store()">Ajouter</CButton> &nbsp;
            <CButton color="secondary" @click="goBack">Retour</CButton>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from "axios";
export default {
  name: "EditPreScolaire",
  props: {
    caption: {
      type: String,
      default: "PreScolaire id",
    },
  },
  data: () => {
    return {
      preScolaire: {
        region_id: null,
        province_id: null,
        commune_id: null,
        annee: null,
        trimestre: null,
        ceb: null,
        nom_structure: null,
        statut: null,
        systeme: null,
        n_ordre: null,

        NbTotalSalleActivite: null,
        NbGarcon_PS: null,
        NbGarconAbandon_PS: null,
        NbGarcon_MS: null,
        NbGarconAbandon_MS: null,
        NbGarcon_GS: null,
        NbGarconAbandon_GS: null,
        NbTotalGarcon: null,
        NbTotalGarconAbandon: null,
        NbGarcon_PDI: null,
        NbGarconAbandon_PDI: null,

        NbFille_PS: null,
        NbFilleAbandon_PS: null,
        NbFille_MS: null,
        NbFilleAbandon_MS: null,
        NbFille_GS: null,
        NbFilleAbandon_GS: null,
        NbTotalFille: null,
        NbTotalFilleAbandon: null,
        NbFille_PDI: null,
        NbFilleAbandon_PDI: null,

        NbTotalEnseignantHomme: null,
        NbTotalEnseignantFemme: null,
        NbEnseignantHommeRedeployes: null,
        NbEnseignantFemmeRedeployes: null,
        NbEnseignantHommeVolontaire: null,
        NbEnseignantFemmeVolontaire: null,
        ExistenceEspacesRecreatif: null,
        ExistenceDispositifHygiene: null,
        ExistenceCantine: null,
        SourceDotationEtat: null,
        SourceDotationPartenaire: null,
        SourceDotationEndogene: null,
      },
      regions: [],
      provinces: [],
      communes: [],
      message: "",
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    store() {
      let self = this;
      console.log(self.preScolaire);
      axios
        .post(
          this.$apiAdress +
          "/api/pre_scolaires?token=" +
          localStorage.getItem("api_token"),
          self.preScolaire
        )
        .then(function (response) {
          self.preScolaire = {};
          self.preScolaire.region_id =
            self.regions.length > 0 ? self.regions[0].value : null;
          self.preScolaire.province_id =
            self.provinces.length > 0 ? self.provinces[0].value : null;
          self.preScolaire.commune_id =
            self.communes.length > 0 ? self.communes[0].value : null;

          self.$toasted.show("pre scolaires créé avec succès", {
            type: "success",
          });
          self.showAlert();
        })
        .catch(function (error) {
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toasted.show(self.message, { type: "error" });
            self.showAlert();
          } else {
            console.log(error);
            self.$router.push({ path: "login" });
          }
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    anneeValidator (val) {
      return val ? (val<=2022&&val>=1900)?null:false : null
    },
    trimestreValidator(val) {
      return val ? (val <= 4 && val >= 1)?null:false : null;
    },
  },
  mounted: function () {
    let self = this;
    axios
      .get(
        this.$apiAdress +
        "/api/pre_scolaires/create?token=" +
        localStorage.getItem("api_token")
      )
      .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        // Définir valeur par défaut
        self.preScolaire.region_id =
          self.regions.length > 0 ? self.regions[0].value : null;
        self.preScolaire.province_id =
          self.provinces.length > 0 ? self.provinces[0].value : null;
        self.preScolaire.commune_id =
          self.communes.length > 0 ? self.communes[0].value : null;
      })
      .catch(function (error) {
        console.log(error);
        self.$router.push({ path: "login" });
      });
  },
};
</script>


<style scoped>
.card-body>>>table>tbody>tr>td {
  cursor: pointer;
}

.no-margin-padding {}

.no-margin-padding>.form-group {
  margin: 0 !important;
  padding: 0 !important;
}

.table th,
.table td {
  padding: 0;
}

.table td>.form-group {
  margin: 0 !important;
  padding: 0 !important;
}
</style>