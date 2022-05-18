<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          
          <h5>
           Ajouter une morbilite paludisme
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
              :value.sync="indicateurCarteSanitaire.region_id"
              :plain="true"
              :options="regions"
              v-model="indicateurCarteSanitaire.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province"  class="col-lg-3"
              :value.sync="indicateurCarteSanitaire.province_id"
              :plain="true"
              :options="provinces"
              v-model="indicateurCarteSanitaire.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune"  class="col-lg-3"
              :value.sync="indicateurCarteSanitaire.commune_id"
              :plain="true"
              :options="communes"
              v-model="indicateurCarteSanitaire.commune_id"
            >
            </CSelect>
            
            <CSelect
              label="District"  class="col-lg-3"
              :value.sync="indicateurCarteSanitaire.district_id"
              :plain="true"
              :options="districts"
              v-model="indicateurCarteSanitaire.district_id"
            >
            </CSelect>
            
            <CSelect
              label="Formation Sanitaire"  class="col-lg-3"
              :value.sync="indicateurCarteSanitaire.formation_sanitaire_id"
              :plain="true"
              :options="formationSanitaires"
              v-model="indicateurCarteSanitaire.formation_sanitaire_id"
            >
            </CSelect>

            <CInput label="Annee" type="number" placeholder="Annee" v-model="indicateurCarteSanitaire.annee" class="col-lg-3"
                  invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeValidator"></CInput>
            <CInput label="Mois" type="number" placeholder="Mois" v-model="indicateurCarteSanitaire.mois" class="col-lg-3"
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
            <CInput label="NbLit_SuiteCouche" type="number" placeholder="NbLit_SuiteCouche" v-model="indicateurCarteSanitaire.NbLit_SuiteCouche"  class="col-lg-4"></CInput>
            <CInput label="NbLit_HospiMaternite" type="number" placeholder="NbLit_HospiMaternite" v-model="indicateurCarteSanitaire.NbLit_HospiMaternite"  class="col-lg-4"></CInput>
            <CInput label="NbLit_HospiAutreService" type="number" placeholder="NbLit_HospiAutreService" v-model="indicateurCarteSanitaire.NbLit_HospiAutreService"  class="col-lg-4"></CInput>
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
  name: 'EditIndicateurCarteSanitaire',
  props: {
    caption: {
      type: String,
      default: 'IndicateurCarteSanitaire id'
    },
  },
  data: () => {
    return {
        indicateurCarteSanitaire: {
          region_id: null,
          province_id: null,
          commune_id: null,
          district_id: null,
          formation_sanitaire_id: null,
          annee: null,
          mois: null,
          NbLit_SuiteCouche:null,
          NbLit_HospiMaternite:null,
          NbLit_HospiAutreService:null,
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
        console.log(self.indicateurCarteSanitaire)
        axios.post(  this.$apiAdress + '/api/indicateur_carte_sanitaires?token=' + localStorage.getItem("api_token"),
          self.indicateurCarteSanitaire
        )
        .then(function (response) {
            self.indicateurCarteSanitaire = {
            };
            self.indicateurCarteSanitaire.region_id = self.regions.length>0?self.regions[0].value:null;
            self.indicateurCarteSanitaire.province_id = self.provinces.length>0?self.provinces[0].value:null;
            self.indicateurCarteSanitaire.province_id = self.provinces.length>0?self.provinces[0].value:null;
            self.indicateurCarteSanitaire.commune_id = self.communes.length>0?self.communes[0].value:null;
            self.indicateurCarteSanitaire.district_id = self.districts.length>0?self.districts[0].value:null;
            self.indicateurCarteSanitaire.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;

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
    axios.get(  this.$apiAdress + '/api/indicateur_carte_sanitaires/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.districts = response.data.districts;
        self.formationSanitaires = response.data.formationSanitaires;
        // Définir valeur par défaut
        self.indicateurCarteSanitaire.region_id = self.regions.length>0?self.regions[0].value:null;
        self.indicateurCarteSanitaire.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.indicateurCarteSanitaire.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.indicateurCarteSanitaire.commune_id = self.communes.length>0?self.communes[0].value:null;
        self.indicateurCarteSanitaire.district_id = self.districts.length>0?self.districts[0].value:null;
        self.indicateurCarteSanitaire.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
