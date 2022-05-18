<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
          <CCardHeader><h4>Détail de la Accouchement id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>Region : </h5></div>
            <div class="col-lg-6">{{accouchement.region}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province : </h5></div>
            <div class="col-lg-6">{{accouchement.province}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune : </h5></div>
            <div class="col-lg-6">{{accouchement.commune}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>District : </h5></div>
            <div class="col-lg-6">{{accouchement.district}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Formation Sanitaire : </h5></div>
            <div class="col-lg-6">{{accouchement.formationSanitaire}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbAccouchement_Normaux : </h5></div>
            <div class="col-lg-6">{{accouchement.NbAccouchement_Normaux}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbAccouchement_Assiste : </h5></div>
            <div class="col-lg-6">{{accouchement.NbAccouchement_Assiste}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbAccouchement_Cesarienne : </h5></div>
            <div class="col-lg-6">{{accouchement.NbAccouchement_Cesarienne}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbAccouchement_Partogramme : </h5></div>
            <div class="col-lg-6">{{accouchement.NbAccouchement_Partogramme}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NNaissance_vivante : </h5></div>
            <div class="col-lg-6">{{accouchement.NNaissance_vivante}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbMortNe_frais : </h5></div>
            <div class="col-lg-6">{{accouchement.NbMortNe_frais}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbMortNe_Macere : </h5></div>
            <div class="col-lg-6">{{accouchement.NbMortNe_Macere}}</div>
          </div>
          
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          <div class="row float-right">
            
            <div>Créateur : </div>
            <div>{{accouchement.created_by}} <CBadge color="primary">{{accouchement.created_at|formatDate}}</CBadge></div>
          
            <div>Modificateur : </div>
            <div>{{accouchement.updated_by}} 
            <CBadge color="danger">{{accouchement.updated_at|formatDate}}</CBadge>
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
      accouchement: [],
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
    axios.get(  this.$apiAdress + '/api/accouchements/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.accouchement = response.data;
      console.log(response)
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
