  /**
	* 游戏配置文件
	* by dily
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* 存放游戏的配置数据
	* 比如：游戏界面尺寸、分享随机百分比、获取系统数据
    */
module MainNotify {

	//横屏竖屏切换
	export var onOrientationChange:string = "onOrientationChange";
	//陀螺仪监听
	export var onDeviceOrientation:string = "onDeviceOrientation";
	//摇一摇监听
	export var onDeviceMotion:string = "onDeviceMotion";
	//关闭提示
	export var closeAlertNotify:string = "closeAlertNotify";	
	//关闭分享
	export var closeShareNotify:string = "closeAlertNotify";
	//更新分享信息
	export var updateShareNotify:string = "updateShareNotify";

	/**面板开关事件*/
	//打开开始界面
	export var openStartPanelNotify:string = "openStartPanelNotify";
	//关闭开始界面
	export var closeStartPanelNotify:string = "closeStartPanelNotify";
	//打开游戏界面
	export var openGamePanelNotify:string = "openGamePanelNotify";
	//关闭游戏界面
	export var closeGamePanelNotify:string = "closeGamePanelNotify";
	//打开结束界面
	export var openGameOverPanelNotify:string = "openGameOverPanelNotify";
	//关闭结束界面
	export var closeGameOverPanelNotify:string = "closeGameOverPanelNotify";

	//打开设置界面
	export var openSetPanelNotify:string = "openSetPanelNotify";
	//关闭设置界面
	export var closeSetPanelNotify:string = "closeSetPanelNotify";
	//打开提示界面
	export var openAlertPanelNotify:string = "openAlertPanelNotify";
	//关闭提示界面
	export var closeAlertPanelNotify:string = "closeAlertPanelNotify";

}



