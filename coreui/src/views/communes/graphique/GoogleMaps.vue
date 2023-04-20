<template>  
      <GmapMap  v-if="reload" :center="center"  :zoom="11"  style="height: 70vh">
        <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
          <CLink :href="infoLink" target="_blank">{{infoContent}}</CLink>
        </GmapInfoWindow> 
        <GmapPolygon :draggable="false" :path.sync="mapData" />
  </GmapMap> 
</template>

<script>
 

export default {
  name: 'GoogleMaps',
  props: ['mapDatao','center'],
  data () {
    return {
      mapData:[],
      reload:true, 
      infoContent: '',
      infoLink: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      mapData:null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  methods: { 
  },
  mounted () {
    self = this;
   
    this.mapData = []; 
    for(let coordina of this.mapDatao['features'][0]['geometry']['coordinates'][0][0]){
      this.mapData.push({lng:coordina[0],lat:coordina[1]});
    } 
    this.reload = false;
    setTimeout(() => {
      this.reload = true;
    }, 10);
    
  }
}
</script>
