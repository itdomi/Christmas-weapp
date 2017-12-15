//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bg_img: '../../images/wish.jpg',
    tree_img: '../../images/wish_active.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  }
})
