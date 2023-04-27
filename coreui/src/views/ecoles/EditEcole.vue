<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          <h5>
            Modifier une Ecole
          </h5>
        </CCardHeader>
        <CCardBody> 

            <CInput label="Code" type="text" placeholder="Code" v-model="ecole.code"></CInput>
              
            <CInput label="Nom Structure" type="text" placeholder="Nom Structure" v-model="ecole.nom_structure"></CInput>
            <div role="group" class="col-lg-12 form-group">
              <label class="row col custom-control-inline"> Statut </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="statutPUBLIC" type="radio" class="custom-control-input"
                    v-model="ecole.statut" :value="'PUBLIC'">
                  <label for="statutPUBLIC" class="custom-control-label"> Public </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="statutPRIVE" type="radio" class="custom-control-input"
                    v-model="ecole.statut" :value="'PRIVE'">
                  <label for="statutPRIVE" class="custom-control-label"> Privé </label>
                </div>
            </div>

            <div role="group" class="col-lg-12 form-group">
              <label class="row col custom-control-inline"> Système </label>
              <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typeCLASSIQUE" type="radio" class="custom-control-input"
                    v-model="ecole.systeme" :value="'CLASSIQUE'">
                  <label for="typeCLASSIQUE" class="custom-control-label"> Classique </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typeBILINGUE" type="radio" class="custom-control-input"
                    v-model="ecole.systeme" :value="'BILINGUE'">
                  <label for="typeBILINGUE" class="custom-control-label"> Bilingue </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typeFRANCOARABE" type="radio" class="custom-control-input"
                    v-model="ecole.systeme" :value="'FRANCOARABE'">
                  <label for="typeFRANCOARABE" class="custom-control-label"> Franco Arabe </label>
                </div>
                <div role="group" class="custom-control custom-control-inline custom-radio">
                  <input id="typePASSERELLE" type="radio" class="custom-control-input"
                    v-model="ecole.systeme" :value="'PASSERELLE'">
                  <label for="typePASSERELLE" class="custom-control-label"> Passerelle </label>
                </div>
            </div>
            
            <CInput label="Longitude" type="text" placeholder="Longitude" v-model="ecole.lon"></CInput>
            <CInput label="Latitude" type="text" placeholder="Latitude" v-model="ecole.lat"></CInput>
  
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
  name: 'EditEcole',
  props: {
    caption: {
      type: String,
      default: 'Ecole id'
    },
  },
  data: () => {
    return {
      ecole: { 
          code: '',
          region_id: null,
          province_id: null, 
          nom_structure: '',
          lon: '',
          lat: '',
          statut: '',
          systeme: '' 
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
          },
    update() {
        let self = this;
        axios.put(  this.$apiAdress + '/api/ecoles/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.ecole)
        .then(function (response) {
            
          self.$toasted.show("Une école a été modifiée avec succès", {
            type: "success",
          });

        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
          self.$toasted.show(self.message, {
            type: "error",
          });
            }else{
              
          self.$toasted.show(self.message, {
            type: "error",
          });
              console.log(error); 
              // self.$router.push({ path: '/login' }); 
            }
        });
    }, 
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/ecoles/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      
        self.ecole = response.data;

    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
} 
</script>
