
class SharePanel extends BasePanel{

    public constructor(){
        super();
    }

    private bg:egret.Bitmap;
    private startBtn:egret.Bitmap;
    // 初始化面板
    public initPanel():void{
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("bg");
        this.addChild(this.bg);   
        this.bg.touchEnabled = true;     

        this.startBtn = new egret.Bitmap();
        this.startBtn.texture = this.assets.getTexture("startBtn");
        this.startBtn.x = this.w/2 - this.startBtn.width/2;
        this.startBtn.y = this.h/2 - this.startBtn.height/2;
        this.addChild(this.startBtn);   
        this.startBtn.touchEnabled = true;      
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartBtnTouchTap, this);

    }

    public onStartBtnTouchTap(e:egret.TouchEvent):void{
        Global.dispatchEvent(MainNotify.openGamePanelNotify,null,false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify,null,false);
    }

}

