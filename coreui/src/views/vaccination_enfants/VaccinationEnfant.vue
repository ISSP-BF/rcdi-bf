<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
          <CCardHeader><h4>Détail de la VaccinationEnfant id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>Region : </h5></div>
            <div class="col-lg-6">{{vaccinationEnfant.region}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province : </h5></div>
            <div class="col-lg-6">{{vaccinationEnfant.province}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune : </h5></div>
            <div class="col-lg-6">{{vaccinationEnfant.commune}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>District : </h5></div>
            <div class="col-lg-6">{{vaccinationEnfant.district}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Formation Sanitaire : </h5></div>
            <div class="col-lg-6">{{vaccinationEnfant.formationSanitaire}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbBCG : </h5></div>
            <div class="col-lg-6">{{vaccinationEnfant.NbBCG}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbDTCHepBHib1 : </h5></div>
            <div class="col-lg-6">{{vaccinationEnfant.NbDTCHepBHib1}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbDTCHepBHib : </h5></div>
            <div class="col-lg-6">{{vaccinationEnfant.NbDTCHepBHib}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbRR1 : </h5></div>
            <div class="col-lg-6">{{vaccinationEnfant.NbRR1}}</div>
          </div>
          
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          <div class="row float-right">
            
            <div>Créateur : </div>
            <div>{{vaccinationEnfant.created_by}} <CBadge color="primary">{{vaccinationEnfant.created_at|formatDate}}</CBadge></div>
          
            <div>Modificateur : </div>
            <div>{{vaccinationEnfant.updated_by}} 
            <CBadge color="danger">{{vaccinationEnfant.updated_at|formatDate}}</CBadge>
            </div>
          </div>
          </CCardFooter>      
      </CCard>


    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
      vaccinationEnfant: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/vaccination_enfants/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.vaccinationEnfant = response.data;
      console.log(response)
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
