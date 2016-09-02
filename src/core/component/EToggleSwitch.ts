  /**
    * 滑动按钮类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 可以有图片，文字，动画
    */

class EToggleSwitch extends egret.DisplayObjectContainer{

    private assets:egret.SpriteSheet = RES.getRes("assets");//名称不一样的话需要修改
    
    private backFun:Function;
    private isPlayCartoon:Boolean = false;
    private isSelected:Boolean = false;
    private switchOffName:string = "";
    private switchOnName:string = "";
    private switchBarName:string = "";

    private switchOffImg:egret.Bitmap;
    private switchOnImg:egret.Bitmap;
    private switchBarImg:egret.Bitmap;
    private param = {context:null,data:null};//回调参数
    /**
    * switchOffName       图片
    * switchOnName        图片
    * switchBarName        图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    public constructor(context:any,switchOffName:string = "",switchOnName:string = "",switchBarName:string = "",backFun:Function = null,assetsName:string = "assets"){
        super();
        this.param.context = context;
        this.switchOffName = switchOffName;
        this.switchOnName = switchOnName;
        this.switchBarName = switchBarName;
        this.init(backFun,assetsName);
    }

    private init(backFun:Function = null,assetsName:string = "assets"):void {
        this.backFun = backFun;
        this.switchOffImg = new egret.Bitmap();
        this.switchOnImg = new egret.Bitmap();
        this.switchBarImg = new egret.Bitmap();
        if(assetsName != "assets"){
            this.assets = RES.getRes(assetsName);
        }
        this.switchOffImg.texture = this.assets.getTexture(this.switchOffName);
        this.addChild(this.switchOffImg);   
        this.switchOnImg.texture = this.assets.getTexture(this.switchOnName);
        this.addChild(this.switchOnImg);   
        this.switchOnImg.alpha = 0;

        this.switchBarImg.texture = this.assets.getTexture(this.switchBarName);
        this.switchBarImg.x = 5;
        this.switchBarImg.y = this.switchOffImg.height/2 - this.switchBarImg.height/2 + 4;
        this.addChild(this.switchBarImg);   

        this.touchEnabled = true;

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
    }

    private onbuttonTouchTap(e):void {
        if(this.isPlayCartoon){
            return;
        }
        this.isPlayCartoon = true;

        var onComplete:Function = function(){//改变状态
            this.isPlayCartoon = false;
            this.isSelected = !this.isSelected;
            if(this.backFun != null){
                this.backFun.apply(this.param.context, [this.param.data]);
            } 
        }; 
        if(this.isSelected){
            egret.Tween.get(this.switchBarImg).to({x:5},400).call(onComplete,this); 
            egret.Tween.get(this.switchOffImg).to({alpha:1},400); 
            egret.Tween.get(this.switchOnImg).to({alpha:0},400); 
        }else{
            egret.Tween.get(this.switchBarImg).to({x:this.switchOffImg.width - this.switchBarImg.width - 6},400).call(onComplete,this); 
            egret.Tween.get(this.switchOffImg).to({alpha:0},400); 
            egret.Tween.get(this.switchOnImg).to({alpha:1},400); 
        }
    }
    
    //设置绑定数据
    public setBindData(data):void{
        this.param.data = data;
    }

    //获取绑定数据
    public getBindData():any{
        return this.param.data;
    }
    
    //是否打开
    public getSelected():Boolean{
        return this.isSelected;
    }

}
