<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          
          <h5>
          Modifier le système d'information sanitaire id:  {{ $route.params.id }}
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
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    update() {
        let self = this;

        axios.put(  this.$apiAdress + '/api/systeme_information_sanitaires/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.systemeInformationSanitaire)
        .then(function (response) {
            self.message = "Successfully updated Système d'information Sanitaire.";
            self.showAlert();
            self.$toasted.show(" Système d'information Sanitaire a été mise à jour avec succès",{type:"success"});
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
    anneeValidator (val) {
      return val ? (val<=2022&&val>=1900)?null:false : null
    },
    moisValidator (val) {
      return val ? (val<=12&&val>=1)?null:false : null
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/systeme_information_sanitaires/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response.data)
        self.systemeInformationSanitaire = response.data.systemeInformationSanitaire;
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.districts = response.data.districts;
        self.formationSanitaires = response.data.formationSanitaires;

    }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: 'login' });
    });
  }
}


</script>
