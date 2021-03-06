import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './scss/all.scss'
import '@mdi/font/css/materialdesignicons.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'vue-img-inputer/dist/index.css'
import mixin from './mixin.js'
import '@egjs/vue-flicking/dist/flicking.css'
import '@egjs/vue-flicking/dist/flicking-inline.css'

import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import VuePaycard from 'vue-paycard'
import VueApexCharts from 'vue-apexcharts'
import Flicking from '@egjs/vue-flicking'

import VueGtag from 'vue-gtag'
Vue.use(VueGtag, {
  config: { id: 'G-H8N52XCD53' }
})

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)

axios.defaults.baseURL = process.env.VUE_APP_API
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(Flicking)
Vue.component('apexchart', VueApexCharts)
Vue.component('vueFilePond', FilePond)
Vue.use(VuePaycard)
Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
