import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/init.css'
import router from '@/router/globalRouteGuard'
import ViewIndex from '@/views/index.vue'
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(ViewIndex)
}).$mount('#app')
