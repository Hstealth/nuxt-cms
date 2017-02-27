import wx from '~plugins/jweixin-1.0.0'

export default function ({ store, redirect, route}) {
  return
  // 先中断掉，避免报错
  // 微信处理中间件
  d.api.get('v2_0/wechat/xxx').send({'url': 'url'})
  .then(res => {
    redirect(res.data.url)
  })
  .then(() => {
    return Promise.resolve().then(() => {
      if (process.BROWSER_BUILD) {
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: '', // 必填，公众号的唯一标识
          timestamp: '', // 必填，生成签名的时间戳
          nonceStr: '', // 必填，生成签名的随机串
          signature: '', // 必填，签名，见附录1
          jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })

        wx.ready(function () {
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        })
      }
    })
  })
}