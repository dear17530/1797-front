import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992
    }
  }
})
