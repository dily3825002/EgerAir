var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        _super.call(this);
    }
    var d = __define,c=GamePanel,p=c.prototype;
    // 初始化面板
    p.initPanel = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("bg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.htmlTF = new ETextField();
        this.htmlTF.setText('<font color="0xff0000">我是</font><font color="0x55ff00">多颜色</font><font color="0xff0000">文本</font><font color="0x55ff00">组件</font>');
        this.htmlTF.x = this.w / 2 - this.htmlTF.width / 2;
        this.htmlTF.y = -350;
        this.addChild(this.htmlTF);
        this.alertTF = new ETextField();
        this.alertTF.setText('<font color="0xff0000">下面</font><font color="0x55ff00">是</font><font color="0xff0000">alert</font><font color="0x55ff00">组件</font>');
        this.alertTF.x = this.w / 2 - this.alertTF.width / 2;
        this.alertTF.y = 120;
        this.addChild(this.alertTF);
        this.alertTF.alpha = 0;
        this.tipsTF = new ETextField();
        this.tipsTF.setText('<font color="0xff0000">下面</font><font color="0x55ff00">是</font><font color="0xff0000">tipsmanager</font><font color="0x55ff00">组件</font>');
        this.tipsTF.x = this.w / 2 - this.tipsTF.width / 2;
        this.tipsTF.y = this.h - 170;
        this.addChild(this.tipsTF);
        this.tipsTF.alpha = 0;
        this.typerTF = new ETextField();
        this.typerTF.bold = true;
        this.typerTF.strokeColor = 0x000000;
        this.typerTF.stroke = 1;
        this.typerTF.width = 370;
        this.typerTF.setText("");
        this.typerTF.x = this.w / 2 - this.typerTF.width / 2;
        this.typerTF.y = this.h / 2 + 100;
        this.addChild(this.typerTF);
        EffectUtils.typerEffect(this.typerTF, "牛逼大了，打字机效果呢！");
        this.helpBtn2 = new EButton(this, "helpBtn", this.alert1, "", 30, 1);
        this.helpBtn2.x = 20;
        this.helpBtn2.y = 200;
        this.addChild(this.helpBtn2);
        this.helpBtn2.alpha = 0;
        this.shopBtn2 = new EButton(this, "shopBtn", this.alert2, "", 30, 2);
        this.shopBtn2.x = 150;
        this.shopBtn2.y = 200;
        this.addChild(this.shopBtn2);
        this.shopBtn2.alpha = 0;
        this.fbBtn2 = new EButton(this, "fbBtn", this.alert3, "", 30, 3);
        this.fbBtn2.x = 270;
        this.fbBtn2.y = 200;
        this.addChild(this.fbBtn2);
        this.fbBtn2.alpha = 0;
        this.setBtn2 = new EButton(this, "setBtn", this.alert4, "设置", 30, 1);
        this.setBtn2.x = this.w - this.setBtn2.width - 20;
        this.setBtn2.y = 200;
        this.addChild(this.setBtn2);
        this.setBtn2.alpha = 0;
        this.startBtn = new EButton(this, "startBtn", this.onStartBtnTouchTap);
        this.startBtn.x = this.w / 2 - this.startBtn.width / 2;
        this.startBtn.y = this.h / 2 - this.startBtn.height / 2;
        this.addChild(this.startBtn);
        this.startBtn.visible = false;
        this.helpBtn = new EButton(this, "helpBtn", null, "", 30, 1);
        this.helpBtn.x = 20;
        this.helpBtn.y = this.h - this.helpBtn.height - 20;
        this.addChild(this.helpBtn);
        this.helpBtn.visible = false;
        this.shopBtn = new EButton(this, "shopBtn", null, "", 30, 2);
        this.shopBtn.x = 150;
        this.shopBtn.y = this.h - this.shopBtn.height - 20;
        this.addChild(this.shopBtn);
        this.shopBtn.visible = false;
        this.fbBtn = new EButton(this, "fbBtn", null, "", 30, 3);
        this.fbBtn.x = 270;
        this.fbBtn.y = this.h - this.fbBtn.height - 20;
        this.addChild(this.fbBtn);
        this.fbBtn.visible = false;
        this.setBtn = new EButton(this, "setBtn", null, "设置", 30, 1);
        this.setBtn.x = this.w - this.setBtn.width - 20;
        this.setBtn.y = this.h - this.setBtn.height - 20;
        this.addChild(this.setBtn);
        this.setBtn.visible = false;
        TipsManager.addTips(this.helpBtn, "我是排行榜按钮哦！", 1);
        TipsManager.addTips(this.shopBtn, "我是商店按钮哦！", 2);
        TipsManager.addTips(this.fbBtn, "我是facebook按钮哦！", 3);
        TipsManager.addTips(this.setBtn, "我是设置按钮哦！", 4);
        this.initEffect();
    };
    p.alert1 = function () {
        Global.alert("提示", "我是一个提示栗子，哈哈", null, 1);
    };
    p.alert2 = function () {
        Global.alert("提示", "我是一个提示栗子，哈哈", null, 2);
    };
    p.alert3 = function () {
        Global.alert("提示", "我是一个提示栗子，哈哈", null, 3);
    };
    p.alert4 = function () {
        Global.alert("提示", "我是一个提示栗子，哈哈", null, 4);
    };
    p.initEffect = function () {
        this.htmlTF.y = -350;
        this.startBtn.alpha = 0;
        this.helpBtn.y = this.h + 150;
        this.shopBtn.y = this.h + 150;
        this.fbBtn.y = this.h + 150;
        this.setBtn.y = this.h + 150;
        var onComplete = function () {
            egret.Tween.get(this.startBtn).to({ alpha: 1 }, 300);
            egret.Tween.get(this.alertTF).to({ alpha: 1 }, 300);
            egret.Tween.get(this.tipsTF).to({ alpha: 1 }, 300);
            egret.Tween.get(this.setBtn2).to({ alpha: 1 }, 300);
            egret.Tween.get(this.fbBtn2).to({ alpha: 1 }, 300);
            egret.Tween.get(this.shopBtn2).to({ alpha: 1 }, 300);
            egret.Tween.get(this.helpBtn2).to({ alpha: 1 }, 300);
            egret.Tween.get(this.setBtn).to({ y: this.h - this.setBtn.height - 20 }, 300, egret.Ease.backOut);
            egret.Tween.get(this.fbBtn).to({ y: this.h - this.fbBtn.height - 20 }, 300, egret.Ease.backOut);
            egret.Tween.get(this.shopBtn).to({ y: this.h - this.shopBtn.height - 20 }, 300, egret.Ease.backOut);
            egret.Tween.get(this.helpBtn).to({ y: this.h - this.helpBtn.height - 20 }, 300, egret.Ease.backOut);
        };
        this.htmlTF.visible = true;
        this.startBtn.visible = true;
        this.helpBtn.visible = true;
        this.shopBtn.visible = true;
        this.fbBtn.visible = true;
        this.setBtn.visible = true;
        egret.Tween.get(this.htmlTF).to({ y: 60 }, 600, egret.Ease.backOut).call(onComplete, this);
    };
    p.onStartBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openGameOverPanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeGamePanelNotify, null, false);
    };
    return GamePanel;
}(BasePanel));
egret.registerClass(GamePanel,'GamePanel');
//# sourceMappingURL=GamePanel.js.map