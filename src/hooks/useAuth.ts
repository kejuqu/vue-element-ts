import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { authService } from '@/services/authService'
import type { User } from '@/typings/user'
import { withoutLoginRoutes } from '@/constants/global'

export const useAuth = () => {
  const router = useRouter()
  const route = useRoute()

  const userInfo = ref<User>()

  onBeforeMount(async () => {
    const user = await authService.getUserInfo()
    const isLocationInWithoutLoginRoutes = withoutLoginRoutes.includes(route.path)

    if (user) {
      userInfo.value = user
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
    userInfo,
    isLogin: !!userInfo.value
  }
}
