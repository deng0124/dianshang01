import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录组件
import login from '../components/Login/index.vue'
// 导入注册组件
import register from '../components/Register/index.vue'
//导入axios
import axios from 'axios'
//设置axios的响应拦截器，处理数据
axios.interceptors.response.use(res => {
 return res.data
})

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
