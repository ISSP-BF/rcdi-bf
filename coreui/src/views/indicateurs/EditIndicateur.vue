<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Modifier Indicateur id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>

          
          <CSelect
              label="Groupe" 
              :value.sync="indicateur.groupe_id"
              :plain="true"
              :options="groupes"
              @change="findSousGroupeByGroupe($event)"
            >
            </CSelect>
            
          <CSelect
              label="Sous Groupe" 
              :value.sync="indicateur.sous_groupe_id"
              :plain="true"
              :options="sous_groupes"
            >
            </CSelect>

            <CInput label="Code" type="text" placeholder="Code" v-model="indicateur.code"></CInput>
            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="indicateur.libelle"></CInput>
            <CTextarea label="Description" type="text" placeholder="Description" v-model="indicateur.description"  rows="9"/>
            <CTextarea label="Methode de calcule" type="text" placeholder="Methode de calcule" v-model="indicateur.description"  rows="9"/>
           
          <div class="row ">
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Période </label>
              <CInputCheckbox
                  v-for="rol in periodeList"
                  :key="rol"
                  :label="rol"
                  name="Période "
                  @update:checked="selectRadioSelectPeriode(rol)"
                  :checked="fixedPeriode[rol]"
                  />
            </div>      
          </div>
            <CSelect
              label="Desagregation" 
              :value.sync="indicateur.desagregation_id"
              :plain="true"
              :options="desagregations"
            >
            </CSelect>
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
  name: 'EditIndicateur',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
        fixedPeriode: [],
        indicateur: {
          libelle: '',
          groupe_id: '',
          desagregation_id: ''
        },
        periodes:[],
        groupes:[],
        sous_groupes:[],
        periodeList:['MENSUEL','TRIMESTRIEL','SEMESTRIEL', 'ANNUEL'],
        desagregations: [],
        message: ''
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    selectRadioSelectPeriode(periode){
      let temp = this.periodes.indexOf(periode); 
      if (temp > -1) {
        this.periodes.splice(temp, 1);
      }else{
        this.periodes.push(periode);
      }
    },
    update() {
        let self = this; 
        self.indicateur.periode = this.periodes.toString()
        axios.put(  this.$apiAdress + '/api/indicateurs/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.indicateur)
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
            self.$toasted.show(self.message,{type:"success"}); 
            }else{
              self.$router.push({ path: '/login' }); 
            }
        });
    },
    findSousGroupeByGroupe(event){
      this.sous_groupes = []
      let self = this;
      axios.get(  this.$apiAdress + '/api/sous_groupes/findByGroupe/'+self.indicateur.groupe_id+'?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      console.log(response)
        self.sous_groupes = response.data;
        
        let lest = [{label:'',value:null}]
        lest.push(...self.sous_groupes);
        self.sous_groupes = lest;

    }).catch(function (error) {
      self.indicateurs  = []
        // console.log(error);
        // self.$router.push({ path: 'login' });
    });
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/indicateurs/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      
        self.sous_groupes = response.data.sous_groupes;
        self.indicateur = response.data.indicateur;
        self.desagregations = response.data.desagregations;
        self.groupes = response.data.groupes;
        
        if (self.indicateur.periode != null) {
          self.periodes = self.indicateur.periode.split(',')
        }
        for(let p of self.periodes){
          self.fixedPeriode[""+p+""] = true;
        }
        // Definir la valeur par défaut
        let lest = [{label:'',value:null}]
        lest.push(...self.desagregations);
        self.desagregations = lest;
    }).catch(function (error) {
        // console.log(error);
        self.$router.push({ path: '/login' });
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
