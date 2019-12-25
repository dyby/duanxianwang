<template>
  <div class="container">
    <div class=" clear">
      <div class="header">
        <div class="title"> <div class="coin-type"><span>EOS</span> 柚子币</div> 19/8/25  10:22:21  期望获利 0.2%-2%</div>
        <p class="des">短线王基于量化分析震荡获利，当价格突破最保守最空价，或者最保守做多价格后，建议不再适用，需重新分析。</p>
      </div>
      <div class="notice-switch">
        <div class="flex">
          <div class="flex-item flex-main">
            <p>综合建议</p>
          </div>
          <div class="flex-item">
            突破提醒
          </div>
        </div>
        <div class="flex">
          <div class="flex-item flex-main">
            <p>最保守做空价</p>
            <b>28</b>
          </div>
          <div class="flex-item">
           <switch type="switch" checked="true" />
          </div>
        </div>
        <div class="flex">
          <div class="flex-item flex-main">
            <p>最激进做空价</p>
            <b>28</b>
          </div>
          <div class="flex-item">
            <switch type="switch" checked="true" />
          </div>
        </div>
        <div class="flex">
          <div class="flex-item flex-main">
            <p>最激进做多价</p>
            <b>28</b>
          </div>
          <div class="flex-item">
           <switch type="switch" checked="true" />
          </div>
        </div>

        <div class="flex">
          <div class="flex-item flex-main">
            <p>最保守做多价</p>
            <b>28</b>
          </div>
          <div class="flex-item">
           <switch type="switch" checked="true" />
          </div>
        </div>
        <p class="tips">预估收益 <span class="imp">0.32% - 1.42%</span></p>
      </div>
    </div>
    <div class="content">
      <div class="select-box">
        <span class="active">近1小时</span>
        <span>近2小时</span>
        <span>近4小时</span>
        <span>近11小时</span>
      </div>

      <div class="analysis">
        <div class="flex between">
          <div class="flex-item">
            近3小时分析
          </div>
          <div class="flex-item">
            空多建议
          </div>
        </div>
        <div class="flex between">
          <div class="flex-item">
            <p>最高价格</p>
            <b>27</b>
          </div>
          <div class="flex-item">
            <p>期望获利拐点数</p>
            <b>27</b>
          </div>
          <div class="flex-item">
            <p>保守做空价</p>
            <b>27</b>
          </div>
        </div>
        <div class="flex between">
          <div class="flex-item">
            <p>最低价格</p>
            <b>27</b>
          </div>
          <div class="flex-item">
            <p>做空获利拐点</p>
            <b>27</b>
          </div>
          <div class="flex-item">
            <p>激进做空价</p>
            <b>27</b>
          </div>
        </div>
        <div class="flex between">
          <div class="flex-item">
            <p>成交均价</p>
            <b>27</b>
          </div>
          <div class="flex-item">
            <p>做多获利拐点</p>
            <b>27</b>
          </div>
          <div class="flex-item">
            <p>激进做多价</p>
            <b>27</b>
          </div>
        </div>
        <div class="flex between">
          <div class="flex-item">
            <p>震荡区间</p>
            <b>27</b>
          </div>
          <div class="flex-item">
            <p>最佳期望获利拐点</p>
            <b>27</b>
          </div>
          <div class="flex-item">
            <p>保守做多价</p>
            <b>27</b>
          </div>
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

<style lang="less" scoped>
.header{
  font-size:14px;
  padding: 5px ;
  .title{
    color: #666;
    padding: 5px 0;
    .coin-type{
      line-height: 20px;
      font-size: 18px; display: inline; color: #333;
      span{font-size: 20px;}
    }
  }
}
.notice-switch{
  font-size: 18px;
  .flex{
    padding: 0 5px;
    padding-top: 15px;
    p{
      font-size: 18px;
    }
    b{
      color: #00a4ff;
      font-size: 22px;
    }
  }
  .tips{
    font-size: 16px;
    padding: 10px 0 25px;
    color: #666;
    text-align: center;
    .imp{
      color: #00a4ff;
    }
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
.analysis{
  text-align: center;
  background: #fff;
  font-size: 15px;
  .flex-item{
    padding: 10px 5px;
    b{
      padding-top: 10px;
      color: #00a4ff;
      font-size: 22px;
    }
  }
}
</style>
