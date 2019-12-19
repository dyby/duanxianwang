<template>
  <div class="container">
    <div class="header clear">
      <div class="header">
        <div>EOS 柚子币 19/8/25  10:22:21  期望获利 0.2%-2%</div>
        <p>短线王基于量化分析震荡获利，当价格突破最保守最空价，或者最保守做多价格后，建议不再适用，需重新分析。</p>
      </div>
      <div class="flex">
        <div class="flex-item flex-main">
          <p>综合建议</p>
          <b>28</b>
        </div>
        <div class="flex-item">
          开关
        </div>
      </div>
      <div class="flex">
        <div class="flex-item flex-main">
          <p>最保守做空价</p>
          <b>28</b>
        </div>
        <div class="flex-item">
          开关
        </div>
      </div>
      <div class="flex">
        <div class="flex-item flex-main">
          <p>最激进做空价</p>
          <b>28</b>
        </div>
        <div class="flex-item">
          开关
        </div>
      </div>
      <div class="flex">
        <div class="flex-item flex-main">
          <p>最激进做多价</p>
          <b>28</b>
        </div>
        <div class="flex-item">
          开关
        </div>
      </div>

      <div class="flex">
        <div class="flex-item flex-main">
          <p>最保守做多价</p>
          <b>28</b>
        </div>
        <div class="flex-item">
          开关
        </div>
      </div>
      <p>预估收益 0.32% - 1.42%</p>
    </div>
    <div class="content">
      <div class="select-box">
        <span>近1小时</span>
        <span>近2小时</span>
        <span>近4小时</span>
        <span>近11小时</span>
      </div>
      <h2>近3小时分析 <span>(空多建议)</span></h2>
      <table>
        <tr>
          <td>
            <div>最高价格</div>
            <div>27</div>
          </td>
          <td>
             <div>期望获利拐点数</div>
            <div>27</div>
          </td>
          <td>
             <div>保守做空价</div>
            <div>27</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>最低价格</div>
            <div>27</div>
          </td>
          <td>
             <div>做空获利拐点</div>
            <div>27</div>
          </td>
          <td>
             <div>激进做空价</div>
            <div>27</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>成交均价</div>
            <div>27</div>
          </td>
          <td>
             <div>做多获利拐点</div>
            <div>27</div>
          </td>
          <td> 
            <div>激进做多价</div>
            <div>27</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>震荡区间</div>
            <div>27</div>
          </td>
          <td>
            <div>最佳期望获利拐点</div>
            <div>27</div>
          </td>
          <td>
            <div>保守做多价</div>
            <div>27</div>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'ss',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

</style>
