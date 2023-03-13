import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import "aos/dist/aos.css"
import Vuetyper from 'vue-typer'
import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false
Vue.use(AOS)
Vue.use(Vuetyper)
Vue.use(VueApexCharts)

new Vue({
  mounted() {
    AOS.init()
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
