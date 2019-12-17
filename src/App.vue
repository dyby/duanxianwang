<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
div{
  box-sizing: border-box
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
}
.fl{ float: left;}
.fr {float: right;}
.clear{ overflow: hidden; display: block; width: 100%;}
.clear::before,.clear::after{content:''; clear:both; display: block}
.fixed{position: fixed; width: 100%; bottom: 0; padding: 10px;}

.flex {
  display: -webkit-flex;
  display: flex
}

.flex.column{
	flex-direction: column;
}

.flex.wrap {
  flex-wrap: wrap
}

.flex.between {
  justify-content: space-between
}

.flex.around {
  justify-content: space-around
}

.flex.center {
  justify-content: center
}

.flex.a-center {
  align-items: center
}

.flex.a-start {
  align-items: flex-start
}
.flex.row-reverse{
	flex-direction: row-reverse;
}

.flex .flex-item {
  flex-grow: 0
}

.flex .flex-item.flex-main {
  flex-grow: 1
}

.flex .flex-item.noshrink {
  flex-shrink: 0
}

.flex .flex-item.flex-half{
	flex-basis: 50%;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
