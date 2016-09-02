  /**
    * 警告提示类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 提示相关信息，或则选择判断
    * todo:九宫格、多动画、图字等
    */
class AlertPanel extends BasePanel{

    private titleStr:string = "";
    private descStr:string = "";
    private cancelFun:Function;
    private acceptFun:Function;
    private type:number = 1;

    /**
    * titleStr       标题
    * descStr        描述
    * cancelFun      取消方法
    * acceptFun      确认方法
    * type           1：提示  2：选择是否
    */
    public constructor(titleStr:string = "",descStr:string = "",cancelFun:Function = null,acceptFun:Function = null,type:number = 1){
        super();
        this.titleStr = titleStr;
        this.descStr = descStr;
        this.cancelFun = cancelFun;
        this.acceptFun = acceptFun;
        this.type = type;
        this.initUI();
    }

    private bg:egret.Bitmap;
    private acceptBtn:EButton;
    private cancelBtn:EButton;
    private titleTF:egret.TextField;
    private descTF:egret.TextField;

    // 初始化面板
    public initUI():void{
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("alertBg");
        this.addChild(this.bg);   
        this.bg.touchEnabled = true;     

        if(this.titleStr != ""){
            this.titleTF = new egret.TextField();
            this.addChild(this.titleTF);
            this.titleTF.textColor = 0x000000;
            this.titleTF.size = 24;
            this.titleTF.width = this.bg.width;
            this.titleTF.height = 24;
            this.titleTF.y = 5 + 18;
            this.titleTF.textAlign = "center";
            this.titleTF.text = this.titleStr;            
        }

        if(this.descStr != ""){
            this.descTF = new egret.TextField();
            this.addChild(this.descTF);
            this.descTF.textColor = 0x000000;
            this.descTF.size = 20;
            this.descTF.width = this.bg.width;
            this.descTF.height = 24;
            this.descTF.y = this.bg.height/2 - this.descTF.height/2 + 10;
            this.descTF.textAlign = "center";
            this.descTF.text = this.descStr;            
        }

        var self = this;
        var onCancelBtnTouchTap:Function = function(e:egret.TouchEvent):void{
            if(self.cancelFun != null){
                self.cancelFun();
            }
            Global.dispatchEvent(MainNotify.closeAlertNotify);
        }
        var onAcceptBtnTouchTap:Function = function(e:egret.TouchEvent):void{
            if(self.acceptFun != null){
                self.acceptFun();
            }
            Global.dispatchEvent(MainNotify.closeAlertNotify);
        }

        this.acceptBtn = new EButton(this,"acceptBtn",onAcceptBtnTouchTap);
        this.addChild(this.acceptBtn);  
        if(this.type == 1){
            this.acceptBtn.x = this.bg.width/2 - this.acceptBtn.width/2;
            this.acceptBtn.y = this.bg.height - this.acceptBtn.height/2 - 10;            
        }else{
            this.cancelBtn = new EButton(this,"cancelBtn",onCancelBtnTouchTap);
            this.cancelBtn.x = 60 + 50;
            this.cancelBtn.y = this.bg.height - this.cancelBtn.height/2 - 10;
            this.addChild(this.cancelBtn);     

            this.acceptBtn.x = this.bg.width - this.acceptBtn.width - 60 - 50;
            this.acceptBtn.y = this.bg.height - this.acceptBtn.height/2 - 10;          
        }

    }

    public getWidth():number{
        return this.bg.width;
    }

    public getHeight():number{
        return this.bg.height;
    }

}

