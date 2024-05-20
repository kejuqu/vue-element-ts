import { BaseService } from './baseService'

export type RequestData = { success: boolean }

export class ReadingService extends BaseService {
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

  books = async () => {
    return this.get('/reading/list')
  }
}

export const readingService = new ReadingService()
