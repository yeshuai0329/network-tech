import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/bms/store/user'
import menu from '@/bms/store/menu'
Vue.use(Vuex)

const store = new Vuex.Store({
  // namespaced: true,
  modules: {
    user,
    menu
  }
})
export default store
