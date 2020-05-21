// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import echarts from 'echarts'
echarts.dataTool = require("echarts/extension-src/dataTool/gexf");
Vue.prototype.$echarts = echarts
Vue.prototype.$dataTool = echarts.dataTool;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import './assets/font/思源黑体/font.css'
import './assets/font/思源宋体/font.css'
import './assets/font/font.css'
import  'echarts/theme/macarons.js'
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
