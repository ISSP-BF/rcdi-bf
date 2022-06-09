<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
          <CCardHeader><h4>Détail de la Consultation Postnatale id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>Region : </h5></div>
            <div class="col-lg-6">{{consultationPostnatale.region}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province : </h5></div>
            <div class="col-lg-6">{{consultationPostnatale.province}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune : </h5></div>
            <div class="col-lg-6">{{consultationPostnatale.commune}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>District : </h5></div>
            <div class="col-lg-6">{{consultationPostnatale.district}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Formation Sanitaire : </h5></div>
            <div class="col-lg-6">{{consultationPostnatale.formationSanitaire}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeVueConsultation_PostNatale : </h5></div>
            <div class="col-lg-6">{{consultationPostnatale.NbFemmeVueConsultation_PostNatale}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeVueConsultation_PostNatalePrecoce : </h5></div>
            <div class="col-lg-6">{{consultationPostnatale.NbFemmeVueConsultation_PostNatalePrecoce}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeVueConsultation_PostNataleTardive : </h5></div>
            <div class="col-lg-6">{{consultationPostnatale.NbFemmeVueConsultation_PostNataleTardive}}</div>
          </div>
          
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          <div class="row float-right">
            
            <div>Créateur : </div>
            <div>{{consultationPostnatale.created_by}} <CBadge color="primary">{{consultationPostnatale.created_at|formatDate}}</CBadge></div>
          
            <div>Modificateur : </div>
            <div>{{consultationPostnatale.updated_by}} 
            <CBadge color="danger">{{consultationPostnatale.updated_at|formatDate}}</CBadge>
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
      ConsultationPostnatale: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/consultation_postnatales/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.ConsultationPostnatale = response.data;
      console.log(response)
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
