import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录组件
import login from '../components/Login/index.vue'
// 导入注册组件
import register from '../components/Register/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login,
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/register',
    component: register,
  },
]

const router = new VueRouter({
  routes
})

export default router
