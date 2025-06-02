import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'
import '@/bms/assets/styles/init.css'
import router from '@/bms/router/globalRouteGuard'
import ViewIndex from '@/bms/views/index.vue'
import store from '@/bms/store'
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  
  render: h => h(ViewIndex)
}).$mount('#app')
