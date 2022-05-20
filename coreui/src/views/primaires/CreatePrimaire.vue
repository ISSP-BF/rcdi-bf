<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
        
      </CCard>
      <CCard>
        <CCardHeader>
          <h5>
            Ajouter des données Primaire
          </h5>
        </CCardHeader>
        <CCardBody>
          <CInput label="Annee" type="number" placeholder="Annee" v-model="primaire.annee" class="col-lg-3"
            invalid-feedback="Veuillez saisir une année valide" :is-valid="anneeValidator"></CInput>
          <CInput label="Trimestre" type="number" placeholder="Trimestre" v-model="primaire.trimestre"
            class="col-lg-3" invalid-feedback="Veuillez saisir un trimestre valide" :is-valid="trimestreValidator">
          </CInput>
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
            <CInput label="n_ordre" type="text" placeholder="n_ordre" v-model="primaire.n_ordre" class="col-lg-3">
            </CInput>

            <CSelect label="Region" class="col-lg-3" :value.sync="primaire.region_id" :plain="true"
              :options="regions" v-model="primaire.region_id">
            </CSelect>

            <CSelect label="Province" class="col-lg-3" :value.sync="primaire.province_id" :plain="true"
              :options="provinces" v-model="primaire.province_id">
            </CSelect>

            <CSelect label="Commune" class="col-lg-3" :value.sync="primaire.commune_id" :plain="true"
              :options="communes" v-model="primaire.commune_id">
            </CSelect>

            <CInput label="ceb" type="text" placeholder="ceb" v-model="primaire.ceb" class="col-lg-3"></CInput>
            <CInput label="nom_structure" type="text" placeholder="nom_structure" v-model="primaire.nom_structure"
              class="col-lg-3"></CInput>
            <CInput label="statut" type="text" placeholder="statut" v-model="primaire.statut" class="col-lg-3">
            </CInput>
            <CInput label="type" type="text" placeholder="type" v-model="primaire.type" class="col-lg-3">
            </CInput>

            <CInput label="NbTotalSalleActivite" type="number" placeholder="NbTotalSalleActivite"
              v-model="primaire.NbTotalSalleActivite" class="col-lg-3"></CInput>
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
              <td>effectif ayant eu la moyenne</td>
              <td>abandons</td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CP1</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarcon_CP1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconMoyenne_CP1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconAbandon_CP1"></CInput>
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFille_CP1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleMoyenne_CP1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleAbandon_CP1"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CP2</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarcon_CP2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconMoyenne_CP2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconAbandon_CP2"></CInput>
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFille_CP2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleMoyenne_CP2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleAbandon_CP2"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CE1</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarcon_CE1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconMoyenne_CE1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconAbandon_CE1"></CInput>
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFille_CE1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleMoyenne_CE1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleAbandon_CE1"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CE2</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarcon_CE2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconMoyenne_CE2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconAbandon_CE2"></CInput>
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFille_CE2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleMoyenne_CE2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleAbandon_CE2"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CM1</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarcon_CM1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconMoyenne_CM1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconAbandon_CM1"></CInput>
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFille_CM1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleMoyenne_CM1"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleAbandon_CM1"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CM2</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarcon_CM2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconMoyenne_CM2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconAbandon_CM2"></CInput>
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFille_CM2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleMoyenne_CM2"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleAbandon_CM2"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">Total</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbTotalGarcon"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbTotalGarconMoyenne"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbTotalGarconAbandon"></CInput>
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbTotalFille"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbTotalFilleMoyenne"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbTotalFilleAbandon"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">Déplacés internes</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarcon_PDI"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconMoyenne_PDI"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbGarconAbandon_PDI"></CInput>
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFille_PDI"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleMoyenne_PDI"></CInput>
              </td>
              <td class="no-margin-padding">
                <CInput type="number" v-model="primaire.NbFilleAbandon_PDI"></CInput>
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
                <CInput type="number" v-model="primaire.NbTotalEnseignantHomme"></CInput>
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                <CInput type="number" v-model="primaire.NbTotalEnseignantFemme"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                Dont redeployés (arrivés) suite à la fermeture de leur structure
              </td>
              <td>Homme</td>
              <td>
                <CInput type="number" v-model="primaire.NbEnseignantHommeRedeployes"></CInput>
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                <CInput type="number" v-model="primaire.NbEnseignantFemmeRedeployes"></CInput>
              </td>
            </tr>
            <tr>
              <td rowspan="2">volontaires communautaires</td>
              <td rowspan="2"></td>
              <td>Homme</td>
              <td>
                <CInput type="number" v-model="primaire.NbEnseignantHommeVolontaire"></CInput>
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                <CInput type="number" v-model="primaire.NbEnseignantFemmeVolontaire"></CInput>
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
                    v-model="primaire.ExistenceEspacesRecreatif" :value="1">
                  <label for="ExistenceEspacesRecreatifO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistenceEspacesRecreatifN" type="radio" class="custom-control-input"
                    v-model="primaire.ExistenceEspacesRecreatif" :value="0">
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
                    v-model="primaire.ExistenceDispositifHygiene" :value="1">
                  <label for="ExistenceDispositifHygieneO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistenceDispositifHygieneN" type="radio" class="custom-control-input"
                    v-model="primaire.ExistenceDispositifHygiene" :value="0">
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
                    v-model="primaire.ExistenceCantine" :value="1">
                  <label for="ExistenceCantineO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistenceCantineN" type="radio" class="custom-control-input"
                    v-model="primaire.ExistenceCantine" :value="0">
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
                    v-model="primaire.SourceDotationEtat" :value="1">
                  <label for="SourceDotationEtatO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="SourceDotationEtatN" type="radio" class="custom-control-input"
                    v-model="primaire.SourceDotationEtat" :value="0">
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
                    v-model="primaire.SourceDotationPartenaire" :value="1">
                  <label for="SourceDotationPartenaireO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="SourceDotationPartenaireN" type="radio" class="custom-control-input"
                    v-model="primaire.SourceDotationPartenaire" :value="0">
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
                    v-model="primaire.SourceDotationEndogene" :value="1">
                  <label for="SourceDotationEndogeneO" class="custom-control-label"> Oui </label>
                </div>

                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="SourceDotationEndogeneN" type="radio" class="custom-control-input"
                    v-model="primaire.SourceDotationEndogene" :value="0">
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
  name: "EditPrimaire",
  props: {
    caption: {
      type: String,
      default: "Primaire id",
    },
  },
  data: () => {
    return {
      primaire: {
        region_id: null,
        province_id: null,
        commune_id: null,
        annee: null,
        trimestre: null,
        ceb: null,
        nom_structure: null,
        statut: null,
        type: null,
        n_ordre: null,
        ceb:null,
        nom_structure:null,
        statut:null,
        type:null,
        NbTotalSalleActivite:null,
        NbGarcon_CP1:null,
        NbGarconMoyenne_CP1:null,
        NbGarconAbandon_CP1:null,
        NbGarcon_CP2:null,
        NbGarconMoyenne_CP2:null,
        NbGarconAbandon_CP2:null,
        NbGarcon_CE1:null,
        NbGarconMoyenne_CE1:null,
        NbGarconAbandon_CE1:null,
        NbGarcon_CE2:null,
        NbGarconMoyenne_CE2:null,
        NbGarconAbandon_CE2:null,
        NbGarcon_CM1:null,
        NbGarconMoyenne_CM1:null,
        NbGarconAbandon_CM1:null,
        NbGarcon_CM2:null,
        NbGarconMoyenne_CM2:null,
        NbGarconAbandon_CM2:null,
        NbTotalGarcon:null,
        NbTotalGarconMoyenne:null,
        NbTotalGarconAbandon:null,
        NbGarcon_PDI:null,
        NbGarconMoyenne_PDI:null,
        NbGarconAbandon_PDI:null,
        NbFille_CP1:null,
        NbFilleMoyenne_CP1:null,
        NbFilleAbandon_CP1:null,
        NbFille_CP2:null,
        NbFilleMoyenne_CP2:null,
        NbFilleAbandon_CP2:null,
        NbFille_CE1:null,
        NbFilleMoyenne_CE1:null,
        NbFilleAbandon_CE1:null,
        NbFille_CE2:null,
        NbFilleMoyenne_CE2:null,
        NbFilleAbandon_CE2:null,
        NbFille_CM1:null,
        NbFilleMoyenne_CM1:null,
        NbFilleAbandon_CM1:null,
        NbFille_CM2:null,
        NbFilleMoyenne_CM2:null,
        NbFilleAbandon_CM2:null,
        NbTotalFille:null,
        NbTotalFilleMoyenne:null,
        NbTotalFilleAbandon:null,
        NbFille_PDI:null,
        NbFilleMoyenne_PDI:null,
        NbFilleAbandon_PDI:null,
        NbTotalEnseignantHomme:null,
        NbTotalEnseignantFemme:null,
        NbEnseignantHommeRedeployes:null,
        NbEnseignantFemmeRedeployes:null,
        NbEnseignantHommeVolontaire:null,
        NbEnseignantFemmeVolontaire:null,
        ExistenceEspacesRecreatif:null,
        ExistenceDispositifHygiene:null,
        ExistenceCantine:null,
        SourceDotationEtat:null,
        SourceDotationPartenaire:null,
        SourceDotationEndogene:null,
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
      console.log(self.primaire);
      axios
        .post(
          this.$apiAdress +
          "/api/primaires?token=" +
          localStorage.getItem("api_token"),
          self.primaire
        )
        .then(function (response) {
          self.primaire = {};
          self.primaire.region_id =
            self.regions.length > 0 ? self.regions[0].value : null;
          self.primaire.province_id =
            self.provinces.length > 0 ? self.provinces[0].value : null;
          self.primaire.commune_id =
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
        "/api/primaires/create?token=" +
        localStorage.getItem("api_token")
      )
      .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        // Définir valeur par défaut
        self.primaire.region_id =
          self.regions.length > 0 ? self.regions[0].value : null;
        self.primaire.province_id =
          self.provinces.length > 0 ? self.provinces[0].value : null;
        self.primaire.commune_id =
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