/**
 * 网络公共类
 * by dily
 * (c) copyright 2014 - 2035
 * All Rights Reserved. 
 * 存放网络公共方法 
 * 注意：是同步请求，不是异步
 */
module SocketManager {

    var sock: egret.WebSocket = new egret.WebSocket();

    //连接服务器
    export function connectServer(host: string = "", port: number = 80) {
        Global.waitPanel = new WaitPanel(1);
        GameConfig.gameScene().maskLayer.removeChildren();
        GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);

        this.sock = new egret.WebSocket();
        this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.sock.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);

        this.sock.connect(host, port);
    }

    //连接成功返回
    export function onSocketOpen(): void {
        GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
        Global.waitPanel = null;
    }

    //消息返回后，会广播出去
    //Global.addEventListener("你发送的cmd名称",监听方法,this)
    export function onReceiveMessage(): void {
        GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
        Global.waitPanel = null;
        var msg = this.sock.readUTF();
        var data = eval("(" + msg + ")")

        lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(data.cmd, data, false));
    }

    //向服务端发送消息
    export function sendMessage(cmd: string = ""): void {
        Global.waitPanel = new WaitPanel(1);
        GameConfig.gameScene().maskLayer.removeChildren();
        GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);

        this.sock.writeUTF(cmd);
    }
}



