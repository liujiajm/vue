// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//http://027xin.com:8899
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(MintUI)

import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

import {
  Swipe,
  SwipeItem
} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
