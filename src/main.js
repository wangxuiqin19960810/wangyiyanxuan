import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'
import './mockData/mockServer.js'
import './validate'
import loading from './common/images/hh.jpg'
Vue.config.productionTip = false

//声明使用VueLazyload ===>生成一个全局指令lazy
Vue.use(VueLazyload, {
  loading
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
