
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1. 前端权限控制不了数据库
2. 只是控制视图层的展示
3. 锦上添花的作用
4. 后端才是权限控制的关键
5. 后端权限-基于角色
6. 前端权限的意义
   1. 减轻服务器压力
   2. 提升用户体验
   3. 降低非法操作的可能性
7. 前端权限控制的思路
   1. 菜单的控制
   2. 界面的控制
   3. 请求接口的控制
   4. 按钮的控制

# 侧边栏展示
1. 数据来源于接口，登陆的时候根据用户权限返回不同的数据
2. 存入store
3. 刷新页面数据丢失，存入到sessionStorage
4. 退出登录
   1. 清除sessionStorage
   2. 清除vuex数据----跳转到login页面，然后刷新一次（前提是本地存储已经先被clear了）

1. 如果用户没有登陆，需要进行路由的拦截
2. 使用token判断
3. 路由守卫


# 动态路由


# 按钮控制


1. 除了登陆，每次请求都需要带上请求头token鉴权
2. 判断非权限范围内的请求
