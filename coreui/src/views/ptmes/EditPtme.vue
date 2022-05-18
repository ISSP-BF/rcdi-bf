<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          
          <h5>
          Modifier la Prévention de la transmission mere enfant id:  {{ $route.params.id }}
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
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    update() {
        let self = this;

        axios.put(  this.$apiAdress + '/api/ptmes/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.ptme)
        .then(function (response) {
            self.message = 'Successfully updated Formation Sanitaire.';
            self.showAlert();
            self.$toasted.show("Prévention de la transmission mere enfant a été mise à jour avec succès",{type:"success"});
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
    axios.get(  this.$apiAdress + '/api/ptmes/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response.data)
        self.ptme = response.data.ptme;
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
