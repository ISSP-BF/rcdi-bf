<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardBody>
          <h3>
            Modifier Desagregation
          </h3>
            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="desagregation.libelle"/>
            <CTextarea label="Description" type="text" placeholder="Description" v-model="desagregation.description"  rows="9"/>
          <CButton color="primary" @click="update()">Modifier</CButton> &nbsp;
          <CButton color="secondary" @click="goBack">Retour</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditUser',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
        desagregation: {
          libelle: '',
          decription: '',
          
        },
        message: '',
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    update() {
        let self = this;
        axios.post(  this.$apiAdress + '/api/desagregations/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        {
            _method: 'PUT',
            libelle:            self.desagregation.libelle,
            description:          self.desagregation.description,
          
        })
        .then(function (response) {
          self.$router.go(-1)
            self.$toasted.show(response.data.message,{type:"success"}); 
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
            self.$toasted.show(self.message,{type:"danger"}); 
            }else{
              console.log(error); 
              self.$router.push({ path: '/login' }); 
            }
        });
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/desagregations/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.desagregation = response.data; 
    }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
    });
  }
}

/*
      items: (id) => {
        const user = usersData.find( user => user.id.toString() === id)
        const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
        return userDetails.map(([key, value]) => {return {key: key, value: value}})
      },
*/

</script>
