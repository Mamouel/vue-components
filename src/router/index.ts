import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    meta: {
      en: 'Home',
      fr: 'Accueil'
    },
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',
    meta: {
      en: 'Buttons',
      fr: 'Boutons'
    },
    component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    meta: {
      en: 'Cards',
      fr: 'Cartes'
    },
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },
  {
    path: '/inputs',
    name: 'Inputs',
    meta: {
      en: 'Inputs',
      fr: 'Champs de texte'
    },
    component: () => import(/* webpackChunkName: "inputs" */ '../views/Inputs.vue')
  },
  {
    path: '/dropdowns',
    name: 'Dropdowns',
    meta: {
      en: 'Dropdowns',
      fr: 'Listes déroulantes'
    },
    component: () => import(/* webpackChunkName: "dropdowns" */ '../views/Dropdowns.vue')
  },
  {
    path: '/lists',
    name: 'Lists',
    meta: {
      en: 'Lists',
      fr: 'Listes'
    },
    component: () => import(/* webpackChunkName: "lists" */ '../views/Lists.vue')
  },
  {
    path: '/menus',
    name: 'Menus',
    meta: {
      en: 'Menus',
      fr: 'Menus'
    },
    component: () => import(/* webpackChunkName: "menus" */ '../views/Menus.vue')
  },
  {
    path: '/popups',
    name: 'Popups',
    meta: {
      en: 'Popups',
      fr: 'Popups'
    },
    component: () => import(/* webpackChunkName: "popups" */ '../views/Popups.vue')
  },
  {
    path: '/sliders',
    name: 'Sliders',
    meta: {
      en: 'Sliders',
      fr: 'Curseurs'
    },
    component: () => import(/* webpackChunkName: "sliders" */ '../views/Sliders.vue')
  },
  {
    path: '/slideshows',
    name: 'Slideshows',
    meta: {
      en: 'Slideshows',
      fr: 'Carrousels'
    },
    component: () => import(/* webpackChunkName: "slideshows" */ '../views/Slideshows.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
