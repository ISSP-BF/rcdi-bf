import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import { iconsSet as icons } from './assets/icons/icons.js'

import CoreuiVuePro from '../node_modules/@coreui/vue-pro/src/index.js'
import i18n from './i18n.js'
import store from './store'
import loading from 'vuejs-loading-screen'
import Toasted from 'vue-toasted'
import HighchartsVue from 'highcharts-vue'
Vue.use(HighchartsVue)
import * as VueGoogleMaps from 'vue2-google-maps'
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)

Vue.use(VueGoogleMaps, {
    load: {
        // key: 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA',
        key: '',
        // To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
        // v: 'OPTIONAL VERSION NUMBER',
        // libraries: 'places', //// If you need to use place input
    }
})


import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker);

Vue.use(Toasted, {
        duration: 1500,
        theme: 'outline',
        iconPack: 'material'
    })
    /* add icons to the library */
    // library.add(faUserSecret)

/* add font awesome icon component */
// Vue.component('font-awesome-icon', FontAwesomeIcon)


let adresse = location.protocol + "//" + location.hostname

// Adresse local
if (location.port == 8080) { adresse = adresse + ":8000" }
// Adresse web
else if (location.port == 8000) { adresse = adresse + ":8000/index.php" }
// Adresse web
else if (location.port == 80) { adresse = adresse + "/backend/index.php" } else {
    adresse = adresse + "/backend/public/index.php"
}
// console.log(location, " Information location")
// Vue.prototype.$apiAdress = 'http://127.0.0.1:8000'
Vue.prototype.$apiAdress = adresse
Vue.prototype.$apiAdressSite = 'https://rcdi.bf/wp-json/wp/v2/posts';
// Vue.prototype.$apiAdress = 'http://data.tenado.rcdi.gov.bf/index.php'
// Vue.prototype.$apiAdress = 'http://data.manga.rcdi.gov.bf/index.php'
// Vue.prototype.$apiAdress = 'http://data.rcdi.gov.bf'
// Vue.prototype.$apiAdress = 'http://172.16.0.165:8000'
// Vue.prototype.$apiAdress = 'http://172.16.0.165:8000'
// Vue.prototype.$apiAdress = 'http://192.168.5.1:8000'
// Vue.prototype.$apiAdress = 'http://127.0.0.1:8000'

Vue.config.performance = true

import axios from "axios";
Vue.prototype.$axios = axios

Vue.use(loading, {
    bg: '#ebedef',
    icon: 'refresh',
    size: 3,
    icon_color: 'white',
})

import moment from 'moment'

Vue.filter('formatDateShort', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
})
Vue.filter('uppercase', function(value) {
    if (value) {
        return String(value).toUpperCase();
    }
})

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY hh:mm')
    }
})



Vue.use(CoreuiVuePro)
Vue.prototype.$log = console.log.bind(console)

new Vue({
    el: '#app',
    router,
    store,
    //CIcon component documentation: https://coreui.io/vue/docs/components/icon
    icons,
    i18n,
    template: '<App/>',
    components: {
        App
    }
})