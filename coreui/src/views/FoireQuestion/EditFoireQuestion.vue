<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
        <CCardBody>
          <h3>
            Modifier Foire Question
          </h3>
          <CInput label="Question" type="text" placeholder="Question" v-model="foireQuestion.question"></CInput>
          <quill-editor :content="foireQuestion.reponse"/>
          <CButton color="primary" @click="update()">Modifier</CButton> &nbsp;
          <CButton color="secondary" @click="goBack">Retour</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
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
      foireQuestion: {
          question: '',
          reponse: ''
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
        axios.put(  this.$apiAdress + '/api/foire-questions/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.foireQuestion)
        .then(function (response) {
          self.$toasted.show("La foire à question a été modifiée avec succès",{type:"success"});
          self.goBack();
        }).catch(function (error) {
          if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
            self.$toasted.show(self.message,{type:"error"});
             
            }else{
              console.log(error); 
              // self.$router.push({ path: '/login' }); 
            }
        });
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/foire-questions/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.foireQuestion = response.data.foireQuestion; 
    }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
    });
  }
}

</script>
