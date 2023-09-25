<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter Foire Question
          </h3>
          <CInput label="Question" type="text" placeholder="Question" v-model="foireQuestion.question"></CInput>

          <quill-editor :content="foireQuestion.reponse"  v-model="foireQuestion.reponse"/>
          <br/>
          <CButton color="primary" @click="store()">Ajouter</CButton> &nbsp;
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
  name: 'EditNote',
  props: {
    caption: {
      type: String,
      default: 'Note id'
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
      this.$router.push({path: '/foire-questions'});
          },
    store() {
        let self = this;
        axios.post(  this.$apiAdress + '/api/foire-questions?token=' + localStorage.getItem("api_token"),
          self.foireQuestion
        )
        .then(function (response) {
            self.foireQuestion = {};
            self.$toasted.show("Foire question a été créé avec succès",{type:"success"});
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
            }
        });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  },
  mounted: function(){
    let self = this;
    // axios.get(  this.$apiAdress + '/api/regions/create?token=' + localStorage.getItem("api_token"))
    // .then(function (response) {
    //     self.statuses = response.data;
    // }).catch(function (error) {
    //     console.log(error);
    //     self.$router.push({ path: 'login' });
    // });
  }
}

</script>
