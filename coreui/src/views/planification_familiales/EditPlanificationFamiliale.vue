<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
         <CCardHeader>
          
          <h5>
          Modifier la planification Familiale id:  {{ $route.params.id }}
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
            <div role="group" class="col-lg-4 form-group">
              <label class="row col custom-control-inline"> Type Utilisatrices </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="type_utilisatricesO" type="radio" class="custom-control-input"
                    v-model="planificationFamiliale.type_utilisatrices" :value="'ANCIENNE'">
                  <label for="type_utilisatricesO" class="custom-control-label"> ANCIENNE </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="type_utilisatricesN" type="radio" class="custom-control-input"
                    v-model="planificationFamiliale.type_utilisatrices" :value="'NOUVELLE'">
                  <label for="type_utilisatricesN" class="custom-control-label"> NOUVELLE </label>
                </div>
            </div>
            <CInput label="Pilules contraceptives orales Combinées (COC)" type="number" placeholder="NbPillule_COC" v-model="planificationFamiliale.NbPillule_COC"  class="col-lg-4"></CInput>
            <CInput label="Pilules contraceptives orales Progestatives (COP)" type="number" placeholder="NbPillule_COP" v-model="planificationFamiliale.NbPillule_COP"  class="col-lg-4"></CInput>
            <CInput label="DMPA IM" type="number" placeholder="NbDMPlule_IM" v-model="planificationFamiliale.NbDMPlule_IM"  class="col-lg-4"></CInput>
            <CInput label="DMPA sous-cutanés" type="number" placeholder="NbDMPA_IM" v-model="planificationFamiliale.NbDMPA_IM"  class="col-lg-4"></CInput>
            <CInput label="Implant pour 5 ans (Jadelle)" type="number" placeholder="NbImplant_5ans" v-model="planificationFamiliale.NbImplant_5ans"  class="col-lg-4"></CInput>
            <CInput label="Implant pour 3 ans (Implanon)" type="number" placeholder="NbImplant_3ans" v-model="planificationFamiliale.NbImplant_3ans"  class="col-lg-4"></CInput>
            <CInput label="Dispositif Intra-utérin (DIU)" type="number" placeholder="NbDIU" v-model="planificationFamiliale.NbDIU"  class="col-lg-4"></CInput>
            <CInput label="Préservatif masculin" type="number" placeholder="NbPreservatif_Masculin" v-model="planificationFamiliale.NbPreservatif_Masculin"  class="col-lg-4"></CInput>
            <CInput label="Préservatif féminin" type="number" placeholder="NbPreservatif_Feminin" v-model="planificationFamiliale.NbPreservatif_Feminin"  class="col-lg-4"></CInput>
            <CInput label="Stérilisation féminine (Ligature)" type="number" placeholder="NbLigature" v-model="planificationFamiliale.NbLigature"  class="col-lg-4"></CInput>
            <CInput label="Stérilisation masculine (Vasectomie)" type="number" placeholder="NbVasectomie" v-model="planificationFamiliale.NbVasectomie"  class="col-lg-4"></CInput>
            <CInput label="Collier du Cycle" type="number" placeholder="NbCollier_Cycle" v-model="planificationFamiliale.NbCollier_Cycle"  class="col-lg-4"></CInput>
            <CInput label="Méthode MAMA" type="number" placeholder="NbMethode_maman" v-model="planificationFamiliale.NbMethode_maman"  class="col-lg-4"></CInput>
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
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    update() {
        let self = this;

        axios.put(  this.$apiAdress + '/api/planification_familiales/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.planificationFamiliale)
        .then(function (response) {
            self.message = 'Successfully updated Planification Familiale.';
            self.showAlert();
            self.$toasted.show("planification Familiale a été mise à jour avec succès",{type:"success"});
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
    axios.get(  this.$apiAdress + '/api/planification_familiales/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response.data)
        self.planificationFamiliale = response.data.planificationFamiliale;
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
