import axios from 'axios'
import Vue from 'vue'
import router from '@/router.js'
// 配置请求的跟路径, 目前用mock模拟数据, 所以暂时把这一项注释起来
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// 请求的api遵循的是restful风格的api
const reqMapping = {
  get: 'view',
  post: 'add',
  put: 'update',
  delete: 'delete'
}

axios.interceptors.request.use(req => {
  if (req.url !== 'login') {
    req.headers.Authorization = sessionStorage.getItem('token')
  }
  // 当前路由下面有的哪些权限列表
  const rights = router.currentRoute.meta
  // 拿到当前请求方式
  const methods = reqMapping[req.method && req.method.toLocaleLowerCase()]
  if (Object.keys(rights).length !== 0 && rights.indexOf(methods) === -1) {
    alert('权限不足')
    return Promise.reject(new Error('权限不足'))
  }
  return req
})

axios.interceptors.response.use(res => {
  // 没有权限 跳转到登陆页面
  if (res && res.data.meta.status === 401) {
    sessionStorage.clear()
    router.push('/login')
    window.location.reload()
  }
  return res
})

Vue.prototype.$http = axios