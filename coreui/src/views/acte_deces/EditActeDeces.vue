<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardBody>
          <h3>
            Modifier Acte de Décès numéro :  {{ $route.params.id }}
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
            
            <CSelect
              label="Region" 
              :value.sync="acteDeces.region_id"
              :plain="true"
              :options="regions"
              v-model="acteDeces.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province" 
              :value.sync="acteDeces.province_id"
              :plain="true"
              :options="provinces"
              v-model="acteDeces.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune" 
              :value.sync="acteDeces.commune_id"
              :plain="true"
              :options="communes"
              v-model="acteDeces.commune_id"
            >
            </CSelect>


            <CInput label="Numero Acte" type="text" placeholder="Numero Acte" v-model="acteDeces.n_acte"></CInput>
            <CInput label="Nom" type="text" placeholder="Nom" v-model="acteDeces.nom"></CInput>
            <CInput label="Prenom(s)" type="text" placeholder="Prenom(s)" v-model="acteDeces.prenom"></CInput>
            <CInput label="Date déclaration" type="date" placeholder="Date déclaration" v-model="acteDeces.date_declaration" invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeEnCourValidator"></CInput>
             <CInput label="Date naissance (Si jour inconnu choisir le 01 du mois,Si mois inconnu choisir Janvier)" type="date" placeholder="Date naissance" v-model="acteDeces.date_naissance" invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="ageCalculeAndValidator"></CInput>
            <CInput label="Date deces (Si jour inconnu choisir le 01 du mois,Si mois inconnu choisir Janvier)" type="date" placeholder="Date deces" v-model="acteDeces.date_deces" invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="ageCalculeAndValidator"></CInput>
            <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Age : <label for="celibataire" class=""> {{acteDeces.age}} </label>
                  </CCol>
                </div>
            </template>
            <CInput label="Date Etablissement" type="date" placeholder="Date Etablissement" v-model="acteDeces.date_etablissement" invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeEnCourValidator"></CInput>
            <CSelect
              label="Profession"
              :value.sync="acteDeces.profession_id"
              :plain="true"
              :options="professions"
              v-model="acteDeces.profession_id"
            >
            </CSelect>
            <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Situation Matrimonial
                  </CCol>
                  <CCol sm="9" :class="'form-inline'">

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="celibataire" type="radio" class="custom-control-input" v-model="acteDeces.statut_matrimonial" value="CELIBATAIRE">
                      <label for="celibataire" class="custom-control-label"> Célibataire </label>
                    </div>

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="marie" type="radio" class="custom-control-input" v-model="acteDeces.statut_matrimonial" value="MARIE">
                      <label for="marie" class="custom-control-label"> Marié(e) </label>
                    </div>

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="divorce" type="radio" class="custom-control-input" v-model="acteDeces.statut_matrimonial" value="DIVORCE">
                      <label for="divorce" class="custom-control-label"> Divorcé(e) </label>
                    </div>
                    

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="veuf" type="radio" class="custom-control-input" v-model="acteDeces.statut_matrimonial" value="VEUF">
                      <label for="veuf" class="custom-control-label"> Veuf(ve) </label>
                    </div>

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="manquant" type="radio" class="custom-control-input" v-model="acteDeces.statut_matrimonial" value="MANQUANT">
                      <label for="manquant" class="custom-control-label"> Manquant </label>
                    </div>

                  </CCol>
                </div>
            </template>
            <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Sexe
                  </CCol>
                  <CCol sm="12" :class="'form-inline'">

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="homme" type="radio" class="custom-control-input" v-model="acteDeces.sexe" value="M">
                      <label for="homme" class="custom-control-label"> Homme </label>
                    </div>

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="femme" type="radio" class="custom-control-input" v-model="acteDeces.sexe" value="F">
                      <label for="femme" class="custom-control-label"> Femme </label>
                    </div>
                  </CCol>
                </div>
            </template>            
          <CButton color="primary" @click="update()">Modifier</CButton> &nbsp;
          <CButton color="secondary" @click="goBack">Retour</CButton>
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
        acteDeces: {
          region_id: null,
          province_id: null,
          commune_id: null,
          n_acte: '',
          nom: '',
          prenom: '',
          date_declaration: '', 
          date_deces: '',
          date_naissance: '',
          statut_matrimonial: '',
          profession_id: '',
          date_etablissement: '',
          sexe: '',
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
    selectRadioSelectRole(role){
    },
    update() {
        let self = this;
        axios.put(  this.$apiAdress + '/api/acte_deces/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.acteDeces)
        .then(function (response) {
            self.message = 'Successfully updated Acte Deces.';
            self.$toasted.show("L'acte a été mises à jour avec succès",{type:"success"});
            self.goBack();
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
            self.$toasted.show(self.message,{type:"error"});
               
            }else{
              console.log(error); 
              // self.$router.push({ path: '/login' }); 
            }
        });
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    ageCalculeAndValidator (val) {
      if(this.acteDeces.date_deces&&this.acteDeces.date_naissance)
      {this.acteDeces.age = new Date(this.acteDeces.date_deces).getFullYear() - new Date(this.acteDeces.date_naissance).getFullYear()}
      else {this.acteDeces.age = null}
      return val ? new Date(val)<=new Date()?null:false : null
    },
    anneeEnCourValidator (val) {
      return val ? new Date(val)<=new Date()?null:false : null
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/acte_deces/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.acteDeces = response.data.acteDeces;
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.professions = response.data.professions;
    }).catch(function (error) {
        console.log(error);
    });
  }
}
 

</script>
