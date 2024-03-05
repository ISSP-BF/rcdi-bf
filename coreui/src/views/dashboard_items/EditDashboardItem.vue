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
          </CRow>
        </CCardBody>
        <CCardFooter>
          

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
                  
        </CCardFooter>
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
        static: true,
      },refreshing:false,
      message: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    visualiser(){
        this.refreshing = !this.refreshing;
    },
    update() {
      let self = this;
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
      })
      .catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
  },
};
</script>
