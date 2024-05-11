import type { SignUser } from '@/typings/user'
import { userStoreManager } from '@/utils/store'

import { BaseService } from './baseService'

export class AuthService extends BaseService {
  delayExec(fn: any) {
    return new Promise((resolve) => {
      fn()
      resolve({
        // only mock
        success: true
      })
    })
  }

  login(body: SignUser) {
    return this.delayExec(() => {
      userStoreManager.set(body)
    })
  }

  signup(body: SignUser) {
    return this.delayExec(() => {
      userStoreManager.set(body)
    })
  }
}

export const authService = new AuthService()
