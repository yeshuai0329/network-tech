import Vue from 'vue'
import VueRouter from 'vue-router'
import baseRoutes from '@/router/baseRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: baseRoutes
})

// 解决菜单重复点击控制台报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
