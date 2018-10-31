// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入base.css
import './assets/style/base.css'
// 引入font-awesome
import 'font-awesome/css/font-awesome.min.css'
const FastClick = require('fastclick')
FastClick.attach(document.body)

// 在入口文件全局引入

import { Actionsheet,Flexbox, FlexboxItem ,Divider,Search,Swiper} from 'vux'

Vue.component('actionsheet', Actionsheet,)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('divider', Divider)
Vue.component('search', Search)
Vue.component('swiper', Swiper)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
