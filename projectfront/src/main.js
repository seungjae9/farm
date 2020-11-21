import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import VueSession from 'vue-session';

Vue.config.productionTip = false

Vue.use(VueSession);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
