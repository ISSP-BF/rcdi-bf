<template>
  <CRow>
    <CCol col="6" lg="6">
      <CCard>
        <CCardBody>
          <h4>Suppression de menu</h4>
          <p>êtes vous sur de vouloir supprimer ?</p>
          <CAlert
            :show.sync="dismissCountDown"
            color="primary"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>

          <CButton color="danger" @click="deleteMenu()">Supprimer</CButton>
          <CButton color="primary" @click="goBack">Retour</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DeleteMenu',
  data: () => {
    return {
        message: '',
        dismissSecs: 7,
        dismissCountDown: 0,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },   
    deleteMenu() {
      let self = this;
      axios.get(  this.$apiAdress + '/api/menu/menu/delete?token=' + localStorage.getItem("api_token") + '&id=' + self.$route.params.id, {})
      .then(function (response) {
          if(response.data.success == true){
            self.$router.go(-1)
          }else{
            self.message = "Can't delete. This menu have assigned menu elements";
            self.showAlert();
          }
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted: function(){
  }
}

</script>