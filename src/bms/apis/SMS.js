import request from '@/bms/apis/axios'
const BASEURL = process.env.VUE_APP_BASEURL

// 获取SMS短信分页查询-----需要token
export const getSMSApi = (data) => {
  return request({
    url: `${BASEURL}/base/msg/getPageList`,
    method: 'post',
    data
  })
}

// 获取SMS短信规则分页查询-
export const getSmsDataRulesApi = (data) => {
  return request({
    url: `${BASEURL}/base/smsDataRules/getPageList`,
    method: 'post',
    data
  })
}

// 添加SMS短信规则
export const addSmsDataRulesApi = (data) => {
  return request({
    url: `${BASEURL}/base/smsDataRules/add`,
    method: 'post',
    data
  })
}

// 修改SmsDataRules对象

// 添加SMS短信规则
export const editSmsDataRulesApi = (data) => {
  return request({
    url: `${BASEURL}/base/smsDataRules/update`,
    method: 'post',
    data
  })
}

// 删除SmsDataRules对象
export const delSmsDataRulesApi = (data) => {
  return request({
    url: `${BASEURL}/base/smsDataRules/delete`,
    method: 'post',
    data
  })
}