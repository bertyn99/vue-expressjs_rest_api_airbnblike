import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Location from '../views/Location.vue'
import Goods from '../views/Goods.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/location',
    name: 'location',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* component: () => import(/* webpackChunkName: "about"  '../views/About.vue') */
    component: Location
  },
  {
    path: '/goods',
    name: 'goods',
    component: Goods
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
