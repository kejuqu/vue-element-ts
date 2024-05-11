import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: () => import('../views/signup.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
