<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          
          <h5>
           Ajouter une Prévention de la transmission mere enfant
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
              :value.sync="ptme.region_id"
              :plain="true"
              :options="regions"
              v-model="ptme.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province"  class="col-lg-3"
              :value.sync="ptme.province_id"
              :plain="true"
              :options="provinces"
              v-model="ptme.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune"  class="col-lg-3"
              :value.sync="ptme.commune_id"
              :plain="true"
              :options="communes"
              v-model="ptme.commune_id"
            >
            </CSelect>
            
            <CSelect
              label="District"  class="col-lg-3"
              :value.sync="ptme.district_id"
              :plain="true"
              :options="districts"
              v-model="ptme.district_id"
            >
            </CSelect>
            
            <CSelect
              label="Formation Sanitaire"  class="col-lg-3"
              :value.sync="ptme.formation_sanitaire_id"
              :plain="true"
              :options="formationSanitaires"
              v-model="ptme.formation_sanitaire_id"
            >
            </CSelect>

            <CInput label="Annee" type="number" placeholder="Annee" v-model="ptme.annee" class="col-lg-3"
                  invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeValidator"></CInput>
            <CInput label="Mois" type="number" placeholder="Mois" v-model="ptme.mois" class="col-lg-3"
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
            <CInput label="Nombre de femmes enceintes déjà connues séropositives vues en CPN1" type="number" placeholder="NbFemmeEnceinte_VIHPositif_CPN1" v-model="ptme.NbFemmeEnceinte_VIHPositif_CPN1"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes vues en CPN au cours du mois et ayant bénéficié d’un test VIH" type="number" placeholder="NbFemmeVueCPN_TestVIH" v-model="ptme.NbFemmeVueCPN_TestVIH"  class="col-lg-4"></CInput>
            <CInput label="Nombre de femmes vues en CPN au cours du mois testées VIH+" type="number" placeholder="NbFemmeVueCPN_TestVIH_Positif" v-model="ptme.NbFemmeVueCPN_TestVIH_Positif"  class="col-lg-4"></CInput>
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
  name: 'EditPTME',
  props: {
    caption: {
      type: String,
      default: 'PTME id'
    },
  },
  data: () => {
    return {
        ptme: {
          region_id: null,
          province_id: null,
          commune_id: null,
          district_id: null,
          formation_sanitaire_id: null,
          annee: null,
          mois: null,
          NbFemmeEnceinte_VIHPositif_CPN1: null,
          NbFemmeVueCPN_TestVIH: null,
          NbFemmeVueCPN_TestVIH_Positif: null
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
        console.log(self.ptme)
        axios.post(  this.$apiAdress + '/api/ptmes?token=' + localStorage.getItem("api_token"),
          self.ptme
        )
        .then(function (response) {
            self.ptme = {
            };
            // self.message = 'Successfully created consultation Prenatale.';
            self.$toasted.show("Prévention de la transmission mere enfant créé avec succès",{type:"success"});
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
    axios.get(  this.$apiAdress + '/api/ptmes/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.districts = response.data.districts;
        self.formationSanitaires = response.data.formationSanitaires;
        // Définir valeur par défaut
        self.ptme.region_id = self.regions.length>0?self.regions[0].value:null;
        self.ptme.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.ptme.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.ptme.commune_id = self.communes.length>0?self.communes[0].value:null;
        self.ptme.district_id = self.districts.length>0?self.districts[0].value:null;
        self.ptme.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
