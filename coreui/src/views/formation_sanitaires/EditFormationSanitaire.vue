<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardBody>
          <h3>
            Modifier FormationSanitaire id:  {{ $route.params.id }}
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
            
            <CInput label="Code" type="text" placeholder="Code" v-model="formationSanitaire.code"></CInput>
            
            <CSelect
              label="Region" 
              :value.sync="formationSanitaire.region_id"
              :plain="true"
              :options="regions"
            >
            </CSelect>
            
            <CSelect
              label="Province" 
              :value.sync="formationSanitaire.province_id"
              :plain="true"
              :options="provinces"
            >
            </CSelect>
            
            <CSelect
              label="District" 
              :value.sync="formationSanitaire.district_id"
              :plain="true"
              :options="districts"
            >
            </CSelect>

            <CInput label="Nom Structure" type="text" placeholder="Nom Structure" v-model="formationSanitaire.nom_structure"></CInput>
            <CInput label="Longitude" type="text" placeholder="Longitude" v-model="formationSanitaire.lon"></CInput>
            <CInput label="Latitude" type="text" placeholder="Latitude" v-model="formationSanitaire.lat"></CInput>
            <CInput label="Type" type="text" placeholder="Type" v-model="formationSanitaire.type"></CInput>
            <CInput label="Adresse" type="text" placeholder="Adresse" v-model="formationSanitaire.adresse"></CInput>
            <CInput label="Adresse Postale" type="text" placeholder="Adresse Postale" v-model="formationSanitaire.adresse_postale"></CInput>
            <CInput label="Tel" type="text" placeholder="Tel" v-model="formationSanitaire.tel"></CInput>
            <CInput label="Fax" type="text" placeholder="Fax" v-model="formationSanitaire.fax"></CInput>
            <CInput label="Email" type="text" placeholder="Email" v-model="formationSanitaire.email"></CInput>
            <CInput label="Titre" type="text" placeholder="Titre" v-model="formationSanitaire.titre"></CInput>
            <CInput label="Proprietaire" type="text" placeholder="Proprietaire" v-model="formationSanitaire.proprietaire"></CInput>
            <CInput label="Qualification" type="text" placeholder="Qualification" v-model="formationSanitaire.qualificat"></CInput>
            <CInput label="Numero Decision" type="text" placeholder="Numero Decision" v-model="formationSanitaire.n_decision"></CInput>
            <CInput label="Date Autorisation" type="date" placeholder="Date Autorisation" v-model="formationSanitaire.date_autorisation"></CInput>
            <CInput textarea="true" :rows="9" label="Observations Qualification" type="text" placeholder="Observations Qualification" v-model="formationSanitaire.observations_ualification"></CInput>
            <CInput textarea="true" :rows="9" label="Observations Structure" type="text" placeholder="Observations Structure" v-model="formationSanitaire.observations_structure"></CInput>
            <CInput textarea="true" :rows="9" label="Autre Observations" type="text" placeholder="Autre Observations" v-model="formationSanitaire.autre_observations"></CInput>
            <CInput label="Date Fermeture" type="date" placeholder="Date Fermeture" v-model="formationSanitaire.date_fermeture"></CInput>

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
        formationSanitaire: {
          code: '',
          region_id: null,
          province_id: null,
          district_id: null,
          nom_structure: '',
          lon: '',
          lat: '',
          type: '',
          adresse: '',
          adresse_postale: '',
          tel: '',
          fax: '',
          email: '',
          titre: '',
          proprietaire: '',
          qualificat: '',
          n_decision: '',
          date_autorisation: '',
          observations_qualification: '',
          observations_structure: '',
          autre_observations: '',
          date_fermeture: '',
        },
        regions: [],
        provinces: [],
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
        console.log(self.formationSanitaire)
        // axios.post(  this.$apiAdress + '/api/formationSanitaires/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        // {
        //     _method: 'PUT',
        //     code:              self.formationSanitaire.code,
        //     nom_formationSanitaire:      self.formationSanitaire.nom_formationSanitaire,
        //     nom_majore:        self.formationSanitaire.nom_majore,
        //     region_id:         self.formationSanitaire.region_id,
        //     province_id:       self.formationSanitaire.province_id,
        //     lon:               self.formationSanitaire.lon,
        //     lat:               self.formationSanitaire.lat,
        //     superficie:        self.formationSanitaire.superficie
        // })
        axios.put(  this.$apiAdress + '/api/formation_sanitaires/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.formationSanitaire)
        .then(function (response) {
            self.message = 'Successfully updated Formation Sanitaire.';
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
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/formation_sanitaires/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response.data)
        self.formationSanitaire = response.data.formationSanitaire;
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.districts = response.data.districts;
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
