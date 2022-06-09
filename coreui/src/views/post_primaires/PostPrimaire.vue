<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
        <CCardHeader
          ><h4>Détail de la donnée PostPrimaire id: {{ $route.params.id }}</h4>
        </CCardHeader>
        <CCardBody>
          <table class="table table-bordered col-lg-8">
            <tr>
              <td class="col-lg-6">Année</td>
              <td>{{postPrimaire.annee}}</td>
            </tr>
            <tr>
              <td>Trimestre</td>
              <td>{{postPrimaire.trimestre}}</td>
            </tr>
           </table>
           
          <h5>I. IDENTIFICATION DE LA STRUCTURE</h5>
          <table class="table table-bordered">
            <tr>
              <td class="col-lg-4">N° d'ordre</td>
              <td class="col-lg-4"></td>
              <td>{{postPrimaire.n_ordre}}</td>
            </tr>
            <tr>
              <td>REGION</td>
              <td></td>
              <td>{{postPrimaire.region}}</td>
            </tr>
            <tr>
              <td>PROVINCE</td>
              <td></td>
              <td>{{postPrimaire.province}}</td>
            </tr>
            <tr>
              <td>COMMUNE/ARRONDISSEMENT</td>
              <td></td>
              <td>{{postPrimaire.commune}}</td>
            </tr>
            <tr>
              <td>CEB</td>
              <td></td>
              <td>{{postPrimaire.ceb}}</td>
            </tr>
            <tr>
              <td>Nom de la structure</td>
              <td></td>
              <td>{{postPrimaire.nom_structure}}</td>
            </tr>
            <tr>
              <td>Statut</td>
              <td></td>
              <td>{{postPrimaire.statut}}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td></td>
              <td>{{postPrimaire.type}}</td>
            </tr>
            <tr>
              <td>Nombre total de salles d'activités</td>
              <td></td>
              <td>{{postPrimaire.NbTotalSalleActivite}}</td>
            </tr>
          </table>
          <h5>II. EFFECTIFS DES ELEVES (auditeurs)</h5>
          
                  <table class="table table-bordered">
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Effectifs</td>
                      <td>effectif ayant eu la moyenne</td>
                      <td>abandons</td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">6e</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarcon_6e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconMoyenne_6e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconAbandon_6e}}
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFille_6e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleMoyenne_6e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleAbandon_6e}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">5e</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarcon_5e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconMoyenne_5e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconAbandon_5e}}
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFille_5e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleMoyenne_5e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleAbandon_5e}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">4e</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarcon_4e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconMoyenne_4e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconAbandon_4e}}
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFille_4e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleMoyenne_4e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleAbandon_4e}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">3e</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarcon_3e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconMoyenne_3e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconAbandon_3e}}
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFille_3e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleMoyenne_3e}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleAbandon_3e}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">Total</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbTotalGarcon}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbTotalGarconMoyenne}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbTotalGarconAbandon}}
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbTotalFille}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbTotalFilleMoyenne}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbTotalFilleAbandon}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">Déplacés internes</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarcon_PDI}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconMoyenne_PDI}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbGarconAbandon_PDI}}
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFille_PDI}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleMoyenne_PDI}}
                      </td>
                      <td class="no-margin-padding">
                        {{postPrimaire.NbFilleAbandon_PDI}}
                      </td>
                    </tr>
                  </table>
                  <h5>III. EFFECTIFS DES ENSEIGNANTS</h5>
                  
                  <table class="table table-bordered">
                    <tr>
                      <td colspan="3"></td>
                      <td>Effectifs</td>
                      <td>vacataires</td>
                    </tr>
                    <tr>
                      <td rowspan="18" class="col-lg-4">
                        Effectifs des encadreurs (hors volontaires communautaires)
                      </td>
                      <td rowspan="2" class="col-lg-3">Français</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        {{postPrimaire.NbHomme_Francais}}
                      </td>
                      <td>
                        {{postPrimaire.NbHommeVacataire_Francais}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbFemme_Francais}}
                      </td>
                      <td>
                        {{postPrimaire.NbFemmeVacataire_Francais}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Anglais</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        {{postPrimaire.NbHomme_Anglais}}
                      </td>
                      <td>
                        {{postPrimaire.NbHommeVacataire_Anglais}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbFemme_Anglais}}
                      </td>
                      <td>
                        {{postPrimaire.NbFemmeVacataire_Anglais}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Allemand</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        {{postPrimaire.NbHomme_Allemand}}
                      </td>
                      <td>
                        {{postPrimaire.NbHommeVacataire_Allemand}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbFemme_Allemand}}
                      </td>
                      <td>
                        {{postPrimaire.NbFemmeVacataire_Allemand}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Histoire géographie</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        {{postPrimaire.NbHomme_HisGeo}}
                      </td>
                      <td>
                        {{postPrimaire.NbHommeVacataire_HisGeo}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbFemme_HisGeo}}
                      </td>
                      <td>
                        {{postPrimaire.NbFemmeVacataire_HisGeo}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Sciences de la vie et de la terre</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        {{postPrimaire.NbHomme_SVT}}
                      </td>
                      <td>
                        {{postPrimaire.NbHommeVacataire_SVT}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbFemme_SVT}}
                      </td>
                      <td>
                        {{postPrimaire.NbFemmeVacataire_SVT}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Physiques chimie</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        {{postPrimaire.NbHomme_PC}}
                      </td>
                      <td>
                        {{postPrimaire.NbHommeVacataire_PC}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbFemme_PC}}
                      </td>
                      <td>
                        {{postPrimaire.NbFemmeVacataire_PC}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Mathématiques</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        {{postPrimaire.NbHomme_Math}}
                      </td>
                      <td>
                        {{postPrimaire.NbHommeVacataire_Math}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbFemme_Math}}
                      </td>
                      <td>
                        {{postPrimaire.NbFemmeVacataire_Math}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Education Physique et sportive</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        {{postPrimaire.NbHomme_EPS}}
                      </td>
                      <td>
                        {{postPrimaire.NbHommeVacataire_EPS}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbFemme_EPS}}
                      </td>
                      <td>
                        {{postPrimaire.NbFemmeVacataire_EPS}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Total</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        {{postPrimaire.NbTotalEnseignantHomme}}
                      </td>
                      <td>
                        {{postPrimaire.NbTotalEnseignantHommeVacataire}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbTotalEnseignantFemme}}
                      </td>
                      <td>
                        {{postPrimaire.NbTotalEnseignantFemmeVacataire}}
                      </td>
                    </tr>

                    <tr>
                      <td rowspan="2">
                        Dont redeployés (arrivés) suite à la fermeture de leur
                        structure
                      </td>
                      <td rowspan="2"></td>
                      <td>Homme</td>
                      <td>
                        {{postPrimaire.NbEnseignantHommeRedeployes}}
                      </td>
                      <td>
                        {{postPrimaire.NbEnseignantHommeRedeployesVacataire}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbEnseignantFemmeRedeployes}}
                      </td>
                      <td>
                        {{postPrimaire.NbEnseignantFemmeRedeployesVacataire}}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">volontaires communautaires</td>
                      <td rowspan="2"></td>
                      <td>Homme</td>
                      <td>
                        {{postPrimaire.NbEnseignantHommeVolontaire}}
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        {{postPrimaire.NbEnseignantFemmeVolontaire}}
                      </td>
                    </tr>
                  </table>
                  <h5>IV. ENVIRONNEMENT D’APPRENTISSAGE</h5>
                  <table class="table table-bordered">
                    <tr>
                      <td class="col-lg-4">Existence d'espaces récréatifs</td>
                      <td class="col-lg-4"></td>
                      <td class="col-lg-4 no-margin-padding">
                        {{postPrimaire.ExistenceEspacesRecreatif}}
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4">
                        Existence de dispositif d’hygiène
                      </td>
                      <td class="col-lg-4"></td>
                      <td class="col-lg-4">
                        {{postPrimaire.ExistenceDispositifHygiene}}
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4">Existence cantine</td>
                      <td class="col-lg-4"></td>
                      <td class="col-lg-4">
                        {{postPrimaire.ExistenceCantine}}
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4">Source de la dotation</td>
                      <td class="col-lg-4">Etat</td>
                      <td class="col-lg-4">
                        {{postPrimaire.SourceDotationEtat}}
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4"></td>
                      <td class="col-lg-4">Partenaire</td>
                      <td class="col-lg-4">
                        {{postPrimaire.SourceDotationPartenaire}}
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4"></td>
                      <td class="col-lg-4">Endogène</td>
                      <td class="col-lg-4">
                        {{postPrimaire.SourceDotationEndogene}}
                      </td>
                    </tr>
                  </table>          
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
