  /**
    * 游戏场景类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 目前包含三层：面板层、弹窗层、特效层
    */
class GameScene extends egret.DisplayObjectContainer{

    // 面板层 如 游戏开始结束界面之类的
    public uiLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    // 弹窗层 如 设置之类的
    public topLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    // 特效层 如 飘字之类的
    public effectLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    // 主UI层 如 底部功能栏
    public mainUILayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    // 通讯遮罩层 
    public maskLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    // 旋转屏幕提示层 
    public rotationTipsLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

    //构造方法
    public constructor(){
        super();
        this.init();
    }

    //初始化场景类
    public init():void {
        this.addChild(this.uiLayer);
        this.addChild(this.topLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.mainUILayer);
        this.addChild(this.maskLayer);
        this.addChild(this.rotationTipsLayer);
    }

}

