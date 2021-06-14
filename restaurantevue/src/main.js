import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';


import 'jquery/dist/jquery.js';
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.js';

import VueResource from 'vue-resource'
import Router from 'vue-router';


// Duvida se uso (?)
// import http from './http/index.js'
// Vue.prototype.$http = http
// Vue.config.productionTip = false
// (?)

Vue.use(VueResource);
Vue.use(Router);
Vue.http.options.root = 'http://localhost:8080';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
