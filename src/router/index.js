import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/choose',
    name: 'Choose',
    component: () => import( '../views/Choose.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import( '../views/Main.vue')
  },
  {
    path: '/journal',
    name: 'Journal',
    component: () => import( '../views/Journal.vue')
  },
  {
    path: '/control',
    name: 'Control',
    component: () => import( '../views/Control.vue')
  },
  {
    path: '/dispetch',
    name: 'Dispetch',
    component: () => import( '../views/Dispetch.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import( '../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
