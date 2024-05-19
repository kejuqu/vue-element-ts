import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../layouts/index.vue'
import { menus } from '@/constants/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/sign-up',
      name: 'Sign up',
      component: () => import('../views/signup.vue')
    },
    {
      path: '/',
      name: 'Home',
      redirect: '/reading',
      component: Layout,
      children: [...menus]
    }
  ]
})

// global navigation guard
// router.beforeEach(async (to, from) => {
//   const user = await authService.getUserInfo()
//   const toWithoutAuthRoutes = withoutLoginRoutes.includes(to.path)

//   // if user exists and keeping in current page
//   if (user && toWithoutAuthRoutes) {
//     return from.path
//   }

//   // if user not exists and going to login page
//   if (!user && !toWithoutAuthRoutes) {
//     return `/login?redirect=${from.path}`
//   }
// })

export default router
