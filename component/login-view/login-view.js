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
     * 登录状态入口
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
        
        // 这里是一个登录的相关操作的封装，引入的外部js文件
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