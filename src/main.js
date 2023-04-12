import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入公共样式
import './assets/css/reset.css'
// 导入element ui
// import 'element-ui/lib/theme-chalk/index.css'; // element-ui的css样式要单独引入
// // import app from './App.vue'
// Vue.use(ElementUI);

//导入axios
import axios from 'axios'
//设置axios的响应拦截器，处理数据
// axios.interceptors.response.use(res => {
//  return res.data
// })
// 将axios挂载到实例上
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
