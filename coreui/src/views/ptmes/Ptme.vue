<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
          <CCardHeader><h4>Détail de la Prévention de la transmission mere enfant id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>Region : </h5></div>
            <div class="col-lg-6">{{ptme.region}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province : </h5></div>
            <div class="col-lg-6">{{ptme.province}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune : </h5></div>
            <div class="col-lg-6">{{ptme.commune}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>District : </h5></div>
            <div class="col-lg-6">{{ptme.district}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Formation Sanitaire : </h5></div>
            <div class="col-lg-6">{{ptme.formationSanitaire}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeEnceinte_VIHPositif_CPN1 : </h5></div>
            <div class="col-lg-6">{{ptme.NbFemmeEnceinte_VIHPositif_CPN1}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeVueCPN_TestVIH : </h5></div>
            <div class="col-lg-6">{{ptme.NbFemmeVueCPN_TestVIH}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbFemmeVueCPN_TestVIH_Positif : </h5></div>
            <div class="col-lg-6">{{ptme.NbFemmeVueCPN_TestVIH_Positif}}</div>
          </div>
          
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          <div class="row float-right">
            
            <div>Créateur : </div>
            <div>{{ptme.created_by}} <CBadge color="primary">{{ptme.created_at|formatDate}}</CBadge></div>
          
            <div>Modificateur : </div>
            <div>{{ptme.updated_by}} 
            <CBadge color="danger">{{ptme.updated_at|formatDate}}</CBadge>
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
      ptme: [],
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
    axios.get(  this.$apiAdress + '/api/ptmes/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.ptme = response.data;
      console.log(response)
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
