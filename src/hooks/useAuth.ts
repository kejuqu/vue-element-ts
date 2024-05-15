import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { authService } from '@/services/authService'
import type { User } from '@/typings/user'
import { withoutLoginRoutes } from '@/constants/global'
import { userStoreManager } from '@/utils/store'

const getUsernameByEmail = (email?: string) => {
  if (!email) return ''
  return email.split('@')[0]
}

export const useAuth = () => {
  const router = useRouter()
  const route = useRoute()

  let userInfo = reactive<User>(userStoreManager.get() as User)

  authService.getUserInfo().then((user) => {
    const isLocationInWithoutLoginRoutes = withoutLoginRoutes.includes(route.path)

    if (user) {
      Object.assign(userInfo, user)

      console.log('userInfoLLLL', userInfo)
      if (isLocationInWithoutLoginRoutes) {
        router.push('/')
      }
      return
    }

    if (!isLocationInWithoutLoginRoutes) {
      router.push(`/login?redirect=${route.path}`)
    }
  })
  return {
    userInfo: {
      ...userInfo,
      username: getUsernameByEmail(userInfo?.email)
    },
    isLogin: !!userInfo?.email
  }
}
