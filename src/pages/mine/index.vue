<template>
  <div class="container">
    <div class="header clear">
      <div class="coin-name">火币</div>
      <div class="coin-price">22.2</div>
      <div class="avatar">头像</div> 
    </div>
    <div class="content">
      <div class="canvas-box"></div>
      <div class="canvas-box"></div>
      <div class="canvas-box"></div>
      <h3>其他时间</h3>
      <div class="select-box">
        <span>近1小时</span>
        <span>近2小时</span>
        <span>近4小时</span>
        <span>近5小时</span>
        <span>近7小时</span>
        <span>近8小时</span>
        <span>近9小时</span>
        <span>近10小时</span>
        <span>近11小时</span>
      </div>
      <p>选中共3小时分析获得得 3 份量化报告</p>
    </div>
    <div class="footer fixed">
      <div class="flex">
        <div class="flex-item flex-main">
          <p class="notice">获利期望（不包含0.4%买卖手续费）</p>
          <div><input class="fl" type="digit" confirm-type="done" width="10" maxlength="3">%</div>
        </div>
        <div class="flex-item">
          <button>分析</button>
        </div>
      </div>
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
