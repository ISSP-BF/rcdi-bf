<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard>
          <CCardHeader><h4>Détail de la PlanificationFamiliale id:  {{ $route.params.id }}</h4> </CCardHeader>
        <CCardBody>
          <div class="row">
            <div class="col-lg-6"><h5>Region : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.region}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Province : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.province}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Commune : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.commune}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>District : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.district}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>Formation Sanitaire : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.formationSanitaire}}</div>
          </div>

          <div class="row">
            <div class="col-lg-6"><h5>type_utilisatrices : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.type_utilisatrices}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbPillule_COC : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbPillule_COC}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbPillule_COP : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbPillule_COP}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbDMPlule_IM : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbDMPlule_IM}}</div>
          </div>

          <div class="row">
            <div class="col-lg-6"><h5>NbDMPA_IM : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbDMPA_IM}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbImplant_5ans : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbImplant_5ans}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbImplant_3ans : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbImplant_3ans}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbDIU : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbDIU}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbPreservatif_Masculin : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbPreservatif_Masculin}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbPreservatif_Feminin : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbPreservatif_Feminin}}</div>
          </div>
          
          <div class="row">
            <div class="col-lg-6"><h5>NbLigature : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbLigature}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbVasectomie : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbVasectomie}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbCollier_Cycle : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbCollier_Cycle}}</div>
          </div>
          <div class="row">
            <div class="col-lg-6"><h5>NbMethode_maman : </h5></div>
            <div class="col-lg-6">{{planificationFamiliale.NbMethode_maman}}</div>
          </div>
          
        </CCardBody>

          <CCardFooter><CButton color="secondary" @click="goBack">Retour</CButton> 
          
          <div class="row float-right">
            
            <div>Créateur : </div>
            <div>{{planificationFamiliale.created_by}} <CBadge color="primary">{{planificationFamiliale.created_at|formatDate}}</CBadge></div>
          
            <div>Modificateur : </div>
            <div>{{planificationFamiliale.updated_by}} 
            <CBadge color="danger">{{planificationFamiliale.updated_at|formatDate}}</CBadge>
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
      planificationFamiliale: [],
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
    axios.get(  this.$apiAdress + '/api/planification_familiales/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.planificationFamiliale = response.data;
      console.log(response)
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
