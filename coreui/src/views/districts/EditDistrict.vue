<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardBody>
          <h3>
            Modifier District id:  {{ $route.params.id }}
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
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    update() {
        let self = this;
        console.log(self.district)
        axios.post(  this.$apiAdress + '/api/districts/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        {
            _method: 'PUT',
            code:              self.district.code,
            nom_district:      self.district.nom_district,
            nom_majore:        self.district.nom_majore,
            region_id:         self.district.region_id,
            province_id:       self.district.province_id,
            lon:               self.district.lon,
            lat:               self.district.lat,
            superficie:        self.district.superficie
        })
        .then(function (response) {
            self.message = 'Successfully updated district.';
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
    axios.get(  this.$apiAdress + '/api/districts/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.district = response.data.district;
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
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
