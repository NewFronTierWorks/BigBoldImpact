import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/classroom',
    name: 'classroom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clasroom" */ '../views/ClassroomMain.vue')
  },
  {
    path: '/playroom',
    name: 'playroom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "playroom" */ '../views/PlayroomMain.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacypolicy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "privacy-policy" */ '../views/PrivacyPolicy.vue')
  },
  {
    path: '/card-maker',
    name: 'cardmaker',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cardmaker" */ '../views/CardMaker.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
