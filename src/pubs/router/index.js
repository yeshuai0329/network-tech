import Vue from 'vue'
import VueRouter from 'vue-router'
import baseRoutes from '@/pubs/router/baseRoutes'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/pubs',
  routes: baseRoutes
})

// 解决菜单重复点击控制台报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

// --------------------------------------------------- 全局前置守卫 -------------------------------------------------/
router.beforeEach((to, from, next) => {
  // 重定向
  if (to.path === '/') {
    next('/user')
  }
  next()
})

// --------------------------------------------------- 全局后置守卫 -------------------------------------------------/

// 修改title
router.afterEach((to, from, next) => {
  document.title = to.meta.title || '梦腾科技公开业务系统'
})

export default router
