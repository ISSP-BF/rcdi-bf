<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardBody>
          <h3>
            Modifier SousIndicateur id:  {{ $route.params.id }}
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
            <CInput label="Code" type="text" placeholder="Code" v-model="sousIndicateur.code"/>
            <CSelect 
              :value.sync="sousIndicateur.region_id"
              :options="regions"
              label="Region"
            />
            <CInput label="SousIndicateur" type="text" placeholder="SousIndicateur" v-model="sousIndicateur.sousIndicateur"/>
            <CInput label="Chef lieu" type="text" placeholder="Chef lieu" v-model="sousIndicateur.cheflieu"/>
            <CInput label="Longitude" type="text" placeholder="Longitude" v-model="sousIndicateur.lon"/>
            <CInput label="Latitude" type="text" placeholder="Latitude" v-model="sousIndicateur.lat"/>
             
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
        sousIndicateur: {
          code: '',
          region_id: '',
          sousIndicateur: '',
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
        axios.post(  this.$apiAdress + '/api/sous_indicateurs/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        {
            _method: 'PUT',
            code:            self.sousIndicateur.code,
            region_id:          self.sousIndicateur.region_id,
            sousIndicateur:  self.sousIndicateur.sousIndicateur,
            cheflieu:        self.sousIndicateur.cheflieu,
            lon:        self.sousIndicateur.lon,
            lat:        self.sousIndicateur.lat
        })
        .then(function (response) {
            self.message = 'Successfully updated sousIndicateur.';
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
    axios.get(  this.$apiAdress + '/api/sous_indicateurs/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.sousIndicateur = response.data.sousIndicateur;
        self.regions = response.data.regions;
    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
    });
  }
}


</script>
