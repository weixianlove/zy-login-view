# zy-login-view 微信小程序登录组件库封装
#### Help with operations that require login to be processed in WxMinProgram（帮助在微信小程序中处理需要登录才能处理的操作）

需要已登录状态才能继续操作这个具体应用场景我相信产品经理们能够给你一个详情解答

这里我们具体分析一下：
我们点击一个视图View（其实很少是Button，而登录却需要Button）进行某项操作
- ---> 已登录 --> 执行该操作
- ---> 未登录 --> 登录 --> 自动继续该操作

当然其中登录还有以下情况：

- 登录时 --> 发现没有注册（很多项目是以绑定手机号与否认定是否注册，虽然有违微信小程序的快捷与方便的初衷，但是确实存在）--> 跳转注册页面 --> 注册成功 --> 返回此页面(一般走了注册流程的返回源页面就行了)

具体使用介绍请看简书：[微信小程序登录组件封装 —— 一次性解决需要已登录状态才能继续的操作](https://www.jianshu.com/p/1abbf8655425)

![login-view](https://upload-images.jianshu.io/upload_images/2955252-3f1fb1006d79d62e.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/376)
