/**
 * @description:  保存用户信息相关状态
 */
const state = {
  isCollapse: false,
  defaultActive:localStorage.getItem('defaultActive') || null
}

/**
 * @description:  响应组件中用户的动作
 */
const actions = {
  // 设置用户菜单列表
  isCollapseAct (context, value) {
    context.commit('isCollapseMut', value)
  },
   // 设置激活的菜单
  defaultActiveAct (context, value) {
    context.commit('defaultActiveMut', value)
  }
}

/**
 * @description:  修改state中用户信息相关状态的数据
 */
const mutations = {
  // 设置用户菜单信息
  isCollapseMut (state, value) {
    state.isCollapse = value
  },
   // 设置激活的菜单
  defaultActiveMut (state, value) {
    state.defaultActive = value
  }
}

const menu = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default menu
