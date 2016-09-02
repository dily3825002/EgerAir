  /**
	* 全局数据存储
	* by dily
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* 如果工程模块太大请分w文件或者分文件夹存储
	* 使用方法如：GlobalData.currentScore
    */
module GlobalData {

	/*********************公共全局变量**********************/
	//当前分数
	export var currentScore:number = 0;

	//最好分数
	export var bestScore:number = 0;

	//成绩比例
	export var rateNum:number = 0;	

	/*********************计时类全局变量**********************/
	//使用时间
	export var useTime:number = 0;

	//剩余时间
	export var lastTime:number = 0;

	//当前时间
	export var currentTime:number = 0;

	//最好时间
	export var bestTime:number = 0;

	/*********************战斗类全局变量**********************/
	//我的当前血量
	export var myCurHP:number = 0;

	//我的最高血量
	export var myMaxHP:number = 0;

	//我的攻击力
	export var myStrength:number = 0;

	//电脑的当前血量
	export var aiCurHP:number = 0;

	//电脑的最高血量
	export var aiMaxHP:number = 0;

	//电脑的攻击力
	export var aiStrength:number = 0;	

	/*********************其他全局变量**********************/
	//排行榜数据存储
	export var rankArr:Array<any> = [];	

	/*********************分享全局变量**********************/
	//title
	export var title:string = "";
	//desc
	export var desc:string = "";
	//link
	export var link:string = "";
	//imgUrl
	export var imgUrl:string = "";

	//-------------------自己的----------------------------------------
	//自己名字
	export var myName:string = "";

	//对手名字
	export var fightName:string = "";

	//电脑num
	export var aiNum:number = 0;

	export var doubleNum:number = 0;

	export var isBoss:boolean = false;

	export var bossName:string = "";


	export var myMaxHP:number = 5000;

	export var myCurHP:number = 5000;

	export var myStrength:number = 1000;		

	export var aiMaxHP:number = 4000;

	export var aiCurHP:number = 4000;

	export var aiStrength:number = 1500;		

	export var myAttackNum:number = 0;		
	export var aiAttackNum:number = 0;		

	export var winerNum:number = 0;		

	export var initIsVertical:boolean = false;	

	//如果横屏游戏置为true，反之false
	//修改egret_loader.js
	//egret.StageDelegate.getInstance().setDesignSize(800, 480);
	export var isVerticalGame:boolean = false;		
}