<template>
  <CCard>
    <CCardHeader>
      <CIcon name="cil-map"/>
      Vue Google Maps
      <a 
        href="https://coreui.io/pro/vue/" 
        rel="noreferrer noopener" 
        target="_blank" 
        class="badge badge-danger ml-1"
      >
        CoreUI Pro
      </a>
      <div class="card-header-actions">
        <a 
          href="https://github.com/xkjyeah/vue-google-maps" 
          rel="noreferrer noopener" 
          target="_blank" 
          class="card-header-action"
        >
          <small class="text-muted">docs</small>
        </a>
      </div>
    </CCardHeader>
    <CCardBody>  
      <GmapMap  v-if="reload"
        :center="center"
        :zoom="11"
        style="height: 80vh"
        ref="mapRef"
      >
        <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
          <CLink :href="infoLink" target="_blank">{{infoContent}}</CLink>
        </GmapInfoWindow>
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :label="m.label"
          :title="m.title"
          :clickable="true"
          :draggable="m.draggable"
          @click="toggleInfoWindow(m, index)"
        />
        <GmapCircle :center="m.position" :zoom="7" :key="index" :radius="m.volume"
          v-for="(m, index) in markers" />
        <GmapPolygon
        
          :draggable="false"
      :path.sync="tenadoMapData"
    />
      </GmapMap>
      
    </CCardBody>
  </CCard>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
import mapData from './tenado.geo.json'
import tenadoMapDat from './tenadodata.json'
import ecoledata from './ecoledata.json'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA',
    // key: '',
    // To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
    v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input
  }
})

export default {
  name: 'google-maps',
  data () {
    return {
      reload:true,
      tenadoMapData:tenadoMapDat,
      center: {lng: -2.66153, lat: 12.19218},
      markers: [{
        position: {lat: 12.19218, lng: -2.66153},
        label: 'S',
        draggable: false,
        title: 'Stanford',
        www: 'https://www.stanford.edu/'
      }, {
        position: {lat: 12.19218, lng: -2.63153},
        label: 'T',
        draggable: false,
        title: 'Tesla',
        www: 'https://www.tesla.com/'
      }, {
        position: {lat: 37.331681, lng: -122.030100},
        label: 'A',
        draggable: false,
        title: 'Apple',
        www: 'https://www.apple.com/'
      }, {
        position: {lat: 37.484722, lng: -122.148333},
        label: 'F',
        draggable: false,
        title: 'Facebook',
        www: 'https://www.facebook.com/'
      }],
      lines: [{
        id:0,
        path: [{lat: 12.19218, lng: -2.66153},{lat: 12.19218, lng: -2.63153}],
        label: 'S',
        draggable: false,
        title: 'Stanford',
        www: 'https://www.stanford.edu/'
      }, 
    ],
      infoContent: '',
      infoLink: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      // optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  methods: {
    toggleInfoWindow (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.title
      this.infoLink = marker.www
      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        // if different marker set infowindow to open and reset current marker index
        this.currentMidx = idx
        this.infoWinOpen = true
      }
    }
  },
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 12.19218, lng: -2.66153});
      // INITISALISATION DU POLYGONE
      map['features'] = mapData['features'];
      // map.data.loadGeoJson('http://example.com/states.json');
    })
    // let sql = "";
    this.markers = [];
    
    for(let o of ecoledata){
     let lng =  o.geometry.coordinates[0]
     let lat =  o.geometry.coordinates[1]
    //  if(o.properties.type=="EDUCATION"&&o.properties.Code_Provi==22){
    //   sql = sql + `INSERT INTO ecoles SET lat='${lat}', lon='${lng}',nom_structure="${o.properties.Désignati}",province_id=${o.properties.Code_Provi},commune_id=2208;\n`
    //  }
     
     if(o.properties.type=="EDUCATION"&&o.properties.Code_Provi==22){
      let mark =
      {
        position: {lat: lat, lng: lng},
        label: o.properties.Désignati.charAt(0),
        draggable: false,
        title: o.properties.Désignati,
        www: 'https://www.apple.com/',
        volume : Math.random()*1000
      }
      this.markers.push(mark)
     }
    }
    console.log(this.markers)
    this.reload = false;
    setTimeout(() => {
      this.reload = true;
    }, 10);
    // console.log(sql)
  }
}
</script>
