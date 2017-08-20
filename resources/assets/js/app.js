require('./bootstrap');

window.Vue = require('vue');

import Vuex from 'vuex'
import Vuetify from 'vuetify'
import router from './router'

Vue.use(Vuex)
Vue.use(Vuetify)

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    router
});
