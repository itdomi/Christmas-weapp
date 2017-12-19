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
  
  onLoad: function () {
      var that = this;
    wx.getStorage({
        key: 'happy',
        success: function (res) {
          console.log(res.data);
          that.setData({
            cards_share: res.data,
           })
        }
      })
  },
 
})
