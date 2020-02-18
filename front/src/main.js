// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
// import VueSession from 'vue-session'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueParticles from 'vue-particles'

import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

// Vue.use(VueSession)
Vue.use(VueParticles)
Vue.component('font-awesome-icon', FontAwesomeIcon)

require('./scss/styles.sass');

// Vue.config.productionTip = false
// Vue.prototype.$http = axios
//
// axios.defaults.baseURL = process.env.BACK_URL
// axios.defaults.headers.common['Accept'] = 'application/json'
// axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.withCredentials = true
// axios.defaults.headers.credentials = 'same-origin'

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
