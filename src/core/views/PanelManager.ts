  /**
    * 面板管理类
    * by dily
    * (c) copyright false,0,0,2014 - 2035
    * All Rights Reserved. 
    * 面板的管理类
    */
module PanelManager {

    var startPanel:StartPanel;
    var gamePanel:GamePanel;
    var gameOverPanel:GameOverPanel;
	// 初始化所有面板
	export function initPanel():void{ 
		var _width=document.documentElement.clientWidth;
    	var _height=document.documentElement.clientHeight;
    	if(_width < _height){
    		GlobalData.initIsVertical = true;
    	}

        Global.addEventListener(MainNotify.openStartPanelNotify,this.openStartPanel,this)
        Global.addEventListener(MainNotify.closeStartPanelNotify,this.closeStartPanel,this)

        Global.addEventListener(MainNotify.openGamePanelNotify,this.openGamePanel,this)
        Global.addEventListener(MainNotify.closeGamePanelNotify,this.closeGamePanel,this)

        Global.addEventListener(MainNotify.openGameOverPanelNotify,this.openGameOverPanel,this)
        Global.addEventListener(MainNotify.closeGameOverPanelNotify,this.closeGameOverPanel,this)

	} 

	// 打开开始界面
	export function openStartPanel():void{ 
		if(this.startPanel == null){
			this.startPanel = new StartPanel();
			PopUpManager.addPopUp(this.startPanel,false,0,0,0);
		}
	} 
	// 关闭开始界面
	export function closeStartPanel():void{ 
		if(this.startPanel != null){
			PopUpManager.removePopUp(this.startPanel,3);
			this.startPanel = null;
		}
	} 

	// 打开游戏界面
	export function openGamePanel():void{ 
		if(this.gamePanel == null){
			this.gamePanel = new GamePanel();
			PopUpManager.addPopUp(this.gamePanel,false,0,0,3);
		}
	} 
	// 关闭游戏界面
	export function closeGamePanel():void{ 
		if(this.gamePanel != null){
			PopUpManager.removePopUp(this.gamePanel,3);
			this.gamePanel = null;
		}
	} 
	// 打开结束界面
	export function openGameOverPanel():void{ 
		if(this.gameOverPanel == null){
			this.gameOverPanel = new GameOverPanel();
			PopUpManager.addPopUp(this.gameOverPanel,false,0,0,3);
		}
	} 
	// 关闭结束界面
	export function closeGameOverPanel():void{ 
		if(this.gameOverPanel != null){
			PopUpManager.removePopUp(this.gameOverPanel,3);
			this.gameOverPanel = null;
		}
	} 
}


