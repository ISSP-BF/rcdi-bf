<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          <h3>Edition de la requête</h3>
        </CCardHeader>
        <CCardBody>
          <CInput
            label="Libelle"
            type="text"
            placeholder="Libelle"
            v-model="dashboardItem.libelle"
          /> 
              <label for="">Description</label>
              <quill-editor :content="dashboardItem.description" v-model="dashboardItem.description" />
            
          <CRow>
            
            <CInput label="Ordre" type="text" placeholder="Ordre décroissante" v-model="dashboardItem.i" class="col-lg-4"/>
            <CInput label="Largeur [1 à 12]" type="text" placeholder="de 1 à 12" v-model="dashboardItem.w" class="col-lg-4"/>
          
            <div class="col-lg-4"></div>
           
            <label for="" class="col-lg-12">Seuil</label>
            <CSelect :value.sync="dashboardItem.type_seuil" class="col-lg-4"
            :options="options">
            </CSelect>

            <CInput v-if="dashboardItem.type_seuil == 'VALEUR_REFERENCE'" type="text" placeholder="Ex. 15" v-model="dashboardItem.seuil_valeur_reference"
              class="col-lg-4" />
            <CSelect v-if="dashboardItem.type_seuil == 'DATE_REFERENCE'" :value.sync="dashboardItem.seuil_periode_value" class="col-lg-2"
            :options="choixPeriodes">
            </CSelect>
            <CSelect v-if="dashboardItem.type_seuil == 'DATE_REFERENCE'" :value.sync="dashboardItem.seuil_annee" class="col-lg-2"
            :options="annees">
            </CSelect>
            <CInput v-if="dashboardItem.type_seuil && dashboardItem.type_seuil !== 'INTERVALLE'" type="text" placeholder="Couleur #F001" v-model="dashboardItem.seuil_couleur"
              class="col-lg-4" />
            <div class="col-lg-12" v-if="dashboardItem.type_seuil == 'INTERVALLE' && refreshingSegment">
              <div class="row"  :key="index" v-for="(item, index) in dashboardItem.seuil_segment_list">
                <CInput type="text" placeholder="Ex. 1" v-model="item.debut"
                class="col-lg-3" />
                <CInput type="text" placeholder="Ex. 10" v-model="item.value"
                class="col-lg-3" />
                <CInput type="text" placeholder="Ex. FFF" v-model="item.color"
                class="col-lg-4" />
                <CButton class="form-group" size="sm" color="danger" @click="deleteSegment(index)">
                  <CIcon  color="danger" name="cil-x-circle" />
                </CButton>
              </div>
              <CButton size="sm" color="primary" @click="ajouterSegment()">
                  <CIcon name="cil-plus" />
                </CButton>
            </div>
          </CRow>
          

          <CRow class="align-items-center">
                    
                    <div class="row col-lg-12">
                      <div role="group" class="col-lg-12 form-group">
                        <label class="custom-control-inline"> Période </label>
                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="SECTEUR2" type="radio" class="custom-control-input" v-model="dashboardItem.graphique"
                            value="SECTEUR" />
                          <label for="SECTEUR2" class="custom-control-label"> SECTEUR </label>
                        </div>
                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="HISTOGRAMME" type="radio" class="custom-control-input" v-model="dashboardItem.graphique"
                            value="HISTOGRAMME" />
                          <label for="HISTOGRAMME" class="custom-control-label"> HISTOGRAMME </label>
                        </div>
                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="COURBE" type="radio" class="custom-control-input" v-model="dashboardItem.graphique"
                            value="COURBE" />
                          <label for="COURBE" class="custom-control-label"> COURBE </label>
                        </div>
                        <div role="group" class="custom-control custom-control-inline custom-radio">
                          <input id="FIXE" type="radio" class="custom-control-input" v-model="dashboardItem.graphique"
                            value="FIXE" />
                          <label for="FIXE" class="custom-control-label"> FIXE </label>
                        </div> 

                        <CButton color="success" @click="visualiser()"> <CIcon name="cil-speedometer"/></CButton> &nbsp;
                      </div>
                    </div> 
                  </CRow>
                </CCardBody>
        <CCardFooter>
          <CRow class="col-lg-12 text-justify">
            <CButton color="primary" @click="update()">Modifier</CButton> &nbsp;
            <CButton color="secondary" @click="goBack">Retour</CButton>
          </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
    <CCol col="12" lg="6">
      <div>
                  <IndicateursSecteur
                    v-if="dashboardItem.graphique == 'SECTEUR' &&refreshing"
                    :donneeSearch="JSON.parse(dashboardItem.requete)" :refreshing="refreshing"
                  />
                  <IndicateurBarChart
                    v-if="(dashboardItem.graphique == 'HISTOGRAMME'||dashboardItem.graphique == 'COURBE') &&refreshing" :graphique="dashboardItem.graphique"
                    :donneeSearch="JSON.parse(dashboardItem.requete)" :refreshing="refreshing"
                  />
                
                  <IndicateursShow
                  v-if="dashboardItem.graphique ==  'FIXE' &&refreshing"
                  :donneeSearch="JSON.parse(dashboardItem.requete)" :refreshing="refreshing"
                  />
                </div>
    </CCol>
  </CRow>
