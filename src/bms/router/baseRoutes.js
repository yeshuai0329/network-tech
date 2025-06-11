
// 基础路由文件
const DefaultLayout = () => import(/* webpackChunkName: "DefaultLayout" */'@/bms/layout/DefaultLayout.vue')
const Empty = () => import(/* webpackChunkName: "Empty" */'@/bms/router/Empty.vue')
//
const Login = () => import(/* webpackChunkName: "Login" */'@/bms/views/Login/Login.vue')
const Home = () => import(/* webpackChunkName: "Home" */'@/bms/views/Home/Home.vue')
const Account = () => import(/* webpackChunkName: "Account" */'@/bms/views/Config/Account/index.vue')
const UserRoles = () => import(/* webpackChunkName: "UserRoles" */'@/bms/views/Config/UserRoles/index.vue')
const SMS = () => import(/* webpackChunkName: "SMS" */'@/bms/views/Business/SMS/index.vue')
const SMSDataRules = () => import(/* webpackChunkName: "SMSDataRules" */'@/bms/views/Business/SMSDataRules/index.vue')

const baseRoutes = [
  {
    path: '/user',
    name: 'User',
    component: DefaultLayout,
    redirect: { name: 'Home' },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: {
          empty: true
        }
      },
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          defaultActive: '1'
        }
      },
      {
        path: 'business',
        name: 'Business',
        component: Empty,
        redirect: { name: 'SMS' },
        meta: {
          defaultActive: '2'
        },
        children: [
          {
            path: 'sms',
            name: 'SMS',
            component: SMS,
            meta: {
              defaultActive: '3'
            }
          },
          {
            path: 'smsDataRules',
            name: 'SMSDataRules',
            component: SMSDataRules,
            meta: {
              defaultActive: '4'
            }
          }
        ]
      },
      {
        path: 'config',
        name: 'Config',
        component: Empty,
        redirect: { name: 'Account' },
        meta: {
          defaultActive: '5'
        },
        children: [
          {
            path: 'account',
            name: 'Account',
            component: Account,
            meta: {
              defaultActive: '6'
            }
          },
          {
            path: 'userRoles',
            name: 'UserRoles',
            component: UserRoles,
            meta: {
              defaultActive: '7'
            }
          }
        ]
      }
    ]
  }

]

export default baseRoutes
