<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          
          <h5>
           Ajouter un système d'information sanitaire
          </h5>
        </CCardHeader>
        <CCardBody>
          <h6>
            Localisation
          </h6>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
            <div class="row ">
            
            <CSelect
              label="Region"  class="col-lg-3"
              :value.sync="systemeInformationSanitaire.region_id"
              :plain="true"
              :options="regions"
              v-model="systemeInformationSanitaire.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province"  class="col-lg-3"
              :value.sync="systemeInformationSanitaire.province_id"
              :plain="true"
              :options="provinces"
              v-model="systemeInformationSanitaire.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune"  class="col-lg-3"
              :value.sync="systemeInformationSanitaire.commune_id"
              :plain="true"
              :options="communes"
              v-model="systemeInformationSanitaire.commune_id"
            >
            </CSelect>
            
            <CSelect
              label="District"  class="col-lg-3"
              :value.sync="systemeInformationSanitaire.district_id"
              :plain="true"
              :options="districts"
              v-model="systemeInformationSanitaire.district_id"
            >
            </CSelect>
            
            <CSelect
              label="Formation Sanitaire"  class="col-lg-3"
              :value.sync="systemeInformationSanitaire.formation_sanitaire_id"
              :plain="true"
              :options="formationSanitaires"
              v-model="systemeInformationSanitaire.formation_sanitaire_id"
            >
            </CSelect>

            <CInput label="Annee" type="number" placeholder="Annee" v-model="systemeInformationSanitaire.annee" class="col-lg-3"
                  invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeValidator"></CInput>
            <CInput label="Mois" type="number" placeholder="Mois" v-model="systemeInformationSanitaire.mois" class="col-lg-3"
                  invalid-feedback="Veuillez saisir un mois valide"
                  :is-valid="moisValidator"
            ></CInput>
            
            </div>
            
        </CCardBody>
      </CCard>
        
    </CCol>
    <CCol col="12" lg="12">
      <CCard>
        <CCardBody>
          
         <h6>
            Mesures
        </h6>
        <div class="row"> 
            <div role="group" class="col-lg-3 form-group">
              <label for="type_rapport" class=""> Type de rapport </label>
              <select id="type_rapport" plain="true" class="form-control"  v-model="systemeInformationSanitaire.type_rapport">
                <option value="CONSULTATION_PRENATALE"> CONSULTATION PRENATALE </option>
                <option value="VACCINATION"> VACCINATION </option>
                <option value="PLANIFICATION_FAMILIALE"> PLANIFICATION FAMILIALE </option>
                <option value="ACCOUCHEMENT"> ACCOUCHEMENT </option>
                <option value="CONSULTATION_ANBULATOIRE"> CONSULTATION ANBULATOIRE </option>
                <option value="HOSPITALISATION"> HOSPITALISATION </option>
              </select>
            </div>
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Rapport attendu </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="rapport_attenduO" type="radio" class="custom-control-input"
                    v-model="systemeInformationSanitaire.rapport_attendu" :value="1">
                  <label for="rapport_attenduO" class="custom-control-label"> 1 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="rapport_attenduN" type="radio" class="custom-control-input"
                    v-model="systemeInformationSanitaire.rapport_attendu" :value="0">
                  <label for="rapport_attenduN" class="custom-control-label"> 0 </label>
                </div>
            </div>
            <div role="group" class="col-lg-3 form-group" v-if="systemeInformationSanitaire.rapport_attendu==1">
              <label class="row col custom-control-inline"> Rapport recu </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="rapport_recuO" type="radio" class="custom-control-input"
                    v-model="systemeInformationSanitaire.rapport_recu" :value="1">
                  <label for="rapport_recuO" class="custom-control-label"> 1 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="rapport_recuN" type="radio" class="custom-control-input"
                    v-model="systemeInformationSanitaire.rapport_recu" :value="0">
                  <label for="rapport_recuN" class="custom-control-label"> 0 </label>
                </div>
            </div>
            <div role="group" class="col-lg-3 form-group" v-if="systemeInformationSanitaire.rapport_attendu==1&&systemeInformationSanitaire.rapport_recu==1">
              <label class="row col custom-control-inline"> Rapport recu à temps </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="rapport_recu_tempsO" type="radio" class="custom-control-input"
                    v-model="systemeInformationSanitaire.rapport_recu_temps" :value="1">
                  <label for="rapport_recu_tempsO" class="custom-control-label"> 1 </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="rapport_recu_tempsN" type="radio" class="custom-control-input"
                    v-model="systemeInformationSanitaire.rapport_recu_temps" :value="0">
                  <label for="rapport_recu_tempsN" class="custom-control-label"> 0 </label>
                </div>
            </div>
        </div>
          <CButton color="primary" @click="store()">Ajouter</CButton> &nbsp;
          <CButton color="secondary" @click="goBack">Retour</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>


<script>
import axios from 'axios'
export default {
  name: 'EditSystemeInformationSanitaire',
  props: {
    caption: {
      type: String,
      default: 'SystemeInformationSanitaire id'
    },
  },
  data: () => {
    return {
        systemeInformationSanitaire: {
          region_id: null,
          province_id: null,
          commune_id: null,
          district_id: null,
          formation_sanitaire_id: null,
          annee: null,
          mois: null,
          NbNouveaux_consultant : null,
          NbEnft_PrisCharge_PCIME : null,
          NbMaladie_MisObservation : null,
        },
        regions: [],
        provinces: [],
        communes: [],
        districts: [],
        formationSanitaires: [],
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    store() {
        let self = this;
        console.log(self.systemeInformationSanitaire)
        axios.post(  this.$apiAdress + '/api/systeme_information_sanitaires?token=' + localStorage.getItem("api_token"),
          self.systemeInformationSanitaire
        )
        .then(function (response) {
            self.systemeInformationSanitaire = {
            };
            self.systemeInformationSanitaire.region_id = self.regions.length>0?self.regions[0].value:null;
            self.systemeInformationSanitaire.province_id = self.provinces.length>0?self.provinces[0].value:null;
            self.systemeInformationSanitaire.province_id = self.provinces.length>0?self.provinces[0].value:null;
            self.systemeInformationSanitaire.commune_id = self.communes.length>0?self.communes[0].value:null;
            self.systemeInformationSanitaire.district_id = self.districts.length>0?self.districts[0].value:null;
            self.systemeInformationSanitaire.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;

            // self.message = 'Successfully created consultation Prenatale.';
            self.$toasted.show("Système d'information sanitaire créé avec succès",{type:"success"});
            self.showAlert();
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
              self.$router.push({ path: 'login' }); 
            }
        });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    anneeValidator (val) {
      return val ? val<=2022&&val>=1900 : null
    },
    moisValidator (val) {
      return val ? val<=12&&val>=1 : null
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/systeme_information_sanitaires/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.districts = response.data.districts;
        self.formationSanitaires = response.data.formationSanitaires;
        // Définir valeur par défaut
        self.systemeInformationSanitaire.region_id = self.regions.length>0?self.regions[0].value:null;
        self.systemeInformationSanitaire.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.systemeInformationSanitaire.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.systemeInformationSanitaire.commune_id = self.communes.length>0?self.communes[0].value:null;
        self.systemeInformationSanitaire.district_id = self.districts.length>0?self.districts[0].value:null;
        self.systemeInformationSanitaire.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