</template>

<script>
import axios from "axios";
import IndicateursSecteur from "../donnees/graphique/IndicateursSecteur";
import IndicateurBarChart from "../donnees/graphique/IndicateurBarChart";
import IndicateursShow from "./graphique/IndicateursShow";

export default {
  name: "EditUser",
  components: {
    IndicateursSecteur,
    IndicateurBarChart,IndicateursShow
  },
  props: {
    caption: {
      type: String,
      default: "User id",
    },
  },
  data: () => {
    return {
      dashboardItem: {
        libelle: "",
        decription: "",
        i: "",
        x: "",
        y: "",
        w: "",
        h: "",
        type_seuil: "",
        static: true,
        seuil_segment_list:[],
      },refreshing:false,
      refreshingSegment:true,
      message: "",
      options : [
        { label: '', value: '' },
        { label: 'Moyenne', value: 'MOYENNE' },
        { label: 'Valeur de référence', value: 'VALEUR_REFERENCE' },
        { label: 'Date de référence', value: 'DATE_REFERENCE' },
        { label: 'Intervalle', value: 'INTERVALLE' }
      ],
      periodes: [],
      choixPeriodes:[],
      annees: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    visualiser(){
        this.refreshing = !this.refreshing;
    },
    
    updatedListPeriode(choix) {
      this.choixPeriodes = [];
      switch (choix) {
        case "TRIMESTRIEL":
          this.choixPeriodes = [
            { value: 1, label: "Trimestre 1" },
            { value: 2, label: "Trimestre 2" },
            { value: 3, label: "Trimestre 3" },
            { value: 4, label: "Trimestre 4" },
          ];
          break;
        case "MENSUEL":
          this.choixPeriodes = [
            { value: 1, label: "Janvier" },
            { value: 2, label: "Février" },
            { value: 3, label: "Mars" },
            { value: 4, label: "Avril" },
            { value: 5, label: "Mai" },
            { value: 6, label: "Juin" },
            { value: 7, label: "Juillet" },
            { value: 8, label: "Aout" },
            { value: 9, label: "Septembre" },
            { value: 10, label: "Octobre" },
            { value: 11, label: "Novembre" },
            { value: 12, label: "Décembre" },
          ];
          break;
        case "SEMESTRIEL":
          this.choixPeriodes = [
            { value: 1, label: "Semestre 1" },
            { value: 2, label: "Semestre 2" },
          ];
          break;
        case "ANNUEL":
          this.choixPeriodes = [];
          break;

        default:
          break;
      }
    },
    ajouterSegment(){
      this.refreshingSegment = false;
      if (!this.dashboardItem.seuil_segment_list){
        this.dashboardItem.seuil_segment_list=[];
        this.ajouterSegment();
      }
      else {
        this.dashboardItem.seuil_segment_list.push({});
      }
        console.log("======",this.dashboardItem.seuil_segment_list);
      this.refreshingSegment = true;
     },
    deleteSegment(index){ 
      this.refreshingSegment = false;
       this.dashboardItem.seuil_segment_list.splice(index,1);
      this.refreshingSegment = true;
        console.log("======"+index);
     },
    update() {
      let self = this;
      self.dashboardItem['seuil_segment_list'] = JSON.stringify(self.dashboardItem['seuil_segment_list']);
      axios
        .put(
          this.$apiAdress +
            "/api/dashboard-items/" +
            self.$route.params.id +
            "?token=" +
            localStorage.getItem("api_token"),
          self.dashboardItem
        )
        .then(function (response) {
          self.$router.go(-1);
          self.$toasted.show(response.data.message, { type: "success" });
        })
        .catch(function (error) {
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toasted.show(self.message, { type: "danger" });
          } else {
            console.log(error);
            self.$router.push({ path: "/login" });
          }
        });
    },
  },
  mounted: function () {
    let self = this;
    axios
      .get(
        this.$apiAdress +
          "/api/dashboard-items/" +
          self.$route.params.id +
          "/edit?token=" +
          localStorage.getItem("api_token")
      )
      .then(function (response) {
        self.dashboardItem = response.data;
        self.dashboardItem['seuil_segment_list'] = JSON.parse(self.dashboardItem['seuil_segment_list']);
        self.updatedListPeriode (self.dashboardItem['seuil_periode']);
      })
      .catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
  },
};
</script>
