import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
    username: sessionStorage.getItem('username') || ''
  },
  mutations: {
    setRightList(state, data) {
      state.rightList = data
      // 存入一份到sessionStorage，防止刷新浏览器数据丢失
      sessionStorage.setItem('rightList', JSON.stringify(data))
    },
    setUsername(state, data) {
      state.username = data
      sessionStorage.setItem('username', data)
    }
  },
  actions: {
  },
  getters: {
  }
})
