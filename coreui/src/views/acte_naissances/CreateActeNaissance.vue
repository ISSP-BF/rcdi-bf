<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter Acte Naissance
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
            
            <CSelect
              label="Region" 
              :value.sync="acteNaissance.region_id"
              :plain="true"
              :options="regions"
              v-model="acteNaissance.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province" 
              :value.sync="acteNaissance.province_id"
              :plain="true"
              :options="provinces"
              v-model="acteNaissance.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune" 
              :value.sync="acteNaissance.commune_id"
              :plain="true"
              :options="communes"
              v-model="acteNaissance.commune_id"
            >
            </CSelect>

            <CInput label="Numero Acte" type="text" placeholder="Numero Acte" v-model="acteNaissance.n_acte"></CInput>
            <CInput label="Date déclaration" type="date" placeholder="Date déclaration" v-model="acteNaissance.date_declaration"></CInput>
            <CInput label="Nom" type="text" placeholder="Nom" v-model="acteNaissance.nom"></CInput>
            <CInput label="Prénom (s)" type="text" placeholder="Prénom (s)" v-model="acteNaissance.prenom"></CInput>
            <CInput label="Date naissance" type="date" placeholder="Date naissance" v-model="acteNaissance.date_naissance"></CInput>
            <CInput label="Lieu naissance (Commune)" type="text" placeholder="Lieu naissance (Commune)" v-model="acteNaissance.lieu_naissance_commune"></CInput>
            <CInput label="Centre sante naissance" type="text" placeholder="Centre sante naissance" v-model="acteNaissance.centre_sante_naissance"></CInput>

            <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Sexe
                  </CCol>
                  <CCol sm="9" :class="'form-inline'">

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="homme" type="radio" class="custom-control-input" v-model="acteNaissance.sexe" value="M">
                      <label for="homme" class="custom-control-label"> Homme </label>
                    </div>

                    <div role="group" class="custom-control custom-control-inline custom-radio">
                      <input id="femme" type="radio" class="custom-control-input" v-model="acteNaissance.sexe" value="F">
                      <label for="femme" class="custom-control-label"> Femme </label>
                    </div>
                  </CCol>
                </div>
            </template>
            <CInput label="Date Etablissement" type="date" placeholder="Date Etablissement" v-model="acteNaissance.date_etablissement"></CInput>
            
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
  name: 'EditActeNaissance',
  props: {
    caption: {
      type: String,
      default: 'ActeNaissance id'
    },
  },
  data: () => {
    return {
        acteNaissance: {
          region_id: null,
          province_id: null,
          commune_id: null,
          n_acte: '',
          date_declaration: '',
          nom: '',
          prenom: '',
          date_naissance: '',
          lieu_naissance_commune: '',
          centre_sante_naissance: '',
          date_etablissement: '',
          sexe: '',
        },
        regions: [],
        provinces: [],
        communes: [],
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
        console.log(self.acteNaissance)
        axios.post(  this.$apiAdress + '/api/acte_naissances?token=' + localStorage.getItem("api_token"),
          self.acteNaissance
        )
        .then(function (response) {
            self.acteNaissance = {
              code: '',
              nom_acteNaissance: '',
              nom_majore: '',
              region_id: null,
              province_id: null,
              lon: '',
              lat: '',
            };
            self.message = 'Successfully created acteNaissance.';
            self.showAlert();
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
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
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/acte_naissances/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        // Définir valeur par défaut
        self.acteNaissance.region_id = self.regions.length>0?self.regions[0].value:null;
        self.acteNaissance.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.acteNaissance.commune_id = self.communes.length>0?self.communes[0].value:null;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
