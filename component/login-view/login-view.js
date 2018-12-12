// component/login-view/login-view.js
// import {
//   login
// } from "../../utils/login";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**
     * 外部传入需要进入下一步的数据，原样返回
     */
    payload: {
      type: null,
      value: null
    },

    /**
     * 增加外部更改登录状态入口
     * 当 当前页面 和 当前页面能导航到的后一个页面 
     * 都使用了此组件时
     * 需要在当前页面的onShow中传入登录状态
     */
    hasLogin: {
      type: Boolean,
      value: false,
      observer: function (e) {
        this.setData({
          isLogin: e
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLogin: false
  },

  ready: function () {

    this.setData({
      isLogin: wx.getStorageSync('isLogin')
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 未登录状态
    //获取用户信息
    handleUserInfo: function (e) {
      if (e.detail.errMsg ===
        "getUserInfo:ok") {
        wx.showLoading({
          title: '登录中...',
          mask: true,
        });
        // login().then(() => {
        //   this.triggerEvent('onLoginSuccess', {
        //     payload: this.data.payload
        //   })
        // })

        //模拟登录
        setTimeout(() => {
          wx.setStorageSync('isLogin', true);
          wx.hideLoading();
          this.triggerEvent('onLoginSuccess', {
            payload: this.data.payload
          })
        }, 2000) 

      } else {
        wx.showToast({
          title: "登录失败，请稍后重试",
          icon: 'none'
        });
      }
    },

    //已登录状态
    handleTap: function () {
      this.triggerEvent('onLoginSuccess', {
        payload: this.data.payload
      })
    }
  },
})