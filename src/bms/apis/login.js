import request from '@/bms/apis/axios'
const BASEURL = process.env.VUE_APP_BASEURL

// 账号密码登录
export const loginApi = (data) => {
  return request({
    url: `${BASEURL}/base/user/login`,
    method: 'post',
    data
  })
}
