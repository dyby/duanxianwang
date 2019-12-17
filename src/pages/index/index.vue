<template>
  <div class="container">
    <div class="header clear">
      <div class="coin-name fl">22</div>
      <div class="coin-price fl">2.2</div>
      <div class="avatar fr">{{ motto }}</div> 
    </div>
    <div class="content">

    </div>
    <div class="footer fixed">
      <div><input class="fl" type="digit" confirm-type="done" width="10" maxlength="3">%</div>
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
