import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')
require('viewport-units-buggyfill').init({
  hacks: hacks
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
