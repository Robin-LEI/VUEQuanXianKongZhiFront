// 自定义指令
import Vue from 'vue'
import router from '@/router.js'

Vue.directive('permission', {
  // 指令被插入到dom中
  inserted(el, binding) {
    const action = binding.value.action
    const disabled = binding.value.disabled
    if (router.currentRoute.meta.indexOf(action) == -1) {
      // 没有权限 移除该元素
      // 没有权限不一定移除 我也可以给你禁用
      if (disabled) {
        el.disabled = true
        // 因为ui框架用的是element-ui
        el.classList.add('is-disabled')
      } else {
        el.parentNode.removeChild(el)
      }
    } else {
    }
  }
})