<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          
          <h5>
           Ajouter une Consultation Prenatale
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
              :value.sync="consultationPrenatale.region_id"
              :plain="true"
              :options="regions"
              v-model="consultationPrenatale.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province"  class="col-lg-3"
              :value.sync="consultationPrenatale.province_id"
              :plain="true"
              :options="provinces"
              v-model="consultationPrenatale.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune"  class="col-lg-3"
              :value.sync="consultationPrenatale.commune_id"
              :plain="true"
              :options="communes"
              v-model="consultationPrenatale.commune_id"
            >
            </CSelect>
            
            <CSelect
              label="District"  class="col-lg-3"
              :value.sync="consultationPrenatale.district_id"
              :plain="true"
              :options="districts"
              v-model="consultationPrenatale.district_id"
            >
            </CSelect>
            
            <CSelect
              label="Formation Sanitaire"  class="col-lg-3"
              :value.sync="consultationPrenatale.formation_sanitaire_id"
              :plain="true"
              :options="formationSanitaires"
              v-model="consultationPrenatale.formation_sanitaire_id"
            >
            </CSelect>

            <CInput label="Annee" type="number" placeholder="Annee" v-model="consultationPrenatale.annee" class="col-lg-3"
                  invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeValidator"></CInput>
            <CInput label="Mois" type="number" placeholder="Mois" v-model="consultationPrenatale.mois" class="col-lg-3"
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
            <CInput label="Nombre de femmes vues en CPN" type="number" placeholder="NbFemmeVueCPN" v-model="consultationPrenatale.NbFemmeVueCPN"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes inscrites en CPN1" type="number" placeholder="NbFemmeInscriteCPN1" v-model="consultationPrenatale.NbFemmeInscriteCPN1"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes inscrites en CPN1 au 1er trimestre de la grossesse" type="number" placeholder="NbFemmeInscriteCPN1_Trim1" v-model="consultationPrenatale.NbFemmeInscriteCPN1_Trim1"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes vues en CPN 4" type="number" placeholder="NbFemmeVueCPN4" v-model="consultationPrenatale.NbFemmeVueCPN4"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes inscrites en CPN ayant reçu au moins 2 doses de Tétanos diphtérie (Td)" type="number" placeholder="NbFemmeInscriteVueCPN_2Td" v-model="consultationPrenatale.NbFemmeInscriteVueCPN_2Td"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes enceintes supplémentées pour la première fois en Fer + Acide Folique/MMS" type="number" placeholder="NbFemmeFer_Acide_Folique" v-model="consultationPrenatale.NbFemmeFer_Acide_Folique"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes enceintes supplémentées en Fer + Acide Folique/MMS au cours de la troisième CPN (CPN3)" type="number" placeholder="NbFemmeFer_Acide_Folique_CPN3" v-model="consultationPrenatale.NbFemmeFer_Acide_Folique_CPN3"  class="col-lg-4"></CInput>
            <CInput label="Nombre de grossesses avec complications référées" type="number" placeholder="NbGrossesse_Refere" v-model="consultationPrenatale.NbGrossesse_Refere"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes vues en CPN ayant reçu TPI3" type="number" placeholder="NbFemmeVueCPN_TPI3" v-model="consultationPrenatale.NbFemmeVueCPN_TPI3"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes vues en CPN ayant reçu une MILDA" type="number" placeholder="NbFemmeVueCPN_TPI3_MILDA" v-model="consultationPrenatale.NbFemmeVueCPN_TPI3_MILDA"  class="col-lg-4"></CInput>
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
  name: 'EditConsultationPrenatale',
  props: {
    caption: {
      type: String,
      default: 'ConsultationPrenatale id'
    },
  },
  data: () => {
    return {
        consultationPrenatale: {
          region_id: null,
          province_id: null,
          commune_id: null,
          district_id: null,
          formation_sanitaire_id: null,
          annee: null,
          mois: null,
          NbFemmeVueCPN: null,
          NbFemmeInscriteCPN1: null,
          NbFemmeInscriteCPN1_Trim1: null,
          NbFemmeVueCPN4: null,
          NbFemmeInscriteVueCPN_2Td: null,
          NbFemmeFer_Acide_Folique: null,
          NbFemmeFer_Acide_Folique_CPN3: null,
          NbGrossesse_Refere: null,
          NbFemmeVueCPN_TPI3: null,
          NbFemmeVueCPN_TPI3_MILDA: null
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
        console.log(self.consultationPrenatale)
        axios.post(  this.$apiAdress + '/api/consultation_prenatales?token=' + localStorage.getItem("api_token"),
          self.consultationPrenatale
        )
        .then(function (response) {
            self.consultationPrenatale = {
            };
            // self.message = 'Successfully created consultation Prenatale.';
            self.$toasted.show("Consultation Prenatale créé avec succès",{type:"success"});
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
    axios.get(  this.$apiAdress + '/api/consultation_prenatales/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.districts = response.data.districts;
        self.formationSanitaires = response.data.formationSanitaires;
        // Définir valeur par défaut
        self.consultationPrenatale.region_id = self.regions.length>0?self.regions[0].value:null;
        self.consultationPrenatale.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.consultationPrenatale.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.consultationPrenatale.commune_id = self.communes.length>0?self.communes[0].value:null;
        self.consultationPrenatale.district_id = self.districts.length>0?self.districts[0].value:null;
        self.consultationPrenatale.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
