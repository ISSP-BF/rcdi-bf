<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
          <CCardHeader><h4>Détail de la Systeme Information Sanitaire id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>Region : </h5></div>
            <div class="col-lg-6">{{indicateurCarteSanitaire.region}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province : </h5></div>
            <div class="col-lg-6">{{indicateurCarteSanitaire.province}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune : </h5></div>
            <div class="col-lg-6">{{indicateurCarteSanitaire.commune}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>District : </h5></div>
            <div class="col-lg-6">{{indicateurCarteSanitaire.district}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Formation Sanitaire : </h5></div>
            <div class="col-lg-6">{{indicateurCarteSanitaire.formationSanitaire}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbLit_SuiteCouche : </h5></div>
            <div class="col-lg-6">{{indicateurCarteSanitaire.NbLit_SuiteCouche}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbLit_HospiMaternite : </h5></div>
            <div class="col-lg-6">{{indicateurCarteSanitaire.NbLit_HospiMaternite}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbLit_HospiAutreService : </h5></div>
            <div class="col-lg-6">{{indicateurCarteSanitaire.NbLit_HospiAutreService}}</div>
          </div>
          
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          <div class="row float-right">
            
            <div>Créateur : </div>
            <div>{{indicateurCarteSanitaire.created_by}} <CBadge color="primary">{{indicateurCarteSanitaire.created_at|formatDate}}</CBadge></div>
          
            <div>Modificateur : </div>
            <div>{{indicateurCarteSanitaire.updated_by}} 
            <CBadge color="danger">{{indicateurCarteSanitaire.updated_at|formatDate}}</CBadge>
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
      indicateurCarteSanitaire: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/indicateur_carte_sanitaires/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.indicateurCarteSanitaire = response.data;
      console.log(response)
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
