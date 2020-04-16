import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'
import Users from '@/components/user/Users.vue'
import Roles from '@/components/role/Roles.vue'
import GoodsCate from '@/components/goods/GoodsCate.vue'
import GoodsList from '@/components/goods/GoodsList.vue'
import NotFound from '@/components/NotFound.vue'
import store from './store/index'
Vue.use(Router)

const users = { path: '/users', component: Users }
const roles = { path: '/roles', component: Roles }
const goods = { path: '/goods', component: GoodsList }
const categories = { path: '/categories', component: GoodsCate }

// 做一个映射
const routeMapping = {
  users: users,
  roles: roles,
  goods: goods,
  categories: categories
}

const router = new Router({
  routes: [
    { 
      path: '/', 
      redirect: '/home' 
    },
    { 
      path: '/login', 
      component: Login 
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome }
        // 需要权限控制的
        // { path: '/users', component: Users },
        // { path: '/roles', component: Roles },
        // { path: '/goods', component: GoodsList },
        // { path: '/categories', component: GoodsCate }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = sessionStorage.getItem('token')
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})


export function initDynamicRoute() {
  // 根据二级权限，对路由规则进行动态的添加
  const currentRoutes = router.options.routes
  const routes = store.state.rightList

  routes.forEach(itemW => {
    itemW.children && itemW.children.forEach(itemN => {
      routeMapping[itemN.path].meta = itemN.rights
      currentRoutes[2].children.push(routeMapping[itemN.path])
    })
  })

  router.addRoutes(currentRoutes)
}

export default router
