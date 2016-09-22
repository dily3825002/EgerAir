/**
  * 滑动按钮类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 可以有图片，文字，动画
  */
var EToggleSwitch = (function (_super) {
    __extends(EToggleSwitch, _super);
    /**
    * switchOffName       图片
    * switchOnName        图片
    * switchBarName        图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    function EToggleSwitch(context, switchOffName, switchOnName, switchBarName, backFun, assetsName) {
        if (switchOffName === void 0) { switchOffName = ""; }
        if (switchOnName === void 0) { switchOnName = ""; }
        if (switchBarName === void 0) { switchBarName = ""; }
        if (backFun === void 0) { backFun = null; }
        if (assetsName === void 0) { assetsName = "assets"; }
        _super.call(this);
        this.assets = RES.getRes("assets"); //名称不一样的话需要修改
        this.isPlayCartoon = false;
        this.isSelected = false;
        this.switchOffName = "";
        this.switchOnName = "";
        this.switchBarName = "";
        this.param = { context: null, data: null }; //回调参数
        this.param.context = context;
        this.switchOffName = switchOffName;
        this.switchOnName = switchOnName;
        this.switchBarName = switchBarName;
        this.init(backFun, assetsName);
    }
    var d = __define,c=EToggleSwitch,p=c.prototype;
    p.init = function (backFun, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (assetsName === void 0) { assetsName = "assets"; }
        this.backFun = backFun;
        this.switchOffImg = new egret.Bitmap();
        this.switchOnImg = new egret.Bitmap();
        this.switchBarImg = new egret.Bitmap();
        if (assetsName != "assets") {
            this.assets = RES.getRes(assetsName);
        }
        this.switchOffImg.texture = this.assets.getTexture(this.switchOffName);
        this.addChild(this.switchOffImg);
        this.switchOnImg.texture = this.assets.getTexture(this.switchOnName);
        this.addChild(this.switchOnImg);
        this.switchOnImg.alpha = 0;
        this.switchBarImg.texture = this.assets.getTexture(this.switchBarName);
        this.switchBarImg.x = 5;
        this.switchBarImg.y = this.switchOffImg.height / 2 - this.switchBarImg.height / 2 + 4;
        this.addChild(this.switchBarImg);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
    };
    p.onbuttonTouchTap = function (e) {
        if (this.isPlayCartoon) {
            return;
        }
        this.isPlayCartoon = true;
        var onComplete = function () {
            this.isPlayCartoon = false;
            this.isSelected = !this.isSelected;
            if (this.backFun != null) {
                this.backFun.apply(this.param.context, [this.param.data]);
            }
        };
        if (this.isSelected) {
            egret.Tween.get(this.switchBarImg).to({ x: 5 }, 400).call(onComplete, this);
            egret.Tween.get(this.switchOffImg).to({ alpha: 1 }, 400);
            egret.Tween.get(this.switchOnImg).to({ alpha: 0 }, 400);
        }
        else {
            egret.Tween.get(this.switchBarImg).to({ x: this.switchOffImg.width - this.switchBarImg.width - 6 }, 400).call(onComplete, this);
            egret.Tween.get(this.switchOffImg).to({ alpha: 0 }, 400);
            egret.Tween.get(this.switchOnImg).to({ alpha: 1 }, 400);
        }
    };
    //设置绑定数据
    p.setBindData = function (data) {
        this.param.data = data;
    };
    //获取绑定数据
    p.getBindData = function () {
        return this.param.data;
    };
    //是否打开
    p.getSelected = function () {
        return this.isSelected;
    };
    return EToggleSwitch;
}(egret.DisplayObjectContainer));
egret.registerClass(EToggleSwitch,'EToggleSwitch');
//# sourceMappingURL=EToggleSwitch.js.map