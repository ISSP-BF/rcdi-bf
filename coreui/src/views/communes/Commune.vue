<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <h3>Province id:  {{ $route.params.id }}</h3>

          <h4>Author:</h4>
          <p>{{ province.author }}</p>
          <h4>Title:</h4>
          <p>{{ province.title }}</p>
          <h4>Content:</h4> 
          <p>{{ province.content }}</p>
          <h4>Applies to date:</h4> 
          <p>{{ province.applies_to_date }}</p>
          <h4>Status: </h4>
          <p>
              <CBadge :color="province.status_class">{{province.status}}</CBadge>
          </p>
          <h4>Province type:</h4>
          <p>{{ province.province_type }}</p>

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
      province: [],
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
    axios.get(  this.$apiAdress + '/api/provinces/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.province = response.data;
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}


</script>
