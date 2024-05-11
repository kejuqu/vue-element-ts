import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

type CustomOption<FR = any, Res = any, Body = any> = {
  formatResponse: <Res, Body>(response: Promise<AxiosResponse<Res, Body>>) => any
}

export class BaseService {
  async defaultFormatResponse<Res = any, Body = any>(response: Promise<AxiosResponse<Res, Body>>) {
    const { data } = await response
    return data
  }

  get(url: string, config: AxiosRequestConfig<any> & CustomOption) {
    const { formatResponse, ...restConfig } = config || {}
    const format = formatResponse || this.defaultFormatResponse

    return format(axios.get(url, restConfig))
  }

  post(url: string, body: any, config?: AxiosRequestConfig<any> & CustomOption) {
    const { formatResponse, ...restConfig } = config || {}
    const format = formatResponse || this.defaultFormatResponse

    return format(axios.post(url, body, restConfig))
  }
}
