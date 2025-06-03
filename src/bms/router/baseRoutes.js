
// 基础路由文件
const DefaultLayout = () => import(/* webpackChunkName: "Login" */'@/bms/layout/DefaultLayout.vue')
const Layout2 = () => import(/* webpackChunkName: "Login" */'@/bms/layout/Layout2/index.vue')
const Empty = () => import(/* webpackChunkName: "Login" */'@/bms/router/Empty.vue')
//
const Login = () => import(/* webpackChunkName: "Login" */'@/bms/views/Login/Login.vue')
const Home = () => import(/* webpackChunkName: "Login" */'@/bms/views/Home/Home.vue')
const Account = () => import(/* webpackChunkName: "Login" */'@/bms/views/Config/Account/index.vue')
const UserRoles = () => import(/* webpackChunkName: "Login" */'@/bms/views/Config/UserRoles/index.vue')
const SMS = () => import(/* webpackChunkName: "Login" */'@/bms/views/Business/SMS/index.vue')

const baseRoutes = [
  {
    path: '/user',
    name: 'User',
    component: DefaultLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: {
          empty: true,
        }
      },
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'business',
        name: 'Business',
        component: Empty,
        redirect: 'SMS',
        children: [
          {
            path: 'sms',
            name: 'SMS',
            component: SMS
          }
        ]
      },
      {
        path: 'config',
        name: 'Config',
        component: Empty,
        redirect: 'Account',
        children: [
          {
            path: 'account',
            name: 'Account',
            component: Account
          },
          {
            path: 'userRoles',
            name: 'UserRoles',
            component: UserRoles
          }
        ]
      }
    ]
  },


]

export default baseRoutes
