import Vue from 'vue'

// Local
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

// Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// Font Awesome Vue
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faUser)
Vue.component('font-awesome-icon', FontAwesomeIcon)


//Bootstrap-Vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

// Vuex - Store 
import store from './store/store'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
