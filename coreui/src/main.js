import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'

import store from './store'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import loading from 'vuejs-loading-screen'

import Toasted from 'vue-toasted'
Vue.use(Toasted, {
    duration: 1500,
    theme: 'outline',
    iconPack: 'material'
})

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.prototype.$apiAdress = 'http://127.0.0.1:8000'
// Vue.prototype.$apiAdress = 'http://data.tenado.rcdi.gov.bf'
// Vue.prototype.$apiAdress = 'http://data.manga.rcdi.gov.bf'
// Vue.prototype.$apiAdress = 'http://data.rcdi.gov.bf'
// Vue.prototype.$apiAdress = 'http://172.16.0.165:8000'
// Vue.prototype.$apiAdress = 'http://172.16.0.165:8000'
Vue.prototype.$apiAdress = 'http://192.168.1.159:8000'

Vue.config.performance = true
Vue.use(CoreuiVue)

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
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY hh:mm')
    }
})


window.onload = function() {
    var app = new Vue({
        el: '#app',
        router,
        store,
        icons,
        template: '<App/>',
        components: {
            App
        },
    })
}