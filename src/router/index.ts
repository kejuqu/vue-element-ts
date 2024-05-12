import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authService } from '@/services/authService'
import { withoutLoginRoutes } from '@/constants/global'

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
    },
    {
      path: '/profile',
      name: 'profile',
      component: HomeView
    }
  ]
})

// global navigation guard
router.beforeEach(async (to, from) => {
  const user = await authService.getUserInfo()
  const toWithoutAuthRoutes = withoutLoginRoutes.includes(to.path)

  // if user exists and keeping in current page
  if (user && toWithoutAuthRoutes) {
    return from.path
  }

  // if user not exists and going to login page
  if (!user && !toWithoutAuthRoutes) {
    return `/login?redirect=${from.path}`
  }
})

export default router
