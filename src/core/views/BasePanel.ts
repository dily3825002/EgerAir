  /**
    * 面板基类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 面板的基本属性和方法
    */
class BasePanel extends egret.DisplayObjectContainer{

    public assets:egret.SpriteSheet;
    public w:number = 0;
    public h:number = 0;

    // 构造函数
    public constructor(assetsName = "assets"){
        super();
        this.assets = RES.getRes(assetsName);
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
        this.initPanel();
    }

    // 初始化面板
    public initPanel():void{

    }

    // 初始化面板数据
    public initData():void{

    }

    // 进入面板
    public onEnter():void{
        
    }

    // 退出面板
    public onExit():void{
        
    }

    // 关闭面板
    public closePanel():void{
        PopUpManager.removePopUp(this);
    }    

    // 获取面板宽度
    public getWidth():number{
        return this.width;
    }    

    // 获取面板高度
    public getHeight():number{
        return this.height;
    }    

}

