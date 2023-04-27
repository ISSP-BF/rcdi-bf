<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardBody>
          <h3>
            Modifier le Sous Groupe
          </h3>
          
          <CSelect
              label="Groupe" 
              :value.sync="sous_groupe.groupe_id"
              :plain="true"
              :options="groupes"
            />
            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="sous_groupe.libelle"/>
            <CTextarea label="Description" type="text" placeholder="Description" v-model="sous_groupe.description"  rows="9"/>
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
  name: 'Edit Sous Groupe',
  props: {
    caption: {
      type: String,
      default: 'Sous groupe id'
    },
  },
  data: () => {
    return {
        sous_groupe: {
          groupe_id: '',
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
        axios.put(  this.$apiAdress + '/api/sous_groupes/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.sous_groupe)
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
    axios.get(  this.$apiAdress + '/api/sous_groupes/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.groupes = response.data.groupes;
        self.sous_groupe = response.data.sous_groupe;
    }).catch(function (error) {
        // console.log(error);
        // self.$router.push({ path: 'login' });
    });
  }
}

</script>
