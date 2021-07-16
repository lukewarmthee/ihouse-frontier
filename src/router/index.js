import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Regist from '../views/Regist.vue'
import Houses from '../views/Houses.vue'
import SearchHouses from '../views/SearchHouses.vue'
import Detail from '../views/Detail.vue'
import Userinfo from '../views/Userinfo.vue'
import Orders from '../views/Orders.vue'
import Publish from '../views/Publish.vue'
import Published from '../views/Published.vue'
import Admin from '../views/Admin.vue'
import UserManagement from '../views/UserManagement.vue'
import OrderManagement from '../views/OrderManagement.vue'
import HouseManagement from '../views/HouseManagement.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/users',
    name: 'UserManagement',
    component: UserManagement
  },
  {
    path: '/admin/orders',
    name: 'OrderManagement',
    component: UserManagement
  },
  {
    path: '/admin/publish',
    name: 'Publish',
    component: Publish
  },
  {
    path: '/admin/houses',
    name: 'HouseManagement',
    component: HouseManagement
  },
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: Userinfo
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  },
  {
    path: '/published',
    name: 'Published',
    component: Published
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  }, {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/houses/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/searchHouses',
    name: 'SearchHouses',
    component: SearchHouses
  },
  {
    path: '/home',
    name: 'Index',
    component: Index
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
