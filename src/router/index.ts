import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },
  {
    path: '/inputs',
    name: 'Inputs',
    component: () => import(/* webpackChunkName: "inputs" */ '../views/Inputs.vue')
  },
  {
    path: '/dropdowns',
    name: 'Dropdowns',
    component: () => import(/* webpackChunkName: "dropdowns" */ '../views/Dropdowns.vue')
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import(/* webpackChunkName: "lists" */ '../views/Lists.vue')
  },
  {
    path: '/menus',
    name: 'Menus',
    component: () => import(/* webpackChunkName: "menus" */ '../views/Menus.vue')
  },
  {
    path: '/popups',
    name: 'Popups',
    component: () => import(/* webpackChunkName: "popups" */ '../views/Popups.vue')
  },
  {
    path: '/sliders',
    name: 'Sliders',
    component: () => import(/* webpackChunkName: "sliders" */ '../views/Sliders.vue')
  },
  {
    path: '/slideshows',
    name: 'Slideshows',
    component: () => import(/* webpackChunkName: "slideshows" */ '../views/Slideshows.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
