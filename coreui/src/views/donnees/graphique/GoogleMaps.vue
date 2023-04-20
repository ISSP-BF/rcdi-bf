<template>
  <GmapMap
    v-if="reload"
    :center="center"
    :zoom="11"
    style="height: 70vh"
    ref="mapRef"
  >
    <GmapInfoWindow
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen = false"
    >
       <h4>{{ infoContent }} </h4>
       <h5>Valeur : {{ valeur }} </h5>
       <h7>Source : {{ source }} </h7>
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

    <GmapPolygon :draggable="false" :path.sync="mapDatao" />
  </GmapMap>
</template>

<script>
import * as VueGoogleMaps from "vue2-google-maps";
import Vue from "vue";

Vue.use(VueGoogleMaps, {
  load: {
    // key: "AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA",
    key: '',
    // To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
    v: "OPTIONAL VERSION NUMBER",
    // libraries: 'places', //// If you need to use place input
  },
});

export default {
  name: "GoogleMaps",
  props: ["mapDatao", "center","markers"],
  data() {
    return {
      mapData: [],
      reload: true,
      infoContent: "",
      infoLink: "",
      valeur: "",
      source:"",
      infoWindowPos: {
        lat: 0,
        lng: 0,
      },
      mapData: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  methods: {
    
    toggleInfoWindow (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.title
      this.valeur = marker.valeur
      this.source = marker.source
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
  
};
</script>
