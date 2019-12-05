import Vue from 'vue'
import App from './App'
// import ECharts from 'vue-echarts'

// 手动引入 ECharts 各模块来减小打包体积
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'

// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
// import 'echarts-gl'

Vue.config.productionTip = true
App.mpType = 'app'
// Vue.component('v-chart', ECharts)

const app = new Vue(App)
app.$mount()
