var SharePanel = (function (_super) {
    __extends(SharePanel, _super);
    function SharePanel() {
        _super.call(this);
    }
    var d = __define,c=SharePanel,p=c.prototype;
    // 初始化面板
    p.initPanel = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("bg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.startBtn = new egret.Bitmap();
        this.startBtn.texture = this.assets.getTexture("startBtn");
        this.startBtn.x = this.w / 2 - this.startBtn.width / 2;
        this.startBtn.y = this.h / 2 - this.startBtn.height / 2;
        this.addChild(this.startBtn);
        this.startBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartBtnTouchTap, this);
    };
    p.onStartBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openGamePanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    return SharePanel;
}(BasePanel));
egret.registerClass(SharePanel,'SharePanel');
//# sourceMappingURL=SharePanel.js.map