<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
           Modifier Acte de Mariage id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
            <div class="row ">
            <CSelect
              label="Region" class="col-lg-3"
              :value.sync="acteMariage.region_id"
              :plain="true"
              :options="regions"
              v-model="acteMariage.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province" class="col-lg-3"
              :value.sync="acteMariage.province_id"
              :plain="true"
              :options="provinces"
              v-model="acteMariage.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune"  class="col-lg-3"
              :value.sync="acteMariage.commune_id"
              :plain="true"
              :options="communes"
              v-model="acteMariage.commune_id"
            >
            </CSelect>

            <CInput  class="col-lg-3" label="Numero Acte" type="text" placeholder="Numero Acte" v-model="acteMariage.n_acte"></CInput>
            <CInput  class="col-lg-3"  label="Date établissement" type="date" placeholder="Date établissement" v-model="acteMariage.date_etablissement"></CInput>
            <template>
                <div class="form-group form-row col-lg-3">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Regime matrimonial
                  </CCol>
                  <CCol sm="12" :class="'form-inline'">
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="regime_matrimonialO" type="radio" class="custom-control-input" v-model="acteMariage.regime_matrimonial" value="MONOGAMIE">
                      <label for="regime_matrimonialO" class="custom-control-label"> Monogamie </label>
                    </div>
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="regime_matrimonialN" type="radio" class="custom-control-input" v-model="acteMariage.regime_matrimonial" value="POLYGAMIE">
                      <label for="regime_matrimonialN" class="custom-control-label"> Polygamie </label>
                    </div>
                  </CCol>
                </div>
            </template>
            <template>
                <div class="form-group form-row col-lg-3">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Option matrimonial
                  </CCol>
                  <CCol sm="12" :class="'form-inline'">
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="option_matrimonialO" type="radio" class="custom-control-input" v-model="acteMariage.option_matrimonial" value="BIEN_COMMUN">
                      <label for="option_matrimonialO" class="custom-control-label"> Bien commun </label>
                    </div>
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="option_matrimonialN" type="radio" class="custom-control-input" v-model="acteMariage.option_matrimonial" value="BIEN_SEPARE">
                      <label for="option_matrimonialN" class="custom-control-label"> Bien separe </label>
                    </div>
                  </CCol>
                </div>
            </template>
            </div>
            
        </CCardBody>
      </CCard>
        
    </CCol>
    <CCol col="6" lg="6">
      <CCard>
         <CCardHeader>
            Information du conjoint
        </CCardHeader>
        <CCardBody>
            <!-- Les informations du conjoints -->
             <div class="row ">
              <CInput class="col-lg-8" label="Date naissance (Si jour inconnu choisir le 01 du mois,Si mois inconnu choisir Janvier)" type="date" placeholder="Date naissance" v-model="acteMariage.date_naissance_conjoint"
              :is-valid="ageCalculeAndValidatorConjoint"></CInput>
              <template>
                  <div class="form-group form-row" style="align-items: end;"> 
                      Age : <label for="age_mariage_conjoint" class=""> {{acteMariage.age_mariage_conjoint}} </label>
                  </div>
              </template>
            </div>
            <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Sexe
                  </CCol>
                  <CCol sm="9" :class="'form-inline'">
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="homme" type="radio" class="custom-control-input" v-model="acteMariage.sexe_conjoint" value="M">
                      <label for="homme" class="custom-control-label"> Homme </label>
                    </div>

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="femme" type="radio" class="custom-control-input" v-model="acteMariage.sexe_conjoint" value="F">
                      <label for="femme" class="custom-control-label"> Femme </label>
                    </div>
                  </CCol>
                </div>
            </template>
            <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Hors commune
                  </CCol>
                  <CCol sm="9" :class="'form-inline'">
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="hors_commune_conjointO" type="radio" class="custom-control-input" v-model="acteMariage.hors_commune_conjoint" value="OUI">
                      <label for="hors_commune_conjointO" class="custom-control-label"> Oui </label>
                    </div>
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="hors_commune_conjointN" type="radio" class="custom-control-input" v-model="acteMariage.hors_commune_conjoint" value="NON">
                      <label for="hors_commune_conjointN" class="custom-control-label"> Non </label>
                    </div>
                  </CCol>
                </div>
            </template>
            
            <CSelect
              v-if="acteMariage.hors_commune_conjoint=='NON'"
              label="Commune de naissance" 
              :value.sync="acteMariage.commune_naissance_conjoint"
              :plain="true"
              :options="communes"
              v-model="acteMariage.commune_naissance_conjoint"
            >
            </CSelect>

            <CInput 
              v-if="acteMariage.hors_commune_conjoint=='OUI'" label="Localite de naissance" type="text" placeholder="Localite de naissance" v-model="acteMariage.localite_naissance_conjoint"></CInput>
            <CInput label="Domicile" type="text" placeholder="Domicile" v-model="acteMariage.domicile_conjoint"></CInput>
            <CSelect
              label="Profession"
              :value.sync="acteMariage.profession_conjoint_id"
              :plain="true"
              :options="professions"
              v-model="acteMariage.profession_conjoint_id"
            >
            </CSelect>
          
        </CCardBody>
      </CCard>
        
    </CCol>
    <CCol col="6" lg="6">
      <CCard>
         <CCardHeader>
            Information de la conjointe
        </CCardHeader>
        <CCardBody>
          <!-- Les informations de la conjointe -->            
              <div class="row ">
              <CInput class="col-lg-8" label="Date naissance (Si jour inconnu choisir le 01 du mois,Si mois inconnu choisir Janvier)" type="date" placeholder="Date naissance" v-model="acteMariage.date_naissance_conjointe"
              :is-valid="ageCalculeAndValidatorConjointe"></CInput>
              <template>
                  <div class="form-group form-row" style="align-items: end;"> 
                      Age : <label for="age_mariage_conjointe" class=""> {{acteMariage.age_mariage_conjointe}} </label>
                  </div>
              </template>
            </div>
            
            <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Sexe
                  </CCol>
                  <CCol sm="9" :class="'form-inline'">
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="homme" type="radio" class="custom-control-input" v-model="acteMariage.sexe_conjointe" value="M">
                      <label for="homme" class="custom-control-label"> Homme </label>
                    </div>

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="femme" type="radio" class="custom-control-input" v-model="acteMariage.sexe_conjointe" value="F">
                      <label for="femme" class="custom-control-label"> Femme </label>
                    </div>
                  </CCol>
                </div>
            </template>
            <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Hors commune
                  </CCol>
                  <CCol sm="9" :class="'form-inline'">
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="hors_commune_conjointeO" type="radio" class="custom-control-input" v-model="acteMariage.hors_commune_conjointe" value="OUI">
                      <label for="hors_commune_conjointeO" class="custom-control-label"> Oui </label>
                    </div>
                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="hors_commune_conjointeN" type="radio" class="custom-control-input" v-model="acteMariage.hors_commune_conjointe" value="NON">
                      <label for="hors_commune_conjointeN" class="custom-control-label"> Non </label>
                    </div>
                  </CCol>
                </div>
            </template>
            
            <CSelect
              v-if="acteMariage.hors_commune_conjointe=='NON'"
              label="Commune de naissance" 
              :value.sync="acteMariage.commune_naissance_conjointe"
              :plain="true"
              :options="communes"
              v-model="acteMariage.commune_naissance_conjointe"
            >
            </CSelect>

            <CInput 
              v-if="acteMariage.hors_commune_conjointe=='OUI'" label="Localite de naissance" type="text" placeholder="Localite de naissance" v-model="acteMariage.localite_naissance_conjointe"></CInput>
            <CInput label="Domicile" type="text" placeholder="Domicile" v-model="acteMariage.domicile_conjointe"></CInput>
            <CSelect
              label="Profession"
              :value.sync="acteMariage.profession_conjointe_id"
              :plain="true"
              :options="professions"
              v-model="acteMariage.profession_conjointe_id"
            >
            </CSelect>
        </CCardBody>
      </CCard>
        
    </CCol>
    <CCol col="12" lg="12">
      <CCard>
        <CCardBody>
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
        acteMariage: {
          n_acte : '',
          date_etablissement : '', 
          date_naissance_conjoint : '',
          age_mariage_conjoint : '',
          sexe_conjoint : '',
          hors_commune_conjoint : '',
          commune_naissance_conjoint : '',
          localite_naissance_conjoint : '',
          domicile_conjoint : '',
          profession_conjoint_id : '', 
          date_naissance_conjointe : '',
          age_mariage_conjointe : '',
          sexe_conjointe : '',
          hors_commune_conjointe : '',
          commune_naissance_conjointe : '',
          localite_naissance_conjointe : '',
          domicile_conjointe : '',
          profession_conjoint_id : '',
          regime_matrimonial : '',
          option_matrimonial : '',
          province_id : null,
          region_id : null,
          commune_id : null,
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
    ageCalculeAndValidatorConjoint (val) {
      if(this.acteMariage.date_naissance_conjoint&&this.acteMariage.date_naissance_conjoint)
      {this.acteMariage.age_mariage_conjoint = new Date(this.acteMariage.date_etablissement).getFullYear() - new Date(this.acteMariage.date_naissance_conjoint).getFullYear()}
      else {this.acteMariage.age_mariage_conjoint = null}
      return val ? new Date(val)<=new Date()?null:false : null
    },
    ageCalculeAndValidatorConjointe (val) {
      if(this.acteMariage.date_naissance_conjointe&&this.acteMariage.date_naissance_conjointe)
      {this.acteMariage.age_mariage_conjointe = new Date(this.acteMariage.date_etablissement).getFullYear() - new Date(this.acteMariage.date_naissance_conjointe).getFullYear()}
      else {this.acteMariage.age_mariage_conjointe = null}
      return val ? new Date(val)<=new Date()?null:false : null
    },
    goBack() {
      this.$router.go(-1)
          },
    selectRadioSelectRole(role){
      console.log(role)
    },
    update() {
        let self = this;
        
        if(this.acteMariage.hors_commune_conjointe=='NON'){
          this.acteMariage.localite_naissance_conjointe = "";
        }
        else {
          this.acteMariage.commune_naissance_conjointe = null;
        }
        if(this.acteMariage.hors_commune_conjoint=='NON'){
          this.acteMariage.localite_naissance_conjoint = "";
        }
        else {
          this.acteMariage.commune_naissance_conjoint = null;
        }
        axios.put(  this.$apiAdress + '/api/acte_mariages/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.acteMariage)
        .then(function (response) {
            self.message = 'Successfully updated Acte Mariage.';
            self.$toasted.show("L'acte a été mise à jour avec succès",{type:"success"});
            self.showAlert();
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
              self.showAlert();
            }else{
              console.log(error); 
              // self.$router.push({ path: '/login' }); 
            }
        });
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/acte_mariages/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response.data)
        self.acteMariage = response.data.acteMariage;
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.professions = response.data.professions;
        
        if(!self.acteMariage.commune_naissance_conjoint)
        self.acteMariage.commune_naissance_conjoint = self.communes.length>0?self.communes[0].value:null;
        if(!self.acteMariage.commune_naissance_conjointe)
        self.acteMariage.commune_naissance_conjointe = self.communes.length>0?self.communes[0].value:null;
        if(!self.acteMariage.profession_conjoint)
        self.acteMariage.profession_conjoint = self.professions.length>0?self.professions[0].value:null;
        if(!self.acteMariage.profession_conjointe)
        self.acteMariage.profession_conjointe = self.professions.length>0?self.professions[0].value:null;
        
    }).catch(function (error) {
        console.log(error);
    });
  }
}
 

</script>
