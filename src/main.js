import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import Vuex from 'vuex'
Vue.use(Vuex)

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
Vue.use(BootstrapVue);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import store from './store'
import router from './router'

new Vue({ 
  store,
  router,
  render: h => h(App),
}).$mount('#app')
