<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
        <CCardHeader
          ><h4>Détail de la donnée Primaire id: {{ $route.params.id }}</h4>
        </CCardHeader>
        <CCardBody>
           <table class="table table-bordered col-lg-8">
            <tr>
              <td class="col-lg-6">Année</td>
              <td>{{primaire.annee}}</td>
            </tr>
            <tr>
              <td>Trimestre</td>
              <td>{{primaire.trimestre}}</td>
            </tr>
           </table>
          
          <h5>I. IDENTIFICATION DE LA STRUCTURE</h5>
          <table class="table table-bordered">
            <tr>
              <td class="col-lg-4">N° d'ordre</td>
              <td class="col-lg-4"></td>
              <td>{{primaire.n_ordre}}</td>
            </tr>
            <tr>
              <td>REGION</td>
              <td></td>
              <td>{{primaire.region}}</td>
            </tr>
            <tr>
              <td>PROVINCE</td>
              <td></td>
              <td>{{primaire.province}}</td>
            </tr>
            <tr>
              <td>COMMUNE/ARRONDISSEMENT</td>
              <td></td>
              <td>{{primaire.commune}}</td>
            </tr>
            <tr>
              <td>CEB</td>
              <td></td>
              <td>{{primaire.ceb}}</td>
            </tr>
            <tr>
              <td>Nom de la structure</td>
              <td></td>
              <td>{{primaire.nom_structure}}</td>
            </tr>
            <tr>
              <td>Statut</td>
              <td></td>
              <td>{{primaire.statut}}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td></td>
              <td>{{primaire.type}}</td>
            </tr>
            <tr>
              <td>Nombre total de salles d'activités</td>
              <td></td>
              <td>{{primaire.NbTotalSalleActivite}}</td>
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
              <td rowspan="2" class="col-lg-4">CP1</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                {{primaire.NbGarcon_CP1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconMoyenne_CP1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconAbandon_CP1}}
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                {{primaire.NbFille_CP1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleMoyenne_CP1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleAbandon_CP1}}
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CP2</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                {{primaire.NbGarcon_CP2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconMoyenne_CP2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconAbandon_CP2}}
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                {{primaire.NbFille_CP2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleMoyenne_CP2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleAbandon_CP2}}
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CE1</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                {{primaire.NbGarcon_CE1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconMoyenne_CE1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconAbandon_CE1}}
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                {{primaire.NbFille_CE1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleMoyenne_CE1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleAbandon_CE1}}
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CE2</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                {{primaire.NbGarcon_CE2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconMoyenne_CE2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconAbandon_CE2}}
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                {{primaire.NbFille_CE2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleMoyenne_CE2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleAbandon_CE2}}
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CM1</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                {{primaire.NbGarcon_CM1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconMoyenne_CM1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconAbandon_CM1}}
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                {{primaire.NbFille_CM1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleMoyenne_CM1}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleAbandon_CM1}}
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">CM2</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                {{primaire.NbGarcon_CM2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconMoyenne_CM2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconAbandon_CM2}}
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                {{primaire.NbFille_CM2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleMoyenne_CM2}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleAbandon_CM2}}
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">Total</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                {{primaire.NbTotalGarcon}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbTotalGarconMoyenne}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbTotalGarconAbandon}}
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                {{primaire.NbTotalFille}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbTotalFilleMoyenne}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbTotalFilleAbandon}}
              </td>
            </tr>
            <tr>
              <td rowspan="2" class="col-lg-4">Déplacés internes</td>
              <td class="col-lg-4 no-margin-padding">Garcon</td>
              <td class="no-margin-padding">
                {{primaire.NbGarcon_PDI}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconMoyenne_PDI}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbGarconAbandon_PDI}}
              </td>
            </tr>
            <tr>
              <td class="no-margin-padding">Fille</td>
              <td class="no-margin-padding">
                {{primaire.NbFille_PDI}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleMoyenne_PDI}}
              </td>
              <td class="no-margin-padding">
                {{primaire.NbFilleAbandon_PDI}}
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
                {{primaire.NbTotalEnseignantHomme}}
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                {{primaire.NbTotalEnseignantFemme}}
              </td>
            </tr>
            <tr>
              <td rowspan="2">
                Dont redeployés (arrivés) suite à la fermeture de leur structure
              </td>
              <td>Homme</td>
              <td>
                {{primaire.NbEnseignantHommeRedeployes}}
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                {{primaire.NbEnseignantFemmeRedeployes}}
              </td>
            </tr>
            <tr>
              <td rowspan="2">volontaires communautaires</td>
              <td rowspan="2"></td>
              <td>Homme</td>
              <td>
                {{primaire.NbEnseignantHommeVolontaire}}
              </td>
            </tr>
            <tr>
              <td>Femme</td>
              <td>
                {{primaire.NbEnseignantFemmeVolontaire}}
              </td>
            </tr>
          </table>
          <h5>IV. ENVIRONNEMENT D’APPRENTISSAGE</h5>
          
          <table class="table table-bordered">
            <tr>
              <td class="col-lg-4">Existence d'espaces récréatifs</td>
              <td class="col-lg-4"></td>
              <td class="col-lg-4 no-margin-padding">
                {{primaire.ExistenceEspacesRecreatif}}
              </td>
            </tr>
            <tr>
              <td class="col-lg-4">Existence de dispositif d’hygiène</td>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">
                {{primaire.ExistenceDispositifHygiene}}
              </td>
            </tr>
            <tr>
              <td class="col-lg-4">Existence cantine</td>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">
                {{primaire.ExistenceCantine}}
              </td>
            </tr>
            <tr>
              <td class="col-lg-4">Source de la dotation</td>
              <td class="col-lg-4">Etat</td>
              <td class="col-lg-4">
                {{primaire.SourceDotationEtat}}
              </td>
            </tr>
            <tr>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">Partenaire</td>
              <td class="col-lg-4">
                {{primaire.SourceDotationPartenaire}}
              </td>
            </tr>
            <tr>
              <td class="col-lg-4"></td>
              <td class="col-lg-4">Endogène</td>
              <td class="col-lg-4">
                {{primaire.SourceDotationEndogene}}
              </td>
            </tr>
          </table>
        </CCardBody>

        <CCardFooter>
          <CButton color="secondary" @click="goBack">Retour</CButton>
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
