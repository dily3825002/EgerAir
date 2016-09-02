/**
  * 游戏公用方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：Global.setCookie()
  */
var Global;
(function (Global) {
    // 在游戏初始化的地方增加如下代码
    // this.stage.addChild(GameConfig.gameScene());
    //新建事件
    function Event(type, obj, bubbles, cancelable) {
        if (obj === void 0) { obj = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return new lcp.LEvent(type, obj, bubbles, cancelable);
    }
    Global.Event = Event;
    //派发事件
    function dispatchEvent(type, obj, bubbles, cancelable) {
        if (obj === void 0) { obj = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var event = new lcp.LEvent(type, obj, bubbles, cancelable);
        lcp.LListener.getInstance().dispatchEvent(event);
    }
    Global.dispatchEvent = dispatchEvent;
    //监听事件
    function addEventListener(type, listener, thisObject, useCapture, priority) {
        if (useCapture === void 0) { useCapture = false; }
        if (priority === void 0) { priority = 0; }
        lcp.LListener.getInstance().addEventListener(type, listener, thisObject, useCapture, priority);
    }
    Global.addEventListener = addEventListener;
    //多平台分享组件主要针对 微信、微博、qqzone、qq
    //一键分享到新浪微博、腾讯微博、qq空间等代码
    function shareUtils(name) {
        var title = GlobalData.desc;
        var shareUrl = GlobalData.link;
        var imgUrl = GlobalData.imgUrl;
        var desc = GlobalData.title;
        if (name == "weibo") {
            //分享到新浪微博
            var url = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + shareUrl + '&content=utf-8&sourceUrl=' + shareUrl + '&pic=' + imgUrl;
            window.open(url);
        }
        else if (name == "txmicroblog") {
            //分享到腾讯微博
            var url = 'http://v.t.qq.com/share/share.php?title=' + title + '&url=' + shareUrl + '&pic=' + imgUrl;
            window.open(url);
        }
        else if (name == "qzone") {
            //分享到QQ空间
            var url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + title + '&url=' + shareUrl + '&pics=' + imgUrl;
            window.open(url);
        }
        else if (name == "qq") {
            var url = 'http://connect.qq.com/widget/shareqq/index.html?title=' + title + '&url=' + shareUrl + '&pic=' + imgUrl;
            window.open(url);
        }
        else if (name == "renren") {
            var url = 'http://share.renren.com/share/buttonshare.do?link=' + shareUrl + '&title=' + title;
            window.open(url);
        }
        else if (name == "kaixin") {
            var url = 'http://www.kaixin001.com/repaste/share.php?rurl=' + shareUrl + '&rcontent=' + title;
            window.open(url);
        }
        else if (name == "douban") {
            var url = 'http://www.douban.com/recommend/?url=' + shareUrl + '&title=' + title;
            window.open(url);
        }
        else if (name == "tieba") {
            var url = 'http://tieba.baidu.com/f/commit/share/openShareApi?url=' + shareUrl + '&title=' + title;
            window.open(url);
        }
    }
    Global.shareUtils = shareUtils;
    var _alert;
    //提示框
    /**
    * titleStr       标题
    * descStr        描述
    * acceptFun      确认方法
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function alert(titleStr, descStr, acceptFun, effectType) {
        if (titleStr === void 0) { titleStr = ""; }
        if (descStr === void 0) { descStr = ""; }
        if (acceptFun === void 0) { acceptFun = null; }
        if (effectType === void 0) { effectType = 1; }
        if (this._alert == null) {
            this._alert = new AlertPanel(titleStr, descStr, null, acceptFun);
            PopUpManager.addPopUp(this._alert, true, this._alert.getWidth(), this._alert.getHeight(), effectType, true);
            Global.addEventListener(MainNotify.closeAlertNotify, this.closeAlertPanel, this);
        }
    }
    Global.alert = alert;
    //确认框
    /**
    * titleStr       标题
    * descStr        描述
    * cancelFun      取消方法
    * acceptFun      确认方法
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function confirm(titleStr, descStr, cancelFun, acceptFun, effectType) {
        if (titleStr === void 0) { titleStr = ""; }
        if (descStr === void 0) { descStr = ""; }
        if (cancelFun === void 0) { cancelFun = null; }
        if (acceptFun === void 0) { acceptFun = null; }
        if (effectType === void 0) { effectType = 1; }
        if (this._alert == null) {
            this._alert = new AlertPanel(titleStr, descStr, cancelFun, acceptFun, 2);
            PopUpManager.addPopUp(this._alert, true, this._alert.getWidth(), this._alert.getHeight(), effectType, true);
            Global.addEventListener(MainNotify.closeAlertNotify, this.closeAlertPanel, this);
        }
    }
    Global.confirm = confirm;
    //关闭alert方法
    function closeAlertPanel() {
        if (this._alert != null) {
            PopUpManager.removePopUp(this._alert, 1);
            this._alert = null;
        }
    }
    Global.closeAlertPanel = closeAlertPanel;
    var _share;
    //提示框
    /**
    * titleStr       标题
    * descStr        描述
    * acceptFun      确认方法
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function share() {
        if (this._share == null) {
            this._share = new ShareIconPanel();
            PopUpManager.addPopUp(this._share, false, GameConfig.curWidth(), GameConfig.curHeight());
            Global.addEventListener(MainNotify.closeShareNotify, this.closeSharePanel, this);
        }
    }
    Global.share = share;
    //关闭share方法
    function closeSharePanel() {
        if (this._share != null) {
            PopUpManager.removePopUp(this._share, 0);
            this._share = null;
        }
    }
    Global.closeSharePanel = closeSharePanel;
})(Global || (Global = {}));
//# sourceMappingURL=Global.js.map