<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          <h5>Modifier une donnée Primaire id:  {{ $route.params.id }}</h5>
        </CCardHeader>
        <CCardBody>
          <div class="row ">
          <CInput label="Année" type="number" placeholder="Ex. 2020" v-model="primaire.annee" class="col-lg-3"
            invalid-feedback="Veuillez saisir une année valide" :is-valid="anneeValidator"></CInput>
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Trimestre </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre1" type="radio" class="custom-control-input"
                    v-model="primaire.trimestre" :value="'1'">
                  <label for="trimestre1" class="custom-control-label"> 1 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre2" type="radio" class="custom-control-input"
                    v-model="primaire.trimestre" :value="'2'">
                  <label for="trimestre2" class="custom-control-label"> 2 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre3" type="radio" class="custom-control-input"
                    v-model="primaire.trimestre" :value="'3'">
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
            <CInput label="Numéro ordre" type="text" placeholder="Ex. 00xxx" v-model="primaire.n_ordre" class="col-lg-3">
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

            <CInput label="ceb" type="text" placeholder="" v-model="primaire.ceb" class="col-lg-3"></CInput>
            <CInput label="Nom de la structure" type="text" placeholder="" v-model="primaire.nom_structure"
              class="col-lg-3"></CInput>
           

            <CInput label="Nombre total de salles d'activités" type="number" placeholder="0xx"
              v-model="primaire.NbTotalSalleActivite" class="col-lg-3"></CInput>
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Statut </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="statutPUBLIC" type="radio" class="custom-control-input"
                    v-model="primaire.statut" :value="'PUBLIC'">
                  <label for="statutPUBLIC" class="custom-control-label"> Public </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="statutPRIVE" type="radio" class="custom-control-input"
                    v-model="primaire.statut" :value="'PRIVE'">
                  <label for="statutPRIVE" class="custom-control-label"> Privé </label>
                </div>
            </div>
            <CInput label="Nombre de labrines fonctionnelles" type="number" placeholder="0xx"
              v-model="primaire.NbPoubelle" class="col-lg-3"></CInput>
              
            <CInput label="Nombre de poubelles" type="number" placeholder="0xx"
              v-model="primaire.NbLatrine" class="col-lg-3"></CInput>

              <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Existance de Bac à Ordure </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistanceBacOrdureOui" type="radio" class="custom-control-input"
                    v-model="primaire.ExistanceBacOrdure" :value="1">
                  <label for="ExistanceBacOrdureOui" class="custom-control-label"> Oui </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistanceBacOrdureNon" type="radio" class="custom-control-input"
                    v-model="primaire.ExistanceBacOrdure" :value="0">
                  <label for="ExistanceBacOrdureNon" class="custom-control-label"> Non </label>
                </div>
            </div> 
            
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Existance de Source d'Eau Ameliore </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistanceSourceEauAmelioreOui" type="radio" class="custom-control-input"
                    v-model="primaire.ExistanceSourceEauAmeliore" :value="1">
                  <label for="ExistanceSourceEauAmelioreOui" class="custom-control-label"> Oui </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="ExistanceSourceEauAmelioreNon" type="radio" class="custom-control-input"
                    v-model="primaire.ExistanceSourceEauAmeliore" :value="0">
                  <label for="ExistanceSourceEauAmelioreNon" class="custom-control-label"> Non </label>
                </div>
            </div>

            <div role="group" class="col-lg-6 form-group">
              <label class="row col custom-control-inline"> Système </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typeCLASSIQUE" type="radio" class="custom-control-input"
                    v-model="primaire.type" :value="'CLASSIQUE'">
                  <label for="typeCLASSIQUE" class="custom-control-label"> Classique </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typeBILINGUE" type="radio" class="custom-control-input"
                    v-model="primaire.type" :value="'BILINGUE'">
                  <label for="typeBILINGUE" class="custom-control-label"> Bilingue </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typeFRANCOARABE" type="radio" class="custom-control-input"
                    v-model="primaire.type" :value="'FRANCOARABE'">
                  <label for="typeFRANCOARABE" class="custom-control-label"> Franco Arabe </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typePASSERELLE" type="radio" class="custom-control-input"
                    v-model="primaire.type" :value="'PASSERELLE'">
                  <label for="typePASSERELLE" class="custom-control-label"> Passerelle </label>
                </div>
            </div>
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
          <CButton color="primary" @click="update()">Modifier</CButton> &nbsp;
          <CButton color="secondary" @click="goBack">Retour</CButton>
          </div>
        </CCardBody>
      </CCard>
    </CCol>

  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditUser',
  props: {
    caption: {
      type: String,
      default: 'User id'
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
        SourceDotationEndogene:null       
        },
        regions: [],
        provinces: [],
        communes: [],
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    update() {
        let self = this;
        console.log(self.primaire);
        axios.put(  this.$apiAdress + '/api/primaires/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.primaire)
        .then(function (response) {
            self.message = 'Successfully updated Formation Sanitaire.';
            self.showAlert();
            self.$toasted.show("Une donnée éducative primaire a été mise à jour avec succès",{type:"success"});
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
              self.$toasted.show(self.message,{type:"error"});
              self.showAlert();
            }else{
              console.log(error); 
              self.$router.push({ path: '/login' }); 
            }
        });
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    anneeValidator (val) {
      return val ? (val<=2022&&val>=1900)?null:false : null
    },
    trimestreValidator(val) {
      return val ? (val <= 4 && val >= 1)?null:false : null;
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/primaires/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response.data)
        self.primaire = response.data.primaire;
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.districts = response.data.districts;
        self.formationSanitaires = response.data.formationSanitaires;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}


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