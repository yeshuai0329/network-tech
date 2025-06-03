import request from '@/apis/axios'
const BASEURL = process.env.VUE_APP_BASEURL

// 账号密码登录
export const getSMSApi = (data) => {
  return request({
    url: `${BASEURL}/base/msg/getPageList`,
    method: 'post',
    data
  })
}
