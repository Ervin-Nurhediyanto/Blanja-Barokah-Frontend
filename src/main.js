import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2Editor from 'vue2-editor'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const options = {
  confirmButtonColor: '#d31d0d',
  cancelButtonColor: '#ff7674'
}
Vue.use(VueSweetalert2, options)
Vue.use(Vue2Editor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
