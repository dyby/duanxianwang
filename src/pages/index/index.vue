<template>
<div>
  <div class="container">
    <div class="header flex">
      <div class="flex-item"><div class="coin-name"> <span class="icon switch"></span> <span class="coin-en">ESO</span>柚子币</div></div>
      <div class="flex-item flex-main"><div class="coin-price">22.22</div></div>
      <div class="flex-item">
        <div class="avatar">
          <img src="../../../static/images/user.png" alt="">
        </div>
      </div>
    </div>
    <div class="content">
      <div class="canvas-box"></div>
      <div class="canvas-box"></div>
      <div class="canvas-box"></div>
      <h3>其他时间</h3>
      <div class="select-box">
        <span class="active">近1小时</span>
        <span>近2小时</span>
        <span>近4小时</span>
        <span>近5小时</span>
        <span>近7小时</span>
        <span>近8小时</span>
        <span>近9小时</span>
        <span>近10小时</span>
        <span>近11小时</span>
      </div>
      <p class="select-notice">选中共3小时分析获得得 3 份量化报告</p>
    </div>
    <div class="footer fixed-bottom">
      <div class="flex">
        <div class="flex-item flex-main">
          <p class="notice">获利期望（不包含0.4%买卖手续费）</p>
          <div class="input-box">
            <input  class="fl" type="digit" confirm-type="done" axlength="3">
            <span class="fl">% - </span>
            <input class="fl" type="digit" confirm-type="done" width="10" maxlength="3">
            <span class="fl">%</span>
          </div>
        </div>
        <div class="flex-item">
          <div class="btn-box">
            <div class="btn">分析</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cover">
    <div class="left-slider">
      333
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

<style lang="less" scoped>
.header{

  height: 60px;
  line-height: 40px;
  padding: 5px;
  .switch{
    display: inline-block;
    width: 30px;
    height: 20px;
    background: url('../../../static/images/switch.png') center center/ 100% auto no-repeat;
    margin-right: 5px;
  }
  .coin-name{
    background: #fff; border-radius: 5px;
    font-size: 18px;
    padding: 0 12px;
    .coin-en{
      font-size: 25px /* 22/16 */;
      display: inline-block;
      padding-right:5px;
    }
  }
  .coin-price{
    padding-left:15px;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
    img{ width: 100%; height: 100%;}
  }
}
.content{
  h3{font-size: 16px; margin-bottom: 5px;}
  .select-notice{
    padding: 5px;
    font-size: 14px;
  }
}
.select-box{
  span{
    display: inline-block;
    width: 238rpx;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 12px;
    color: #666;
    background: #fff;
    margin: 5rpx;
    text-align: center;
    border:1px solid #00a4ff;
    &.active{
      background: #00a4ff;
      border-color: #00a4ff;
      color: #fff;
    }
  }
}
.footer{
  font-size: 14px;
  background: #fefefe;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  .notice{
    padding: 5px;
  }
  .input-box{
    padding: 0 5px;
  }

}
.input-box{
  line-height: 26px;
  span{padding:0 5px;}
  input{width: 20px; height: 10px;background: #f4f4f4; }
}
.btn-box{
  width: 90px;
  height: 100%;
  display: table;
  .btn{
    height: 100%;
    width: 100%;
    display: table-cell;
    vertical-align: middle;
    border-radius: none;
    color: #fff;
    background: rgba(195, 77, 105, 1);
    text-align: center;

  }
}
.cover{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  display: none;
}
.cover.show{ display: block;}
.cover .left-slider{
  width: 300rpx;
  height: 100%;
  background: #fff;
}
</style>
