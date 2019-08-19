/* 
  路由器模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

//声明使用vue-router
Vue.use(VueRouter)
import routes from './routes'

export default new VueRouter({
  mode:'history',//没有#
  routes
})