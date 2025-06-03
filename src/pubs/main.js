import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'
import '@/pubs/assets/styles/init.css'
import router from '@/pubs/router'
import App from '@/pubs/App.vue'
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
