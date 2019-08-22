//配置多个路由的模块
import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Find from '../pages/Find/find.vue'
import ZhengXuanJia from '../pages/ZhengXuanJia/ZhengXuanJia.vue'
export default [
  
  {
    path: '/msite',
    component: Msite,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/shiwu',
    component: ShiWu,
    meta:{
      showFooter:true
    },
    children:[
      {
        path: '/shiwu',
        redirect: '/shiwu/find/0' 
      },
      {
        path: '/shiwu/find',
        redirect: '/shiwu/find/0' 
      },
      {
        path: '/shiwu/find/:id',
        component: Find,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/shiwu/zhengxuanjia',
        component: ZhengXuanJia
      }
    ]
  },
  {
    path: '/shopcar',
    component: ShopCar,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/',
    redirect: '/msite'   
  }
]