<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { initDynamicRoute } from '@/router.js'
export default {
  name: 'app',
  created() {
    initDynamicRoute()
  }
}
</script>

<style>
</style>
