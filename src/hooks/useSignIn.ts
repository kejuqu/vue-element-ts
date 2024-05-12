import { useRoute, useRouter } from 'vue-router'
import type { SignUser } from '@/typings/user'
import { useMutation, type UseMutationReturnType } from '@tanstack/vue-query'
import { authService, type RequestData } from '@/services/authService'

export type RequestOptions = {
  autoRequest: boolean
}

export const useSignIn = (): UseMutationReturnType<RequestData, Error, SignUser, any> => {
  const router = useRouter()
  const route = useRoute()

  const mutation = useMutation({
    mutationFn: async (values: SignUser) => {
      return authService.login(values)
    },
    onSuccess(data: { success: boolean }) {
      if (data.success) {
        router.push(`${route.query.redirect || '/'}`)
      }
    }
  })

  return {
    ...mutation
  }
}
