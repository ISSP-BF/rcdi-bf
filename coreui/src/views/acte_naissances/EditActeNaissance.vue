<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardBody>
          <h3>
            Modifier ActeNaissance id:  {{ $route.params.id }}
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
            <CInput label="Date déclaration" type="date" placeholder="Date déclaration" v-model="acteNaissance.date_declaration"
                  invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeEnCourValidator"></CInput>
            <CInput label="Nom" type="text" placeholder="Nom" v-model="acteNaissance.nom"></CInput>
            <CInput label="Prénom (s)" type="text" placeholder="Prénom (s)" v-model="acteNaissance.prenom"></CInput>
            <CInput label="Date naissance" type="date" placeholder="Date naissance" v-model="acteNaissance.date_naissance"
                  invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeEnCourValidator"></CInput>
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

            <CInput label="Date Etablissement" type="date" placeholder="Date Etablissement" v-model="acteNaissance.date_etablissement"
                  invalid-feedback="Veuillez saisir une année valide"
                  :is-valid="anneeEnCourValidator"></CInput>
            
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
        acteNaissance: {
          region_id: null,
          province_id: null,
          district_id: null,
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
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    selectRadioSelectRole(role){
      console.log(role)
    },
    update() {
        let self = this;
        console.log(self.acteNaissance)
        
        // axios.post(  this.$apiAdress + '/api/acteNaissances/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        // {
        //     _method: 'PUT',
        //     code:              self.acteNaissance.code,
        //     nom_acteNaissance:      self.acteNaissance.nom_acteNaissance,
        //     nom_majore:        self.acteNaissance.nom_majore,
        //     region_id:         self.acteNaissance.region_id,
        //     province_id:       self.acteNaissance.province_id,
        //     lon:               self.acteNaissance.lon,
        //     lat:               self.acteNaissance.lat,
        //     superficie:        self.acteNaissance.superficie
        // })
        axios.put(  this.$apiAdress + '/api/acte_naissances/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.acteNaissance)
        .then(function (response) {
            self.message = 'Successfully updated Acte Naissance.';
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
              // self.$router.push({ path: '/login' }); 
            }
        });
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    anneeEnCourValidator (val) {
      // console.log(new Date(val))
      // return val ? new Date(val)<=new Date()&&val>=new Date("December 25, 1900 23:15:00") : null
      return val ? new Date(val)<=new Date()?null:false : null
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/acte_naissances/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response.data)
        self.acteNaissance = response.data.acteNaissance;
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
    }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: 'login' });
    });
  }
}

/*
      items: (id) => {
        const user = usersData.find( user => user.id.toString() === id)
        const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
        return userDetails.map(([key, value]) => {return {key: key, value: value}})
      },
*/

</script>
