import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routers from './routers'

import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})


const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
