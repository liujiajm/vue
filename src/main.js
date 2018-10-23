// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//http://027xin.com:8899
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.emulateJSON = true;

Vue.http.options.root = "http://027xin.com:8899"


import moment from 'moment'

Vue.filter('dateFormat',function (dateStr,pattern = 'YYYY-MM-DD HH:mm:ss') { 
  return moment(dateStr).format(pattern)
 })

 import VuePreview from 'vue-preview'
 Vue.use(VuePreview)
//  Vue.use(preview, {
//    mainClass: 'pswp--minimal--dark',
//    barsSize: {
//      top: 0,
//      bottom: 0
//    },
//    captionEl: false,
//    fullscreenEl: false,
//    shareEl: false,
//    bgOpacity: 0.85,
//    tapToClose: true,
//    tapToToggleControls: false
//  })

import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

import { Swipe,SwipeItem } from 'mint-ui'
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
