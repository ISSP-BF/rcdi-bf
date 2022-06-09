<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardBody>
          <h3>
            Modifier Province id:  {{ $route.params.id }}
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
            <CInput label="Code" type="text" placeholder="Code" v-model="province.code"/>
            <CSelect 
              :value.sync="province.region_id"
              :options="regions"
              label="Region"
            />
            <CInput label="Province" type="text" placeholder="Province" v-model="province.province"/>
            <CInput label="Chef lieu" type="text" placeholder="Chef lieu" v-model="province.cheflieu"/>
            <CInput label="Longitude" type="text" placeholder="Longitude" v-model="province.lon"/>
            <CInput label="Latitude" type="text" placeholder="Latitude" v-model="province.lat"/>
             
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
        province: {
          code: '',
          region_id: '',
          province: '',
          cheflieu: null,
          lon: '',
          lat: '',
        },
        regions: [],
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
        axios.post(  this.$apiAdress + '/api/provinces/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        {
            _method: 'PUT',
            code:            self.province.code,
            region_id:          self.province.region_id,
            province:  self.province.province,
            cheflieu:        self.province.cheflieu,
            lon:        self.province.lon,
            lat:        self.province.lat
        })
        .then(function (response) {
            self.message = 'Successfully updated province.';
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
              self.$router.push({ path: '/login' }); 
            }
        });
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/provinces/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.province = response.data.province;
        self.regions = response.data.regions;
    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
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
