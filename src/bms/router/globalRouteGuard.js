import router from '@/bms/router/router'

// --------------------------------------------------- 全局前置守卫 -------------------------------------------------/
// 判断用户是否登录
router.beforeEach((to, from, next) => {
  console.log('to',to)
  // 如果是去login 页面,放行
  // if (to.path === '/login') {

  //   next()
  // } else {
  //   const token = localStorage.getItem('token')
  //   if (!token && !to.meta.notNeedLogin) {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // 
  next()
})

// --------------------------------------------------- 全局后置守卫 -------------------------------------------------/

// 修改title
router.afterEach((to, from, next) => {
  document.title = to.meta.title || '梦腾网络科技'
})

export default router
