import axios from 'axios'
import { message } from 'element-ui'

const instance = axios.create({
  timeout: 30000 // 超时时间

})


// 请求拦截器：在请求被发送出去之前，做一些验证工作
instance.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token')
  return config
}, (error) => {
  return Promise.reject(error)
})


// 响应拦截器：在响应到达之前，先进行数据过滤，错误处理
instance.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response
  } else {
    message.error('服务器异常')
    return response
  }
}, (error) => {
  return Promise.reject(error)
})

export default instance
