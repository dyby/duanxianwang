<template>
  <chart  
    :options="pie"
    :init-options="{renderer: 'canvas'}"
    ref="pie"
    autoresize
    />
</template>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 100%;
}

</style>


<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/chart/pie'

import pie from './pie'

export default {
  components: {
    'chart': ECharts
  },
  data () {
    return {
      pie
    }
  }
}
</script>