<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>SousIndicateur id:  {{ $route.params.id }}</h3>

          <h4>Author:</h4>
          <p>{{ sousIndicateur.author }}</p>
          <h4>Title:</h4>
          <p>{{ sousIndicateur.title }}</p>
          <h4>Content:</h4> 
          <p>{{ sousIndicateur.content }}</p>
          <h4>Applies to date:</h4> 
          <p>{{ sousIndicateur.applies_to_date }}</p>
          <h4>Status: </h4>
          <p>
              <CBadge :color="sousIndicateur.status_class">{{sousIndicateur.status}}</CBadge>
          </p>
          <h4>SousIndicateur type:</h4>
          <p>{{ sousIndicateur.sousIndicateur_type }}</p>

          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardBody>
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
      sousIndicateur: [],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          }
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/sous_indicateurs/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.sousIndicateur = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
