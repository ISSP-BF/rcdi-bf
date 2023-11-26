<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Ajouter un indicateur
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
            <CTextarea label="Methode de calcule" type="text" placeholder="Methode de calcule" v-model="indicateur.methode_calcule"  rows="9"/>
           
            
          <div class="row ">
            <div role="group" class="col-lg-3 form-group">
              <label class="row col custom-control-inline"> Période </label>
              <CInputCheckbox
                  v-for="rol in periodeList"
                  :key="rol"
                  :label="rol"
                  name="Période "
                  @update:checked="selectRadioSelectPeriode(rol)"
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
  name: 'CreateIndicateur',
  props: {
    caption: {
      type: String,
      default: 'Indicateur id'
    },
  },
  data: () => {
    return {
        indicateur: {
          libelle: '',
          groupe_id: '',
          desagregation_id: ''
        },
        groupes:[],
        sous_groupes:[],
        periodes:[],
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
    store() {
        let self = this;
        // console.log(self.indicateur)
        self.indicateur.periode = this.periodes.toString()
        axios.post(  this.$apiAdress + '/api/indicateurs?token=' + localStorage.getItem("api_token"),
          self.indicateur
        )
        .then(function (response) {
            self.indicateur = {
              desagregation_id: '',
              libelle: ''
            };
            self.$toasted.show(response.data.message,{type:"success"}); 
            self.$router.go(-1)
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
              // console.log(error);
              // self.$router.push({ path: 'login' }); 
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
    axios.get(  this.$apiAdress + '/api/indicateurs/create?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.desagregations = response.data.desagregations;
        self.groupes = response.data.groupes;
        self.sous_groupes = response.data.sous_groupes;
        // Definir la valeur par défaut
        let lest = [{label:'',value:null}]
        lest.push(...self.desagregations);
        self.desagregations = lest;
        self.indicateur.desagregation_id = self.desagregations.length>0?self.desagregations[0].value:null;
        self.indicateur.groupe_id = self.groupes.length>0?self.groupes[0].value:null;
        self.indicateur.sous_groupe_id = self.sous_groupes.length>0?self.sous_groupes[0].value:null;
    }).catch(function (error) {
        // console.log(error);
        self.$router.push({ path: 'login' });
    });
  }
}

</script>

<style scoped>
.card-body>>>table>tbody>tr>td {
  cursor: pointer;
}


.no-margin-padding>.form-group {
  margin: 0 !important;
  padding: 0 !important;
}

.table th,
.table td {
  padding: 0;
}

.table td>.form-group {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
