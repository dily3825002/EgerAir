  /**
    * 切换按钮
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 可以有图片，文字，动画
    */

class ETabBar extends egret.DisplayObjectContainer{

    // private textField:egret.TextField;
    private assets:egret.SpriteSheet = RES.getRes("assets");//名称不一样的话需要修改
    private btnArr:Array<any> = [];
    private descStrArr:Array<any> = [];
    private backFun:Function;
    private isPlayCartoon:Boolean = false;
    private cartoonType:number = 1;
    private isSelectIndex:number = 0;
    private imgNormalName:string = "";
    private imgSelectName:string = "";
    private param = {context:null,data:null};//回调参数
    /**
    * imgNormalName       图片
    * imgSelectName       图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * descStrArr    按钮描述数组
    * fontSize      字体大小
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    public constructor(context:any,imgNormalName:string,imgSelectName:string,backFun:Function = null,descStrArr:Array<any> = [],fontSize:number = 30,cartoonType:number = 1,assetsName:string = "assets"){
        super();
        this.param.context = context;
        this.imgNormalName = imgNormalName;
        this.imgSelectName = imgSelectName;
        this.descStrArr = descStrArr;
        this.init(context,backFun,descStrArr,fontSize,cartoonType,assetsName);
    }

    private init(context:any,backFun:Function = null,descStrArr:Array<any> = [],fontSize:number = 30,cartoonType:number = 1,assetsName:string = "assets"):void {
        this.cartoonType = cartoonType;
        this.backFun = backFun;
        if(assetsName != "assets"){
            this.assets = RES.getRes(assetsName);
        }

        for (var i = 0; i < descStrArr.length; i++){
            var btn = new EToggleButton(this,this.imgNormalName,this.imgSelectName,this.onSelectBack,descStrArr[i],fontSize,cartoonType,assetsName);
            btn.setBindData(i);
            btn.x = btn.width*i;
            this.addChild(btn);
            this.btnArr.push(btn);

            if(i == 0){
                btn.setSelected(true);
                btn.setEnable(false);
            }
        }

    }

    private onSelectBack(data):void {
        this.retset();
        this.param.data = data;
        this.setSelectedIndex(data);
        this.backFun.apply(this.param.context, [this.param.data]);
    }

    //获得选中的index
    public getSelectedIndex():number{
        return this.isSelectIndex;
    }

    //设置选中的index
    public setSelectedIndex(index:number = 0):void{
        this.retset();
        this.btnArr[index].setSelected(true);
        this.isSelectIndex = index;
        this.btnArr[index].setEnable(false);
    }

    //设置绑定数据
    public setBindData(data):void{
        this.param.data = data;
    }

    //获取绑定数据
    public getBindData():any{
        return this.param.data;
    }

    private retset():void{
        for (var i = 0; i < this.descStrArr.length; i++){
            var btn = this.btnArr[i];
            btn.setSelected(false);
            btn.setEnable(true);
        }        
    }

}
