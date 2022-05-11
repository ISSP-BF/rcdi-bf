<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
          <CCardHeader><h4>Détail de la Consultation Prenatale id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>Region : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.region}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.province}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.commune}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>District : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.district}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Formation Sanitaire : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.formationSanitaire}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeVueCPN : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbFemmeVueCPN}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeInscriteCPN1 : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbFemmeInscriteCPN1}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeInscriteCPN1_Trim1 : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbFemmeInscriteCPN1_Trim1}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeVueCPN4 : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbFemmeVueCPN4}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeInscriteVueCPN_2Td : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbFemmeInscriteVueCPN_2Td}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeFer_Acide_Folique : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbFemmeFer_Acide_Folique}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeFer_Acide_Folique_CPN3 : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbFemmeFer_Acide_Folique_CPN3}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbGrossesse_Refere : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbGrossesse_Refere}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeVueCPN_TPI3 : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbFemmeVueCPN_TPI3}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeVueCPN_TPI3_MILDA : </h5></div>
            <div class="col-lg-6">{{consultationPrenatale.NbFemmeVueCPN_TPI3_MILDA}}</div>
          </div>
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          <div class="row float-right">
            
            <div>Créateur : </div>
            <div>{{consultationPrenatale.created_by}} <CBadge color="primary">{{consultationPrenatale.created_at|formatDate}}</CBadge></div>
          
            <div>Modificateur : </div>
            <div>{{consultationPrenatale.updated_by}} 
            <CBadge color="danger">{{consultationPrenatale.updated_at|formatDate}}</CBadge>
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
      consultationPrenatale: [],
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
    axios.get(  this.$apiAdress + '/api/consultation_prenatales/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.consultationPrenatale = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
