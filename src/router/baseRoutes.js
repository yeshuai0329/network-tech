// 基础路由文件
const DefaultLayout = () => import(/* webpackChunkName: "Login" */'@/layout/DefaultLayout.vue')
const Layout2 = () => import(/* webpackChunkName: "Login" */'@/layout/Layout2/index.vue')
const Empty = () => import(/* webpackChunkName: "Login" */'@/router/Empty.vue')
//
const Login = () => import(/* webpackChunkName: "Login" */'@/views/Login/Login.vue')
const Home = () => import(/* webpackChunkName: "Login" */'@/views/Home/Home.vue')
const Account = () => import(/* webpackChunkName: "Login" */'@/views/Config/Account/index.vue')
const UserRoles = () => import(/* webpackChunkName: "Login" */'@/views/Config/UserRoles/index.vue')
const SMS = () => import(/* webpackChunkName: "Login" */'@/views/Business/SMS/index.vue')

const baseRoutes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
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
  // 不需要登录
  {
    path: '/msg',
    name: 'MSG',
    component: Layout2,
    meta:{
      notNeedLogin:true
    }

  }
]

export default baseRoutes
