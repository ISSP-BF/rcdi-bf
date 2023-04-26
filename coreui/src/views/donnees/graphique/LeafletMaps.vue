<template>
  <l-map style="height: 80vh" :zoom="zoom" :center="center"> 
    <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        :token="token"
        layer-type="base"
      />
      <l-control-attribution
        :position="attributionPosition"
        :prefix="attributionPrefix"
      />
    <l-marker
    :key="index"
          v-for="(m, index) in markers"
    :lat-lng="[m.lat,m.lon]"></l-marker>
      <l-geo-json
        v-if="show"
        :geojson="mapDatao"
      />
  </l-map>
</template>

<script>

const tileProviders = [
  {
    name: 'OpenStreetMap',
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'OpenTopoMap',
    visible: false,
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
];
import {LMap, LTileLayer, LMarker, LGeoJson,LControlAttribution } from "vue2-leaflet";

export default {
  name: "LeafletMaps",
  props: ["mapDatao", "centero","markers"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlAttribution,LGeoJson
  },
  data () {
    return {
      geojson: null,
      loading: false,
      token: 'your token if using mapbox',
      show: true,
      tileProviders: tileProviders,
      zoomPosition: 'topleft',
      attributionPosition: 'bottomright',
      layersPosition: 'topright',
      attributionPrefix: 'Vue2Leaflet',
      imperial: false,
      Positions: ['topleft', 'topright', 'bottomleft', 'bottomright'],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 12,
      center: [this.centero.lat,this.centero.lon],
      markerLatLng: [this.centero.lat,this.centero.lon]
    };
  },
  watch: {
    reloadParams() { 
       this.init();
    },
  },
  computed:{
    reloadParams() {
      return [this.markers,this.mapDatao,this.centero
      ];
    },
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        };
      };
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>code:" +
            feature.properties.code +
            "</div><div>nom: " +
            feature.properties.nom +
            "</div>",
          { permanent: false, sticky: true }
        );
      };
    }
  },
  methods: {
    init(){
    this.loading = true;
    this.geojson = this.mapDatao;
    this.loading = false;
    setTimeout(() => {
      this.refreshing = true;
    }, 10);
    }
  },
  
  mounted() {
    this.init();
  },
  
};
</script>
