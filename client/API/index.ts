import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

const instance = axios.create({
  baseURL: `${process.env.API_PROTOCOL}${process.env.API_URL}/`,
  timeout: 30000,
  headers: {'X-Custom-Header': 'foobar'}
})

export type { AxiosResponse, AxiosRequestConfig, AxiosError }

export default instance
