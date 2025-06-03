import Vue from 'vue'
import VueRouter from 'vue-router'
import baseRoutes from '@/bms/router/baseRoutes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base:'/bms',
  routes: baseRoutes
})

// 解决菜单重复点击控制台报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

// --------------------------------------------------- 全局前置守卫 -------------------------------------------------/
// 判断用户是否登录
router.beforeEach((to, from, next) => {
  // 如果是去login 页面,放行
  if (to.path === '/' || to.path === '/user') {
    next('/user/home')
  }
  if (to.path === '/user/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
      next('/user/login')
    } else {
      next()
    }
  }
})

// --------------------------------------------------- 全局后置守卫 -------------------------------------------------/

// 修改title
router.afterEach((to, from) => {
  document.title = to.meta.title || '梦腾科技内部业务系统'
  store.dispatch('menu/defaultActiveAct',to.meta.defaultActive)

})


export default router
