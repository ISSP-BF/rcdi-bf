<template>
  <CRow>
    <CCol col="12" lg="8">
      <CCard no-header>
        <CCardBody>
          <h3>
            Ajouter un indicateur
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
             
            
          <CButton color="primary" @click="store()">Ajouter</CButton> &nbsp;
          <CButton color="secondary" @click="goBack">Retour</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Create Indicateur',
  props: {
    caption: {
      type: String,
      default: 'ActeNaissance id'
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
    store() {
        let self = this;
        console.log(self.indicateur)
        axios.post(  this.$apiAdress + '/api/indicateurs?token=' + localStorage.getItem("api_token"),
          self.indicateur
        )
        .then(function (response) {
            self.indicateur = {
            };
            self.$toasted.show("L'indicateur a été créé avec succès",{type:"success"}); 
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
              self.$router.push({ path: 'login' }); 
            }
        });
    },  
     
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/indicateurs/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.regions = response.data.regions;
        self.provinces = response.data.provinces;
        self.communes = response.data.communes;
        self.formationSanitaires = response.data.formationSanitaires;
        
        // Définir valeur par défaut
        self.indicateur.region_id = self.regions.length>0?self.regions[0].value:null;
        self.indicateur.province_id = self.provinces.length>0?self.provinces[0].value:null;
        self.indicateur.commune_id = self.communes.length>0?self.communes[0].value:null;
        self.indicateur.formation_sanitaire_id = self.formationSanitaires.length>0?self.formationSanitaires[0].value:null;


    }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>
