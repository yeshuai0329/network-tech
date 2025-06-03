import request from '@/pubs/apis/axios'
const BASEURL = process.env.VUE_APP_BASEURL

// 根据规则获取SmsMessage分页列表
export const getSmsListByRole = (data) => {
  return request({
    url: `${BASEURL}/base/openApi/getSmsListByRole`,
    method: 'post',
    data
  })
}
