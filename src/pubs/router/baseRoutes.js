
// 基础路由文件
const Empty = () => import(/* webpackChunkName: "Empty" */'@/bms/router/Empty.vue')
const SMS = () => import(/* webpackChunkName: "SMS" */'@/pubs/views/SMS/index.vue')

const baseRoutes = [
  {
    path: '/user',
    name: 'User',
    component: Empty,
    redirect: { name: 'SMS' },
    children: [
      {
        path: 'sms',
        name: 'SMS',
        component: SMS
      }
    ]
  }

]

export default baseRoutes
