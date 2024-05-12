import type { SignUser, User } from '@/typings/user'
import { userStoreManager } from '@/utils/store'

import { BaseService } from './baseService'

export type RequestData = { success: boolean }

export class AuthService extends BaseService {
  async delayExec(fn: any): Promise<RequestData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        fn()
        resolve({
          // only mock
          success: true
        })
      }, 1500)
    })
  }

  async login(body: SignUser): Promise<RequestData> {
    const res = await this.delayExec(() => {
      userStoreManager.set(body)
    })

    return res
  }

  async signup(body: SignUser) {
    return this.delayExec(() => {
      userStoreManager.set(body)
    })
  }

  async getUserInfo(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userStoreManager.get() as User)
      }, 1500)
    })
  }
}

export const authService = new AuthService()
