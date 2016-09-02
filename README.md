#EGER

===================================

  HTML5游戏极速开发解决方案
  
加群点击右侧按钮： <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=e3bba025902c371f851e6f104bc8100a870b9da0963f98f883c17e0a45f3abbd"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="Egret极速开发框架EGER" title="Egret极速开发框架EGER"></a>

演示地址1：
http://eger.sinaapp.com/code/demo
微信扫码查看演示

<img src="http://eger.sinaapp.com/code/public/eger1.png" alt="qq" title="Egret极速开发框架EGER"/>

演示地址2：
http://eger.sinaapp.com/code/effect
微信扫码查看演示

<img src="http://eger.sinaapp.com/code/public/eger2.png" alt="qq" title="Egret极速开发框架EGER"/>
###近期版本更新内容，请查看发布文档

### 一、【解耦】方便管理  

    1、使用全局派发事件：Global.dispatchEvent(MainNotify.openGamePanelNotify,null,false);
    Global.dispatchEvent(MainNotify.closeStartPanelNotify,null,false);
    开发者只需要关注将事件发送出去即可，让其他类处理消息。
    2、使用面板管理器几种管理面板PanelManager。类似于工厂模式。
    3、使用全局数据GlobalData存放数据。复杂的话新建队形数据类。

### 二、【简单】高效开发  

    1、使用面板弹窗管理器PopUpManager。
    开发者只需要PopUpManager.addPopUp(this.gameOverPanel);和PopUpManager.removePopUp(this.gameOverPanel);关闭和弹出面板
    2、使用公共方法只需要调用Global。如分享到微信只要一句：Global.shareToWeiXin("EGER急速开发解决方案",document.title,"link","iocon.png");
    3、获取配置文件只需要调用GameConfig。如GameConfig.curWidth()获取舞台宽度
    4、增加特效只需要调用EffectUtils.如EffectUtils.shakeObj(obj)使对象抖动
    5、使用常用正则只需要调用RegUtils。如RegUtils.checkMobile()检查手机号码格式是否正确
    
### 三、【特效丰富】商业级品质 

    1、使用PopUpManager，可以选择多种打开面板和关闭面板切换动画
    2、使用EffectUtils，可以调用多种特效，如tips飘字特效，震屏特效等


感谢：d8q8、有来有去、shaorui、 errorfun、wander、kuma、yjtx、 张宇、lixin2628、east

### 链接

想要一起交流么，快快加入吧！
EGER极速开发交流群：70843223

### 觉得不错就支持我一下！

右上角收藏和关注！

### 或者加我好友，互相学习

<img src="http://eger.sinaapp.com/code/public/dily.png" alt="qq" title="Egret极速开发框架EGER"/>

[Egret官方网站](egret-labs.org)<br />
[我的微博](http://weibo.com/1856526021/profile?topnav=1&wvr=6)<br />