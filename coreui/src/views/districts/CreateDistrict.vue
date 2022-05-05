<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter District
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>

            <CInput label="Code" type="text" placeholder="Code" v-model="district.code"></CInput>
            
            <CSelect
              label="Region" 
              :value.sync="district.region_id"
              :plain="true"
              :options="regions"
            >
            </CSelect>
            
            <CSelect
              label="Province" 
              :value.sync="district.province_id"
              :plain="true"
              :options="provinces"
            >
            </CSelect>

            <CInput label="Nom District" type="text" placeholder="Nom District" v-model="district.nom_district"></CInput>
            <CInput label="Nom Majore" type="text" placeholder="Nom Majore" v-model="district.nom_majore"></CInput>
            <CInput label="Longitude" type="text" placeholder="Longitude" v-model="district.lon"></CInput>
            <CInput label="Latitude" type="text" placeholder="Latitude" v-model="district.lat"></CInput>
            <CInput label="Superficie" type="text" placeholder="Superficie" v-model="district.superficie"></CInput>

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
  name: 'EditDistrict',
  props: {
    caption: {
      type: String,
      default: 'District id'
    },
  },
  data: () => {
    return {
        district: {
          code: '',
          nom_district: '',
          nom_majore: '',
          region_id: null,
          province_id: null,
          lon: '',
          lat: '',
          superficie: '',
        },
        regions: [],
        provinces: [],
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
        showDismissibleAlert: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    store() {
        let self = this;
        console.log(self.district)
        axios.post(  this.$apiAdress + '/api/districts?token=' + localStorage.getItem("api_token"),
          self.district
        )
        .then(function (response) {
            self.district = {
              code: '',
              nom_district: '',
              nom_majore: '',
              region_id: null,
              province_id: null,
              lon: '',
              lat: '',
              superficie: '',
            };
            self.message = 'Successfully created district.';
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
    axios.get(  this.$apiAdress + '/api/districts/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
