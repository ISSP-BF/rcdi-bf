<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
            Détail de la commune {{ $route.params.id }}
          <div class="card-header-actions" v-if="commune">
              <CBadge :color="commune.defaut==1?'success':'danger'">{{commune.defaut==1}}</CBadge>
          </div>
        </CCardHeader>
        <CCardBody v-if="commune"> 
          <h4>Code : {{ commune.code }}</h4>
          <h4>Region : {{ commune.province.region.region }}</h4>
          <h4>Province : {{ commune.province.province }}</h4>
          <h4>Commune : {{ commune.commune }}</h4>  
          <h4>Lon : {{ commune.lon }} - Lat : {{ commune.lat }}</h4>  
        </CCardBody>
        <CCardFooter>
          <CInputFile
                type="file"
                v-on:change="handleFileUpload"
                placeholder="New file"
            />
        </CCardFooter>
        <CCardFooter> <CButton color="primary" @click="goBack">Retour</CButton></CCardFooter>
      </CCard>
    </CCol>
    <CCol col="12" lg="12">
      <CCard>
        <CCardHeader>
            Visualisation 
        </CCardHeader>
        <CCardBody style="height: 75vh;" v-if="commune"> 
          <GoogleMaps v-if="choixgraphique=='Google'" :center="{lat:commune.lat,lng:commune.lon}" :mapDatao="mapData"/>
          
          <ShapeMaps v-if="choixgraphique=='HighChart'" :mapDatao="mapData"/>
        </CCardBody>
        <CCardFooter>
          <CCol sm="12" class="custom-control-inline">
         
         <div
           role="group"
           class="custom-control custom-control-inline custom-radio"
         >
           <input
             :id="'Google'" 
             type="radio"
             class="custom-control-input"
             v-model="choixgraphique"
             value="Google"
           />
           <label :for="'Google'"  class="custom-control-label"> Google </label>
          </div>
         <div
           role="group"
           class="custom-control custom-control-inline custom-radio"
         >
           <input
             :id="'HighChart'"
             type="radio"
             class="custom-control-input"
             v-model="choixgraphique"
             value="HighChart"
           />
           <label :for="'HighChart'" class="custom-control-label"> HighChart </label>
         </div>
       </CCol>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios' 
import mapData from './graphique/tenado.geo.json'
import GoogleMaps from './graphique/GoogleMaps.vue'
import ShapeMaps from './graphique/ShapeMaps.vue'
export default {
  name: 'CommuneShow',
  components:{GoogleMaps,ShapeMaps},
  props: {
    caption: {
      type: String,
      default: 'Commune id'
    },
  },
  data: () => {
    return { 
      mapData:mapData,
      commune: null,
      choixgraphique:'Google'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    handleFileUpload(files, event){
        let self = this;
        let formData = new FormData();
        formData.append('file', files[0]);
        axios.post(   this.$apiAdress + '/api/media/file/store?thisFolder=' + self.thisFolder + '&token=' + localStorage.getItem("api_token"),
            formData,
            { headers: {
                'Content-Type': 'multipart/form-data'
            }}
        ).then(function(){
            self.getFoldersAndFiles(self.thisFolder)
        })
        .catch(function(error){
            console.log(error)
            self.$router.push({ path: '/login' })
        });
    },
  },
  mounted: function(){
    let self = this;
    axios.get(  this.$apiAdress + '/api/communes/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      self.commune = response.data;
      console.log(response)
    }).catch(function (error) {
      console.log(error);
      // self.$router.push({ path: '/login' });
    });
  }
}


</script>
