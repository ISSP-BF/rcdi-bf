<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard> </CCard>
      <CCard>
        <CCardHeader>
          <h5>
            Ajouter des données Pre Scolaire
          </h5>
        </CCardHeader>
        <CCardBody>
          
          <div class="row ">
          <CInput label="Année" type="number" placeholder="Ex. 2020" v-model="postPrimaire.annee" class="col-lg-3"
            invalid-feedback="Veuillez saisir une année valide" :is-valid="anneeValidator"></CInput>
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Trimestre </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre1" type="radio" class="custom-control-input"
                    v-model="postPrimaire.trimestre" :value="'1'">
                  <label for="trimestre1" class="custom-control-label"> 1 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre2" type="radio" class="custom-control-input"
                    v-model="postPrimaire.trimestre" :value="'2'">
                  <label for="trimestre2" class="custom-control-label"> 2 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre3" type="radio" class="custom-control-input"
                    v-model="postPrimaire.trimestre" :value="'3'">
                  <label for="trimestre3" class="custom-control-label"> 3 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="trimestre4" type="radio" class="custom-control-input"
                    v-model="postPrimaire.trimestre" :value="'4'">
                  <label for="trimestre4" class="custom-control-label"> 4 </label>
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
            <CInput label="Numéro ordre" type="text" placeholder="Ex. 00xxx" v-model="postPrimaire.n_ordre" class="col-lg-3">
            </CInput>

            <CSelect label="Region" class="col-lg-3" :value.sync="postPrimaire.region_id" :plain="true"
              :options="regions" v-model="postPrimaire.region_id">
            </CSelect>

            <CSelect label="Province" class="col-lg-3" :value.sync="postPrimaire.province_id" :plain="true"
              :options="provinces" v-model="postPrimaire.province_id">
            </CSelect>

            <CSelect label="Commune" class="col-lg-3" :value.sync="postPrimaire.commune_id" :plain="true"
              :options="communes" v-model="postPrimaire.commune_id">
            </CSelect>

            <CInput label="ceb" type="text" placeholder="" v-model="postPrimaire.ceb" class="col-lg-3"></CInput>
            <CInput label="Nom de la structure" type="text" placeholder="" v-model="postPrimaire.nom_structure"
              class="col-lg-3"></CInput>
           

            <CInput label="Nombre total de salles d'activités" type="number" placeholder="0xx"
              v-model="postPrimaire.NbTotalSalleActivite" class="col-lg-3"></CInput>
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Statut </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="statutPUBLIC" type="radio" class="custom-control-input"
                    v-model="postPrimaire.statut" :value="'PUBLIC'">
                  <label for="statutPUBLIC" class="custom-control-label"> Public </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="statutPRIVE" type="radio" class="custom-control-input"
                    v-model="postPrimaire.statut" :value="'PRIVE'">
                  <label for="statutPRIVE" class="custom-control-label"> Privé </label>
                </div>
            </div>

            <div role="group" class="col-lg-6 form-group">
              <label class="row col custom-control-inline"> Système </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typeCLASSIQUE" type="radio" class="custom-control-input"
                    v-model="postPrimaire.type" :value="'CLASSIQUE'">
                  <label for="typeCLASSIQUE" class="custom-control-label"> Classique </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typeBILINGUE" type="radio" class="custom-control-input"
                    v-model="postPrimaire.type" :value="'BILINGUE'">
                  <label for="typeBILINGUE" class="custom-control-label"> Bilingue </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typeFRANCOARABE" type="radio" class="custom-control-input"
                    v-model="postPrimaire.type" :value="'FRANCOARABE'">
                  <label for="typeFRANCOARABE" class="custom-control-label"> Franco Arabe </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typePASSERELLE" type="radio" class="custom-control-input"
                    v-model="postPrimaire.type" :value="'PASSERELLE'">
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
                      <td rowspan="2" class="col-lg-4">6e</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarcon_6e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconMoyenne_6e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconAbandon_6e"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFille_6e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleMoyenne_6e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleAbandon_6e"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">5e</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarcon_5e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconMoyenne_5e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconAbandon_5e"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFille_5e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleMoyenne_5e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleAbandon_5e"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">4e</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarcon_4e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconMoyenne_4e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconAbandon_4e"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFille_4e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleMoyenne_4e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleAbandon_4e"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">3e</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarcon_3e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconMoyenne_3e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconAbandon_3e"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFille_3e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleMoyenne_3e"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleAbandon_3e"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">Total</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbTotalGarcon"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbTotalGarconMoyenne"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbTotalGarconAbandon"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbTotalFille"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbTotalFilleMoyenne"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbTotalFilleAbandon"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2" class="col-lg-4">Déplacés internes</td>
                      <td class="col-lg-4 no-margin-padding">Garcon</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarcon_PDI"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconMoyenne_PDI"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbGarconAbandon_PDI"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td class="no-margin-padding">Fille</td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFille_PDI"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleMoyenne_PDI"></CInput>
                      </td>
                      <td class="no-margin-padding">
                        <CInput type="number" v-model="postPrimaire.NbFilleAbandon_PDI"></CInput>
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
                      <td>vacataires</td>
                    </tr>
                    <tr>
                      <td rowspan="18" class="col-lg-4">
                        Effectifs des encadreurs (hors volontaires communautaires)
                      </td>
                      <td rowspan="2" class="col-lg-3">Français</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHomme_Francais"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHommeVacataire_Francais"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemme_Francais"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemmeVacataire_Francais"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Anglais</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHomme_Anglais"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHommeVacataire_Anglais"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemme_Anglais"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemmeVacataire_Anglais"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Allemand</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHomme_Allemand"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHommeVacataire_Allemand"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemme_Allemand"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemmeVacataire_Allemand"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Histoire géographie</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHomme_HisGeo"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHommeVacataire_HisGeo"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemme_HisGeo"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemmeVacataire_HisGeo"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Sciences de la vie et de la terre</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHomme_SVT"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHommeVacataire_SVT"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemme_SVT"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemmeVacataire_SVT"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Physiques chimie</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHomme_PC"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHommeVacataire_PC"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemme_PC"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemmeVacataire_PC"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Mathématiques</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHomme_Math"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHommeVacataire_Math"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemme_Math"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemmeVacataire_Math"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Education Physique et sportive</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHomme_EPS"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbHommeVacataire_EPS"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemme_EPS"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbFemmeVacataire_EPS"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">Total</td>
                      <td class="col-lg-2">Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbTotalEnseignantHomme"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbTotalEnseignantHommeVacataire"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbTotalEnseignantFemme"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbTotalEnseignantFemmeVacataire"></CInput>
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
                        <CInput type="number" v-model="postPrimaire.NbEnseignantHommeRedeployes"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbEnseignantHommeRedeployesVacataire"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbEnseignantFemmeRedeployes"></CInput>
                      </td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbEnseignantFemmeRedeployesVacataire"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="2">volontaires communautaires</td>
                      <td rowspan="2"></td>
                      <td>Homme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbEnseignantHommeVolontaire"></CInput>
                      </td>
                    </tr>
                    <tr>
                      <td>Femme</td>
                      <td>
                        <CInput type="number" v-model="postPrimaire.NbEnseignantFemmeVolontaire"></CInput>
                      </td>
                    </tr>
                  </table>
                </CCardBody>
              </CCard>
            </CTab>
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
                            v-model="postPrimaire.ExistenceEspacesRecreatif" :value="1" />
                          <label for="ExistenceEspacesRecreatifO" class="custom-control-label">
                            Oui
                          </label>
                        </div>

                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="ExistenceEspacesRecreatifN" type="radio" class="custom-control-input"
                            v-model="postPrimaire.ExistenceEspacesRecreatif" :value="0" />
                          <label for="ExistenceEspacesRecreatifN" class="custom-control-label">
                            Non
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4">
                        Existence de dispositif d’hygiène
                      </td>
                      <td class="col-lg-4"></td>
                      <td class="col-lg-4">
                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="ExistenceDispositifHygieneO" type="radio" class="custom-control-input"
                            v-model="postPrimaire.ExistenceDispositifHygiene" :value="1" />
                          <label for="ExistenceDispositifHygieneO" class="custom-control-label">
                            Oui
                          </label>
                        </div>

                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="ExistenceDispositifHygieneN" type="radio" class="custom-control-input"
                            v-model="postPrimaire.ExistenceDispositifHygiene" :value="0" />
                          <label for="ExistenceDispositifHygieneN" class="custom-control-label">
                            Non
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4">Existence cantine</td>
                      <td class="col-lg-4"></td>
                      <td class="col-lg-4">
                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="ExistenceCantineO" type="radio" class="custom-control-input"
                            v-model="postPrimaire.ExistenceCantine" :value="1" />
                          <label for="ExistenceCantineO" class="custom-control-label">
                            Oui
                          </label>
                        </div>

                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="ExistenceCantineN" type="radio" class="custom-control-input"
                            v-model="postPrimaire.ExistenceCantine" :value="0" />
                          <label for="ExistenceCantineN" class="custom-control-label">
                            Non
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4">Source de la dotation</td>
                      <td class="col-lg-4">Etat</td>
                      <td class="col-lg-4">
                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="SourceDotationEtatO" type="radio" class="custom-control-input"
                            v-model="postPrimaire.SourceDotationEtat" :value="1" />
                          <label for="SourceDotationEtatO" class="custom-control-label">
                            Oui
                          </label>
                        </div>

                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="SourceDotationEtatN" type="radio" class="custom-control-input"
                            v-model="postPrimaire.SourceDotationEtat" :value="0" />
                          <label for="SourceDotationEtatN" class="custom-control-label">
                            Non
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4"></td>
                      <td class="col-lg-4">Partenaire</td>
                      <td class="col-lg-4">
                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="SourceDotationPartenaireO" type="radio" class="custom-control-input"
                            v-model="postPrimaire.SourceDotationPartenaire" :value="1" />
                          <label for="SourceDotationPartenaireO" class="custom-control-label">
                            Oui
                          </label>
                        </div>

                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="SourceDotationPartenaireN" type="radio" class="custom-control-input"
                            v-model="postPrimaire.SourceDotationPartenaire" :value="0" />
                          <label for="SourceDotationPartenaireN" class="custom-control-label">
                            Non
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="col-lg-4"></td>
                      <td class="col-lg-4">Endogène</td>
                      <td class="col-lg-4">
                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="SourceDotationEndogeneO" type="radio" class="custom-control-input"
                            v-model="postPrimaire.SourceDotationEndogene" :value="1" />
                          <label for="SourceDotationEndogeneO" class="custom-control-label">
                            Oui
                          </label>
                        </div>

                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="SourceDotationEndogeneN" type="radio" class="custom-control-input"
                            v-model="postPrimaire.SourceDotationEndogene" :value="0" />
                          <label for="SourceDotationEndogeneN" class="custom-control-label">
                            Non
                          </label>
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
  name: "EditPostPrimaire",
  props: {
    caption: {
      type: String,
      default: "PostPrimaire id",
    },
  },
  data: () => {
    return {
      postPrimaire: {
        region_id: null,
        province_id: null,
        commune_id: null,
        annee: null,
        trimestre: null,
        ceb: null,
        nom_structure: null,
        statut: null,
        type: null,
        NbTotalSalleActivite: null,
        NbGarcon_6e: null,
        NbGarconMoyenne_6e: null,
        NbGarconAbandon_6e: null,
        NbGarcon_5e: null,
        NbGarconMoyenne_5e: null,
        NbGarconAbandon_5e: null,
        NbGarcon_4e: null,
        NbGarconMoyenne_4e: null,
        NbGarconAbandon_4e: null,
        NbGarcon_3e: null,
        NbGarconMoyenne_3e: null,
        NbGarconAbandon_3e: null,
        NbTotalGarcon: null,
        NbTotalGarconMoyenne: null,
        NbTotalGarconAbandon: null,
        NbGarcon_PDI: null,
        NbGarconMoyenne_PDI: null,
        NbGarconAbandon_PDI: null,
        NbFille_6e: null,
        NbFilleMoyenne_6e: null,
        NbFilleAbandon_6e: null,
        NbFille_5e: null,
        NbFilleMoyenne_5e: null,
        NbFilleAbandon_5e: null,
        NbFille_4e: null,
        NbFilleMoyenne_4e: null,
        NbFilleAbandon_4e: null,
        NbFille_3e: null,
        NbFilleMoyenne_3e: null,
        NbFilleAbandon_3e: null,
        NbTotalFille: null,
        NbTotalFilleMoyenne: null,
        NbTotalFilleAbandon: null,
        NbFille_PDI: null,
        NbFilleMoyenne_PDI: null,
        NbFilleAbandon_PDI: null,
        NbHomme_Francais: null,
        NbHommeVacataire_Francais: null,
        NbHomme_Anglais: null,
        NbHommeVacataire_Anglais: null,
        NbHomme_Allemand: null,
        NbHommeVacataire_Allemand: null,
        NbHomme_HisGeo: null,
        NbHommeVacataire_HisGeo: null,
        NbHomme_SVT: null,
        NbHommeVacataire_SVT: null,
        NbHomme_PC: null,
        NbHommeVacataire_PC: null,
        NbHomme_Math: null,
        NbHommeVacataire_Math: null,
        NbHomme_EPS: null,
        NbHommeVacataire_EPS: null,
        NbTotalEnseignantHomme: null,
        NbTotalEnseignantHommeVacataire: null,
        NbEnseignantHommeRedeployes: null,
        NbEnseignantHommeRedeployesVacataire: null,
        NbEnseignantHommeVolontaire: null,
        NbFemme_Francais: null,
        NbFemmeVacataire_Francais: null,
        NbFemme_Anglais: null,
        NbFemmeVacataire_Anglais: null,
        NbFemme_Allemand: null,
        NbFemmeVacataire_Allemand: null,
        NbFemme_HisGeo: null,
        NbFemmeVacataire_HisGeo: null,
        NbFemme_SVT: null,
        NbFemmeVacataire_SVT: null,
        NbFemme_PC: null,
        NbFemmeVacataire_PC: null,
        NbFemme_Math: null,
        NbFemmeVacataire_Math: null,
        NbFemme_EPS: null,
        NbFemmeVacataire_EPS: null,
        NbTotalEnseignantFemme: null,
        NbTotalEnseignantFemmeVacataire: null,
        NbEnseignantFemmeRedeployes: null,
        NbEnseignantFemmeRedeployesVacataire: null,
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
      console.log(self.postPrimaire);
      axios
        .post(
          this.$apiAdress +
          "/api/post_primaires?token=" +
          localStorage.getItem("api_token"),
          self.postPrimaire
        )
        .then(function (response) {
          self.postPrimaire = {};
          self.postPrimaire.region_id =
            self.regions.length > 0 ? self.regions[0].value : null;
          self.postPrimaire.province_id =
            self.provinces.length > 0 ? self.provinces[0].value : null;
          self.postPrimaire.commune_id =
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
    anneeValidator(val) {
      return val ? (val <= 2022 && val >= 1900 ? null : false) : null;
    },
    trimestreValidator(val) {
      return val ? (val <= 4 && val >= 1 ? null : false) : null;
    },
  },
  mounted: function () {
    let self = this;
    axios
      .get(
        this.$apiAdress +
        "/api/post_primaires/create?token=" +
        localStorage.getItem("api_token")
      )
      .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        // Définir valeur par défaut
        self.postPrimaire.region_id =
          self.regions.length > 0 ? self.regions[0].value : null;
        self.postPrimaire.province_id =
          self.provinces.length > 0 ? self.provinces[0].value : null;
        self.postPrimaire.commune_id =
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
