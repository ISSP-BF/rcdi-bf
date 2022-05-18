<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          
          <h5>
           Ajouter une planification Familiale
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
              :value.sync="planificationFamiliale.region_id"
              :plain="true"
              :options="regions"
              v-model="planificationFamiliale.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province"  class="col-lg-3"
              :value.sync="planificationFamiliale.province_id"
              :plain="true"
              :options="provinces"
              v-model="planificationFamiliale.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune"  class="col-lg-3"
              :value.sync="planificationFamiliale.commune_id"
              :plain="true"
              :options="communes"
              v-model="planificationFamiliale.commune_id"
            >
            </CSelect>
            
            <CSelect
              label="District"  class="col-lg-3"
              :value.sync="planificationFamiliale.district_id"
              :plain="true"
              :options="districts"
              v-model="planificationFamiliale.district_id"
            >
            </CSelect>
            
            <CSelect
              label="Formation Sanitaire"  class="col-lg-3"
              :value.sync="planificationFamiliale.formation_sanitaire_id"
              :plain="true"
              :options="formationSanitaires"
              v-model="planificationFamiliale.formation_sanitaire_id"
            >
            </CSelect>

            <CInput label="Annee" type="number" placeholder="Annee" v-model="planificationFamiliale.annee" class="col-lg-3"
                  invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeValidator"></CInput>
            <CInput label="Mois" type="number" placeholder="Mois" v-model="planificationFamiliale.mois" class="col-lg-3"
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
            <CInput label="type_utilisatrices" type="number" placeholder="type_utilisatrices" v-model="planificationFamiliale.type_utilisatrices"  class="col-lg-4"></CInput>
            <CInput label="NbPillule_COC" type="number" placeholder="NbPillule_COC" v-model="planificationFamiliale.NbPillule_COC"  class="col-lg-4"></CInput>
            <CInput label="NbPillule_COP" type="number" placeholder="NbPillule_COP" v-model="planificationFamiliale.NbPillule_COP"  class="col-lg-4"></CInput>
            <CInput label="NbDMPlule_IM" type="number" placeholder="NbDMPlule_IM" v-model="planificationFamiliale.NbDMPlule_IM"  class="col-lg-4"></CInput>
            <CInput label="NbDMPA_IM" type="number" placeholder="NbDMPA_IM" v-model="planificationFamiliale.NbDMPA_IM"  class="col-lg-4"></CInput>
            <CInput label="NbImplant_5ans" type="number" placeholder="NbImplant_5ans" v-model="planificationFamiliale.NbImplant_5ans"  class="col-lg-4"></CInput>
            <CInput label="NbImplant_3ans" type="number" placeholder="NbImplant_3ans" v-model="planificationFamiliale.NbImplant_3ans"  class="col-lg-4"></CInput>
            <CInput label="NbPreservatif_Masculin" type="number" placeholder="NbPreservatif_Masculin" v-model="planificationFamiliale.NbPreservatif_Masculin"  class="col-lg-4"></CInput>
            <CInput label="NbPreservatif_Feminin" type="number" placeholder="NbPreservatif_Feminin" v-model="planificationFamiliale.NbPreservatif_Feminin"  class="col-lg-4"></CInput>
            <CInput label="NbLigature" type="number" placeholder="NbLigature" v-model="planificationFamiliale.NbLigature"  class="col-lg-4"></CInput>
            <CInput label="NbVasectomie" type="number" placeholder="NbVasectomie" v-model="planificationFamiliale.NbVasectomie"  class="col-lg-4"></CInput>
            <CInput label="NbCollier_Cycle" type="number" placeholder="NbCollier_Cycle" v-model="planificationFamiliale.NbCollier_Cycle"  class="col-lg-4"></CInput>
            <CInput label="NbMethode_maman" type="number" placeholder="NbMethode_maman" v-model="planificationFamiliale.NbMethode_maman"  class="col-lg-4"></CInput>
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
  name: 'EditPlanificationFamiliale',
  props: {
    caption: {
      type: String,
      default: 'PlanificationFamiliale id'
    },
  },
  data: () => {
    return {
        planificationFamiliale: {
          region_id: null,
          province_id: null,
          commune_id: null,
          district_id: null,
          formation_sanitaire_id: null,
          annee: null,
          mois: null,
          
          type_utilisatrices:null,
          NbPillule_COC:null,
          NbPillule_COP:null,
          NbDMPlule_IM:null,
          NbDMPA_IM:null,
          NbImplant_5ans:null,
          NbImplant_3ans:null,
          NbDIU:null,
          NbPreservatif_Masculin:null,
          NbPreservatif_Feminin:null,
          NbLigature:null,
          NbVasectomie:null,
          NbCollier_Cycle:null,
          NbMethode_maman:null
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
        console.log(self.planificationFamiliale)
        axios.post(  this.$apiAdress + '/api/vaccination_enfants?token=' + localStorage.getItem("api_token"),
          self.planificationFamiliale
        )
        .then(function (response) {
            self.planificationFamiliale = {
            };
            self.planificationFamiliale.region_id = self.regions.length>0?self.regions[0].value:null;
            self.planificationFamiliale.province_id = self.provinces.length>0?self.provinces[0].value:null;
            self.planificationFamiliale.province_id = self.provinces.length>0?self.provinces[0].value:null;
            self.planificationFamiliale.commune_id = self.communes.length>0?self.communes[0].value:null;
            self.planificationFamiliale.district_id = self.districts.length>0?self.districts[0].value:null;
            self.planificationFamiliale.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;

            // self.message = 'Successfully created consultation Prenatale.';
            self.$toasted.show("planification Familiale créé avec succès",{type:"success"});
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
    axios.get(  this.$apiAdress + '/api/vaccination_enfants/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.districts = response.data.districts;
        self.formationSanitaires = response.data.formationSanitaires;
        // Définir valeur par défaut
        self.planificationFamiliale.region_id = self.regions.length>0?self.regions[0].value:null;
        self.planificationFamiliale.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.planificationFamiliale.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.planificationFamiliale.commune_id = self.communes.length>0?self.communes[0].value:null;
        self.planificationFamiliale.district_id = self.districts.length>0?self.districts[0].value:null;
        self.planificationFamiliale.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
