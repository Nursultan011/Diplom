import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/main.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../pages/catalog.vue')
  },
  {
    path: '/busket',
    name: 'busket',
    component: () => import(/* webpackChunkName: "busket" */ '../pages/busket.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../pages/settings.vue'),
    children: [
      {
        path: 'account',
        component: () => import(/* webpackChunkName: "settings" */ '../components/partials/Settings/Account.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
