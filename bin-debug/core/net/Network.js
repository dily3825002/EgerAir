/**
  * 网络公共类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 存放网络公共方法
  * 注意：是异步请求
  */
var Network;
(function (Network) {
    //发送消息
    //url 网络地址
    //data exp "name='dily'&age:18"
    function sendInfo(url, urlData) {
        if (url === void 0) { url = ""; }
        if (urlData === void 0) { urlData = ""; }
        Global.waitPanel = new WaitPanel(1);
        GameConfig.gameScene().maskLayer.removeChildren();
        GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        // this.tipTF.text = "正在发送数据...";
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.GET;
        request.data = new egret.URLVariables(urlData);
        loader.load(request);
    }
    Network.sendInfo = sendInfo;
    //GET请求完成
    //发送消息 消息为 网址名称
    function onGetComplete(event) {
        GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
        Global.waitPanel = null;
        var loader = event.target;
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var data = loader.data;
        var data2 = eval("(" + data + ")");
        var notify = loader["_eventTarget"]._request.url;
        lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(notify, data2, false));
    }
    Network.onGetComplete = onGetComplete;
})(Network || (Network = {}));
//# sourceMappingURL=Network.js.map