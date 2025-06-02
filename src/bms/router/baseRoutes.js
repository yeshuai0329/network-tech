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
    path: 'Login',
    name: 'Login',
    component: Login
  },
  {
    path: 'home',
    name: 'DefaultLayout',
    component: DefaultLayout,
    redirect: 'Home',
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: Home
      },
      {
        path: 'Business',
        name: 'Business',
        component: Empty,
        children: [
          {
            path: 'SMS',
            name: 'SMS',
            component: SMS
          }
        ]
      },
      {
        path: 'Config',
        name: 'Config',
        component: Empty,
        children: [
          {
            path: 'Account',
            name: 'Account',
            component: Account
          },
          {
            path: 'UserRoles',
            name: 'UserRoles',
            component: UserRoles
          }
        ]
      }
    ]
  },

]

export default baseRoutes
