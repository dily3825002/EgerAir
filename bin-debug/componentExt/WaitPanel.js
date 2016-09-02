/**
  * 通讯等待类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 和服务端通讯时的显示效果
  */
var WaitPanel = (function (_super) {
    __extends(WaitPanel, _super);
    //type 1:白色等待 2：蓝色等待
    function WaitPanel(type) {
        if (type === void 0) { type = 1; }
        _super.call(this);
        this.bg = new egret.Sprite();
        this.cartoonType = "loadingCircle1";
        this.w = 0;
        this.h = 0;
        switch (type) {
            case 1: {
                this.cartoonType = "loadingCircle1";
                break;
            }
            case 2: {
                this.cartoonType = "loadingCircle2";
                break;
            }
            default: {
            }
        }
        this.mySheet = RES.getRes("assets");
        this.createView();
    }
    var d = __define,c=WaitPanel,p=c.prototype;
    p.createView = function () {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.bg.graphics.beginFill(0x000000, 0.2);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.touchEnabled = true;
        this.waitImg = new egret.Bitmap;
        this.waitImg.anchorOffsetX = this.waitImg.width / 2;
        this.waitImg.anchorOffsetY = this.waitImg.height / 2;
        this.waitImg.texture = this.mySheet.getTexture(this.cartoonType);
        this.waitImg.x = this.w / 2;
        this.waitImg.y = this.h / 2;
        this.addChild(this.waitImg);
        EffectUtils.rotationEffect(this.waitImg, 1000);
    };
    return WaitPanel;
}(egret.Sprite));
egret.registerClass(WaitPanel,'WaitPanel');
//# sourceMappingURL=WaitPanel.js.map