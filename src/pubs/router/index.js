import Vue from 'vue'
import VueRouter from 'vue-router'
import SMS from '@/pubs/views/SMS/index.vue'
import Empty from "@/bms/router/Empty.vue"
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/pubs',
  routes: [
    {
      path: "/",
      name: "Root",
      component: Empty,
      redirect: { name: "SMS" },
      children: [
        {
          path: "sms",
          name: "SMS",
          component: SMS
        }
      ]
    }
  ]
})

// 解决菜单重复点击控制台报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

// --------------------------------------------------- 全局前置守卫 -------------------------------------------------/
// 判断用户是否登录
router.beforeEach((to, from, next) => {
  console.log('to', to)
  next()

})

// --------------------------------------------------- 全局后置守卫 -------------------------------------------------/

// 修改title
router.afterEach((to, from, next) => {
  document.title = to.meta.title || '梦腾科技公开业务系统'
})


export default router
