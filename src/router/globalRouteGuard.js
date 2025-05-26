import router from '@/router/router'

// --------------------------------------------------- 全局前置守卫 -------------------------------------------------/
// 判断用户是否登录
router.beforeEach((to, from, next) => {
  // 如果是去login 页面,放行
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})

// --------------------------------------------------- 全局后置守卫 -------------------------------------------------/

// 修改title
router.afterEach((to, from, next) => {
  document.title = to.meta.title || '梦腾网络科技'
})



export default router