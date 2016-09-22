/**
 * 网络公共类
 * by dily
 * (c) copyright 2014 - 2035
 * All Rights Reserved.
 * 存放网络公共方法
 * 注意：是同步请求，不是异步
 */
var SocketManager;
(function (SocketManager) {
    var sock = new egret.WebSocket();
    //连接服务器
    function connectServer(host, port) {
        if (host === void 0) { host = ""; }
        if (port === void 0) { port = 80; }
        Global.waitPanel = new WaitPanel(1);
        GameConfig.gameScene().maskLayer.removeChildren();
        GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);
        this.sock = new egret.WebSocket();
        this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.sock.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.sock.connect(host, port);
    }
    SocketManager.connectServer = connectServer;
    //连接成功返回
    function onSocketOpen() {
        GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
        Global.waitPanel = null;
    }
    SocketManager.onSocketOpen = onSocketOpen;
    //消息返回后，会广播出去
    //Global.addEventListener("你发送的cmd名称",监听方法,this)
    function onReceiveMessage() {
        GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
        Global.waitPanel = null;
        var msg = this.sock.readUTF();
        var data = eval("(" + msg + ")");
        lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(data.cmd, data, false));
    }
    SocketManager.onReceiveMessage = onReceiveMessage;
    //向服务端发送消息
    function sendMessage(cmd) {
        if (cmd === void 0) { cmd = ""; }
        Global.waitPanel = new WaitPanel(1);
        GameConfig.gameScene().maskLayer.removeChildren();
        GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);
        this.sock.writeUTF(cmd);
    }
    SocketManager.sendMessage = sendMessage;
})(SocketManager || (SocketManager = {}));
//# sourceMappingURL=SocketManager.js.map