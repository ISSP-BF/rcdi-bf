<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
        <CCardHeader
          ><h4>Détail de la donnée PreScolaire id: {{ $route.params.id }}</h4>
        </CCardHeader>
        <CCardBody>
           <table class="table table-bordered col-lg-8">
            <tr>
              <td class="col-lg-6">Année</td>
              <td>{{preScolaire.annee}}</td>
            </tr>
            <tr>
              <td>Trimestre</td>
              <td>{{preScolaire.trimestre}}</td>
            </tr>
           </table>
          <h5>I. IDENTIFICATION DE LA STRUCTURE</h5>
          <table class="table table-bordered">
            <tr>
              <td class="col-lg-4">N° d'ordre</td>
              <td class="col-lg-4"></td>
              <td>{{preScolaire.n_ordre}}</td>
            </tr>
            <tr>
              <td>REGION</td>
              <td></td>
              <td>{{preScolaire.region}}</td>
            </tr>
            <tr>
              <td>PROVINCE</td>
              <td></td>
              <td>{{preScolaire.province}}</td>
            </tr>
            <tr>
              <td>COMMUNE/ARRONDISSEMENT</td>
              <td></td>
              <td>{{preScolaire.commune}}</td>
            </tr>
            <tr>
              <td>CEB</td>
              <td></td>
              <td>{{preScolaire.ceb}}</td>
            </tr>
            <tr>
              <td>Nom de la structure</td>
              <td></td>
              <td>{{preScolaire.nom_structure}}</td>
            </tr>
            <tr>
              <td>Statut</td>
              <td></td>
              <td>{{preScolaire.statut}}</td>
            </tr>
            <tr>
              <td>Système</td>
              <td></td>
              <td>{{preScolaire.systeme}}</td>
            </tr>
            <tr>
              <td>Nombre total de salles d'activités</td>
              <td></td>
              <td>{{preScolaire.NbTotalSalleActivite}}</td>
            </tr>
          </table>
          <h5>II. EFFECTIFS DES ELEVES (auditeurs)</h5>
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
                {{preScolaire.NbGarcon_PS}}
              </td>
              <td class="no-margin-padding">
                {{preScolaire.NbGarconAbandon_PS}}
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                {{preScolaire.NbFille_PS}}
              </td>
              <td class="no-margin-padding">
                {{preScolaire.NbFilleAbandon_PS}}
              </td>
            </tr>
            <tr>
              <td rowspan="2">Moyenne section</td>
              <td>Garcon</td>
              <td>
                {{preScolaire.NbGarcon_MS}}
              </td>
              <td>
                {{preScolaire.NbGarconAbandon_MS}}
              </td>
            </tr>
            <tr>
              <td>Fille</td>
              <td>
                {{preScolaire.NbFille_MS}}
              </td>
              <td>
                {{preScolaire.NbFilleAbandon_MS}}
              </td>
            </tr>
            <tr>
              <td rowspan="2">Grande section</td>
              <td>Garcon</td>
              <td>
                {{preScolaire.NbGarcon_GS}}
              </td>
              <td>
                {{preScolaire.NbGarconAbandon_GS}}
              </td>
            </tr>
            <tr>
              <td>Fille</td>
              <td>
                {{preScolaire.NbFille_GS}}
              </td>
              <td>
                {{preScolaire.NbFilleAbandon_GS}}
              </td>
            </tr>
            <tr>
              <td rowspan="2">Total</td>
              <td>Garcon</td>
              <td>
                {{preScolaire.NbTotalGarcon}}
              </td>
              <td>
                {{preScolaire.NbTotalGarconAbandon}}
              </td>
            </tr>
            <tr>
              <td>Fille</td>
              <td>
                {{preScolaire.NbTotalFille}}
              </td>
              <td>
                {{preScolaire.NbTotalFilleAbandon}}
              </td>
            </tr>
            <tr>
              <td rowspan="2">Déplacés Interne</td>
              <td>Garcon</td>
              <td>
                {{preScolaire.NbGarcon_PDI}}
              </td>
              <td>
                {{preScolaire.NbGarconAbandon_PDI}}
              </td>
            </tr>
            <tr>
              <td>Fille</td>
              <td>
                {{preScolaire.NbFille_PDI}}
              </td>
              <td>
                {{preScolaire.NbFilleAbandon_PDI}}
              </td>
            </tr>
          </table>
          <h5>III. EFFECTIFS DES ENSEIGNANTS</h5>
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
                {{preScolaire.NbTotalEnseignantHomme}}
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                {{preScolaire.NbTotalEnseignantFemme}}
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                Dont redeployés (arrivés) suite à la fermeture de leur structure
              </td>
              <td>Homme</td>
              <td>
                {{preScolaire.NbEnseignantHommeRedeployes}}
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                {{preScolaire.NbEnseignantFemmeRedeployes}}
              </td>
            </tr>
            <tr>
              <td rowspan="2">volontaires communautaires</td>
              <td rowspan="2"></td>
              <td>Homme</td>
              <td>
                {{preScolaire.NbEnseignantHommeVolontaire}}
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                {{preScolaire.NbEnseignantFemmeVolontaire}}
              </td>
            </tr>
          </table>
          <h5>IV. ENVIRONNEMENT D’APPRENTISSAGE</h5>
          
          <table class="table table-bordered">
            <tr>
              <td class="col-lg-4">Existence d'espaces récréatifs</td>
              <td class="col-lg-4"></td>
              <td class="col-lg-4 no-margin-padding">
                {{preScolaire.ExistenceEspacesRecreatif}}

              </td>
            </tr>
            <tr>
              <td class="col-lg-4">Existence de dispositif d’hygiène</td>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">
                {{preScolaire.ExistenceDispositifHygiene}}
              </td>
            </tr>
            <tr>
              <td class="col-lg-4">Existence cantine</td>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">
                {{preScolaire.ExistenceCantine}}
              </td>
            </tr>
            <tr>
              <td class="col-lg-4">Source de la dotation</td>
              <td class="col-lg-4">Etat</td>
              <td class="col-lg-4">
                {{preScolaire.SourceDotationEtat}}
              </td>
            </tr>
            <tr>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">Partenaire</td>
              <td class="col-lg-4">
                {{preScolaire.SourceDotationPartenaire}}
              </td>
            </tr>
            <tr>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">Endogène</td>
              <td class="col-lg-4">
                {{preScolaire.SourceDotationEndogene}}
              </td>
            </tr>
          </table>          
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
