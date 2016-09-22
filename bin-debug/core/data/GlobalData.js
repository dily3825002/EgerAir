/**
  * 全局数据存储
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 如果工程模块太大请分w文件或者分文件夹存储
  * 使用方法如：GlobalData.currentScore
  */
var GlobalData;
(function (GlobalData) {
    /*********************公共全局变量**********************/
    //当前分数
    GlobalData.currentScore = 0;
    //最好分数
    GlobalData.bestScore = 0;
    //成绩比例
    GlobalData.rateNum = 0;
    /*********************计时类全局变量**********************/
    //使用时间
    GlobalData.useTime = 0;
    //剩余时间
    GlobalData.lastTime = 0;
    //当前时间
    GlobalData.currentTime = 0;
    //最好时间
    GlobalData.bestTime = 0;
    /*********************战斗类全局变量**********************/
    //我的当前血量
    GlobalData.myCurHP = 0;
    //我的最高血量
    GlobalData.myMaxHP = 0;
    //我的攻击力
    GlobalData.myStrength = 0;
    //电脑的当前血量
    GlobalData.aiCurHP = 0;
    //电脑的最高血量
    GlobalData.aiMaxHP = 0;
    //电脑的攻击力
    GlobalData.aiStrength = 0;
    /*********************其他全局变量**********************/
    //排行榜数据存储
    GlobalData.rankArr = [];
    /*********************分享全局变量**********************/
    //title
    GlobalData.title = "";
    //desc
    GlobalData.desc = "";
    //link
    GlobalData.link = "";
    //imgUrl
    GlobalData.imgUrl = "";
    //-------------------自己的----------------------------------------
    //自己名字
    GlobalData.myName = "";
    //对手名字
    GlobalData.fightName = "";
    //电脑num
    GlobalData.aiNum = 0;
    GlobalData.doubleNum = 0;
    GlobalData.isBoss = false;
    GlobalData.bossName = "";
    GlobalData.myMaxHP = 5000;
    GlobalData.myCurHP = 5000;
    GlobalData.myStrength = 1000;
    GlobalData.aiMaxHP = 4000;
    GlobalData.aiCurHP = 4000;
    GlobalData.aiStrength = 1500;
    GlobalData.myAttackNum = 0;
    GlobalData.aiAttackNum = 0;
    GlobalData.winerNum = 0;
    GlobalData.initIsVertical = false;
    //如果横屏游戏置为true，反之false
    //修改egret_loader.js
    //egret.StageDelegate.getInstance().setDesignSize(800, 480);
    GlobalData.isVerticalGame = false;
})(GlobalData || (GlobalData = {}));
//# sourceMappingURL=GlobalData.js.map