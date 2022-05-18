<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
          <CCardHeader><h4>Détail de la Systeme Information Sanitaire id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>Region : </h5></div>
            <div class="col-lg-6">{{systemeInformationSanitaire.region}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province : </h5></div>
            <div class="col-lg-6">{{systemeInformationSanitaire.province}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune : </h5></div>
            <div class="col-lg-6">{{systemeInformationSanitaire.commune}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>District : </h5></div>
            <div class="col-lg-6">{{systemeInformationSanitaire.district}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Formation Sanitaire : </h5></div>
            <div class="col-lg-6">{{systemeInformationSanitaire.formationSanitaire}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbNouveaux_consultant : </h5></div>
            <div class="col-lg-6">{{systemeInformationSanitaire.NbNouveaux_consultant}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbEnft_PrisCharge_PCIME : </h5></div>
            <div class="col-lg-6">{{systemeInformationSanitaire.NbEnft_PrisCharge_PCIME}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbMaladie_MisObservation : </h5></div>
            <div class="col-lg-6">{{systemeInformationSanitaire.NbMaladie_MisObservation}}</div>
          </div>
          
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          <div class="row float-right">
            
            <div>Créateur : </div>
            <div>{{systemeInformationSanitaire.created_by}} <CBadge color="primary">{{systemeInformationSanitaire.created_at|formatDate}}</CBadge></div>
          
            <div>Modificateur : </div>
            <div>{{systemeInformationSanitaire.updated_by}} 
            <CBadge color="danger">{{systemeInformationSanitaire.updated_at|formatDate}}</CBadge>
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
      systemeInformationSanitaire: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/systeme_information_sanitaires/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.systemeInformationSanitaire = response.data;
      console.log(response)
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
