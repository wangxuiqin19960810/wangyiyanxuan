//配置多个路由的模块
import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Profile from '../pages/Profile/Profile.vue'


export default [
  {
    path: '/',
    redirect: '/msite'   
  },
  {
    path: '/msite',
    component: Msite,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/shiwu',
    component: ShiWu,
  },
  {
    path: '/shopcar',
    component: ShopCar,
  },
  {
    path: '/profile',
    component: Profile,
  }
]