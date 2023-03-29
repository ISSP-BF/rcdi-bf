<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardBody>
          <h3>
            Modifier indicateur id:  {{ $route.params.id }}
          </h3>
          
           
            <div class="row ">
            <CSelect
              label="Region"  class="col-lg-4"
              :value.sync="indicateur.region_id"
              :plain="true"
              :options="regions"
              v-model="indicateur.region_id"
            >
            </CSelect>
            
            <CSelect
              label="Province"  class="col-lg-4"
              :value.sync="indicateur.province_id"
              :plain="true"
              :options="provinces"
              v-model="indicateur.province_id"
            >
            </CSelect>
            
            <CSelect
              label="Commune"  class="col-lg-4"
              :value.sync="indicateur.commune_id"
              :plain="true"
              :options="communes"
              v-model="indicateur.commune_id"
            >
            </CSelect>
            </div>
            
            <div class="row ">
            <CInput label="groupe" type="text" placeholder="groupe" v-model="indicateur.groupe"  class="col-lg-6"></CInput>
            <CInput label="indicateur" type="text" placeholder="indicateur" v-model="indicateur.indicateur"  class="col-lg-6"></CInput>
            <CInput label="niveau1" type="text" placeholder="niveau1" v-model="indicateur.niveau1"  class="col-lg-6"></CInput>
            <CInput label="niveau2" type="text" placeholder="niveau2" v-model="indicateur.niveau2"  class="col-lg-6"></CInput>
            <CInput label="mois" type="text" placeholder="mois" v-model="indicateur.mois"  class="col-lg-6"></CInput>
            <CInput label="annee" type="text" placeholder="annee" v-model="indicateur.annee"  class="col-lg-6"></CInput>
            <CInput label="indice" type="text" placeholder="indice" v-model="indicateur.indice"  class="col-lg-6"></CInput>
            <CInput label="source" type="text" placeholder="source" v-model="indicateur.source"  class="col-lg-6"></CInput>
            </div>
             
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
        indicateur: {
          region_id: null,
          province_id: null,
          commune_id: null,
          groupe:null,
          indicateur:null, 
          niveau1:null, 
          niveau2:null,
          mois:null, 
          annee:null,
          indice:null,
          source:null
        },
        formationSanitaires: [],
        regions: [],
        provinces: [],
        communes: [],
        message: '',
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    update() {
        let self = this;
        console.log(self.indicateur)
        axios.put(  this.$apiAdress + '/api/indicateurs-old/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.indicateur)
        .then(function (response) {
            self.message = 'Successfully updated Acte Naissance.';
            self.$toasted.show("Indicateur a été modifié avec succès",{type:"success"});
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
              self.$toasted.show(self.message,{type:"error"}); 
              // self.$router.push({ path: '/login' }); 
            }
        });
    }
  },
  mounted: function(){
    let self = this;
    axios.get(this.$apiAdress + '/api/indicateurs-old/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response.data)
        self.indicateur = response.data.indicateur;
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
    }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: 'login' });
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
