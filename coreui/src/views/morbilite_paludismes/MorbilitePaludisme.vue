<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
          <CCardHeader><h4>Détail de la MorbilitePaludisme id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>Region : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.region}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.province}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.commune}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>District : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.district}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Formation Sanitaire : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.formationSanitaire}}</div>
          </div>

          <div class="row">
            <div class="col-lg-6"><h5>NbCas_Suspect_Palu : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.NbCas_Suspect_Palu}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbCas_PaluSimple_Confirme : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.NbCas_PaluSimple_Confirme}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbCas_PaluSimple_Presume : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.NbCas_PaluSimple_Presume}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbCas_PaluGrave_Confirme : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.NbCas_PaluGrave_Confirme}}</div>
          </div>

          <div class="row">
            <div class="col-lg-6"><h5>NbCas_PaluGrave_Presume : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.NbCas_PaluGrave_Presume}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbCas_Deces_PaluGrave : </h5></div>
            <div class="col-lg-6">{{morbilitePaludisme.NbCas_Deces_PaluGrave}}</div>
          </div>
          
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          <div class="row float-right">
            
            <div>Créateur : </div>
            <div>{{morbilitePaludisme.created_by}} <CBadge color="primary">{{morbilitePaludisme.created_at|formatDate}}</CBadge></div>
          
            <div>Modificateur : </div>
            <div>{{morbilitePaludisme.updated_by}} 
            <CBadge color="danger">{{morbilitePaludisme.updated_at|formatDate}}</CBadge>
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
      morbilitePaludisme: [],
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
    axios.get(  this.$apiAdress + '/api/morbilite_paludismes/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.morbilitePaludisme = response.data;
      console.log(response)
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
