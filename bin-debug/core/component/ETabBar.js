/**
  * 切换按钮
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 可以有图片，文字，动画
  */
var ETabBar = (function (_super) {
    __extends(ETabBar, _super);
    /**
    * imgNormalName       图片
    * imgSelectName       图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * descStrArr    按钮描述数组
    * fontSize      字体大小
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    function ETabBar(context, imgNormalName, imgSelectName, backFun, descStrArr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStrArr === void 0) { descStrArr = []; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        _super.call(this);
        // private textField:egret.TextField;
        this.assets = RES.getRes("assets"); //名称不一样的话需要修改
        this.btnArr = [];
        this.descStrArr = [];
        this.isPlayCartoon = false;
        this.cartoonType = 1;
        this.isSelectIndex = 0;
        this.imgNormalName = "";
        this.imgSelectName = "";
        this.param = { context: null, data: null }; //回调参数
        this.param.context = context;
        this.imgNormalName = imgNormalName;
        this.imgSelectName = imgSelectName;
        this.descStrArr = descStrArr;
        this.init(context, backFun, descStrArr, fontSize, cartoonType, assetsName);
    }
    var d = __define,c=ETabBar,p=c.prototype;
    p.init = function (context, backFun, descStrArr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStrArr === void 0) { descStrArr = []; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        this.cartoonType = cartoonType;
        this.backFun = backFun;
        if (assetsName != "assets") {
            this.assets = RES.getRes(assetsName);
        }
        for (var i = 0; i < descStrArr.length; i++) {
            var btn = new EToggleButton(this, this.imgNormalName, this.imgSelectName, this.onSelectBack, descStrArr[i], fontSize, cartoonType, assetsName);
            btn.setBindData(i);
            btn.x = btn.width * i;
            this.addChild(btn);
            this.btnArr.push(btn);
            if (i == 0) {
                btn.setSelected(true);
                btn.setEnable(false);
            }
        }
    };
    p.onSelectBack = function (data) {
        this.retset();
        this.param.data = data;
        this.setSelectedIndex(data);
        this.backFun.apply(this.param.context, [this.param.data]);
    };
    //获得选中的index
    p.getSelectedIndex = function () {
        return this.isSelectIndex;
    };
    //设置选中的index
    p.setSelectedIndex = function (index) {
        if (index === void 0) { index = 0; }
        this.retset();
        this.btnArr[index].setSelected(true);
        this.isSelectIndex = index;
        this.btnArr[index].setEnable(false);
    };
    //设置绑定数据
    p.setBindData = function (data) {
        this.param.data = data;
    };
    //获取绑定数据
    p.getBindData = function () {
        return this.param.data;
    };
    p.retset = function () {
        for (var i = 0; i < this.descStrArr.length; i++) {
            var btn = this.btnArr[i];
            btn.setSelected(false);
            btn.setEnable(true);
        }
    };
    return ETabBar;
}(egret.DisplayObjectContainer));
egret.registerClass(ETabBar,'ETabBar');
//# sourceMappingURL=ETabBar.js.map