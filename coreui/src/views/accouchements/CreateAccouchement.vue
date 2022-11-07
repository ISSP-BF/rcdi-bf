<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          
          <h5>
           Ajouter une Accouchement
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
              :value.sync="Accouchement.region_id"
              :plain="true"
              :options="regions"
              v-model="Accouchement.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province"  class="col-lg-3"
              :value.sync="Accouchement.province_id"
              :plain="true"
              :options="provinces"
              v-model="Accouchement.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune"  class="col-lg-3"
              :value.sync="Accouchement.commune_id"
              :plain="true"
              :options="communes"
              v-model="Accouchement.commune_id"
            >
            </CSelect>
            
            <CSelect
              label="District"  class="col-lg-3"
              :value.sync="Accouchement.district_id"
              :plain="true"
              :options="districts"
              v-model="Accouchement.district_id"
            >
            </CSelect>
            
            <CSelect
              label="Formation Sanitaire"  class="col-lg-3"
              :value.sync="Accouchement.formation_sanitaire_id"
              :plain="true"
              :options="formationSanitaires"
              v-model="Accouchement.formation_sanitaire_id"
            >
            </CSelect>

            <CInput label="Annee" type="number" placeholder="Annee" v-model="Accouchement.annee" class="col-lg-3"
                  invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeValidator"></CInput>
            <CInput label="Mois" type="number" placeholder="Mois" v-model="Accouchement.mois" class="col-lg-3"
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
            <CInput label="Nombre d’accouchements normaux dans la formation sanitaire" type="number" placeholder="NbAccouchement_Normaux" v-model="Accouchement.NbAccouchement_Normaux"  class="col-lg-4"></CInput>
            <CInput label="Nombre d’accouchements assistés à l’aide d’instruments et/ou de produits" type="number" placeholder="NbAccouchement_Assiste" v-model="Accouchement.NbAccouchement_Assiste"  class="col-lg-4"></CInput>
            <CInput label="Nombre d’accouchements par césarienne" type="number" placeholder="NbAccouchement_Cesarienne" v-model="Accouchement.NbAccouchement_Cesarienne"  class="col-lg-4"></CInput>
            <CInput label="Nombre d’accouchements avec partogramme" type="number" placeholder="NbAccouchement_Partogramme" v-model="Accouchement.NbAccouchement_Partogramme"  class="col-lg-4"></CInput>
            <CInput label="Nombre de naissances vivantes" type="number" placeholder="NNaissance_vivante" v-model="Accouchement.NNaissance_vivante"  class="col-lg-4"></CInput>
            <CInput label="Nombre de mort-nés frais" type="number" placeholder="NbMortNe_frais" v-model="Accouchement.NbMortNe_frais"  class="col-lg-4"></CInput>
            <CInput label="Nombre de mort-nés macérés" type="number" placeholder="NbMortNe_Macere" v-model="Accouchement.NbMortNe_Macere"  class="col-lg-4"></CInput>
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
  name: 'EditAccouchement',
  props: {
    caption: {
      type: String,
      default: 'Accouchement id'
    },
  },
  data: () => {
    return {
        Accouchement: {
          region_id: null,
          province_id: null,
          commune_id: null,
          district_id: null,
          formation_sanitaire_id: null,
          annee: null,
          mois: null,
          NbAccouchement_Normaux:null,
          NbAccouchement_Assiste:null,
          NbAccouchement_Cesarienne:null,
          NbAccouchement_Partogramme:null,
          NNaissance_vivante:null,
          NbMortNe_frais:null,
          NbMortNe_Macere:null,
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
        // console.log(self.Accouchement)
        axios.post(  this.$apiAdress + '/api/accouchements?token=' + localStorage.getItem("api_token"),
          self.Accouchement
        )
        .then(function (response) {
            self.Accouchement = {
            };
            // self.message = 'Successfully created consultation Prenatale.';
            self.$toasted.show("Accouchement créé avec succès",{type:"success"});
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
    axios.get(  this.$apiAdress + '/api/accouchements/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.districts = response.data.districts;
        self.formationSanitaires = response.data.formationSanitaires;
        // Définir valeur par défaut
        self.Accouchement.region_id = self.regions.length>0?self.regions[0].value:null;
        self.Accouchement.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.Accouchement.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.Accouchement.commune_id = self.communes.length>0?self.communes[0].value:null;
        self.Accouchement.district_id = self.districts.length>0?self.districts[0].value:null;
        self.Accouchement.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
