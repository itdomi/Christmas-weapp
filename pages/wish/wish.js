//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bg_img: 'http://ozlrrk52c.bkt.clouddn.com/wx/wish.jpg',
    tree_img: '../../images/wish_active.png',
    cards_text_share: '',
    cards_share: '',
    focus: false,
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
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea);
    this.setData({
      cards_text_share: 'cards_text_share',
      cards_share: e.detail.value.textarea

    })
  },
  onLoad: function () {
  },
  onShareAppMessage: function (e) {
    return {
        title: '圣诞快乐~',
        desc: '',
        path: '/pages/wish/wish'
    }
  }
})
