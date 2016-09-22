/**
  * 分享图标render  竖版
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var ShareIconRender = (function (_super) {
    __extends(ShareIconRender, _super);
    function ShareIconRender() {
        _super.call(this);
        this.titleTF = new egret.TextField();
        this.weixinTF = new egret.TextField();
        this.qqzoneTF = new egret.TextField();
        this.sinaweiboTF = new egret.TextField();
        this.qqTF = new egret.TextField();
        this.renrenTF = new egret.TextField();
        this.qqweiboTF = new egret.TextField();
        this.doubanTF = new egret.TextField();
        this.assets = RES.getRes("socialIcon"); //名称不一样的话需要修改
        this.bg = new egret.Sprite();
        this.w = 0;
        this.h = 0;
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
        this.init();
    }
    var d = __define,c=ShareIconRender,p=c.prototype;
    p.init = function () {
        this.bg.graphics.beginFill(0xFFFFFF, 0.9);
        this.bg.graphics.drawRect(0, 0, this.w, 300);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = 300;
        this.addChild(this.bg);
        this.bg.alpha = 1;
        this.bg.touchEnabled = true;
        this.titleTF.size = 24;
        this.titleTF.textColor = 0x000000;
        this.titleTF.text = "分享到";
        this.titleTF.x = this.w / 2 - this.titleTF.width / 2;
        this.titleTF.y = 10;
        this.titleTF.bold = true;
        this.titleTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.titleTF);
        var btnY1 = 40;
        var btnY2 = 130;
        this.weixinBtn = new EButton(this, "weixin", null, "", 30, 1, "socialIcon");
        this.weixinBtn.x = 20;
        this.weixinBtn.y = btnY1;
        this.addChild(this.weixinBtn);
        this.weixinBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWeixinBtnTouchTap, this);
        this.qqzoneBtn = new EButton(this, "qqzone", null, "", 30, 1, "socialIcon");
        this.qqzoneBtn.x = this.weixinBtn.x + this.qqzoneBtn.width + 20;
        this.qqzoneBtn.y = btnY1;
        this.addChild(this.qqzoneBtn);
        this.qqzoneBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQQzoneBtnTouchTap, this);
        this.sinaweiboBtn = new EButton(this, "sinaweibo", null, "", 30, 1, "socialIcon");
        this.sinaweiboBtn.x = this.qqzoneBtn.x + this.sinaweiboBtn.width + 20;
        this.sinaweiboBtn.y = btnY1;
        this.addChild(this.sinaweiboBtn);
        this.sinaweiboBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSinaweiboBtnTouchTap, this);
        this.qqBtn = new EButton(this, "qq", null, "", 30, 1, "socialIcon");
        this.qqBtn.x = this.sinaweiboBtn.x + this.qqBtn.width + 20;
        this.qqBtn.y = btnY1;
        this.addChild(this.qqBtn);
        this.qqBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQQBtnTouchTap, this);
        this.renrenBtn = new EButton(this, "renren", null, "", 30, 1, "socialIcon");
        this.renrenBtn.x = this.qqBtn.x + this.renrenBtn.width + 20;
        this.renrenBtn.y = btnY1;
        this.addChild(this.renrenBtn);
        this.renrenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRenrenBtnTouchTap, this);
        this.qqweiboBtn = new EButton(this, "qqweibo", null, "", 30, 1, "socialIcon");
        this.qqweiboBtn.x = 20;
        this.qqweiboBtn.y = btnY2;
        this.addChild(this.qqweiboBtn);
        this.qqweiboBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQQweiboBtnTouchTap, this);
        this.doubanBtn = new EButton(this, "douban", null, "", 30, 1, "socialIcon");
        this.doubanBtn.x = this.qqweiboBtn.x + this.doubanBtn.width + 20;
        this.doubanBtn.y = btnY2;
        this.addChild(this.doubanBtn);
        this.doubanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoubanBtnTouchTap, this);
        //文字
        var fontSize = 16;
        this.weixinTF.size = fontSize;
        this.weixinTF.textColor = 0x000000;
        this.weixinTF.text = "微信";
        this.weixinTF.x = this.weixinBtn.x + this.weixinBtn.width / 2 - this.weixinTF.width / 2;
        this.weixinTF.y = btnY1 + this.weixinBtn.height;
        this.weixinTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.weixinTF);
        this.qqzoneTF.size = fontSize;
        this.qqzoneTF.textColor = 0x000000;
        this.qqzoneTF.text = "QQ空间";
        this.qqzoneTF.x = this.qqzoneBtn.x + this.qqzoneBtn.width / 2 - this.qqzoneTF.width / 2;
        this.qqzoneTF.y = btnY1 + this.qqzoneBtn.height;
        this.qqzoneTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.qqzoneTF);
        this.sinaweiboTF.size = fontSize;
        this.sinaweiboTF.textColor = 0x000000;
        this.sinaweiboTF.text = "新浪微博";
        this.sinaweiboTF.x = this.sinaweiboBtn.x + this.sinaweiboBtn.width / 2 - this.sinaweiboTF.width / 2;
        this.sinaweiboTF.y = btnY1 + this.sinaweiboBtn.height;
        this.sinaweiboTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.sinaweiboTF);
        this.qqTF.size = fontSize;
        this.qqTF.textColor = 0x000000;
        this.qqTF.text = "QQ好友";
        this.qqTF.x = this.qqBtn.x + this.qqBtn.width / 2 - this.qqTF.width / 2;
        this.qqTF.y = btnY1 + this.qqBtn.height;
        this.qqTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.qqTF);
        this.renrenTF.size = fontSize;
        this.renrenTF.textColor = 0x000000;
        this.renrenTF.text = "人人网";
        this.renrenTF.x = this.renrenBtn.x + this.renrenBtn.width / 2 - this.renrenTF.width / 2;
        this.renrenTF.y = btnY1 + this.renrenBtn.height;
        this.renrenTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.renrenTF);
        this.qqweiboTF.size = fontSize;
        this.qqweiboTF.textColor = 0x000000;
        this.qqweiboTF.text = "QQ微博";
        this.qqweiboTF.x = this.qqweiboBtn.x + this.qqweiboBtn.width / 2 - this.qqweiboTF.width / 2;
        this.qqweiboTF.y = btnY2 + this.qqweiboBtn.height;
        this.qqweiboTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.qqweiboTF);
        this.doubanTF.size = fontSize;
        this.doubanTF.textColor = 0x000000;
        this.doubanTF.text = "豆瓣广播";
        this.doubanTF.x = this.doubanBtn.x + this.doubanBtn.width / 2 - this.doubanTF.width / 2;
        this.doubanTF.y = btnY2 + this.doubanBtn.height;
        this.doubanTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.doubanTF);
    };
    p.onWeixinBtnTouchTap = function () {
        Global.dispatchEvent(MainNotify.updateShareNotify, "micromessenger");
    };
    p.onQQzoneBtnTouchTap = function () {
        Global.dispatchEvent(MainNotify.updateShareNotify, "qzone");
    };
    p.onSinaweiboBtnTouchTap = function () {
        Global.dispatchEvent(MainNotify.updateShareNotify, "weibo");
    };
    p.onQQBtnTouchTap = function () {
        Global.dispatchEvent(MainNotify.updateShareNotify, "qq");
    };
    p.onRenrenBtnTouchTap = function () {
        Global.dispatchEvent(MainNotify.updateShareNotify, "renren");
    };
    p.onQQweiboBtnTouchTap = function () {
        Global.dispatchEvent(MainNotify.updateShareNotify, "txmicroblog");
    };
    p.onDoubanBtnTouchTap = function () {
        Global.dispatchEvent(MainNotify.updateShareNotify, "douban");
    };
    return ShareIconRender;
}(egret.DisplayObjectContainer));
egret.registerClass(ShareIconRender,'ShareIconRender');
//# sourceMappingURL=ShareIconRender.js.map