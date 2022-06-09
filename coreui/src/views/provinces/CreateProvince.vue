<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter Province
          </h3>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
            <CInput label="Code" type="text" placeholder="Code" v-model="province.code"></CInput>

            <CSelect
              label="Région" 
              :value.sync="province.region_id"
              :plain="true"
              :options="regions"
            >
            </CSelect>
            <CInput label="Province" type="text" placeholder="province" v-model="province.province"></CInput>
            <CInput label="Chef lieu" type="text" placeholder="Chef lieu" v-model="province.cheflieu"/>
            <CInput label="Longitude" type="text" placeholder="Longitude" v-model="province.lon"/>
            <CInput label="Latitude" type="text" placeholder="Latitude" v-model="province.lat"/>
 
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
  name: 'EditProvince',
  props: {
    caption: {
      type: String,
      default: 'Province id'
    },
  },
  data: () => {
    return {
        province: {
          code: '',
          province: '',
          region_id: '',
          cheflieu: '',
          lon: '',
          lat: '',
        },
        regions: [],
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
        console.log(self.province)
        axios.post(  this.$apiAdress + '/api/provinces?token=' + localStorage.getItem("api_token"),
          self.province
        )
        .then(function (response) {
            self.province = {
              code: '',
              province: '',
              region_id: null,
              lon: '',
              lat: '',
              cheflieu: '',
            };
            self.message = 'Successfully created province.';
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
    axios.get(  this.$apiAdress + '/api/provinces/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data;
        // Definir la valeur par défaut
        self.province.region_id = self.regions.length>0?self.regions[0].value:null;
    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
